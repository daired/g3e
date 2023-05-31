// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {readFileSync, writeFileSync, existsSync, mkdirSync} from 'fs';
import {join} from 'path';
const puppeteer = require('puppeteer');

import {enableProdMode} from '@angular/core';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {renderModuleFactory} from '@angular/platform-server';
import {LANGUAGES, FILE_NAMES} from './static.paths';
import {environment} from "./src/environments/environment";

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

const BROWSER_FOLDER = join(process.cwd(), 'browser');
const OUPUT_FOLDER = join(process.cwd(), 'output');

// Load the index.html file containing referances to your application bundle.
const index = readFileSync(join('browser', 'index.html'), 'utf8');

let previousRender = Promise.resolve();



/**
 *  Render HTML with angular universal
 */
LANGUAGES.forEach(lang => {
    FILE_NAMES.forEach(fileName => {
        const fullPath = join(BROWSER_FOLDER, lang, fileName);
        const urlPath = join(lang, fileName);

        // Make sure the directory structure is there
        if (!existsSync(fullPath)) {
            mkdirSync(fullPath);
        }

        // Writes rendered HTML to index.html, replacing the file if it already exists.
        previousRender = previousRender.then(_ => renderModuleFactory(AppServerModuleNgFactory, {
            document: index,
            url: urlPath,
            extraProviders: [
                provideModuleMap(LAZY_MODULE_MAP)
            ]
        })).then(html => {
            writeFileSync(join(fullPath, 'index.html'), html);
            console.log('Created html file for: ' + urlPath);
        });
    });
});


/**
 *  Render Images with puppeteer
 */

LANGUAGES.forEach(lang => {
    FILE_NAMES.forEach(fileName => {
        const fullPath = join(BROWSER_FOLDER, lang, fileName);
        const outputPath = join(OUPUT_FOLDER, fileName);

        // Make sure the directory structure is there
        if (!existsSync(outputPath)) {
            mkdirSync(outputPath);
        }

        if(fileName !== '/') {

            previousRender = previousRender.then(_ => {
                const browserOptions = {
                    headless: true,
                    executablePath: environment.browserPath,
                    ignoreHTTPSErrors: true,
                    // args: ['']
                };

                (async () => {
                    const browser = await puppeteer.launch(browserOptions);
                    const page = await browser.newPage();
                    // Set the "viewport" width and height
                    await page.setViewport({
                        width: environment.screen.width,
                        height: environment.screen.height
                    });
                    await page.goto('file://' + fullPath + '/index.html');

                    await page.screenshot({
                        path: outputPath + '/' + lang + '.png',
                        omitBackground: true,
                        });

                    // Get the "viewport" of the page, as reported by the page.
                    const dimensions = await page.evaluate(() => {
                        return {
                            width: document.documentElement.clientWidth,
                            height: document.documentElement.clientHeight,
                            deviceScaleFactor: window.devicePixelRatio
                        };
                    });

                    console.log('Created screenshot png in /dist/output' + fileName + '/' + lang + '.png');
                    console.log(dimensions);

                    await browser.close();
                })();
            });
        }
    });
});


# G3E - i18n string to image renderer

This system scales up the marketing content production pipeline.
The goal of g3e is provide a html/css developer friendly code structure
for language specific templating/ styling of translation strings in a configured bounding box.
The language and string identifier can be controlled via Angular routing i.e.
````http://localhost:4200/en/example-translation-key````

G3e can create multiple images at once and  automates 
the video production workflow step under usage of 
a valid stylesheet for a given language.

Languages and string keys can be controlled in the file `````static.paths.ts`````.
The paths will be used in the prerender script:
 1. Creates prerendered html folder structure in `````/dist/*````` (**angular-cli**, **ng-universal**, **webpack 4**).
 2. Launch headless Chrome or Chromium browser with **puppeteer** and take screenshot for all static paths except ``` '/' ``` .
    
    The generated images can be found in ```/dist/output/<translationKey>/<lang>.png```

To create image files of lokalise translation run the following command
```
npm run generate:images
```



### Requirements

Download and install <a href="https://nodejs.org/en/download/package-manager/">NodeJS 8+ </a>

<i>Optional but recommended:</i> 
Use <a href="https://github.com/creationix/nvm">nvm (Node Version Manager)</a> for full control of your installed Node Environment

### Install dependencies & run project 

Navigate to project root
```
cd path/to/project
```

Install project dependencies
```
npm install
```

To use production mode copy the environment config file ```/src/environments/environment.ts``` to  ```/src/environments/environment.prod.ts``` 
and set the production value to ```true```. It should look like this:
```typescript
export const environment: G3eConfig = {
    production: false,
    mobile: false,
    input_dir: './locale/', // not used yet
    screen: {
        width: 1920,
        height: 1080
    },
    browserPath: '/Applications/Chromium.app/Contents/MacOS/Chromium'

};
```

Start the project in development mode
```
npm start
```

export interface G3eConfig {
    production: boolean;
    mobile: boolean;
    input_dir: string;
    screen: {
        width: number,
        height: number
    };
    browserPath: string;
}


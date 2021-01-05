// this file uses features that eslint doesn't like :(

type NonNominalKeys<T> = { [K in keyof T]: K extends `_nominal_${infer _U}` ? never : K }[keyof T];

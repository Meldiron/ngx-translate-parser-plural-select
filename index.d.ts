import "core-js/es7/object";
export interface ICUPipeFunction {
    (value: any, options: string[], parameters: string[]): string;
}
export declare class TranslateICUCustomParser {
    private additionalPipes?;
    private pipeEntries;
    constructor(additionalPipes?: {
        [pipeName: string]: ICUPipeFunction;
    });
    private getPipes;
    interpolate(expr: string | Function, params?: any): string;
    getValue(target: any, key: string): any;
}
export declare class TranslateICUParser extends TranslateICUCustomParser {
    constructor();
}

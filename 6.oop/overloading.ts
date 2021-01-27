/**
 * Method overloading in typescript is hacky. Developer first needs to define
 * types, then manually check inputs in the actual function.
 */
class TestClass {
    someMethod(stringParameter: string): void;
    someMethod(numberParameter: number, stringParameter: string): void;

    someMethod(stringOrNumberParameter: any, stringParameter?: string): void {
        if (stringOrNumberParameter && typeof stringOrNumberParameter == "number")
            alert("Variant #2: numberParameter = " + stringOrNumberParameter + ", stringParameter = " + stringParameter);
        else
            alert("Variant #1: stringParameter = " + stringOrNumberParameter);
    }
}

// Otherwise we can overload return types
function getStringOrNum(getString: boolean) {
    if (getString) {
        return 'gg'
    } else {
        return 5
    }
}
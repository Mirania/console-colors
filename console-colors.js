module.exports = {
    // main effects
    bold: (message, ...optionalParams) => print(1,message,...optionalParams),
    black: (message, ...optionalParams) => print(30,message,...optionalParams),
    red: (message, ...optionalParams) => print(31,message,...optionalParams),
    green: (message, ...optionalParams) => print(32,message,...optionalParams),
    gold: (message, ...optionalParams) => print(33,message,...optionalParams),
    blue: (message, ...optionalParams) => print(34,message,...optionalParams),
    magenta: (message, ...optionalParams) => print(35,message,...optionalParams),
    cyan: (message, ...optionalParams) => print(36,message,...optionalParams),
    white: (message, ...optionalParams) => print(37,message,...optionalParams),
    grey: (message, ...optionalParams) => print(90,message,...optionalParams),
    gray: (message, ...optionalParams) => print(90,message,...optionalParams),
    ruby: (message, ...optionalParams) => print(91,message,...optionalParams),
    leaf: (message, ...optionalParams) => print(92,message,...optionalParams),
    yellow: (message, ...optionalParams) => print(93,message,...optionalParams),
    ocean: (message, ...optionalParams) => print(94,message,...optionalParams),
    pink: (message, ...optionalParams) => print(95,message,...optionalParams),
    sky: (message, ...optionalParams) => print(96,message,...optionalParams),
    light: (message, ...optionalParams) => print(97,message,...optionalParams),
    // other utils
    log: (message, ...optionalParams) => log(message, ...optionalParams),
    format: (aStyle, message) => format(aStyle, message),
};

// ------------- inherit --------------

for (i in console) {
    if (i !== "log") module.exports[i] = console[i];
}

// ------------ internals -------------

const log = (text, ...params) => { // no predetermined colors
    console.log(replaceResets(text, reset()), ...params, reset());
}

const print = (num, text, ...params) => { // predetermined color
    console.log(effect(num)+replaceResets(text, effect(num)), ...params, reset());
}

const format = (st, text) => { // returns a block of text with the intended colors
    let formatting = "";

    if (st.text) {
        let idx = getTextColorNumber(st.text);
        if (idx!=-1) formatting += effect(idx);
    }

    if (!(st.bg && st.background)) { // having both is invalid, ignore
        if (st.bg) {
            let idx = getBackgroundNumber(st.bg);
            if (idx!=-1) formatting += effect(idx);
        }
        if (st.background) {
            let idx = getBackgroundNumber(st.background);
            if (idx!=-1) formatting += effect(idx);
        }
    }

    return formatting+prepareString(text)+reset();
}

const getBackgroundNumber = (name) => {
    let bgStyles = ["black","red","green","gold","blue","magenta","cyan","white",
                      "grey","gray","ruby","leaf","yellow","ocean","pink","sky","light"];

    let indexes = [30,31,32,33,34,35,36,37,90,90,91,92,93,94,95,96,97];

    let idx = bgStyles.indexOf(name);
    if (idx==-1) return idx; else return indexes[idx]+10;
}

const getTextColorNumber = (name) => {
    let textStyles = ["black","red","green","gold","blue","magenta","cyan","white",
                      "grey","gray","ruby","leaf","yellow","ocean","pink","sky","light","bold"];

    let indexes = [30,31,32,33,34,35,36,37,90,90,91,92,93,94,95,96,97,1];

    let idx = textStyles.indexOf(name);
    if (idx==-1) return idx; else return indexes[idx];
}

const effect = (num) => "["+num+"m"; //  = \x1b

const reset = () => effect(0);

const prepareString = (str) => {
    if (typeof str === "object") return JSON.stringify(str);
    else if (str === null) return "null";
    else if (typeof str === "undefined") return "undefined";
    else return str.toString();
}

const replaceResets = (str, f) => {
    return prepareString(str).replace(/\[0m/g, reset()+f); // hacky way to fix log() with format()
}
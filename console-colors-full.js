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
    slog: (aStyle, message, ...optionalParams) => logSpecificStyle(aStyle, message, ...optionalParams),
    format: (aStyle, message) => format(aStyle, message),
    // config
    colorBackground: (bool) => colorBackground(bool),   
    setStyle: (obj) => setStyle(obj),
    clearStyle: () => clearStyle()
};

// ------------- inherit --------------

// these properties won't be shown/autocompleted by the IDE if added dynamically

module.exports.debug = console.debug;
module.exports.info = console.info;
module.exports.warn = console.warn;
module.exports.error = console.error;
module.exports.dir = console.dir;
module.exports.time = console.time;
module.exports.timeEnd = console.timeEnd;
module.exports.trace = console.trace;
module.exports.assert = console.assert;
module.exports.clear = console.clear;
module.exports.count = console.count;
module.exports.countReset = console.countReset;
module.exports.group = console.group;
module.exports.groupCollapsed = console.groupCollapsed;
module.exports.groupEnd = console.groupEnd;
module.exports.Console = console.Console;
module.exports.dirxml = console.dirxml;
module.exports.table = console.table;
module.exports.markTimeline = console.markTimeline;
module.exports.profile = console.profile;
module.exports.profileEnd = console.profileEnd;
module.exports.timeline = console.timeline;
module.exports.timelineEnd = console.timelineEnd;
module.exports.timeStamp = console.timeStamp;
module.exports.context = console.context;

// -------------- state ---------------

let background = false; // color the background instead of text?

const colorBackground = (bool) => {
    if (bool===true) background = true; 
    if (bool===false) background = false;
}

let style = {}; // style to use, if defined

const setStyle = (obj) => {
    style = {};

    if (obj.text) {
        let idx = getTextColorNumber(obj.text);
        if (idx!=-1) style.text = idx;
    }

    if (obj.bg && obj.background) return; // having both is invalid, ignore

    if (obj.bg) {
        let idx = getBackgroundNumber(obj.bg);
        if (idx!=-1) style.background = idx;
    }

    if (obj.background) {
        let idx = getBackgroundNumber(obj.background);
        if (idx!=-1) style.background = idx;
    }
}

const clearStyle = () => style = {};

// ------------ internals -------------

const log = (text, ...params) => { // no predetermined colors
    let formatting = "";

    if (style.text) formatting += effect(style.text);
    if (style.background) formatting += effect(style.background);

    console.log(formatting+replaceResets(text, formatting), ...params, reset());
}

const logSpecificStyle = (st, text, ...params) => {
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

    console.log(formatting+replaceResets(text, formatting), ...params, reset());
}

const print = (num, text, ...params) => { // some predetermined colors
    let formatting = "";

    if (background && num!=1) { // bold(1) is special - it has no bg counterpart
        formatting += effect(num+10);
        if (style.text) formatting += effect(style.text);
    } else {
        formatting += effect(num);
        if (style.background) formatting += effect(style.background);
    }

    console.log(formatting+replaceResets(text, formatting), ...params, reset());
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
    return prepareString(str).replace(/\[0m/g, reset()+f); // hacky way to fix log() with format() + setStyle
}

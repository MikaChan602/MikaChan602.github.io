"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStr = void 0;
function splitStr(str) {
    const separators = /[\s,;]+/; // 逗號、分號、空白頓號作為分隔符
    const arr = str.split(separators);
    return arr;
}
exports.splitStr = splitStr;

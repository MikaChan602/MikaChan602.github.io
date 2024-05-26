"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStr = void 0;
function splitStr(str) {
    const separators = /[,;\s、\r?\n]+/; // 逗號、分號、空白、頓號、換行作為分隔符
    const arr = str.split(separators);
    return arr;
}
exports.splitStr = splitStr;

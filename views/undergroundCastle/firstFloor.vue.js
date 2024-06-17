"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};
const hour = (0, vue_1.ref)(0);
const minute = (0, vue_1.ref)(0);
const second = (0, vue_1.ref)(0);
(0, vue_1.onMounted)(() => {
    const interval = setInterval(() => {
        const date = new Date();
        minute.value = date.getMinutes() * 6;
        // 每一分鐘是6度
        second.value = date.getSeconds() * 6;
        // 每秒鐘是6度
        hour.value = ((date.getHours() % 12) / 12) * 360 + minute.value / 12;
        // 1. 先將24小時轉12小時制
        // 2. 除以12算出一小時度數
        // 3. 再乘上度數算出每小時度數 ＋ 分鐘數走的度數，但度數要再除以12
        // 因為一分鐘走一圈有12個單位，要算出分針走一個單位要移動多少度數
        // console.log(minute.value, second.value);
    }, 1000);
});
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrapper") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("clock") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("circle") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("centre") }));
    for (const [n, key] of __VLS_getVForSourceType((__VLS_ctx.range(13, 24)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("outerNum transNum") }, { style: ((`--i : ` + (key + 1))) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (n);
        // @ts-ignore
        [range,];
    }
    for (const [n] of __VLS_getVForSourceType((60))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("dot") }, { style: ((`--i : ` + n)) }));
    }
    for (const [n] of __VLS_getVForSourceType((12))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("hourLine") }, { style: ((`--i : ` + n)) }));
    }
    for (const [n] of __VLS_getVForSourceType((12))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("star1") }, { style: ((`--i : ` + n)) }));
    }
    for (const [n] of __VLS_getVForSourceType((12))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("star2") }, { style: ((`--i : ` + n)) }));
    }
    for (const [n] of __VLS_getVForSourceType((12))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("innerNum") }, { style: ((`--i : ` + n)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (n);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("hands") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("hour") }, { style: (({ transform: 'rotate(' + __VLS_ctx.hour + 'deg)' })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("decoration") }));
    // @ts-ignore
    [hour,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("minute") }, { style: (({ transform: 'rotate(' + __VLS_ctx.minute + 'deg)' })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("decoration") }));
    // @ts-ignore
    [minute,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("point") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("second") }, { style: (({ transform: 'rotate(' + __VLS_ctx.second + 'deg)' })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("line one") }));
    // @ts-ignore
    [second,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("line two") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("line three") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("line four") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("line five") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("circlePoint") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("innerPoint") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['wrapper'];
        __VLS_styleScopedClasses['clock'];
        __VLS_styleScopedClasses['circle'];
        __VLS_styleScopedClasses['centre'];
        __VLS_styleScopedClasses['outerNum'];
        __VLS_styleScopedClasses['transNum'];
        __VLS_styleScopedClasses['dot'];
        __VLS_styleScopedClasses['hourLine'];
        __VLS_styleScopedClasses['star1'];
        __VLS_styleScopedClasses['star2'];
        __VLS_styleScopedClasses['innerNum'];
        __VLS_styleScopedClasses['hands'];
        __VLS_styleScopedClasses['hour'];
        __VLS_styleScopedClasses['decoration'];
        __VLS_styleScopedClasses['minute'];
        __VLS_styleScopedClasses['decoration'];
        __VLS_styleScopedClasses['point'];
        __VLS_styleScopedClasses['second'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['one'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['two'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['three'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['four'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['five'];
        __VLS_styleScopedClasses['circlePoint'];
        __VLS_styleScopedClasses['innerPoint'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (yield Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
        setup() {
            return {
                range: range,
                hour: hour,
                minute: minute,
                second: second,
            };
        },
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
});
;

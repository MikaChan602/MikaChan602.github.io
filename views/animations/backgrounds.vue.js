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
const backgrounds_1 = require("./components/backgrounds");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const now = (0, vue_1.ref)("Flare");
const animationBG = (0, vue_1.reactive)({
    data: [
        {
            name: "Flare",
        },
        {
            name: "Snow",
        },
    ],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("bgWrapper") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("tags") }));
    for (const [item, key] of __VLS_getVForSourceType((__VLS_ctx.animationBG.data))) {
        const __VLS_0 = {}.ElCheckTag;
        ({}.ElCheckTag);
        ({}.ElCheckTag);
        __VLS_components.ElCheckTag;
        __VLS_components.elCheckTag;
        __VLS_components.ElCheckTag;
        __VLS_components.elCheckTag;
        // @ts-ignore
        [ElCheckTag, ElCheckTag,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onClick': {} }, { type: ("warning") })));
        const __VLS_2 = __VLS_1(Object.assign({ 'onClick': {} }, { type: ("warning") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}(Object.assign({ 'onClick': {} }, { type: ("warning") })));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (...[$event]) => {
                __VLS_ctx.now = item.name;
                // @ts-ignore
                [animationBG, now,];
            }
        };
        (item.name);
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_3;
        let __VLS_4;
    }
    const __VLS_8 = {}.ElImage;
    ({}.ElImage);
    __VLS_components.ElImage;
    __VLS_components.elImage;
    // @ts-ignore
    [ElImage,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ src: (('https://picsum.photos/1500/1000')), fit: (('cover')), }));
    const __VLS_10 = __VLS_9({ src: (('https://picsum.photos/1500/1000')), fit: (('cover')), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ src: (('https://picsum.photos/1500/1000')), fit: (('cover')), }));
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_14 = {}.Flare;
    ({}.Flare);
    __VLS_components.Flare;
    // @ts-ignore
    [backgrounds_1.Flare,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.now === 'Flare'));
    // @ts-ignore
    [now, vShow,];
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.now === 'Snow'));
    // @ts-ignore
    [now, vShow,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['bgWrapper'];
        __VLS_styleScopedClasses['tags'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (yield Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
        setup() {
            return {
                Flare: backgrounds_1.Flare,
                now: now,
                animationBG: animationBG,
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

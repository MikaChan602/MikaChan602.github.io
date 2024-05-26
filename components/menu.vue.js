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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vue_router_1 = require("vue-router");
const router_1 = __importDefault(require("../router"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const menu = (0, vue_1.reactive)({ data: [...router_1.default.options.routes] });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("menu") }));
    const __VLS_0 = {}.ElMenu;
    ({}.ElMenu);
    ({}.ElMenu);
    __VLS_components.ElMenu;
    __VLS_components.elMenu;
    __VLS_components.ElMenu;
    __VLS_components.elMenu;
    // @ts-ignore
    [ElMenu, ElMenu,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ class: ("el-menu-demo") }, { mode: ("horizontal") })));
    const __VLS_2 = __VLS_1(Object.assign({ class: ("el-menu-demo") }, { mode: ("horizontal") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}(Object.assign({ class: ("el-menu-demo") }, { mode: ("horizontal") })));
    for (const [parent, key] of __VLS_getVForSourceType((__VLS_ctx.menu.data))) {
        const __VLS_6 = {}.ElSubMenu;
        ({}.ElSubMenu);
        ({}.ElSubMenu);
        __VLS_components.ElSubMenu;
        __VLS_components.elSubMenu;
        __VLS_components.ElSubMenu;
        __VLS_components.elSubMenu;
        // @ts-ignore
        [ElSubMenu, ElSubMenu,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ index: ((parent.name)), }));
        const __VLS_8 = __VLS_7({ index: ((parent.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ index: ((parent.name)), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            (__VLS_11.slots).title;
            (parent.name);
            // @ts-ignore
            [menu,];
        }
        for (const [child, key2] of __VLS_getVForSourceType((parent.children))) {
            const __VLS_12 = {}.ElMenuItem;
            ({}.ElMenuItem);
            ({}.ElMenuItem);
            __VLS_components.ElMenuItem;
            __VLS_components.elMenuItem;
            __VLS_components.ElMenuItem;
            __VLS_components.elMenuItem;
            // @ts-ignore
            [ElMenuItem, ElMenuItem,];
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ index: ((key + '-' + key2)), }));
            const __VLS_14 = __VLS_13({ index: ((key + '-' + key2)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({ index: ((key + '-' + key2)), }));
            const __VLS_18 = {}.RouterLink;
            ({}.RouterLink);
            ({}.RouterLink);
            __VLS_components.RouterLink;
            __VLS_components.RouterLink;
            // @ts-ignore
            [vue_router_1.RouterLink, vue_router_1.RouterLink,];
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ((child.path)), }));
            const __VLS_20 = __VLS_19({ to: ((child.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            ({}({ to: ((child.path)), }));
            (child.name);
            (__VLS_23.slots).default;
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            (__VLS_17.slots).default;
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        }
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['menu'];
        __VLS_styleScopedClasses['el-menu-demo'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (yield Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
        setup() {
            return {
                RouterLink: vue_router_1.RouterLink,
                menu: menu,
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

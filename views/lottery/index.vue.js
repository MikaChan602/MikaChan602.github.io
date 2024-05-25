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
const utils_1 = require("../../utils/utils");
const element_plus_1 = require("element-plus");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const lotteryStr = (0, vue_1.ref)("");
const lotteryList = (0, vue_1.reactive)({ data: [] });
const fixedData = (0, vue_1.reactive)({ data: [] });
const showInput = (0, vue_1.ref)(true);
const btnDisable = (0, vue_1.ref)(false);
const listOne = (0, vue_1.reactive)({ data: [] }); // 尚未抽出
const listTwo = (0, vue_1.reactive)({ data: [] }); // 已抽出
// 分類
(0, vue_1.watchEffect)(() => {
    lotteryList.data = (0, utils_1.splitStr)(lotteryStr.value);
});
// 以此列表開始抽獎
// ! 把上部分隱藏
function startLottery() {
    if (lotteryList.data.length < 2) {
        element_plus_1.ElMessage.warning("至少要有兩個項目");
        return;
    }
    showInput.value = false;
    fixedData.data = lotteryList.data;
    listOne.data = [...lotteryList.data];
    btnDisable.value = true;
    // 存 local storage
    localStorage.setItem("listOne", JSON.stringify(listOne.data));
    localStorage.setItem("allData", JSON.stringify(fixedData.data));
    console.log(localStorage.getItem("allData"));
}
/** 清除資料*/
function clear() {
    // 清除local storage
    localStorage.setItem("listTwo", JSON.stringify([]));
    localStorage.setItem("listOne", JSON.stringify([]));
    localStorage.setItem("allData", JSON.stringify([]));
    // 重製上方搜尋
    lotteryStr.value = "";
    lotteryList.data = [];
    // 重製陣列
    fixedData.data = [];
    listOne.data = [];
    listTwo.data = [];
    // 重製狀態
    showInput.value = true;
    btnDisable.value = false;
}
/** 抽籤 */
function drawLots() {
    if (listOne.data.length === 0) {
        element_plus_1.ElMessage.error("已抽完了唷！");
        return;
    }
    // 名單總長
    const arrLen = listOne.data.length;
    // 隨機碼
    const random = Math.floor(Math.random() * arrLen);
    console.log("random", random);
    element_plus_1.ElMessage.success(`抽出的是${listOne.data[random]}`);
    // 處理資料
    listTwo.data.push(listOne.data[random]);
    listOne.data.splice(random, 1);
    // 處理localStorage
    localStorage.setItem("listOne", JSON.stringify(listOne.data));
    localStorage.setItem("listTwo", JSON.stringify(listTwo.data));
}
(0, vue_1.onMounted)(() => {
    const one = JSON.parse(localStorage.getItem("listOne")) || [];
    const two = JSON.parse(localStorage.getItem("listTwo")) || [];
    const allData = JSON.parse(localStorage.getItem("allData")) || [];
    console.log(allData.length);
    if (allData.length !== 0) {
        fixedData.data = allData;
        listOne.data = one;
        showInput.value = false;
    }
    if (two !== null) {
        listTwo.data = two;
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.ElForm;
    ({}.ElForm);
    ({}.ElForm);
    __VLS_components.ElForm;
    __VLS_components.elForm;
    __VLS_components.ElForm;
    __VLS_components.elForm;
    // @ts-ignore
    [ElForm, ElForm,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ labelWidth: ("auto") }, { style: ({}) })));
    const __VLS_2 = __VLS_1(Object.assign({ labelWidth: ("auto") }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}(Object.assign({ labelWidth: ("auto") }, { style: ({}) })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_6 = {}.ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("請輸入獎品"), }));
    const __VLS_8 = __VLS_7({ label: ("請輸入獎品"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ label: ("請輸入獎品"), }));
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.showInput));
    const __VLS_12 = {}.ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("textarea"), autosize: (({ minRows: 2, maxRows: 4 })), placeholder: ("請輸入獎品，可使用,;作區隔"), modelValue: ((__VLS_ctx.lotteryStr)), }));
    const __VLS_14 = __VLS_13({ type: ("textarea"), autosize: (({ minRows: 2, maxRows: 4 })), placeholder: ("請輸入獎品，可使用,;作區隔"), modelValue: ((__VLS_ctx.lotteryStr)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ type: ("textarea"), autosize: (({ minRows: 2, maxRows: 4 })), placeholder: ("請輸入獎品，可使用,;作區隔"), modelValue: ((__VLS_ctx.lotteryStr)), }));
    // @ts-ignore
    [vShow, showInput, lotteryStr,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_18 = {}.ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18(Object.assign({ 'onClick': {} }, { type: ("primary"), disabled: ((__VLS_ctx.fixedData.data.length !== 0)) })));
    const __VLS_20 = __VLS_19(Object.assign({ 'onClick': {} }, { type: ("primary"), disabled: ((__VLS_ctx.fixedData.data.length !== 0)) }), ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}(Object.assign({ 'onClick': {} }, { type: ("primary"), disabled: ((__VLS_ctx.fixedData.data.length !== 0)) })));
    let __VLS_24;
    const __VLS_25 = {
        onClick: (__VLS_ctx.startLottery)
    };
    // @ts-ignore
    [fixedData, startLottery,];
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    let __VLS_21;
    let __VLS_22;
    const __VLS_26 = {}.ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26(Object.assign({ 'onClick': {} }, { type: ("danger") })));
    const __VLS_28 = __VLS_27(Object.assign({ 'onClick': {} }, { type: ("danger") }), ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}(Object.assign({ 'onClick': {} }, { type: ("danger") })));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (__VLS_ctx.clear)
    };
    // @ts-ignore
    [clear,];
    (__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    let __VLS_29;
    let __VLS_30;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_34 = {}.ElDivider;
    ({}.ElDivider);
    ({}.ElDivider);
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    // @ts-ignore
    [ElDivider, ElDivider,];
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ contentPosition: ("left"), }));
    const __VLS_36 = __VLS_35({ contentPosition: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    ({}({ contentPosition: ("left"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ style: ({}) }));
    (__VLS_ctx.fixedData.data.length);
    // @ts-ignore
    [fixedData,];
    (__VLS_39.slots).default;
    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.fixedData.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        const __VLS_40 = {}.ElTag;
        ({}.ElTag);
        ({}.ElTag);
        __VLS_components.ElTag;
        __VLS_components.elTag;
        __VLS_components.ElTag;
        __VLS_components.elTag;
        // @ts-ignore
        [ElTag, ElTag,];
        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ size: ("large"), effect: ("plain"), }));
        const __VLS_42 = __VLS_41({ size: ("large"), effect: ("plain"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
        ({}({ size: ("large"), effect: ("plain"), }));
        (item);
        // @ts-ignore
        [fixedData,];
        (__VLS_45.slots).default;
        const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    }
    const __VLS_46 = {}.ElDivider;
    ({}.ElDivider);
    ({}.ElDivider);
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    // @ts-ignore
    [ElDivider, ElDivider,];
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ contentPosition: ("left"), }));
    const __VLS_48 = __VLS_47({ contentPosition: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    ({}({ contentPosition: ("left"), }));
    (__VLS_51.slots).default;
    const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
    const __VLS_52 = {}.ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(Object.assign(Object.assign({ 'onClick': {} }, { type: ("success") }), { style: ({}) })));
    const __VLS_54 = __VLS_53(Object.assign(Object.assign({ 'onClick': {} }, { type: ("success") }), { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_53));
    ({}(Object.assign(Object.assign({ 'onClick': {} }, { type: ("success") }), { style: ({}) })));
    let __VLS_58;
    const __VLS_59 = {
        onClick: (__VLS_ctx.drawLots)
    };
    // @ts-ignore
    [drawLots,];
    (__VLS_57.slots).default;
    const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    let __VLS_55;
    let __VLS_56;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("twoCard") }));
    const __VLS_60 = {}.ElCard;
    ({}.ElCard);
    ({}.ElCard);
    __VLS_components.ElCard;
    __VLS_components.elCard;
    __VLS_components.ElCard;
    __VLS_components.elCard;
    // @ts-ignore
    [ElCard, ElCard,];
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(Object.assign({ style: ({}) })));
    const __VLS_62 = __VLS_61(Object.assign({ style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}(Object.assign({ style: ({}) })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_65.slots).header;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("card-header") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    for (const [item, key] of __VLS_getVForSourceType((__VLS_ctx.listOne.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ key: ((item)), });
        __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.listOne.data.length !== 0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (key + 1);
        // @ts-ignore
        [vShow, listOne, listOne,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.listOne.data.length === 0));
    // @ts-ignore
    [vShow, listOne,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_65.slots).footer;
        (__VLS_ctx.listOne.data.length);
        // @ts-ignore
        [listOne,];
    }
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    const __VLS_66 = {}.ElCard;
    ({}.ElCard);
    ({}.ElCard);
    __VLS_components.ElCard;
    __VLS_components.elCard;
    __VLS_components.ElCard;
    __VLS_components.elCard;
    // @ts-ignore
    [ElCard, ElCard,];
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_71.slots).header;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("card-header") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    for (const [item2, key] of __VLS_getVForSourceType((__VLS_ctx.listTwo.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ key: ((key)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (key + 1);
        // @ts-ignore
        [listTwo,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item2);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_71.slots).footer;
        (__VLS_ctx.listTwo.data.length);
        // @ts-ignore
        [listTwo,];
    }
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['twoCard'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['card-header'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (yield Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
        setup() {
            return {
                lotteryStr: lotteryStr,
                fixedData: fixedData,
                showInput: showInput,
                listOne: listOne,
                listTwo: listTwo,
                startLottery: startLottery,
                clear: clear,
                drawLots: drawLots,
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

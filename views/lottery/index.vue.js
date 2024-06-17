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
    // console.log(localStorage.getItem("allData"));
}
/** 清除資料*/
function clear() {
    element_plus_1.ElMessageBox.confirm("如確定清除資料需重新填寫資料，確定要清除嗎？", "Warning", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
    })
        .then(() => {
        (0, element_plus_1.ElMessage)({
            type: "success",
            message: "已清除",
        });
        // TODO:追加防呆
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
    })
        .catch(() => {
        (0, element_plus_1.ElMessage)({
            type: "info",
            message: "取消",
        });
    });
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
/** 既有列表重抽 */
function handleReset() {
    console.log("重抽");
    element_plus_1.ElMessageBox.confirm("將重設抽獎中項目，確定重製?", "Warning", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
    })
        .then(() => {
        (0, element_plus_1.ElMessage)({
            type: "success",
            message: "已重製",
        });
        // 處理資料
        listOne.data = [...listOne.data, ...listTwo.data];
        listTwo.data = [];
        console.log("listone", listOne.data);
        console.log("listtwo", listTwo.data);
        // 處理localStorage
        localStorage.setItem("listOne", JSON.stringify(listOne.data));
        localStorage.setItem("listTwo", JSON.stringify(listTwo.data));
        element_plus_1.ElMessage.success("可以重抽了唷！");
    })
        .catch(() => {
        (0, element_plus_1.ElMessage)({
            type: "info",
            message: "取消",
        });
    });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrapper") }, { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    const __VLS_0 = {}.ElDivider;
    ({}.ElDivider);
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    // @ts-ignore
    [ElDivider,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ borderStyle: ("dashed") }, { style: ({}) })));
    const __VLS_2 = __VLS_1(Object.assign({ borderStyle: ("dashed") }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}(Object.assign({ borderStyle: ("dashed") }, { style: ({}) })));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrapper") }));
    const __VLS_6 = {}.ElRow;
    ({}.ElRow);
    ({}.ElRow);
    __VLS_components.ElRow;
    __VLS_components.elRow;
    __VLS_components.ElRow;
    __VLS_components.elRow;
    // @ts-ignore
    [ElRow, ElRow,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ gutter: ((20)), }));
    const __VLS_8 = __VLS_7({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ gutter: ((20)), }));
    const __VLS_12 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) })));
    const __VLS_14 = __VLS_13(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("list") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    (__VLS_ctx.fixedData.data.length);
    // @ts-ignore
    [fixedData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.fixedData.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        (item);
        // @ts-ignore
        [fixedData,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.fixedData.data.length === 0));
    // @ts-ignore
    [fixedData, vShow,];
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) })));
    const __VLS_20 = __VLS_19(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("list") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    (__VLS_ctx.listOne.data.length);
    // @ts-ignore
    [listOne,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.listOne.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        (item);
        // @ts-ignore
        [listOne,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.listOne.data.length === 0));
    // @ts-ignore
    [vShow, listOne,];
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    const __VLS_24 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) })));
    const __VLS_26 = __VLS_25(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}(Object.assign({ span: ((8)), xs: ((24)) }, { style: ({}) })));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("list") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    (__VLS_ctx.listTwo.data.length);
    // @ts-ignore
    [listTwo,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.listTwo.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        (item);
        // @ts-ignore
        [listTwo,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("none") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.listTwo.data.length === 0));
    // @ts-ignore
    [vShow, listTwo,];
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrapper") }, { style: ({}) }));
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.fixedData.data.length == 0));
    const __VLS_30 = {}.ElDivider;
    ({}.ElDivider);
    ({}.ElDivider);
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    // @ts-ignore
    [ElDivider, ElDivider,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ borderStyle: ("dashed"), contentPosition: ("left"), }));
    const __VLS_32 = __VLS_31({ borderStyle: ("dashed"), contentPosition: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ borderStyle: ("dashed"), contentPosition: ("left"), }));
    // @ts-ignore
    [fixedData, vShow,];
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    const __VLS_36 = {}.ElRow;
    ({}.ElRow);
    ({}.ElRow);
    __VLS_components.ElRow;
    __VLS_components.elRow;
    __VLS_components.ElRow;
    __VLS_components.elRow;
    // @ts-ignore
    [ElRow, ElRow,];
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ gutter: ((20)), }));
    const __VLS_38 = __VLS_37({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ gutter: ((20)), }));
    const __VLS_42 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42(Object.assign({ span: ((20)), xs: ((24)) }, { style: ({}) })));
    const __VLS_44 = __VLS_43(Object.assign({ span: ((20)), xs: ((24)) }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}(Object.assign({ span: ((20)), xs: ((24)) }, { style: ({}) })));
    const __VLS_48 = {}.ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({}));
    const __VLS_54 = {}.ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ type: ("textarea"), autosize: (({ minRows: 2, maxRows: 5 })), placeholder: ("請輸入獎品，可使用,;作區隔"), modelValue: ((__VLS_ctx.lotteryStr)), disabled: ((__VLS_ctx.fixedData.data.length !== 0)), }));
    const __VLS_56 = __VLS_55({ type: ("textarea"), autosize: (({ minRows: 2, maxRows: 5 })), placeholder: ("請輸入獎品，可使用,;作區隔"), modelValue: ((__VLS_ctx.lotteryStr)), disabled: ((__VLS_ctx.fixedData.data.length !== 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ type: ("textarea"), autosize: (({ minRows: 2, maxRows: 5 })), placeholder: ("請輸入獎品，可使用,;作區隔"), modelValue: ((__VLS_ctx.lotteryStr)), disabled: ((__VLS_ctx.fixedData.data.length !== 0)), }));
    // @ts-ignore
    [fixedData, lotteryStr,];
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    const __VLS_60 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(Object.assign({ span: ((4)), xs: ((24)) }, { style: ({}) })));
    const __VLS_62 = __VLS_61(Object.assign({ span: ((4)), xs: ((24)) }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}(Object.assign({ span: ((4)), xs: ((24)) }, { style: ({}) })));
    const __VLS_66 = {}.ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66(Object.assign({ 'onClick': {} }, { type: ("primary"), plain: (true), disabled: ((__VLS_ctx.fixedData.data.length !== 0)) })));
    const __VLS_68 = __VLS_67(Object.assign({ 'onClick': {} }, { type: ("primary"), plain: (true), disabled: ((__VLS_ctx.fixedData.data.length !== 0)) }), ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}(Object.assign({ 'onClick': {} }, { type: ("primary"), plain: (true), disabled: ((__VLS_ctx.fixedData.data.length !== 0)) })));
    let __VLS_72;
    const __VLS_73 = {
        onClick: (__VLS_ctx.startLottery)
    };
    // @ts-ignore
    [fixedData, startLottery,];
    (__VLS_71.slots).default;
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    let __VLS_69;
    let __VLS_70;
    (__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrapper") }, { style: ({}) }));
    const __VLS_74 = {}.ElDivider;
    ({}.ElDivider);
    __VLS_components.ElDivider;
    __VLS_components.elDivider;
    // @ts-ignore
    [ElDivider,];
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
    const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({}));
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("buttons") }));
    const __VLS_80 = {}.ElRow;
    ({}.ElRow);
    ({}.ElRow);
    __VLS_components.ElRow;
    __VLS_components.elRow;
    __VLS_components.ElRow;
    __VLS_components.elRow;
    // @ts-ignore
    [ElRow, ElRow,];
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ gutter: ((20)), }));
    const __VLS_82 = __VLS_81({ gutter: ((20)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ gutter: ((20)), }));
    const __VLS_86 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ span: ((8)), }));
    const __VLS_88 = __VLS_87({ span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ span: ((8)), }));
    const __VLS_92 = {}.ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("danger") }), { class: ("btn") })));
    const __VLS_94 = __VLS_93(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("danger") }), { class: ("btn") }), ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("danger") }), { class: ("btn") })));
    let __VLS_98;
    const __VLS_99 = {
        onClick: (__VLS_ctx.clear)
    };
    // @ts-ignore
    [clear,];
    (__VLS_97.slots).default;
    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    let __VLS_95;
    let __VLS_96;
    (__VLS_91.slots).default;
    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    const __VLS_100 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ span: ((8)), }));
    const __VLS_102 = __VLS_101({ span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    ({}({ span: ((8)), }));
    const __VLS_106 = {}.ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("primary") }), { class: ("btn") })));
    const __VLS_108 = __VLS_107(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("primary") }), { class: ("btn") }), ...__VLS_functionalComponentArgsRest(__VLS_107));
    ({}(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("primary") }), { class: ("btn") })));
    let __VLS_112;
    const __VLS_113 = {
        onClick: (__VLS_ctx.drawLots)
    };
    // @ts-ignore
    [drawLots,];
    (__VLS_111.slots).default;
    const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
    let __VLS_109;
    let __VLS_110;
    (__VLS_105.slots).default;
    const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
    const __VLS_114 = {}.ElCol;
    ({}.ElCol);
    ({}.ElCol);
    __VLS_components.ElCol;
    __VLS_components.elCol;
    __VLS_components.ElCol;
    __VLS_components.elCol;
    // @ts-ignore
    [ElCol, ElCol,];
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ span: ((8)), }));
    const __VLS_116 = __VLS_115({ span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    ({}({ span: ((8)), }));
    const __VLS_120 = {}.ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("success") }), { class: ("btn") })));
    const __VLS_122 = __VLS_121(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("success") }), { class: ("btn") }), ...__VLS_functionalComponentArgsRest(__VLS_121));
    ({}(Object.assign(Object.assign({ 'onClick': {} }, { plain: (true), type: ("success") }), { class: ("btn") })));
    let __VLS_126;
    const __VLS_127 = {
        onClick: (__VLS_ctx.handleReset)
    };
    // @ts-ignore
    [handleReset,];
    (__VLS_125.slots).default;
    const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
    let __VLS_123;
    let __VLS_124;
    (__VLS_119.slots).default;
    const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
    (__VLS_85.slots).default;
    const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['wrapper'];
        __VLS_styleScopedClasses['wrapper'];
        __VLS_styleScopedClasses['list'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['none'];
        __VLS_styleScopedClasses['list'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['none'];
        __VLS_styleScopedClasses['list'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['none'];
        __VLS_styleScopedClasses['wrapper'];
        __VLS_styleScopedClasses['wrapper'];
        __VLS_styleScopedClasses['buttons'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn'];
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
                listOne: listOne,
                listTwo: listTwo,
                startLottery: startLottery,
                clear: clear,
                drawLots: drawLots,
                handleReset: handleReset,
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

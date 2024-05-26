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
const dayjs_1 = __importDefault(require("dayjs"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const year = (0, vue_1.ref)((0, dayjs_1.default)().year());
const month = (0, vue_1.ref)((0, dayjs_1.default)().month());
const day = (0, vue_1.ref)((0, dayjs_1.default)().date());
const thisDate = (0, vue_1.ref)("");
const dateArr = (0, vue_1.reactive)({ data: [] });
function nextMonth() {
    if (month.value === 11) {
        year.value++;
        month.value = 0;
    }
    else {
        month.value++;
    }
}
function preMonth() {
    if (month.value === 0) {
        year.value--;
        month.value = 11;
    }
    else {
        month.value--;
    }
}
// 閏年、非閏年月份天數
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const normalYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 算月曆中的日期
(0, vue_1.watchEffect)(() => {
    dateArr.data = [];
    const thisDay = year.value + "-" + (month.value + 1) + "-" + "1";
    let monthDays, preMonthDays; // 本月、上個月、下個月
    // 判斷是不是leap year
    const isLeapYear = year.value % 4;
    if (isLeapYear === 0) {
        // console.log("整除", year.value);
        monthDays = leapYear[month.value]; // 本月有幾天？
        // 前一個月有幾天？
        if (month.value == 0) {
            preMonthDays = 31;
        }
        else {
            preMonthDays = leapYear[month.value - 1];
        }
    }
    else {
        // console.log("不整除", year.value);
        const preMonthValue = month.value - 1 || 0;
        monthDays = normalYear[month.value]; // 本月有幾天？
        // 前一個月有幾天？
        if (month.value == 0) {
            preMonthDays = 31;
        }
        else {
            preMonthDays = normalYear[month.value - 1];
        }
    }
    const whatFirstDay = (0, dayjs_1.default)(thisDay).day(); // 當月第一天是星期幾？
    // 取得當月最後一天必要參數
    const lastDay = year.value + "-" + (month.value + 1) + "-" + monthDays;
    const whatLastDay = (0, dayjs_1.default)(lastDay).day(); // 當月最後一天是星期幾？
    let dayArr = [];
    // 第一步：把當月總天數丟進月曆裡面
    for (let i = 1; i <= monthDays; i++) {
        const innerDate = year.value + "-" + (+month.value + 1) + "-" + i;
        dayArr.push({ date: i, info: innerDate, class: "normal" });
    }
    // 第二步：算回去上個月補足第一個禮拜使其滿足週七天
    if (whatFirstDay !== 0) {
        // 若當月第一天是星期日則不需要執行
        let innerLastMonthDay = preMonthDays;
        let innerYear = year.value;
        month.value === 0 ? innerYear-- : "";
        let preMonth;
        if (month.value === 0) {
            preMonth = 12;
        }
        else {
            preMonth = month.value;
        }
        for (let i = whatFirstDay; i > 0; i--) {
            const preDate = innerYear + "-" + preMonth + "-" + innerLastMonthDay;
            dayArr.unshift({
                date: innerLastMonthDay,
                info: preDate,
                class: "gray",
            });
            // console.log(innerLastMonthDay);
            innerLastMonthDay--;
        }
        // console.log("arr", dayArr);
    }
    // 第三步：算下去下個月補足最後一個禮拜使其滿足七天
    if (whatLastDay !== 6) {
        // console.log("what last day", whatLastDay);
        let day = 1;
        // +1 是因為自己本身不能算
        let innerYear = year.value;
        month.value === 11 ? innerYear++ : innerYear;
        let nextMonth;
        if (month.value === 11) {
            nextMonth = 1;
        }
        else {
            nextMonth = month.value + 2;
        }
        for (let i = whatLastDay; i < 6; i++) {
            const innerDate = innerYear + "-" + nextMonth + "-" + day;
            dayArr.push({ date: day, info: innerDate, class: "gray" });
            day++;
        }
    }
    // 切一排一組
    for (let i = 0; i < dayArr.length; i += 7) {
        dateArr.data.push(dayArr.slice(i, i + 7));
    }
    // console.log(dateArr.data);
});
function showDate(day) {
    thisDate.value = day;
    // console.log(day);
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("calendar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.preMonth) }, { class: ("left") }));
    ("<");
    // @ts-ignore
    [preMonth,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.year);
    // @ts-ignore
    [year,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.month + 1);
    // @ts-ignore
    [month,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.nextMonth) }, { class: ("right") }));
    (">");
    // @ts-ignore
    [nextMonth,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("body") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("row gray") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    for (const [value, key] of __VLS_getVForSourceType((__VLS_ctx.dateArr.data))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("row") }, { key: ((key)) }));
        for (const [element] of __VLS_getVForSourceType((value))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign(Object.assign({ onClick: (...[$event]) => {
                    __VLS_ctx.showDate(element.info);
                    // @ts-ignore
                    [dateArr, showDate,];
                } }, { class: ("circle") }), { class: ((__VLS_ctx.thisDate === element.info ? 'clicked' : '')) }));
            __VLS_styleScopedClasses = (thisDate === element.info ? 'clicked' : '');
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ((element.class)) }));
            __VLS_styleScopedClasses = (element.class);
            (element.date);
            // @ts-ignore
            [thisDate,];
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.thisDate);
    // @ts-ignore
    [thisDate,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['calendar'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['left'];
        __VLS_styleScopedClasses['right'];
        __VLS_styleScopedClasses['body'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['gray'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['circle'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (yield Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
        setup() {
            return {
                year: year,
                month: month,
                thisDate: thisDate,
                dateArr: dateArr,
                nextMonth: nextMonth,
                preMonth: preMonth,
                showDate: showDate,
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

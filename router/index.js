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
const vue_router_1 = require("vue-router");
const router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHashHistory)(),
    routes: [
        {
            path: '/tools',
            name: '小工具',
            meta: {
                hidden: false,
            },
            children: [
                {
                    path: '/lottery',
                    name: '抽獎',
                    component: () => Promise.resolve().then(() => __importStar(require('../views/lottery/index.vue'))),
                    meta: {
                        hidden: false,
                    },
                },
                {
                    path: '/calendar',
                    name: '日曆',
                    component: () => Promise.resolve().then(() => __importStar(require('../views/calendar/index.vue')))
                }
            ]
        },
        {
            path: '/animations',
            name: '動畫',
            meta: {
                hidden: true,
            },
            children: [
                {
                    path: '/buttons',
                    name: '按鈕特效',
                    component: () => Promise.resolve().then(() => __importStar(require('../views/animations/buttons.vue')))
                },
                {
                    path: '/backgrounds',
                    name: '背景特效',
                    component: () => Promise.resolve().then(() => __importStar(require('../views/animations/backgrounds.vue')))
                },
            ]
        },
        {
            path: '/undergroundCastle',
            name: 'JS地下城',
            meta: {
                hidden: false,
            },
            children: [
                {
                    path: '/groundFloor',
                    name: '第一層',
                    component: () => Promise.resolve().then(() => __importStar(require('../views/undergroundCastle/groundFloor.vue')))
                },
                {
                    path: '/firstFloor',
                    name: '第二層',
                    component: () => Promise.resolve().then(() => __importStar(require('../views/undergroundCastle/firstFloor.vue'))),
                    meta: {
                        hidden: false,
                    },
                },
                {
                    path: '/secondFloor',
                    name: '第三層',
                    component: () => Promise.resolve().then(() => __importStar(require('../views/undergroundCastle/secondFloor.vue'))),
                    meta: {
                        hidden: true,
                    },
                },
            ]
        }
    ]
});
exports.default = router;

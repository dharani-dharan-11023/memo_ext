/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./src/pages/background/actions.ts":
/*!*****************************************!*\
  !*** ./src/pages/background/actions.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setBadgeUnavailable = exports.setBadgeText = exports.getSetting = exports.setDefaultColor = exports.getDefaultColor = exports.setIsVisibleNote = exports.getIsVisibleNote = exports.scrollTo = exports.updatePageInfo = exports.fetchAllPageInfo = exports.deleteNote = exports.updateNote = exports.createNote = exports.fetchAllNotesByPageUrl = exports.fetchAllNotesAndPageInfo = exports.fetchAllNotes = void 0;
const noteStorage_1 = __webpack_require__(/*! ../../storages/noteStorage */ "./src/storages/noteStorage.ts");
const noteVisibleStorage_1 = __webpack_require__(/*! ../../storages/noteVisibleStorage */ "./src/storages/noteVisibleStorage.ts");
const defaultColorStorage_1 = __webpack_require__(/*! ../../storages/defaultColorStorage */ "./src/storages/defaultColorStorage.ts");
const pageInfoStorage_1 = __webpack_require__(/*! ../../storages/pageInfoStorage */ "./src/storages/pageInfoStorage.ts");
const fetchAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, noteStorage_1.getAllNotes)();
    return notes;
});
exports.fetchAllNotes = fetchAllNotes;
const fetchAllNotesAndPageInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, noteStorage_1.getAllNotes)();
    const pageInfos = yield (0, pageInfoStorage_1.getAllPageInfos)();
    const filteredPageInfos = pageInfos.filter((pageInfo) => {
        return notes.some((note) => note.page_info_id === pageInfo.id);
    });
    return { notes, pageInfos: filteredPageInfos };
});
exports.fetchAllNotesAndPageInfo = fetchAllNotesAndPageInfo;
const fetchAllNotesByPageUrl = (page_url) => __awaiter(void 0, void 0, void 0, function* () {
    const pageInfo = yield (0, pageInfoStorage_1.getPageInfoByUrl)(page_url);
    if (!pageInfo || !pageInfo.id)
        return [];
    const notes = yield (0, noteStorage_1.getAllNotesByPageId)(pageInfo.id);
    return notes;
});
exports.fetchAllNotesByPageUrl = fetchAllNotesByPageUrl;
const createNote = (page_url) => __awaiter(void 0, void 0, void 0, function* () {
    const pageInfo = yield (0, pageInfoStorage_1.getOrCreatePageInfoByUrl)(page_url);
    const { note, allNotes } = yield (0, noteStorage_1.createNote)(pageInfo.id);
    (0, pageInfoStorage_1.setUpdatedAtPageInfo)(pageInfo.id);
    return allNotes;
});
exports.createNote = createNote;
const updateNote = (note) => __awaiter(void 0, void 0, void 0, function* () {
    if (!note.page_info_id)
        return [];
    const { allNotes } = yield (0, noteStorage_1.updateNote)(note.page_info_id, note);
    (0, pageInfoStorage_1.setUpdatedAtPageInfo)(note.page_info_id);
    return allNotes;
});
exports.updateNote = updateNote;
const deleteNote = (note) => __awaiter(void 0, void 0, void 0, function* () {
    if (!note.page_info_id)
        return [];
    const { allNotes } = yield (0, noteStorage_1.deleteNote)(note.page_info_id, note.id);
    return allNotes;
});
exports.deleteNote = deleteNote;
const fetchAllPageInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const pageInfos = yield (0, pageInfoStorage_1.getAllPageInfos)();
    return pageInfos;
});
exports.fetchAllPageInfo = fetchAllPageInfo;
const updatePageInfo = (page_info) => __awaiter(void 0, void 0, void 0, function* () {
    if (!page_info.id)
        return [];
    const { allPageInfos } = yield (0, pageInfoStorage_1.updatePageInfo)(page_info);
    return allPageInfos;
});
exports.updatePageInfo = updatePageInfo;
const scrollTo = (tabId, note) => __awaiter(void 0, void 0, void 0, function* () {
    return yield chrome.scripting.executeScript({
        target: { tabId },
        func: (position_x, position_y) => window.scrollTo(position_x !== null && position_x !== void 0 ? position_x : 0, position_y !== null && position_y !== void 0 ? position_y : 0),
        args: [note.position_x, note.position_y],
    });
});
exports.scrollTo = scrollTo;
const getIsVisibleNote = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, noteVisibleStorage_1.getIsVisibleNote)();
});
exports.getIsVisibleNote = getIsVisibleNote;
const setIsVisibleNote = (isVisible) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, noteVisibleStorage_1.setIsVisibleNote)(isVisible);
    return isVisible;
});
exports.setIsVisibleNote = setIsVisibleNote;
const getDefaultColor = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, defaultColorStorage_1.getDefaultColor)();
});
exports.getDefaultColor = getDefaultColor;
const setDefaultColor = (color) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, defaultColorStorage_1.setDefaultColor)(color);
    return yield (0, exports.getSetting)();
});
exports.setDefaultColor = setDefaultColor;
const getSetting = () => __awaiter(void 0, void 0, void 0, function* () {
    const setting = {
        is_visible: yield (0, noteVisibleStorage_1.getIsVisibleNote)(),
        default_color: yield (0, defaultColorStorage_1.getDefaultColor)(),
    };
    return setting;
});
exports.getSetting = getSetting;
const setBadgeText = (tabId, noteLength) => {
    chrome.action.setBadgeText({ tabId, text: `${noteLength !== null && noteLength !== void 0 ? noteLength : ""}` });
    chrome.action.setBadgeBackgroundColor({ tabId, color: "#000" });
};
exports.setBadgeText = setBadgeText;
const setBadgeUnavailable = (tabId) => {
    chrome.action.setBadgeText({ tabId, text: "x" });
    chrome.action.setBadgeBackgroundColor({ tabId, color: "red" });
};
exports.setBadgeUnavailable = setBadgeUnavailable;


/***/ }),

/***/ "./src/pages/background/cache.ts":
/*!***************************************!*\
  !*** ./src/pages/background/cache.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cache = void 0;
/**
 * Cache
 * - badge: バッジ(=メモの数を示す)を保持する
 */
const cache = {
    badge: {},
};
exports.cache = cache;
Object.freeze(cache);


/***/ }),

/***/ "./src/pages/background/index.ts":
/*!***************************************!*\
  !*** ./src/pages/background/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROOT_DOM_ID = void 0;
const background_1 = __webpack_require__(/*! ../message/handler/background */ "./src/pages/message/handler/background.ts");
const background_2 = __webpack_require__(/*! ../message/sender/background */ "./src/pages/message/sender/background.ts");
const actions = __importStar(__webpack_require__(/*! ./actions */ "./src/pages/background/actions.ts"));
const noteStorage_1 = __webpack_require__(/*! ../../storages/noteStorage */ "./src/storages/noteStorage.ts");
const pageInfoStorage_1 = __webpack_require__(/*! ../../storages/pageInfoStorage */ "./src/storages/pageInfoStorage.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const cache_1 = __webpack_require__(/*! ./cache */ "./src/pages/background/cache.ts");
exports.ROOT_DOM_ID = "react-container-for-note-extension";
/**
 * Service Worker
 *
 * 1. ローカルストレージのデータを管理する
 *   1-1. ContentScript,Option,Popupからのアクションを受け取り、データを更新する
 *   1-2. ContentScriptへデータを送信する
 *
 * Service Workerでは async/await が使えないので、Promiseを使う
 */
// install or Updateして初めて開いた時に呼ばれる。
chrome.runtime.onInstalled.addListener((details) => {
    const previousVersion = details.previousVersion || "x.x.x";
    if (previousVersion === "0.3.1") {
        actions.setDefaultColor("#FFF7CC");
    }
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL && previousVersion === "x.x.x") {
        chrome.tabs.create({
            url: `${chrome.runtime.getURL("setting.html")}#init`,
        });
    }
    console.log("previousVersion", previousVersion);
});
/**
 * 右クリックメニュー
 */
chrome.contextMenus.create({
    id: "note-extension-context-menu-create",
    title: (0, utils_1.msg)("add_note_msg", true),
    contexts: ["page", "frame", "editable", "image", "video", "audio", "link", "selection"],
});
chrome.contextMenus.onClicked.addListener((info) => {
    const { pageUrl } = info;
    chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
        if (!(tab === null || tab === void 0 ? void 0 : tab.id))
            return;
        (0, background_1.isScriptAllowedPage)(tab.id)
            .then((isAllowed) => {
            if (isAllowed) {
                (0, pageInfoStorage_1.getOrCreatePageInfoByUrl)(pageUrl).then((pageInfo) => {
                    if (!pageInfo.id)
                        return;
                    (0, noteStorage_1.createNote)(pageInfo.id).then(({ allNotes }) => {
                        cache_1.cache.badge[tab.id] = allNotes.length;
                        actions.getSetting().then((setting) => {
                            if (!(tab === null || tab === void 0 ? void 0 : tab.id))
                                return;
                            (0, background_1.injectContentScript)(tab.id).then(() => (0, background_2.setupPage)(tab.id, pageUrl, allNotes, setting).catch(() => { }));
                        });
                    });
                });
            }
        })
            .catch((e) => {
            var _a, _b;
            // TODO: エラー時の処理
            (_b = (_a = chrome.runtime).openOptionsPage) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    });
});
// 直近に読み込まれたページURL
let currentUrl = "";
/**
 * タブが更新された時に呼ばれる
 * 0. 無効なページの場合はなにもしない
 * 1. ページに紐づくメモがない場合、contentScriptを実行せず、[]を返す（SPA対策）
 * 2. ページに紐づくメモがある場合、contentScriptを実行し、メモを返す
 */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const { status } = changeInfo;
    if (status !== "loading")
        return;
    const { url } = tab;
    // iframeを読み込まれたタイミングでも走るので、同一URLを読み込んだ際は無視するようにする
    if (url === undefined || currentUrl === url)
        return;
    currentUrl = url;
    if ((0, utils_1.isSystemLink)(url))
        return;
    (0, background_1.isScriptAllowedPage)(tabId).then((isAllowed) => {
        if (isAllowed) {
            actions
                .fetchAllNotesByPageUrl(url)
                .then((notes) => {
                actions.getSetting().then((setting) => {
                    currentUrl = "";
                    if (notes.length === 0) {
                        (0, background_1.hasContentScript)(tabId).then((has) => {
                            if (has) {
                                // contentScriptが既にあり、メモがない場合は、空のメモをセットする(SPA対策)
                                (0, background_2.setupPage)(tabId, url, [], setting).catch((e) => { });
                            }
                        }).catch((e) => { });
                        return actions.setBadgeText(tabId, 0);
                    }
                    (0, background_1.injectContentScript)(tabId).then(() => (0, background_2.setupPage)(tabId, url, notes, setting).catch((e) => { }));
                });
            })
                .catch((e) => {
                console.log("error chrome.tabs.onUpdated.addListener", e);
            });
        }
    });
});
/**
 * タブが切り替わるたびに呼ばれる
 *
 * 複雑な処理や重いロジックはChromeのパフォーマンスに影響を与える可能性がある
 * */
chrome.tabs.onActivated.addListener((activeInfo) => {
    if (cache_1.cache.badge[activeInfo.tabId] !== undefined) {
        actions.setBadgeText(activeInfo.tabId, cache_1.cache.badge[activeInfo.tabId]);
    }
    else {
        actions.setBadgeText(activeInfo.tabId, "");
    }
});
/**
 * タブが閉じられた時に呼ばれる
 */
chrome.tabs.onRemoved.addListener((tabId) => {
    delete cache_1.cache.badge[tabId];
});
chrome.runtime.onMessage.addListener(background_1.handleMessages);


/***/ }),

/***/ "./src/pages/message/actions.ts":
/*!**************************************!*\
  !*** ./src/pages/message/actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * メッセージのアクション定義
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OPTIONS = exports.BACKGROUND = exports.CONTENT_SCRIPT = exports.POPUP = exports.SET_NOTE_VISIBLE = exports.SETUP_PAGE = exports.UPDATE_NOTE_VISIBLE = exports.OPEN_OPTION_PAGE = exports.SCROLL_TO_TARGET_NOTE = exports.UPDATE_DEFAULT_COLOR = exports.GET_SETTING = exports.UPDATE_NOTE_INFO = exports.GET_NOTE_VISIBLE = exports.GET_ALL_NOTES_AND_PAGE_INFO = exports.DELETE_NOTE = exports.UPDATE_NOTE = exports.CREATE_NOTE = exports.GET_NOTES_BY_PAGE_ID = exports.GET_ALL_NOTES = void 0;
// contentScript, Popup, Option → background
exports.GET_ALL_NOTES = "GET_ALL_NOTES";
exports.GET_NOTES_BY_PAGE_ID = "GET_NOTES_BY_PAGE_ID";
exports.CREATE_NOTE = "CREATE_NOTE";
exports.UPDATE_NOTE = "UPDATE_NOTE";
exports.DELETE_NOTE = "DELETE_NOTE";
exports.GET_ALL_NOTES_AND_PAGE_INFO = "GET_ALL_NOTES_AND_PAGE_INFO";
exports.GET_NOTE_VISIBLE = "GET_NOTE_VISIBLE";
exports.UPDATE_NOTE_INFO = "UPDATE_NOTE_INFO";
exports.GET_SETTING = "GET_SETTING";
exports.UPDATE_DEFAULT_COLOR = "UPDATE_DEFAULT_COLOR";
// Popup → contentScript
exports.SCROLL_TO_TARGET_NOTE = "SCROLL_TO_TARGET_NOTE";
exports.OPEN_OPTION_PAGE = "OPEN_OPTION_PAGE";
exports.UPDATE_NOTE_VISIBLE = "UPDATE_NOTE_VISIBLE"; // メモの表示設定を更新
// background → contentScript, Popup
exports.SETUP_PAGE = "SETUP_PAGE"; // 全てのメモをセットする
exports.SET_NOTE_VISIBLE = "SET_NOTE_VISIBLE"; // メモの表示設定をセットする
// page type
exports.POPUP = "POPUP";
exports.CONTENT_SCRIPT = "CONTENT_SCRIPT";
exports.BACKGROUND = "BACKGROUND";
exports.OPTIONS = "OPTIONS";


/***/ }),

/***/ "./src/pages/message/handler/background.ts":
/*!*************************************************!*\
  !*** ./src/pages/message/handler/background.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleMessages = exports.injectContentScript = exports.hasContentScript = exports.isScriptAllowedPage = exports.ROOT_DOM_ID = void 0;
const actions_1 = __webpack_require__(/*! ../actions */ "./src/pages/message/actions.ts");
const actions = __importStar(__webpack_require__(/*! ../../background/actions */ "./src/pages/background/actions.ts"));
const utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");
const background_1 = __webpack_require__(/*! ../sender/background */ "./src/pages/message/sender/background.ts");
exports.ROOT_DOM_ID = "react-container-for-note-extension";
// メモ挿入が可能なページかどうかを判定する
const isScriptAllowedPage = (tabId) => __awaiter(void 0, void 0, void 0, function* () {
    yield chrome.scripting.executeScript({
        target: { tabId },
        func: () => { },
    });
    return !chrome.runtime.lastError;
});
exports.isScriptAllowedPage = isScriptAllowedPage;
// 既にコンテンツスクリプトが挿入されているかどうかを判定する
const hasContentScript = (tabId) => __awaiter(void 0, void 0, void 0, function* () {
    const [res] = yield chrome.scripting.executeScript({
        target: { tabId },
        func: () => {
            const noteDOM = document.getElementById("react-container-for-note-extension");
            return !!noteDOM;
        },
    });
    return res.result;
});
exports.hasContentScript = hasContentScript;
// コンテンツスクリプトを挿入する
const injectContentScript = (tabId) => __awaiter(void 0, void 0, void 0, function* () {
    const hasScript = yield (0, exports.hasContentScript)(tabId);
    // 既に挿入されている場合は何もしない
    if (hasScript)
        return false;
    return yield chrome.scripting.executeScript({
        target: { tabId },
        files: ["contentScript.js"],
    });
});
exports.injectContentScript = injectContentScript;
// コンテンツスクリプトからのメッセージハンドラ
const _handleMessagesFromContentScript = (method, sendResponse, payload) => {
    const { url = "", note } = payload;
    switch (method) {
        case actions_1.GET_ALL_NOTES:
            actions
                .fetchAllNotesByPageUrl(url)
                .then((notes) => sendResponse({ data: { notes } }))
                .catch((e) => {
                console.log("error GET_ALL_NOTES:", e);
                sendResponse({ error: e });
            });
            return true;
        case actions_1.CREATE_NOTE:
            actions
                .createNote(url)
                .then((notes) => {
                chrome.tabs.query({ url, currentWindow: true }).then((tabs) => {
                    tabs.forEach((tab) => {
                        var _a;
                        if (tab.id)
                            actions.setBadgeText(tab.id, (_a = notes.length) !== null && _a !== void 0 ? _a : 0);
                    });
                });
                return sendResponse({ data: { notes } });
            })
                .catch((e) => {
                console.log("error CREATE_NOTE:", e);
                sendResponse({ error: e });
            });
            return true;
        case actions_1.UPDATE_NOTE:
            actions
                .updateNote(note)
                .then((notes) => sendResponse({ data: { notes } }))
                .catch((e) => {
                console.log("error UPDATE_NOTE:", e);
                sendResponse({ error: e });
            });
            return true;
        case actions_1.DELETE_NOTE:
            actions
                .deleteNote(note)
                .then((notes) => {
                chrome.tabs.query({ url, currentWindow: true }).then((tabs) => {
                    tabs.forEach((tab) => {
                        var _a;
                        if (tab.id)
                            actions.setBadgeText(tab.id, (_a = notes.length) !== null && _a !== void 0 ? _a : 0);
                    });
                });
                return sendResponse({ data: { notes } });
            })
                .catch((e) => {
                console.log("error DELETE_NOTE:", e);
                sendResponse({ error: e });
            });
            return true;
        case actions_1.OPEN_OPTION_PAGE:
            // open_option_page();
            break;
        case actions_1.GET_NOTE_VISIBLE:
            actions
                .getIsVisibleNote()
                .then((isVisible) => sendResponse({ data: { isVisible } }))
                .catch((e) => {
                console.log("error GET_NOTE_VISIBLE:", e);
                sendResponse({ error: e });
            });
            break;
        default:
            break;
    }
    return false;
};
// ポップアップからのメッセージハンドラ
const _handleMessagesFromPopup = (method, sendResponse, payload) => {
    const { tab, note, isVisible } = payload;
    const tabId = tab === null || tab === void 0 ? void 0 : tab.id;
    const tabUrl = tab === null || tab === void 0 ? void 0 : tab.url;
    if (!tabId || !tabUrl) {
        sendResponse({ data: { notes: [] }, error: new Error("このページでは使用できません") });
        return true;
    }
    // Chromeシステム画面は、アクションを実行しないようにする
    if ((0, utils_1.isSystemLink)(tabUrl)) {
        sendResponse({ data: { notes: [] }, error: new Error("このページでは使用できません") });
        return true;
    }
    const sendResponseAndSetNotes = (notes) => {
        actions.getSetting().then((setting) => {
            sendResponse({ data: { notes } });
            (0, exports.injectContentScript)(tabId).then(() => (0, background_1.setupPage)(tabId, tabUrl, notes, setting).catch((e) => { }));
        });
    };
    (0, exports.isScriptAllowedPage)(tabId).then((isAllowed) => {
        // content_scriptが無効なページは、アクションを実行しないようにする
        if (!isAllowed)
            sendResponse({ data: { notes: [] }, error: new Error("このページでは使用できません") });
        switch (method) {
            case actions_1.GET_ALL_NOTES:
                actions
                    .fetchAllNotesByPageUrl(tabUrl)
                    .then((notes) => {
                    actions.getIsVisibleNote().then((isVisible) => {
                        sendResponse({ data: { notes, isVisible } });
                    });
                })
                    .catch((e) => console.log("error GET_ALL_NOTES:", e));
                return true;
            case actions_1.CREATE_NOTE:
                actions
                    .createNote(tabUrl)
                    .then((notes) => {
                    var _a;
                    if (tabId)
                        actions.setBadgeText(tabId, (_a = notes.length) !== null && _a !== void 0 ? _a : 0);
                    sendResponseAndSetNotes(notes);
                })
                    .catch((e) => console.log("error CREATE_NOTE:", e));
                return true;
            case actions_1.SCROLL_TO_TARGET_NOTE:
                actions.scrollTo(tabId, note).then(() => sendResponse());
                return true;
            case actions_1.UPDATE_NOTE:
                actions
                    .updateNote(note)
                    .then(sendResponseAndSetNotes)
                    .catch((e) => {
                    console.log("error UPDATE_NOTE:", e);
                });
                return true;
            case actions_1.DELETE_NOTE:
                actions
                    .deleteNote(note)
                    .then((notes) => {
                    var _a;
                    if (tabId)
                        actions.setBadgeText(tabId, (_a = notes.length) !== null && _a !== void 0 ? _a : 0);
                    sendResponseAndSetNotes(notes);
                })
                    .catch((e) => {
                    console.log("error DELETE_NOTE:", e);
                });
                return true;
            case actions_1.GET_NOTE_VISIBLE:
                actions.getIsVisibleNote().then((isVisible) => {
                    sendResponse({ data: { isVisible } });
                    (0, exports.injectContentScript)(tabId).then(() => (0, background_1.setupIsVisible)(tabId, tabUrl, isVisible));
                });
                return true;
            case actions_1.UPDATE_NOTE_VISIBLE:
                actions.setIsVisibleNote(!!isVisible).then((isVisible) => {
                    sendResponse({ data: { isVisible } });
                    (0, exports.injectContentScript)(tabId).then(() => (0, background_1.setupIsVisible)(tabId, tabUrl, isVisible));
                });
                return true;
            default:
                break;
        }
    });
    return true;
};
// オプションページからのメッセージハンドラ
const _handleMessagesFromOption = (method, sendResponse, payload) => {
    const { tab, note, pageInfo } = payload;
    switch (method) {
        case actions_1.GET_ALL_NOTES:
            actions
                .fetchAllNotes()
                .then((notes) => sendResponse({ data: { notes } }))
                .catch((e) => console.log("error GET_ALL_NOTES:", e));
            return true;
        case actions_1.GET_ALL_NOTES_AND_PAGE_INFO:
            actions
                .fetchAllNotesAndPageInfo()
                .then(({ notes, pageInfos }) => sendResponse({ data: { notes, pageInfos } }))
                .catch((e) => console.log("error GET_ALL_NOTES:", e));
            return true;
        case actions_1.UPDATE_NOTE:
            actions
                .updateNote(note)
                .then(() => {
                actions
                    .fetchAllNotesAndPageInfo()
                    .then(({ notes, pageInfos }) => sendResponse({ data: { notes, pageInfos } }));
            })
                .catch((e) => {
                console.log("error UPDATE_NOTE:", e);
                sendResponse({ error: e });
            });
            return true;
        case actions_1.DELETE_NOTE:
            actions
                .deleteNote(note)
                .then(() => {
                actions.fetchAllNotesAndPageInfo().then(({ notes, pageInfos }) => {
                    var _a;
                    if (tab === null || tab === void 0 ? void 0 : tab.id)
                        actions.setBadgeText(tab.id, (_a = notes.length) !== null && _a !== void 0 ? _a : 0);
                    sendResponse({ data: { notes, pageInfos } });
                });
            })
                .catch((e) => console.log("error DELETE_NOTE:", e));
            return true;
        case actions_1.UPDATE_NOTE_INFO:
            actions
                .updatePageInfo(pageInfo)
                .then((pageInfos) => {
                sendResponse({ data: { pageInfos } });
            })
                .catch((e) => console.log("error UPDATE_NOTE_INFO:", e));
            return true;
        case actions_1.GET_SETTING:
            actions
                .getSetting()
                .then((setting) => {
                sendResponse({ data: { setting } });
            })
                .catch((e) => console.log("error GET_SETTING:", e));
            return true;
        case actions_1.UPDATE_DEFAULT_COLOR:
            actions
                .setDefaultColor(payload.defaultColor)
                .then((setting) => {
                sendResponse({ data: { setting } });
            })
                .catch((e) => console.log("error UPDATE_DEFAULT_COLOR:", e));
            return true;
        default:
            sendResponse({
                data: { notes: [], pageInfos: [] },
                error: new Error("無効なアクションです"),
            });
            return true;
    }
};
const handleMessages = (action, sender, sendResponse) => {
    const { method, senderType, payload } = action;
    console.log("==== handleMessage ====", action, payload);
    switch (senderType) {
        case actions_1.CONTENT_SCRIPT:
            return _handleMessagesFromContentScript(method, sendResponse, payload !== null && payload !== void 0 ? payload : {});
        case actions_1.POPUP:
            return _handleMessagesFromPopup(method, sendResponse, payload !== null && payload !== void 0 ? payload : {});
        case actions_1.OPTIONS:
            return _handleMessagesFromOption(method, sendResponse, payload !== null && payload !== void 0 ? payload : {});
        default:
            sendResponse({
                error: new Error("無効なアクションです"),
            });
            return true;
    }
};
exports.handleMessages = handleMessages;


/***/ }),

/***/ "./src/pages/message/sender/background.ts":
/*!************************************************!*\
  !*** ./src/pages/message/sender/background.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupIsVisible = exports.setupPage = void 0;
const actions_1 = __webpack_require__(/*! ../actions */ "./src/pages/message/actions.ts");
const base_1 = __webpack_require__(/*! ./base */ "./src/pages/message/sender/base.ts");
const actions = __importStar(__webpack_require__(/*! ../../background/actions */ "./src/pages/background/actions.ts"));
const cache_1 = __webpack_require__(/*! ../../background/cache */ "./src/pages/background/cache.ts");
/**
 * backgroundから送信するメッセージ
 */
/**
 * メモ情報をContentScriptにセットする
 */
const setupPage = (tabId, url, notes, setting) => {
    var _a, _b;
    cache_1.cache.badge[tabId] = (_a = notes.length) !== null && _a !== void 0 ? _a : 0;
    actions.setBadgeText(tabId, (_b = notes.length) !== null && _b !== void 0 ? _b : 0);
    return (0, base_1.sendActionToTab)(tabId, actions_1.SETUP_PAGE, actions_1.BACKGROUND, {
        url,
        notes,
        isVisible: setting === null || setting === void 0 ? void 0 : setting.is_visible,
        defaultColor: setting === null || setting === void 0 ? void 0 : setting.default_color,
    });
};
exports.setupPage = setupPage;
/**
 * メモの表示/非表示をContentScriptにセットする
 */
const setupIsVisible = (tabId, url, isVisible) => {
    return (0, base_1.sendActionToTab)(tabId, actions_1.SET_NOTE_VISIBLE, actions_1.BACKGROUND, { url, isVisible });
};
exports.setupIsVisible = setupIsVisible;


/***/ }),

/***/ "./src/pages/message/sender/base.ts":
/*!******************************************!*\
  !*** ./src/pages/message/sender/base.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendActionToTab = exports.sendAction = void 0;
function sendAction(method, senderType, payload) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
            method: method,
            senderType,
            payload,
        }, (response) => {
            const { data, error } = response !== null && response !== void 0 ? response : {};
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError.message);
            }
            else if (error) {
                reject(error.message);
            }
            else {
                resolve(data !== null && data !== void 0 ? data : {});
            }
        });
    });
}
exports.sendAction = sendAction;
function sendActionToTab(tabId, method, senderType, payload) {
    return new Promise((resolve, reject) => {
        chrome.tabs.sendMessage(tabId, {
            method: method,
            senderType,
            payload,
        }, (response) => {
            const { data, error } = response !== null && response !== void 0 ? response : {};
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError.message);
            }
            else if (error) {
                reject(error.message);
            }
            else {
                resolve(data !== null && data !== void 0 ? data : {});
            }
        });
    });
}
exports.sendActionToTab = sendActionToTab;


/***/ }),

/***/ "./src/storages/common.ts":
/*!********************************!*\
  !*** ./src/storages/common.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNewId = exports.removeStorage = exports.setStorage = exports.getStorage = exports.getAllStorage = void 0;
const getAllStorage = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield chrome.storage.local.get(null);
});
exports.getAllStorage = getAllStorage;
const getStorage = (storage_name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield chrome.storage.local.get(storage_name);
});
exports.getStorage = getStorage;
const setStorage = (storage_name, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield chrome.storage.local.set({ [storage_name]: data });
    return !chrome.runtime.lastError;
});
exports.setStorage = setStorage;
const removeStorage = (storage_name) => __awaiter(void 0, void 0, void 0, function* () {
    yield chrome.storage.local.remove(storage_name);
    return !chrome.runtime.lastError;
});
exports.removeStorage = removeStorage;
const getNewId = (storage_data) => {
    let new_id = Math.floor(Math.random() * 1000000);
    while (storage_data.some((a) => a.id === new_id)) {
        new_id = Math.floor(Math.random() * 1000000);
    }
    return new_id;
};
exports.getNewId = getNewId;


/***/ }),

/***/ "./src/storages/defaultColorStorage.ts":
/*!*********************************************!*\
  !*** ./src/storages/defaultColorStorage.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setDefaultColor = exports.getDefaultColor = void 0;
const common_1 = __webpack_require__(/*! ./common */ "./src/storages/common.ts");
const DEFAULT_COLOR_STORAGE_NAME = "default_color";
/**
 * メモの初期カラーを保存するストレージ
 */
const getDefaultColor = () => __awaiter(void 0, void 0, void 0, function* () {
    const storage = yield (0, common_1.getStorage)(DEFAULT_COLOR_STORAGE_NAME);
    return (storage[DEFAULT_COLOR_STORAGE_NAME] || "");
});
exports.getDefaultColor = getDefaultColor;
const setDefaultColor = (color) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, common_1.setStorage)(DEFAULT_COLOR_STORAGE_NAME, color);
});
exports.setDefaultColor = setDefaultColor;


/***/ }),

/***/ "./src/storages/noteStorage.ts":
/*!*************************************!*\
  !*** ./src/storages/noteStorage.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteNote = exports.getNotesByPageId = exports.getAllNotes = exports.getAllNotesByPageId = exports.updateNote = exports.createNote = void 0;
const Note_1 = __webpack_require__(/*! ../types/Note */ "./src/types/Note.ts");
const common_1 = __webpack_require__(/*! ./common */ "./src/storages/common.ts");
const pageInfoStorage_1 = __webpack_require__(/*! ./pageInfoStorage */ "./src/storages/pageInfoStorage.ts");
const NOTE_STORAGE_NAME = "notes";
const getStorageName = (pageId) => `${NOTE_STORAGE_NAME}_${pageId}`;
const getNoteStorage = (storageName) => __awaiter(void 0, void 0, void 0, function* () {
    const storage = yield (0, common_1.getStorage)(storageName);
    return (storage[storageName] || []);
});
const setNoteStorageByPageId = (pageId, notes) => __awaiter(void 0, void 0, void 0, function* () {
    const storageName = getStorageName(pageId);
    return yield (0, common_1.setStorage)(storageName, notes);
});
const removeNoteStorageByPageId = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, common_1.removeStorage)(getStorageName(pageId));
});
const createNote = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const notes = yield (0, exports.getAllNotesByPageId)(pageId);
    const id = (0, common_1.getNewId)(notes);
    const newNote = {
        id,
        page_info_id: pageId,
        width: Note_1.DEAULT_NOTE_WIDTH,
        height: Note_1.DEAULT_NOTE_HEIGHT,
        is_fixed: true,
        is_open: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    };
    const allNotes = [...notes, newNote];
    if (yield setNoteStorageByPageId(pageId, allNotes))
        return { note: newNote, allNotes };
    throw new Error("createNote failed: " + ((_a = chrome.runtime.lastError) === null || _a === void 0 ? void 0 : _a.message));
});
exports.createNote = createNote;
const updateNote = (pageId, note) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    if (!note.id)
        return new Promise((_resolve, reject) => reject("id is required"));
    const notes = yield (0, exports.getAllNotesByPageId)(pageId);
    const allNotes = notes.map((_note) => _note.id === note.id ? Object.assign(Object.assign({}, note), { updated_at: new Date().toISOString() }) : _note);
    if (yield setNoteStorageByPageId(pageId, allNotes))
        return { note, allNotes };
    throw new Error("updateNote failed: " + ((_b = chrome.runtime.lastError) === null || _b === void 0 ? void 0 : _b.message));
});
exports.updateNote = updateNote;
const getAllNotesByPageId = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield getNoteStorage(getStorageName(pageId));
});
exports.getAllNotesByPageId = getAllNotesByPageId;
const getAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    const storage = yield (0, common_1.getAllStorage)();
    const filteredNotes = Object.keys(storage)
        .filter((key) => key.match(new RegExp(`^${NOTE_STORAGE_NAME}_`, "g")))
        .map((key) => storage[key])
        .flat();
    return filteredNotes;
});
exports.getAllNotes = getAllNotes;
const getNotesByPageId = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO
    return new Promise((_resolve, reject) => reject("getAllNotes is not implemented"));
});
exports.getNotesByPageId = getNotesByPageId;
/**
 *
 * @param pageId
 * @param noteId
 * @returns note: 削除したメモ, allNotes: 削除後の全てのメモ, pageInfos: 削除後のページ情報
 */
const deleteNote = (pageId, noteId) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    if (!noteId)
        throw new Error("id is required");
    const notes = yield (0, exports.getAllNotesByPageId)(pageId);
    const note = notes.find((_note) => _note.id === noteId);
    const allNotes = notes.filter((_note) => _note.id !== noteId);
    // TODO 削除したNoteを履歴に残す
    if (yield setNoteStorageByPageId(pageId, allNotes)) {
        if (allNotes.length === 0) {
            yield (0, pageInfoStorage_1.deletePageInfo)(pageId);
            yield removeNoteStorageByPageId(pageId);
        }
        return { note, allNotes };
    }
    throw new Error("deleteNote failed: " + ((_c = chrome.runtime.lastError) === null || _c === void 0 ? void 0 : _c.message));
});
exports.deleteNote = deleteNote;


/***/ }),

/***/ "./src/storages/noteVisibleStorage.ts":
/*!********************************************!*\
  !*** ./src/storages/noteVisibleStorage.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setIsVisibleNote = exports.getIsVisibleNote = void 0;
const common_1 = __webpack_require__(/*! ./common */ "./src/storages/common.ts");
const NOTE_VISIBLE_STORAGE_NAME = "visible_notes";
/**
 * メモが表示/非表示の設定を保存するストレージ
 */
const getIsVisibleNote = () => __awaiter(void 0, void 0, void 0, function* () {
    const storage = yield (0, common_1.getStorage)(NOTE_VISIBLE_STORAGE_NAME);
    return (storage[NOTE_VISIBLE_STORAGE_NAME] || false);
});
exports.getIsVisibleNote = getIsVisibleNote;
const setIsVisibleNote = (isVisible) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, common_1.setStorage)(NOTE_VISIBLE_STORAGE_NAME, isVisible);
});
exports.setIsVisibleNote = setIsVisibleNote;


/***/ }),

/***/ "./src/storages/pageInfoStorage.ts":
/*!*****************************************!*\
  !*** ./src/storages/pageInfoStorage.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deletePageInfo = exports.getOrCreatePageInfoByUrl = exports.getPageInfoByUrl = exports.getPageInfoById = exports.getAllPageInfos = exports.setUpdatedAtPageInfo = exports.updatePageInfo = exports.createPageInfo = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
const common_1 = __webpack_require__(/*! ./common */ "./src/storages/common.ts");
const PAGE_INFO_STORAGE_NAME = "page_info";
const getPageInfoStorage = () => __awaiter(void 0, void 0, void 0, function* () {
    const storage = yield (0, common_1.getStorage)(PAGE_INFO_STORAGE_NAME);
    return (storage[PAGE_INFO_STORAGE_NAME] || []);
});
const setPageInfoStorage = (pageInfos) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, common_1.setStorage)(PAGE_INFO_STORAGE_NAME, pageInfos);
});
const createPageInfo = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const pageInfos = yield (0, exports.getAllPageInfos)();
    const encodedURL = (0, utils_1.formURL)(url);
    const id = (0, common_1.getNewId)(pageInfos);
    const [tab] = yield chrome.tabs.query({ url: (0, utils_1.formURL)(url) });
    if (!tab)
        throw new Error(`tab is not found: ${url}`);
    const newPageInfo = {
        id,
        page_url: encodedURL,
        page_title: tab.title,
        fav_icon_url: tab.favIconUrl,
        created_at: new Date().toISOString(),
    };
    const allPageInfos = [...pageInfos, newPageInfo];
    if (yield setPageInfoStorage(allPageInfos))
        return { pageInfo: newPageInfo, allPageInfos };
    throw new Error("createPageInfo failed: " + ((_a = chrome.runtime.lastError) === null || _a === void 0 ? void 0 : _a.message));
});
exports.createPageInfo = createPageInfo;
const updatePageInfo = (pageInfo) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    if (!pageInfo.id)
        return new Promise((_resolve, reject) => reject("id is required"));
    const pageInfos = yield (0, exports.getAllPageInfos)();
    const allPageInfos = pageInfos.map((_pageInfo) => _pageInfo.id === pageInfo.id ? Object.assign(Object.assign({}, pageInfo), { updated_at: new Date().toISOString() }) : _pageInfo);
    if (yield setPageInfoStorage(allPageInfos))
        return { pageInfo, allPageInfos };
    throw new Error("updatePageInfo failed: " + ((_b = chrome.runtime.lastError) === null || _b === void 0 ? void 0 : _b.message));
});
exports.updatePageInfo = updatePageInfo;
const setUpdatedAtPageInfo = (pageInfoId) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const pageInfos = yield (0, exports.getAllPageInfos)();
    const allPageInfos = pageInfos.map((_pageInfo) => _pageInfo.id === pageInfoId ? Object.assign(Object.assign({}, _pageInfo), { updated_at: new Date().toISOString() }) : _pageInfo);
    if (yield setPageInfoStorage(allPageInfos))
        return { allPageInfos };
    throw new Error("updatePageInfo failed: " + ((_c = chrome.runtime.lastError) === null || _c === void 0 ? void 0 : _c.message));
});
exports.setUpdatedAtPageInfo = setUpdatedAtPageInfo;
const getAllPageInfos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield getPageInfoStorage();
});
exports.getAllPageInfos = getAllPageInfos;
const getPageInfoById = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO
    return new Promise((_resolve, reject) => reject("getPageInfoById is not implemented"));
});
exports.getPageInfoById = getPageInfoById;
const getPageInfoByUrl = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const encodedURL = (0, utils_1.formURL)(url);
    const pageInfos = yield (0, exports.getAllPageInfos)();
    return pageInfos.find((_pageInfo) => _pageInfo.page_url === encodedURL);
});
exports.getPageInfoByUrl = getPageInfoByUrl;
const getOrCreatePageInfoByUrl = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const pageInfo = yield (0, exports.getPageInfoByUrl)(url);
    if (pageInfo)
        return pageInfo;
    const { pageInfo: newPageInfo } = yield (0, exports.createPageInfo)(url);
    return newPageInfo;
});
exports.getOrCreatePageInfoByUrl = getOrCreatePageInfoByUrl;
const deletePageInfo = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    if (!pageId)
        return new Promise((_resolve, reject) => reject("id is required"));
    const pageInfos = yield (0, exports.getAllPageInfos)();
    const pageInfo = pageInfos.find((_pageInfo) => _pageInfo.id === pageId);
    const allPageInfos = pageInfos.filter((_pageInfo) => _pageInfo.id !== pageId);
    if (yield setPageInfoStorage(allPageInfos))
        return { pageInfo, allPageInfos };
    // TODO 削除したPageInfoを履歴に残す
    throw new Error("deletePageInfo failed: " + ((_d = chrome.runtime.lastError) === null || _d === void 0 ? void 0 : _d.message));
});
exports.deletePageInfo = deletePageInfo;


/***/ }),

/***/ "./src/types/Note.ts":
/*!***************************!*\
  !*** ./src/types/Note.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEAULT_NOTE_HEIGHT = exports.DEAULT_NOTE_WIDTH = void 0;
exports.DEAULT_NOTE_WIDTH = 300;
exports.DEAULT_NOTE_HEIGHT = 180;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEqualsObject = exports.isSystemLink = exports.formatDate = exports.formURL = exports.decodeURL = exports.encodeFormURL = exports.msg = void 0;
const fast_deep_equal_1 = __importDefault(__webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js"));
const messages_json_1 = __importDefault(__webpack_require__(/*! ../public/_locales/ja/messages.json */ "./public/_locales/ja/messages.json"));
const messages_json_2 = __importDefault(__webpack_require__(/*! ../public/_locales/en/messages.json */ "./public/_locales/en/messages.json"));
const i18n = {
    ja: messages_json_1.default,
    en: messages_json_2.default,
};
/**
 * 翻訳されたメッセージを取得する\n
 * ServiceWorker上で「Uncaught TypeError: chrome.i18n.getMessage is not a function」というエラーが出るため、
 * @param key
 * @returns
 */
const msg = (key, isBackground) => {
    var _a, _b, _c;
    if (isBackground || "development" !== "production") {
        // default: English
        const lang = navigator.language.slice(0, 2);
        return (_c = (i18n[lang] ? (_a = i18n[lang][key]) === null || _a === void 0 ? void 0 : _a.message : (_b = messages_json_2.default[key]) === null || _b === void 0 ? void 0 : _b.message)) !== null && _c !== void 0 ? _c : "";
    }
    else {}
};
exports.msg = msg;
const encodeFormURL = (url) => {
    return encodeURIComponent((0, exports.formURL)(url));
};
exports.encodeFormURL = encodeFormURL;
const decodeURL = (encodedUrl) => {
    return decodeURIComponent(encodedUrl);
};
exports.decodeURL = decodeURL;
const formURL = (url) => {
    const parsedUrl = new URL(url);
    return `${parsedUrl.protocol}//${parsedUrl.hostname}${parsedUrl.pathname}${parsedUrl.search || ""}`;
};
exports.formURL = formURL;
const formatDate = (date) => {
    if (isNaN(date.getTime()))
        return "";
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
};
exports.formatDate = formatDate;
/**
 * chromeのシステム画面かどうかを判定する
 * @param link
 * @returns boolean
 */
const isSystemLink = (link) => {
    return (link.startsWith("chrome://") ||
        link.startsWith("chrome-extension://") ||
        link.startsWith("chrome-search://"));
};
exports.isSystemLink = isSystemLink;
/**
 * Objectの比較. 1階層のみ
 * @returns
 */
const isEqualsObject = (a, b) => {
    if (a === b) {
        return true;
    }
    return (0, fast_deep_equal_1.default)(a, b);
};
exports.isEqualsObject = isEqualsObject;


/***/ }),

/***/ "./public/_locales/en/messages.json":
/*!******************************************!*\
  !*** ./public/_locales/en/messages.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"appName":{"message":"Note Everywhere","description":"The name of the application"},"appShortName":{"message":"Note Everywhere","description":"The short_name (maximum of 12 characters recommended) is a short version of the app\'s name."},"appDescription":{"message":"This is intuitive note application.","description":"The description of the application"},"browserActionTitle":{"message":"Note Everywhere","description":"The title of the browser action button"},"app_name":{"message":"Note Everywhere"},"welcome_msg":{"message":"Welcome to Note Everywhere!"},"no_note_msg":{"message":"There is no note."},"add_note_msg":{"message":"add note"},"confirm_remove_note_msg":{"message":"Are you sure you want to delete?"},"confirm_remove_next_note_msg":{"message":"Are you sure you want to delete?"},"make_note_button_msg":{"message":"make note"},"setting_button_msg":{"message":"settings"},"menu_button_msg":{"message":"note list page"},"cannot_show_note_msg":{"message":"Memos can not be shown on this page."},"no_note_created_msg":{"message":"add note"},"no_note_created_option_msg":{"message":"or right click and \\"add note\\""},"note_unavailable_msg":{"message":"Note cannot be created on this page."},"how_to_use_page_link_msg":{"message":"How to Use"},"note_header_msg":{"message":"Memos"},"settings_header_msg":{"message":"Setting"},"how_to_use_header_msg":{"message":"Usage"},"show_all_note_msg":{"message":"All Notes"},"search_query_msg":{"message":"search"},"this_page_note_list_msg":{"message":"Memo list of this page"},"setting_about_this_app":{"message":"About Note Everywhere"},"setting_about_this_app_created_by":{"message":"Created by"},"usage01":{"message":"Fixing Pop-ups is recommended."},"usage02":{"message":"Open the pop-up and click the \\"+\\" button to create a Note."},"usage02_2":{"message":"You can also create a Note from the right-click menu on the screen."},"usage03":{"message":"Double click to edit title and details."},"usage04":{"message":"Move by mouse drag. You can also resize."},"usage05":{"message":"From the popup, you can view the notes created on the open page."},"usage06":{"message":"Memos page"},"usage06_2":{"message":" shows notes you made up to now."},"usage07":{"message":"The note has various functions."},"note":{"message":"Note"},"updated_at_msg":{"message":"Update"},"created_at_msg":{"message":"Created"},"save_msg":{"message":"Save"},"cancel_msg":{"message":"Cancel"},"close_msg":{"message":"Close"},"save_error_msg":{"message":"Failed to save."},"save_error_msg_2":{"message":"Please try again."},"save_error_word_maximum_msg":{"message":"Please reduce the number of characters and try again."},"discard_close_msg":{"message":"Discard changes and Close"},"updated_at_sort_option":{"message":"Update"},"created_at_sort_option":{"message":"Created"},"title_sort_option":{"message":"Title"},"go_to_this_page":{"message":"Go to this page"},"input_description_placeholder":{"message":"Enter a Note"},"copied_msg":{"message":"Copied"},"switch_pin_msg":{"message":"Switch Pin"},"minimize_msg":{"message":"Minimize"},"maximize_msg":{"message":"Maximize"},"pin_msg":{"message":"Pin"},"pin_select_option_unfixed_msg":{"message":"on"},"pin_select_option_fixed_msg":{"message":"off"},"color_msg":{"message":"Color"},"open_msg":{"message":"Minimize"},"open_select_option_yes_msg":{"message":"on"},"open_select_option_no_msg":{"message":"off"},"position_msg":{"message":"Position"},"reset_position_msg":{"message":"reset position"},"size_msg":{"message":"Size"},"size_height_msg":{"message":"height"},"size_width_msg":{"message":"width"},"pinned_msg":{"message":"Pin"},"remove_pinned_msg":{"message":"remove pin"},"detail_msg":{"message":"Details"},"edit_msg":{"message":"Edit"},"do_copy_msg":{"message":"Copy to Clipboard"},"copy_msg":{"message":"Copy"},"delete_msg":{"message":"Delete"},"export_msg":{"message":"Export"},"csv_download_msg":{"message":"CSV Download"},"text_download_msg":{"message":"txt Download"},"please_reload_msg":{"message":"Reload the page."},"maker_msg":{"message":"Developer"},"pin_explain_msg":{"message":"Pinning a Note will follow scrolling."},"edit_explain_msg":{"message":"Switch a Note to edit mode. (or double-click to edit)."},"copy_explain_msg":{"message":"Copies a Note text to the clipboard."},"color_explain_msg":{"message":"Edits the color of the Note."},"delete_explain_msg":{"message":"Deletes a Note."},"open_explain_msg":{"message":"Minimize a Note."},"new_note_title_msg":{"message":"New Note"},"default_color_msg":{"message":"Default Color"},"failed_load_page_msg":{"message":"This page failed to load."},"link_edit_note_msg":{"message":"If the link is not correct, Notes may not display properly."},"new_note_description_msg":{"message":"Double-click to edit"}}');

/***/ }),

/***/ "./public/_locales/ja/messages.json":
/*!******************************************!*\
  !*** ./public/_locales/ja/messages.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"appName":{"message":"どこでもメモ","description":"The name of the application"},"appShortName":{"message":"どこでもメモ","description":"The short_name (maximum of 12 characters recommended) is a short version of the app\'s name."},"appDescription":{"message":"直感的なメモのアプリです。","description":"The description of the application"},"browserActionTitle":{"message":"どこでもメモ","description":"The title of the browser action button"},"app_name":{"message":"どこでもメモ"},"welcome_msg":{"message":"ようこそ、どこでもメモへ！"},"no_note_msg":{"message":"メモがありません。"},"add_note_msg":{"message":"メモを追加する"},"confirm_remove_note_msg":{"message":"削除してよろしいですか？"},"confirm_remove_next_note_msg":{"message":"を削除してよろしいですか？"},"make_note_button_msg":{"message":"メモを作成する"},"setting_button_msg":{"message":"設定"},"menu_button_msg":{"message":"メモ一覧ページ"},"cannot_show_note_msg":{"message":"このページではメモを表示できません。"},"no_note_created_msg":{"message":"メモを作成する。"},"no_note_created_option_msg":{"message":"もしくは、右クリック「メモを追加する」から作成できます。"},"note_unavailable_msg":{"message":"この画面ではメモの作成はできません"},"how_to_use_page_link_msg":{"message":"使い方"},"note_header_msg":{"message":"メモ一覧"},"settings_header_msg":{"message":"設定"},"how_to_use_header_msg":{"message":"使い方"},"show_all_note_msg":{"message":"すべてのメモ"},"search_query_msg":{"message":"検索"},"this_page_note_list_msg":{"message":"このページのメモ一覧"},"setting_about_this_app":{"message":"どこでもメモについて"},"setting_about_this_app_created_by":{"message":"制作者"},"usage01":{"message":"ポップアップを固定することをおすすめします。"},"usage02":{"message":"ポップアップを開き、「+」ボタンをクリックしてメモを作成できます。"},"usage02_2":{"message":"もしくは画面上で右クリックのメニューから作成できます。"},"usage03":{"message":"ダブルクリックでタイトルと詳細を編集できます。"},"usage04":{"message":"マウスドラッグで移動可能です。リサイズをすることもできます。"},"usage05":{"message":"ポップアップから、今開いているページで作成したメモを閲覧することができます。"},"usage06":{"message":"メモ一覧ページ"},"usage06_2":{"message":"で今まで作ったメモを一覧できます。"},"usage07":{"message":"メモには、様々な機能があります。"},"note":{"message":"メモ"},"updated_at_msg":{"message":"更新"},"created_at_msg":{"message":"作成"},"save_msg":{"message":"保存"},"cancel_msg":{"message":"キャンセル"},"close_msg":{"message":"閉じる"},"save_error_msg":{"message":"保存に失敗しました。"},"save_error_msg_2":{"message":"再度お試しください。"},"save_error_word_maximum_msg":{"message":"文字数を減らして、再度お試しください。"},"discard_close_msg":{"message":"変更を破棄して閉じる"},"updated_at_sort_option":{"message":"更新日"},"created_at_sort_option":{"message":"作成日"},"title_sort_option":{"message":"タイトル"},"go_to_this_page":{"message":"このページに移動する"},"input_description_placeholder":{"message":"メモを入力"},"do_copy_msg":{"message":"クリップボードにコピーする"},"copied_msg":{"message":"コピーしました"},"pin_msg":{"message":"ピン"},"pin_select_option_unfixed_msg":{"message":"あり"},"pin_select_option_fixed_msg":{"message":"なし"},"color_msg":{"message":"カラー"},"open_msg":{"message":"縮小"},"open_select_option_yes_msg":{"message":"縮小する"},"open_select_option_no_msg":{"message":"縮小しない"},"size_msg":{"message":"サイズ"},"size_height_msg":{"message":"高さ"},"size_width_msg":{"message":"幅"},"position_msg":{"message":"位置"},"reset_position_msg":{"message":"位置をリセット"},"switch_pin_msg":{"message":"ピンを切り替える"},"minimize_msg":{"message":"最小化する"},"maximize_msg":{"message":"最大化"},"pinned_msg":{"message":"画面に固定する"},"remove_pinned_msg":{"message":"ページに固定する"},"detail_msg":{"message":"詳細"},"edit_msg":{"message":"編集"},"copy_msg":{"message":"コピー"},"delete_msg":{"message":"削除する"},"export_msg":{"message":"書き出し"},"csv_download_msg":{"message":"CSVダウンロード"},"text_download_msg":{"message":"txtダウンロード"},"please_reload_msg":{"message":"ページをリロードしてください。"},"maker_msg":{"message":"製作者"},"pin_explain_msg":{"message":"メモをピン留めすると、スクロールに追従します。"},"edit_explain_msg":{"message":"メモを編集モードに切り替えます。（もしくはダブルクリックで編集できます）"},"copy_explain_msg":{"message":"メモのテキストをクリップボードにコピーします。"},"color_explain_msg":{"message":"メモのカラーを編集します。"},"delete_explain_msg":{"message":"メモを削除します。"},"open_explain_msg":{"message":"メモを最小化します。"},"default_color_msg":{"message":"メモの初期カラー"},"new_note_title_msg":{"message":"新しいメモ"},"failed_load_page_msg":{"message":"ページの読み込みに失敗しました。"},"link_edit_note_msg":{"message":"リンクが正しくないと、正常にメモが表示されない場合があります。"},"new_note_description_msg":{"message":"ダブルクリックで編集"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/background/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGNBQWMsbUJBQW1CLElBQUksbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCO0FBQ3RHO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CLEdBQUcsb0JBQW9CLEdBQUcsZ0JBQWdCLEVBQUUsa0NBQWtDLEdBQUcsb0NBQW9DO0FBQ3RKO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RXRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3BhZ2VzL2JhY2tncm91bmQvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3BhZ2VzL2JhY2tncm91bmQvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9wYWdlcy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvcGFnZXMvbWVzc2FnZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvcGFnZXMvbWVzc2FnZS9oYW5kbGVyL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9wYWdlcy9tZXNzYWdlL3NlbmRlci9iYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvcGFnZXMvbWVzc2FnZS9zZW5kZXIvYmFzZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3N0b3JhZ2VzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3N0b3JhZ2VzL2RlZmF1bHRDb2xvclN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9zdG9yYWdlcy9ub3RlU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3N0b3JhZ2VzL25vdGVWaXNpYmxlU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3N0b3JhZ2VzL3BhZ2VJbmZvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3R5cGVzL05vdGUudHMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIGRvIG5vdCBlZGl0IC5qcyBmaWxlcyBkaXJlY3RseSAtIGVkaXQgc3JjL2luZGV4LmpzdFxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0cnVlIGlmIGJvdGggTmFOLCBmYWxzZSBvdGhlcndpc2VcbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldEJhZGdlVW5hdmFpbGFibGUgPSBleHBvcnRzLnNldEJhZGdlVGV4dCA9IGV4cG9ydHMuZ2V0U2V0dGluZyA9IGV4cG9ydHMuc2V0RGVmYXVsdENvbG9yID0gZXhwb3J0cy5nZXREZWZhdWx0Q29sb3IgPSBleHBvcnRzLnNldElzVmlzaWJsZU5vdGUgPSBleHBvcnRzLmdldElzVmlzaWJsZU5vdGUgPSBleHBvcnRzLnNjcm9sbFRvID0gZXhwb3J0cy51cGRhdGVQYWdlSW5mbyA9IGV4cG9ydHMuZmV0Y2hBbGxQYWdlSW5mbyA9IGV4cG9ydHMuZGVsZXRlTm90ZSA9IGV4cG9ydHMudXBkYXRlTm90ZSA9IGV4cG9ydHMuY3JlYXRlTm90ZSA9IGV4cG9ydHMuZmV0Y2hBbGxOb3Rlc0J5UGFnZVVybCA9IGV4cG9ydHMuZmV0Y2hBbGxOb3Rlc0FuZFBhZ2VJbmZvID0gZXhwb3J0cy5mZXRjaEFsbE5vdGVzID0gdm9pZCAwO1xuY29uc3Qgbm90ZVN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zdG9yYWdlcy9ub3RlU3RvcmFnZVwiKTtcbmNvbnN0IG5vdGVWaXNpYmxlU3RvcmFnZV8xID0gcmVxdWlyZShcIi4uLy4uL3N0b3JhZ2VzL25vdGVWaXNpYmxlU3RvcmFnZVwiKTtcbmNvbnN0IGRlZmF1bHRDb2xvclN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zdG9yYWdlcy9kZWZhdWx0Q29sb3JTdG9yYWdlXCIpO1xuY29uc3QgcGFnZUluZm9TdG9yYWdlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RvcmFnZXMvcGFnZUluZm9TdG9yYWdlXCIpO1xuY29uc3QgZmV0Y2hBbGxOb3RlcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IG5vdGVzID0geWllbGQgKDAsIG5vdGVTdG9yYWdlXzEuZ2V0QWxsTm90ZXMpKCk7XG4gICAgcmV0dXJuIG5vdGVzO1xufSk7XG5leHBvcnRzLmZldGNoQWxsTm90ZXMgPSBmZXRjaEFsbE5vdGVzO1xuY29uc3QgZmV0Y2hBbGxOb3Rlc0FuZFBhZ2VJbmZvID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3Qgbm90ZXMgPSB5aWVsZCAoMCwgbm90ZVN0b3JhZ2VfMS5nZXRBbGxOb3RlcykoKTtcbiAgICBjb25zdCBwYWdlSW5mb3MgPSB5aWVsZCAoMCwgcGFnZUluZm9TdG9yYWdlXzEuZ2V0QWxsUGFnZUluZm9zKSgpO1xuICAgIGNvbnN0IGZpbHRlcmVkUGFnZUluZm9zID0gcGFnZUluZm9zLmZpbHRlcigocGFnZUluZm8pID0+IHtcbiAgICAgICAgcmV0dXJuIG5vdGVzLnNvbWUoKG5vdGUpID0+IG5vdGUucGFnZV9pbmZvX2lkID09PSBwYWdlSW5mby5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgbm90ZXMsIHBhZ2VJbmZvczogZmlsdGVyZWRQYWdlSW5mb3MgfTtcbn0pO1xuZXhwb3J0cy5mZXRjaEFsbE5vdGVzQW5kUGFnZUluZm8gPSBmZXRjaEFsbE5vdGVzQW5kUGFnZUluZm87XG5jb25zdCBmZXRjaEFsbE5vdGVzQnlQYWdlVXJsID0gKHBhZ2VfdXJsKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBwYWdlSW5mbyA9IHlpZWxkICgwLCBwYWdlSW5mb1N0b3JhZ2VfMS5nZXRQYWdlSW5mb0J5VXJsKShwYWdlX3VybCk7XG4gICAgaWYgKCFwYWdlSW5mbyB8fCAhcGFnZUluZm8uaWQpXG4gICAgICAgIHJldHVybiBbXTtcbiAgICBjb25zdCBub3RlcyA9IHlpZWxkICgwLCBub3RlU3RvcmFnZV8xLmdldEFsbE5vdGVzQnlQYWdlSWQpKHBhZ2VJbmZvLmlkKTtcbiAgICByZXR1cm4gbm90ZXM7XG59KTtcbmV4cG9ydHMuZmV0Y2hBbGxOb3Rlc0J5UGFnZVVybCA9IGZldGNoQWxsTm90ZXNCeVBhZ2VVcmw7XG5jb25zdCBjcmVhdGVOb3RlID0gKHBhZ2VfdXJsKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBwYWdlSW5mbyA9IHlpZWxkICgwLCBwYWdlSW5mb1N0b3JhZ2VfMS5nZXRPckNyZWF0ZVBhZ2VJbmZvQnlVcmwpKHBhZ2VfdXJsKTtcbiAgICBjb25zdCB7IG5vdGUsIGFsbE5vdGVzIH0gPSB5aWVsZCAoMCwgbm90ZVN0b3JhZ2VfMS5jcmVhdGVOb3RlKShwYWdlSW5mby5pZCk7XG4gICAgKDAsIHBhZ2VJbmZvU3RvcmFnZV8xLnNldFVwZGF0ZWRBdFBhZ2VJbmZvKShwYWdlSW5mby5pZCk7XG4gICAgcmV0dXJuIGFsbE5vdGVzO1xufSk7XG5leHBvcnRzLmNyZWF0ZU5vdGUgPSBjcmVhdGVOb3RlO1xuY29uc3QgdXBkYXRlTm90ZSA9IChub3RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoIW5vdGUucGFnZV9pbmZvX2lkKVxuICAgICAgICByZXR1cm4gW107XG4gICAgY29uc3QgeyBhbGxOb3RlcyB9ID0geWllbGQgKDAsIG5vdGVTdG9yYWdlXzEudXBkYXRlTm90ZSkobm90ZS5wYWdlX2luZm9faWQsIG5vdGUpO1xuICAgICgwLCBwYWdlSW5mb1N0b3JhZ2VfMS5zZXRVcGRhdGVkQXRQYWdlSW5mbykobm90ZS5wYWdlX2luZm9faWQpO1xuICAgIHJldHVybiBhbGxOb3Rlcztcbn0pO1xuZXhwb3J0cy51cGRhdGVOb3RlID0gdXBkYXRlTm90ZTtcbmNvbnN0IGRlbGV0ZU5vdGUgPSAobm90ZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKCFub3RlLnBhZ2VfaW5mb19pZClcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHsgYWxsTm90ZXMgfSA9IHlpZWxkICgwLCBub3RlU3RvcmFnZV8xLmRlbGV0ZU5vdGUpKG5vdGUucGFnZV9pbmZvX2lkLCBub3RlLmlkKTtcbiAgICByZXR1cm4gYWxsTm90ZXM7XG59KTtcbmV4cG9ydHMuZGVsZXRlTm90ZSA9IGRlbGV0ZU5vdGU7XG5jb25zdCBmZXRjaEFsbFBhZ2VJbmZvID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcGFnZUluZm9zID0geWllbGQgKDAsIHBhZ2VJbmZvU3RvcmFnZV8xLmdldEFsbFBhZ2VJbmZvcykoKTtcbiAgICByZXR1cm4gcGFnZUluZm9zO1xufSk7XG5leHBvcnRzLmZldGNoQWxsUGFnZUluZm8gPSBmZXRjaEFsbFBhZ2VJbmZvO1xuY29uc3QgdXBkYXRlUGFnZUluZm8gPSAocGFnZV9pbmZvKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoIXBhZ2VfaW5mby5pZClcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHsgYWxsUGFnZUluZm9zIH0gPSB5aWVsZCAoMCwgcGFnZUluZm9TdG9yYWdlXzEudXBkYXRlUGFnZUluZm8pKHBhZ2VfaW5mbyk7XG4gICAgcmV0dXJuIGFsbFBhZ2VJbmZvcztcbn0pO1xuZXhwb3J0cy51cGRhdGVQYWdlSW5mbyA9IHVwZGF0ZVBhZ2VJbmZvO1xuY29uc3Qgc2Nyb2xsVG8gPSAodGFiSWQsIG5vdGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgZnVuYzogKHBvc2l0aW9uX3gsIHBvc2l0aW9uX3kpID0+IHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbl94ICE9PSBudWxsICYmIHBvc2l0aW9uX3ggIT09IHZvaWQgMCA/IHBvc2l0aW9uX3ggOiAwLCBwb3NpdGlvbl95ICE9PSBudWxsICYmIHBvc2l0aW9uX3kgIT09IHZvaWQgMCA/IHBvc2l0aW9uX3kgOiAwKSxcbiAgICAgICAgYXJnczogW25vdGUucG9zaXRpb25feCwgbm90ZS5wb3NpdGlvbl95XSxcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy5zY3JvbGxUbyA9IHNjcm9sbFRvO1xuY29uc3QgZ2V0SXNWaXNpYmxlTm90ZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCAoMCwgbm90ZVZpc2libGVTdG9yYWdlXzEuZ2V0SXNWaXNpYmxlTm90ZSkoKTtcbn0pO1xuZXhwb3J0cy5nZXRJc1Zpc2libGVOb3RlID0gZ2V0SXNWaXNpYmxlTm90ZTtcbmNvbnN0IHNldElzVmlzaWJsZU5vdGUgPSAoaXNWaXNpYmxlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCAoMCwgbm90ZVZpc2libGVTdG9yYWdlXzEuc2V0SXNWaXNpYmxlTm90ZSkoaXNWaXNpYmxlKTtcbiAgICByZXR1cm4gaXNWaXNpYmxlO1xufSk7XG5leHBvcnRzLnNldElzVmlzaWJsZU5vdGUgPSBzZXRJc1Zpc2libGVOb3RlO1xuY29uc3QgZ2V0RGVmYXVsdENvbG9yID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBkZWZhdWx0Q29sb3JTdG9yYWdlXzEuZ2V0RGVmYXVsdENvbG9yKSgpO1xufSk7XG5leHBvcnRzLmdldERlZmF1bHRDb2xvciA9IGdldERlZmF1bHRDb2xvcjtcbmNvbnN0IHNldERlZmF1bHRDb2xvciA9IChjb2xvcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgeWllbGQgKDAsIGRlZmF1bHRDb2xvclN0b3JhZ2VfMS5zZXREZWZhdWx0Q29sb3IpKGNvbG9yKTtcbiAgICByZXR1cm4geWllbGQgKDAsIGV4cG9ydHMuZ2V0U2V0dGluZykoKTtcbn0pO1xuZXhwb3J0cy5zZXREZWZhdWx0Q29sb3IgPSBzZXREZWZhdWx0Q29sb3I7XG5jb25zdCBnZXRTZXR0aW5nID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3Qgc2V0dGluZyA9IHtcbiAgICAgICAgaXNfdmlzaWJsZTogeWllbGQgKDAsIG5vdGVWaXNpYmxlU3RvcmFnZV8xLmdldElzVmlzaWJsZU5vdGUpKCksXG4gICAgICAgIGRlZmF1bHRfY29sb3I6IHlpZWxkICgwLCBkZWZhdWx0Q29sb3JTdG9yYWdlXzEuZ2V0RGVmYXVsdENvbG9yKSgpLFxuICAgIH07XG4gICAgcmV0dXJuIHNldHRpbmc7XG59KTtcbmV4cG9ydHMuZ2V0U2V0dGluZyA9IGdldFNldHRpbmc7XG5jb25zdCBzZXRCYWRnZVRleHQgPSAodGFiSWQsIG5vdGVMZW5ndGgpID0+IHtcbiAgICBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7IHRhYklkLCB0ZXh0OiBgJHtub3RlTGVuZ3RoICE9PSBudWxsICYmIG5vdGVMZW5ndGggIT09IHZvaWQgMCA/IG5vdGVMZW5ndGggOiBcIlwifWAgfSk7XG4gICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IHRhYklkLCBjb2xvcjogXCIjMDAwXCIgfSk7XG59O1xuZXhwb3J0cy5zZXRCYWRnZVRleHQgPSBzZXRCYWRnZVRleHQ7XG5jb25zdCBzZXRCYWRnZVVuYXZhaWxhYmxlID0gKHRhYklkKSA9PiB7XG4gICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0YWJJZCwgdGV4dDogXCJ4XCIgfSk7XG4gICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IHRhYklkLCBjb2xvcjogXCJyZWRcIiB9KTtcbn07XG5leHBvcnRzLnNldEJhZGdlVW5hdmFpbGFibGUgPSBzZXRCYWRnZVVuYXZhaWxhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNhY2hlID0gdm9pZCAwO1xuLyoqXG4gKiBDYWNoZVxuICogLSBiYWRnZTog44OQ44OD44K4KD3jg6Hjg6Ljga7mlbDjgpLnpLrjgZkp44KS5L+d5oyB44GZ44KLXG4gKi9cbmNvbnN0IGNhY2hlID0ge1xuICAgIGJhZGdlOiB7fSxcbn07XG5leHBvcnRzLmNhY2hlID0gY2FjaGU7XG5PYmplY3QuZnJlZXplKGNhY2hlKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJPT1RfRE9NX0lEID0gdm9pZCAwO1xuY29uc3QgYmFja2dyb3VuZF8xID0gcmVxdWlyZShcIi4uL21lc3NhZ2UvaGFuZGxlci9iYWNrZ3JvdW5kXCIpO1xuY29uc3QgYmFja2dyb3VuZF8yID0gcmVxdWlyZShcIi4uL21lc3NhZ2Uvc2VuZGVyL2JhY2tncm91bmRcIik7XG5jb25zdCBhY3Rpb25zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjdGlvbnNcIikpO1xuY29uc3Qgbm90ZVN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9zdG9yYWdlcy9ub3RlU3RvcmFnZVwiKTtcbmNvbnN0IHBhZ2VJbmZvU3RvcmFnZV8xID0gcmVxdWlyZShcIi4uLy4uL3N0b3JhZ2VzL3BhZ2VJbmZvU3RvcmFnZVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jb25zdCBjYWNoZV8xID0gcmVxdWlyZShcIi4vY2FjaGVcIik7XG5leHBvcnRzLlJPT1RfRE9NX0lEID0gXCJyZWFjdC1jb250YWluZXItZm9yLW5vdGUtZXh0ZW5zaW9uXCI7XG4vKipcbiAqIFNlcnZpY2UgV29ya2VyXG4gKlxuICogMS4g44Ot44O844Kr44Or44K544OI44Os44O844K444Gu44OH44O844K/44KS566h55CG44GZ44KLXG4gKiAgIDEtMS4gQ29udGVudFNjcmlwdCxPcHRpb24sUG9wdXDjgYvjgonjga7jgqLjgq/jgrfjg6fjg7PjgpLlj5fjgZHlj5bjgorjgIHjg4fjg7zjgr/jgpLmm7TmlrDjgZnjgotcbiAqICAgMS0yLiBDb250ZW50U2NyaXB044G444OH44O844K/44KS6YCB5L+h44GZ44KLXG4gKlxuICogU2VydmljZSBXb3JrZXLjgafjga8gYXN5bmMvYXdhaXQg44GM5L2/44GI44Gq44GE44Gu44Gn44CBUHJvbWlzZeOCkuS9v+OBhlxuICovXG4vLyBpbnN0YWxsIG9yIFVwZGF0ZeOBl+OBpuWIneOCgeOBpumWi+OBhOOBn+aZguOBq+WRvOOBsOOCjOOCi+OAglxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IHtcbiAgICBjb25zdCBwcmV2aW91c1ZlcnNpb24gPSBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbiB8fCBcIngueC54XCI7XG4gICAgaWYgKHByZXZpb3VzVmVyc2lvbiA9PT0gXCIwLjMuMVwiKSB7XG4gICAgICAgIGFjdGlvbnMuc2V0RGVmYXVsdENvbG9yKFwiI0ZGRjdDQ1wiKTtcbiAgICB9XG4gICAgaWYgKGRldGFpbHMucmVhc29uID09PSBjaHJvbWUucnVudGltZS5Pbkluc3RhbGxlZFJlYXNvbi5JTlNUQUxMICYmIHByZXZpb3VzVmVyc2lvbiA9PT0gXCJ4LngueFwiKSB7XG4gICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7XG4gICAgICAgICAgICB1cmw6IGAke2Nocm9tZS5ydW50aW1lLmdldFVSTChcInNldHRpbmcuaHRtbFwiKX0jaW5pdGAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInByZXZpb3VzVmVyc2lvblwiLCBwcmV2aW91c1ZlcnNpb24pO1xufSk7XG4vKipcbiAqIOWPs+OCr+ODquODg+OCr+ODoeODi+ODpeODvFxuICovXG5jaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgaWQ6IFwibm90ZS1leHRlbnNpb24tY29udGV4dC1tZW51LWNyZWF0ZVwiLFxuICAgIHRpdGxlOiAoMCwgdXRpbHNfMS5tc2cpKFwiYWRkX25vdGVfbXNnXCIsIHRydWUpLFxuICAgIGNvbnRleHRzOiBbXCJwYWdlXCIsIFwiZnJhbWVcIiwgXCJlZGl0YWJsZVwiLCBcImltYWdlXCIsIFwidmlkZW9cIiwgXCJhdWRpb1wiLCBcImxpbmtcIiwgXCJzZWxlY3Rpb25cIl0sXG59KTtcbmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChpbmZvKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlVXJsIH0gPSBpbmZvO1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pLnRoZW4oKFt0YWJdKSA9PiB7XG4gICAgICAgIGlmICghKHRhYiA9PT0gbnVsbCB8fCB0YWIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYi5pZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICgwLCBiYWNrZ3JvdW5kXzEuaXNTY3JpcHRBbGxvd2VkUGFnZSkodGFiLmlkKVxuICAgICAgICAgICAgLnRoZW4oKGlzQWxsb3dlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgICgwLCBwYWdlSW5mb1N0b3JhZ2VfMS5nZXRPckNyZWF0ZVBhZ2VJbmZvQnlVcmwpKHBhZ2VVcmwpLnRoZW4oKHBhZ2VJbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFnZUluZm8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICgwLCBub3RlU3RvcmFnZV8xLmNyZWF0ZU5vdGUpKHBhZ2VJbmZvLmlkKS50aGVuKCh7IGFsbE5vdGVzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlXzEuY2FjaGUuYmFkZ2VbdGFiLmlkXSA9IGFsbE5vdGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuZ2V0U2V0dGluZygpLnRoZW4oKHNldHRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0YWIgPT09IG51bGwgfHwgdGFiID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWIuaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIGJhY2tncm91bmRfMS5pbmplY3RDb250ZW50U2NyaXB0KSh0YWIuaWQpLnRoZW4oKCkgPT4gKDAsIGJhY2tncm91bmRfMi5zZXR1cFBhZ2UpKHRhYi5pZCwgcGFnZVVybCwgYWxsTm90ZXMsIHNldHRpbmcpLmNhdGNoKCgpID0+IHsgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgLy8gVE9ETzog44Ko44Op44O85pmC44Gu5Yem55CGXG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjaHJvbWUucnVudGltZSkub3Blbk9wdGlvbnNQYWdlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4vLyDnm7Tov5Hjgavoqq3jgb/ovrzjgb7jgozjgZ/jg5rjg7zjgrhVUkxcbmxldCBjdXJyZW50VXJsID0gXCJcIjtcbi8qKlxuICog44K/44OW44GM5pu05paw44GV44KM44Gf5pmC44Gr5ZG844Gw44KM44KLXG4gKiAwLiDnhKHlirnjgarjg5rjg7zjgrjjga7loLTlkIjjga/jgarjgavjgoLjgZfjgarjgYRcbiAqIDEuIOODmuODvOOCuOOBq+e0kOOBpeOBj+ODoeODouOBjOOBquOBhOWgtOWQiOOAgWNvbnRlbnRTY3JpcHTjgpLlrp/ooYzjgZvjgZrjgIFbXeOCkui/lOOBme+8iFNQQeWvvuetlu+8iVxuICogMi4g44Oa44O844K444Gr57SQ44Gl44GP44Oh44Oi44GM44GC44KL5aC05ZCI44CBY29udGVudFNjcmlwdOOCkuWun+ihjOOBl+OAgeODoeODouOCkui/lOOBmVxuICovXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gY2hhbmdlSW5mbztcbiAgICBpZiAoc3RhdHVzICE9PSBcImxvYWRpbmdcIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHsgdXJsIH0gPSB0YWI7XG4gICAgLy8gaWZyYW1l44KS6Kqt44G/6L6844G+44KM44Gf44K/44Kk44Of44Oz44Kw44Gn44KC6LWw44KL44Gu44Gn44CB5ZCM5LiAVVJM44KS6Kqt44G/6L6844KT44Gg6Zqb44Gv54Sh6KaW44GZ44KL44KI44GG44Gr44GZ44KLXG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRVcmwgPT09IHVybClcbiAgICAgICAgcmV0dXJuO1xuICAgIGN1cnJlbnRVcmwgPSB1cmw7XG4gICAgaWYgKCgwLCB1dGlsc18xLmlzU3lzdGVtTGluaykodXJsKSlcbiAgICAgICAgcmV0dXJuO1xuICAgICgwLCBiYWNrZ3JvdW5kXzEuaXNTY3JpcHRBbGxvd2VkUGFnZSkodGFiSWQpLnRoZW4oKGlzQWxsb3dlZCkgPT4ge1xuICAgICAgICBpZiAoaXNBbGxvd2VkKSB7XG4gICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZldGNoQWxsTm90ZXNCeVBhZ2VVcmwodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChub3RlcykgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZ2V0U2V0dGluZygpLnRoZW4oKHNldHRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVybCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBiYWNrZ3JvdW5kXzEuaGFzQ29udGVudFNjcmlwdCkodGFiSWQpLnRoZW4oKGhhcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudFNjcmlwdOOBjOaXouOBq+OBguOCiuOAgeODoeODouOBjOOBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeODouOCkuOCu+ODg+ODiOOBmeOCiyhTUEHlr77nrZYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBiYWNrZ3JvdW5kXzIuc2V0dXBQYWdlKSh0YWJJZCwgdXJsLCBbXSwgc2V0dGluZykuY2F0Y2goKGUpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5zZXRCYWRnZVRleHQodGFiSWQsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICgwLCBiYWNrZ3JvdW5kXzEuaW5qZWN0Q29udGVudFNjcmlwdCkodGFiSWQpLnRoZW4oKCkgPT4gKDAsIGJhY2tncm91bmRfMi5zZXR1cFBhZ2UpKHRhYklkLCB1cmwsIG5vdGVzLCBzZXR0aW5nKS5jYXRjaCgoZSkgPT4geyB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyXCIsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLyoqXG4gKiDjgr/jg5bjgYzliIfjgormm7/jgo/jgovjgZ/jgbPjgavlkbzjgbDjgozjgotcbiAqXG4gKiDopIfpm5Hjgarlh6bnkIbjgoTph43jgYTjg63jgrjjg4Pjgq/jga9DaHJvbWXjga7jg5Hjg5Xjgqnjg7zjg57jg7PjgrnjgavlvbHpn7/jgpLkuI7jgYjjgovlj6/og73mgKfjgYzjgYLjgotcbiAqICovXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigoYWN0aXZlSW5mbykgPT4ge1xuICAgIGlmIChjYWNoZV8xLmNhY2hlLmJhZGdlW2FjdGl2ZUluZm8udGFiSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWN0aW9ucy5zZXRCYWRnZVRleHQoYWN0aXZlSW5mby50YWJJZCwgY2FjaGVfMS5jYWNoZS5iYWRnZVthY3RpdmVJbmZvLnRhYklkXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhY3Rpb25zLnNldEJhZGdlVGV4dChhY3RpdmVJbmZvLnRhYklkLCBcIlwiKTtcbiAgICB9XG59KTtcbi8qKlxuICog44K/44OW44GM6ZaJ44GY44KJ44KM44Gf5pmC44Gr5ZG844Gw44KM44KLXG4gKi9cbmNocm9tZS50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQpID0+IHtcbiAgICBkZWxldGUgY2FjaGVfMS5jYWNoZS5iYWRnZVt0YWJJZF07XG59KTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihiYWNrZ3JvdW5kXzEuaGFuZGxlTWVzc2FnZXMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIOODoeODg+OCu+ODvOOCuOOBruOCouOCr+OCt+ODp+ODs+Wumue+qVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9QVElPTlMgPSBleHBvcnRzLkJBQ0tHUk9VTkQgPSBleHBvcnRzLkNPTlRFTlRfU0NSSVBUID0gZXhwb3J0cy5QT1BVUCA9IGV4cG9ydHMuU0VUX05PVEVfVklTSUJMRSA9IGV4cG9ydHMuU0VUVVBfUEFHRSA9IGV4cG9ydHMuVVBEQVRFX05PVEVfVklTSUJMRSA9IGV4cG9ydHMuT1BFTl9PUFRJT05fUEFHRSA9IGV4cG9ydHMuU0NST0xMX1RPX1RBUkdFVF9OT1RFID0gZXhwb3J0cy5VUERBVEVfREVGQVVMVF9DT0xPUiA9IGV4cG9ydHMuR0VUX1NFVFRJTkcgPSBleHBvcnRzLlVQREFURV9OT1RFX0lORk8gPSBleHBvcnRzLkdFVF9OT1RFX1ZJU0lCTEUgPSBleHBvcnRzLkdFVF9BTExfTk9URVNfQU5EX1BBR0VfSU5GTyA9IGV4cG9ydHMuREVMRVRFX05PVEUgPSBleHBvcnRzLlVQREFURV9OT1RFID0gZXhwb3J0cy5DUkVBVEVfTk9URSA9IGV4cG9ydHMuR0VUX05PVEVTX0JZX1BBR0VfSUQgPSBleHBvcnRzLkdFVF9BTExfTk9URVMgPSB2b2lkIDA7XG4vLyBjb250ZW50U2NyaXB0LCBQb3B1cCwgT3B0aW9uIOKGkiBiYWNrZ3JvdW5kXG5leHBvcnRzLkdFVF9BTExfTk9URVMgPSBcIkdFVF9BTExfTk9URVNcIjtcbmV4cG9ydHMuR0VUX05PVEVTX0JZX1BBR0VfSUQgPSBcIkdFVF9OT1RFU19CWV9QQUdFX0lEXCI7XG5leHBvcnRzLkNSRUFURV9OT1RFID0gXCJDUkVBVEVfTk9URVwiO1xuZXhwb3J0cy5VUERBVEVfTk9URSA9IFwiVVBEQVRFX05PVEVcIjtcbmV4cG9ydHMuREVMRVRFX05PVEUgPSBcIkRFTEVURV9OT1RFXCI7XG5leHBvcnRzLkdFVF9BTExfTk9URVNfQU5EX1BBR0VfSU5GTyA9IFwiR0VUX0FMTF9OT1RFU19BTkRfUEFHRV9JTkZPXCI7XG5leHBvcnRzLkdFVF9OT1RFX1ZJU0lCTEUgPSBcIkdFVF9OT1RFX1ZJU0lCTEVcIjtcbmV4cG9ydHMuVVBEQVRFX05PVEVfSU5GTyA9IFwiVVBEQVRFX05PVEVfSU5GT1wiO1xuZXhwb3J0cy5HRVRfU0VUVElORyA9IFwiR0VUX1NFVFRJTkdcIjtcbmV4cG9ydHMuVVBEQVRFX0RFRkFVTFRfQ09MT1IgPSBcIlVQREFURV9ERUZBVUxUX0NPTE9SXCI7XG4vLyBQb3B1cCDihpIgY29udGVudFNjcmlwdFxuZXhwb3J0cy5TQ1JPTExfVE9fVEFSR0VUX05PVEUgPSBcIlNDUk9MTF9UT19UQVJHRVRfTk9URVwiO1xuZXhwb3J0cy5PUEVOX09QVElPTl9QQUdFID0gXCJPUEVOX09QVElPTl9QQUdFXCI7XG5leHBvcnRzLlVQREFURV9OT1RFX1ZJU0lCTEUgPSBcIlVQREFURV9OT1RFX1ZJU0lCTEVcIjsgLy8g44Oh44Oi44Gu6KGo56S66Kit5a6a44KS5pu05pawXG4vLyBiYWNrZ3JvdW5kIOKGkiBjb250ZW50U2NyaXB0LCBQb3B1cFxuZXhwb3J0cy5TRVRVUF9QQUdFID0gXCJTRVRVUF9QQUdFXCI7IC8vIOWFqOOBpuOBruODoeODouOCkuOCu+ODg+ODiOOBmeOCi1xuZXhwb3J0cy5TRVRfTk9URV9WSVNJQkxFID0gXCJTRVRfTk9URV9WSVNJQkxFXCI7IC8vIOODoeODouOBruihqOekuuioreWumuOCkuOCu+ODg+ODiOOBmeOCi1xuLy8gcGFnZSB0eXBlXG5leHBvcnRzLlBPUFVQID0gXCJQT1BVUFwiO1xuZXhwb3J0cy5DT05URU5UX1NDUklQVCA9IFwiQ09OVEVOVF9TQ1JJUFRcIjtcbmV4cG9ydHMuQkFDS0dST1VORCA9IFwiQkFDS0dST1VORFwiO1xuZXhwb3J0cy5PUFRJT05TID0gXCJPUFRJT05TXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZU1lc3NhZ2VzID0gZXhwb3J0cy5pbmplY3RDb250ZW50U2NyaXB0ID0gZXhwb3J0cy5oYXNDb250ZW50U2NyaXB0ID0gZXhwb3J0cy5pc1NjcmlwdEFsbG93ZWRQYWdlID0gZXhwb3J0cy5ST09UX0RPTV9JRCA9IHZvaWQgMDtcbmNvbnN0IGFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zXCIpO1xuY29uc3QgYWN0aW9ucyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vLi4vYmFja2dyb3VuZC9hY3Rpb25zXCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHNcIik7XG5jb25zdCBiYWNrZ3JvdW5kXzEgPSByZXF1aXJlKFwiLi4vc2VuZGVyL2JhY2tncm91bmRcIik7XG5leHBvcnRzLlJPT1RfRE9NX0lEID0gXCJyZWFjdC1jb250YWluZXItZm9yLW5vdGUtZXh0ZW5zaW9uXCI7XG4vLyDjg6Hjg6LmjL/lhaXjgYzlj6/og73jgarjg5rjg7zjgrjjgYvjganjgYbjgYvjgpLliKTlrprjgZnjgotcbmNvbnN0IGlzU2NyaXB0QWxsb3dlZFBhZ2UgPSAodGFiSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICBmdW5jOiAoKSA9PiB7IH0sXG4gICAgfSk7XG4gICAgcmV0dXJuICFjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG59KTtcbmV4cG9ydHMuaXNTY3JpcHRBbGxvd2VkUGFnZSA9IGlzU2NyaXB0QWxsb3dlZFBhZ2U7XG4vLyDml6LjgavjgrPjg7Pjg4bjg7Pjg4Tjgrnjgq/jg6rjg5fjg4jjgYzmjL/lhaXjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYvjgpLliKTlrprjgZnjgotcbmNvbnN0IGhhc0NvbnRlbnRTY3JpcHQgPSAodGFiSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IFtyZXNdID0geWllbGQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWN0LWNvbnRhaW5lci1mb3Itbm90ZS1leHRlbnNpb25cIik7XG4gICAgICAgICAgICByZXR1cm4gISFub3RlRE9NO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXMucmVzdWx0O1xufSk7XG5leHBvcnRzLmhhc0NvbnRlbnRTY3JpcHQgPSBoYXNDb250ZW50U2NyaXB0O1xuLy8g44Kz44Oz44OG44Oz44OE44K544Kv44Oq44OX44OI44KS5oy/5YWl44GZ44KLXG5jb25zdCBpbmplY3RDb250ZW50U2NyaXB0ID0gKHRhYklkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBoYXNTY3JpcHQgPSB5aWVsZCAoMCwgZXhwb3J0cy5oYXNDb250ZW50U2NyaXB0KSh0YWJJZCk7XG4gICAgLy8g5pei44Gr5oy/5YWl44GV44KM44Gm44GE44KL5aC05ZCI44Gv5L2V44KC44GX44Gq44GEXG4gICAgaWYgKGhhc1NjcmlwdClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB5aWVsZCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgZmlsZXM6IFtcImNvbnRlbnRTY3JpcHQuanNcIl0sXG4gICAgfSk7XG59KTtcbmV4cG9ydHMuaW5qZWN0Q29udGVudFNjcmlwdCA9IGluamVjdENvbnRlbnRTY3JpcHQ7XG4vLyDjgrPjg7Pjg4bjg7Pjg4Tjgrnjgq/jg6rjg5fjg4jjgYvjgonjga7jg6Hjg4Pjgrvjg7zjgrjjg4/jg7Pjg4njg6lcbmNvbnN0IF9oYW5kbGVNZXNzYWdlc0Zyb21Db250ZW50U2NyaXB0ID0gKG1ldGhvZCwgc2VuZFJlc3BvbnNlLCBwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgeyB1cmwgPSBcIlwiLCBub3RlIH0gPSBwYXlsb2FkO1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLkdFVF9BTExfTk9URVM6XG4gICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZldGNoQWxsTm90ZXNCeVBhZ2VVcmwodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChub3RlcykgPT4gc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBub3RlcyB9IH0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgR0VUX0FMTF9OT1RFUzpcIiwgZSk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIGFjdGlvbnNfMS5DUkVBVEVfTk9URTpcbiAgICAgICAgICAgIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAuY3JlYXRlTm90ZSh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKG5vdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyB1cmwsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSkudGhlbigodGFicykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldEJhZGdlVGV4dCh0YWIuaWQsIChfYSA9IG5vdGVzLmxlbmd0aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoeyBkYXRhOiB7IG5vdGVzIH0gfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgQ1JFQVRFX05PVEU6XCIsIGUpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBhY3Rpb25zXzEuVVBEQVRFX05PVEU6XG4gICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgLnVwZGF0ZU5vdGUobm90ZSlcbiAgICAgICAgICAgICAgICAudGhlbigobm90ZXMpID0+IHNlbmRSZXNwb25zZSh7IGRhdGE6IHsgbm90ZXMgfSB9KSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIFVQREFURV9OT1RFOlwiLCBlKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLkRFTEVURV9OT1RFOlxuICAgICAgICAgICAgYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5kZWxldGVOb3RlKG5vdGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oKG5vdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyB1cmwsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSkudGhlbigodGFicykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldEJhZGdlVGV4dCh0YWIuaWQsIChfYSA9IG5vdGVzLmxlbmd0aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoeyBkYXRhOiB7IG5vdGVzIH0gfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgREVMRVRFX05PVEU6XCIsIGUpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBhY3Rpb25zXzEuT1BFTl9PUFRJT05fUEFHRTpcbiAgICAgICAgICAgIC8vIG9wZW5fb3B0aW9uX3BhZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGFjdGlvbnNfMS5HRVRfTk9URV9WSVNJQkxFOlxuICAgICAgICAgICAgYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5nZXRJc1Zpc2libGVOb3RlKClcbiAgICAgICAgICAgICAgICAudGhlbigoaXNWaXNpYmxlKSA9PiBzZW5kUmVzcG9uc2UoeyBkYXRhOiB7IGlzVmlzaWJsZSB9IH0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgR0VUX05PVEVfVklTSUJMRTpcIiwgZSk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vLyDjg53jg4Pjg5fjgqLjg4Pjg5fjgYvjgonjga7jg6Hjg4Pjgrvjg7zjgrjjg4/jg7Pjg4njg6lcbmNvbnN0IF9oYW5kbGVNZXNzYWdlc0Zyb21Qb3B1cCA9IChtZXRob2QsIHNlbmRSZXNwb25zZSwgcGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHsgdGFiLCBub3RlLCBpc1Zpc2libGUgfSA9IHBheWxvYWQ7XG4gICAgY29uc3QgdGFiSWQgPSB0YWIgPT09IG51bGwgfHwgdGFiID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWIuaWQ7XG4gICAgY29uc3QgdGFiVXJsID0gdGFiID09PSBudWxsIHx8IHRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFiLnVybDtcbiAgICBpZiAoIXRhYklkIHx8ICF0YWJVcmwpIHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBub3RlczogW10gfSwgZXJyb3I6IG5ldyBFcnJvcihcIuOBk+OBruODmuODvOOCuOOBp+OBr+S9v+eUqOOBp+OBjeOBvuOBm+OCk1wiKSB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIENocm9tZeOCt+OCueODhuODoOeUu+mdouOBr+OAgeOCouOCr+OCt+ODp+ODs+OCkuWun+ihjOOBl+OBquOBhOOCiOOBhuOBq+OBmeOCi1xuICAgIGlmICgoMCwgdXRpbHNfMS5pc1N5c3RlbUxpbmspKHRhYlVybCkpIHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBub3RlczogW10gfSwgZXJyb3I6IG5ldyBFcnJvcihcIuOBk+OBruODmuODvOOCuOOBp+OBr+S9v+eUqOOBp+OBjeOBvuOBm+OCk1wiKSB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHNlbmRSZXNwb25zZUFuZFNldE5vdGVzID0gKG5vdGVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuZ2V0U2V0dGluZygpLnRoZW4oKHNldHRpbmcpID0+IHtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGE6IHsgbm90ZXMgfSB9KTtcbiAgICAgICAgICAgICgwLCBleHBvcnRzLmluamVjdENvbnRlbnRTY3JpcHQpKHRhYklkKS50aGVuKCgpID0+ICgwLCBiYWNrZ3JvdW5kXzEuc2V0dXBQYWdlKSh0YWJJZCwgdGFiVXJsLCBub3Rlcywgc2V0dGluZykuY2F0Y2goKGUpID0+IHsgfSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgICgwLCBleHBvcnRzLmlzU2NyaXB0QWxsb3dlZFBhZ2UpKHRhYklkKS50aGVuKChpc0FsbG93ZWQpID0+IHtcbiAgICAgICAgLy8gY29udGVudF9zY3JpcHTjgYznhKHlirnjgarjg5rjg7zjgrjjga/jgIHjgqLjgq/jgrfjg6fjg7PjgpLlrp/ooYzjgZfjgarjgYTjgojjgYbjgavjgZnjgotcbiAgICAgICAgaWYgKCFpc0FsbG93ZWQpXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhOiB7IG5vdGVzOiBbXSB9LCBlcnJvcjogbmV3IEVycm9yKFwi44GT44Gu44Oa44O844K444Gn44Gv5L2/55So44Gn44GN44G+44Gb44KTXCIpIH0pO1xuICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25zXzEuR0VUX0FMTF9OT1RFUzpcbiAgICAgICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIC5mZXRjaEFsbE5vdGVzQnlQYWdlVXJsKHRhYlVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG5vdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuZ2V0SXNWaXNpYmxlTm90ZSgpLnRoZW4oKGlzVmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBub3RlcywgaXNWaXNpYmxlIH0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJlcnJvciBHRVRfQUxMX05PVEVTOlwiLCBlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbnNfMS5DUkVBVEVfTk9URTpcbiAgICAgICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIC5jcmVhdGVOb3RlKHRhYlVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG5vdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRCYWRnZVRleHQodGFiSWQsIChfYSA9IG5vdGVzLmxlbmd0aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZUFuZFNldE5vdGVzKG5vdGVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgQ1JFQVRFX05PVEU6XCIsIGUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uc18xLlNDUk9MTF9UT19UQVJHRVRfTk9URTpcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnNjcm9sbFRvKHRhYklkLCBub3RlKS50aGVuKCgpID0+IHNlbmRSZXNwb25zZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uc18xLlVQREFURV9OT1RFOlxuICAgICAgICAgICAgICAgIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZU5vdGUobm90ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc2VuZFJlc3BvbnNlQW5kU2V0Tm90ZXMpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIFVQREFURV9OT1RFOlwiLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uc18xLkRFTEVURV9OT1RFOlxuICAgICAgICAgICAgICAgIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZU5vdGUobm90ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG5vdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRCYWRnZVRleHQodGFiSWQsIChfYSA9IG5vdGVzLmxlbmd0aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZUFuZFNldE5vdGVzKG5vdGVzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBERUxFVEVfTk9URTpcIiwgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbnNfMS5HRVRfTk9URV9WSVNJQkxFOlxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZ2V0SXNWaXNpYmxlTm90ZSgpLnRoZW4oKGlzVmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhOiB7IGlzVmlzaWJsZSB9IH0pO1xuICAgICAgICAgICAgICAgICAgICAoMCwgZXhwb3J0cy5pbmplY3RDb250ZW50U2NyaXB0KSh0YWJJZCkudGhlbigoKSA9PiAoMCwgYmFja2dyb3VuZF8xLnNldHVwSXNWaXNpYmxlKSh0YWJJZCwgdGFiVXJsLCBpc1Zpc2libGUpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uc18xLlVQREFURV9OT1RFX1ZJU0lCTEU6XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRJc1Zpc2libGVOb3RlKCEhaXNWaXNpYmxlKS50aGVuKChpc1Zpc2libGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBpc1Zpc2libGUgfSB9KTtcbiAgICAgICAgICAgICAgICAgICAgKDAsIGV4cG9ydHMuaW5qZWN0Q29udGVudFNjcmlwdCkodGFiSWQpLnRoZW4oKCkgPT4gKDAsIGJhY2tncm91bmRfMS5zZXR1cElzVmlzaWJsZSkodGFiSWQsIHRhYlVybCwgaXNWaXNpYmxlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuLy8g44Kq44OX44K344On44Oz44Oa44O844K444GL44KJ44Gu44Oh44OD44K744O844K444OP44Oz44OJ44OpXG5jb25zdCBfaGFuZGxlTWVzc2FnZXNGcm9tT3B0aW9uID0gKG1ldGhvZCwgc2VuZFJlc3BvbnNlLCBwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgeyB0YWIsIG5vdGUsIHBhZ2VJbmZvIH0gPSBwYXlsb2FkO1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLkdFVF9BTExfTk9URVM6XG4gICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZldGNoQWxsTm90ZXMoKVxuICAgICAgICAgICAgICAgIC50aGVuKChub3RlcykgPT4gc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBub3RlcyB9IH0pKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJlcnJvciBHRVRfQUxMX05PVEVTOlwiLCBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBhY3Rpb25zXzEuR0VUX0FMTF9OT1RFU19BTkRfUEFHRV9JTkZPOlxuICAgICAgICAgICAgYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5mZXRjaEFsbE5vdGVzQW5kUGFnZUluZm8oKVxuICAgICAgICAgICAgICAgIC50aGVuKCh7IG5vdGVzLCBwYWdlSW5mb3MgfSkgPT4gc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBub3RlcywgcGFnZUluZm9zIH0gfSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhcImVycm9yIEdFVF9BTExfTk9URVM6XCIsIGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIGFjdGlvbnNfMS5VUERBVEVfTk9URTpcbiAgICAgICAgICAgIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAudXBkYXRlTm90ZShub3RlKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIC5mZXRjaEFsbE5vdGVzQW5kUGFnZUluZm8oKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoeyBub3RlcywgcGFnZUluZm9zIH0pID0+IHNlbmRSZXNwb25zZSh7IGRhdGE6IHsgbm90ZXMsIHBhZ2VJbmZvcyB9IH0pKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBVUERBVEVfTk9URTpcIiwgZSk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIGFjdGlvbnNfMS5ERUxFVEVfTk9URTpcbiAgICAgICAgICAgIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAuZGVsZXRlTm90ZShub3RlKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZldGNoQWxsTm90ZXNBbmRQYWdlSW5mbygpLnRoZW4oKHsgbm90ZXMsIHBhZ2VJbmZvcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYiA9PT0gbnVsbCB8fCB0YWIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0QmFkZ2VUZXh0KHRhYi5pZCwgKF9hID0gbm90ZXMubGVuZ3RoKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBub3RlcywgcGFnZUluZm9zIH0gfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJlcnJvciBERUxFVEVfTk9URTpcIiwgZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLlVQREFURV9OT1RFX0lORk86XG4gICAgICAgICAgICBhY3Rpb25zXG4gICAgICAgICAgICAgICAgLnVwZGF0ZVBhZ2VJbmZvKHBhZ2VJbmZvKVxuICAgICAgICAgICAgICAgIC50aGVuKChwYWdlSW5mb3MpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhOiB7IHBhZ2VJbmZvcyB9IH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgVVBEQVRFX05PVEVfSU5GTzpcIiwgZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLkdFVF9TRVRUSU5HOlxuICAgICAgICAgICAgYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5nZXRTZXR0aW5nKClcbiAgICAgICAgICAgICAgICAudGhlbigoc2V0dGluZykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGE6IHsgc2V0dGluZyB9IH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgR0VUX1NFVFRJTkc6XCIsIGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIGFjdGlvbnNfMS5VUERBVEVfREVGQVVMVF9DT0xPUjpcbiAgICAgICAgICAgIGFjdGlvbnNcbiAgICAgICAgICAgICAgICAuc2V0RGVmYXVsdENvbG9yKHBheWxvYWQuZGVmYXVsdENvbG9yKVxuICAgICAgICAgICAgICAgIC50aGVuKChzZXR0aW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZGF0YTogeyBzZXR0aW5nIH0gfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJlcnJvciBVUERBVEVfREVGQVVMVF9DT0xPUjpcIiwgZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHsgbm90ZXM6IFtdLCBwYWdlSW5mb3M6IFtdIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcihcIueEoeWKueOBquOCouOCr+OCt+ODp+ODs+OBp+OBmVwiKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbmNvbnN0IGhhbmRsZU1lc3NhZ2VzID0gKGFjdGlvbiwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB7IG1ldGhvZCwgc2VuZGVyVHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuICAgIGNvbnNvbGUubG9nKFwiPT09PSBoYW5kbGVNZXNzYWdlID09PT1cIiwgYWN0aW9uLCBwYXlsb2FkKTtcbiAgICBzd2l0Y2ggKHNlbmRlclR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25zXzEuQ09OVEVOVF9TQ1JJUFQ6XG4gICAgICAgICAgICByZXR1cm4gX2hhbmRsZU1lc3NhZ2VzRnJvbUNvbnRlbnRTY3JpcHQobWV0aG9kLCBzZW5kUmVzcG9uc2UsIHBheWxvYWQgIT09IG51bGwgJiYgcGF5bG9hZCAhPT0gdm9pZCAwID8gcGF5bG9hZCA6IHt9KTtcbiAgICAgICAgY2FzZSBhY3Rpb25zXzEuUE9QVVA6XG4gICAgICAgICAgICByZXR1cm4gX2hhbmRsZU1lc3NhZ2VzRnJvbVBvcHVwKG1ldGhvZCwgc2VuZFJlc3BvbnNlLCBwYXlsb2FkICE9PSBudWxsICYmIHBheWxvYWQgIT09IHZvaWQgMCA/IHBheWxvYWQgOiB7fSk7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLk9QVElPTlM6XG4gICAgICAgICAgICByZXR1cm4gX2hhbmRsZU1lc3NhZ2VzRnJvbU9wdGlvbihtZXRob2QsIHNlbmRSZXNwb25zZSwgcGF5bG9hZCAhPT0gbnVsbCAmJiBwYXlsb2FkICE9PSB2b2lkIDAgPyBwYXlsb2FkIDoge30pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKFwi54Sh5Yq544Gq44Ki44Kv44K344On44Oz44Gn44GZXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuZXhwb3J0cy5oYW5kbGVNZXNzYWdlcyA9IGhhbmRsZU1lc3NhZ2VzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0dXBJc1Zpc2libGUgPSBleHBvcnRzLnNldHVwUGFnZSA9IHZvaWQgMDtcbmNvbnN0IGFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zXCIpO1xuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcbmNvbnN0IGFjdGlvbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uLy4uL2JhY2tncm91bmQvYWN0aW9uc1wiKSk7XG5jb25zdCBjYWNoZV8xID0gcmVxdWlyZShcIi4uLy4uL2JhY2tncm91bmQvY2FjaGVcIik7XG4vKipcbiAqIGJhY2tncm91bmTjgYvjgonpgIHkv6HjgZnjgovjg6Hjg4Pjgrvjg7zjgrhcbiAqL1xuLyoqXG4gKiDjg6Hjg6Lmg4XloLHjgpJDb250ZW50U2NyaXB044Gr44K744OD44OI44GZ44KLXG4gKi9cbmNvbnN0IHNldHVwUGFnZSA9ICh0YWJJZCwgdXJsLCBub3Rlcywgc2V0dGluZykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY2FjaGVfMS5jYWNoZS5iYWRnZVt0YWJJZF0gPSAoX2EgPSBub3Rlcy5sZW5ndGgpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDA7XG4gICAgYWN0aW9ucy5zZXRCYWRnZVRleHQodGFiSWQsIChfYiA9IG5vdGVzLmxlbmd0aCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMCk7XG4gICAgcmV0dXJuICgwLCBiYXNlXzEuc2VuZEFjdGlvblRvVGFiKSh0YWJJZCwgYWN0aW9uc18xLlNFVFVQX1BBR0UsIGFjdGlvbnNfMS5CQUNLR1JPVU5ELCB7XG4gICAgICAgIHVybCxcbiAgICAgICAgbm90ZXMsXG4gICAgICAgIGlzVmlzaWJsZTogc2V0dGluZyA9PT0gbnVsbCB8fCBzZXR0aW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXR0aW5nLmlzX3Zpc2libGUsXG4gICAgICAgIGRlZmF1bHRDb2xvcjogc2V0dGluZyA9PT0gbnVsbCB8fCBzZXR0aW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXR0aW5nLmRlZmF1bHRfY29sb3IsXG4gICAgfSk7XG59O1xuZXhwb3J0cy5zZXR1cFBhZ2UgPSBzZXR1cFBhZ2U7XG4vKipcbiAqIOODoeODouOBruihqOekui/pnZ7ooajnpLrjgpJDb250ZW50U2NyaXB044Gr44K744OD44OI44GZ44KLXG4gKi9cbmNvbnN0IHNldHVwSXNWaXNpYmxlID0gKHRhYklkLCB1cmwsIGlzVmlzaWJsZSkgPT4ge1xuICAgIHJldHVybiAoMCwgYmFzZV8xLnNlbmRBY3Rpb25Ub1RhYikodGFiSWQsIGFjdGlvbnNfMS5TRVRfTk9URV9WSVNJQkxFLCBhY3Rpb25zXzEuQkFDS0dST1VORCwgeyB1cmwsIGlzVmlzaWJsZSB9KTtcbn07XG5leHBvcnRzLnNldHVwSXNWaXNpYmxlID0gc2V0dXBJc1Zpc2libGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VuZEFjdGlvblRvVGFiID0gZXhwb3J0cy5zZW5kQWN0aW9uID0gdm9pZCAwO1xuZnVuY3Rpb24gc2VuZEFjdGlvbihtZXRob2QsIHNlbmRlclR5cGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIHNlbmRlclR5cGUsXG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHJlc3BvbnNlICE9PSBudWxsICYmIHJlc3BvbnNlICE9PSB2b2lkIDAgPyByZXNwb25zZSA6IHt9O1xuICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB2b2lkIDAgPyBkYXRhIDoge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2VuZEFjdGlvbiA9IHNlbmRBY3Rpb247XG5mdW5jdGlvbiBzZW5kQWN0aW9uVG9UYWIodGFiSWQsIG1ldGhvZCwgc2VuZGVyVHlwZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIHNlbmRlclR5cGUsXG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHJlc3BvbnNlICE9PSBudWxsICYmIHJlc3BvbnNlICE9PSB2b2lkIDAgPyByZXNwb25zZSA6IHt9O1xuICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB2b2lkIDAgPyBkYXRhIDoge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2VuZEFjdGlvblRvVGFiID0gc2VuZEFjdGlvblRvVGFiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0TmV3SWQgPSBleHBvcnRzLnJlbW92ZVN0b3JhZ2UgPSBleHBvcnRzLnNldFN0b3JhZ2UgPSBleHBvcnRzLmdldFN0b3JhZ2UgPSBleHBvcnRzLmdldEFsbFN0b3JhZ2UgPSB2b2lkIDA7XG5jb25zdCBnZXRBbGxTdG9yYWdlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsKTtcbn0pO1xuZXhwb3J0cy5nZXRBbGxTdG9yYWdlID0gZ2V0QWxsU3RvcmFnZTtcbmNvbnN0IGdldFN0b3JhZ2UgPSAoc3RvcmFnZV9uYW1lKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHN0b3JhZ2VfbmFtZSk7XG59KTtcbmV4cG9ydHMuZ2V0U3RvcmFnZSA9IGdldFN0b3JhZ2U7XG5jb25zdCBzZXRTdG9yYWdlID0gKHN0b3JhZ2VfbmFtZSwgZGF0YSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3N0b3JhZ2VfbmFtZV06IGRhdGEgfSk7XG4gICAgcmV0dXJuICFjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG59KTtcbmV4cG9ydHMuc2V0U3RvcmFnZSA9IHNldFN0b3JhZ2U7XG5jb25zdCByZW1vdmVTdG9yYWdlID0gKHN0b3JhZ2VfbmFtZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKHN0b3JhZ2VfbmFtZSk7XG4gICAgcmV0dXJuICFjaHJvbWUucnVudGltZS5sYXN0RXJyb3I7XG59KTtcbmV4cG9ydHMucmVtb3ZlU3RvcmFnZSA9IHJlbW92ZVN0b3JhZ2U7XG5jb25zdCBnZXROZXdJZCA9IChzdG9yYWdlX2RhdGEpID0+IHtcbiAgICBsZXQgbmV3X2lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gICAgd2hpbGUgKHN0b3JhZ2VfZGF0YS5zb21lKChhKSA9PiBhLmlkID09PSBuZXdfaWQpKSB7XG4gICAgICAgIG5ld19pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3X2lkO1xufTtcbmV4cG9ydHMuZ2V0TmV3SWQgPSBnZXROZXdJZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldERlZmF1bHRDb2xvciA9IGV4cG9ydHMuZ2V0RGVmYXVsdENvbG9yID0gdm9pZCAwO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jb25zdCBERUZBVUxUX0NPTE9SX1NUT1JBR0VfTkFNRSA9IFwiZGVmYXVsdF9jb2xvclwiO1xuLyoqXG4gKiDjg6Hjg6Ljga7liJ3mnJ/jgqvjg6njg7zjgpLkv53lrZjjgZnjgovjgrnjg4jjg6zjg7zjgrhcbiAqL1xuY29uc3QgZ2V0RGVmYXVsdENvbG9yID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IHlpZWxkICgwLCBjb21tb25fMS5nZXRTdG9yYWdlKShERUZBVUxUX0NPTE9SX1NUT1JBR0VfTkFNRSk7XG4gICAgcmV0dXJuIChzdG9yYWdlW0RFRkFVTFRfQ09MT1JfU1RPUkFHRV9OQU1FXSB8fCBcIlwiKTtcbn0pO1xuZXhwb3J0cy5nZXREZWZhdWx0Q29sb3IgPSBnZXREZWZhdWx0Q29sb3I7XG5jb25zdCBzZXREZWZhdWx0Q29sb3IgPSAoY29sb3IpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCAoMCwgY29tbW9uXzEuc2V0U3RvcmFnZSkoREVGQVVMVF9DT0xPUl9TVE9SQUdFX05BTUUsIGNvbG9yKTtcbn0pO1xuZXhwb3J0cy5zZXREZWZhdWx0Q29sb3IgPSBzZXREZWZhdWx0Q29sb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWxldGVOb3RlID0gZXhwb3J0cy5nZXROb3Rlc0J5UGFnZUlkID0gZXhwb3J0cy5nZXRBbGxOb3RlcyA9IGV4cG9ydHMuZ2V0QWxsTm90ZXNCeVBhZ2VJZCA9IGV4cG9ydHMudXBkYXRlTm90ZSA9IGV4cG9ydHMuY3JlYXRlTm90ZSA9IHZvaWQgMDtcbmNvbnN0IE5vdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy9Ob3RlXCIpO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jb25zdCBwYWdlSW5mb1N0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuL3BhZ2VJbmZvU3RvcmFnZVwiKTtcbmNvbnN0IE5PVEVfU1RPUkFHRV9OQU1FID0gXCJub3Rlc1wiO1xuY29uc3QgZ2V0U3RvcmFnZU5hbWUgPSAocGFnZUlkKSA9PiBgJHtOT1RFX1NUT1JBR0VfTkFNRX1fJHtwYWdlSWR9YDtcbmNvbnN0IGdldE5vdGVTdG9yYWdlID0gKHN0b3JhZ2VOYW1lKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBzdG9yYWdlID0geWllbGQgKDAsIGNvbW1vbl8xLmdldFN0b3JhZ2UpKHN0b3JhZ2VOYW1lKTtcbiAgICByZXR1cm4gKHN0b3JhZ2Vbc3RvcmFnZU5hbWVdIHx8IFtdKTtcbn0pO1xuY29uc3Qgc2V0Tm90ZVN0b3JhZ2VCeVBhZ2VJZCA9IChwYWdlSWQsIG5vdGVzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBzdG9yYWdlTmFtZSA9IGdldFN0b3JhZ2VOYW1lKHBhZ2VJZCk7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBjb21tb25fMS5zZXRTdG9yYWdlKShzdG9yYWdlTmFtZSwgbm90ZXMpO1xufSk7XG5jb25zdCByZW1vdmVOb3RlU3RvcmFnZUJ5UGFnZUlkID0gKHBhZ2VJZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBjb21tb25fMS5yZW1vdmVTdG9yYWdlKShnZXRTdG9yYWdlTmFtZShwYWdlSWQpKTtcbn0pO1xuY29uc3QgY3JlYXRlTm90ZSA9IChwYWdlSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBub3RlcyA9IHlpZWxkICgwLCBleHBvcnRzLmdldEFsbE5vdGVzQnlQYWdlSWQpKHBhZ2VJZCk7XG4gICAgY29uc3QgaWQgPSAoMCwgY29tbW9uXzEuZ2V0TmV3SWQpKG5vdGVzKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgcGFnZV9pbmZvX2lkOiBwYWdlSWQsXG4gICAgICAgIHdpZHRoOiBOb3RlXzEuREVBVUxUX05PVEVfV0lEVEgsXG4gICAgICAgIGhlaWdodDogTm90ZV8xLkRFQVVMVF9OT1RFX0hFSUdIVCxcbiAgICAgICAgaXNfZml4ZWQ6IHRydWUsXG4gICAgICAgIGlzX29wZW46IHRydWUsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH07XG4gICAgY29uc3QgYWxsTm90ZXMgPSBbLi4ubm90ZXMsIG5ld05vdGVdO1xuICAgIGlmICh5aWVsZCBzZXROb3RlU3RvcmFnZUJ5UGFnZUlkKHBhZ2VJZCwgYWxsTm90ZXMpKVxuICAgICAgICByZXR1cm4geyBub3RlOiBuZXdOb3RlLCBhbGxOb3RlcyB9O1xuICAgIHRocm93IG5ldyBFcnJvcihcImNyZWF0ZU5vdGUgZmFpbGVkOiBcIiArICgoX2EgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSk7XG59KTtcbmV4cG9ydHMuY3JlYXRlTm90ZSA9IGNyZWF0ZU5vdGU7XG5jb25zdCB1cGRhdGVOb3RlID0gKHBhZ2VJZCwgbm90ZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIF9iO1xuICAgIGlmICghbm90ZS5pZClcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QoXCJpZCBpcyByZXF1aXJlZFwiKSk7XG4gICAgY29uc3Qgbm90ZXMgPSB5aWVsZCAoMCwgZXhwb3J0cy5nZXRBbGxOb3Rlc0J5UGFnZUlkKShwYWdlSWQpO1xuICAgIGNvbnN0IGFsbE5vdGVzID0gbm90ZXMubWFwKChfbm90ZSkgPT4gX25vdGUuaWQgPT09IG5vdGUuaWQgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG5vdGUpLCB7IHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KSA6IF9ub3RlKTtcbiAgICBpZiAoeWllbGQgc2V0Tm90ZVN0b3JhZ2VCeVBhZ2VJZChwYWdlSWQsIGFsbE5vdGVzKSlcbiAgICAgICAgcmV0dXJuIHsgbm90ZSwgYWxsTm90ZXMgfTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cGRhdGVOb3RlIGZhaWxlZDogXCIgKyAoKF9iID0gY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWVzc2FnZSkpO1xufSk7XG5leHBvcnRzLnVwZGF0ZU5vdGUgPSB1cGRhdGVOb3RlO1xuY29uc3QgZ2V0QWxsTm90ZXNCeVBhZ2VJZCA9IChwYWdlSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCBnZXROb3RlU3RvcmFnZShnZXRTdG9yYWdlTmFtZShwYWdlSWQpKTtcbn0pO1xuZXhwb3J0cy5nZXRBbGxOb3Rlc0J5UGFnZUlkID0gZ2V0QWxsTm90ZXNCeVBhZ2VJZDtcbmNvbnN0IGdldEFsbE5vdGVzID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IHlpZWxkICgwLCBjb21tb25fMS5nZXRBbGxTdG9yYWdlKSgpO1xuICAgIGNvbnN0IGZpbHRlcmVkTm90ZXMgPSBPYmplY3Qua2V5cyhzdG9yYWdlKVxuICAgICAgICAuZmlsdGVyKChrZXkpID0+IGtleS5tYXRjaChuZXcgUmVnRXhwKGBeJHtOT1RFX1NUT1JBR0VfTkFNRX1fYCwgXCJnXCIpKSlcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBzdG9yYWdlW2tleV0pXG4gICAgICAgIC5mbGF0KCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkTm90ZXM7XG59KTtcbmV4cG9ydHMuZ2V0QWxsTm90ZXMgPSBnZXRBbGxOb3RlcztcbmNvbnN0IGdldE5vdGVzQnlQYWdlSWQgPSAocGFnZUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvLyBUT0RPXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QoXCJnZXRBbGxOb3RlcyBpcyBub3QgaW1wbGVtZW50ZWRcIikpO1xufSk7XG5leHBvcnRzLmdldE5vdGVzQnlQYWdlSWQgPSBnZXROb3Rlc0J5UGFnZUlkO1xuLyoqXG4gKlxuICogQHBhcmFtIHBhZ2VJZFxuICogQHBhcmFtIG5vdGVJZFxuICogQHJldHVybnMgbm90ZTog5YmK6Zmk44GX44Gf44Oh44OiLCBhbGxOb3Rlczog5YmK6Zmk5b6M44Gu5YWo44Gm44Gu44Oh44OiLCBwYWdlSW5mb3M6IOWJiumZpOW+jOOBruODmuODvOOCuOaDheWgsVxuICovXG5jb25zdCBkZWxldGVOb3RlID0gKHBhZ2VJZCwgbm90ZUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgX2M7XG4gICAgaWYgKCFub3RlSWQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImlkIGlzIHJlcXVpcmVkXCIpO1xuICAgIGNvbnN0IG5vdGVzID0geWllbGQgKDAsIGV4cG9ydHMuZ2V0QWxsTm90ZXNCeVBhZ2VJZCkocGFnZUlkKTtcbiAgICBjb25zdCBub3RlID0gbm90ZXMuZmluZCgoX25vdGUpID0+IF9ub3RlLmlkID09PSBub3RlSWQpO1xuICAgIGNvbnN0IGFsbE5vdGVzID0gbm90ZXMuZmlsdGVyKChfbm90ZSkgPT4gX25vdGUuaWQgIT09IG5vdGVJZCk7XG4gICAgLy8gVE9ETyDliYrpmaTjgZfjgZ9Ob3Rl44KS5bGl5q2044Gr5q6L44GZXG4gICAgaWYgKHlpZWxkIHNldE5vdGVTdG9yYWdlQnlQYWdlSWQocGFnZUlkLCBhbGxOb3RlcykpIHtcbiAgICAgICAgaWYgKGFsbE5vdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgeWllbGQgKDAsIHBhZ2VJbmZvU3RvcmFnZV8xLmRlbGV0ZVBhZ2VJbmZvKShwYWdlSWQpO1xuICAgICAgICAgICAgeWllbGQgcmVtb3ZlTm90ZVN0b3JhZ2VCeVBhZ2VJZChwYWdlSWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG5vdGUsIGFsbE5vdGVzIH07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcImRlbGV0ZU5vdGUgZmFpbGVkOiBcIiArICgoX2MgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5tZXNzYWdlKSk7XG59KTtcbmV4cG9ydHMuZGVsZXRlTm90ZSA9IGRlbGV0ZU5vdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXRJc1Zpc2libGVOb3RlID0gZXhwb3J0cy5nZXRJc1Zpc2libGVOb3RlID0gdm9pZCAwO1xuY29uc3QgY29tbW9uXzEgPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jb25zdCBOT1RFX1ZJU0lCTEVfU1RPUkFHRV9OQU1FID0gXCJ2aXNpYmxlX25vdGVzXCI7XG4vKipcbiAqIOODoeODouOBjOihqOekui/pnZ7ooajnpLrjga7oqK3lrprjgpLkv53lrZjjgZnjgovjgrnjg4jjg6zjg7zjgrhcbiAqL1xuY29uc3QgZ2V0SXNWaXNpYmxlTm90ZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB5aWVsZCAoMCwgY29tbW9uXzEuZ2V0U3RvcmFnZSkoTk9URV9WSVNJQkxFX1NUT1JBR0VfTkFNRSk7XG4gICAgcmV0dXJuIChzdG9yYWdlW05PVEVfVklTSUJMRV9TVE9SQUdFX05BTUVdIHx8IGZhbHNlKTtcbn0pO1xuZXhwb3J0cy5nZXRJc1Zpc2libGVOb3RlID0gZ2V0SXNWaXNpYmxlTm90ZTtcbmNvbnN0IHNldElzVmlzaWJsZU5vdGUgPSAoaXNWaXNpYmxlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4geWllbGQgKDAsIGNvbW1vbl8xLnNldFN0b3JhZ2UpKE5PVEVfVklTSUJMRV9TVE9SQUdFX05BTUUsIGlzVmlzaWJsZSk7XG59KTtcbmV4cG9ydHMuc2V0SXNWaXNpYmxlTm90ZSA9IHNldElzVmlzaWJsZU5vdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWxldGVQYWdlSW5mbyA9IGV4cG9ydHMuZ2V0T3JDcmVhdGVQYWdlSW5mb0J5VXJsID0gZXhwb3J0cy5nZXRQYWdlSW5mb0J5VXJsID0gZXhwb3J0cy5nZXRQYWdlSW5mb0J5SWQgPSBleHBvcnRzLmdldEFsbFBhZ2VJbmZvcyA9IGV4cG9ydHMuc2V0VXBkYXRlZEF0UGFnZUluZm8gPSBleHBvcnRzLnVwZGF0ZVBhZ2VJbmZvID0gZXhwb3J0cy5jcmVhdGVQYWdlSW5mbyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBjb21tb25fMSA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcbmNvbnN0IFBBR0VfSU5GT19TVE9SQUdFX05BTUUgPSBcInBhZ2VfaW5mb1wiO1xuY29uc3QgZ2V0UGFnZUluZm9TdG9yYWdlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IHlpZWxkICgwLCBjb21tb25fMS5nZXRTdG9yYWdlKShQQUdFX0lORk9fU1RPUkFHRV9OQU1FKTtcbiAgICByZXR1cm4gKHN0b3JhZ2VbUEFHRV9JTkZPX1NUT1JBR0VfTkFNRV0gfHwgW10pO1xufSk7XG5jb25zdCBzZXRQYWdlSW5mb1N0b3JhZ2UgPSAocGFnZUluZm9zKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4geWllbGQgKDAsIGNvbW1vbl8xLnNldFN0b3JhZ2UpKFBBR0VfSU5GT19TVE9SQUdFX05BTUUsIHBhZ2VJbmZvcyk7XG59KTtcbmNvbnN0IGNyZWF0ZVBhZ2VJbmZvID0gKHVybCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHBhZ2VJbmZvcyA9IHlpZWxkICgwLCBleHBvcnRzLmdldEFsbFBhZ2VJbmZvcykoKTtcbiAgICBjb25zdCBlbmNvZGVkVVJMID0gKDAsIHV0aWxzXzEuZm9ybVVSTCkodXJsKTtcbiAgICBjb25zdCBpZCA9ICgwLCBjb21tb25fMS5nZXROZXdJZCkocGFnZUluZm9zKTtcbiAgICBjb25zdCBbdGFiXSA9IHlpZWxkIGNocm9tZS50YWJzLnF1ZXJ5KHsgdXJsOiAoMCwgdXRpbHNfMS5mb3JtVVJMKSh1cmwpIH0pO1xuICAgIGlmICghdGFiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRhYiBpcyBub3QgZm91bmQ6ICR7dXJsfWApO1xuICAgIGNvbnN0IG5ld1BhZ2VJbmZvID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgcGFnZV91cmw6IGVuY29kZWRVUkwsXG4gICAgICAgIHBhZ2VfdGl0bGU6IHRhYi50aXRsZSxcbiAgICAgICAgZmF2X2ljb25fdXJsOiB0YWIuZmF2SWNvblVybCxcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH07XG4gICAgY29uc3QgYWxsUGFnZUluZm9zID0gWy4uLnBhZ2VJbmZvcywgbmV3UGFnZUluZm9dO1xuICAgIGlmICh5aWVsZCBzZXRQYWdlSW5mb1N0b3JhZ2UoYWxsUGFnZUluZm9zKSlcbiAgICAgICAgcmV0dXJuIHsgcGFnZUluZm86IG5ld1BhZ2VJbmZvLCBhbGxQYWdlSW5mb3MgfTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVQYWdlSW5mbyBmYWlsZWQ6IFwiICsgKChfYSA9IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1lc3NhZ2UpKTtcbn0pO1xuZXhwb3J0cy5jcmVhdGVQYWdlSW5mbyA9IGNyZWF0ZVBhZ2VJbmZvO1xuY29uc3QgdXBkYXRlUGFnZUluZm8gPSAocGFnZUluZm8pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBfYjtcbiAgICBpZiAoIXBhZ2VJbmZvLmlkKVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChcImlkIGlzIHJlcXVpcmVkXCIpKTtcbiAgICBjb25zdCBwYWdlSW5mb3MgPSB5aWVsZCAoMCwgZXhwb3J0cy5nZXRBbGxQYWdlSW5mb3MpKCk7XG4gICAgY29uc3QgYWxsUGFnZUluZm9zID0gcGFnZUluZm9zLm1hcCgoX3BhZ2VJbmZvKSA9PiBfcGFnZUluZm8uaWQgPT09IHBhZ2VJbmZvLmlkID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYWdlSW5mbyksIHsgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pIDogX3BhZ2VJbmZvKTtcbiAgICBpZiAoeWllbGQgc2V0UGFnZUluZm9TdG9yYWdlKGFsbFBhZ2VJbmZvcykpXG4gICAgICAgIHJldHVybiB7IHBhZ2VJbmZvLCBhbGxQYWdlSW5mb3MgfTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cGRhdGVQYWdlSW5mbyBmYWlsZWQ6IFwiICsgKChfYiA9IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1lc3NhZ2UpKTtcbn0pO1xuZXhwb3J0cy51cGRhdGVQYWdlSW5mbyA9IHVwZGF0ZVBhZ2VJbmZvO1xuY29uc3Qgc2V0VXBkYXRlZEF0UGFnZUluZm8gPSAocGFnZUluZm9JZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIF9jO1xuICAgIGNvbnN0IHBhZ2VJbmZvcyA9IHlpZWxkICgwLCBleHBvcnRzLmdldEFsbFBhZ2VJbmZvcykoKTtcbiAgICBjb25zdCBhbGxQYWdlSW5mb3MgPSBwYWdlSW5mb3MubWFwKChfcGFnZUluZm8pID0+IF9wYWdlSW5mby5pZCA9PT0gcGFnZUluZm9JZCA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX3BhZ2VJbmZvKSwgeyB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSkgOiBfcGFnZUluZm8pO1xuICAgIGlmICh5aWVsZCBzZXRQYWdlSW5mb1N0b3JhZ2UoYWxsUGFnZUluZm9zKSlcbiAgICAgICAgcmV0dXJuIHsgYWxsUGFnZUluZm9zIH07XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXBkYXRlUGFnZUluZm8gZmFpbGVkOiBcIiArICgoX2MgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5tZXNzYWdlKSk7XG59KTtcbmV4cG9ydHMuc2V0VXBkYXRlZEF0UGFnZUluZm8gPSBzZXRVcGRhdGVkQXRQYWdlSW5mbztcbmNvbnN0IGdldEFsbFBhZ2VJbmZvcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCBnZXRQYWdlSW5mb1N0b3JhZ2UoKTtcbn0pO1xuZXhwb3J0cy5nZXRBbGxQYWdlSW5mb3MgPSBnZXRBbGxQYWdlSW5mb3M7XG5jb25zdCBnZXRQYWdlSW5mb0J5SWQgPSAocGFnZUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvLyBUT0RPXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QoXCJnZXRQYWdlSW5mb0J5SWQgaXMgbm90IGltcGxlbWVudGVkXCIpKTtcbn0pO1xuZXhwb3J0cy5nZXRQYWdlSW5mb0J5SWQgPSBnZXRQYWdlSW5mb0J5SWQ7XG5jb25zdCBnZXRQYWdlSW5mb0J5VXJsID0gKHVybCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZW5jb2RlZFVSTCA9ICgwLCB1dGlsc18xLmZvcm1VUkwpKHVybCk7XG4gICAgY29uc3QgcGFnZUluZm9zID0geWllbGQgKDAsIGV4cG9ydHMuZ2V0QWxsUGFnZUluZm9zKSgpO1xuICAgIHJldHVybiBwYWdlSW5mb3MuZmluZCgoX3BhZ2VJbmZvKSA9PiBfcGFnZUluZm8ucGFnZV91cmwgPT09IGVuY29kZWRVUkwpO1xufSk7XG5leHBvcnRzLmdldFBhZ2VJbmZvQnlVcmwgPSBnZXRQYWdlSW5mb0J5VXJsO1xuY29uc3QgZ2V0T3JDcmVhdGVQYWdlSW5mb0J5VXJsID0gKHVybCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcGFnZUluZm8gPSB5aWVsZCAoMCwgZXhwb3J0cy5nZXRQYWdlSW5mb0J5VXJsKSh1cmwpO1xuICAgIGlmIChwYWdlSW5mbylcbiAgICAgICAgcmV0dXJuIHBhZ2VJbmZvO1xuICAgIGNvbnN0IHsgcGFnZUluZm86IG5ld1BhZ2VJbmZvIH0gPSB5aWVsZCAoMCwgZXhwb3J0cy5jcmVhdGVQYWdlSW5mbykodXJsKTtcbiAgICByZXR1cm4gbmV3UGFnZUluZm87XG59KTtcbmV4cG9ydHMuZ2V0T3JDcmVhdGVQYWdlSW5mb0J5VXJsID0gZ2V0T3JDcmVhdGVQYWdlSW5mb0J5VXJsO1xuY29uc3QgZGVsZXRlUGFnZUluZm8gPSAocGFnZUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgX2Q7XG4gICAgaWYgKCFwYWdlSWQpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KFwiaWQgaXMgcmVxdWlyZWRcIikpO1xuICAgIGNvbnN0IHBhZ2VJbmZvcyA9IHlpZWxkICgwLCBleHBvcnRzLmdldEFsbFBhZ2VJbmZvcykoKTtcbiAgICBjb25zdCBwYWdlSW5mbyA9IHBhZ2VJbmZvcy5maW5kKChfcGFnZUluZm8pID0+IF9wYWdlSW5mby5pZCA9PT0gcGFnZUlkKTtcbiAgICBjb25zdCBhbGxQYWdlSW5mb3MgPSBwYWdlSW5mb3MuZmlsdGVyKChfcGFnZUluZm8pID0+IF9wYWdlSW5mby5pZCAhPT0gcGFnZUlkKTtcbiAgICBpZiAoeWllbGQgc2V0UGFnZUluZm9TdG9yYWdlKGFsbFBhZ2VJbmZvcykpXG4gICAgICAgIHJldHVybiB7IHBhZ2VJbmZvLCBhbGxQYWdlSW5mb3MgfTtcbiAgICAvLyBUT0RPIOWJiumZpOOBl+OBn1BhZ2VJbmZv44KS5bGl5q2044Gr5q6L44GZXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZGVsZXRlUGFnZUluZm8gZmFpbGVkOiBcIiArICgoX2QgPSBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5tZXNzYWdlKSk7XG59KTtcbmV4cG9ydHMuZGVsZXRlUGFnZUluZm8gPSBkZWxldGVQYWdlSW5mbztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUFVTFRfTk9URV9IRUlHSFQgPSBleHBvcnRzLkRFQVVMVF9OT1RFX1dJRFRIID0gdm9pZCAwO1xuZXhwb3J0cy5ERUFVTFRfTk9URV9XSURUSCA9IDMwMDtcbmV4cG9ydHMuREVBVUxUX05PVEVfSEVJR0hUID0gMTgwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRXF1YWxzT2JqZWN0ID0gZXhwb3J0cy5pc1N5c3RlbUxpbmsgPSBleHBvcnRzLmZvcm1hdERhdGUgPSBleHBvcnRzLmZvcm1VUkwgPSBleHBvcnRzLmRlY29kZVVSTCA9IGV4cG9ydHMuZW5jb2RlRm9ybVVSTCA9IGV4cG9ydHMubXNnID0gdm9pZCAwO1xuY29uc3QgZmFzdF9kZWVwX2VxdWFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZhc3QtZGVlcC1lcXVhbFwiKSk7XG5jb25zdCBtZXNzYWdlc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3B1YmxpYy9fbG9jYWxlcy9qYS9tZXNzYWdlcy5qc29uXCIpKTtcbmNvbnN0IG1lc3NhZ2VzX2pzb25fMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcHVibGljL19sb2NhbGVzL2VuL21lc3NhZ2VzLmpzb25cIikpO1xuY29uc3QgaTE4biA9IHtcbiAgICBqYTogbWVzc2FnZXNfanNvbl8xLmRlZmF1bHQsXG4gICAgZW46IG1lc3NhZ2VzX2pzb25fMi5kZWZhdWx0LFxufTtcbi8qKlxuICog57+76Kiz44GV44KM44Gf44Oh44OD44K744O844K444KS5Y+W5b6X44GZ44KLXFxuXG4gKiBTZXJ2aWNlV29ya2Vy5LiK44Gn44CMVW5jYXVnaHQgVHlwZUVycm9yOiBjaHJvbWUuaTE4bi5nZXRNZXNzYWdlIGlzIG5vdCBhIGZ1bmN0aW9u44CN44Go44GE44GG44Ko44Op44O844GM5Ye644KL44Gf44KB44CBXG4gKiBAcGFyYW0ga2V5XG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBtc2cgPSAoa2V5LCBpc0JhY2tncm91bmQpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBpZiAoaXNCYWNrZ3JvdW5kIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAvLyBkZWZhdWx0OiBFbmdsaXNoXG4gICAgICAgIGNvbnN0IGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc2xpY2UoMCwgMik7XG4gICAgICAgIHJldHVybiAoX2MgPSAoaTE4bltsYW5nXSA/IChfYSA9IGkxOG5bbGFuZ11ba2V5XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1lc3NhZ2UgOiAoX2IgPSBtZXNzYWdlc19qc29uXzIuZGVmYXVsdFtrZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWVzc2FnZSkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hyb21lLmkxOG4uZ2V0TWVzc2FnZShrZXkpO1xuICAgIH1cbn07XG5leHBvcnRzLm1zZyA9IG1zZztcbmNvbnN0IGVuY29kZUZvcm1VUkwgPSAodXJsKSA9PiB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCgoMCwgZXhwb3J0cy5mb3JtVVJMKSh1cmwpKTtcbn07XG5leHBvcnRzLmVuY29kZUZvcm1VUkwgPSBlbmNvZGVGb3JtVVJMO1xuY29uc3QgZGVjb2RlVVJMID0gKGVuY29kZWRVcmwpID0+IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVcmwpO1xufTtcbmV4cG9ydHMuZGVjb2RlVVJMID0gZGVjb2RlVVJMO1xuY29uc3QgZm9ybVVSTCA9ICh1cmwpID0+IHtcbiAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgcmV0dXJuIGAke3BhcnNlZFVybC5wcm90b2NvbH0vLyR7cGFyc2VkVXJsLmhvc3RuYW1lfSR7cGFyc2VkVXJsLnBhdGhuYW1lfSR7cGFyc2VkVXJsLnNlYXJjaCB8fCBcIlwifWA7XG59O1xuZXhwb3J0cy5mb3JtVVJMID0gZm9ybVVSTDtcbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xuICAgIGlmIChpc05hTihkYXRlLmdldFRpbWUoKSkpXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LyR7ZGF0ZS5nZXRNb250aCgpICsgMX0vJHtkYXRlLmdldERhdGUoKX0gJHsoXCIwXCIgKyBkYXRlLmdldEhvdXJzKCkpLnNsaWNlKC0yKX06JHsoXCIwXCIgKyBkYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpfWA7XG59O1xuZXhwb3J0cy5mb3JtYXREYXRlID0gZm9ybWF0RGF0ZTtcbi8qKlxuICogY2hyb21l44Gu44K344K544OG44Og55S76Z2i44GL44Gp44GG44GL44KS5Yik5a6a44GZ44KLXG4gKiBAcGFyYW0gbGlua1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5jb25zdCBpc1N5c3RlbUxpbmsgPSAobGluaykgPT4ge1xuICAgIHJldHVybiAobGluay5zdGFydHNXaXRoKFwiY2hyb21lOi8vXCIpIHx8XG4gICAgICAgIGxpbmsuc3RhcnRzV2l0aChcImNocm9tZS1leHRlbnNpb246Ly9cIikgfHxcbiAgICAgICAgbGluay5zdGFydHNXaXRoKFwiY2hyb21lLXNlYXJjaDovL1wiKSk7XG59O1xuZXhwb3J0cy5pc1N5c3RlbUxpbmsgPSBpc1N5c3RlbUxpbms7XG4vKipcbiAqIE9iamVjdOOBruavlOi8gy4gMemajuWxpOOBruOBv1xuICogQHJldHVybnNcbiAqL1xuY29uc3QgaXNFcXVhbHNPYmplY3QgPSAoYSwgYikgPT4ge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIGZhc3RfZGVlcF9lcXVhbF8xLmRlZmF1bHQpKGEsIGIpO1xufTtcbmV4cG9ydHMuaXNFcXVhbHNPYmplY3QgPSBpc0VxdWFsc09iamVjdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9iYWNrZ3JvdW5kL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
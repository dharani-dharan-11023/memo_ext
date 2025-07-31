/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button/FabIconButton.tsx":
/*!*************************************************!*\
  !*** ./src/components/Button/FabIconButton.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const Button_style_1 = __webpack_require__(/*! ./Button.style */ "./src/components/Button/Button.style.ts");
const IconButton = (0, react_2.memo)((_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(Button_style_1.SFabIconButton, Object.assign({}, props), children);
});
exports["default"] = IconButton;


/***/ }),

/***/ "./src/pages/Popup/Popup.style.ts":
/*!****************************************!*\
  !*** ./src/pages/Popup/Popup.style.ts ***!
  \****************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SIconButton = exports.SPinIconButton = exports.SHeaderIconButton = exports.SListItemRight = exports.SListItemLeft = exports.SListItem = exports.SSubdirectoryArrowLeftIcon = exports.SActionMessageSpan = exports.SActionMessageText = exports.SMessageText = exports.SContent = exports.SHeaderRight = exports.SHeaderLeft = exports.SHeader = exports.GlobalStyle = void 0;
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const IconButton_1 = __importDefault(__webpack_require__(/*! ../../components/Button/IconButton */ "./src/components/Button/IconButton.tsx"));
const Icon_1 = __webpack_require__(/*! ../../components/Icon */ "./src/components/Icon.tsx");
const resetCSS_1 = __webpack_require__(/*! ../../resetCSS */ "./src/resetCSS.ts");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  ${resetCSS_1.resetCSS}
`;
exports.SHeader = styled_components_1.default.header `
  padding: 1em;
  display: flex;
  align-items: center;
`;
exports.SHeaderLeft = styled_components_1.default.div `
  flex: 1;
`;
exports.SHeaderRight = styled_components_1.default.div ``;
exports.SContent = styled_components_1.default.div ``;
exports.SMessageText = styled_components_1.default.p `
  padding: 1em;
  color: #aaa;
`;
exports.SActionMessageText = styled_components_1.default.p `
  padding: 1em;
`;
exports.SActionMessageSpan = styled_components_1.default.span `
  font-size: 1.25em;
`;
exports.SSubdirectoryArrowLeftIcon = (0, styled_components_1.default)(Icon_1.SubdirectoryArrowLeftIcon) `
  width: 2em;
  height: 2em;
  transform: rotate(90deg);
  margin-left: 0.75em;
  margin-right: 0.5em;
`;
exports.SListItem = styled_components_1.default.li `
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
exports.SListItemLeft = styled_components_1.default.div `
  padding: 1em 0.25rem 1em 1em;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${({ disabled }) => disabled &&
    (0, styled_components_1.css) `
      cursor: default;

      &:hover {
        background-color: transparent;
      }
    `}

    & > span {
      flex: 1;
    }

    & > svg {
      width: 1rem;
    }
`;
exports.SListItemRight = styled_components_1.default.div `
  padding: 1em;
`;
exports.SHeaderIconButton = (0, styled_components_1.default)(IconButton_1.default) `
  margin-left: 1em;
  width: 2em;
  height: 2em;
  padding: 0.25em;
`;
exports.SPinIconButton = (0, styled_components_1.default)(IconButton_1.default) `
  margin: 0 0.5em;

  ${({ isPin }) => isPin &&
    (0, styled_components_1.css) `
      opacity: 0.2;

      &:hover {
        opacity: 1;
      }
    `}

  ${({ disabled }) => disabled &&
    (0, styled_components_1.css) `
      opacity: 1;
    `}
`;
exports.SIconButton = (0, styled_components_1.default)(IconButton_1.default) `
  margin: 0 0.5em;
`;


/***/ }),

/***/ "./src/pages/Popup/Popup.tsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.tsx ***!
  \***********************************/
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Popup = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
const FabIconButton_1 = __importDefault(__webpack_require__(/*! ../../components/Button/FabIconButton */ "./src/components/Button/FabIconButton.tsx"));
const Tooltip_1 = __importDefault(__webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/index.js"));
const Popup_style_1 = __webpack_require__(/*! ./Popup.style */ "./src/pages/Popup/Popup.style.ts");
const sender = __importStar(__webpack_require__(/*! ../message/sender/popup */ "./src/pages/message/sender/popup.ts"));
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const Popup = () => {
    const [isEnabled, setIsEnabled] = (0, react_1.useState)(false);
    const [isVisible, setIsVisible] = (0, react_1.useState)(true);
    const [notes, setNotes] = (0, react_1.useState)([]);
    const [currentTab, setCurrentTab] = (0, react_1.useState)();
    const onClickAddNote = () => {
        if (currentTab) {
            sender
                .sendCreateNote(currentTab)
                .then(({ notes }) => {
                notes && setNotes(notes);
                setIsEnabled(true);
            })
                .catch((error) => {
                setIsEnabled(false);
            })
                .finally(() => {
                window.close();
            });
        }
    };
    const onClickNotesButton = () => {
        if (chrome.runtime.openOptionsPage)
            chrome.runtime.openOptionsPage();
    };
    const onClickDelete = (note) => {
        const { id, title } = note;
        if (currentTab && confirm(`"${title !== null && title !== void 0 ? title : (0, utils_1.msg)("note")}" ${(0, utils_1.msg)("confirm_remove_next_note_msg")}`)) {
            sender
                .sendDeleteNote(currentTab, note)
                .then(({ notes }) => {
                notes && setNotes(notes);
                setIsEnabled(true);
            })
                .catch((error) => {
                setIsEnabled(false);
            });
        }
    };
    const onClickNote = (note) => {
        if (currentTab) {
            sender
                .sendScrollToTargetNote(currentTab, note)
                .then(() => {
                setIsEnabled(true);
            })
                .catch((error) => {
                setIsEnabled(false);
            })
                .finally(() => {
                // window.close();
            });
        }
    };
    const onClickResetPosition = (note) => {
        const { position_x, position_y } = note, _note = __rest(note, ["position_x", "position_y"]);
        if (currentTab) {
            sender
                .sendUpdateNote(currentTab, Object.assign(Object.assign({}, _note), { is_fixed: true, is_open: true }))
                .then(({ notes }) => {
                notes && setNotes(notes);
                setIsEnabled(true);
            })
                .catch((error) => {
                setIsEnabled(false);
            });
        }
    };
    (0, react_1.useEffect)(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            if (tab && tab.url) {
                setCurrentTab(tab);
                sender
                    .fetchAllNotes(tab)
                    .then((data) => {
                    const { notes, isVisible } = data;
                    notes && setNotes(notes);
                    isVisible !== undefined && setIsVisible(isVisible);
                    setIsEnabled(true);
                })
                    .catch((error) => {
                    setIsEnabled(false);
                });
            }
            else {
                setIsEnabled(false);
            }
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Popup_style_1.GlobalStyle, null),
        react_1.default.createElement("div", { style: { width: "320px" } },
            react_1.default.createElement(Popup_style_1.SHeader, null,
                react_1.default.createElement(Popup_style_1.SHeaderLeft, null,
                    react_1.default.createElement(FabIconButton_1.default, { onClick: onClickAddNote, disabled: !isEnabled },
                        react_1.default.createElement(solid_1.PlusIcon, { fill: "#fff" }))),
                react_1.default.createElement(Popup_style_1.SHeaderRight, null,
                    react_1.default.createElement(Popup_style_1.SHeaderIconButton, { onClick: onClickNotesButton },
                        react_1.default.createElement(solid_1.Bars3Icon, { fill: "rgba(0, 0, 0, 0.4)" })))),
            react_1.default.createElement(Popup_style_1.SContent, null,
                !isEnabled && react_1.default.createElement(Popup_style_1.SMessageText, null, (0, utils_1.msg)("note_unavailable_msg")),
                isEnabled && notes.length === 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Popup_style_1.SActionMessageText, null,
                        react_1.default.createElement(Popup_style_1.SSubdirectoryArrowLeftIcon, null),
                        react_1.default.createElement(Popup_style_1.SActionMessageSpan, null, (0, utils_1.msg)("no_note_created_msg"))),
                    react_1.default.createElement(Popup_style_1.SMessageText, null, (0, utils_1.msg)("no_note_created_option_msg")))),
                isEnabled && notes.length !== 0 && (react_1.default.createElement("ul", null, notes.map((note) => (react_1.default.createElement(Popup_style_1.SListItem, { key: note.id },
                    react_1.default.createElement(Popup_style_1.SListItemLeft, { disabled: note.is_fixed, onClick: () => !note.is_fixed && onClickNote(note) },
                        react_1.default.createElement("span", null, note.title || note.description || (0, utils_1.msg)("new_note_title_msg")),
                        !note.is_fixed && react_1.default.createElement(solid_1.ChevronRightIcon, { fill: "rgba(0, 0, 0, 0.5)" })),
                    react_1.default.createElement(Popup_style_1.SListItemRight, null,
                        react_1.default.createElement(Tooltip_1.default, { title: (0, utils_1.msg)("reset_position_msg"), placement: "top" },
                            react_1.default.createElement("span", null,
                                react_1.default.createElement(Popup_style_1.SIconButton, { onClick: () => onClickResetPosition(note) },
                                    react_1.default.createElement(solid_1.ArrowPathIcon, { fill: "rgba(0, 0, 0, 0.5)" })))),
                        react_1.default.createElement(Popup_style_1.SIconButton, { onClick: () => onClickDelete(note) },
                            react_1.default.createElement(solid_1.TrashIcon, { fill: "rgba(0, 0, 0, 0.5)" }))))))))))));
};
exports.Popup = Popup;


/***/ }),

/***/ "./src/pages/Popup/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const Popup_1 = __webpack_require__(/*! ./Popup */ "./src/pages/Popup/Popup.tsx");
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(Popup_1.Popup, null)), document.getElementById("root"));


/***/ }),

/***/ "./src/pages/message/sender/popup.ts":
/*!*******************************************!*\
  !*** ./src/pages/message/sender/popup.ts ***!
  \*******************************************/
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
exports.sendUpdateNoteVisible = exports.sendScrollToTargetNote = exports.sendDeleteNote = exports.sendUpdateNote = exports.sendCreateNote = exports.fetchAllNotes = void 0;
const actions_1 = __webpack_require__(/*! ../actions */ "./src/pages/message/actions.ts");
const base_1 = __webpack_require__(/*! ./base */ "./src/pages/message/sender/base.ts");
/**
 * ポップアップから送信するメッセージ
 */
const fetchAllNotes = (tab) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.GET_ALL_NOTES, actions_1.POPUP, { tab });
});
exports.fetchAllNotes = fetchAllNotes;
const sendCreateNote = (tab) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.CREATE_NOTE, actions_1.POPUP, { tab });
});
exports.sendCreateNote = sendCreateNote;
const sendUpdateNote = (tab, note) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.UPDATE_NOTE, actions_1.POPUP, { tab, note });
});
exports.sendUpdateNote = sendUpdateNote;
const sendDeleteNote = (tab, note) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.DELETE_NOTE, actions_1.POPUP, { tab, note });
});
exports.sendDeleteNote = sendDeleteNote;
const sendScrollToTargetNote = (tab, note) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.SCROLL_TO_TARGET_NOTE, actions_1.POPUP, { tab, note });
});
exports.sendScrollToTargetNote = sendScrollToTargetNote;
const sendUpdateNoteVisible = (tab, isVisible) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.UPDATE_NOTE_VISIBLE, actions_1.POPUP, { tab, isVisible });
});
exports.sendUpdateNoteVisible = sendUpdateNoteVisible;


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgithub_language_extension"] = self["webpackChunkgithub_language_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/pages/Popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vRmFiSWNvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9wYWdlcy9Qb3B1cC9Qb3B1cC5zdHlsZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3BhZ2VzL1BvcHVwL1BvcHVwLnRzeCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3BhZ2VzL1BvcHVwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3BhZ2VzL21lc3NhZ2Uvc2VuZGVyL3BvcHVwLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHJlYWN0XzIgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBCdXR0b25fc3R5bGVfMSA9IHJlcXVpcmUoXCIuL0J1dHRvbi5zdHlsZVwiKTtcbmNvbnN0IEljb25CdXR0b24gPSAoMCwgcmVhY3RfMi5tZW1vKSgoX2EpID0+IHtcbiAgICB2YXIgeyBjaGlsZHJlbiB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbl9zdHlsZV8xLlNGYWJJY29uQnV0dG9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNoaWxkcmVuKTtcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbkJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNJY29uQnV0dG9uID0gZXhwb3J0cy5TUGluSWNvbkJ1dHRvbiA9IGV4cG9ydHMuU0hlYWRlckljb25CdXR0b24gPSBleHBvcnRzLlNMaXN0SXRlbVJpZ2h0ID0gZXhwb3J0cy5TTGlzdEl0ZW1MZWZ0ID0gZXhwb3J0cy5TTGlzdEl0ZW0gPSBleHBvcnRzLlNTdWJkaXJlY3RvcnlBcnJvd0xlZnRJY29uID0gZXhwb3J0cy5TQWN0aW9uTWVzc2FnZVNwYW4gPSBleHBvcnRzLlNBY3Rpb25NZXNzYWdlVGV4dCA9IGV4cG9ydHMuU01lc3NhZ2VUZXh0ID0gZXhwb3J0cy5TQ29udGVudCA9IGV4cG9ydHMuU0hlYWRlclJpZ2h0ID0gZXhwb3J0cy5TSGVhZGVyTGVmdCA9IGV4cG9ydHMuU0hlYWRlciA9IGV4cG9ydHMuR2xvYmFsU3R5bGUgPSB2b2lkIDA7XG5jb25zdCBzdHlsZWRfY29tcG9uZW50c18xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKSk7XG5jb25zdCBJY29uQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0ljb25CdXR0b25cIikpO1xuY29uc3QgSWNvbl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvSWNvblwiKTtcbmNvbnN0IHJlc2V0Q1NTXzEgPSByZXF1aXJlKFwiLi4vLi4vcmVzZXRDU1NcIik7XG5leHBvcnRzLkdsb2JhbFN0eWxlID0gKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuY3JlYXRlR2xvYmFsU3R5bGUpIGBcbiAgJHtyZXNldENTU18xLnJlc2V0Q1NTfVxuYDtcbmV4cG9ydHMuU0hlYWRlciA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5oZWFkZXIgYFxuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuZXhwb3J0cy5TSGVhZGVyTGVmdCA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBmbGV4OiAxO1xuYDtcbmV4cG9ydHMuU0hlYWRlclJpZ2h0ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgYDtcbmV4cG9ydHMuU0NvbnRlbnQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBgO1xuZXhwb3J0cy5TTWVzc2FnZVRleHQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQucCBgXG4gIHBhZGRpbmc6IDFlbTtcbiAgY29sb3I6ICNhYWE7XG5gO1xuZXhwb3J0cy5TQWN0aW9uTWVzc2FnZVRleHQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQucCBgXG4gIHBhZGRpbmc6IDFlbTtcbmA7XG5leHBvcnRzLlNBY3Rpb25NZXNzYWdlU3BhbiA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5zcGFuIGBcbiAgZm9udC1zaXplOiAxLjI1ZW07XG5gO1xuZXhwb3J0cy5TU3ViZGlyZWN0b3J5QXJyb3dMZWZ0SWNvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKEljb25fMS5TdWJkaXJlY3RvcnlBcnJvd0xlZnRJY29uKSBgXG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG5gO1xuZXhwb3J0cy5TTGlzdEl0ZW0gPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQubGkgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5gO1xuZXhwb3J0cy5TTGlzdEl0ZW1MZWZ0ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIHBhZGRpbmc6IDFlbSAwLjI1cmVtIDFlbSAxZW07XG4gIGZsZXg6IDE7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuXG4gICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgJiZcbiAgICAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5jc3MpIGBcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIGB9XG5cbiAgICAmID4gc3BhbiB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgICYgPiBzdmcge1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgfVxuYDtcbmV4cG9ydHMuU0xpc3RJdGVtUmlnaHQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgcGFkZGluZzogMWVtO1xuYDtcbmV4cG9ydHMuU0hlYWRlckljb25CdXR0b24gPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShJY29uQnV0dG9uXzEuZGVmYXVsdCkgYFxuICBtYXJnaW4tbGVmdDogMWVtO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgcGFkZGluZzogMC4yNWVtO1xuYDtcbmV4cG9ydHMuU1Bpbkljb25CdXR0b24gPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShJY29uQnV0dG9uXzEuZGVmYXVsdCkgYFxuICBtYXJnaW46IDAgMC41ZW07XG5cbiAgJHsoeyBpc1BpbiB9KSA9PiBpc1BpbiAmJlxuICAgICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmNzcykgYFxuICAgICAgb3BhY2l0eTogMC4yO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgfVxuXG4gICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgJiZcbiAgICAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5jc3MpIGBcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgYH1cbmA7XG5leHBvcnRzLlNJY29uQnV0dG9uID0gKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdCkoSWNvbkJ1dHRvbl8xLmRlZmF1bHQpIGBcbiAgbWFyZ2luOiAwIDAuNWVtO1xuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvcHVwID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3Qgc29saWRfMSA9IHJlcXVpcmUoXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCIpO1xuY29uc3QgRmFiSWNvbkJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9GYWJJY29uQnV0dG9uXCIpKTtcbmNvbnN0IFRvb2x0aXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Ub29sdGlwXCIpKTtcbmNvbnN0IFBvcHVwX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9Qb3B1cC5zdHlsZVwiKTtcbmNvbnN0IHNlbmRlciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vbWVzc2FnZS9zZW5kZXIvcG9wdXBcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNvbnN0IFBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0VuYWJsZWQsIHNldElzRW5hYmxlZF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZmFsc2UpO1xuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkodHJ1ZSk7XG4gICAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoW10pO1xuICAgIGNvbnN0IFtjdXJyZW50VGFiLCBzZXRDdXJyZW50VGFiXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpO1xuICAgIGNvbnN0IG9uQ2xpY2tBZGROb3RlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgICAgICAgc2VuZGVyXG4gICAgICAgICAgICAgICAgLnNlbmRDcmVhdGVOb3RlKGN1cnJlbnRUYWIpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgbm90ZXMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGVzICYmIHNldE5vdGVzKG5vdGVzKTtcbiAgICAgICAgICAgICAgICBzZXRJc0VuYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc0VuYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25DbGlja05vdGVzQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKVxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XG4gICAgfTtcbiAgICBjb25zdCBvbkNsaWNrRGVsZXRlID0gKG5vdGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCwgdGl0bGUgfSA9IG5vdGU7XG4gICAgICAgIGlmIChjdXJyZW50VGFiICYmIGNvbmZpcm0oYFwiJHt0aXRsZSAhPT0gbnVsbCAmJiB0aXRsZSAhPT0gdm9pZCAwID8gdGl0bGUgOiAoMCwgdXRpbHNfMS5tc2cpKFwibm90ZVwiKX1cIiAkeygwLCB1dGlsc18xLm1zZykoXCJjb25maXJtX3JlbW92ZV9uZXh0X25vdGVfbXNnXCIpfWApKSB7XG4gICAgICAgICAgICBzZW5kZXJcbiAgICAgICAgICAgICAgICAuc2VuZERlbGV0ZU5vdGUoY3VycmVudFRhYiwgbm90ZSlcbiAgICAgICAgICAgICAgICAudGhlbigoeyBub3RlcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbm90ZXMgJiYgc2V0Tm90ZXMobm90ZXMpO1xuICAgICAgICAgICAgICAgIHNldElzRW5hYmxlZCh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzRW5hYmxlZChmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25DbGlja05vdGUgPSAobm90ZSkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgICAgICAgc2VuZGVyXG4gICAgICAgICAgICAgICAgLnNlbmRTY3JvbGxUb1RhcmdldE5vdGUoY3VycmVudFRhYiwgbm90ZSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNFbmFibGVkKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNFbmFibGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uQ2xpY2tSZXNldFBvc2l0aW9uID0gKG5vdGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbl94LCBwb3NpdGlvbl95IH0gPSBub3RlLCBfbm90ZSA9IF9fcmVzdChub3RlLCBbXCJwb3NpdGlvbl94XCIsIFwicG9zaXRpb25feVwiXSk7XG4gICAgICAgIGlmIChjdXJyZW50VGFiKSB7XG4gICAgICAgICAgICBzZW5kZXJcbiAgICAgICAgICAgICAgICAuc2VuZFVwZGF0ZU5vdGUoY3VycmVudFRhYiwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBfbm90ZSksIHsgaXNfZml4ZWQ6IHRydWUsIGlzX29wZW46IHRydWUgfSkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgbm90ZXMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGVzICYmIHNldE5vdGVzKG5vdGVzKTtcbiAgICAgICAgICAgICAgICBzZXRJc0VuYWJsZWQodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc0VuYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAoW3RhYl0pID0+IHtcbiAgICAgICAgICAgIGlmICh0YWIgJiYgdGFiLnVybCkge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUYWIodGFiKTtcbiAgICAgICAgICAgICAgICBzZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgLmZldGNoQWxsTm90ZXModGFiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5vdGVzLCBpc1Zpc2libGUgfSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIG5vdGVzICYmIHNldE5vdGVzKG5vdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlICE9PSB1bmRlZmluZWQgJiYgc2V0SXNWaXNpYmxlKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldElzRW5hYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzRW5hYmxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRJc0VuYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwX3N0eWxlXzEuR2xvYmFsU3R5bGUsIG51bGwpLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHdpZHRoOiBcIjMyMHB4XCIgfSB9LFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXBfc3R5bGVfMS5TSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwX3N0eWxlXzEuU0hlYWRlckxlZnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZhYkljb25CdXR0b25fMS5kZWZhdWx0LCB7IG9uQ2xpY2s6IG9uQ2xpY2tBZGROb3RlLCBkaXNhYmxlZDogIWlzRW5hYmxlZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc29saWRfMS5QbHVzSWNvbiwgeyBmaWxsOiBcIiNmZmZcIiB9KSkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwX3N0eWxlXzEuU0hlYWRlclJpZ2h0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cF9zdHlsZV8xLlNIZWFkZXJJY29uQnV0dG9uLCB7IG9uQ2xpY2s6IG9uQ2xpY2tOb3Rlc0J1dHRvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc29saWRfMS5CYXJzM0ljb24sIHsgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIiB9KSkpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwX3N0eWxlXzEuU0NvbnRlbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgIWlzRW5hYmxlZCAmJiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cF9zdHlsZV8xLlNNZXNzYWdlVGV4dCwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcIm5vdGVfdW5hdmFpbGFibGVfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICBpc0VuYWJsZWQgJiYgbm90ZXMubGVuZ3RoID09PSAwICYmIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwX3N0eWxlXzEuU0FjdGlvbk1lc3NhZ2VUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXBfc3R5bGVfMS5TU3ViZGlyZWN0b3J5QXJyb3dMZWZ0SWNvbiwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cF9zdHlsZV8xLlNBY3Rpb25NZXNzYWdlU3BhbiwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcIm5vX25vdGVfY3JlYXRlZF9tc2dcIikpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXBfc3R5bGVfMS5TTWVzc2FnZVRleHQsIG51bGwsICgwLCB1dGlsc18xLm1zZykoXCJub19ub3RlX2NyZWF0ZWRfb3B0aW9uX21zZ1wiKSkpKSxcbiAgICAgICAgICAgICAgICBpc0VuYWJsZWQgJiYgbm90ZXMubGVuZ3RoICE9PSAwICYmIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIG5vdGVzLm1hcCgobm90ZSkgPT4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwX3N0eWxlXzEuU0xpc3RJdGVtLCB7IGtleTogbm90ZS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cF9zdHlsZV8xLlNMaXN0SXRlbUxlZnQsIHsgZGlzYWJsZWQ6IG5vdGUuaXNfZml4ZWQsIG9uQ2xpY2s6ICgpID0+ICFub3RlLmlzX2ZpeGVkICYmIG9uQ2xpY2tOb3RlKG5vdGUpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgbm90ZS50aXRsZSB8fCBub3RlLmRlc2NyaXB0aW9uIHx8ICgwLCB1dGlsc18xLm1zZykoXCJuZXdfbm90ZV90aXRsZV9tc2dcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIW5vdGUuaXNfZml4ZWQgJiYgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc29saWRfMS5DaGV2cm9uUmlnaHRJY29uLCB7IGZpbGw6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cF9zdHlsZV8xLlNMaXN0SXRlbVJpZ2h0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcF8xLmRlZmF1bHQsIHsgdGl0bGU6ICgwLCB1dGlsc18xLm1zZykoXCJyZXNldF9wb3NpdGlvbl9tc2dcIiksIHBsYWNlbWVudDogXCJ0b3BcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3B1cF9zdHlsZV8xLlNJY29uQnV0dG9uLCB7IG9uQ2xpY2s6ICgpID0+IG9uQ2xpY2tSZXNldFBvc2l0aW9uKG5vdGUpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzb2xpZF8xLkFycm93UGF0aEljb24sIHsgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIiB9KSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcHVwX3N0eWxlXzEuU0ljb25CdXR0b24sIHsgb25DbGljazogKCkgPT4gb25DbGlja0RlbGV0ZShub3RlKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNvbGlkXzEuVHJhc2hJY29uLCB7IGZpbGw6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIgfSkpKSkpKSkpKSkpKTtcbn07XG5leHBvcnRzLlBvcHVwID0gUG9wdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHJlYWN0X2RvbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuY29uc3QgUG9wdXBfMSA9IHJlcXVpcmUoXCIuL1BvcHVwXCIpO1xucmVhY3RfZG9tXzEuZGVmYXVsdC5yZW5kZXIocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LlN0cmljdE1vZGUsIG51bGwsXG4gICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9wdXBfMS5Qb3B1cCwgbnVsbCkpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VuZFVwZGF0ZU5vdGVWaXNpYmxlID0gZXhwb3J0cy5zZW5kU2Nyb2xsVG9UYXJnZXROb3RlID0gZXhwb3J0cy5zZW5kRGVsZXRlTm90ZSA9IGV4cG9ydHMuc2VuZFVwZGF0ZU5vdGUgPSBleHBvcnRzLnNlbmRDcmVhdGVOb3RlID0gZXhwb3J0cy5mZXRjaEFsbE5vdGVzID0gdm9pZCAwO1xuY29uc3QgYWN0aW9uc18xID0gcmVxdWlyZShcIi4uL2FjdGlvbnNcIik7XG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xuLyoqXG4gKiDjg53jg4Pjg5fjgqLjg4Pjg5fjgYvjgonpgIHkv6HjgZnjgovjg6Hjg4Pjgrvjg7zjgrhcbiAqL1xuY29uc3QgZmV0Y2hBbGxOb3RlcyA9ICh0YWIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCAoMCwgYmFzZV8xLnNlbmRBY3Rpb24pKGFjdGlvbnNfMS5HRVRfQUxMX05PVEVTLCBhY3Rpb25zXzEuUE9QVVAsIHsgdGFiIH0pO1xufSk7XG5leHBvcnRzLmZldGNoQWxsTm90ZXMgPSBmZXRjaEFsbE5vdGVzO1xuY29uc3Qgc2VuZENyZWF0ZU5vdGUgPSAodGFiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4geWllbGQgKDAsIGJhc2VfMS5zZW5kQWN0aW9uKShhY3Rpb25zXzEuQ1JFQVRFX05PVEUsIGFjdGlvbnNfMS5QT1BVUCwgeyB0YWIgfSk7XG59KTtcbmV4cG9ydHMuc2VuZENyZWF0ZU5vdGUgPSBzZW5kQ3JlYXRlTm90ZTtcbmNvbnN0IHNlbmRVcGRhdGVOb3RlID0gKHRhYiwgbm90ZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBiYXNlXzEuc2VuZEFjdGlvbikoYWN0aW9uc18xLlVQREFURV9OT1RFLCBhY3Rpb25zXzEuUE9QVVAsIHsgdGFiLCBub3RlIH0pO1xufSk7XG5leHBvcnRzLnNlbmRVcGRhdGVOb3RlID0gc2VuZFVwZGF0ZU5vdGU7XG5jb25zdCBzZW5kRGVsZXRlTm90ZSA9ICh0YWIsIG5vdGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCAoMCwgYmFzZV8xLnNlbmRBY3Rpb24pKGFjdGlvbnNfMS5ERUxFVEVfTk9URSwgYWN0aW9uc18xLlBPUFVQLCB7IHRhYiwgbm90ZSB9KTtcbn0pO1xuZXhwb3J0cy5zZW5kRGVsZXRlTm90ZSA9IHNlbmREZWxldGVOb3RlO1xuY29uc3Qgc2VuZFNjcm9sbFRvVGFyZ2V0Tm90ZSA9ICh0YWIsIG5vdGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCAoMCwgYmFzZV8xLnNlbmRBY3Rpb24pKGFjdGlvbnNfMS5TQ1JPTExfVE9fVEFSR0VUX05PVEUsIGFjdGlvbnNfMS5QT1BVUCwgeyB0YWIsIG5vdGUgfSk7XG59KTtcbmV4cG9ydHMuc2VuZFNjcm9sbFRvVGFyZ2V0Tm90ZSA9IHNlbmRTY3JvbGxUb1RhcmdldE5vdGU7XG5jb25zdCBzZW5kVXBkYXRlTm90ZVZpc2libGUgPSAodGFiLCBpc1Zpc2libGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCAoMCwgYmFzZV8xLnNlbmRBY3Rpb24pKGFjdGlvbnNfMS5VUERBVEVfTk9URV9WSVNJQkxFLCBhY3Rpb25zXzEuUE9QVVAsIHsgdGFiLCBpc1Zpc2libGUgfSk7XG59KTtcbmV4cG9ydHMuc2VuZFVwZGF0ZU5vdGVWaXNpYmxlID0gc2VuZFVwZGF0ZU5vdGVWaXNpYmxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2dpdGh1Yl9sYW5ndWFnZV9leHRlbnNpb25cIl0gPSBzZWxmW1wid2VicGFja0NodW5rZ2l0aHViX2xhbmd1YWdlX2V4dGVuc2lvblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvUG9wdXAvaW5kZXgudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
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
const Button = (0, react_2.memo)((_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(Button_style_1.SButton, Object.assign({}, props), children);
});
exports["default"] = Button;


/***/ }),

/***/ "./src/components/ColorPicker/ColorPicker.tsx":
/*!****************************************************!*\
  !*** ./src/components/ColorPicker/ColorPicker.tsx ***!
  \****************************************************/
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
exports.SColorDefault = exports.SColorCheckIcon = exports.SColor = exports.SColors = void 0;
const solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const StickyNote = (0, react_2.memo)(({ onChangeColor, color: activeColor = "", hasDefault = false }) => {
    return (react_1.default.createElement(exports.SColors, null,
        hasDefault && (react_1.default.createElement(exports.SColorDefault, { "$isActive": hasDefault && activeColor === "", onClick: (e) => {
                e.stopPropagation();
                onChangeColor === null || onChangeColor === void 0 ? void 0 : onChangeColor("");
            } }, hasDefault && activeColor === "" && react_1.default.createElement(exports.SColorCheckIcon, { color: "rgb(0,0,0)" }))),
        [
            "#FFFFFF",
            "#EB9694",
            "#FAD0C3",
            "#FFF7CC",
            "#C1E1C5",
            "#BEDADC",
            "#C4DEF6",
            "#D4C4FB",
        ].map((color) => {
            const isActive = (color === "#FFFFFF" && activeColor === "" && !hasDefault) || color === activeColor;
            return (react_1.default.createElement(exports.SColor, { key: color, "$isActive": isActive, style: { backgroundColor: color }, onClick: (e) => {
                    e.stopPropagation();
                    onChangeColor === null || onChangeColor === void 0 ? void 0 : onChangeColor(color);
                } }, isActive && react_1.default.createElement(exports.SColorCheckIcon, { color: "rgb(0,0,0)" })));
        })));
});
exports["default"] = StickyNote;
exports.SColors = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
exports.SColor = styled_components_1.default.button `
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 4px;
  width: 48px;
  height: 32px;
  text-align: center;
  cursor: pointer;

  ${({ $isActive }) => $isActive &&
    (0, styled_components_1.css) `
      cursor: default;
      border: 2px solid #000;
    `}
`;
exports.SColorCheckIcon = (0, styled_components_1.default)(solid_1.CheckIcon) `
  width: 20px;
  height: 20px;
  margin: auto;
`;
exports.SColorDefault = (0, styled_components_1.default)(exports.SColor) `
  position: relative;
  border-color: #aaa;
  overflow: hidden;
  background-color: #fff;

  ${exports.SColorCheckIcon} {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: rotate(45deg);
  }
`;


/***/ }),

/***/ "./src/components/NoteEditModal/NoteEditModal.style.ts":
/*!*************************************************************!*\
  !*** ./src/components/NoteEditModal/NoteEditModal.style.ts ***!
  \*************************************************************/
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
exports.SNoteDetailDataSpan = exports.SNoteDetailDataInput = exports.SNoteDetailData = exports.SNoteDetailTitle = exports.SNoteDetail = exports.SNoteDetailArea = exports.SAccordionSummaryText = exports.SAccordionSummary = exports.SAccordion = exports.SDivider = exports.SIconButton = exports.SButton = exports.SMenuListItem = exports.SMenuList = exports.SModalActionsRight = exports.SModalActionsLeft = exports.SModalActions = exports.SModalDescriptionText = exports.SModalDescription = exports.SModalSectionTitle = exports.SModalSection = exports.SModalContent = exports.SModalTitle = exports.SModalHeader = exports.SModalScrollContent = exports.SBackdrop = exports.SModal = exports.SModalWrapper = void 0;
const Backdrop_1 = __importDefault(__webpack_require__(/*! @mui/material/Backdrop */ "./node_modules/@mui/material/Backdrop/index.js"));
const react_textarea_autosize_1 = __importDefault(__webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js"));
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const Button_1 = __importDefault(__webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx"));
const IconButton_1 = __importDefault(__webpack_require__(/*! ../Button/IconButton */ "./src/components/Button/IconButton.tsx"));
const NumberInput_1 = __importDefault(__webpack_require__(/*! ../TextInput/NumberInput */ "./src/components/TextInput/NumberInput.tsx"));
exports.SModalWrapper = styled_components_1.default.div `
  position: fixed;
  width: 100%;
  max-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  pointer-events: none;
  outline: none;
  transition: transform 0.15s ease-in-out;
  z-index: 1300;

  ${({ $isApeal }) => $isApeal &&
    (0, styled_components_1.css) `
      transform: translate(-50%, -50%) scale(1.03);
    `}
`;
exports.SModal = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  pointer-events: initial;
  margin: auto;
  width: 800px;
  max-width: 100%;
  max-height: calc(100vh - 4em);
  background-color: #fff;
  border-radius: 0.25em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
exports.SBackdrop = (0, styled_components_1.default)(Backdrop_1.default) `
  z-index: 1300;
`;
exports.SModalScrollContent = styled_components_1.default.div `
  overflow-y: auto;
`;
exports.SModalHeader = styled_components_1.default.div `
  padding: 1em 1.5em 0.5em;
`;
exports.SModalTitle = (0, styled_components_1.default)(react_textarea_autosize_1.default) `
  padding: 0.2em;
  width: 100%;
  font-size: 1.25em;
  line-height: 1.5;
  word-break: break-all;
  white-space: pre-line;
  resize: none;

  &::placeholder {
    color: #aaa;
  }
`;
exports.SModalContent = styled_components_1.default.div ``;
exports.SModalSection = styled_components_1.default.div `
  padding: 0 1.5em 1em;
`;
exports.SModalSectionTitle = styled_components_1.default.h4 `
  font-size: 0.875em;
  line-height: 1.5;
  font-weight: bold;
  margin-bottom: 0.5em;
`;
exports.SModalDescription = styled_components_1.default.div `
  position: relative;
`;
exports.SModalDescriptionText = (0, styled_components_1.default)(react_textarea_autosize_1.default) `
  padding: 0.25em;
  width: 100%;
  font-size: 1em;
  word-break: break-all;
  white-space: pre-line;
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: #aaa;
  }
`;
exports.SModalActions = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0.75em;
`;
exports.SModalActionsLeft = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.SModalActionsRight = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.SMenuList = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
exports.SMenuListItem = styled_components_1.default.button `
  min-width: 8.5em;
  padding: 0.75em 1em;
  font-size: 0.875em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }

  &:not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
exports.SButton = (0, styled_components_1.default)(Button_1.default) `
  margin-right: 1.25em;
  padding: 0.75em 1em;
`;
exports.SIconButton = (0, styled_components_1.default)(IconButton_1.default) `
  margin-right: 1em;
`;
exports.SDivider = styled_components_1.default.hr `
  border-width: 0;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
`;
exports.SAccordion = styled_components_1.default.details ``;
exports.SAccordionSummary = styled_components_1.default.summary `
  padding: 1em 1.5em;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }

  &::marker {
    font-size: 0.75em;
  }
`;
exports.SAccordionSummaryText = styled_components_1.default.span `
  font-size: 0.75em;
`;
exports.SNoteDetailArea = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
`;
exports.SNoteDetail = styled_components_1.default.dl `
  width: 33%;
  min-width: 11.5em;
  margin-bottom: 1em;
`;
exports.SNoteDetailTitle = styled_components_1.default.dt `
  color: #888;
  font-weight: normal;
  font-size: 0.75em;
  margin-bottom: 0.25em;
`;
exports.SNoteDetailData = styled_components_1.default.dd `
  flex: 1;
  font-size: 0.875em;
  line-height: 1.5;
`;
exports.SNoteDetailDataInput = (0, styled_components_1.default)(NumberInput_1.default) `
  text-align: left;
  padding: 0em 0.25em;
  width: 3.75em;
`;
exports.SNoteDetailDataSpan = styled_components_1.default.span `
  vertical-align: middle;
`;


/***/ }),

/***/ "./src/components/NoteEditModal/NoteEditModal.tsx":
/*!********************************************************!*\
  !*** ./src/components/NoteEditModal/NoteEditModal.tsx ***!
  \********************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoteEditModal = void 0;
const Modal_1 = __importDefault(__webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/index.js"));
const Popover_1 = __importDefault(__webpack_require__(/*! @mui/material/Popover */ "./node_modules/@mui/material/Popover/index.js"));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const useNote_1 = __webpack_require__(/*! ../../hooks/useNote */ "./src/hooks/useNote.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
const NoteEditModal_style_1 = __webpack_require__(/*! ./NoteEditModal.style */ "./src/components/NoteEditModal/NoteEditModal.style.ts");
const utils_2 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const NoteEditModal = ({ isOpen, note, onClose, onUpdateNote, onDeleteNote, initFocus }) => {
    const { title, description, is_fixed, is_open, position_x, position_y, width, height, created_at, updated_at, } = note;
    const [editIsFixed, setEditIsFixed] = (0, react_1.useState)(is_fixed);
    const [isApeal, setIsApeal] = (0, react_1.useState)(false);
    const [anchorActionsEl, setAnchorActionsEl] = (0, react_1.useState)(null);
    const { editTitle, setEditTitle, editDescription, setEditDescription, editIsOpen, setEditIsOpen, editPositionX, editPositionY, setEditPosition, editWidth, editHeight, setEditSize, } = (0, useNote_1.useNoteEdit)(note);
    const editedNote = Object.assign(Object.assign({}, note), { title: editTitle, description: editDescription, position_x: editPositionX, position_y: editPositionY, width: editWidth, height: editHeight, is_fixed: editIsFixed, is_open: editIsFixed });
    const isEditing = (0, react_1.useMemo)(() => {
        const isEqualTitle = title === editTitle || (title === undefined && editTitle === "");
        const isEqualDescription = description === editDescription || (description === undefined && editDescription === "");
        const isEqualPositionX = position_x === editPositionX;
        const isEqualPositionY = position_y === editPositionY;
        const isEqualWidth = width === editWidth;
        const isEqualHeight = height === editHeight;
        const isEqualIsFixed = is_fixed === editIsFixed;
        const isEqualIsOpen = is_open === editIsOpen;
        return (!isEqualTitle ||
            !isEqualDescription ||
            !isEqualPositionX ||
            !isEqualPositionY ||
            !isEqualWidth ||
            !isEqualHeight ||
            !isEqualIsFixed ||
            !isEqualIsOpen);
    }, [note, editedNote]);
    const onChangeEditIsFixed = (0, react_1.useCallback)((e) => {
        if (e.target.value === "fixed") {
            setEditPosition(undefined, undefined);
            setEditIsFixed(true);
        }
        else {
            setEditPosition(position_x, position_y);
            setEditIsFixed(false);
        }
    }, []);
    const onChangeEditIsOpen = (0, react_1.useCallback)((e) => {
        if (e.target.value === "true") {
            setEditIsOpen(true);
        }
        else {
            setEditIsOpen(false);
        }
    }, []);
    const onSaveAndClose = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const isUpdated = yield onUpdateNote(editedNote);
        if (isUpdated) {
            onClose && onClose();
        }
        else {
            const message = ((_a = description === null || description === void 0 ? void 0 : description.length) !== null && _a !== void 0 ? _a : 0) > 2000 ? (0, utils_2.msg)("save_error_word_maximum_msg") : (0, utils_2.msg)("save_error_msg_2");
            alert(`${(0, utils_2.msg)("save_error_msg")}${message}`);
        }
    }), [editedNote]);
    const onCloseWithoutSave = (0, react_1.useCallback)(() => {
        setEditTitle(title);
        setEditDescription(description);
        setEditPosition(position_x, position_y);
        setEditSize(width !== null && width !== void 0 ? width : useNote_1.MIN_NOTE_WIDTH, height !== null && height !== void 0 ? height : useNote_1.MIN_NOTE_HEIGHT);
        onClose && onClose();
    }, [note, onClose]);
    const onDelete = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (onDeleteNote && (yield onDeleteNote(note))) {
            onClose && onClose();
            handleCloseActions();
        }
    }), []);
    const onClickMoreActions = (e) => {
        setAnchorActionsEl(e.currentTarget);
    };
    const handleCloseActions = () => {
        setAnchorActionsEl(null);
    };
    return (react_1.default.createElement(Modal_1.default, { open: !!isOpen, onClose: () => {
            if (isEditing) {
                setIsApeal(true);
                setTimeout(() => {
                    setIsApeal(false);
                }, 150);
            }
            else {
                onCloseWithoutSave();
            }
        }, BackdropComponent: NoteEditModal_style_1.SBackdrop },
        react_1.default.createElement(NoteEditModal_style_1.SModalWrapper, { "$isApeal": isApeal },
            react_1.default.createElement(NoteEditModal_style_1.SModal, null,
                react_1.default.createElement(NoteEditModal_style_1.SModalScrollContent, null,
                    react_1.default.createElement(NoteEditModal_style_1.SModalHeader, null,
                        react_1.default.createElement(NoteEditModal_style_1.SModalTitle, { autoFocus: initFocus === "title", placeholder: (0, utils_2.msg)("title_sort_option"), defaultValue: title, onChange: (e) => setEditTitle(e.target.value), minRows: 1 })),
                    react_1.default.createElement(NoteEditModal_style_1.SModalContent, null,
                        react_1.default.createElement(NoteEditModal_style_1.SModalSection, null,
                            react_1.default.createElement(NoteEditModal_style_1.SModalDescription, null,
                                react_1.default.createElement(NoteEditModal_style_1.SModalDescriptionText, { autoFocus: initFocus === "description", minRows: 1, placeholder: (0, utils_2.msg)("input_description_placeholder"), defaultValue: description, onChange: (e) => setEditDescription(e.target.value) }))),
                        react_1.default.createElement(NoteEditModal_style_1.SDivider, null),
                        react_1.default.createElement(NoteEditModal_style_1.SAccordion, null,
                            react_1.default.createElement(NoteEditModal_style_1.SAccordionSummary, null,
                                react_1.default.createElement(NoteEditModal_style_1.SAccordionSummaryText, null, (0, utils_2.msg)("detail_msg"))),
                            react_1.default.createElement(NoteEditModal_style_1.SModalSection, null,
                                react_1.default.createElement(NoteEditModal_style_1.SNoteDetailArea, null,
                                    react_1.default.createElement(NoteEditModal_style_1.SNoteDetail, null,
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailTitle, null, (0, utils_2.msg)("pin_msg")),
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailData, null,
                                            react_1.default.createElement("select", { value: editIsFixed ? "fixed" : "unfixed", onChange: onChangeEditIsFixed },
                                                react_1.default.createElement("option", { value: "unfixed" }, (0, utils_2.msg)("pin_select_option_unfixed_msg")),
                                                react_1.default.createElement("option", { value: "fixed" }, (0, utils_2.msg)("pin_select_option_fixed_msg"))))),
                                    react_1.default.createElement(NoteEditModal_style_1.SNoteDetail, null,
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailTitle, null, (0, utils_2.msg)("open_msg")),
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailData, null,
                                            react_1.default.createElement("select", { value: editIsOpen ? "true" : "false", onChange: onChangeEditIsOpen },
                                                react_1.default.createElement("option", { value: "false" }, (0, utils_2.msg)("open_select_option_yes_msg")),
                                                react_1.default.createElement("option", { value: "true" }, (0, utils_2.msg)("open_select_option_no_msg"))))),
                                    react_1.default.createElement(NoteEditModal_style_1.SNoteDetail, null,
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailTitle, null, (0, utils_2.msg)("position_msg")),
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailData, null,
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataSpan, null, "x:"),
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataInput, { valueNum: editPositionX !== null && editPositionX !== void 0 ? editPositionX : 0, onChangeNumber: (val) => setEditPosition(val, editPositionY) }),
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataSpan, null, "y:"),
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataInput, { valueNum: editPositionY !== null && editPositionY !== void 0 ? editPositionY : 0, onChangeNumber: (val) => setEditPosition(editPositionX, val) }))),
                                    react_1.default.createElement(NoteEditModal_style_1.SNoteDetail, null,
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailTitle, null, (0, utils_2.msg)("size_msg")),
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailData, null,
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataSpan, null,
                                                (0, utils_2.msg)("size_width_msg"),
                                                ":"),
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataInput, { valueNum: editWidth, onChangeNumber: (val) => setEditSize(val, editHeight) }),
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataSpan, null,
                                                (0, utils_2.msg)("size_height_msg"),
                                                ":"),
                                            react_1.default.createElement(NoteEditModal_style_1.SNoteDetailDataInput, { valueNum: editHeight, onChangeNumber: (val) => setEditSize(editWidth, val) }))),
                                    updated_at && (react_1.default.createElement(NoteEditModal_style_1.SNoteDetail, null,
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailTitle, null, (0, utils_2.msg)("updated_at_msg")),
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailData, null, (0, utils_1.formatDate)(new Date(updated_at))))),
                                    created_at && (react_1.default.createElement(NoteEditModal_style_1.SNoteDetail, null,
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailTitle, null, (0, utils_2.msg)("created_at_msg")),
                                        react_1.default.createElement(NoteEditModal_style_1.SNoteDetailData, null, (0, utils_1.formatDate)(new Date(created_at)))))))))),
                react_1.default.createElement(NoteEditModal_style_1.SDivider, null),
                react_1.default.createElement(NoteEditModal_style_1.SModalActions, null,
                    react_1.default.createElement(NoteEditModal_style_1.SModalActionsLeft, null,
                        react_1.default.createElement(NoteEditModal_style_1.SButton, { onClick: onSaveAndClose, disabled: !isEditing }, (0, utils_2.msg)("save_msg")),
                        react_1.default.createElement(NoteEditModal_style_1.SButton, { secondary: true, onClick: onCloseWithoutSave }, isEditing ? (0, utils_2.msg)("discard_close_msg") : (0, utils_2.msg)("close_msg"))),
                    react_1.default.createElement(NoteEditModal_style_1.SModalActionsRight, null,
                        react_1.default.createElement(NoteEditModal_style_1.SIconButton, { "aria-labelledby": "action-popover", onClick: onClickMoreActions },
                            react_1.default.createElement(solid_1.EllipsisVerticalIcon, { fill: "rgba(0, 0, 0, 0.4)" })),
                        react_1.default.createElement(Popover_1.default, { id: "action-popover", open: Boolean(anchorActionsEl), anchorEl: anchorActionsEl, onClose: handleCloseActions, anchorOrigin: {
                                vertical: "top",
                                horizontal: "left",
                            }, transformOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            } },
                            react_1.default.createElement(NoteEditModal_style_1.SMenuList, null,
                                react_1.default.createElement(NoteEditModal_style_1.SMenuListItem, { onClick: onDelete }, (0, utils_2.msg)("delete_msg"))))))))));
};
exports.NoteEditModal = NoteEditModal;


/***/ }),

/***/ "./src/components/OptionHeader/OptionHeader.tsx":
/*!******************************************************!*\
  !*** ./src/components/OptionHeader/OptionHeader.tsx ***!
  \******************************************************/
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
exports.SHeaderContentLink = exports.SHeaderContent = exports.STopLink = exports.STitle = exports.SLogo = exports.SHeaderLeft = exports.SHeader = exports.OptionHeader = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const OptionHeader = ({ current }) => {
    return (react_1.default.createElement(exports.SHeader, null,
        react_1.default.createElement(exports.SHeaderLeft, null,
            react_1.default.createElement(exports.STopLink, { to: "/memos.html" },
                react_1.default.createElement(exports.SLogo, { src: "/images/icon_38.png", alt: "" }),
                react_1.default.createElement(exports.STitle, null, (0, utils_1.msg)("appName")))),
        react_1.default.createElement(exports.SHeaderContent, null,
            react_1.default.createElement(exports.SHeaderContentLink, { "$isActive": current === "memos", to: "/memos.html" }, (0, utils_1.msg)("note_header_msg")),
            react_1.default.createElement(exports.SHeaderContentLink, { "$isActive": current === "setting", to: "/setting.html" }, (0, utils_1.msg)("settings_header_msg")))));
};
exports.OptionHeader = OptionHeader;
exports["default"] = exports.OptionHeader;
exports.SHeader = styled_components_1.default.header `
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.75em;
  padding: 0 1.75em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1;
`;
exports.SHeaderLeft = styled_components_1.default.div `
  display: flex;
  align-items: center;
  position: relative;
`;
exports.SLogo = styled_components_1.default.img `
  width: 1.5em;
  margin-top: -0.25em;
  margin-right: 0.25em;
`;
exports.STitle = styled_components_1.default.h1 ``;
exports.STopLink = (0, styled_components_1.default)(react_router_dom_1.Link) `
  display: flex;
  align-items: center;
  padding: 0.25em;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;
exports.SHeaderContent = styled_components_1.default.div `
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0 1em;
`;
exports.SHeaderContentLink = (0, styled_components_1.default)(react_router_dom_1.Link) `
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  margin: 0 0.25em;
  padding: 0 1em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${({ $isActive }) => $isActive &&
    (0, styled_components_1.css) `
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #4c4722;
      }
    `}
`;


/***/ }),

/***/ "./src/components/OptionList/OptionListItem.style.ts":
/*!***********************************************************!*\
  !*** ./src/components/OptionList/OptionListItem.style.ts ***!
  \***********************************************************/
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
exports.SLaunchIcon = exports.SPageInfoLink = exports.SPageInfoTitle = exports.SPageInfoFaviconImage = exports.SPageInfoHeader = exports.SPageInfo = exports.SPageInfoWrap = exports.SIconButton = exports.SCopySuccessIcon = exports.SIconButtonWrap = exports.SCardActions = exports.SCardFooter = exports.SCardDateText = exports.SCardDate = exports.SCardDescriptionText = exports.SCardDescription = exports.SCardTitle = exports.noteDescriptionCSS = exports.noteTitleCSS = exports.SCardHeader = exports.SCard = void 0;
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
const Icon_1 = __webpack_require__(/*! ../Icon */ "./src/components/Icon.tsx");
const IconButton_1 = __importDefault(__webpack_require__(/*! ../Button/IconButton */ "./src/components/Button/IconButton.tsx"));
exports.SCard = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #fff;
  border-radius: 0.25em;
  padding: 0.75em 1em;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  transition: box-shadow 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
`;
exports.SCardHeader = styled_components_1.default.div `
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
`;
exports.noteTitleCSS = (0, styled_components_1.css) `
  font-size: 1em;
  line-height: 1.25;
  color: #333;
  border-width: 0.0625em;
  border-color: transparent;
  border-radius: 0.2em;
  word-break: break-all;
  white-space: pre-line;
`;
exports.noteDescriptionCSS = (0, styled_components_1.css) `
  margin-bottom: 0.75em;
  padding: 0.25em 0;
  line-height: 1.25;
  color: #333;
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.2em;
  word-break: break-all;
  white-space: pre-line;
`;
exports.SCardTitle = styled_components_1.default.h3 `
  ${exports.noteTitleCSS}
`;
exports.SCardDescription = styled_components_1.default.div `
  flex: 1;
  ${exports.noteDescriptionCSS}
`;
exports.SCardDescriptionText = styled_components_1.default.span `
  font-size: 0.875em;
`;
exports.SCardDate = styled_components_1.default.div `
  font-size: 0.75em;
  line-height: 1.5;
  text-align: right;
  color: #777;
`;
exports.SCardDateText = styled_components_1.default.span `
  margin-right: 1em;
`;
exports.SCardFooter = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
exports.SCardActions = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.SIconButtonWrap = styled_components_1.default.div `
  margin-right: 1em;
`;
exports.SCopySuccessIcon = (0, styled_components_1.default)(Icon_1.CopySuccessIcon) `
  width: 1.25em;
  height: 1.25em;
`;
exports.SIconButton = (0, styled_components_1.default)(IconButton_1.default) `
  width: 1.25em;
  height: 1.25em;
`;
exports.SPageInfoWrap = styled_components_1.default.div `
  display: inline-flex;
  margin-bottom: 0.75em;
`;
exports.SPageInfo = styled_components_1.default.div `
  display: inline-block;
  justify-self: stretch;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
  padding: 0.5em 0.75em;
  cursor: pointer;

  ${({ $isFilter }) => $isFilter &&
    (0, styled_components_1.css) `
      display: inline-flex;
      align-items: center;
    `}

  &:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
exports.SPageInfoHeader = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.SPageInfoFaviconImage = styled_components_1.default.img `
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
`;
exports.SPageInfoTitle = styled_components_1.default.p `
  font-size: 0.75em;
  line-height: 1.25;
  word-break: break-all;
`;
exports.SPageInfoLink = styled_components_1.default.p `
  font-size: 0.625em;
  word-break: break-all;
  text-decoration: underline;
  color: #00379e;
  margin-top: 0.5em;
  margin-left: 2.4em;
`;
exports.SLaunchIcon = (0, styled_components_1.default)(solid_1.FunnelIcon) `
  width: 1em;
  height: 1em;
`;


/***/ }),

/***/ "./src/components/OptionList/OptionListItem.tsx":
/*!******************************************************!*\
  !*** ./src/components/OptionList/OptionListItem.tsx ***!
  \******************************************************/
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
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Popover_1 = __importDefault(__webpack_require__(/*! @mui/material/Popover */ "./node_modules/@mui/material/Popover/index.js"));
const Tooltip_1 = __importDefault(__webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/index.js"));
const solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const Icon_1 = __webpack_require__(/*! ../Icon */ "./src/components/Icon.tsx");
const useClipboard_1 = __webpack_require__(/*! ../../hooks/useClipboard */ "./src/hooks/useClipboard.ts");
const NoteEditModal_1 = __webpack_require__(/*! ../NoteEditModal/NoteEditModal */ "./src/components/NoteEditModal/NoteEditModal.tsx");
const OptionListItem_style_1 = __webpack_require__(/*! ./OptionListItem.style */ "./src/components/OptionList/OptionListItem.style.ts");
const utils_2 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const ColorPicker_1 = __importDefault(__webpack_require__(/*! ../ColorPicker/ColorPicker */ "./src/components/ColorPicker/ColorPicker.tsx"));
const OptionListItem = (0, react_1.memo)(({ note, defaultColor, pageInfo, showPageInfo, currentPageInfoId, onUpdate, onDelete, onClickLink, onClickFilter, measure, }) => {
    const { id, title, description, created_at, updated_at } = note;
    const [openModal, setOpenModal] = (0, react_1.useState)(false);
    const { isSuccessCopy, copyClipboard } = (0, useClipboard_1.useClipboard)();
    const [initFocus, setInitFocus] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        measure && measure();
    }, [note, currentPageInfoId]);
    // カラーピッカー
    const [anchorEl, setAnchorEl] = react_1.default.useState(null);
    const onClickColorPickerButton = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const handleCloseColorPicker = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };
    const isOpenColorPickerPopover = Boolean(anchorEl);
    const popoverId = isOpenColorPickerPopover ? "color-picker-popover" : undefined;
    const onChangeColor = (color) => {
        onUpdate(Object.assign(Object.assign({}, note), { color }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(OptionListItem_style_1.SCard, { onDoubleClick: () => {
                setOpenModal(true);
            }, style: { backgroundColor: note.color || defaultColor || "#fff" } },
            react_1.default.createElement(OptionListItem_style_1.SCardHeader, null,
                react_1.default.createElement(OptionListItem_style_1.SCardTitle, { onDoubleClick: (e) => {
                        e.stopPropagation();
                        setInitFocus("title");
                        setOpenModal(true);
                    } }, title)),
            react_1.default.createElement(OptionListItem_style_1.SCardDescription, { onDoubleClick: (e) => {
                    e.stopPropagation();
                    setInitFocus("description");
                    setOpenModal(true);
                } },
                react_1.default.createElement(OptionListItem_style_1.SCardDescriptionText, null, description)),
            showPageInfo && pageInfo && (react_1.default.createElement(OptionListItem_style_1.SPageInfoWrap, null,
                react_1.default.createElement(OptionListItem_style_1.SPageInfo, { onClick: (e) => {
                        var _a;
                        e.preventDefault();
                        e.stopPropagation();
                        onClickLink((_a = pageInfo.page_url) !== null && _a !== void 0 ? _a : "");
                    } },
                    react_1.default.createElement(OptionListItem_style_1.SPageInfoHeader, null,
                        react_1.default.createElement(OptionListItem_style_1.SPageInfoFaviconImage, { src: pageInfo.fav_icon_url }),
                        react_1.default.createElement(OptionListItem_style_1.SPageInfoTitle, null, pageInfo.page_title)),
                    react_1.default.createElement(OptionListItem_style_1.SPageInfoLink, null, pageInfo.page_url)),
                react_1.default.createElement(Tooltip_1.default, { title: (0, utils_2.msg)("this_page_note_list_msg") },
                    react_1.default.createElement(OptionListItem_style_1.SPageInfo, { "$isFilter": true, onClick: (e) => {
                            e.stopPropagation();
                            onClickFilter(pageInfo.id);
                        } },
                        react_1.default.createElement(OptionListItem_style_1.SLaunchIcon, { fill: "rgba(0, 0, 0, 0.4)" }))))),
            react_1.default.createElement(OptionListItem_style_1.SCardFooter, null,
                react_1.default.createElement(OptionListItem_style_1.SCardActions, null,
                    react_1.default.createElement(Tooltip_1.default, { title: (0, utils_2.msg)("edit_msg"), enterDelay: 300 },
                        react_1.default.createElement(OptionListItem_style_1.SIconButtonWrap, null,
                            react_1.default.createElement(OptionListItem_style_1.SIconButton, { onClick: (e) => {
                                    e.stopPropagation();
                                    setOpenModal(true);
                                } },
                                react_1.default.createElement(solid_1.PencilSquareIcon, { fill: "rgba(0, 0, 0, 0.4)" })))),
                    react_1.default.createElement(Tooltip_1.default, { title: isSuccessCopy ? (0, utils_2.msg)("copied_msg") : (0, utils_2.msg)("copy_msg"), enterDelay: 300 },
                        react_1.default.createElement(OptionListItem_style_1.SIconButtonWrap, null, isSuccessCopy ? (react_1.default.createElement(OptionListItem_style_1.SCopySuccessIcon, { fill: "#22c55e" })) : (react_1.default.createElement(OptionListItem_style_1.SIconButton, { onClick: (e) => {
                                e.stopPropagation();
                                copyClipboard(`${title}\n${description}`);
                            } },
                            react_1.default.createElement(Icon_1.CopyIcon, { fill: "rgba(0, 0, 0, 0.4)" }))))),
                    react_1.default.createElement(Tooltip_1.default, { title: (0, utils_2.msg)("color_msg"), enterDelay: 300 },
                        react_1.default.createElement(OptionListItem_style_1.SIconButtonWrap, null,
                            react_1.default.createElement(OptionListItem_style_1.SIconButton, { onClick: onClickColorPickerButton },
                                react_1.default.createElement(Icon_1.PalletIcon, { fill: "rgba(0, 0, 0, 0.4)" })))),
                    react_1.default.createElement(Popover_1.default, { id: popoverId, open: isOpenColorPickerPopover, anchorEl: anchorEl, onClose: handleCloseColorPicker, anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        } },
                        react_1.default.createElement("div", { style: { width: "168px", textAlign: "center" }, onClick: (e) => e.stopPropagation() },
                            react_1.default.createElement(ColorPicker_1.default, { hasDefault: true, color: note.color, onChangeColor: onChangeColor }))),
                    react_1.default.createElement(Tooltip_1.default, { title: (0, utils_2.msg)("delete_msg"), enterDelay: 300 },
                        react_1.default.createElement(OptionListItem_style_1.SIconButtonWrap, null,
                            react_1.default.createElement(OptionListItem_style_1.SIconButton, { onClick: (e) => {
                                    e.stopPropagation();
                                    id && onDelete(note);
                                } },
                                react_1.default.createElement(solid_1.TrashIcon, { fill: "rgba(0, 0, 0, 0.4)" }))))),
                react_1.default.createElement(OptionListItem_style_1.SCardDate, null,
                    created_at && (react_1.default.createElement(OptionListItem_style_1.SCardDateText, null,
                        (0, utils_2.msg)("created_at_msg"),
                        ": ",
                        (0, utils_1.formatDate)(new Date(created_at)))),
                    updated_at && (react_1.default.createElement(OptionListItem_style_1.SCardDateText, null,
                        (0, utils_2.msg)("updated_at_msg"),
                        ": ",
                        (0, utils_1.formatDate)(new Date(updated_at))))))),
        react_1.default.createElement(NoteEditModal_1.NoteEditModal, { isOpen: openModal, onClose: () => {
                setOpenModal(false);
                setInitFocus(undefined);
            }, note: note, onUpdateNote: onUpdate, onDeleteNote: onDelete, initFocus: initFocus })));
});
exports["default"] = OptionListItem;


/***/ }),

/***/ "./src/components/TextInput/NumberInput.tsx":
/*!**************************************************!*\
  !*** ./src/components/TextInput/NumberInput.tsx ***!
  \**************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const NumberInput = (0, react_1.memo)((_a) => {
    var { valueNum, onChangeNumber } = _a, props = __rest(_a, ["valueNum", "onChangeNumber"]);
    const [inputValue, setInputValue] = (0, react_1.useState)(`${valueNum}`);
    (0, react_1.useEffect)(() => {
        setInputValue(`${valueNum}`);
    }, [valueNum]);
    const onChangeInput = (0, react_1.useCallback)((e) => {
        setInputValue(e.target.value);
    }, [setInputValue]);
    const onKeyDownInput = (0, react_1.useCallback)((e) => {
        if (e.key === "Enter") {
            onEnter();
        }
    }, [valueNum, inputValue, setInputValue, onChangeNumber]);
    const onEnter = (0, react_1.useCallback)(() => {
        const inputNum = Number(inputValue);
        if (!isNaN(inputNum))
            onChangeNumber(inputNum);
        setInputValue(`${valueNum}`);
    }, [inputValue, setInputValue, onChangeNumber]);
    return (react_1.default.createElement("input", Object.assign({ type: "text", value: inputValue, onChange: onChangeInput, onKeyDown: onKeyDownInput, onBlur: onEnter }, props)));
});
exports["default"] = NumberInput;


/***/ }),

/***/ "./src/components/Usage/Usage.tsx":
/*!****************************************!*\
  !*** ./src/components/Usage/Usage.tsx ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const Usage = (0, react_1.memo)(() => {
    // インストール直後は目立たせる
    const isInit = window.location.hash === "#init";
    return (react_1.default.createElement(SUsageContainer, { "$isInit": isInit },
        react_1.default.createElement(SUsageContent, null,
            isInit && react_1.default.createElement(SUsageWelcome, null, (0, utils_1.msg)("welcome_msg")),
            react_1.default.createElement(SUsageItem, null,
                react_1.default.createElement("h3", null, (0, utils_1.msg)("usage01")),
                react_1.default.createElement(SUsageImageArea, null,
                    react_1.default.createElement("img", { width: 400, src: "/images/usage/usage01.png", alt: "" }))),
            react_1.default.createElement(SUsageItem, null,
                react_1.default.createElement("h3", null, (0, utils_1.msg)("usage02")),
                react_1.default.createElement(SUsageImageArea, null,
                    react_1.default.createElement("img", { width: 400, src: "/images/usage/usage02.png", alt: "" }))),
            react_1.default.createElement(SUsageItem, null,
                react_1.default.createElement("h3", null, (0, utils_1.msg)("usage02_2")),
                react_1.default.createElement(SUsageImageArea, null,
                    react_1.default.createElement("img", { width: 200, src: "/images/usage/usage02_2.png", alt: "" }))),
            react_1.default.createElement(SUsageItem, null,
                react_1.default.createElement("h3", null,
                    (0, utils_1.msg)("usage03"),
                    react_1.default.createElement("br", null),
                    (0, utils_1.msg)("usage04")),
                react_1.default.createElement(SUsageImageArea, null,
                    react_1.default.createElement("img", { src: "/images/usage/usage03.png", alt: "" }))),
            react_1.default.createElement(SUsageItem, null,
                react_1.default.createElement("h3", null, (0, utils_1.msg)("usage05")),
                react_1.default.createElement(SUsageImageArea, null,
                    react_1.default.createElement("img", { width: 400, src: "/images/usage/usage05.png", alt: "" }))),
            react_1.default.createElement(SUsageItem, null,
                react_1.default.createElement("h3", null,
                    react_1.default.createElement("a", { href: "./memos.html" }, (0, utils_1.msg)("usage06")),
                    (0, utils_1.msg)("usage06_2"))),
            react_1.default.createElement(SUsageItem, null,
                react_1.default.createElement("h3", null, (0, utils_1.msg)("usage07")),
                react_1.default.createElement(SUsageImageArea, null,
                    react_1.default.createElement("img", { width: 300, src: "/images/usage/usage06.png", alt: "" })),
                react_1.default.createElement(SUsageFunctionList, null,
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, (0, utils_1.msg)("pin_msg")),
                        ": ",
                        (0, utils_1.msg)("pin_explain_msg")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, (0, utils_1.msg)("edit_msg")),
                        ": ",
                        (0, utils_1.msg)("edit_explain_msg")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, (0, utils_1.msg)("copy_msg")),
                        ": ",
                        (0, utils_1.msg)("copy_explain_msg")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, (0, utils_1.msg)("color_msg")),
                        ": ",
                        (0, utils_1.msg)("color_explain_msg")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, (0, utils_1.msg)("delete_msg")),
                        ": ",
                        (0, utils_1.msg)("delete_explain_msg")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("b", null, (0, utils_1.msg)("open_msg")),
                        ": ",
                        (0, utils_1.msg)("open_explain_msg")))))));
});
exports["default"] = Usage;
const SUsageContainer = styled_components_1.default.div `
  padding: 2rem 1rem;

  ${({ $isInit }) => $isInit &&
    (0, styled_components_1.css) `
      border-radius: 0.5rem;
      background-color: #FFF7CC;
      position: relative;

      &:before {
        content: "";

        animation: 2s ease-out 0s 3 fluffyAnimation forwards;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        transform-origin: center;
      }

      /* ふわっと広がるアニメーション */
      @keyframes fluffyAnimation {
        0% {
          box-shadow: 0 0 0 0 #ffe600;
        }
        50% {
          box-shadow: 0 0 0 1rem rgba(255, 230, 0, 0);
        }
        100% {
          box-s
          box-shadow: 0 0 0 2rem rgba(255, 230, 0, 0);
        }
      }
    `}

  ${({ $isInit }) => !$isInit &&
    (0, styled_components_1.css) `
      /* border: 1px solid #ccc; */
      background-color: #fff;
    `}
`;
const SUsageContent = styled_components_1.default.div `
  position: relative;
`;
const SUsageItem = styled_components_1.default.div `
  margin-bottom: 2.5rem;

  & > h3 {
    text-align: center;
    line-height: 1.5;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: #002761;
    text-decoration: underline;
  }
`;
const SUsageWelcome = styled_components_1.default.h2 `
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;
const SUsageImageArea = styled_components_1.default.div `
  text-align: center;
  margin-bottom: 1rem;

  & > img {
    max-width: 30rem;
    margin: auto;
  }
`;
const SUsageFunctionList = styled_components_1.default.ol `
  font-size: 0.875rem;
  width: 25rem;
  list-style: decimal;
  margin: auto;

  & > li {
    margin-bottom: 0.5rem;
    line-height: 1.25;
  }
`;


/***/ }),

/***/ "./src/hooks/useClipboard.ts":
/*!***********************************!*\
  !*** ./src/hooks/useClipboard.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useClipboard = void 0;
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const useClipboard = () => {
    // コピー成功アイコンの表示
    const [isSuccessCopy, setIsSuccessCopy] = (0, react_1.useState)(false);
    const copyClipboard = (0, react_1.useCallback)((text) => {
        navigator.clipboard.writeText(text).then(() => {
            setIsSuccessCopy(true);
            setTimeout(() => {
                setIsSuccessCopy(false);
            }, 1000);
        });
    }, []);
    return {
        isSuccessCopy,
        copyClipboard,
    };
};
exports.useClipboard = useClipboard;


/***/ }),

/***/ "./src/hooks/useNote.ts":
/*!******************************!*\
  !*** ./src/hooks/useNote.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useNoteSize = exports.useNotePosition = exports.initialPositionY = exports.initialPositionX = exports.useNoteEdit = exports.NOTE_LEFT_POSITION = exports.NOTE_TOP_POSITION = exports.MIN_NOTE_HEIGHT = exports.MIN_NOTE_WIDTH = void 0;
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const Note_1 = __webpack_require__(/*! ../types/Note */ "./src/types/Note.ts");
exports.MIN_NOTE_WIDTH = 160;
exports.MIN_NOTE_HEIGHT = 120;
exports.NOTE_TOP_POSITION = 0;
exports.NOTE_LEFT_POSITION = 0;
/**
 * メモを編集するためのHook
 * @param note Note
 * @returns 各要素と、更新する関数
 */
const useNoteEdit = ({ title, description, position_x, position_y, width = exports.MIN_NOTE_WIDTH, height = exports.MIN_NOTE_HEIGHT, is_open, }) => {
    const [editTitle, setEditTitle] = (0, react_1.useState)(title);
    const [editDescription, setEditDescription] = (0, react_1.useState)(description);
    const [editIsOpen, setEditIsOpen] = (0, react_1.useState)(is_open);
    const { positionX: editPositionX, positionY: editPositionY, setPosition: setEditPosition, } = (0, exports.useNotePosition)(position_x, position_y);
    const { width: editWidth, height: editHeight, setSize: setEditSize } = (0, exports.useNoteSize)(width, height);
    /**
     * 新isFixedに対する修正位置を返却する
     */
    const getFixedPosition = (0, react_1.useCallback)((isFixed) => {
        const fixPosition = isFixed ? -1 : 1;
        const newPositionX = (editPositionX !== null && editPositionX !== void 0 ? editPositionX : (0, exports.initialPositionX)()) + window.scrollX * fixPosition;
        const newPositionY = (editPositionY !== null && editPositionY !== void 0 ? editPositionY : (0, exports.initialPositionY)()) + window.scrollY * fixPosition;
        return { positionX: newPositionX, positionY: newPositionY };
    }, [editPositionX, editPositionY]);
    (0, react_1.useEffect)(() => {
        setEditIsOpen(is_open);
    }, [is_open]);
    (0, react_1.useEffect)(() => {
        setEditDescription(description);
    }, [description]);
    (0, react_1.useEffect)(() => {
        setEditTitle(title);
    }, [title]);
    return {
        editTitle,
        setEditTitle,
        editDescription,
        setEditDescription,
        editIsOpen,
        setEditIsOpen,
        editPositionX,
        editPositionY,
        setEditPosition,
        editWidth,
        editHeight,
        setEditSize,
        getFixedPosition,
    };
};
exports.useNoteEdit = useNoteEdit;
// initial: defaultがセットされていないときの値
const initialPositionX = () => (window.innerWidth - Note_1.DEAULT_NOTE_WIDTH) / 2;
exports.initialPositionX = initialPositionX;
const initialPositionY = () => (window.innerHeight - Note_1.DEAULT_NOTE_HEIGHT) / 2;
exports.initialPositionY = initialPositionY;
const useNotePosition = (defaultPositionX, defaultPositionY) => {
    const [positionX, setPositionX] = (0, react_1.useState)(defaultPositionX);
    const [positionY, setPositionY] = (0, react_1.useState)(defaultPositionY);
    const setPosition = (0, react_1.useCallback)((positionX, positionY) => {
        if (positionX === undefined) {
            setPositionX(undefined);
        }
        else {
            setPositionX(positionX >= exports.NOTE_LEFT_POSITION ? positionX : exports.NOTE_LEFT_POSITION);
        }
        if (positionY === undefined) {
            setPositionY(undefined);
        }
        else {
            setPositionY(positionY >= exports.NOTE_TOP_POSITION ? positionY : exports.NOTE_TOP_POSITION);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        setPosition(defaultPositionX, defaultPositionY);
    }, [defaultPositionX, defaultPositionY]);
    return {
        positionX,
        positionY,
        setPosition,
    };
};
exports.useNotePosition = useNotePosition;
const useNoteSize = (defaultWidth = exports.MIN_NOTE_WIDTH, defaultHeight = exports.MIN_NOTE_HEIGHT) => {
    const [width, setWidth] = (0, react_1.useState)(defaultWidth);
    const [height, setHeight] = (0, react_1.useState)(defaultHeight);
    const setSize = (0, react_1.useCallback)((width, height) => {
        setWidth(width >= exports.MIN_NOTE_WIDTH ? width : exports.MIN_NOTE_WIDTH);
        setHeight(height >= exports.MIN_NOTE_HEIGHT ? height : exports.MIN_NOTE_HEIGHT);
    }, []);
    return {
        width,
        height,
        setSize,
    };
};
exports.useNoteSize = useNoteSize;


/***/ }),

/***/ "./src/hooks/useNoteDownload.ts":
/*!**************************************!*\
  !*** ./src/hooks/useNoteDownload.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useNoteDownload = exports.handleDownload = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
const handleDownload = (copyText, contentType = "text/csv", fileType = "csv") => {
    const today = new Date();
    const fontmatedToday = today.toISOString().slice(0, 10).replace(/-/g, "");
    const filename = `export_${(0, utils_1.msg)("app_name")}_${fontmatedToday}.${fileType}`;
    const content = copyText;
    var blob = new Blob([content], { type: contentType });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(blob);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
};
exports.handleDownload = handleDownload;
const useNoteDownload = () => {
    return {
        handleDownload: exports.handleDownload,
    };
};
exports.useNoteDownload = useNoteDownload;


/***/ }),

/***/ "./src/hooks/useRouter.ts":
/*!********************************!*\
  !*** ./src/hooks/useRouter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useQuery = void 0;
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function useQuery() {
    const { search } = (0, react_router_dom_1.useLocation)();
    return (0, react_1.useMemo)(() => new URLSearchParams(search), [search]);
}
exports.useQuery = useQuery;


/***/ }),

/***/ "./src/pages/Options/Options.style.ts":
/*!********************************************!*\
  !*** ./src/pages/Options/Options.style.ts ***!
  \********************************************/
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
exports.SSkeleton = exports.SCardListItem = exports.SCardList = exports.SNoNoteText = exports.SPageLinkEditButton = exports.SPageLinkEditInputAlert = exports.SPageLinkEditInput = exports.SCurrentPageLinkEditButton = exports.SCurrentPageLink = exports.SCurrentPageLinkArea = exports.SCurrentPageCloseButton = exports.SCurrentPageTitle = exports.SCurrentPageFaviconImage = exports.SCurrentPageAreaHeader = exports.SCurrentPageArea = exports.SSelect = exports.SSelectIcon = exports.SSelectWrap = exports.SInput = exports.SInputIcon = exports.SInputWrap = exports.SMainRightHeader = exports.SSideNavItemLink = exports.SSideNavItemTitle = exports.SSideNavItemHeader = exports.SFaviconImage = exports.SSideNavItem = exports.SSideNav = void 0;
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
const Skeleton_1 = __importDefault(__webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.tsx"));
const IconButton_1 = __importDefault(__webpack_require__(/*! ../../components/Button/IconButton */ "./src/components/Button/IconButton.tsx"));
exports.SSideNav = styled_components_1.default.ul `
  list-style: none;
  padding: 1.5em 0.75em;
`;
exports.SSideNavItem = styled_components_1.default.a `
  display: block;
  border-radius: 0.5em;
  padding: 0.75em;
  margin-bottom: 0.125em;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${({ $isActive }) => $isActive &&
    (0, styled_components_1.css) `
      font-weight: bold;
      cursor: default;
      background-color: rgb(0, 0, 0, 20%);

      &:hover {
        background-color: rgb(0, 0, 0, 20%);
      }

      ${exports.SSideNavItemLink} {
        color: #000;
      }
    `}
`;
exports.SFaviconImage = styled_components_1.default.img `
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
`;
exports.SSideNavItemHeader = styled_components_1.default.div `
  word-break: break-all;
  display: flex;
  align-items: center;
`;
exports.SSideNavItemTitle = styled_components_1.default.p `
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.875em;
  line-height: 1.25;
  flex: 1;
`;
exports.SSideNavItemLink = styled_components_1.default.p `
  font-weight: normal;
  font-size: 0.75em;
  margin-top: 0.25em;
  margin-left: 2em;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #aaa;
`;
exports.SMainRightHeader = styled_components_1.default.div `
  display: flex;
  margin-bottom: 0.25em;
`;
exports.SInputWrap = styled_components_1.default.div `
  position: relative;
  flex: 1;
`;
exports.SInputIcon = (0, styled_components_1.default)(solid_1.MagnifyingGlassIcon) `
  position: absolute;
  left: 0.75em;
  top: 50%;
  width: 1.25em;
  transform: translateY(-50%);
  pointer-events: none;
`;
exports.SInput = styled_components_1.default.input `
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em 0.75em 0.5em 2.25em;
  border-radius: 999em;
  width: 100%;
  background-color: #fff;

  &:hover,
  &:focus {
    border-color: #fcd34d;
  }
`;
exports.SSelectWrap = styled_components_1.default.div `
  position: relative;
  margin-left: 0.75em;
  width: 12em;
`;
exports.SSelectIcon = (0, styled_components_1.default)(solid_1.ArrowsUpDownIcon) `
  position: absolute;
  left: 0.5em;
  top: 50%;
  width: 1.25em;
  transform: translateY(-50%);
  pointer-events: none;
`;
exports.SSelect = styled_components_1.default.select `
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em 0.75em 0.5em 2em;
  border-radius: 0.2em;
  cursor: pointer;
  width: 100%;
  background-color: #fff;

  &:hover,
  &:focus {
    border-color: #fcd34d;
  }
`;
exports.SCurrentPageArea = styled_components_1.default.div `
  margin-top: 0.75em;
  padding: 0.75em;
  border-radius: 0.25em;
  background-color: rgba(0, 0, 0, 0.08);
`;
exports.SCurrentPageAreaHeader = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.SCurrentPageFaviconImage = styled_components_1.default.img `
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
`;
exports.SCurrentPageTitle = styled_components_1.default.p `
  flex: 1;
  font-size: 1em;
  margin-bottom: 0.25em;
`;
exports.SCurrentPageCloseButton = (0, styled_components_1.default)(IconButton_1.default) `
  margin-left: 0.5em;
`;
exports.SCurrentPageLinkArea = styled_components_1.default.div `
  display: flex;
  align-items: baseline;
`;
exports.SCurrentPageLink = styled_components_1.default.a `
  display: inline-block;
  margin-left: 1.5em;
  word-break: break-all;
  text-decoration: underline;
  color: #00379e;
`;
exports.SCurrentPageLinkEditButton = (0, styled_components_1.default)(IconButton_1.default) `
  margin-left: 0.5em;
  min-width: 1.25rem;
`;
exports.SPageLinkEditInput = styled_components_1.default.input `
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em 0.75em;
  flex: 1;
  width: 100%;
`;
exports.SPageLinkEditInputAlert = styled_components_1.default.p `
  margin-top: 0.25rem;
  color: #888;
  font-size: 0.75rem;
`;
exports.SPageLinkEditButton = (0, styled_components_1.default)(Button_1.default) `
  margin-left: 0.5em;
  padding: 0.5em 0.75em;
`;
exports.SNoNoteText = styled_components_1.default.p `
  padding: 1em;
  color: #aaa;
`;
exports.SCardList = styled_components_1.default.div `
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0.25em 0;
  margin: 0 -0.5em;
`;
exports.SCardListItem = styled_components_1.default.div `
  padding: 0.5em;
  width: 100%;
`;
exports.SSkeleton = (0, styled_components_1.default)(Skeleton_1.default) `
  margin-top: 1em;
`;


/***/ }),

/***/ "./src/pages/Options/Options.tsx":
/*!***************************************!*\
  !*** ./src/pages/Options/Options.tsx ***!
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
const solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
const react_virtualized_1 = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
const OptionListItem_1 = __importDefault(__webpack_require__(/*! ../../components/OptionList/OptionListItem */ "./src/components/OptionList/OptionListItem.tsx"));
const useRouter_1 = __webpack_require__(/*! ../../hooks/useRouter */ "./src/hooks/useRouter.ts");
const Options_style_1 = __webpack_require__(/*! ./Options.style */ "./src/pages/Options/Options.style.ts");
const index_style_1 = __webpack_require__(/*! ./index.style */ "./src/pages/Options/index.style.ts");
const OptionHeader_1 = __importDefault(__webpack_require__(/*! ../../components/OptionHeader/OptionHeader */ "./src/components/OptionHeader/OptionHeader.tsx"));
const sender = __importStar(__webpack_require__(/*! ../message/sender/options */ "./src/pages/message/sender/options.ts"));
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const List = react_virtualized_1.List;
const AutoSizer = react_virtualized_1.AutoSizer;
const CellMeasurer = react_virtualized_1.CellMeasurer;
const Options = () => {
    const [defaultColor, setDefaultColor] = (0, react_1.useState)("");
    const [notes, setNotes] = (0, react_1.useState)([]);
    const [pageInfos, setPageInfos] = (0, react_1.useState)([]);
    const [sortBy, setSortBy] = (0, react_1.useState)("created_at");
    const [searchText, setSearchText] = (0, react_1.useState)("");
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const query = (0, useRouter_1.useQuery)();
    const history = (0, react_router_1.useHistory)();
    const currentPageInfoId = query.get("filter") ? Number(query.get("filter")) : undefined;
    const currentPageInfo = (0, react_1.useMemo)(() => {
        return pageInfos.find((pageInfo) => pageInfo.id === currentPageInfoId);
    }, [pageInfos, currentPageInfoId]);
    // 絞り込み、ソート済みのメモ一覧
    const filteredNotes = (0, react_1.useMemo)(() => {
        const targetNotes = (currentPageInfoId === undefined
            ? notes
            : notes.filter((note) => note.page_info_id === currentPageInfoId)).filter((note) => { var _a, _b; return searchText === "" || ((_a = note.title) === null || _a === void 0 ? void 0 : _a.includes(searchText)) || ((_b = note.description) === null || _b === void 0 ? void 0 : _b.includes(searchText)); });
        if (sortBy === "updated_at") {
            return [...targetNotes].sort((a, b) => { var _a, _b; return new Date((_a = a === null || a === void 0 ? void 0 : a.updated_at) !== null && _a !== void 0 ? _a : "1900/01/01") < new Date((_b = b === null || b === void 0 ? void 0 : b.updated_at) !== null && _b !== void 0 ? _b : "1900/01/01") ? 1 : -1; });
        }
        if (sortBy === "created_at") {
            return [...targetNotes].sort((a, b) => { var _a, _b; return new Date((_a = a === null || a === void 0 ? void 0 : a.created_at) !== null && _a !== void 0 ? _a : "1900/01/01") < new Date((_b = b === null || b === void 0 ? void 0 : b.created_at) !== null && _b !== void 0 ? _b : "1900/01/01") ? 1 : -1; });
        }
        if (sortBy === "title") {
            return [...targetNotes].sort((a, b) => { var _a, _b; return (((_a = a === null || a === void 0 ? void 0 : a.title) !== null && _a !== void 0 ? _a : "") > ((_b = b === null || b === void 0 ? void 0 : b.title) !== null && _b !== void 0 ? _b : "") ? 1 : -1); });
        }
        return targetNotes;
    }, [searchText, sortBy, notes, currentPageInfoId]);
    const filterPageInfos = (0, react_1.useMemo)(() => {
        const filteredPageInfos = searchText === ""
            ? [...pageInfos]
            : [...pageInfos].filter((pageInfo) => { var _a, _b; return ((_a = pageInfo.page_url) === null || _a === void 0 ? void 0 : _a.includes(searchText)) || ((_b = pageInfo.page_title) === null || _b === void 0 ? void 0 : _b.includes(searchText)); });
        if (sortBy === "updated_at") {
            return [...filteredPageInfos].sort((a, b) => { var _a, _b; return new Date((_a = a === null || a === void 0 ? void 0 : a.updated_at) !== null && _a !== void 0 ? _a : "1900/01/01") < new Date((_b = b === null || b === void 0 ? void 0 : b.updated_at) !== null && _b !== void 0 ? _b : "1900/01/01") ? 1 : -1; });
        }
        if (sortBy === "created_at") {
            return [...filteredPageInfos].sort((a, b) => { var _a, _b; return new Date((_a = a === null || a === void 0 ? void 0 : a.created_at) !== null && _a !== void 0 ? _a : "1900/01/01") < new Date((_b = b === null || b === void 0 ? void 0 : b.created_at) !== null && _b !== void 0 ? _b : "1900/01/01") ? 1 : -1; });
        }
        if (sortBy === "title") {
            return [...filteredPageInfos].sort((a, b) => { var _a, _b; return ((_a = a === null || a === void 0 ? void 0 : a.page_title) !== null && _a !== void 0 ? _a : "") > ((_b = b === null || b === void 0 ? void 0 : b.page_title) !== null && _b !== void 0 ? _b : "") ? 1 : -1; });
        }
        return filteredPageInfos.reverse();
    }, [searchText, pageInfos, sortBy]);
    const onChangeSort = (0, react_1.useCallback)((e) => {
        setSortBy(e.target.value);
    }, []);
    const onChangeSearch = (0, react_1.useCallback)((e) => {
        setSearchText(e.target.value);
    }, []);
    const onClickFilter = (pageInfoId) => {
        window.scrollTo(0, 0);
        pageInfoId ? query.set("filter", `${pageInfoId}`) : query.delete("filter");
        setSearchText("");
        history.push({ search: query.toString() });
    };
    const onUpdate = (note) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const page_url = (_a = pageInfos.find((p) => p.id === note.page_info_id)) === null || _a === void 0 ? void 0 : _a.page_url;
            const { notes, pageInfos: newPageInfos } = yield sender.sendUpdateNote(note, page_url);
            notes && setNotes(notes);
            newPageInfos && setPageInfos(newPageInfos);
            return true;
        }
        catch (error) {
            return false;
        }
    });
    const onDelete = (note) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        if (confirm((0, utils_1.msg)("confirm_remove_note_msg"))) {
            try {
                const page_url = (_b = pageInfos.find((p) => p.id === note.page_info_id)) === null || _b === void 0 ? void 0 : _b.page_url;
                const { notes, pageInfos: newPageInfos } = yield sender.sendDeleteNote(note, page_url);
                notes && setNotes(notes);
                newPageInfos && setPageInfos(newPageInfos);
                return true;
            }
            catch (error) {
                return false;
            }
        }
        else {
            return false;
        }
    });
    const onClickLink = (url) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [tab] = yield chrome.tabs.query({ url, currentWindow: true });
            if (tab === null || tab === void 0 ? void 0 : tab.id) {
                yield chrome.tabs.update(tab.id, { active: true });
                // メモが古い場合があるため再読み込みさせる
                yield chrome.tabs.reload(tab.id);
            }
            else {
                yield chrome.tabs.create({ url });
            }
        }
        catch (error) {
            // TODO
            alert((0, utils_1.msg)("failed_load_page_msg"));
        }
    });
    const [linkEditMode, setLinkEditMode] = (0, react_1.useState)(false);
    const [editLink, setEditLink] = (0, react_1.useState)("");
    const handleEditLink = () => {
        var _a;
        setEditLink((_a = currentPageInfo === null || currentPageInfo === void 0 ? void 0 : currentPageInfo.page_url) !== null && _a !== void 0 ? _a : "");
        setLinkEditMode(true);
    };
    const handleSaveLink = () => {
        if (editLink !== (currentPageInfo === null || currentPageInfo === void 0 ? void 0 : currentPageInfo.page_url)) {
            sender
                .sendUpdatePageInfo(Object.assign(Object.assign({}, currentPageInfo), { page_url: editLink }))
                .then(({ pageInfos }) => {
                if (pageInfos)
                    setPageInfos(pageInfos);
            });
        }
        setLinkEditMode(false);
    };
    const cache = (0, react_1.useMemo)(() => new react_virtualized_1.CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 50,
    }), []);
    (0, react_1.useEffect)(() => {
        setIsLoading(true);
        sender
            .sendFetchAllNotes()
            .then(({ notes, pageInfos }) => {
            notes && setNotes(notes);
            pageInfos && setPageInfos(pageInfos);
        })
            .finally(() => {
            setIsLoading(false);
        });
        sender.sendFetchSetting().then(({ setting }) => {
            var _a;
            setDefaultColor((_a = setting === null || setting === void 0 ? void 0 : setting.default_color) !== null && _a !== void 0 ? _a : "");
        });
    }, []);
    (0, react_1.useEffect)(() => {
        setLinkEditMode(false);
    }, [currentPageInfoId]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_style_1.GlobalStyle, null),
        react_1.default.createElement("div", { className: "p-4" },
            react_1.default.createElement(index_style_1.SContainer, null,
                react_1.default.createElement(OptionHeader_1.default, { current: "memos" }),
                react_1.default.createElement(index_style_1.SMain, null,
                    react_1.default.createElement(index_style_1.SMainLeft, null,
                        react_1.default.createElement(Options_style_1.SSideNav, null,
                            react_1.default.createElement("li", null,
                                react_1.default.createElement(Options_style_1.SSideNavItem, { href: "#", onClick: (e) => {
                                        e.preventDefault();
                                        onClickFilter();
                                    }, "$isActive": currentPageInfoId === undefined },
                                    react_1.default.createElement(Options_style_1.SSideNavItemHeader, null,
                                        react_1.default.createElement(Options_style_1.SSideNavItemTitle, null, (0, utils_1.msg)("show_all_note_msg"))))),
                            filterPageInfos.map((pageInfo) => (react_1.default.createElement("li", { key: pageInfo.id },
                                react_1.default.createElement(Options_style_1.SSideNavItem, { href: "#", onClick: (e) => {
                                        e.preventDefault();
                                        onClickFilter(pageInfo.id);
                                    }, "$isActive": pageInfo.id === currentPageInfoId },
                                    react_1.default.createElement(Options_style_1.SSideNavItemHeader, null,
                                        react_1.default.createElement(Options_style_1.SFaviconImage, { src: pageInfo.fav_icon_url }),
                                        react_1.default.createElement(Options_style_1.SSideNavItemTitle, null, pageInfo.page_title)),
                                    react_1.default.createElement(Options_style_1.SSideNavItemLink, null, pageInfo.page_url))))))),
                    react_1.default.createElement(index_style_1.SMainRight, null,
                        react_1.default.createElement(index_style_1.SMainRightInner, null,
                            isLoading && react_1.default.createElement(CardListSkelton, null),
                            !isLoading && (react_1.default.createElement(index_style_1.SMainRightHeader, null,
                                react_1.default.createElement(Options_style_1.SInputWrap, null,
                                    react_1.default.createElement(Options_style_1.SInputIcon, { fill: "rgba(0,0,0,0.4)" }),
                                    react_1.default.createElement(Options_style_1.SInput, { placeholder: (0, utils_1.msg)("search_query_msg"), onChange: onChangeSearch, value: searchText, type: "text" })),
                                react_1.default.createElement(Options_style_1.SSelectWrap, null,
                                    react_1.default.createElement(Options_style_1.SSelectIcon, { fill: "rgba(0,0,0,0.4)" }),
                                    react_1.default.createElement(Options_style_1.SSelect, { onChange: onChangeSort },
                                        react_1.default.createElement("option", { value: "created_at" }, (0, utils_1.msg)("created_at_sort_option")),
                                        react_1.default.createElement("option", { value: "updated_at" }, (0, utils_1.msg)("updated_at_sort_option")),
                                        react_1.default.createElement("option", { value: "title" }, (0, utils_1.msg)("title_sort_option")))))),
                            currentPageInfo && (react_1.default.createElement(Options_style_1.SCurrentPageArea, null,
                                react_1.default.createElement(Options_style_1.SCurrentPageAreaHeader, null,
                                    react_1.default.createElement(Options_style_1.SCurrentPageFaviconImage, { src: currentPageInfo.fav_icon_url }),
                                    react_1.default.createElement(Options_style_1.SCurrentPageTitle, null, currentPageInfo.page_title),
                                    react_1.default.createElement(Options_style_1.SCurrentPageCloseButton, { onClick: () => onClickFilter() },
                                        react_1.default.createElement(solid_1.XMarkIcon, { fill: "rgba(0, 0, 0, 0.4)" }))),
                                react_1.default.createElement(Options_style_1.SCurrentPageLinkArea, null, linkEditMode ? (react_1.default.createElement(react_1.default.Fragment, null,
                                    react_1.default.createElement("div", { style: { flex: 1 } },
                                        react_1.default.createElement(Options_style_1.SPageLinkEditInput, { value: editLink, onChange: (e) => setEditLink(e.target.value) }),
                                        react_1.default.createElement(Options_style_1.SPageLinkEditInputAlert, null, (0, utils_1.msg)("link_edit_note_msg"))),
                                    react_1.default.createElement(Options_style_1.SPageLinkEditButton, { onClick: handleSaveLink }, (0, utils_1.msg)("save_msg")),
                                    react_1.default.createElement(Options_style_1.SPageLinkEditButton, { secondary: true, onClick: () => setLinkEditMode(false) }, (0, utils_1.msg)("cancel_msg")))) : (react_1.default.createElement(react_1.default.Fragment, null,
                                    react_1.default.createElement(Options_style_1.SCurrentPageLink, { href: "#", onClick: (e) => {
                                            var _a;
                                            e.preventDefault();
                                            onClickLink((_a = currentPageInfo.page_url) !== null && _a !== void 0 ? _a : "");
                                        } }, currentPageInfo.page_url),
                                    react_1.default.createElement(Options_style_1.SCurrentPageLinkEditButton, { onClick: handleEditLink },
                                        react_1.default.createElement(solid_1.PencilSquareIcon, { fill: "rgba(0, 0, 0, 0.4)" }))))))),
                            !isLoading && filteredNotes.length === 0 && (react_1.default.createElement(Options_style_1.SNoNoteText, null, (0, utils_1.msg)("no_note_msg"))),
                            !isLoading && filteredNotes.length !== 0 && (react_1.default.createElement(Options_style_1.SCardList, null,
                                react_1.default.createElement(AutoSizer, null, ({ height, width }) => (react_1.default.createElement(List, { width: width, height: height, rowCount: filteredNotes.length, deferredMeasurementCache: cache, rowHeight: cache.rowHeight, rowRenderer: ({ key, parent, index, style }) => {
                                        const note = filteredNotes[index];
                                        return (react_1.default.createElement(CellMeasurer, { key: note.id, cache: cache, parent: parent, columnIndex: 0, rowIndex: index }, ({ measure, registerChild }) => (react_1.default.createElement(Options_style_1.SCardListItem, { id: `note-${note.page_info_id}-${note.id}`, ref: registerChild, style: style },
                                            react_1.default.createElement(OptionListItem_1.default, { note: note, defaultColor: defaultColor, showPageInfo: !currentPageInfo, currentPageInfoId: currentPageInfoId, pageInfo: pageInfos.find((p) => p.id === note.page_info_id), onDelete: onDelete, onUpdate: onUpdate, onClickLink: onClickLink, onClickFilter: onClickFilter, measure: measure })))));
                                    } }))))))))))));
};
const CardListSkelton = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: "flex" } },
            react_1.default.createElement(Options_style_1.SSkeleton, { style: { borderRadius: "999rem", marginRight: "1rem" }, variant: "rounded", width: "100%", height: 36 }),
            react_1.default.createElement(Options_style_1.SSkeleton, { variant: "rounded", width: 192, height: 36 })),
        react_1.default.createElement(Options_style_1.SSkeleton, { variant: "rounded", width: "100%", height: 100 }),
        react_1.default.createElement(Options_style_1.SSkeleton, { variant: "rounded", width: "100%", height: 100 }),
        react_1.default.createElement(Options_style_1.SSkeleton, { variant: "rounded", width: "100%", height: 100 })));
};
exports["default"] = Options;


/***/ }),

/***/ "./src/pages/Options/Setting.style.ts":
/*!********************************************!*\
  !*** ./src/pages/Options/Setting.style.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSettingItemContent = exports.SSettingItemTitle = exports.SSettingItem = void 0;
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.SSettingItem = styled_components_1.default.div `
  margin-bottom: 3em;
`;
exports.SSettingItemTitle = styled_components_1.default.div `
  margin-bottom: 0.5em;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;
exports.SSettingItemContent = styled_components_1.default.div ``;


/***/ }),

/***/ "./src/pages/Options/Setting.tsx":
/*!***************************************!*\
  !*** ./src/pages/Options/Setting.tsx ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const index_style_1 = __webpack_require__(/*! ./index.style */ "./src/pages/Options/index.style.ts");
const Setting_style_1 = __webpack_require__(/*! ./Setting.style */ "./src/pages/Options/Setting.style.ts");
const OptionHeader_1 = __importDefault(__webpack_require__(/*! ../../components/OptionHeader/OptionHeader */ "./src/components/OptionHeader/OptionHeader.tsx"));
const sender = __importStar(__webpack_require__(/*! ../message/sender/options */ "./src/pages/message/sender/options.ts"));
const ColorPicker_1 = __importDefault(__webpack_require__(/*! ../../components/ColorPicker/ColorPicker */ "./src/components/ColorPicker/ColorPicker.tsx"));
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
const useNoteDownload_1 = __webpack_require__(/*! ../../hooks/useNoteDownload */ "./src/hooks/useNoteDownload.ts");
const Button_1 = __importDefault(__webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.tsx"));
const Usage_1 = __importDefault(__webpack_require__(/*! ../../components/Usage/Usage */ "./src/components/Usage/Usage.tsx"));
const Setting = () => {
    const [defaultColor, setDefaultColor] = (0, react_1.useState)("");
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [notes, setNotes] = (0, react_1.useState)([]);
    const [pageInfos, setPageInfos] = (0, react_1.useState)([]);
    const { handleDownload } = (0, useNoteDownload_1.useNoteDownload)();
    const onClickDefaultColor = (color) => {
        sender.sendUpdateDefaultColor(color).then(({ setting }) => {
            var _a;
            setDefaultColor((_a = setting === null || setting === void 0 ? void 0 : setting.default_color) !== null && _a !== void 0 ? _a : "");
        });
    };
    const handleDownloadCSV = () => {
        const copyHead = "id, title, description, url\n";
        const copyText = notes
            .map((note) => {
            var _a;
            return `${note.id}, ${note.title ? `"${note.title}"` : ""}, ${note.description ? `"${note.description}"` : ""}, ${(_a = pageInfos.find((pageInfo) => pageInfo.id === note.page_info_id)) === null || _a === void 0 ? void 0 : _a.page_url}`;
        })
            .join("\n");
        handleDownload(copyHead + copyText);
    };
    const handleDownloadText = () => {
        const copyText = notes
            .map((note) => {
            var _a, _b, _c;
            return `id: ${note.id}
title: ${(_a = note.title) !== null && _a !== void 0 ? _a : ""}
page: ${(_b = pageInfos.find((pageInfo) => pageInfo.id === note.page_info_id)) === null || _b === void 0 ? void 0 : _b.page_url}
content:
${(_c = note.description) !== null && _c !== void 0 ? _c : ""}`;
        })
            .join("\n------------------------------------------------------------\n");
        handleDownload(copyText, "text/plain", "txt");
    };
    (0, react_1.useEffect)(() => {
        setIsLoading(true);
        sender
            .sendFetchSetting()
            .then(({ setting }) => {
            var _a;
            setDefaultColor((_a = setting === null || setting === void 0 ? void 0 : setting.default_color) !== null && _a !== void 0 ? _a : "");
        })
            .finally(() => {
            setIsLoading(false);
        });
        sender.sendFetchAllNotes().then(({ notes, pageInfos }) => {
            notes && setNotes(notes);
            pageInfos && setPageInfos(pageInfos);
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_style_1.GlobalStyle, null),
        react_1.default.createElement("div", { className: "p-4" },
            react_1.default.createElement(index_style_1.SContainer, null,
                react_1.default.createElement(OptionHeader_1.default, { current: "setting" }),
                react_1.default.createElement(index_style_1.SMain, null,
                    react_1.default.createElement(index_style_1.SMainContent, null, !isLoading && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Setting_style_1.SSettingItem, null,
                            react_1.default.createElement(Setting_style_1.SSettingItemTitle, null, (0, utils_1.msg)("default_color_msg")),
                            react_1.default.createElement(Setting_style_1.SSettingItemContent, null,
                                react_1.default.createElement(ColorPicker_1.default, { color: defaultColor, onChangeColor: onClickDefaultColor }))),
                        react_1.default.createElement(Setting_style_1.SSettingItem, null,
                            react_1.default.createElement(Setting_style_1.SSettingItemTitle, null, (0, utils_1.msg)("export_msg")),
                            react_1.default.createElement(Setting_style_1.SSettingItemContent, null,
                                react_1.default.createElement(Button_1.default, { onClick: handleDownloadCSV }, (0, utils_1.msg)("csv_download_msg")),
                                react_1.default.createElement(Button_1.default, { onClick: handleDownloadText, style: { marginLeft: "0.5rem" } }, (0, utils_1.msg)("text_download_msg")))),
                        react_1.default.createElement(Setting_style_1.SSettingItem, null,
                            react_1.default.createElement(Setting_style_1.SSettingItemTitle, null, (0, utils_1.msg)("how_to_use_page_link_msg")),
                            react_1.default.createElement(Setting_style_1.SSettingItemContent, null,
                                react_1.default.createElement(Usage_1.default, null))),
                        react_1.default.createElement(Setting_style_1.SSettingItem, null,
                            react_1.default.createElement(Setting_style_1.SSettingItemTitle, null, (0, utils_1.msg)("maker_msg")),
                            react_1.default.createElement(Setting_style_1.SSettingItemContent, null,
                                react_1.default.createElement("a", { href: "https://twitter.com/takumi_bv", target: "_blank" }, "@takumi_bv")))))))))));
};
exports["default"] = Setting;


/***/ }),

/***/ "./src/pages/Options/index.style.ts":
/*!******************************************!*\
  !*** ./src/pages/Options/index.style.ts ***!
  \******************************************/
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
exports.SMainRightHeader = exports.SMainContent = exports.SMainRightInner = exports.SMainRight = exports.SMainLeft = exports.SMain = exports.SContainer = exports.GlobalStyle = void 0;
const styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const resetCSS_1 = __webpack_require__(/*! ../../resetCSS */ "./src/resetCSS.ts");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  ${resetCSS_1.resetCSS}

  body {
    font-size: 16px;
  }

  /* TODO dark theme https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a */
  @media (prefers-color-scheme: dark) {
    /* body {
      background-color: #000;
      color: #fff;
    } */
  }
`;
exports.SContainer = styled_components_1.default.div `
  position: relative;
`;
exports.SMain = styled_components_1.default.div `
  overflow: auto;
  background-color: #fafaf6;
  height: 100vh;
  height: 100dvh;
`;
exports.SMainLeft = styled_components_1.default.div `
  position: fixed;
  left: 0;
  top: 2.75em;
  bottom: 0;
  overflow-y: auto;
  width: 18em;
  padding-left: 1em;
  z-index: 1;
`;
exports.SMainRight = styled_components_1.default.main `
  position: relative;
  padding: 4em 2em 0 19em;
  height: 100%;
`;
exports.SMainRightInner = styled_components_1.default.div `
  height: 100%;
  display: flex;
  flex-direction: column;
`;
exports.SMainContent = styled_components_1.default.main `
  padding: 4em 2em 1.5em;
  margin: 0 auto;
  max-width: 44rem;
`;
exports.SMainRightHeader = styled_components_1.default.div `
  display: flex;
  margin-bottom: 0.25em;
`;


/***/ }),

/***/ "./src/pages/Options/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/Options/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
const Options_1 = __importDefault(__webpack_require__(/*! ./Options */ "./src/pages/Options/Options.tsx"));
const Setting_1 = __importDefault(__webpack_require__(/*! ./Setting */ "./src/pages/Options/Setting.tsx"));
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(react_router_1.Switch, null,
            react_1.default.createElement(react_router_1.Route, { exact: true, path: "/memos.html", component: Options_1.default }),
            react_1.default.createElement(react_router_1.Route, { exact: true, path: "/setting.html", component: Setting_1.default }),
            react_1.default.createElement(react_router_1.Route, { path: "*", component: () => react_1.default.createElement(react_router_1.Redirect, { to: "/memos.html" }) })))), document.getElementById("root"));


/***/ }),

/***/ "./src/pages/message/sender/options.ts":
/*!*********************************************!*\
  !*** ./src/pages/message/sender/options.ts ***!
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
exports.sendUpdateDefaultColor = exports.sendFetchSetting = exports.sendUpdatePageInfo = exports.sendFetchAllNotes = exports.sendDeleteNote = exports.sendUpdateNote = void 0;
const actions_1 = __webpack_require__(/*! ../actions */ "./src/pages/message/actions.ts");
const base_1 = __webpack_require__(/*! ./base */ "./src/pages/message/sender/base.ts");
/**
 * オプションページから送信するメッセージ
 */
const sendUpdateNote = (note, url) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.UPDATE_NOTE, actions_1.OPTIONS, { url, note });
});
exports.sendUpdateNote = sendUpdateNote;
const sendDeleteNote = (note, url) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.DELETE_NOTE, actions_1.OPTIONS, { url, note });
});
exports.sendDeleteNote = sendDeleteNote;
const sendFetchAllNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.GET_ALL_NOTES_AND_PAGE_INFO, actions_1.OPTIONS);
});
exports.sendFetchAllNotes = sendFetchAllNotes;
const sendUpdatePageInfo = (pageInfo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.UPDATE_NOTE_INFO, actions_1.OPTIONS, { pageInfo });
});
exports.sendUpdatePageInfo = sendUpdatePageInfo;
const sendFetchSetting = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.GET_SETTING, actions_1.OPTIONS);
});
exports.sendFetchSetting = sendFetchSetting;
const sendUpdateDefaultColor = (defaultColor) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, base_1.sendAction)(actions_1.UPDATE_DEFAULT_COLOR, actions_1.OPTIONS, { defaultColor });
});
exports.sendUpdateDefaultColor = sendUpdateDefaultColor;


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
/******/ 			"options": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/pages/Options/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvY29tcG9uZW50cy9Db2xvclBpY2tlci9Db2xvclBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9jb21wb25lbnRzL05vdGVFZGl0TW9kYWwvTm90ZUVkaXRNb2RhbC5zdHlsZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL2NvbXBvbmVudHMvTm90ZUVkaXRNb2RhbC9Ob3RlRWRpdE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL2NvbXBvbmVudHMvT3B0aW9uSGVhZGVyL09wdGlvbkhlYWRlci50c3giLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9jb21wb25lbnRzL09wdGlvbkxpc3QvT3B0aW9uTGlzdEl0ZW0uc3R5bGUudHMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9jb21wb25lbnRzL09wdGlvbkxpc3QvT3B0aW9uTGlzdEl0ZW0udHN4Iiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQvTnVtYmVySW5wdXQudHN4Iiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvY29tcG9uZW50cy9Vc2FnZS9Vc2FnZS50c3giLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9ob29rcy91c2VDbGlwYm9hcmQudHMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9ob29rcy91c2VOb3RlLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvaG9va3MvdXNlTm90ZURvd25sb2FkLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvaG9va3MvdXNlUm91dGVyLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvcGFnZXMvT3B0aW9ucy9PcHRpb25zLnN0eWxlLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvcGFnZXMvT3B0aW9ucy9PcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3BhZ2VzL09wdGlvbnMvU2V0dGluZy5zdHlsZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uLy4vc3JjL3BhZ2VzL09wdGlvbnMvU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9wYWdlcy9PcHRpb25zL2luZGV4LnN0eWxlLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvcGFnZXMvT3B0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi8uL3NyYy9wYWdlcy9tZXNzYWdlL3NlbmRlci9vcHRpb25zLnRzIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vLi9zcmMvdHlwZXMvTm90ZS50cyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dpdGh1Yi1sYW5ndWFnZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9naXRodWItbGFuZ3VhZ2UtZXh0ZW5zaW9uL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2l0aHViLWxhbmd1YWdlLWV4dGVuc2lvbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCByZWFjdF8yID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgQnV0dG9uX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9CdXR0b24uc3R5bGVcIik7XG5jb25zdCBCdXR0b24gPSAoMCwgcmVhY3RfMi5tZW1vKSgoX2EpID0+IHtcbiAgICB2YXIgeyBjaGlsZHJlbiB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbl9zdHlsZV8xLlNCdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2hpbGRyZW4pO1xufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TQ29sb3JEZWZhdWx0ID0gZXhwb3J0cy5TQ29sb3JDaGVja0ljb24gPSBleHBvcnRzLlNDb2xvciA9IGV4cG9ydHMuU0NvbG9ycyA9IHZvaWQgMDtcbmNvbnN0IHNvbGlkXzEgPSByZXF1aXJlKFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiKTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHJlYWN0XzIgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBzdHlsZWRfY29tcG9uZW50c18xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKSk7XG5jb25zdCBTdGlja3lOb3RlID0gKDAsIHJlYWN0XzIubWVtbykoKHsgb25DaGFuZ2VDb2xvciwgY29sb3I6IGFjdGl2ZUNvbG9yID0gXCJcIiwgaGFzRGVmYXVsdCA9IGZhbHNlIH0pID0+IHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU0NvbG9ycywgbnVsbCxcbiAgICAgICAgaGFzRGVmYXVsdCAmJiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZXhwb3J0cy5TQ29sb3JEZWZhdWx0LCB7IFwiJGlzQWN0aXZlXCI6IGhhc0RlZmF1bHQgJiYgYWN0aXZlQ29sb3IgPT09IFwiXCIsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbG9yID09PSBudWxsIHx8IG9uQ2hhbmdlQ29sb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlQ29sb3IoXCJcIik7XG4gICAgICAgICAgICB9IH0sIGhhc0RlZmF1bHQgJiYgYWN0aXZlQ29sb3IgPT09IFwiXCIgJiYgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZXhwb3J0cy5TQ29sb3JDaGVja0ljb24sIHsgY29sb3I6IFwicmdiKDAsMCwwKVwiIH0pKSksXG4gICAgICAgIFtcbiAgICAgICAgICAgIFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgXCIjRUI5Njk0XCIsXG4gICAgICAgICAgICBcIiNGQUQwQzNcIixcbiAgICAgICAgICAgIFwiI0ZGRjdDQ1wiLFxuICAgICAgICAgICAgXCIjQzFFMUM1XCIsXG4gICAgICAgICAgICBcIiNCRURBRENcIixcbiAgICAgICAgICAgIFwiI0M0REVGNlwiLFxuICAgICAgICAgICAgXCIjRDRDNEZCXCIsXG4gICAgICAgIF0ubWFwKChjb2xvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoY29sb3IgPT09IFwiI0ZGRkZGRlwiICYmIGFjdGl2ZUNvbG9yID09PSBcIlwiICYmICFoYXNEZWZhdWx0KSB8fCBjb2xvciA9PT0gYWN0aXZlQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU0NvbG9yLCB7IGtleTogY29sb3IsIFwiJGlzQWN0aXZlXCI6IGlzQWN0aXZlLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH0sIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IgPT09IG51bGwgfHwgb25DaGFuZ2VDb2xvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2VDb2xvcihjb2xvcik7XG4gICAgICAgICAgICAgICAgfSB9LCBpc0FjdGl2ZSAmJiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChleHBvcnRzLlNDb2xvckNoZWNrSWNvbiwgeyBjb2xvcjogXCJyZ2IoMCwwLDApXCIgfSkpKTtcbiAgICAgICAgfSkpKTtcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3RpY2t5Tm90ZTtcbmV4cG9ydHMuU0NvbG9ycyA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5leHBvcnRzLlNDb2xvciA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5idXR0b24gYFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogNHB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAkeyh7ICRpc0FjdGl2ZSB9KSA9PiAkaXNBY3RpdmUgJiZcbiAgICAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5jc3MpIGBcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gICAgYH1cbmA7XG5leHBvcnRzLlNDb2xvckNoZWNrSWNvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKHNvbGlkXzEuQ2hlY2tJY29uKSBgXG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5leHBvcnRzLlNDb2xvckRlZmF1bHQgPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShleHBvcnRzLlNDb2xvcikgYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1jb2xvcjogI2FhYTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAke2V4cG9ydHMuU0NvbG9yQ2hlY2tJY29ufSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogI2FhYTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbmA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TTm90ZURldGFpbERhdGFTcGFuID0gZXhwb3J0cy5TTm90ZURldGFpbERhdGFJbnB1dCA9IGV4cG9ydHMuU05vdGVEZXRhaWxEYXRhID0gZXhwb3J0cy5TTm90ZURldGFpbFRpdGxlID0gZXhwb3J0cy5TTm90ZURldGFpbCA9IGV4cG9ydHMuU05vdGVEZXRhaWxBcmVhID0gZXhwb3J0cy5TQWNjb3JkaW9uU3VtbWFyeVRleHQgPSBleHBvcnRzLlNBY2NvcmRpb25TdW1tYXJ5ID0gZXhwb3J0cy5TQWNjb3JkaW9uID0gZXhwb3J0cy5TRGl2aWRlciA9IGV4cG9ydHMuU0ljb25CdXR0b24gPSBleHBvcnRzLlNCdXR0b24gPSBleHBvcnRzLlNNZW51TGlzdEl0ZW0gPSBleHBvcnRzLlNNZW51TGlzdCA9IGV4cG9ydHMuU01vZGFsQWN0aW9uc1JpZ2h0ID0gZXhwb3J0cy5TTW9kYWxBY3Rpb25zTGVmdCA9IGV4cG9ydHMuU01vZGFsQWN0aW9ucyA9IGV4cG9ydHMuU01vZGFsRGVzY3JpcHRpb25UZXh0ID0gZXhwb3J0cy5TTW9kYWxEZXNjcmlwdGlvbiA9IGV4cG9ydHMuU01vZGFsU2VjdGlvblRpdGxlID0gZXhwb3J0cy5TTW9kYWxTZWN0aW9uID0gZXhwb3J0cy5TTW9kYWxDb250ZW50ID0gZXhwb3J0cy5TTW9kYWxUaXRsZSA9IGV4cG9ydHMuU01vZGFsSGVhZGVyID0gZXhwb3J0cy5TTW9kYWxTY3JvbGxDb250ZW50ID0gZXhwb3J0cy5TQmFja2Ryb3AgPSBleHBvcnRzLlNNb2RhbCA9IGV4cG9ydHMuU01vZGFsV3JhcHBlciA9IHZvaWQgMDtcbmNvbnN0IEJhY2tkcm9wXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQmFja2Ryb3BcIikpO1xuY29uc3QgcmVhY3RfdGV4dGFyZWFfYXV0b3NpemVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtdGV4dGFyZWEtYXV0b3NpemVcIikpO1xuY29uc3Qgc3R5bGVkX2NvbXBvbmVudHNfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIikpO1xuY29uc3QgQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0J1dHRvbi9CdXR0b25cIikpO1xuY29uc3QgSWNvbkJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9CdXR0b24vSWNvbkJ1dHRvblwiKSk7XG5jb25zdCBOdW1iZXJJbnB1dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9UZXh0SW5wdXQvTnVtYmVySW5wdXRcIikpO1xuZXhwb3J0cy5TTW9kYWxXcmFwcGVyID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDEzMDA7XG5cbiAgJHsoeyAkaXNBcGVhbCB9KSA9PiAkaXNBcGVhbCAmJlxuICAgICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmNzcykgYFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4wMyk7XG4gICAgYH1cbmA7XG5leHBvcnRzLlNNb2RhbCA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb2ludGVyLWV2ZW50czogaW5pdGlhbDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDRlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuYDtcbmV4cG9ydHMuU0JhY2tkcm9wID0gKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdCkoQmFja2Ryb3BfMS5kZWZhdWx0KSBgXG4gIHotaW5kZXg6IDEzMDA7XG5gO1xuZXhwb3J0cy5TTW9kYWxTY3JvbGxDb250ZW50ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIG92ZXJmbG93LXk6IGF1dG87XG5gO1xuZXhwb3J0cy5TTW9kYWxIZWFkZXIgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgcGFkZGluZzogMWVtIDEuNWVtIDAuNWVtO1xuYDtcbmV4cG9ydHMuU01vZGFsVGl0bGUgPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShyZWFjdF90ZXh0YXJlYV9hdXRvc2l6ZV8xLmRlZmF1bHQpIGBcbiAgcGFkZGluZzogMC4yZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHJlc2l6ZTogbm9uZTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbmA7XG5leHBvcnRzLlNNb2RhbENvbnRlbnQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBgO1xuZXhwb3J0cy5TTW9kYWxTZWN0aW9uID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIHBhZGRpbmc6IDAgMS41ZW0gMWVtO1xuYDtcbmV4cG9ydHMuU01vZGFsU2VjdGlvblRpdGxlID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0Lmg0IGBcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG5gO1xuZXhwb3J0cy5TTW9kYWxEZXNjcmlwdGlvbiA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuZXhwb3J0cy5TTW9kYWxEZXNjcmlwdGlvblRleHQgPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShyZWFjdF90ZXh0YXJlYV9hdXRvc2l6ZV8xLmRlZmF1bHQpIGBcbiAgcGFkZGluZzogMC4yNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbmA7XG5leHBvcnRzLlNNb2RhbEFjdGlvbnMgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxZW0gMC43NWVtO1xuYDtcbmV4cG9ydHMuU01vZGFsQWN0aW9uc0xlZnQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5leHBvcnRzLlNNb2RhbEFjdGlvbnNSaWdodCA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmV4cG9ydHMuU01lbnVMaXN0ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuYDtcbmV4cG9ydHMuU01lbnVMaXN0SXRlbSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5idXR0b24gYFxuICBtaW4td2lkdGg6IDguNWVtO1xuICBwYWRkaW5nOiAwLjc1ZW0gMWVtO1xuICBmb250LXNpemU6IDAuODc1ZW07XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgfVxuXG4gICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbmA7XG5leHBvcnRzLlNCdXR0b24gPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShCdXR0b25fMS5kZWZhdWx0KSBgXG4gIG1hcmdpbi1yaWdodDogMS4yNWVtO1xuICBwYWRkaW5nOiAwLjc1ZW0gMWVtO1xuYDtcbmV4cG9ydHMuU0ljb25CdXR0b24gPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShJY29uQnV0dG9uXzEuZGVmYXVsdCkgYFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbmA7XG5leHBvcnRzLlNEaXZpZGVyID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmhyIGBcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuYDtcbmV4cG9ydHMuU0FjY29yZGlvbiA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kZXRhaWxzIGBgO1xuZXhwb3J0cy5TQWNjb3JkaW9uU3VtbWFyeSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5zdW1tYXJ5IGBcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgfVxuXG4gICY6Om1hcmtlciB7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gIH1cbmA7XG5leHBvcnRzLlNBY2NvcmRpb25TdW1tYXJ5VGV4dCA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5zcGFuIGBcbiAgZm9udC1zaXplOiAwLjc1ZW07XG5gO1xuZXhwb3J0cy5TTm90ZURldGFpbEFyZWEgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuYDtcbmV4cG9ydHMuU05vdGVEZXRhaWwgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGwgYFxuICB3aWR0aDogMzMlO1xuICBtaW4td2lkdGg6IDExLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuYDtcbmV4cG9ydHMuU05vdGVEZXRhaWxUaXRsZSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kdCBgXG4gIGNvbG9yOiAjODg4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuYDtcbmV4cG9ydHMuU05vdGVEZXRhaWxEYXRhID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRkIGBcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuYDtcbmV4cG9ydHMuU05vdGVEZXRhaWxEYXRhSW5wdXQgPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShOdW1iZXJJbnB1dF8xLmRlZmF1bHQpIGBcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMGVtIDAuMjVlbTtcbiAgd2lkdGg6IDMuNzVlbTtcbmA7XG5leHBvcnRzLlNOb3RlRGV0YWlsRGF0YVNwYW4gPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuc3BhbiBgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ob3RlRWRpdE1vZGFsID0gdm9pZCAwO1xuY29uc3QgTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Nb2RhbFwiKSk7XG5jb25zdCBQb3BvdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvUG9wb3ZlclwiKSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCB1c2VOb3RlXzEgPSByZXF1aXJlKFwiLi4vLi4vaG9va3MvdXNlTm90ZVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jb25zdCBzb2xpZF8xID0gcmVxdWlyZShcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIik7XG5jb25zdCBOb3RlRWRpdE1vZGFsX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9Ob3RlRWRpdE1vZGFsLnN0eWxlXCIpO1xuY29uc3QgdXRpbHNfMiA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNvbnN0IE5vdGVFZGl0TW9kYWwgPSAoeyBpc09wZW4sIG5vdGUsIG9uQ2xvc2UsIG9uVXBkYXRlTm90ZSwgb25EZWxldGVOb3RlLCBpbml0Rm9jdXMgfSkgPT4ge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpc19maXhlZCwgaXNfb3BlbiwgcG9zaXRpb25feCwgcG9zaXRpb25feSwgd2lkdGgsIGhlaWdodCwgY3JlYXRlZF9hdCwgdXBkYXRlZF9hdCwgfSA9IG5vdGU7XG4gICAgY29uc3QgW2VkaXRJc0ZpeGVkLCBzZXRFZGl0SXNGaXhlZF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoaXNfZml4ZWQpO1xuICAgIGNvbnN0IFtpc0FwZWFsLCBzZXRJc0FwZWFsXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSk7XG4gICAgY29uc3QgW2FuY2hvckFjdGlvbnNFbCwgc2V0QW5jaG9yQWN0aW9uc0VsXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShudWxsKTtcbiAgICBjb25zdCB7IGVkaXRUaXRsZSwgc2V0RWRpdFRpdGxlLCBlZGl0RGVzY3JpcHRpb24sIHNldEVkaXREZXNjcmlwdGlvbiwgZWRpdElzT3Blbiwgc2V0RWRpdElzT3BlbiwgZWRpdFBvc2l0aW9uWCwgZWRpdFBvc2l0aW9uWSwgc2V0RWRpdFBvc2l0aW9uLCBlZGl0V2lkdGgsIGVkaXRIZWlnaHQsIHNldEVkaXRTaXplLCB9ID0gKDAsIHVzZU5vdGVfMS51c2VOb3RlRWRpdCkobm90ZSk7XG4gICAgY29uc3QgZWRpdGVkTm90ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbm90ZSksIHsgdGl0bGU6IGVkaXRUaXRsZSwgZGVzY3JpcHRpb246IGVkaXREZXNjcmlwdGlvbiwgcG9zaXRpb25feDogZWRpdFBvc2l0aW9uWCwgcG9zaXRpb25feTogZWRpdFBvc2l0aW9uWSwgd2lkdGg6IGVkaXRXaWR0aCwgaGVpZ2h0OiBlZGl0SGVpZ2h0LCBpc19maXhlZDogZWRpdElzRml4ZWQsIGlzX29wZW46IGVkaXRJc0ZpeGVkIH0pO1xuICAgIGNvbnN0IGlzRWRpdGluZyA9ICgwLCByZWFjdF8xLnVzZU1lbW8pKCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNFcXVhbFRpdGxlID0gdGl0bGUgPT09IGVkaXRUaXRsZSB8fCAodGl0bGUgPT09IHVuZGVmaW5lZCAmJiBlZGl0VGl0bGUgPT09IFwiXCIpO1xuICAgICAgICBjb25zdCBpc0VxdWFsRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiA9PT0gZWRpdERlc2NyaXB0aW9uIHx8IChkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkICYmIGVkaXREZXNjcmlwdGlvbiA9PT0gXCJcIik7XG4gICAgICAgIGNvbnN0IGlzRXF1YWxQb3NpdGlvblggPSBwb3NpdGlvbl94ID09PSBlZGl0UG9zaXRpb25YO1xuICAgICAgICBjb25zdCBpc0VxdWFsUG9zaXRpb25ZID0gcG9zaXRpb25feSA9PT0gZWRpdFBvc2l0aW9uWTtcbiAgICAgICAgY29uc3QgaXNFcXVhbFdpZHRoID0gd2lkdGggPT09IGVkaXRXaWR0aDtcbiAgICAgICAgY29uc3QgaXNFcXVhbEhlaWdodCA9IGhlaWdodCA9PT0gZWRpdEhlaWdodDtcbiAgICAgICAgY29uc3QgaXNFcXVhbElzRml4ZWQgPSBpc19maXhlZCA9PT0gZWRpdElzRml4ZWQ7XG4gICAgICAgIGNvbnN0IGlzRXF1YWxJc09wZW4gPSBpc19vcGVuID09PSBlZGl0SXNPcGVuO1xuICAgICAgICByZXR1cm4gKCFpc0VxdWFsVGl0bGUgfHxcbiAgICAgICAgICAgICFpc0VxdWFsRGVzY3JpcHRpb24gfHxcbiAgICAgICAgICAgICFpc0VxdWFsUG9zaXRpb25YIHx8XG4gICAgICAgICAgICAhaXNFcXVhbFBvc2l0aW9uWSB8fFxuICAgICAgICAgICAgIWlzRXF1YWxXaWR0aCB8fFxuICAgICAgICAgICAgIWlzRXF1YWxIZWlnaHQgfHxcbiAgICAgICAgICAgICFpc0VxdWFsSXNGaXhlZCB8fFxuICAgICAgICAgICAgIWlzRXF1YWxJc09wZW4pO1xuICAgIH0sIFtub3RlLCBlZGl0ZWROb3RlXSk7XG4gICAgY29uc3Qgb25DaGFuZ2VFZGl0SXNGaXhlZCA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiZml4ZWRcIikge1xuICAgICAgICAgICAgc2V0RWRpdFBvc2l0aW9uKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHNldEVkaXRJc0ZpeGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0RWRpdFBvc2l0aW9uKHBvc2l0aW9uX3gsIHBvc2l0aW9uX3kpO1xuICAgICAgICAgICAgc2V0RWRpdElzRml4ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG9uQ2hhbmdlRWRpdElzT3BlbiA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICBzZXRFZGl0SXNPcGVuKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0RWRpdElzT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgb25TYXZlQW5kQ2xvc2UgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaXNVcGRhdGVkID0geWllbGQgb25VcGRhdGVOb3RlKGVkaXRlZE5vdGUpO1xuICAgICAgICBpZiAoaXNVcGRhdGVkKSB7XG4gICAgICAgICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAoKF9hID0gZGVzY3JpcHRpb24gPT09IG51bGwgfHwgZGVzY3JpcHRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlc2NyaXB0aW9uLmxlbmd0aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCkgPiAyMDAwID8gKDAsIHV0aWxzXzIubXNnKShcInNhdmVfZXJyb3Jfd29yZF9tYXhpbXVtX21zZ1wiKSA6ICgwLCB1dGlsc18yLm1zZykoXCJzYXZlX2Vycm9yX21zZ18yXCIpO1xuICAgICAgICAgICAgYWxlcnQoYCR7KDAsIHV0aWxzXzIubXNnKShcInNhdmVfZXJyb3JfbXNnXCIpfSR7bWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgIH0pLCBbZWRpdGVkTm90ZV0pO1xuICAgIGNvbnN0IG9uQ2xvc2VXaXRob3V0U2F2ZSA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoKSA9PiB7XG4gICAgICAgIHNldEVkaXRUaXRsZSh0aXRsZSk7XG4gICAgICAgIHNldEVkaXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgICAgIHNldEVkaXRQb3NpdGlvbihwb3NpdGlvbl94LCBwb3NpdGlvbl95KTtcbiAgICAgICAgc2V0RWRpdFNpemUod2lkdGggIT09IG51bGwgJiYgd2lkdGggIT09IHZvaWQgMCA/IHdpZHRoIDogdXNlTm90ZV8xLk1JTl9OT1RFX1dJRFRILCBoZWlnaHQgIT09IG51bGwgJiYgaGVpZ2h0ICE9PSB2b2lkIDAgPyBoZWlnaHQgOiB1c2VOb3RlXzEuTUlOX05PVEVfSEVJR0hUKTtcbiAgICAgICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgfSwgW25vdGUsIG9uQ2xvc2VdKTtcbiAgICBjb25zdCBvbkRlbGV0ZSA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKG9uRGVsZXRlTm90ZSAmJiAoeWllbGQgb25EZWxldGVOb3RlKG5vdGUpKSkge1xuICAgICAgICAgICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH0pLCBbXSk7XG4gICAgY29uc3Qgb25DbGlja01vcmVBY3Rpb25zID0gKGUpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yQWN0aW9uc0VsKGUuY3VycmVudFRhcmdldCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZUFjdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuY2hvckFjdGlvbnNFbChudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTW9kYWxfMS5kZWZhdWx0LCB7IG9wZW46ICEhaXNPcGVuLCBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNBcGVhbCh0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNBcGVhbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9uQ2xvc2VXaXRob3V0U2F2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBCYWNrZHJvcENvbXBvbmVudDogTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNCYWNrZHJvcCB9LFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU01vZGFsV3JhcHBlciwgeyBcIiRpc0FwZWFsXCI6IGlzQXBlYWwgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTW9kYWwsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNNb2RhbFNjcm9sbENvbnRlbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTW9kYWxIZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU01vZGFsVGl0bGUsIHsgYXV0b0ZvY3VzOiBpbml0Rm9jdXMgPT09IFwidGl0bGVcIiwgcGxhY2Vob2xkZXI6ICgwLCB1dGlsc18yLm1zZykoXCJ0aXRsZV9zb3J0X29wdGlvblwiKSwgZGVmYXVsdFZhbHVlOiB0aXRsZSwgb25DaGFuZ2U6IChlKSA9PiBzZXRFZGl0VGl0bGUoZS50YXJnZXQudmFsdWUpLCBtaW5Sb3dzOiAxIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNNb2RhbENvbnRlbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU01vZGFsU2VjdGlvbiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU01vZGFsRGVzY3JpcHRpb24sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTW9kYWxEZXNjcmlwdGlvblRleHQsIHsgYXV0b0ZvY3VzOiBpbml0Rm9jdXMgPT09IFwiZGVzY3JpcHRpb25cIiwgbWluUm93czogMSwgcGxhY2Vob2xkZXI6ICgwLCB1dGlsc18yLm1zZykoXCJpbnB1dF9kZXNjcmlwdGlvbl9wbGFjZWhvbGRlclwiKSwgZGVmYXVsdFZhbHVlOiBkZXNjcmlwdGlvbiwgb25DaGFuZ2U6IChlKSA9PiBzZXRFZGl0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpIH0pKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU0RpdmlkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNBY2NvcmRpb24sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNBY2NvcmRpb25TdW1tYXJ5LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU0FjY29yZGlvblN1bW1hcnlUZXh0LCBudWxsLCAoMCwgdXRpbHNfMi5tc2cpKFwiZGV0YWlsX21zZ1wiKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTW9kYWxTZWN0aW9uLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxBcmVhLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbFRpdGxlLCBudWxsLCAoMCwgdXRpbHNfMi5tc2cpKFwicGluX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsRGF0YSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogZWRpdElzRml4ZWQgPyBcImZpeGVkXCIgOiBcInVuZml4ZWRcIiwgb25DaGFuZ2U6IG9uQ2hhbmdlRWRpdElzRml4ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwidW5maXhlZFwiIH0sICgwLCB1dGlsc18yLm1zZykoXCJwaW5fc2VsZWN0X29wdGlvbl91bmZpeGVkX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcImZpeGVkXCIgfSwgKDAsIHV0aWxzXzIubXNnKShcInBpbl9zZWxlY3Rfb3B0aW9uX2ZpeGVkX21zZ1wiKSkpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsVGl0bGUsIG51bGwsICgwLCB1dGlsc18yLm1zZykoXCJvcGVuX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsRGF0YSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogZWRpdElzT3BlbiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiLCBvbkNoYW5nZTogb25DaGFuZ2VFZGl0SXNPcGVuIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcImZhbHNlXCIgfSwgKDAsIHV0aWxzXzIubXNnKShcIm9wZW5fc2VsZWN0X29wdGlvbl95ZXNfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwidHJ1ZVwiIH0sICgwLCB1dGlsc18yLm1zZykoXCJvcGVuX3NlbGVjdF9vcHRpb25fbm9fbXNnXCIpKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxUaXRsZSwgbnVsbCwgKDAsIHV0aWxzXzIubXNnKShcInBvc2l0aW9uX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsRGF0YSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsRGF0YVNwYW4sIG51bGwsIFwieDpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbERhdGFJbnB1dCwgeyB2YWx1ZU51bTogZWRpdFBvc2l0aW9uWCAhPT0gbnVsbCAmJiBlZGl0UG9zaXRpb25YICE9PSB2b2lkIDAgPyBlZGl0UG9zaXRpb25YIDogMCwgb25DaGFuZ2VOdW1iZXI6ICh2YWwpID0+IHNldEVkaXRQb3NpdGlvbih2YWwsIGVkaXRQb3NpdGlvblkpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxEYXRhU3BhbiwgbnVsbCwgXCJ5OlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsRGF0YUlucHV0LCB7IHZhbHVlTnVtOiBlZGl0UG9zaXRpb25ZICE9PSBudWxsICYmIGVkaXRQb3NpdGlvblkgIT09IHZvaWQgMCA/IGVkaXRQb3NpdGlvblkgOiAwLCBvbkNoYW5nZU51bWJlcjogKHZhbCkgPT4gc2V0RWRpdFBvc2l0aW9uKGVkaXRQb3NpdGlvblgsIHZhbCkgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxUaXRsZSwgbnVsbCwgKDAsIHV0aWxzXzIubXNnKShcInNpemVfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxEYXRhLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxEYXRhU3BhbiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18yLm1zZykoXCJzaXplX3dpZHRoX21zZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsRGF0YUlucHV0LCB7IHZhbHVlTnVtOiBlZGl0V2lkdGgsIG9uQ2hhbmdlTnVtYmVyOiAodmFsKSA9PiBzZXRFZGl0U2l6ZSh2YWwsIGVkaXRIZWlnaHQpIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxEYXRhU3BhbiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18yLm1zZykoXCJzaXplX2hlaWdodF9tc2dcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbERhdGFJbnB1dCwgeyB2YWx1ZU51bTogZWRpdEhlaWdodCwgb25DaGFuZ2VOdW1iZXI6ICh2YWwpID0+IHNldEVkaXRTaXplKGVkaXRXaWR0aCwgdmFsKSB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZF9hdCAmJiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNOb3RlRGV0YWlsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbFRpdGxlLCBudWxsLCAoMCwgdXRpbHNfMi5tc2cpKFwidXBkYXRlZF9hdF9tc2dcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbERhdGEsIG51bGwsICgwLCB1dGlsc18xLmZvcm1hdERhdGUpKG5ldyBEYXRlKHVwZGF0ZWRfYXQpKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTm90ZURldGFpbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxUaXRsZSwgbnVsbCwgKDAsIHV0aWxzXzIubXNnKShcImNyZWF0ZWRfYXRfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU05vdGVEZXRhaWxEYXRhLCBudWxsLCAoMCwgdXRpbHNfMS5mb3JtYXREYXRlKShuZXcgRGF0ZShjcmVhdGVkX2F0KSkpKSkpKSkpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU0RpdmlkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TTW9kYWxBY3Rpb25zLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU01vZGFsQWN0aW9uc0xlZnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU0J1dHRvbiwgeyBvbkNsaWNrOiBvblNhdmVBbmRDbG9zZSwgZGlzYWJsZWQ6ICFpc0VkaXRpbmcgfSwgKDAsIHV0aWxzXzIubXNnKShcInNhdmVfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TQnV0dG9uLCB7IHNlY29uZGFyeTogdHJ1ZSwgb25DbGljazogb25DbG9zZVdpdGhvdXRTYXZlIH0sIGlzRWRpdGluZyA/ICgwLCB1dGlsc18yLm1zZykoXCJkaXNjYXJkX2Nsb3NlX21zZ1wiKSA6ICgwLCB1dGlsc18yLm1zZykoXCJjbG9zZV9tc2dcIikpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF9zdHlsZV8xLlNNb2RhbEFjdGlvbnNSaWdodCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5vdGVFZGl0TW9kYWxfc3R5bGVfMS5TSWNvbkJ1dHRvbiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBcImFjdGlvbi1wb3BvdmVyXCIsIG9uQ2xpY2s6IG9uQ2xpY2tNb3JlQWN0aW9ucyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNvbGlkXzEuRWxsaXBzaXNWZXJ0aWNhbEljb24sIHsgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIiB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQb3BvdmVyXzEuZGVmYXVsdCwgeyBpZDogXCJhY3Rpb24tcG9wb3ZlclwiLCBvcGVuOiBCb29sZWFuKGFuY2hvckFjdGlvbnNFbCksIGFuY2hvckVsOiBhbmNob3JBY3Rpb25zRWwsIG9uQ2xvc2U6IGhhbmRsZUNsb3NlQWN0aW9ucywgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0cmFuc2Zvcm1PcmlnaW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU01lbnVMaXN0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChOb3RlRWRpdE1vZGFsX3N0eWxlXzEuU01lbnVMaXN0SXRlbSwgeyBvbkNsaWNrOiBvbkRlbGV0ZSB9LCAoMCwgdXRpbHNfMi5tc2cpKFwiZGVsZXRlX21zZ1wiKSkpKSkpKSkpKTtcbn07XG5leHBvcnRzLk5vdGVFZGl0TW9kYWwgPSBOb3RlRWRpdE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU0hlYWRlckNvbnRlbnRMaW5rID0gZXhwb3J0cy5TSGVhZGVyQ29udGVudCA9IGV4cG9ydHMuU1RvcExpbmsgPSBleHBvcnRzLlNUaXRsZSA9IGV4cG9ydHMuU0xvZ28gPSBleHBvcnRzLlNIZWFkZXJMZWZ0ID0gZXhwb3J0cy5TSGVhZGVyID0gZXhwb3J0cy5PcHRpb25IZWFkZXIgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBzdHlsZWRfY29tcG9uZW50c18xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKSk7XG5jb25zdCByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jb25zdCBPcHRpb25IZWFkZXIgPSAoeyBjdXJyZW50IH0pID0+IHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU0hlYWRlciwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZXhwb3J0cy5TSGVhZGVyTGVmdCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU1RvcExpbmssIHsgdG86IFwiL21lbW9zLmh0bWxcIiB9LFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU0xvZ28sIHsgc3JjOiBcIi9pbWFnZXMvaWNvbl8zOC5wbmdcIiwgYWx0OiBcIlwiIH0pLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU1RpdGxlLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwiYXBwTmFtZVwiKSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoZXhwb3J0cy5TSGVhZGVyQ29udGVudCwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU0hlYWRlckNvbnRlbnRMaW5rLCB7IFwiJGlzQWN0aXZlXCI6IGN1cnJlbnQgPT09IFwibWVtb3NcIiwgdG86IFwiL21lbW9zLmh0bWxcIiB9LCAoMCwgdXRpbHNfMS5tc2cpKFwibm90ZV9oZWFkZXJfbXNnXCIpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGV4cG9ydHMuU0hlYWRlckNvbnRlbnRMaW5rLCB7IFwiJGlzQWN0aXZlXCI6IGN1cnJlbnQgPT09IFwic2V0dGluZ1wiLCB0bzogXCIvc2V0dGluZy5odG1sXCIgfSwgKDAsIHV0aWxzXzEubXNnKShcInNldHRpbmdzX2hlYWRlcl9tc2dcIikpKSkpO1xufTtcbmV4cG9ydHMuT3B0aW9uSGVhZGVyID0gT3B0aW9uSGVhZGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5PcHRpb25IZWFkZXI7XG5leHBvcnRzLlNIZWFkZXIgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuaGVhZGVyIGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuNzVlbTtcbiAgcGFkZGluZzogMCAxLjc1ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDE7XG5gO1xuZXhwb3J0cy5TSGVhZGVyTGVmdCA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuZXhwb3J0cy5TTG9nbyA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5pbWcgYFxuICB3aWR0aDogMS41ZW07XG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xuYDtcbmV4cG9ydHMuU1RpdGxlID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmgxIGBgO1xuZXhwb3J0cy5TVG9wTGluayA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rKSBgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuYDtcbmV4cG9ydHMuU0hlYWRlckNvbnRlbnQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMWVtO1xuYDtcbmV4cG9ydHMuU0hlYWRlckNvbnRlbnRMaW5rID0gKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdCkocmVhY3Rfcm91dGVyX2RvbV8xLkxpbmspIGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAwLjI1ZW07XG4gIHBhZGRpbmc6IDAgMWVtO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cblxuICAkeyh7ICRpc0FjdGl2ZSB9KSA9PiAkaXNBY3RpdmUgJiZcbiAgICAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5jc3MpIGBcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM0NzIyO1xuICAgICAgfVxuICAgIGB9XG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU0xhdW5jaEljb24gPSBleHBvcnRzLlNQYWdlSW5mb0xpbmsgPSBleHBvcnRzLlNQYWdlSW5mb1RpdGxlID0gZXhwb3J0cy5TUGFnZUluZm9GYXZpY29uSW1hZ2UgPSBleHBvcnRzLlNQYWdlSW5mb0hlYWRlciA9IGV4cG9ydHMuU1BhZ2VJbmZvID0gZXhwb3J0cy5TUGFnZUluZm9XcmFwID0gZXhwb3J0cy5TSWNvbkJ1dHRvbiA9IGV4cG9ydHMuU0NvcHlTdWNjZXNzSWNvbiA9IGV4cG9ydHMuU0ljb25CdXR0b25XcmFwID0gZXhwb3J0cy5TQ2FyZEFjdGlvbnMgPSBleHBvcnRzLlNDYXJkRm9vdGVyID0gZXhwb3J0cy5TQ2FyZERhdGVUZXh0ID0gZXhwb3J0cy5TQ2FyZERhdGUgPSBleHBvcnRzLlNDYXJkRGVzY3JpcHRpb25UZXh0ID0gZXhwb3J0cy5TQ2FyZERlc2NyaXB0aW9uID0gZXhwb3J0cy5TQ2FyZFRpdGxlID0gZXhwb3J0cy5ub3RlRGVzY3JpcHRpb25DU1MgPSBleHBvcnRzLm5vdGVUaXRsZUNTUyA9IGV4cG9ydHMuU0NhcmRIZWFkZXIgPSBleHBvcnRzLlNDYXJkID0gdm9pZCAwO1xuY29uc3Qgc3R5bGVkX2NvbXBvbmVudHNfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIikpO1xuY29uc3Qgc29saWRfMSA9IHJlcXVpcmUoXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCIpO1xuY29uc3QgSWNvbl8xID0gcmVxdWlyZShcIi4uL0ljb25cIik7XG5jb25zdCBJY29uQnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0J1dHRvbi9JY29uQnV0dG9uXCIpKTtcbmV4cG9ydHMuU0NhcmQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgcGFkZGluZzogMC43NWVtIDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbmA7XG5leHBvcnRzLlNDYXJkSGVhZGVyID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7ICovXG5gO1xuZXhwb3J0cy5ub3RlVGl0bGVDU1MgPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5jc3MpIGBcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVlbTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuYDtcbmV4cG9ydHMubm90ZURlc2NyaXB0aW9uQ1NTID0gKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuY3NzKSBgXG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcbiAgcGFkZGluZzogMC4yNWVtIDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbmA7XG5leHBvcnRzLlNDYXJkVGl0bGUgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuaDMgYFxuICAke2V4cG9ydHMubm90ZVRpdGxlQ1NTfVxuYDtcbmV4cG9ydHMuU0NhcmREZXNjcmlwdGlvbiA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBmbGV4OiAxO1xuICAke2V4cG9ydHMubm90ZURlc2NyaXB0aW9uQ1NTfVxuYDtcbmV4cG9ydHMuU0NhcmREZXNjcmlwdGlvblRleHQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuc3BhbiBgXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbmA7XG5leHBvcnRzLlNDYXJkRGF0ZSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBmb250LXNpemU6IDAuNzVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjNzc3O1xuYDtcbmV4cG9ydHMuU0NhcmREYXRlVGV4dCA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5zcGFuIGBcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG5gO1xuZXhwb3J0cy5TQ2FyZEZvb3RlciA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbmA7XG5leHBvcnRzLlNDYXJkQWN0aW9ucyA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmV4cG9ydHMuU0ljb25CdXR0b25XcmFwID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIG1hcmdpbi1yaWdodDogMWVtO1xuYDtcbmV4cG9ydHMuU0NvcHlTdWNjZXNzSWNvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKEljb25fMS5Db3B5U3VjY2Vzc0ljb24pIGBcbiAgd2lkdGg6IDEuMjVlbTtcbiAgaGVpZ2h0OiAxLjI1ZW07XG5gO1xuZXhwb3J0cy5TSWNvbkJ1dHRvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKEljb25CdXR0b25fMS5kZWZhdWx0KSBgXG4gIHdpZHRoOiAxLjI1ZW07XG4gIGhlaWdodDogMS4yNWVtO1xuYDtcbmV4cG9ydHMuU1BhZ2VJbmZvV3JhcCA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuYDtcbmV4cG9ydHMuU1BhZ2VJbmZvID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJHsoeyAkaXNGaWx0ZXIgfSkgPT4gJGlzRmlsdGVyICYmXG4gICAgKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuY3NzKSBgXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYH1cblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIH1cblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbmA7XG5leHBvcnRzLlNQYWdlSW5mb0hlYWRlciA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmV4cG9ydHMuU1BhZ2VJbmZvRmF2aWNvbkltYWdlID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmltZyBgXG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuYDtcbmV4cG9ydHMuU1BhZ2VJbmZvVGl0bGUgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQucCBgXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuYDtcbmV4cG9ydHMuU1BhZ2VJbmZvTGluayA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5wIGBcbiAgZm9udC1zaXplOiAwLjYyNWVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzAwMzc5ZTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIG1hcmdpbi1sZWZ0OiAyLjRlbTtcbmA7XG5leHBvcnRzLlNMYXVuY2hJY29uID0gKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdCkoc29saWRfMS5GdW5uZWxJY29uKSBgXG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBQb3BvdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvUG9wb3ZlclwiKSk7XG5jb25zdCBUb29sdGlwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVG9vbHRpcFwiKSk7XG5jb25zdCBzb2xpZF8xID0gcmVxdWlyZShcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY29uc3QgSWNvbl8xID0gcmVxdWlyZShcIi4uL0ljb25cIik7XG5jb25zdCB1c2VDbGlwYm9hcmRfMSA9IHJlcXVpcmUoXCIuLi8uLi9ob29rcy91c2VDbGlwYm9hcmRcIik7XG5jb25zdCBOb3RlRWRpdE1vZGFsXzEgPSByZXF1aXJlKFwiLi4vTm90ZUVkaXRNb2RhbC9Ob3RlRWRpdE1vZGFsXCIpO1xuY29uc3QgT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMSA9IHJlcXVpcmUoXCIuL09wdGlvbkxpc3RJdGVtLnN0eWxlXCIpO1xuY29uc3QgdXRpbHNfMiA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNvbnN0IENvbG9yUGlja2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0NvbG9yUGlja2VyL0NvbG9yUGlja2VyXCIpKTtcbmNvbnN0IE9wdGlvbkxpc3RJdGVtID0gKDAsIHJlYWN0XzEubWVtbykoKHsgbm90ZSwgZGVmYXVsdENvbG9yLCBwYWdlSW5mbywgc2hvd1BhZ2VJbmZvLCBjdXJyZW50UGFnZUluZm9JZCwgb25VcGRhdGUsIG9uRGVsZXRlLCBvbkNsaWNrTGluaywgb25DbGlja0ZpbHRlciwgbWVhc3VyZSwgfSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY3JlYXRlZF9hdCwgdXBkYXRlZF9hdCB9ID0gbm90ZTtcbiAgICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGZhbHNlKTtcbiAgICBjb25zdCB7IGlzU3VjY2Vzc0NvcHksIGNvcHlDbGlwYm9hcmQgfSA9ICgwLCB1c2VDbGlwYm9hcmRfMS51c2VDbGlwYm9hcmQpKCk7XG4gICAgY29uc3QgW2luaXRGb2N1cywgc2V0SW5pdEZvY3VzXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKSgpO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBtZWFzdXJlICYmIG1lYXN1cmUoKTtcbiAgICB9LCBbbm90ZSwgY3VycmVudFBhZ2VJbmZvSWRdKTtcbiAgICAvLyDjgqvjg6njg7zjg5Tjg4Pjgqvjg7xcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHJlYWN0XzEuZGVmYXVsdC51c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBvbkNsaWNrQ29sb3JQaWNrZXJCdXR0b24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xvc2VDb2xvclBpY2tlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gICAgfTtcbiAgICBjb25zdCBpc09wZW5Db2xvclBpY2tlclBvcG92ZXIgPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgICBjb25zdCBwb3BvdmVySWQgPSBpc09wZW5Db2xvclBpY2tlclBvcG92ZXIgPyBcImNvbG9yLXBpY2tlci1wb3BvdmVyXCIgOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgb25DaGFuZ2VDb2xvciA9IChjb2xvcikgPT4ge1xuICAgICAgICBvblVwZGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG5vdGUpLCB7IGNvbG9yIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNDYXJkLCB7IG9uRG91YmxlQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICB9LCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IG5vdGUuY29sb3IgfHwgZGVmYXVsdENvbG9yIHx8IFwiI2ZmZlwiIH0gfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU0NhcmRIZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TQ2FyZFRpdGxlLCB7IG9uRG91YmxlQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5pdEZvY3VzKFwidGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSwgdGl0bGUpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU0NhcmREZXNjcmlwdGlvbiwgeyBvbkRvdWJsZUNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJbml0Rm9jdXMoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3Blbk1vZGFsKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNDYXJkRGVzY3JpcHRpb25UZXh0LCBudWxsLCBkZXNjcmlwdGlvbikpLFxuICAgICAgICAgICAgc2hvd1BhZ2VJbmZvICYmIHBhZ2VJbmZvICYmIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNQYWdlSW5mb1dyYXAsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TUGFnZUluZm8sIHsgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTGluaygoX2EgPSBwYWdlSW5mby5wYWdlX3VybCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TUGFnZUluZm9IZWFkZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNQYWdlSW5mb0Zhdmljb25JbWFnZSwgeyBzcmM6IHBhZ2VJbmZvLmZhdl9pY29uX3VybCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU1BhZ2VJbmZvVGl0bGUsIG51bGwsIHBhZ2VJbmZvLnBhZ2VfdGl0bGUpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TUGFnZUluZm9MaW5rLCBudWxsLCBwYWdlSW5mby5wYWdlX3VybCkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBfMS5kZWZhdWx0LCB7IHRpdGxlOiAoMCwgdXRpbHNfMi5tc2cpKFwidGhpc19wYWdlX25vdGVfbGlzdF9tc2dcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TUGFnZUluZm8sIHsgXCIkaXNGaWx0ZXJcIjogdHJ1ZSwgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaWx0ZXIocGFnZUluZm8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TTGF1bmNoSWNvbiwgeyBmaWxsOiBcInJnYmEoMCwgMCwgMCwgMC40KVwiIH0pKSkpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU0NhcmRGb290ZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TQ2FyZEFjdGlvbnMsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBfMS5kZWZhdWx0LCB7IHRpdGxlOiAoMCwgdXRpbHNfMi5tc2cpKFwiZWRpdF9tc2dcIiksIGVudGVyRGVsYXk6IDMwMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TSWNvbkJ1dHRvbldyYXAsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TSWNvbkJ1dHRvbiwgeyBvbkNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChzb2xpZF8xLlBlbmNpbFNxdWFyZUljb24sIHsgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIiB9KSkpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcF8xLmRlZmF1bHQsIHsgdGl0bGU6IGlzU3VjY2Vzc0NvcHkgPyAoMCwgdXRpbHNfMi5tc2cpKFwiY29waWVkX21zZ1wiKSA6ICgwLCB1dGlsc18yLm1zZykoXCJjb3B5X21zZ1wiKSwgZW50ZXJEZWxheTogMzAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNJY29uQnV0dG9uV3JhcCwgbnVsbCwgaXNTdWNjZXNzQ29weSA/IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNDb3B5U3VjY2Vzc0ljb24sIHsgZmlsbDogXCIjMjJjNTVlXCIgfSkpIDogKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU0ljb25CdXR0b24sIHsgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weUNsaXBib2FyZChgJHt0aXRsZX1cXG4ke2Rlc2NyaXB0aW9ufWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChJY29uXzEuQ29weUljb24sIHsgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIiB9KSkpKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBfMS5kZWZhdWx0LCB7IHRpdGxlOiAoMCwgdXRpbHNfMi5tc2cpKFwiY29sb3JfbXNnXCIpLCBlbnRlckRlbGF5OiAzMDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU0ljb25CdXR0b25XcmFwLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU0ljb25CdXR0b24sIHsgb25DbGljazogb25DbGlja0NvbG9yUGlja2VyQnV0dG9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEljb25fMS5QYWxsZXRJY29uLCB7IGZpbGw6IFwicmdiYSgwLCAwLCAwLCAwLjQpXCIgfSkpKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvcG92ZXJfMS5kZWZhdWx0LCB7IGlkOiBwb3BvdmVySWQsIG9wZW46IGlzT3BlbkNvbG9yUGlja2VyUG9wb3ZlciwgYW5jaG9yRWw6IGFuY2hvckVsLCBvbkNsb3NlOiBoYW5kbGVDbG9zZUNvbG9yUGlja2VyLCBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgd2lkdGg6IFwiMTY4cHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH0sIG9uQ2xpY2s6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29sb3JQaWNrZXJfMS5kZWZhdWx0LCB7IGhhc0RlZmF1bHQ6IHRydWUsIGNvbG9yOiBub3RlLmNvbG9yLCBvbkNoYW5nZUNvbG9yOiBvbkNoYW5nZUNvbG9yIH0pKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRvb2x0aXBfMS5kZWZhdWx0LCB7IHRpdGxlOiAoMCwgdXRpbHNfMi5tc2cpKFwiZGVsZXRlX21zZ1wiKSwgZW50ZXJEZWxheTogMzAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNJY29uQnV0dG9uV3JhcCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNJY29uQnV0dG9uLCB7IG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgJiYgb25EZWxldGUobm90ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc29saWRfMS5UcmFzaEljb24sIHsgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIiB9KSkpKSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fc3R5bGVfMS5TQ2FyZERhdGUsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3RJdGVtX3N0eWxlXzEuU0NhcmREYXRlVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18yLm1zZykoXCJjcmVhdGVkX2F0X21zZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmZvcm1hdERhdGUpKG5ldyBEYXRlKGNyZWF0ZWRfYXQpKSkpLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkX2F0ICYmIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25MaXN0SXRlbV9zdHlsZV8xLlNDYXJkRGF0ZVRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMi5tc2cpKFwidXBkYXRlZF9hdF9tc2dcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5mb3JtYXREYXRlKShuZXcgRGF0ZSh1cGRhdGVkX2F0KSkpKSkpKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTm90ZUVkaXRNb2RhbF8xLk5vdGVFZGl0TW9kYWwsIHsgaXNPcGVuOiBvcGVuTW9kYWwsIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEluaXRGb2N1cyh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSwgbm90ZTogbm90ZSwgb25VcGRhdGVOb3RlOiBvblVwZGF0ZSwgb25EZWxldGVOb3RlOiBvbkRlbGV0ZSwgaW5pdEZvY3VzOiBpbml0Rm9jdXMgfSkpKTtcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gT3B0aW9uTGlzdEl0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgTnVtYmVySW5wdXQgPSAoMCwgcmVhY3RfMS5tZW1vKSgoX2EpID0+IHtcbiAgICB2YXIgeyB2YWx1ZU51bSwgb25DaGFuZ2VOdW1iZXIgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1widmFsdWVOdW1cIiwgXCJvbkNoYW5nZU51bWJlclwiXSk7XG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGAke3ZhbHVlTnVtfWApO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKGAke3ZhbHVlTnVtfWApO1xuICAgIH0sIFt2YWx1ZU51bV0pO1xuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoKGUpID0+IHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfSwgW3NldElucHV0VmFsdWVdKTtcbiAgICBjb25zdCBvbktleURvd25JbnB1dCA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgb25FbnRlcigpO1xuICAgICAgICB9XG4gICAgfSwgW3ZhbHVlTnVtLCBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlLCBvbkNoYW5nZU51bWJlcl0pO1xuICAgIGNvbnN0IG9uRW50ZXIgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dE51bSA9IE51bWJlcihpbnB1dFZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihpbnB1dE51bSkpXG4gICAgICAgICAgICBvbkNoYW5nZU51bWJlcihpbnB1dE51bSk7XG4gICAgICAgIHNldElucHV0VmFsdWUoYCR7dmFsdWVOdW19YCk7XG4gICAgfSwgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWUsIG9uQ2hhbmdlTnVtYmVyXSk7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oeyB0eXBlOiBcInRleHRcIiwgdmFsdWU6IGlucHV0VmFsdWUsIG9uQ2hhbmdlOiBvbkNoYW5nZUlucHV0LCBvbktleURvd246IG9uS2V5RG93bklucHV0LCBvbkJsdXI6IG9uRW50ZXIgfSwgcHJvcHMpKSk7XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IE51bWJlcklucHV0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jb25zdCBzdHlsZWRfY29tcG9uZW50c18xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKSk7XG5jb25zdCBVc2FnZSA9ICgwLCByZWFjdF8xLm1lbW8pKCgpID0+IHtcbiAgICAvLyDjgqTjg7Pjgrnjg4jjg7zjg6vnm7Tlvozjga/nm67nq4vjgZ/jgZvjgotcbiAgICBjb25zdCBpc0luaXQgPSB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjaW5pdFwiO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU1VzYWdlQ29udGFpbmVyLCB7IFwiJGlzSW5pdFwiOiBpc0luaXQgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU1VzYWdlQ29udGVudCwgbnVsbCxcbiAgICAgICAgICAgIGlzSW5pdCAmJiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTVXNhZ2VXZWxjb21lLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwid2VsY29tZV9tc2dcIikpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU1VzYWdlSXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsICgwLCB1dGlsc18xLm1zZykoXCJ1c2FnZTAxXCIpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTVXNhZ2VJbWFnZUFyZWEsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgd2lkdGg6IDQwMCwgc3JjOiBcIi9pbWFnZXMvdXNhZ2UvdXNhZ2UwMS5wbmdcIiwgYWx0OiBcIlwiIH0pKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTVXNhZ2VJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcInVzYWdlMDJcIikpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNVc2FnZUltYWdlQXJlYSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyB3aWR0aDogNDAwLCBzcmM6IFwiL2ltYWdlcy91c2FnZS91c2FnZTAyLnBuZ1wiLCBhbHQ6IFwiXCIgfSkpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNVc2FnZUl0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwidXNhZ2UwMl8yXCIpKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTVXNhZ2VJbWFnZUFyZWEsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgd2lkdGg6IDIwMCwgc3JjOiBcIi9pbWFnZXMvdXNhZ2UvdXNhZ2UwMl8yLnBuZ1wiLCBhbHQ6IFwiXCIgfSkpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNVc2FnZUl0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tc2cpKFwidXNhZ2UwM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubXNnKShcInVzYWdlMDRcIikpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNVc2FnZUltYWdlQXJlYSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiL2ltYWdlcy91c2FnZS91c2FnZTAzLnBuZ1wiLCBhbHQ6IFwiXCIgfSkpKSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNVc2FnZUl0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwidXNhZ2UwNVwiKSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU1VzYWdlSW1hZ2VBcmVhLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHdpZHRoOiA0MDAsIHNyYzogXCIvaW1hZ2VzL3VzYWdlL3VzYWdlMDUucG5nXCIsIGFsdDogXCJcIiB9KSkpLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU1VzYWdlSXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiLi9tZW1vcy5odG1sXCIgfSwgKDAsIHV0aWxzXzEubXNnKShcInVzYWdlMDZcIikpLFxuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tc2cpKFwidXNhZ2UwNl8yXCIpKSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTVXNhZ2VJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcInVzYWdlMDdcIikpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNVc2FnZUltYWdlQXJlYSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyB3aWR0aDogMzAwLCBzcmM6IFwiL2ltYWdlcy91c2FnZS91c2FnZTA2LnBuZ1wiLCBhbHQ6IFwiXCIgfSkpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNVc2FnZUZ1bmN0aW9uTGlzdCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsIG51bGwsICgwLCB1dGlsc18xLm1zZykoXCJwaW5fbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLm1zZykoXCJwaW5fZXhwbGFpbl9tc2dcIikpLFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJcIiwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcImVkaXRfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLm1zZykoXCJlZGl0X2V4cGxhaW5fbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsIG51bGwsICgwLCB1dGlsc18xLm1zZykoXCJjb3B5X21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tc2cpKFwiY29weV9leHBsYWluX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwiY29sb3JfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLm1zZykoXCJjb2xvcl9leHBsYWluX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYlwiLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwiZGVsZXRlX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tc2cpKFwiZGVsZXRlX2V4cGxhaW5fbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsIG51bGwsICgwLCB1dGlsc18xLm1zZykoXCJvcGVuX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tc2cpKFwib3Blbl9leHBsYWluX21zZ1wiKSkpKSkpKTtcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gVXNhZ2U7XG5jb25zdCBTVXNhZ2VDb250YWluZXIgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuXG4gICR7KHsgJGlzSW5pdCB9KSA9PiAkaXNJbml0ICYmXG4gICAgKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuY3NzKSBgXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGN0NDO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgYW5pbWF0aW9uOiAycyBlYXNlLW91dCAwcyAzIGZsdWZmeUFuaW1hdGlvbiBmb3J3YXJkcztcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC8qIOOBteOCj+OBo+OBqOW6g+OBjOOCi+OCouODi+ODoeODvOOCt+ODp+ODsyAqL1xuICAgICAgQGtleWZyYW1lcyBmbHVmZnlBbmltYXRpb24ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCAjZmZlNjAwO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXJlbSByZ2JhKDI1NSwgMjMwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBib3gtc1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJyZW0gcmdiYSgyNTUsIDIzMCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuXG4gICR7KHsgJGlzSW5pdCB9KSA9PiAhJGlzSW5pdCAmJlxuICAgICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmNzcykgYFxuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYH1cbmA7XG5jb25zdCBTVXNhZ2VDb250ZW50ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5jb25zdCBTVXNhZ2VJdGVtID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcblxuICAmID4gaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogIzAwMjc2MTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcbmNvbnN0IFNVc2FnZVdlbGNvbWUgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuaDIgYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbmNvbnN0IFNVc2FnZUltYWdlQXJlYSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgJiA+IGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbmA7XG5jb25zdCBTVXNhZ2VGdW5jdGlvbkxpc3QgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQub2wgYFxuICBmb250LXNpemU6IDAuODc1cmVtO1xuICB3aWR0aDogMjVyZW07XG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XG4gIG1hcmdpbjogYXV0bztcblxuICAmID4gbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VDbGlwYm9hcmQgPSB2b2lkIDA7XG5jb25zdCByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgdXNlQ2xpcGJvYXJkID0gKCkgPT4ge1xuICAgIC8vIOOCs+ODlOODvOaIkOWKn+OCouOCpOOCs+ODs+OBruihqOekulxuICAgIGNvbnN0IFtpc1N1Y2Nlc3NDb3B5LCBzZXRJc1N1Y2Nlc3NDb3B5XSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSk7XG4gICAgY29uc3QgY29weUNsaXBib2FyZCA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgodGV4dCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldElzU3VjY2Vzc0NvcHkodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc1N1Y2Nlc3NDb3B5KGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNTdWNjZXNzQ29weSxcbiAgICAgICAgY29weUNsaXBib2FyZCxcbiAgICB9O1xufTtcbmV4cG9ydHMudXNlQ2xpcGJvYXJkID0gdXNlQ2xpcGJvYXJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZU5vdGVTaXplID0gZXhwb3J0cy51c2VOb3RlUG9zaXRpb24gPSBleHBvcnRzLmluaXRpYWxQb3NpdGlvblkgPSBleHBvcnRzLmluaXRpYWxQb3NpdGlvblggPSBleHBvcnRzLnVzZU5vdGVFZGl0ID0gZXhwb3J0cy5OT1RFX0xFRlRfUE9TSVRJT04gPSBleHBvcnRzLk5PVEVfVE9QX1BPU0lUSU9OID0gZXhwb3J0cy5NSU5fTk9URV9IRUlHSFQgPSBleHBvcnRzLk1JTl9OT1RFX1dJRFRIID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IE5vdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy9Ob3RlXCIpO1xuZXhwb3J0cy5NSU5fTk9URV9XSURUSCA9IDE2MDtcbmV4cG9ydHMuTUlOX05PVEVfSEVJR0hUID0gMTIwO1xuZXhwb3J0cy5OT1RFX1RPUF9QT1NJVElPTiA9IDA7XG5leHBvcnRzLk5PVEVfTEVGVF9QT1NJVElPTiA9IDA7XG4vKipcbiAqIOODoeODouOCkue3qOmbhuOBmeOCi+OBn+OCgeOBrkhvb2tcbiAqIEBwYXJhbSBub3RlIE5vdGVcbiAqIEByZXR1cm5zIOWQhOimgee0oOOBqOOAgeabtOaWsOOBmeOCi+mWouaVsFxuICovXG5jb25zdCB1c2VOb3RlRWRpdCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcG9zaXRpb25feCwgcG9zaXRpb25feSwgd2lkdGggPSBleHBvcnRzLk1JTl9OT1RFX1dJRFRILCBoZWlnaHQgPSBleHBvcnRzLk1JTl9OT1RFX0hFSUdIVCwgaXNfb3BlbiwgfSkgPT4ge1xuICAgIGNvbnN0IFtlZGl0VGl0bGUsIHNldEVkaXRUaXRsZV0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkodGl0bGUpO1xuICAgIGNvbnN0IFtlZGl0RGVzY3JpcHRpb24sIHNldEVkaXREZXNjcmlwdGlvbl0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IFtlZGl0SXNPcGVuLCBzZXRFZGl0SXNPcGVuXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShpc19vcGVuKTtcbiAgICBjb25zdCB7IHBvc2l0aW9uWDogZWRpdFBvc2l0aW9uWCwgcG9zaXRpb25ZOiBlZGl0UG9zaXRpb25ZLCBzZXRQb3NpdGlvbjogc2V0RWRpdFBvc2l0aW9uLCB9ID0gKDAsIGV4cG9ydHMudXNlTm90ZVBvc2l0aW9uKShwb3NpdGlvbl94LCBwb3NpdGlvbl95KTtcbiAgICBjb25zdCB7IHdpZHRoOiBlZGl0V2lkdGgsIGhlaWdodDogZWRpdEhlaWdodCwgc2V0U2l6ZTogc2V0RWRpdFNpemUgfSA9ICgwLCBleHBvcnRzLnVzZU5vdGVTaXplKSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAvKipcbiAgICAgKiDmlrBpc0ZpeGVk44Gr5a++44GZ44KL5L+u5q2j5L2N572u44KS6L+U5Y2044GZ44KLXG4gICAgICovXG4gICAgY29uc3QgZ2V0Rml4ZWRQb3NpdGlvbiA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoaXNGaXhlZCkgPT4ge1xuICAgICAgICBjb25zdCBmaXhQb3NpdGlvbiA9IGlzRml4ZWQgPyAtMSA6IDE7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uWCA9IChlZGl0UG9zaXRpb25YICE9PSBudWxsICYmIGVkaXRQb3NpdGlvblggIT09IHZvaWQgMCA/IGVkaXRQb3NpdGlvblggOiAoMCwgZXhwb3J0cy5pbml0aWFsUG9zaXRpb25YKSgpKSArIHdpbmRvdy5zY3JvbGxYICogZml4UG9zaXRpb247XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uWSA9IChlZGl0UG9zaXRpb25ZICE9PSBudWxsICYmIGVkaXRQb3NpdGlvblkgIT09IHZvaWQgMCA/IGVkaXRQb3NpdGlvblkgOiAoMCwgZXhwb3J0cy5pbml0aWFsUG9zaXRpb25ZKSgpKSArIHdpbmRvdy5zY3JvbGxZICogZml4UG9zaXRpb247XG4gICAgICAgIHJldHVybiB7IHBvc2l0aW9uWDogbmV3UG9zaXRpb25YLCBwb3NpdGlvblk6IG5ld1Bvc2l0aW9uWSB9O1xuICAgIH0sIFtlZGl0UG9zaXRpb25YLCBlZGl0UG9zaXRpb25ZXSk7XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIHNldEVkaXRJc09wZW4oaXNfb3Blbik7XG4gICAgfSwgW2lzX29wZW5dKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgc2V0RWRpdERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcbiAgICB9LCBbZGVzY3JpcHRpb25dKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgc2V0RWRpdFRpdGxlKHRpdGxlKTtcbiAgICB9LCBbdGl0bGVdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBlZGl0VGl0bGUsXG4gICAgICAgIHNldEVkaXRUaXRsZSxcbiAgICAgICAgZWRpdERlc2NyaXB0aW9uLFxuICAgICAgICBzZXRFZGl0RGVzY3JpcHRpb24sXG4gICAgICAgIGVkaXRJc09wZW4sXG4gICAgICAgIHNldEVkaXRJc09wZW4sXG4gICAgICAgIGVkaXRQb3NpdGlvblgsXG4gICAgICAgIGVkaXRQb3NpdGlvblksXG4gICAgICAgIHNldEVkaXRQb3NpdGlvbixcbiAgICAgICAgZWRpdFdpZHRoLFxuICAgICAgICBlZGl0SGVpZ2h0LFxuICAgICAgICBzZXRFZGl0U2l6ZSxcbiAgICAgICAgZ2V0Rml4ZWRQb3NpdGlvbixcbiAgICB9O1xufTtcbmV4cG9ydHMudXNlTm90ZUVkaXQgPSB1c2VOb3RlRWRpdDtcbi8vIGluaXRpYWw6IGRlZmF1bHTjgYzjgrvjg4Pjg4jjgZXjgozjgabjgYTjgarjgYTjgajjgY3jga7lgKRcbmNvbnN0IGluaXRpYWxQb3NpdGlvblggPSAoKSA9PiAod2luZG93LmlubmVyV2lkdGggLSBOb3RlXzEuREVBVUxUX05PVEVfV0lEVEgpIC8gMjtcbmV4cG9ydHMuaW5pdGlhbFBvc2l0aW9uWCA9IGluaXRpYWxQb3NpdGlvblg7XG5jb25zdCBpbml0aWFsUG9zaXRpb25ZID0gKCkgPT4gKHdpbmRvdy5pbm5lckhlaWdodCAtIE5vdGVfMS5ERUFVTFRfTk9URV9IRUlHSFQpIC8gMjtcbmV4cG9ydHMuaW5pdGlhbFBvc2l0aW9uWSA9IGluaXRpYWxQb3NpdGlvblk7XG5jb25zdCB1c2VOb3RlUG9zaXRpb24gPSAoZGVmYXVsdFBvc2l0aW9uWCwgZGVmYXVsdFBvc2l0aW9uWSkgPT4ge1xuICAgIGNvbnN0IFtwb3NpdGlvblgsIHNldFBvc2l0aW9uWF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZGVmYXVsdFBvc2l0aW9uWCk7XG4gICAgY29uc3QgW3Bvc2l0aW9uWSwgc2V0UG9zaXRpb25ZXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShkZWZhdWx0UG9zaXRpb25ZKTtcbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgocG9zaXRpb25YLCBwb3NpdGlvblkpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uWCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZXRQb3NpdGlvblgodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFBvc2l0aW9uWChwb3NpdGlvblggPj0gZXhwb3J0cy5OT1RFX0xFRlRfUE9TSVRJT04gPyBwb3NpdGlvblggOiBleHBvcnRzLk5PVEVfTEVGVF9QT1NJVElPTik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uWSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZXRQb3NpdGlvblkodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFBvc2l0aW9uWShwb3NpdGlvblkgPj0gZXhwb3J0cy5OT1RFX1RPUF9QT1NJVElPTiA/IHBvc2l0aW9uWSA6IGV4cG9ydHMuTk9URV9UT1BfUE9TSVRJT04pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzZXRQb3NpdGlvbihkZWZhdWx0UG9zaXRpb25YLCBkZWZhdWx0UG9zaXRpb25ZKTtcbiAgICB9LCBbZGVmYXVsdFBvc2l0aW9uWCwgZGVmYXVsdFBvc2l0aW9uWV0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uWCxcbiAgICAgICAgcG9zaXRpb25ZLFxuICAgICAgICBzZXRQb3NpdGlvbixcbiAgICB9O1xufTtcbmV4cG9ydHMudXNlTm90ZVBvc2l0aW9uID0gdXNlTm90ZVBvc2l0aW9uO1xuY29uc3QgdXNlTm90ZVNpemUgPSAoZGVmYXVsdFdpZHRoID0gZXhwb3J0cy5NSU5fTk9URV9XSURUSCwgZGVmYXVsdEhlaWdodCA9IGV4cG9ydHMuTUlOX05PVEVfSEVJR0hUKSA9PiB7XG4gICAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZGVmYXVsdFdpZHRoKTtcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKGRlZmF1bHRIZWlnaHQpO1xuICAgIGNvbnN0IHNldFNpemUgPSAoMCwgcmVhY3RfMS51c2VDYWxsYmFjaykoKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgc2V0V2lkdGgod2lkdGggPj0gZXhwb3J0cy5NSU5fTk9URV9XSURUSCA/IHdpZHRoIDogZXhwb3J0cy5NSU5fTk9URV9XSURUSCk7XG4gICAgICAgIHNldEhlaWdodChoZWlnaHQgPj0gZXhwb3J0cy5NSU5fTk9URV9IRUlHSFQgPyBoZWlnaHQgOiBleHBvcnRzLk1JTl9OT1RFX0hFSUdIVCk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNldFNpemUsXG4gICAgfTtcbn07XG5leHBvcnRzLnVzZU5vdGVTaXplID0gdXNlTm90ZVNpemU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlTm90ZURvd25sb2FkID0gZXhwb3J0cy5oYW5kbGVEb3dubG9hZCA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBoYW5kbGVEb3dubG9hZCA9IChjb3B5VGV4dCwgY29udGVudFR5cGUgPSBcInRleHQvY3N2XCIsIGZpbGVUeXBlID0gXCJjc3ZcIikgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBmb250bWF0ZWRUb2RheSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLnJlcGxhY2UoLy0vZywgXCJcIik7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBgZXhwb3J0XyR7KDAsIHV0aWxzXzEubXNnKShcImFwcF9uYW1lXCIpfV8ke2ZvbnRtYXRlZFRvZGF5fS4ke2ZpbGVUeXBlfWA7XG4gICAgY29uc3QgY29udGVudCA9IGNvcHlUZXh0O1xuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdLCB7IHR5cGU6IGNvbnRlbnRUeXBlIH0pO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBlbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGVsZW1lbnQuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuY2xpY2soKTtcbn07XG5leHBvcnRzLmhhbmRsZURvd25sb2FkID0gaGFuZGxlRG93bmxvYWQ7XG5jb25zdCB1c2VOb3RlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFuZGxlRG93bmxvYWQ6IGV4cG9ydHMuaGFuZGxlRG93bmxvYWQsXG4gICAgfTtcbn07XG5leHBvcnRzLnVzZU5vdGVEb3dubG9hZCA9IHVzZU5vdGVEb3dubG9hZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VRdWVyeSA9IHZvaWQgMDtcbmNvbnN0IHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbmZ1bmN0aW9uIHVzZVF1ZXJ5KCkge1xuICAgIGNvbnN0IHsgc2VhcmNoIH0gPSAoMCwgcmVhY3Rfcm91dGVyX2RvbV8xLnVzZUxvY2F0aW9uKSgpO1xuICAgIHJldHVybiAoMCwgcmVhY3RfMS51c2VNZW1vKSgoKSA9PiBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCksIFtzZWFyY2hdKTtcbn1cbmV4cG9ydHMudXNlUXVlcnkgPSB1c2VRdWVyeTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNTa2VsZXRvbiA9IGV4cG9ydHMuU0NhcmRMaXN0SXRlbSA9IGV4cG9ydHMuU0NhcmRMaXN0ID0gZXhwb3J0cy5TTm9Ob3RlVGV4dCA9IGV4cG9ydHMuU1BhZ2VMaW5rRWRpdEJ1dHRvbiA9IGV4cG9ydHMuU1BhZ2VMaW5rRWRpdElucHV0QWxlcnQgPSBleHBvcnRzLlNQYWdlTGlua0VkaXRJbnB1dCA9IGV4cG9ydHMuU0N1cnJlbnRQYWdlTGlua0VkaXRCdXR0b24gPSBleHBvcnRzLlNDdXJyZW50UGFnZUxpbmsgPSBleHBvcnRzLlNDdXJyZW50UGFnZUxpbmtBcmVhID0gZXhwb3J0cy5TQ3VycmVudFBhZ2VDbG9zZUJ1dHRvbiA9IGV4cG9ydHMuU0N1cnJlbnRQYWdlVGl0bGUgPSBleHBvcnRzLlNDdXJyZW50UGFnZUZhdmljb25JbWFnZSA9IGV4cG9ydHMuU0N1cnJlbnRQYWdlQXJlYUhlYWRlciA9IGV4cG9ydHMuU0N1cnJlbnRQYWdlQXJlYSA9IGV4cG9ydHMuU1NlbGVjdCA9IGV4cG9ydHMuU1NlbGVjdEljb24gPSBleHBvcnRzLlNTZWxlY3RXcmFwID0gZXhwb3J0cy5TSW5wdXQgPSBleHBvcnRzLlNJbnB1dEljb24gPSBleHBvcnRzLlNJbnB1dFdyYXAgPSBleHBvcnRzLlNNYWluUmlnaHRIZWFkZXIgPSBleHBvcnRzLlNTaWRlTmF2SXRlbUxpbmsgPSBleHBvcnRzLlNTaWRlTmF2SXRlbVRpdGxlID0gZXhwb3J0cy5TU2lkZU5hdkl0ZW1IZWFkZXIgPSBleHBvcnRzLlNGYXZpY29uSW1hZ2UgPSBleHBvcnRzLlNTaWRlTmF2SXRlbSA9IGV4cG9ydHMuU1NpZGVOYXYgPSB2b2lkIDA7XG5jb25zdCBzdHlsZWRfY29tcG9uZW50c18xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKSk7XG5jb25zdCBzb2xpZF8xID0gcmVxdWlyZShcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIik7XG5jb25zdCBTa2VsZXRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1NrZWxldG9uXCIpKTtcbmNvbnN0IEJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIikpO1xuY29uc3QgSWNvbkJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9JY29uQnV0dG9uXCIpKTtcbmV4cG9ydHMuU1NpZGVOYXYgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQudWwgYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAxLjVlbSAwLjc1ZW07XG5gO1xuZXhwb3J0cy5TU2lkZU5hdkl0ZW0gPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuYSBgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgcGFkZGluZzogMC43NWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjEyNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuXG4gICR7KHsgJGlzQWN0aXZlIH0pID0+ICRpc0FjdGl2ZSAmJlxuICAgICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmNzcykgYFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMjAlKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAyMCUpO1xuICAgICAgfVxuXG4gICAgICAke2V4cG9ydHMuU1NpZGVOYXZJdGVtTGlua30ge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICBgfVxuYDtcbmV4cG9ydHMuU0Zhdmljb25JbWFnZSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5pbWcgYFxuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbmA7XG5leHBvcnRzLlNTaWRlTmF2SXRlbUhlYWRlciA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuZXhwb3J0cy5TU2lkZU5hdkl0ZW1UaXRsZSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5wIGBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgZmxleDogMTtcbmA7XG5leHBvcnRzLlNTaWRlTmF2SXRlbUxpbmsgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQucCBgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICNhYWE7XG5gO1xuZXhwb3J0cy5TTWFpblJpZ2h0SGVhZGVyID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbmA7XG5leHBvcnRzLlNJbnB1dFdyYXAgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuYDtcbmV4cG9ydHMuU0lucHV0SWNvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKHNvbGlkXzEuTWFnbmlmeWluZ0dsYXNzSWNvbikgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuNzVlbTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxLjI1ZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5gO1xuZXhwb3J0cy5TSW5wdXQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuaW5wdXQgYFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNzVlbSAwLjVlbSAyLjI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OWVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNmY2QzNGQ7XG4gIH1cbmA7XG5leHBvcnRzLlNTZWxlY3RXcmFwID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcbiAgd2lkdGg6IDEyZW07XG5gO1xuZXhwb3J0cy5TU2VsZWN0SWNvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKHNvbGlkXzEuQXJyb3dzVXBEb3duSWNvbikgYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuNWVtO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbmA7XG5leHBvcnRzLlNTZWxlY3QgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuc2VsZWN0IGBcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW0gMC41ZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNmY2QzNGQ7XG4gIH1cbmA7XG5leHBvcnRzLlNDdXJyZW50UGFnZUFyZWEgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgbWFyZ2luLXRvcDogMC43NWVtO1xuICBwYWRkaW5nOiAwLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KTtcbmA7XG5leHBvcnRzLlNDdXJyZW50UGFnZUFyZWFIZWFkZXIgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5leHBvcnRzLlNDdXJyZW50UGFnZUZhdmljb25JbWFnZSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5pbWcgYFxuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbmA7XG5leHBvcnRzLlNDdXJyZW50UGFnZVRpdGxlID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LnAgYFxuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuYDtcbmV4cG9ydHMuU0N1cnJlbnRQYWdlQ2xvc2VCdXR0b24gPSAoMCwgc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0KShJY29uQnV0dG9uXzEuZGVmYXVsdCkgYFxuICBtYXJnaW4tbGVmdDogMC41ZW07XG5gO1xuZXhwb3J0cy5TQ3VycmVudFBhZ2VMaW5rQXJlYSA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5gO1xuZXhwb3J0cy5TQ3VycmVudFBhZ2VMaW5rID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmEgYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMwMDM3OWU7XG5gO1xuZXhwb3J0cy5TQ3VycmVudFBhZ2VMaW5rRWRpdEJ1dHRvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKEljb25CdXR0b25fMS5kZWZhdWx0KSBgXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgbWluLXdpZHRoOiAxLjI1cmVtO1xuYDtcbmV4cG9ydHMuU1BhZ2VMaW5rRWRpdElucHV0ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmlucHV0IGBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmV4cG9ydHMuU1BhZ2VMaW5rRWRpdElucHV0QWxlcnQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQucCBgXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG5gO1xuZXhwb3J0cy5TUGFnZUxpbmtFZGl0QnV0dG9uID0gKDAsIHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdCkoQnV0dG9uXzEuZGVmYXVsdCkgYFxuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbmA7XG5leHBvcnRzLlNOb05vdGVUZXh0ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LnAgYFxuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiAjYWFhO1xuYDtcbmV4cG9ydHMuU0NhcmRMaXN0ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMC4yNWVtIDA7XG4gIG1hcmdpbjogMCAtMC41ZW07XG5gO1xuZXhwb3J0cy5TQ2FyZExpc3RJdGVtID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMTAwJTtcbmA7XG5leHBvcnRzLlNTa2VsZXRvbiA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQpKFNrZWxldG9uXzEuZGVmYXVsdCkgYFxuICBtYXJnaW4tdG9wOiAxZW07XG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVhY3Rfcm91dGVyXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuY29uc3Qgc29saWRfMSA9IHJlcXVpcmUoXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCIpO1xuY29uc3QgcmVhY3RfdmlydHVhbGl6ZWRfMSA9IHJlcXVpcmUoXCJyZWFjdC12aXJ0dWFsaXplZFwiKTtcbmNvbnN0IE9wdGlvbkxpc3RJdGVtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvT3B0aW9uTGlzdC9PcHRpb25MaXN0SXRlbVwiKSk7XG5jb25zdCB1c2VSb3V0ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9ob29rcy91c2VSb3V0ZXJcIik7XG5jb25zdCBPcHRpb25zX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9PcHRpb25zLnN0eWxlXCIpO1xuY29uc3QgaW5kZXhfc3R5bGVfMSA9IHJlcXVpcmUoXCIuL2luZGV4LnN0eWxlXCIpO1xuY29uc3QgT3B0aW9uSGVhZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvT3B0aW9uSGVhZGVyL09wdGlvbkhlYWRlclwiKSk7XG5jb25zdCBzZW5kZXIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL21lc3NhZ2Uvc2VuZGVyL29wdGlvbnNcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNvbnN0IExpc3QgPSByZWFjdF92aXJ0dWFsaXplZF8xLkxpc3Q7XG5jb25zdCBBdXRvU2l6ZXIgPSByZWFjdF92aXJ0dWFsaXplZF8xLkF1dG9TaXplcjtcbmNvbnN0IENlbGxNZWFzdXJlciA9IHJlYWN0X3ZpcnR1YWxpemVkXzEuQ2VsbE1lYXN1cmVyO1xuY29uc3QgT3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBbZGVmYXVsdENvbG9yLCBzZXREZWZhdWx0Q29sb3JdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpO1xuICAgIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcbiAgICBjb25zdCBbcGFnZUluZm9zLCBzZXRQYWdlSW5mb3NdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiY3JlYXRlZF9hdFwiKTtcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIik7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSk7XG4gICAgY29uc3QgcXVlcnkgPSAoMCwgdXNlUm91dGVyXzEudXNlUXVlcnkpKCk7XG4gICAgY29uc3QgaGlzdG9yeSA9ICgwLCByZWFjdF9yb3V0ZXJfMS51c2VIaXN0b3J5KSgpO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlSW5mb0lkID0gcXVlcnkuZ2V0KFwiZmlsdGVyXCIpID8gTnVtYmVyKHF1ZXJ5LmdldChcImZpbHRlclwiKSkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY3VycmVudFBhZ2VJbmZvID0gKDAsIHJlYWN0XzEudXNlTWVtbykoKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFnZUluZm9zLmZpbmQoKHBhZ2VJbmZvKSA9PiBwYWdlSW5mby5pZCA9PT0gY3VycmVudFBhZ2VJbmZvSWQpO1xuICAgIH0sIFtwYWdlSW5mb3MsIGN1cnJlbnRQYWdlSW5mb0lkXSk7XG4gICAgLy8g57We44KK6L6844G/44CB44K944O844OI5riI44G/44Gu44Oh44Oi5LiA6KanXG4gICAgY29uc3QgZmlsdGVyZWROb3RlcyA9ICgwLCByZWFjdF8xLnVzZU1lbW8pKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm90ZXMgPSAoY3VycmVudFBhZ2VJbmZvSWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBub3Rlc1xuICAgICAgICAgICAgOiBub3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUucGFnZV9pbmZvX2lkID09PSBjdXJyZW50UGFnZUluZm9JZCkpLmZpbHRlcigobm90ZSkgPT4geyB2YXIgX2EsIF9iOyByZXR1cm4gc2VhcmNoVGV4dCA9PT0gXCJcIiB8fCAoKF9hID0gbm90ZS50aXRsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB8fCAoKF9iID0gbm90ZS5kZXNjcmlwdGlvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKHNlYXJjaFRleHQpKTsgfSk7XG4gICAgICAgIGlmIChzb3J0QnkgPT09IFwidXBkYXRlZF9hdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnRhcmdldE5vdGVzXS5zb3J0KChhLCBiKSA9PiB7IHZhciBfYSwgX2I7IHJldHVybiBuZXcgRGF0ZSgoX2EgPSBhID09PSBudWxsIHx8IGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGEudXBkYXRlZF9hdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCIxOTAwLzAxLzAxXCIpIDwgbmV3IERhdGUoKF9iID0gYiA9PT0gbnVsbCB8fCBiID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiLnVwZGF0ZWRfYXQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiMTkwMC8wMS8wMVwiKSA/IDEgOiAtMTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvcnRCeSA9PT0gXCJjcmVhdGVkX2F0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4udGFyZ2V0Tm90ZXNdLnNvcnQoKGEsIGIpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuIG5ldyBEYXRlKChfYSA9IGEgPT09IG51bGwgfHwgYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYS5jcmVhdGVkX2F0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIjE5MDAvMDEvMDFcIikgPCBuZXcgRGF0ZSgoX2IgPSBiID09PSBudWxsIHx8IGIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGIuY3JlYXRlZF9hdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCIxOTAwLzAxLzAxXCIpID8gMSA6IC0xOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc29ydEJ5ID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4udGFyZ2V0Tm90ZXNdLnNvcnQoKGEsIGIpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuICgoKF9hID0gYSA9PT0gbnVsbCB8fCBhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwiKSA+ICgoX2IgPSBiID09PSBudWxsIHx8IGIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGIudGl0bGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCIpID8gMSA6IC0xKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldE5vdGVzO1xuICAgIH0sIFtzZWFyY2hUZXh0LCBzb3J0QnksIG5vdGVzLCBjdXJyZW50UGFnZUluZm9JZF0pO1xuICAgIGNvbnN0IGZpbHRlclBhZ2VJbmZvcyA9ICgwLCByZWFjdF8xLnVzZU1lbW8pKCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQYWdlSW5mb3MgPSBzZWFyY2hUZXh0ID09PSBcIlwiXG4gICAgICAgICAgICA/IFsuLi5wYWdlSW5mb3NdXG4gICAgICAgICAgICA6IFsuLi5wYWdlSW5mb3NdLmZpbHRlcigocGFnZUluZm8pID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuICgoX2EgPSBwYWdlSW5mby5wYWdlX3VybCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB8fCAoKF9iID0gcGFnZUluZm8ucGFnZV90aXRsZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKHNlYXJjaFRleHQpKTsgfSk7XG4gICAgICAgIGlmIChzb3J0QnkgPT09IFwidXBkYXRlZF9hdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLmZpbHRlcmVkUGFnZUluZm9zXS5zb3J0KChhLCBiKSA9PiB7IHZhciBfYSwgX2I7IHJldHVybiBuZXcgRGF0ZSgoX2EgPSBhID09PSBudWxsIHx8IGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGEudXBkYXRlZF9hdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCIxOTAwLzAxLzAxXCIpIDwgbmV3IERhdGUoKF9iID0gYiA9PT0gbnVsbCB8fCBiID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiLnVwZGF0ZWRfYXQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiMTkwMC8wMS8wMVwiKSA/IDEgOiAtMTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvcnRCeSA9PT0gXCJjcmVhdGVkX2F0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4uZmlsdGVyZWRQYWdlSW5mb3NdLnNvcnQoKGEsIGIpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuIG5ldyBEYXRlKChfYSA9IGEgPT09IG51bGwgfHwgYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYS5jcmVhdGVkX2F0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIjE5MDAvMDEvMDFcIikgPCBuZXcgRGF0ZSgoX2IgPSBiID09PSBudWxsIHx8IGIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGIuY3JlYXRlZF9hdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCIxOTAwLzAxLzAxXCIpID8gMSA6IC0xOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc29ydEJ5ID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4uZmlsdGVyZWRQYWdlSW5mb3NdLnNvcnQoKGEsIGIpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuICgoX2EgPSBhID09PSBudWxsIHx8IGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGEucGFnZV90aXRsZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJcIikgPiAoKF9iID0gYiA9PT0gbnVsbCB8fCBiID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiLnBhZ2VfdGl0bGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCIpID8gMSA6IC0xOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQYWdlSW5mb3MucmV2ZXJzZSgpO1xuICAgIH0sIFtzZWFyY2hUZXh0LCBwYWdlSW5mb3MsIHNvcnRCeV0pO1xuICAgIGNvbnN0IG9uQ2hhbmdlU29ydCA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoZSkgPT4ge1xuICAgICAgICBzZXRTb3J0QnkoZS50YXJnZXQudmFsdWUpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9ICgwLCByZWFjdF8xLnVzZUNhbGxiYWNrKSgoZSkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgb25DbGlja0ZpbHRlciA9IChwYWdlSW5mb0lkKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgcGFnZUluZm9JZCA/IHF1ZXJ5LnNldChcImZpbHRlclwiLCBgJHtwYWdlSW5mb0lkfWApIDogcXVlcnkuZGVsZXRlKFwiZmlsdGVyXCIpO1xuICAgICAgICBzZXRTZWFyY2hUZXh0KFwiXCIpO1xuICAgICAgICBoaXN0b3J5LnB1c2goeyBzZWFyY2g6IHF1ZXJ5LnRvU3RyaW5nKCkgfSk7XG4gICAgfTtcbiAgICBjb25zdCBvblVwZGF0ZSA9IChub3RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGFnZV91cmwgPSAoX2EgPSBwYWdlSW5mb3MuZmluZCgocCkgPT4gcC5pZCA9PT0gbm90ZS5wYWdlX2luZm9faWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFnZV91cmw7XG4gICAgICAgICAgICBjb25zdCB7IG5vdGVzLCBwYWdlSW5mb3M6IG5ld1BhZ2VJbmZvcyB9ID0geWllbGQgc2VuZGVyLnNlbmRVcGRhdGVOb3RlKG5vdGUsIHBhZ2VfdXJsKTtcbiAgICAgICAgICAgIG5vdGVzICYmIHNldE5vdGVzKG5vdGVzKTtcbiAgICAgICAgICAgIG5ld1BhZ2VJbmZvcyAmJiBzZXRQYWdlSW5mb3MobmV3UGFnZUluZm9zKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgb25EZWxldGUgPSAobm90ZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgaWYgKGNvbmZpcm0oKDAsIHV0aWxzXzEubXNnKShcImNvbmZpcm1fcmVtb3ZlX25vdGVfbXNnXCIpKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlX3VybCA9IChfYiA9IHBhZ2VJbmZvcy5maW5kKChwKSA9PiBwLmlkID09PSBub3RlLnBhZ2VfaW5mb19pZCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wYWdlX3VybDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG5vdGVzLCBwYWdlSW5mb3M6IG5ld1BhZ2VJbmZvcyB9ID0geWllbGQgc2VuZGVyLnNlbmREZWxldGVOb3RlKG5vdGUsIHBhZ2VfdXJsKTtcbiAgICAgICAgICAgICAgICBub3RlcyAmJiBzZXROb3Rlcyhub3Rlcyk7XG4gICAgICAgICAgICAgICAgbmV3UGFnZUluZm9zICYmIHNldFBhZ2VJbmZvcyhuZXdQYWdlSW5mb3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgb25DbGlja0xpbmsgPSAodXJsKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt0YWJdID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyB1cmwsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodGFiID09PSBudWxsIHx8IHRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFiLmlkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnRhYnMudXBkYXRlKHRhYi5pZCwgeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgLy8g44Oh44Oi44GM5Y+k44GE5aC05ZCI44GM44GC44KL44Gf44KB5YaN6Kqt44G/6L6844G/44GV44Gb44KLXG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnRhYnMucmVsb2FkKHRhYi5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICBhbGVydCgoMCwgdXRpbHNfMS5tc2cpKFwiZmFpbGVkX2xvYWRfcGFnZV9tc2dcIikpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW2xpbmtFZGl0TW9kZSwgc2V0TGlua0VkaXRNb2RlXSA9ICgwLCByZWFjdF8xLnVzZVN0YXRlKShmYWxzZSk7XG4gICAgY29uc3QgW2VkaXRMaW5rLCBzZXRFZGl0TGlua10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoXCJcIik7XG4gICAgY29uc3QgaGFuZGxlRWRpdExpbmsgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc2V0RWRpdExpbmsoKF9hID0gY3VycmVudFBhZ2VJbmZvID09PSBudWxsIHx8IGN1cnJlbnRQYWdlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFBhZ2VJbmZvLnBhZ2VfdXJsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwiKTtcbiAgICAgICAgc2V0TGlua0VkaXRNb2RlKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2F2ZUxpbmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChlZGl0TGluayAhPT0gKGN1cnJlbnRQYWdlSW5mbyA9PT0gbnVsbCB8fCBjdXJyZW50UGFnZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRQYWdlSW5mby5wYWdlX3VybCkpIHtcbiAgICAgICAgICAgIHNlbmRlclxuICAgICAgICAgICAgICAgIC5zZW5kVXBkYXRlUGFnZUluZm8oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50UGFnZUluZm8pLCB7IHBhZ2VfdXJsOiBlZGl0TGluayB9KSlcbiAgICAgICAgICAgICAgICAudGhlbigoeyBwYWdlSW5mb3MgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlSW5mb3MpXG4gICAgICAgICAgICAgICAgICAgIHNldFBhZ2VJbmZvcyhwYWdlSW5mb3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TGlua0VkaXRNb2RlKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGNhY2hlID0gKDAsIHJlYWN0XzEudXNlTWVtbykoKCkgPT4gbmV3IHJlYWN0X3ZpcnR1YWxpemVkXzEuQ2VsbE1lYXN1cmVyQ2FjaGUoe1xuICAgICAgICBmaXhlZFdpZHRoOiB0cnVlLFxuICAgICAgICBkZWZhdWx0SGVpZ2h0OiA1MCxcbiAgICB9KSwgW10pO1xuICAgICgwLCByZWFjdF8xLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHNlbmRlclxuICAgICAgICAgICAgLnNlbmRGZXRjaEFsbE5vdGVzKClcbiAgICAgICAgICAgIC50aGVuKCh7IG5vdGVzLCBwYWdlSW5mb3MgfSkgPT4ge1xuICAgICAgICAgICAgbm90ZXMgJiYgc2V0Tm90ZXMobm90ZXMpO1xuICAgICAgICAgICAgcGFnZUluZm9zICYmIHNldFBhZ2VJbmZvcyhwYWdlSW5mb3MpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbmRlci5zZW5kRmV0Y2hTZXR0aW5nKCkudGhlbigoeyBzZXR0aW5nIH0pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHNldERlZmF1bHRDb2xvcigoX2EgPSBzZXR0aW5nID09PSBudWxsIHx8IHNldHRpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNldHRpbmcuZGVmYXVsdF9jb2xvcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICAoMCwgcmVhY3RfMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICAgICAgc2V0TGlua0VkaXRNb2RlKGZhbHNlKTtcbiAgICB9LCBbY3VycmVudFBhZ2VJbmZvSWRdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW5kZXhfc3R5bGVfMS5HbG9iYWxTdHlsZSwgbnVsbCksXG4gICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInAtNFwiIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpbmRleF9zdHlsZV8xLlNDb250YWluZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uSGVhZGVyXzEuZGVmYXVsdCwgeyBjdXJyZW50OiBcIm1lbW9zXCIgfSksXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW5kZXhfc3R5bGVfMS5TTWFpbiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW5kZXhfc3R5bGVfMS5TTWFpbkxlZnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NpZGVOYXYsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NpZGVOYXZJdGVtLCB7IGhyZWY6IFwiI1wiLCBvbkNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrRmlsdGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcIiRpc0FjdGl2ZVwiOiBjdXJyZW50UGFnZUluZm9JZCA9PT0gdW5kZWZpbmVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NpZGVOYXZJdGVtSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TU2lkZU5hdkl0ZW1UaXRsZSwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcInNob3dfYWxsX25vdGVfbXNnXCIpKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJQYWdlSW5mb3MubWFwKChwYWdlSW5mbykgPT4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IHBhZ2VJbmZvLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TU2lkZU5hdkl0ZW0sIHsgaHJlZjogXCIjXCIsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tGaWx0ZXIocGFnZUluZm8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCIkaXNBY3RpdmVcIjogcGFnZUluZm8uaWQgPT09IGN1cnJlbnRQYWdlSW5mb0lkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NpZGVOYXZJdGVtSGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TRmF2aWNvbkltYWdlLCB7IHNyYzogcGFnZUluZm8uZmF2X2ljb25fdXJsIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TU2lkZU5hdkl0ZW1UaXRsZSwgbnVsbCwgcGFnZUluZm8ucGFnZV90aXRsZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc19zdHlsZV8xLlNTaWRlTmF2SXRlbUxpbmssIG51bGwsIHBhZ2VJbmZvLnBhZ2VfdXJsKSkpKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW5kZXhfc3R5bGVfMS5TTWFpblJpZ2h0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW5kZXhfc3R5bGVfMS5TTWFpblJpZ2h0SW5uZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nICYmIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRMaXN0U2tlbHRvbiwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzTG9hZGluZyAmJiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW5kZXhfc3R5bGVfMS5TTWFpblJpZ2h0SGVhZGVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU0lucHV0V3JhcCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TSW5wdXRJY29uLCB7IGZpbGw6IFwicmdiYSgwLDAsMCwwLjQpXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU0lucHV0LCB7IHBsYWNlaG9sZGVyOiAoMCwgdXRpbHNfMS5tc2cpKFwic2VhcmNoX3F1ZXJ5X21zZ1wiKSwgb25DaGFuZ2U6IG9uQ2hhbmdlU2VhcmNoLCB2YWx1ZTogc2VhcmNoVGV4dCwgdHlwZTogXCJ0ZXh0XCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NlbGVjdFdyYXAsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NlbGVjdEljb24sIHsgZmlsbDogXCJyZ2JhKDAsMCwwLDAuNClcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TU2VsZWN0LCB7IG9uQ2hhbmdlOiBvbkNoYW5nZVNvcnQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcImNyZWF0ZWRfYXRcIiB9LCAoMCwgdXRpbHNfMS5tc2cpKFwiY3JlYXRlZF9hdF9zb3J0X29wdGlvblwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJ1cGRhdGVkX2F0XCIgfSwgKDAsIHV0aWxzXzEubXNnKShcInVwZGF0ZWRfYXRfc29ydF9vcHRpb25cIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwidGl0bGVcIiB9LCAoMCwgdXRpbHNfMS5tc2cpKFwidGl0bGVfc29ydF9vcHRpb25cIikpKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZUluZm8gJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TQ3VycmVudFBhZ2VBcmVhLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU0N1cnJlbnRQYWdlQXJlYUhlYWRlciwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TQ3VycmVudFBhZ2VGYXZpY29uSW1hZ2UsIHsgc3JjOiBjdXJyZW50UGFnZUluZm8uZmF2X2ljb25fdXJsIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc19zdHlsZV8xLlNDdXJyZW50UGFnZVRpdGxlLCBudWxsLCBjdXJyZW50UGFnZUluZm8ucGFnZV90aXRsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU0N1cnJlbnRQYWdlQ2xvc2VCdXR0b24sIHsgb25DbGljazogKCkgPT4gb25DbGlja0ZpbHRlcigpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoc29saWRfMS5YTWFya0ljb24sIHsgZmlsbDogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIiB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU0N1cnJlbnRQYWdlTGlua0FyZWEsIG51bGwsIGxpbmtFZGl0TW9kZSA/IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGZsZXg6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TUGFnZUxpbmtFZGl0SW5wdXQsIHsgdmFsdWU6IGVkaXRMaW5rLCBvbkNoYW5nZTogKGUpID0+IHNldEVkaXRMaW5rKGUudGFyZ2V0LnZhbHVlKSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1BhZ2VMaW5rRWRpdElucHV0QWxlcnQsIG51bGwsICgwLCB1dGlsc18xLm1zZykoXCJsaW5rX2VkaXRfbm90ZV9tc2dcIikpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TUGFnZUxpbmtFZGl0QnV0dG9uLCB7IG9uQ2xpY2s6IGhhbmRsZVNhdmVMaW5rIH0sICgwLCB1dGlsc18xLm1zZykoXCJzYXZlX21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1BhZ2VMaW5rRWRpdEJ1dHRvbiwgeyBzZWNvbmRhcnk6IHRydWUsIG9uQ2xpY2s6ICgpID0+IHNldExpbmtFZGl0TW9kZShmYWxzZSkgfSwgKDAsIHV0aWxzXzEubXNnKShcImNhbmNlbF9tc2dcIikpKSkgOiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc19zdHlsZV8xLlNDdXJyZW50UGFnZUxpbmssIHsgaHJlZjogXCIjXCIsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTGluaygoX2EgPSBjdXJyZW50UGFnZUluZm8ucGFnZV91cmwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgY3VycmVudFBhZ2VJbmZvLnBhZ2VfdXJsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TQ3VycmVudFBhZ2VMaW5rRWRpdEJ1dHRvbiwgeyBvbkNsaWNrOiBoYW5kbGVFZGl0TGluayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNvbGlkXzEuUGVuY2lsU3F1YXJlSWNvbiwgeyBmaWxsOiBcInJnYmEoMCwgMCwgMCwgMC40KVwiIH0pKSkpKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0xvYWRpbmcgJiYgZmlsdGVyZWROb3Rlcy5sZW5ndGggPT09IDAgJiYgKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TTm9Ob3RlVGV4dCwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcIm5vX25vdGVfbXNnXCIpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzTG9hZGluZyAmJiBmaWx0ZXJlZE5vdGVzLmxlbmd0aCAhPT0gMCAmJiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc19zdHlsZV8xLlNDYXJkTGlzdCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXV0b1NpemVyLCBudWxsLCAoeyBoZWlnaHQsIHdpZHRoIH0pID0+IChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMaXN0LCB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsIHJvd0NvdW50OiBmaWx0ZXJlZE5vdGVzLmxlbmd0aCwgZGVmZXJyZWRNZWFzdXJlbWVudENhY2hlOiBjYWNoZSwgcm93SGVpZ2h0OiBjYWNoZS5yb3dIZWlnaHQsIHJvd1JlbmRlcmVyOiAoeyBrZXksIHBhcmVudCwgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gZmlsdGVyZWROb3Rlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDZWxsTWVhc3VyZXIsIHsga2V5OiBub3RlLmlkLCBjYWNoZTogY2FjaGUsIHBhcmVudDogcGFyZW50LCBjb2x1bW5JbmRleDogMCwgcm93SW5kZXg6IGluZGV4IH0sICh7IG1lYXN1cmUsIHJlZ2lzdGVyQ2hpbGQgfSkgPT4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE9wdGlvbnNfc3R5bGVfMS5TQ2FyZExpc3RJdGVtLCB7IGlkOiBgbm90ZS0ke25vdGUucGFnZV9pbmZvX2lkfS0ke25vdGUuaWR9YCwgcmVmOiByZWdpc3RlckNoaWxkLCBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uTGlzdEl0ZW1fMS5kZWZhdWx0LCB7IG5vdGU6IG5vdGUsIGRlZmF1bHRDb2xvcjogZGVmYXVsdENvbG9yLCBzaG93UGFnZUluZm86ICFjdXJyZW50UGFnZUluZm8sIGN1cnJlbnRQYWdlSW5mb0lkOiBjdXJyZW50UGFnZUluZm9JZCwgcGFnZUluZm86IHBhZ2VJbmZvcy5maW5kKChwKSA9PiBwLmlkID09PSBub3RlLnBhZ2VfaW5mb19pZCksIG9uRGVsZXRlOiBvbkRlbGV0ZSwgb25VcGRhdGU6IG9uVXBkYXRlLCBvbkNsaWNrTGluazogb25DbGlja0xpbmssIG9uQ2xpY2tGaWx0ZXI6IG9uQ2xpY2tGaWx0ZXIsIG1lYXN1cmU6IG1lYXN1cmUgfSkpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSkpKSkpKSkpKSkpO1xufTtcbmNvbnN0IENhcmRMaXN0U2tlbHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiBcImZsZXhcIiB9IH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NrZWxldG9uLCB7IHN0eWxlOiB7IGJvcmRlclJhZGl1czogXCI5OTlyZW1cIiwgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiIH0sIHZhcmlhbnQ6IFwicm91bmRlZFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogMzYgfSksXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25zX3N0eWxlXzEuU1NrZWxldG9uLCB7IHZhcmlhbnQ6IFwicm91bmRlZFwiLCB3aWR0aDogMTkyLCBoZWlnaHQ6IDM2IH0pKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc19zdHlsZV8xLlNTa2VsZXRvbiwgeyB2YXJpYW50OiBcInJvdW5kZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IDEwMCB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc19zdHlsZV8xLlNTa2VsZXRvbiwgeyB2YXJpYW50OiBcInJvdW5kZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IDEwMCB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uc19zdHlsZV8xLlNTa2VsZXRvbiwgeyB2YXJpYW50OiBcInJvdW5kZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IDEwMCB9KSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE9wdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU1NldHRpbmdJdGVtQ29udGVudCA9IGV4cG9ydHMuU1NldHRpbmdJdGVtVGl0bGUgPSBleHBvcnRzLlNTZXR0aW5nSXRlbSA9IHZvaWQgMDtcbmNvbnN0IHN0eWxlZF9jb21wb25lbnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpKTtcbmV4cG9ydHMuU1NldHRpbmdJdGVtID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbmA7XG5leHBvcnRzLlNTZXR0aW5nSXRlbVRpdGxlID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0LmRpdiBgXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbmA7XG5leHBvcnRzLlNTZXR0aW5nSXRlbUNvbnRlbnQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBgO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IGluZGV4X3N0eWxlXzEgPSByZXF1aXJlKFwiLi9pbmRleC5zdHlsZVwiKTtcbmNvbnN0IFNldHRpbmdfc3R5bGVfMSA9IHJlcXVpcmUoXCIuL1NldHRpbmcuc3R5bGVcIik7XG5jb25zdCBPcHRpb25IZWFkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9PcHRpb25IZWFkZXIvT3B0aW9uSGVhZGVyXCIpKTtcbmNvbnN0IHNlbmRlciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vbWVzc2FnZS9zZW5kZXIvb3B0aW9uc1wiKSk7XG5jb25zdCBDb2xvclBpY2tlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL0NvbG9yUGlja2VyL0NvbG9yUGlja2VyXCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jb25zdCB1c2VOb3RlRG93bmxvYWRfMSA9IHJlcXVpcmUoXCIuLi8uLi9ob29rcy91c2VOb3RlRG93bmxvYWRcIik7XG5jb25zdCBCdXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCIpKTtcbmNvbnN0IFVzYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvVXNhZ2UvVXNhZ2VcIikpO1xuY29uc3QgU2V0dGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBbZGVmYXVsdENvbG9yLCBzZXREZWZhdWx0Q29sb3JdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFwiXCIpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZmFsc2UpO1xuICAgIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcbiAgICBjb25zdCBbcGFnZUluZm9zLCBzZXRQYWdlSW5mb3NdID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKFtdKTtcbiAgICBjb25zdCB7IGhhbmRsZURvd25sb2FkIH0gPSAoMCwgdXNlTm90ZURvd25sb2FkXzEudXNlTm90ZURvd25sb2FkKSgpO1xuICAgIGNvbnN0IG9uQ2xpY2tEZWZhdWx0Q29sb3IgPSAoY29sb3IpID0+IHtcbiAgICAgICAgc2VuZGVyLnNlbmRVcGRhdGVEZWZhdWx0Q29sb3IoY29sb3IpLnRoZW4oKHsgc2V0dGluZyB9KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBzZXREZWZhdWx0Q29sb3IoKF9hID0gc2V0dGluZyA9PT0gbnVsbCB8fCBzZXR0aW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXR0aW5nLmRlZmF1bHRfY29sb3IpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZURvd25sb2FkQ1NWID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb3B5SGVhZCA9IFwiaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsXFxuXCI7XG4gICAgICAgIGNvbnN0IGNvcHlUZXh0ID0gbm90ZXNcbiAgICAgICAgICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiBgJHtub3RlLmlkfSwgJHtub3RlLnRpdGxlID8gYFwiJHtub3RlLnRpdGxlfVwiYCA6IFwiXCJ9LCAke25vdGUuZGVzY3JpcHRpb24gPyBgXCIke25vdGUuZGVzY3JpcHRpb259XCJgIDogXCJcIn0sICR7KF9hID0gcGFnZUluZm9zLmZpbmQoKHBhZ2VJbmZvKSA9PiBwYWdlSW5mby5pZCA9PT0gbm90ZS5wYWdlX2luZm9faWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFnZV91cmx9YDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKFwiXFxuXCIpO1xuICAgICAgICBoYW5kbGVEb3dubG9hZChjb3B5SGVhZCArIGNvcHlUZXh0KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZURvd25sb2FkVGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29weVRleHQgPSBub3Rlc1xuICAgICAgICAgICAgLm1hcCgobm90ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICByZXR1cm4gYGlkOiAke25vdGUuaWR9XG50aXRsZTogJHsoX2EgPSBub3RlLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwifVxucGFnZTogJHsoX2IgPSBwYWdlSW5mb3MuZmluZCgocGFnZUluZm8pID0+IHBhZ2VJbmZvLmlkID09PSBub3RlLnBhZ2VfaW5mb19pZCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wYWdlX3VybH1cbmNvbnRlbnQ6XG4keyhfYyA9IG5vdGUuZGVzY3JpcHRpb24pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiXCJ9YDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKFwiXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCIpO1xuICAgICAgICBoYW5kbGVEb3dubG9hZChjb3B5VGV4dCwgXCJ0ZXh0L3BsYWluXCIsIFwidHh0XCIpO1xuICAgIH07XG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2VuZGVyXG4gICAgICAgICAgICAuc2VuZEZldGNoU2V0dGluZygpXG4gICAgICAgICAgICAudGhlbigoeyBzZXR0aW5nIH0pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHNldERlZmF1bHRDb2xvcigoX2EgPSBzZXR0aW5nID09PSBudWxsIHx8IHNldHRpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNldHRpbmcuZGVmYXVsdF9jb2xvcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJcIik7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VuZGVyLnNlbmRGZXRjaEFsbE5vdGVzKCkudGhlbigoeyBub3RlcywgcGFnZUluZm9zIH0pID0+IHtcbiAgICAgICAgICAgIG5vdGVzICYmIHNldE5vdGVzKG5vdGVzKTtcbiAgICAgICAgICAgIHBhZ2VJbmZvcyAmJiBzZXRQYWdlSW5mb3MocGFnZUluZm9zKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpbmRleF9zdHlsZV8xLkdsb2JhbFN0eWxlLCBudWxsKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicC00XCIgfSxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGluZGV4X3N0eWxlXzEuU0NvbnRhaW5lciwgbnVsbCxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChPcHRpb25IZWFkZXJfMS5kZWZhdWx0LCB7IGN1cnJlbnQ6IFwic2V0dGluZ1wiIH0pLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGluZGV4X3N0eWxlXzEuU01haW4sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGluZGV4X3N0eWxlXzEuU01haW5Db250ZW50LCBudWxsLCAhaXNMb2FkaW5nICYmIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF8xLmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZXR0aW5nX3N0eWxlXzEuU1NldHRpbmdJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNldHRpbmdfc3R5bGVfMS5TU2V0dGluZ0l0ZW1UaXRsZSwgbnVsbCwgKDAsIHV0aWxzXzEubXNnKShcImRlZmF1bHRfY29sb3JfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZXR0aW5nX3N0eWxlXzEuU1NldHRpbmdJdGVtQ29udGVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29sb3JQaWNrZXJfMS5kZWZhdWx0LCB7IGNvbG9yOiBkZWZhdWx0Q29sb3IsIG9uQ2hhbmdlQ29sb3I6IG9uQ2xpY2tEZWZhdWx0Q29sb3IgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNldHRpbmdfc3R5bGVfMS5TU2V0dGluZ0l0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2V0dGluZ19zdHlsZV8xLlNTZXR0aW5nSXRlbVRpdGxlLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwiZXhwb3J0X21zZ1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2V0dGluZ19zdHlsZV8xLlNTZXR0aW5nSXRlbUNvbnRlbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbl8xLmRlZmF1bHQsIHsgb25DbGljazogaGFuZGxlRG93bmxvYWRDU1YgfSwgKDAsIHV0aWxzXzEubXNnKShcImNzdl9kb3dubG9hZF9tc2dcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCdXR0b25fMS5kZWZhdWx0LCB7IG9uQ2xpY2s6IGhhbmRsZURvd25sb2FkVGV4dCwgc3R5bGU6IHsgbWFyZ2luTGVmdDogXCIwLjVyZW1cIiB9IH0sICgwLCB1dGlsc18xLm1zZykoXCJ0ZXh0X2Rvd25sb2FkX21zZ1wiKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNldHRpbmdfc3R5bGVfMS5TU2V0dGluZ0l0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2V0dGluZ19zdHlsZV8xLlNTZXR0aW5nSXRlbVRpdGxlLCBudWxsLCAoMCwgdXRpbHNfMS5tc2cpKFwiaG93X3RvX3VzZV9wYWdlX2xpbmtfbXNnXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZXR0aW5nX3N0eWxlXzEuU1NldHRpbmdJdGVtQ29udGVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVXNhZ2VfMS5kZWZhdWx0LCBudWxsKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2V0dGluZ19zdHlsZV8xLlNTZXR0aW5nSXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTZXR0aW5nX3N0eWxlXzEuU1NldHRpbmdJdGVtVGl0bGUsIG51bGwsICgwLCB1dGlsc18xLm1zZykoXCJtYWtlcl9tc2dcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNldHRpbmdfc3R5bGVfMS5TU2V0dGluZ0l0ZW1Db250ZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vdGFrdW1pX2J2XCIsIHRhcmdldDogXCJfYmxhbmtcIiB9LCBcIkB0YWt1bWlfYnZcIikpKSkpKSkpKSkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNldHRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TTWFpblJpZ2h0SGVhZGVyID0gZXhwb3J0cy5TTWFpbkNvbnRlbnQgPSBleHBvcnRzLlNNYWluUmlnaHRJbm5lciA9IGV4cG9ydHMuU01haW5SaWdodCA9IGV4cG9ydHMuU01haW5MZWZ0ID0gZXhwb3J0cy5TTWFpbiA9IGV4cG9ydHMuU0NvbnRhaW5lciA9IGV4cG9ydHMuR2xvYmFsU3R5bGUgPSB2b2lkIDA7XG5jb25zdCBzdHlsZWRfY29tcG9uZW50c18xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKSk7XG5jb25zdCByZXNldENTU18xID0gcmVxdWlyZShcIi4uLy4uL3Jlc2V0Q1NTXCIpO1xuZXhwb3J0cy5HbG9iYWxTdHlsZSA9ICgwLCBzdHlsZWRfY29tcG9uZW50c18xLmNyZWF0ZUdsb2JhbFN0eWxlKSBgXG4gICR7cmVzZXRDU1NfMS5yZXNldENTU31cblxuICBib2R5IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAvKiBUT0RPIGRhcmsgdGhlbWUgaHR0cHM6Ly9tZWRpdW0uY29tL2JpZ3BhbmRhLWVuZ2luZWVyaW5nL2RhcmstdGhlbWUtd2l0aC1zdHlsZWQtY29tcG9uZW50cy1hNTczZGQ4OThlMmEgKi9cbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC8qIGJvZHkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH0gKi9cbiAgfVxuYDtcbmV4cG9ydHMuU0NvbnRhaW5lciA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuZXhwb3J0cy5TTWFpbiA9IHN0eWxlZF9jb21wb25lbnRzXzEuZGVmYXVsdC5kaXYgYFxuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmNjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDBkdmg7XG5gO1xuZXhwb3J0cy5TTWFpbkxlZnQgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDIuNzVlbTtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aWR0aDogMThlbTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHotaW5kZXg6IDE7XG5gO1xuZXhwb3J0cy5TTWFpblJpZ2h0ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0Lm1haW4gYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDRlbSAyZW0gMCAxOWVtO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuZXhwb3J0cy5TTWFpblJpZ2h0SW5uZXIgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcbmV4cG9ydHMuU01haW5Db250ZW50ID0gc3R5bGVkX2NvbXBvbmVudHNfMS5kZWZhdWx0Lm1haW4gYFxuICBwYWRkaW5nOiA0ZW0gMmVtIDEuNWVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0NHJlbTtcbmA7XG5leHBvcnRzLlNNYWluUmlnaHRIZWFkZXIgPSBzdHlsZWRfY29tcG9uZW50c18xLmRlZmF1bHQuZGl2IGBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVhY3RfZG9tXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5jb25zdCByZWFjdF9yb3V0ZXJfZG9tXzEgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbmNvbnN0IHJlYWN0X3JvdXRlcl8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcbmNvbnN0IE9wdGlvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9PcHRpb25zXCIpKTtcbmNvbnN0IFNldHRpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TZXR0aW5nXCIpKTtcbnJlYWN0X2RvbV8xLmRlZmF1bHQucmVuZGVyKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5Ccm93c2VyUm91dGVyLCBudWxsLFxuICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5TdHJpY3RNb2RlLCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfMS5Td2l0Y2gsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfMS5Sb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogXCIvbWVtb3MuaHRtbFwiLCBjb21wb25lbnQ6IE9wdGlvbnNfMS5kZWZhdWx0IH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyXzEuUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL3NldHRpbmcuaHRtbFwiLCBjb21wb25lbnQ6IFNldHRpbmdfMS5kZWZhdWx0IH0pLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyXzEuUm91dGUsIHsgcGF0aDogXCIqXCIsIGNvbXBvbmVudDogKCkgPT4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyXzEuUmVkaXJlY3QsIHsgdG86IFwiL21lbW9zLmh0bWxcIiB9KSB9KSkpKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNlbmRVcGRhdGVEZWZhdWx0Q29sb3IgPSBleHBvcnRzLnNlbmRGZXRjaFNldHRpbmcgPSBleHBvcnRzLnNlbmRVcGRhdGVQYWdlSW5mbyA9IGV4cG9ydHMuc2VuZEZldGNoQWxsTm90ZXMgPSBleHBvcnRzLnNlbmREZWxldGVOb3RlID0gZXhwb3J0cy5zZW5kVXBkYXRlTm90ZSA9IHZvaWQgMDtcbmNvbnN0IGFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zXCIpO1xuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcbi8qKlxuICog44Kq44OX44K344On44Oz44Oa44O844K444GL44KJ6YCB5L+h44GZ44KL44Oh44OD44K744O844K4XG4gKi9cbmNvbnN0IHNlbmRVcGRhdGVOb3RlID0gKG5vdGUsIHVybCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBiYXNlXzEuc2VuZEFjdGlvbikoYWN0aW9uc18xLlVQREFURV9OT1RFLCBhY3Rpb25zXzEuT1BUSU9OUywgeyB1cmwsIG5vdGUgfSk7XG59KTtcbmV4cG9ydHMuc2VuZFVwZGF0ZU5vdGUgPSBzZW5kVXBkYXRlTm90ZTtcbmNvbnN0IHNlbmREZWxldGVOb3RlID0gKG5vdGUsIHVybCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBiYXNlXzEuc2VuZEFjdGlvbikoYWN0aW9uc18xLkRFTEVURV9OT1RFLCBhY3Rpb25zXzEuT1BUSU9OUywgeyB1cmwsIG5vdGUgfSk7XG59KTtcbmV4cG9ydHMuc2VuZERlbGV0ZU5vdGUgPSBzZW5kRGVsZXRlTm90ZTtcbmNvbnN0IHNlbmRGZXRjaEFsbE5vdGVzID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBiYXNlXzEuc2VuZEFjdGlvbikoYWN0aW9uc18xLkdFVF9BTExfTk9URVNfQU5EX1BBR0VfSU5GTywgYWN0aW9uc18xLk9QVElPTlMpO1xufSk7XG5leHBvcnRzLnNlbmRGZXRjaEFsbE5vdGVzID0gc2VuZEZldGNoQWxsTm90ZXM7XG5jb25zdCBzZW5kVXBkYXRlUGFnZUluZm8gPSAocGFnZUluZm8pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCAoMCwgYmFzZV8xLnNlbmRBY3Rpb24pKGFjdGlvbnNfMS5VUERBVEVfTk9URV9JTkZPLCBhY3Rpb25zXzEuT1BUSU9OUywgeyBwYWdlSW5mbyB9KTtcbn0pO1xuZXhwb3J0cy5zZW5kVXBkYXRlUGFnZUluZm8gPSBzZW5kVXBkYXRlUGFnZUluZm87XG5jb25zdCBzZW5kRmV0Y2hTZXR0aW5nID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBiYXNlXzEuc2VuZEFjdGlvbikoYWN0aW9uc18xLkdFVF9TRVRUSU5HLCBhY3Rpb25zXzEuT1BUSU9OUyk7XG59KTtcbmV4cG9ydHMuc2VuZEZldGNoU2V0dGluZyA9IHNlbmRGZXRjaFNldHRpbmc7XG5jb25zdCBzZW5kVXBkYXRlRGVmYXVsdENvbG9yID0gKGRlZmF1bHRDb2xvcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkICgwLCBiYXNlXzEuc2VuZEFjdGlvbikoYWN0aW9uc18xLlVQREFURV9ERUZBVUxUX0NPTE9SLCBhY3Rpb25zXzEuT1BUSU9OUywgeyBkZWZhdWx0Q29sb3IgfSk7XG59KTtcbmV4cG9ydHMuc2VuZFVwZGF0ZURlZmF1bHRDb2xvciA9IHNlbmRVcGRhdGVEZWZhdWx0Q29sb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuREVBVUxUX05PVEVfSEVJR0hUID0gZXhwb3J0cy5ERUFVTFRfTk9URV9XSURUSCA9IHZvaWQgMDtcbmV4cG9ydHMuREVBVUxUX05PVEVfV0lEVEggPSAzMDA7XG5leHBvcnRzLkRFQVVMVF9OT1RFX0hFSUdIVCA9IDE4MDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJvcHRpb25zXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2dpdGh1Yl9sYW5ndWFnZV9leHRlbnNpb25cIl0gPSBzZWxmW1wid2VicGFja0NodW5rZ2l0aHViX2xhbmd1YWdlX2V4dGVuc2lvblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvT3B0aW9ucy9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
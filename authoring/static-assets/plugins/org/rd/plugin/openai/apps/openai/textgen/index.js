const React = craftercms.libs.React;
const { useState } = craftercms.libs.React;
const { useSelector, useDispatch } = craftercms.libs.ReactRedux;
const { Tooltip, DialogContent, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, DialogActions, Button: Button$1, Box, Card, CardHeader, CardMedia, DialogContentText, IconButton: IconButton$1 } = craftercms.libs.MaterialUI;
const IconButton = craftercms.libs.MaterialUI.IconButton && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.IconButton, 'default') ? craftercms.libs.MaterialUI.IconButton['default'] : craftercms.libs.MaterialUI.IconButton;
const Button = craftercms.libs.MaterialUI.Button && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Button, 'default') ? craftercms.libs.MaterialUI.Button['default'] : craftercms.libs.MaterialUI.Button;
const SystemIcon = craftercms.components.SystemIcon && Object.prototype.hasOwnProperty.call(craftercms.components.SystemIcon, 'default') ? craftercms.components.SystemIcon['default'] : craftercms.components.SystemIcon;
const { createAction } = craftercms.libs.ReduxToolkit;
const Skeleton = craftercms.libs.MaterialUI.Skeleton && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Skeleton, 'default') ? craftercms.libs.MaterialUI.Skeleton['default'] : craftercms.libs.MaterialUI.Skeleton;
const ContentCopyRoundedIcon = craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/ContentCopyRounded');
const { get } = craftercms.utils.ajax;
const { copyToClipboard } = craftercms.utils.system;
const ListItem = craftercms.libs.MaterialUI.ListItem && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.ListItem, 'default') ? craftercms.libs.MaterialUI.ListItem['default'] : craftercms.libs.MaterialUI.ListItem;
const List = craftercms.libs.MaterialUI.List && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.List, 'default') ? craftercms.libs.MaterialUI.List['default'] : craftercms.libs.MaterialUI.List;
const FormControl = craftercms.libs.MaterialUI.FormControl && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.FormControl, 'default') ? craftercms.libs.MaterialUI.FormControl['default'] : craftercms.libs.MaterialUI.FormControl;

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function useActiveSiteId() {
  return useSelector((state) => state.sites.active);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function useEnv() {
  return useSelector((state) => state.env);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
// endregion
// region Widget Dialog
const showWidgetDialog = /*#__PURE__*/ createAction('SHOW_WIDGET_DIALOG');
// endregion

function GenerateContent(props) {
    // Note: All toolbar child components receive the current preview item as a prop automatically. If this component will be used elsewhere, use useCurrentPreviewItem() hook.
    var item = props.item, useIcon = props.useIcon;
    var dispatch = useDispatch();
    useActiveSiteId();
    useEnv();
    var label = 'Generate Content'; //readonly ? 'View' : 'Edit';
    var iconId = item
        ? '@mui/icons-material/PsychologyRounded'
        : '@mui/icons-material/HourglassEmptyOutlined';
    var handleClick = function (event) {
        dispatch(showWidgetDialog({
            title: 'AI Generated Content Assistant',
            extraProps: props,
            widget: {
                id: 'org.rd.plugin.openai.dialog'
            }
        }));
    };
    return useIcon ? (React.createElement(Tooltip, { title: item ? "".concat(label) : '' },
        React.createElement(IconButton, { size: "small", onClick: handleClick, disabled: !item },
            React.createElement(SystemIcon, { icon: { id: iconId } })))) : (React.createElement(Button, { size: "small", variant: "text", onClick: handleClick, disabled: !item }, label));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const showSystemNotification = /*#__PURE__*/ createAction('SHOW_SYSTEM_NOTIFICATION');

function AnswerSkeletonItem() {
    return (React.createElement(ListItem, { style: { height: '25px' } },
        React.createElement(Skeleton, { variant: "rectangular", width: "20px" }),
        React.createElement(Skeleton, { variant: "text", style: { margin: '0 10px', width: "".concat(rand(40, 70), "%") } })));
}
function AnswerSkeletonList(props) {
    var _a = props.numOfItems, numOfItems = _a === void 0 ? 5 : _a;
    var items = new Array(numOfItems).fill(null);
    return (React.createElement(List, { component: "nav", disablePadding: true }, items.map(function (value, i) { return (React.createElement(AnswerSkeletonItem, { key: i })); })));
}
var AnswerSkeleton = React.memo(function (_a) {
    var _b = _a.numOfItems, numOfItems = _b === void 0 ? 5 : _b, _c = _a.renderBody, renderBody = _c === void 0 ? false : _c;
    return (React.createElement("div", null, renderBody && React.createElement(AnswerSkeletonList, { numOfItems: numOfItems })));
});
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function GenerateContentDialog(props) {
    var dispatch = useDispatch();
    var siteId = useActiveSiteId();
    var _a = useState(); _a[0]; var setError = _a[1];
    var _b = useState(false), fetching = _b[0], setFetching = _b[1];
    var _c = useState([]), generatedContent = _c[0], setGeneratedContent = _c[1];
    var _d = React.useState('Write a story'), ask = _d[0], setAsk = _d[1];
    var _e = React.useState('complete'), mode = _e[0], setMode = _e[1];
    var PLUGIN_SERVICE_BASE = '/studio/api/2/plugin/script/plugins/org/rd/plugin/openai/openai';
    var handleAskChange = function (event) {
        setAsk(event.target.value);
    };
    var handleCopyResult = function (index) {
        copyToClipboard(generatedContent[index]);
        dispatch(showSystemNotification({
            message: 'Copied',
            options: { variant: 'success', autoHideDuration: 1500 }
        }));
    };
    var handleGenerate = function () {
        var serviceUrl = "".concat(PLUGIN_SERVICE_BASE, "/gentext.json?siteId=").concat(siteId, "&ask=").concat(ask, "&mode=").concat(mode);
        setFetching(true);
        get(serviceUrl).subscribe({
            next: function (response) {
                console.log(response);
                setFetching(false);
                setGeneratedContent(__spreadArray([], response.response.result, true));
            },
            error: function (e) {
                var _a, _b;
                console.error(e);
                setFetching(false);
                setError((_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.response) !== null && _b !== void 0 ? _b : { code: '?', message: 'Unknown Error. Check browser console.' });
            }
        });
    };
    function handleModeChange(event, value) {
        setMode(value);
        setGeneratedContent([]);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(DialogContent, null,
            React.createElement(FormControl, null,
                React.createElement(FormLabel, { id: "demo-row-radio-buttons-group-label" }, "Generate"),
                React.createElement(RadioGroup, { row: true, "aria-labelledby": "demo-row-radio-buttons-group-label", name: "row-radio-buttons-group", value: mode, onChange: handleModeChange },
                    React.createElement(FormControlLabel, { value: "complete", control: React.createElement(Radio, null), label: "Text" }),
                    React.createElement(FormControlLabel, { value: "image", control: React.createElement(Radio, null), label: "Image" }))),
            React.createElement(FormControl, { margin: "normal", fullWidth: true },
                React.createElement(TextField, { defaultValue: "", id: "outlined-basic", label: "How can I help?", variant: "outlined", onChange: handleAskChange })),
            React.createElement(DialogActions, null,
                React.createElement(Button$1, { onClick: handleGenerate, variant: "outlined", sx: { mr: 1 } }, "Generate")),
            mode === 'image' ? (React.createElement(Box, { display: "flex" },
                React.createElement("section", null,
                    React.createElement("div", null, fetching === false ? (generatedContent.map(function (item) { return [
                        React.createElement(Card, null,
                            React.createElement(CardHeader, null),
                            React.createElement(CardMedia, { image: item, sx: { width: '500px', height: '500px', margin: '30px', m: '15px', border: '1px solid' } }),
                            React.createElement("a", { download: item, href: item, target: "_blank", style: { paddingBottom: '10px', paddingTop: '20px' } }, "Download this image"))
                    ]; })) : (React.createElement(React.Fragment, null)))))) : (React.createElement(DialogContentText, null,
                React.createElement("ol", null, generatedContent &&
                    Object.values(generatedContent).map(function (content, contentIndex) {
                        return (React.createElement("li", null,
                            React.createElement(TextField, { sx: {
                                    color: 'rgb(0, 122, 255)',
                                    width: '90%',
                                    'padding-bottom': '10px',
                                    'padding-right': '20px',
                                    mb: 2
                                }, value: content, multiline: true }),
                            React.createElement(IconButton$1, { onClick: function () { return handleCopyResult(contentIndex); }, color: "primary", "aria-label": "Copy to Clipboard", component: "label" },
                                React.createElement(ContentCopyRoundedIcon, null))));
                    })))),
            React.createElement(AnswerSkeleton, { numOfItems: 5, renderBody: fetching }))));
}

var plugin = {
    locales: undefined,
    scripts: undefined,
    stylesheets: undefined,
    id: 'org.rd.plugin.openai',
    widgets: {
        'org.rd.plugin.openai.GenerateContent': GenerateContent,
        'org.rd.plugin.openai.dialog': GenerateContentDialog
    }
};

export { GenerateContent, GenerateContentDialog, plugin as default };

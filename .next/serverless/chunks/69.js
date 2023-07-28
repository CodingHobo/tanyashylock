exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 17355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendPost = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(53731);
const store_1 = __webpack_require__(71742);
const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(target));
        });
        xhr.open('POST', store_1.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};
exports.sendPost = sendPost;


/***/ }),

/***/ 70427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
const init_1 = __webpack_require__(77324);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return init_1.init; } });
const send_1 = __webpack_require__(33314);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return send_1.send; } });
const sendForm_1 = __webpack_require__(64126);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return sendForm_1.sendForm; } });
exports.ZP = {
    init: init_1.init,
    send: send_1.send,
    sendForm: sendForm_1.sendForm,
};


/***/ }),

/***/ 77324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const store_1 = __webpack_require__(71742);
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    store_1.store._userID = userID;
    store_1.store._origin = origin;
};
exports.init = init;


/***/ }),

/***/ 33314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.send = void 0;
const store_1 = __webpack_require__(71742);
const validateParams_1 = __webpack_require__(99086);
const sendPost_1 = __webpack_require__(17355);
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || store_1.store._userID;
    validateParams_1.validateParams(uID, serviceID, templateID);
    const params = {
        lib_version: '3.2.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return sendPost_1.sendPost('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};
exports.send = send;


/***/ }),

/***/ 64126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendForm = void 0;
const store_1 = __webpack_require__(71742);
const validateParams_1 = __webpack_require__(99086);
const sendPost_1 = __webpack_require__(17355);
const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || store_1.store._userID;
    const currentForm = findHTMLForm(form);
    validateParams_1.validateParams(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.2.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return sendPost_1.sendPost('/api/v1.0/email/send-form', formData);
};
exports.sendForm = sendForm;


/***/ }),

/***/ 53731:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = void 0;
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ 71742:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
exports.store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ 99086:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateParams = void 0;
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};
exports.validateParams = validateParams;


/***/ }),

/***/ 90638:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = dynamic;
exports.noSSR = noSSR;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(92648)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(67294));
var _loadable = _interop_require_default(__webpack_require__(14302));
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadable.default;
    let loadableOptions = (options == null ? void 0 : options.suspense) ? {} : {
        // A loading component is not required, so we default it
        loading: ({ error , isLoading , pastDelay  })=>{
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === "object") {
        loadableOptions = _extends({}, loadableOptions, dynamicOptions);
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = _extends({}, loadableOptions, options);
    // Error if Fizz rendering is not enabled and `suspense` option is set to true
    if (false) {}
    if (loadableOptions.suspense) {
        if (false) {}
        delete loadableOptions.ssr;
        delete loadableOptions.loading;
    }
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = _extends({}, loadableOptions, loadableOptions.loadableGenerated);
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false}).
    // skip `ssr` for suspense mode and opt-in React.lazy directly
    if (typeof loadableOptions.ssr === "boolean" && !loadableOptions.suspense) {
        if (!loadableOptions.ssr) {
            delete loadableOptions.ssr;
            return noSSR(loadableFn, loadableOptions);
        }
        delete loadableOptions.ssr;
    }
    return loadableFn(loadableOptions);
}
"client";
const isServerSide = "undefined" === "undefined";
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    // This check is necessary to prevent react-loadable from initializing on the server
    if (!isServerSide) {
        return LoadableInitializer(loadableOptions);
    }
    const Loading = loadableOptions.loading;
    // This will only be rendered on the server side
    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {
            error: null,
            isLoading: true,
            pastDelay: false,
            timedOut: false
        });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dynamic.js.map


/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90638)


/***/ })

};
;
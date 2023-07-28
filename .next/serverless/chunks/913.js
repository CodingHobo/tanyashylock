"use strict";
exports.id = 913;
exports.ids = [913];
exports.modules = {

/***/ 78695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js

const PreLoader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: "loading",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "load-circle",
            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "one"
            })
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    const { 0: load , 1: setLoad  } = (0,react.useState)(true);
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            setLoad(false);
        }, 1000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Tanya Shylock - Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        type: "image/x-icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/bootstrap/css/bootstrap.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/font-awesome/css/all.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/et-line/style.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/themify-icons/themify-icons.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/owl-carousel/css/owl.carousel.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/magnific/magnific-popup.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/scroll/jquery.mCustomScrollbar.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/css/style.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            load && /*#__PURE__*/ jsx_runtime.jsx(layout_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-c67a75d1b6f99dc8.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/M5SL4dW9OB8sScJFfwXtF/_buildManifest.js","static/M5SL4dW9OB8sScJFfwXtF/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/664-6863c832d33388a7.js","static/chunks/586-30a29d6a3470ddab.js","static/chunks/824-05eba4fe1a65036f.js","static/chunks/648-cac140b678ee7ef0.js","static/chunks/pages/index-8df7929eb4a2a153.js"],"/_app":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/css/69a422f9d056311b.css","static/chunks/pages/_app-c67db5d042d636c6.js"],"/_error":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/pages/_error-a4ba2246ff8fb532.js"],"/blog":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/664-6863c832d33388a7.js","static/chunks/pages/blog-fdf29a4690042029.js"],"/demo":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/664-6863c832d33388a7.js","static/chunks/pages/demo-6ac205cc5e2a9f40.js"],"/index-glitch":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/664-6863c832d33388a7.js","static/chunks/586-30a29d6a3470ddab.js","static/chunks/648-cac140b678ee7ef0.js","static/chunks/602-20b6cf960325a14f.js","static/chunks/pages/index-glitch-5f966cdad1c5e25c.js"],"/index-video":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/664-6863c832d33388a7.js","static/chunks/586-30a29d6a3470ddab.js","static/chunks/648-cac140b678ee7ef0.js","static/chunks/602-20b6cf960325a14f.js","static/chunks/pages/index-video-cbf32f7a424e3fe3.js"],"/index3":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/664-6863c832d33388a7.js","static/chunks/586-30a29d6a3470ddab.js","static/chunks/824-05eba4fe1a65036f.js","static/chunks/648-cac140b678ee7ef0.js","static/chunks/602-20b6cf960325a14f.js","static/chunks/pages/index3-e907a90fec23a2ff.js"],"/single-blog":["static/chunks/webpack-335f346679850432.js","static/chunks/framework-7dc8a65f4a0cda33.js","static/chunks/main-22823a3242267f93.js","static/chunks/664-6863c832d33388a7.js","static/chunks/pages/single-blog-e940d78229e9685f.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = JSON.parse('{"../src/components/Resume.js -> ./Testimonials":{"id":6112,"files":["static/chunks/719.f063d5c8e66256b7.js","static/chunks/112.25ab515679edcac7.js"]},"../src/components/Services.js -> ./Testimonials":{"id":6112,"files":["static/chunks/719.f063d5c8e66256b7.js","static/chunks/112.25ab515679edcac7.js"]},"index-glitch.js -> ../src/components/Portfolio":{"id":9424,"files":["static/chunks/391.6f5198c99b761316.js","static/chunks/424.2f084e670d88f7a6.js"]},"index-video.js -> ../src/components/Portfolio":{"id":9424,"files":["static/chunks/391.6f5198c99b761316.js","static/chunks/424.2f084e670d88f7a6.js"]},"index.js -> ../src/components/Portfolio":{"id":9424,"files":["static/chunks/391.6f5198c99b761316.js","static/chunks/424.2f084e670d88f7a6.js"]},"index3.js -> ../src/components/Portfolio":{"id":9424,"files":["static/chunks/391.6f5198c99b761316.js","static/chunks/424.2f084e670d88f7a6.js"]}}');

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;
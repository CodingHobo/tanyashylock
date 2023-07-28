"use strict";
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 87469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7164);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11786);




const ParticlesBackground = ()=>{
    const particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (engine)=>{
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__/* .loadFull */ .R)(engine);
    }, []);
    const particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (container)=>{
        await console.log(container);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_2___default()), {
        id: "particles-box",
        className: "particles",
        init: particlesInit,
        loaded: particlesLoaded,
        options: {
            fullScreen: {
                enable: false
            },
            fpsLimit: 1000,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.8,
                    width: 0.5
                },
                collisions: {
                    enable: false
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 3,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000
                    },
                    value: 50
                },
                opacity: {
                    value: 0.5
                },
                // shape: {
                //   type: "circle",
                // },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParticlesBackground);


/***/ })

};
;
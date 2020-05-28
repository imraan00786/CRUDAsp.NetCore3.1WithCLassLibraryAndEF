/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"npm.bootstrap","npm.aurelia-webpack-plugin","npm.es6-promise","npm.font-awesome","npm.webpack","npm.aurelia-binding","npm.aurelia-bootstrapper","npm.aurelia-dependency-injection","npm.aurelia-event-aggregator","npm.aurelia-fetch-client","npm.aurelia-framework","npm.aurelia-history-browser","npm.aurelia-history","npm.aurelia-loader-webpack","npm.aurelia-loader","npm.aurelia-logging-console","npm.aurelia-logging","npm.aurelia-metadata","npm.aurelia-pal-browser","npm.aurelia-pal","npm.aurelia-path","npm.aurelia-polyfills","npm.aurelia-route-recognizer","npm.aurelia-router","npm.aurelia-task-queue","npm.aurelia-templating-binding","npm.aurelia-templating-resources","npm.aurelia-templating-router","npm.aurelia-templating","npm.css-loader","npm.isomorphic-fetch","npm.jquery","npm.popper.js","npm.process","npm.whatwg-fetch"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js");
__webpack_require__("./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js");
__webpack_require__("./node_modules/es6-promise/auto.js");
module.exports = __webpack_require__("./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js");


/***/ }),

/***/ "app/components/app/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = "AureliaDotnetTemplate";
        config.map([{
                route: ["", "home"],
                name: "home",
                settings: { icon: "fa fa-home" },
                moduleId: "../home/home",
                nav: true,
                title: "Home"
            }, {
                route: "counter",
                name: "counter",
                settings: { icon: "fa fa-plus" },
                moduleId: "../counter/counter",
                nav: true,
                title: "Counter"
            }, {
                route: "fetch-data",
                name: "fetchdata",
                settings: { icon: "fa fa-list" },
                moduleId: "../fetchdata/fetchdata",
                nav: true,
                title: "Fetch data"
            }]);
    };
    return App;
}());



/***/ }),

/***/ "app/components/app/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<require from=\"../navmenu/navmenu\"></require>\r\n\t<require from=\"./app.scss\"></require>\r\n\t<navmenu></navmenu>\r\n\t<div class=\"container-fluid\">\r\n\t\t<router-view></router-view>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "app/components/app/app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media (max-width:767px){.body-content{padding-top:50px}}", ""]);



/***/ }),

/***/ "app/components/counter/counter":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
var Counter = /** @class */ (function () {
    function Counter() {
        this.currentCount = 0;
    }
    Counter.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    return Counter;
}());



/***/ }),

/***/ "app/components/counter/counter.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <h1>Counter</h1>\r\n\r\n    <p>This is a simple example of an Aurelia component.</p>\r\n\r\n    <p>Current count: <strong>${currentCount}</strong></p>\r\n\r\n    <button class=\"btn\" click.delegate=\"incrementCounter()\">Increment</button>\r\n</template>\r\n";

/***/ }),

/***/ "app/components/fetchdata/fetchdata":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetchdata", function() { return Fetchdata; });
/* harmony import */ var aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/aurelia-fetch-client/dist/native-modules/aurelia-fetch-client.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Fetchdata = /** @class */ (function () {
    function Fetchdata(http) {
        this.http = http;
    }
    Fetchdata.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.http.fetch("api/SampleData/WeatherForecasts").then(function (result) { return result.json(); })];
                    case 1:
                        _a.forecasts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Fetchdata = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["inject"])(aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]),
        __metadata("design:paramtypes", [aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], Fetchdata);
    return Fetchdata;
}());



/***/ }),

/***/ "app/components/fetchdata/fetchdata.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <h1>Weather forecast</h1>\r\n\r\n    <p>This component demonstrates fetching data from the server.</p>\r\n\r\n    <p if.bind=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n    <table if.bind=\"forecasts\" class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th>Date</th>\r\n                <th>Temp. (C)</th>\r\n                <th>Temp. (F)</th>\r\n                <th>Summary</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr repeat.for=\"forecast of forecasts\">\r\n                <td>${ forecast.dateFormatted }</td>\r\n                <td>${ forecast.temperatureC }</td>\r\n                <td>${ forecast.temperatureF }</td>\r\n                <td>${ forecast.summary }</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</template>\r\n";

/***/ }),

/***/ "app/components/home/home":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
var Home = /** @class */ (function () {
    function Home() {
    }
    return Home;
}());



/***/ }),

/***/ "app/components/home/home.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<h1>Hello, world!</h1>\r\n\t<p>Welcome to your new single-page application, built with:</p>\r\n\t<ul>\r\n\t\t<li><a href=\"https://get.asp.net/\">ASP.NET Core</a> and <a href=\"https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx\">C#</a> for cross-platform server-side code</li>\r\n\t\t<li><a href=\"http://aurelia.io/\">Aurelia</a> and <a href=\"http://www.typescriptlang.org/\">TypeScript</a> for client-side code</li>\r\n\t\t<li><a href=\"https://webpack.github.io/\">Webpack</a> for building and bundling client-side resources</li>\r\n\t\t<li><a href=\"http://getbootstrap.com/\">Bootstrap</a> for layout and styling</li>\r\n\t</ul>\r\n\t<p>To help you get started, we've also set up:</p>\r\n\t<ul>\r\n\t\t<li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n\t\t<li><strong>Development</strong>. Webpack dev middleware and HMR have been removed from this template as they create development performance issues when the codebase grows. Run <code>npm run webpack:watch</code> in background when working with the UI code. This way any changes to C# code won't trigger a full webpack rebuild.</li>\r\n\t\t<li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n\t</ul>\r\n</template>\r\n";

/***/ }),

/***/ "app/components/navmenu/navmenu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navmenu", function() { return Navmenu; });
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/aurelia-router/dist/native-modules/aurelia-router.js");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Navmenu = /** @class */ (function () {
    function Navmenu(router) {
        this.router = router;
    }
    Navmenu = __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["autoinject"],
        __metadata("design:paramtypes", [aurelia_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], Navmenu);
    return Navmenu;
}());



/***/ }),

/***/ "app/components/navmenu/navmenu.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\t\t<a class=\"navbar-brand\" href=\"#/home\">Navbar</a>\r\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t</button>\r\n\r\n\t\t<div class=\"navbar-collapse collapse\" id=\"navbarNav\">\r\n\t\t\t<ul class=\"navbar-nav\">\r\n\t\t\t\t<li repeat.for=\"row of router.navigation\" class=\"nav-item ${row.isActive ? 'active' : ''}\">\r\n                    <a href.bind=\"row.href\" class=\"nav-link\">\r\n                        <i class=\"${row.settings.icon}\"></i> ${row.title}\r\n                    </a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</nav>\r\n</template>\r\n";

/***/ }),

/***/ "boot":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_3__);




function configure(aurelia) {
    aurelia.use.standardConfiguration();
    if (true) {
        aurelia.use.developmentLogging();
    }
    aurelia.start().then(function () { return aurelia.setRoot("app/components/app/app"); });
}


/***/ })

/******/ });
//# sourceMappingURL=app.7299545e2cdca89c7600.js.map
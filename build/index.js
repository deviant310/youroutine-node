module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend sync recursive":
/*!**************************!*\
  !*** ./src/backend sync ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/backend sync recursive\";\n\n//# sourceURL=webpack:///./src/backend_sync?");

/***/ }),

/***/ "./src/backend/index.ts":
/*!******************************!*\
  !*** ./src/backend/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.bootstrap = exports.runCommand = void 0;\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst [controllers, migrations, commands] = ['controllers', 'migrations', 'commands'].map(path => __webpack_require__(\"./src/backend sync recursive\").context(path, false, /\\.ts$/));\nconst migrate = () => __awaiter(void 0, void 0, void 0, function* () {\n    const dataFilePath = path_1.resolve('/home/dunloop/www/@jsway/planner/storage', 'migrations.json');\n    const existedMigrationData = fs_1.existsSync(dataFilePath) ? JSON.parse(fs_1.readFileSync(dataFilePath).toString()) : {};\n    const migrationData = yield migrations.keys()\n        .sort((next, current) => {\n        const [{ birthtimeMs: nextBirthTimeMs }, { birthtimeMs: currentBirthTimeMs }] = [next, current]\n            .map(fileBaseName => fs_1.statSync(path_1.resolve('/home/dunloop/www/@jsway/planner/src/backend/migrations', fileBaseName)));\n        return nextBirthTimeMs - currentBirthTimeMs;\n    })\n        .reduce((p, rawKey) => p.then((obj) => __awaiter(void 0, void 0, void 0, function* () {\n        const key = path_1.parse(rawKey).name;\n        if (existedMigrationData[key])\n            return obj;\n        const Migration = migrations(rawKey).default;\n        const migration = new Migration;\n        yield migration.up();\n        obj[key] = { key, time: new Date().toLocaleString('ru') };\n        return obj;\n    })), Promise.resolve({}));\n    fs_1.writeFileSync(dataFilePath, JSON.stringify(Object.assign(Object.assign({}, existedMigrationData), migrationData), null, 2));\n});\nconst applyRoutes = (app) => {\n    app.post('/api/:controller/:action', express_1.default.json(), (request, response) => {\n        const params = request.params;\n        const { controller: controllerName, action: actionName } = params;\n        const Controller = controllers(`./${controllerName}.ts`).default;\n        const controller = new Controller;\n        const controllerAction = controller[actionName];\n        const message = controllerAction(request.body);\n        response.send(message);\n    });\n};\nexports.runCommand = (command, options) => __awaiter(void 0, void 0, void 0, function* () {\n});\nexports.bootstrap = (app) => __awaiter(void 0, void 0, void 0, function* () {\n    yield migrate();\n    applyRoutes(app);\n});\n\n\n//# sourceURL=webpack:///./src/backend/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ })["default"];
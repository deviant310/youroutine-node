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

/***/ "./src/backend/commands sync \\.ts$":
/*!******************************************************!*\
  !*** ./src/backend/commands sync nonrecursive \.ts$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./create.admin.d.ts\": \"./src/backend/commands/create.admin.d.ts\",\n\t\"./create.admin.ts\": \"./src/backend/commands/create.admin.ts\",\n\t\"./notes.seed.d.ts\": \"./src/backend/commands/notes.seed.d.ts\",\n\t\"./notes.seed.ts\": \"./src/backend/commands/notes.seed.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/backend/commands sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/backend/commands_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/backend/commands/create.admin.d.ts":
/*!************************************************!*\
  !*** ./src/backend/commands/create.admin.d.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/commands/create.admin.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/commands/create.admin.d.ts?");

/***/ }),

/***/ "./src/backend/commands/create.admin.ts":
/*!**********************************************!*\
  !*** ./src/backend/commands/create.admin.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst db_1 = __importDefault(__webpack_require__(/*! core/db */ \"./src/backend/core/db/index.ts\"));\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nfunction default_1() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const db = yield db_1.default();\n        const passwordHash = yield bcrypt_1.hash('123456', 5);\n        yield db.query(`\r\n      insert into users (name, email, password)\r\n      values ($1, $2, $3)\r\n  `, ['Admin', 'admin@jsway.ru', passwordHash]);\n        return 0;\n    });\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/backend/commands/create.admin.ts?");

/***/ }),

/***/ "./src/backend/commands/notes.seed.d.ts":
/*!**********************************************!*\
  !*** ./src/backend/commands/notes.seed.d.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/commands/notes.seed.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/commands/notes.seed.d.ts?");

/***/ }),

/***/ "./src/backend/commands/notes.seed.ts":
/*!********************************************!*\
  !*** ./src/backend/commands/notes.seed.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst db_1 = __importDefault(__webpack_require__(/*! core/db */ \"./src/backend/core/db/index.ts\"));\nconst faker_1 = __webpack_require__(/*! faker */ \"faker\");\nfunction default_1() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const db = yield db_1.default();\n        for (let i in Array.from(Array(3)))\n            yield db.query(`\r\n      insert into notes (title, description) values ($1, $2)\r\n    `, [faker_1.lorem.word(), faker_1.lorem.paragraphs()]);\n        return 0;\n    });\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/backend/commands/notes.seed.ts?");

/***/ }),

/***/ "./src/backend/config/db.ts":
/*!**********************************!*\
  !*** ./src/backend/config/db.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst { DB_CONNECTION: dbConnection = 'pgsql', DB_HOST: dbHost = 'localhost', DB_PORT: dbPort = 5432, DB_NAME: dbName = 'postgres', DB_USER: dbUser = 'postgres', DB_PASSWORD: dbPassword = '' } = dotenv_parse_variables_1.default(process.env);\nconst connections = {\n    default: {\n        driver: dbConnection,\n        host: dbHost,\n        port: dbPort,\n        database: dbName,\n        user: dbUser,\n        password: dbPassword\n    }\n};\nexports.default = connections;\n\n\n//# sourceURL=webpack:///./src/backend/config/db.ts?");

/***/ }),

/***/ "./src/backend/config/routes.ts":
/*!**************************************!*\
  !*** ./src/backend/config/routes.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst model_1 = __webpack_require__(/*! core/model */ \"./src/backend/core/model/index.ts\");\nconst modelsPaths = model_1.getContextModulesRoutesNames();\nconst routes = {\n    signIn: '/signin',\n    auth: '/auth',\n    model: `/:model(${modelsPaths.join('|')})`,\n    modelItem: path_1.resolve(`/:model(${modelsPaths.join('|')})`, ':id')\n};\nexports.default = routes;\n\n\n//# sourceURL=webpack:///./src/backend/config/routes.ts?");

/***/ }),

/***/ "./src/backend/controllers sync \\.ts$":
/*!*********************************************************!*\
  !*** ./src/backend/controllers sync nonrecursive \.ts$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./api.d.ts\": \"./src/backend/controllers/api.d.ts\",\n\t\"./api.ts\": \"./src/backend/controllers/api.ts\",\n\t\"./index.d.ts\": \"./src/backend/controllers/index.d.ts\",\n\t\"./index.ts\": \"./src/backend/controllers/index.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/backend/controllers sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/backend/controllers_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/backend/controllers/api.d.ts":
/*!******************************************!*\
  !*** ./src/backend/controllers/api.d.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/controllers/api.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/controllers/api.d.ts?");

/***/ }),

/***/ "./src/backend/controllers/api.ts":
/*!****************************************!*\
  !*** ./src/backend/controllers/api.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst crypto_1 = __webpack_require__(/*! crypto */ \"crypto\");\nconst route_1 = __webpack_require__(/*! core/router/route */ \"./src/backend/core/router/route.ts\");\nconst model_1 = __webpack_require__(/*! core/model */ \"./src/backend/core/model/index.ts\");\nconst user_1 = __importDefault(__webpack_require__(/*! models/user */ \"./src/backend/models/user.ts\"));\nconst auth_1 = __importDefault(__webpack_require__(/*! middlewares/auth */ \"./src/backend/middlewares/auth.ts\"));\nconst body_parsers_1 = __webpack_require__(/*! middlewares/body.parsers */ \"./src/backend/middlewares/body.parsers.ts\");\nconst authRoutes = () => ([\n    {\n        method: 'post',\n        path: route_1.routePath('auth'),\n        response: ({ session, body }) => __awaiter(void 0, void 0, void 0, function* () {\n            const { login, password } = body;\n            const userId = yield (new user_1.default).authenticate(login, password);\n            if (userId) {\n                session.userId = userId;\n                session.accessToken = crypto_1.randomBytes(24).toString('hex');\n            }\n            return userId;\n        })\n    },\n]);\nconst modelRoutes = () => {\n    return [\n        {\n            method: 'get',\n            path: route_1.routePath('model'),\n            response: ({ params }) => __awaiter(void 0, void 0, void 0, function* () {\n                const { model: modelRouteName } = params;\n                const Model = model_1.getContextModuleByRouteName(modelRouteName);\n                return (new Model).list();\n            })\n        },\n        {\n            method: 'get',\n            path: route_1.routePath('modelItem'),\n            response: ({ params }) => __awaiter(void 0, void 0, void 0, function* () {\n                const { model: modelRouteName, id } = params;\n                const Model = model_1.getContextModuleByRouteName(modelRouteName);\n                return (new Model).getById(id);\n            })\n        }\n    ];\n};\nexports.default = [\n    route_1.withMiddleware(authRoutes, body_parsers_1.json),\n    route_1.withMiddleware(modelRoutes, body_parsers_1.json, auth_1.default)\n];\n\n\n//# sourceURL=webpack:///./src/backend/controllers/api.ts?");

/***/ }),

/***/ "./src/backend/controllers/index.d.ts":
/*!********************************************!*\
  !*** ./src/backend/controllers/index.d.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/controllers/index.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/controllers/index.d.ts?");

/***/ }),

/***/ "./src/backend/controllers/index.ts":
/*!******************************************!*\
  !*** ./src/backend/controllers/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst route_1 = __webpack_require__(/*! core/router/route */ \"./src/backend/core/router/route.ts\");\nconst auth_1 = __importDefault(__webpack_require__(/*! middlewares/auth */ \"./src/backend/middlewares/auth.ts\"));\nconst routes = () => ([\n    {\n        method: 'get',\n        path: route_1.routePath('signIn')\n    },\n    {\n        method: 'get',\n        path: route_1.routePath('model')\n    },\n    {\n        method: 'get',\n        path: route_1.routePath('modelItem')\n    }\n]);\nexports.default = route_1.withMiddleware(routes, auth_1.default);\n\n\n//# sourceURL=webpack:///./src/backend/controllers/index.ts?");

/***/ }),

/***/ "./src/backend/core/console/index.ts":
/*!*******************************************!*\
  !*** ./src/backend/core/console/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst commands = __webpack_require__(\"./src/backend/commands sync \\\\.ts$\");\nfunction default_1(command, options) {\n    const run = commands(`./${command}.ts`).default;\n    return run(options);\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/backend/core/console/index.ts?");

/***/ }),

/***/ "./src/backend/core/db/drivers sync \\.ts$":
/*!*************************************************************!*\
  !*** ./src/backend/core/db/drivers sync nonrecursive \.ts$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./pgsql.d.ts\": \"./src/backend/core/db/drivers/pgsql.d.ts\",\n\t\"./pgsql.ts\": \"./src/backend/core/db/drivers/pgsql.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/backend/core/db/drivers sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/backend/core/db/drivers_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/backend/core/db/drivers/pgsql.d.ts":
/*!************************************************!*\
  !*** ./src/backend/core/db/drivers/pgsql.d.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/core/db/drivers/pgsql.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/core/db/drivers/pgsql.d.ts?");

/***/ }),

/***/ "./src/backend/core/db/drivers/pgsql.ts":
/*!**********************************************!*\
  !*** ./src/backend/core/db/drivers/pgsql.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst pg_1 = __webpack_require__(/*! pg */ \"pg\");\nconst wait_port_1 = __importDefault(__webpack_require__(/*! wait-port */ \"wait-port\"));\nconst is_reachable_1 = __importDefault(__webpack_require__(/*! is-reachable */ \"is-reachable\"));\nclass PostgreSQL {\n    get connection() {\n        return PostgreSQL._client;\n    }\n    init(host, port, database, user, password) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!PostgreSQL._client) {\n                const dbIsReachable = yield is_reachable_1.default(`${host}:${port}`);\n                if (!dbIsReachable)\n                    yield wait_port_1.default({ host, port, timeout: 15000 });\n                const client = new pg_1.Client({ host, port, database, user, password });\n                yield client.connect();\n                PostgreSQL._client = client;\n            }\n            return this;\n        });\n    }\n    query(queryText, values) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.connection.query(queryText, values);\n        });\n    }\n}\nconst PostgreSQLStatic = PostgreSQL;\nexports.default = PostgreSQL;\n\n\n//# sourceURL=webpack:///./src/backend/core/db/drivers/pgsql.ts?");

/***/ }),

/***/ "./src/backend/core/db/index.ts":
/*!**************************************!*\
  !*** ./src/backend/core/db/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst db_1 = __importDefault(__webpack_require__(/*! config/db */ \"./src/backend/config/db.ts\"));\nconst require_1 = __webpack_require__(/*! ../module/require */ \"./src/backend/core/module/require.ts\");\nconst context = require_1.buildContext(__webpack_require__(\"./src/backend/core/db/drivers sync \\\\.ts$\"));\nconst defaultConnection = 'default';\nclass DBDefiner {\n    static getConnection(connectionName = defaultConnection) {\n        return db_1.default[connectionName];\n    }\n    static dbClass(driverName) {\n        return context[driverName];\n    }\n    static db(connectionName = defaultConnection) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = this.getConnection(connectionName);\n            const { driver, host, port, database, user, password } = connection;\n            const DBDriverStatic = this.dbClass(driver);\n            return (new DBDriverStatic).init(host, port, database, user, password);\n        });\n    }\n}\nexports.default = DBDefiner;\n\n\n//# sourceURL=webpack:///./src/backend/core/db/index.ts?");

/***/ }),

/***/ "./src/backend/core/migrate.ts":
/*!*************************************!*\
  !*** ./src/backend/core/migrate.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst migrations = __webpack_require__(\"./src/backend/migrations sync \\\\.ts$\");\nfunction default_1() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const dataFilePath = path_1.resolve('/home/dunloop/www/@jsway/planner/storage', 'migrations.json');\n        const existedMigrationData = fs_1.existsSync(dataFilePath) ? JSON.parse(fs_1.readFileSync(dataFilePath).toString()) : {};\n        const migrationData = yield migrations.keys()\n            .sort((next, current) => {\n            const [{ birthtimeMs: nextBirthTimeMs }, { birthtimeMs: currentBirthTimeMs }] = [next, current]\n                .map(fileBaseName => fs_1.statSync(path_1.resolve('/home/dunloop/www/@jsway/planner/src/backend/migrations', fileBaseName)));\n            return nextBirthTimeMs - currentBirthTimeMs;\n        })\n            .reduce((p, rawKey) => p.then((obj) => __awaiter(this, void 0, void 0, function* () {\n            const key = path_1.parse(rawKey).name;\n            if (existedMigrationData[key])\n                return obj;\n            const Migration = migrations(rawKey).default;\n            const migration = new Migration;\n            yield migration.up();\n            obj[key] = { key, time: new Date().toLocaleString('ru') };\n            return obj;\n        })), Promise.resolve({}));\n        fs_1.writeFileSync(dataFilePath, JSON.stringify(Object.assign(Object.assign({}, existedMigrationData), migrationData), null, 2));\n    });\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/backend/core/migrate.ts?");

/***/ }),

/***/ "./src/backend/core/model/index.ts":
/*!*****************************************!*\
  !*** ./src/backend/core/model/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getContextModulesRoutesNames = exports.getContextModuleByRouteName = void 0;\nconst db_1 = __importDefault(__webpack_require__(/*! ../db */ \"./src/backend/core/db/index.ts\"));\nconst require_1 = __webpack_require__(/*! ../module/require */ \"./src/backend/core/module/require.ts\");\nconst { db } = db_1.default;\nconst context = require_1.buildContext(__webpack_require__(\"./src/backend/models sync \\\\.ts$\"));\nclass Model {\n    constructor() {\n        this.table = '';\n        return new Proxy(this, {\n            get: (instance, property) => {\n                if (!this.table)\n                    throw new Error(`Table of ${this.constructor.name} is undefined! Define it in your model class!`);\n                return instance[property];\n            }\n        });\n    }\n    list(selection = {}) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield db();\n            const { rows } = yield query(`\r\n      select * from ${this.table}\r\n    `);\n            return rows;\n        });\n    }\n    getById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield db();\n            const { rows } = yield query(`\r\n      select * from ${this.table} where id=$1 limit 1\r\n    `, [id]);\n            return rows[0];\n        });\n    }\n}\nfunction getContextModuleByRouteName(routeName) {\n    const entry = Object.entries(context)\n        .find(([, model]) => model.routeName === routeName);\n    const [, contextItem] = entry;\n    return contextItem;\n}\nexports.getContextModuleByRouteName = getContextModuleByRouteName;\nfunction getContextModulesRoutesNames() {\n    return Object.entries(context)\n        .map(([, { routeName }]) => routeName)\n        .filter((v) => typeof v !== 'undefined');\n}\nexports.getContextModulesRoutesNames = getContextModulesRoutesNames;\nexports.default = Model;\n\n\n//# sourceURL=webpack:///./src/backend/core/model/index.ts?");

/***/ }),

/***/ "./src/backend/core/module/require.ts":
/*!********************************************!*\
  !*** ./src/backend/core/module/require.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.buildContext = void 0;\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nfunction buildContext(context) {\n    return context\n        .keys()\n        .reduce((obj, key) => {\n        const module = context(key).default;\n        const newKey = path_1.parse(key).name;\n        obj[newKey] = module;\n        return obj;\n    }, {});\n}\nexports.buildContext = buildContext;\n\n\n//# sourceURL=webpack:///./src/backend/core/module/require.ts?");

/***/ }),

/***/ "./src/backend/core/router/index.ts":
/*!******************************************!*\
  !*** ./src/backend/core/router/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst controllersContext = __webpack_require__(\"./src/backend/controllers sync \\\\.ts$\");\nclass Router {\n    constructor(app) {\n        this.app = app;\n        for (let key of controllersContext.keys()) {\n            this.handleController(key);\n        }\n    }\n    handleController(key) {\n        const controller = controllersContext(key).default;\n        const controllerName = path_1.parse(key).name;\n        const routableCollection = Array.isArray(controller) ? controller : [controller];\n        for (let getRoutes of routableCollection) {\n            const routesPrefix = controllerName !== 'index' ? controllerName : void (0);\n            this.handleRoutes(getRoutes, routesPrefix);\n        }\n    }\n    handleRoutes(getRoutes, routesPrefix) {\n        const routes = getRoutes();\n        for (let route of routes)\n            this.handleRoute(route, {\n                prefix: routesPrefix,\n                middleware: routes.middleware\n            });\n    }\n    handleRoute(route, options) {\n        const { prefix, middleware } = options;\n        const { method: requestMethod, path: requestPath, response: responseHandler } = route;\n        const method = requestMethod;\n        const path = typeof requestPath === 'string' ? path_1.join(`/${prefix || ''}`, requestPath) : requestPath;\n        this.app[method](path, ...middleware || [], (request, response, next) => __awaiter(this, void 0, void 0, function* () {\n            if (typeof responseHandler === 'function') {\n                const { error, message } = yield responseHandler(request)\n                    .then(message => ({ error: false, message }))\n                    .catch(e => ({\n                    error: true,\n                    message: Object\n                        .getOwnPropertyNames(e)\n                        .reduce((obj, key) => {\n                        const value = e[key];\n                        obj[key] = value.match(/\\n/) ? value.split(/\\n/) : value;\n                        return obj;\n                    }, {})\n                }));\n                response.status(error ? 404 : 200).send(message);\n            }\n            else {\n                next();\n            }\n        }));\n    }\n}\nexports.default = Router;\n\n\n//# sourceURL=webpack:///./src/backend/core/router/index.ts?");

/***/ }),

/***/ "./src/backend/core/router/route.ts":
/*!******************************************!*\
  !*** ./src/backend/core/router/route.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.routePath = exports.withMiddleware = void 0;\nconst routes_1 = __importDefault(__webpack_require__(/*! config/routes */ \"./src/backend/config/routes.ts\"));\nexports.withMiddleware = (getRoutes, ...handlers) => (() => {\n    const routes = getRoutes();\n    Object.defineProperty(routes, 'middleware', {\n        enumerable: false,\n        value: handlers\n    });\n    return routes;\n});\nexports.routePath = (key) => {\n    return routes_1.default[key];\n};\n\n\n//# sourceURL=webpack:///./src/backend/core/router/route.ts?");

/***/ }),

/***/ "./src/backend/core/session.ts":
/*!*************************************!*\
  !*** ./src/backend/core/session.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\nconst connect_pg_simple_1 = __importDefault(__webpack_require__(/*! connect-pg-simple */ \"connect-pg-simple\"));\nconst PostgreSQLSession = connect_pg_simple_1.default(express_session_1.default);\nfunction default_1(app) {\n    app.use(express_session_1.default({\n        store: new PostgreSQLSession,\n        secret: 'session-secret'\n    }));\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/backend/core/session.ts?");

/***/ }),

/***/ "./src/backend/index.ts":
/*!******************************!*\
  !*** ./src/backend/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.runCommand = exports.routes = exports.bootstrap = void 0;\nconst console_1 = __importDefault(__webpack_require__(/*! core/console */ \"./src/backend/core/console/index.ts\"));\nexports.runCommand = console_1.default;\nconst migrate_1 = __importDefault(__webpack_require__(/*! core/migrate */ \"./src/backend/core/migrate.ts\"));\nconst router_1 = __importDefault(__webpack_require__(/*! core/router */ \"./src/backend/core/router/index.ts\"));\nconst session_1 = __importDefault(__webpack_require__(/*! core/session */ \"./src/backend/core/session.ts\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! config/routes */ \"./src/backend/config/routes.ts\"));\nexports.routes = routes_1.default;\nfunction bootstrap(app) {\n    return __awaiter(this, void 0, void 0, function* () {\n        yield migrate_1.default();\n        session_1.default(app);\n        new router_1.default(app);\n    });\n}\nexports.bootstrap = bootstrap;\n\n\n//# sourceURL=webpack:///./src/backend/index.ts?");

/***/ }),

/***/ "./src/backend/middlewares/auth.ts":
/*!*****************************************!*\
  !*** ./src/backend/middlewares/auth.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst routes_1 = __importDefault(__webpack_require__(/*! config/routes */ \"./src/backend/config/routes.ts\"));\nconst Auth = (request, response, next) => {\n    const { signIn: signInPath } = routes_1.default;\n    const { session, xhr, url } = request;\n    const { userId } = session;\n    if (userId) {\n        next();\n    }\n    else {\n        if (xhr) {\n            response.status(302).send({ redirect: signInPath });\n        }\n        else {\n            if (url !== signInPath)\n                response.redirect(signInPath);\n            else\n                next();\n        }\n    }\n};\nexports.default = Auth;\n\n\n//# sourceURL=webpack:///./src/backend/middlewares/auth.ts?");

/***/ }),

/***/ "./src/backend/middlewares/body.parsers.ts":
/*!*************************************************!*\
  !*** ./src/backend/middlewares/body.parsers.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.json = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst json = express_1.default.json();\nexports.json = json;\n\n\n//# sourceURL=webpack:///./src/backend/middlewares/body.parsers.ts?");

/***/ }),

/***/ "./src/backend/migrations sync \\.ts$":
/*!********************************************************!*\
  !*** ./src/backend/migrations sync nonrecursive \.ts$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./create.notes.table.d.ts\": \"./src/backend/migrations/create.notes.table.d.ts\",\n\t\"./create.notes.table.ts\": \"./src/backend/migrations/create.notes.table.ts\",\n\t\"./create.session.table.d.ts\": \"./src/backend/migrations/create.session.table.d.ts\",\n\t\"./create.session.table.ts\": \"./src/backend/migrations/create.session.table.ts\",\n\t\"./create.users.table.d.ts\": \"./src/backend/migrations/create.users.table.d.ts\",\n\t\"./create.users.table.ts\": \"./src/backend/migrations/create.users.table.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/backend/migrations sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/backend/migrations_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/backend/migrations/create.notes.table.d.ts":
/*!********************************************************!*\
  !*** ./src/backend/migrations/create.notes.table.d.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/migrations/create.notes.table.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/migrations/create.notes.table.d.ts?");

/***/ }),

/***/ "./src/backend/migrations/create.notes.table.ts":
/*!******************************************************!*\
  !*** ./src/backend/migrations/create.notes.table.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.down = exports.up = void 0;\nconst db_1 = __importDefault(__webpack_require__(/*! core/db */ \"./src/backend/core/db/index.ts\"));\nfunction up() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const db = yield db_1.default();\n        return db.query(`\r\n    create table notes (\r\n      id bigserial not null constraint notes_pkey primary key,\r\n      title varchar(255) not null,\r\n      description text\r\n    );\r\n  `);\n    });\n}\nexports.up = up;\nfunction down() {\n    return __awaiter(this, void 0, void 0, function* () {\n    });\n}\nexports.down = down;\n\n\n//# sourceURL=webpack:///./src/backend/migrations/create.notes.table.ts?");

/***/ }),

/***/ "./src/backend/migrations/create.session.table.d.ts":
/*!**********************************************************!*\
  !*** ./src/backend/migrations/create.session.table.d.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/migrations/create.session.table.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/migrations/create.session.table.d.ts?");

/***/ }),

/***/ "./src/backend/migrations/create.session.table.ts":
/*!********************************************************!*\
  !*** ./src/backend/migrations/create.session.table.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst db_1 = __importDefault(__webpack_require__(/*! core/db */ \"./src/backend/core/db/index.ts\"));\nconst { db, getConnection } = db_1.default;\nconst { driver } = getConnection();\nclass CreateSessionTable {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const queryFilePath = path_1.resolve('/home/dunloop/www/@jsway/planner/node_modules', 'connect-pg-simple', 'table.sql');\n            const queryString = fs_1.readFileSync(queryFilePath).toString();\n            const { query } = yield db();\n            return query(queryString);\n        });\n    }\n    down() {\n    }\n}\nexports.default = CreateSessionTable;\n\n\n//# sourceURL=webpack:///./src/backend/migrations/create.session.table.ts?");

/***/ }),

/***/ "./src/backend/migrations/create.users.table.d.ts":
/*!********************************************************!*\
  !*** ./src/backend/migrations/create.users.table.d.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/migrations/create.users.table.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/migrations/create.users.table.d.ts?");

/***/ }),

/***/ "./src/backend/migrations/create.users.table.ts":
/*!******************************************************!*\
  !*** ./src/backend/migrations/create.users.table.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst db_1 = __importDefault(__webpack_require__(/*! core/db */ \"./src/backend/core/db/index.ts\"));\nclass CreateUsersTable {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const db = yield db_1.default();\n            return db.query(`\r\n      create table users (\r\n        id bigserial not null constraint users_pkey primary key,\r\n        name varchar(255) not null,\r\n        email varchar(255) not null constraint users_email_unique unique,\r\n        password varchar(255) not null,\r\n        auth_token varchar(100),\r\n        active boolean default true not null\r\n      );\r\n    `);\n        });\n    }\n    down() {\n    }\n}\nexports.default = CreateUsersTable;\n\n\n//# sourceURL=webpack:///./src/backend/migrations/create.users.table.ts?");

/***/ }),

/***/ "./src/backend/models sync \\.ts$":
/*!****************************************************!*\
  !*** ./src/backend/models sync nonrecursive \.ts$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./note.d.ts\": \"./src/backend/models/note.d.ts\",\n\t\"./note.ts\": \"./src/backend/models/note.ts\",\n\t\"./user.d.ts\": \"./src/backend/models/user.d.ts\",\n\t\"./user.ts\": \"./src/backend/models/user.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/backend/models sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/backend/models_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/backend/models/note.d.ts":
/*!**************************************!*\
  !*** ./src/backend/models/note.d.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/models/note.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/models/note.d.ts?");

/***/ }),

/***/ "./src/backend/models/note.ts":
/*!************************************!*\
  !*** ./src/backend/models/note.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst model_1 = __importDefault(__webpack_require__(/*! core/model */ \"./src/backend/core/model/index.ts\"));\nclass Note extends model_1.default {\n    constructor() {\n        super(...arguments);\n        this.table = 'notes';\n    }\n}\nNote.routeName = 'notes';\nconst NoteStatic = Note;\nexports.default = NoteStatic;\n\n\n//# sourceURL=webpack:///./src/backend/models/note.ts?");

/***/ }),

/***/ "./src/backend/models/user.d.ts":
/*!**************************************!*\
  !*** ./src/backend/models/user.d.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/dunloop/www/@jsway/planner/src/backend/models/user.d.ts.\\n    at makeSourceMapAndFinish (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:54:18)\\n    at successLoader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:41:5)\\n    at Object.loader (/home/dunloop/www/@jsway/planner/node_modules/ts-loader/dist/index.js:24:5)\");\n\n//# sourceURL=webpack:///./src/backend/models/user.d.ts?");

/***/ }),

/***/ "./src/backend/models/user.ts":
/*!************************************!*\
  !*** ./src/backend/models/user.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst model_1 = __importDefault(__webpack_require__(/*! core/model */ \"./src/backend/core/model/index.ts\"));\nconst db_1 = __importDefault(__webpack_require__(/*! core/db */ \"./src/backend/core/db/index.ts\"));\nclass User extends model_1.default {\n    constructor() {\n        super(...arguments);\n        this.table = 'users';\n    }\n    authenticate(login, password) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const db = yield db_1.default();\n            const query = yield db.query(`\r\n      select * from ${this.table} where email=$1 limit 1\r\n    `, [login]);\n            const user = query.rows[0];\n            if (!user)\n                throw new Error('Unauthenticated');\n            const { id, password: passwordHash } = user;\n            const isAuthenticated = yield bcrypt_1.compare(password, passwordHash);\n            if (!isAuthenticated)\n                throw new Error('Unauthenticated');\n            return id;\n        });\n    }\n}\nconst UserStatic = User;\nexports.default = UserStatic;\n\n\n//# sourceURL=webpack:///./src/backend/models/user.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "connect-pg-simple":
/*!************************************!*\
  !*** external "connect-pg-simple" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-pg-simple\");\n\n//# sourceURL=webpack:///external_%22connect-pg-simple%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv-parse-variables":
/*!*****************************************!*\
  !*** external "dotenv-parse-variables" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv-parse-variables\");\n\n//# sourceURL=webpack:///external_%22dotenv-parse-variables%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faker\");\n\n//# sourceURL=webpack:///external_%22faker%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "is-reachable":
/*!*******************************!*\
  !*** external "is-reachable" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"is-reachable\");\n\n//# sourceURL=webpack:///external_%22is-reachable%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "wait-port":
/*!****************************!*\
  !*** external "wait-port" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"wait-port\");\n\n//# sourceURL=webpack:///external_%22wait-port%22?");

/***/ })

/******/ });
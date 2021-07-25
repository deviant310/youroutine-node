(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/db.ts":
/*!**************************!*\
  !*** ./src/config/db.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst { DB_HOST: dbHost = 'localhost', DB_PORT: dbPort = 5432, DB_NAME: dbName = 'postgres', DB_USER: dbUser = 'postgres', DB_PASSWORD: dbPassword = '' } = dotenv_parse_variables_1.default(process.env);\nexports.default = {\n    connections: {\n        default: {\n            driver: 'pgsql',\n            host: dbHost,\n            port: dbPort,\n            database: dbName,\n            user: dbUser,\n            password: dbPassword\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./src/config/db.ts?");

/***/ }),

/***/ "./src/config/routes.ts":
/*!******************************!*\
  !*** ./src/config/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    signIn: '/signin',\n    auth: '/auth',\n    entityIndex: '/:model(notes)',\n    entityItem: '/:model(notes)/:id'\n};\n\n\n//# sourceURL=webpack:///./src/config/routes.ts?");

/***/ }),

/***/ "./src/console/commands sync \\.ts$":
/*!******************************************************!*\
  !*** ./src/console/commands sync nonrecursive \.ts$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./create-admin.ts\": \"./src/console/commands/create-admin.ts\",\n\t\"./notes-seed.ts\": \"./src/console/commands/notes-seed.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/console/commands sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/console/commands_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/console/commands/create-admin.ts":
/*!**********************************************!*\
  !*** ./src/console/commands/create-admin.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst db_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/db */ \"@jsway/interior/core/db\"));\nconst DB = new db_1.default();\nclass CreateAdmin {\n    run() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield DB.connection();\n            const passwordHash = yield bcrypt_1.hash('123456', 5);\n            yield query(`\n      insert into users (name, email, password)\n      values ($1, $2, $3)\n  `, ['Admin', 'admin@jsway.ru', passwordHash]);\n            return 0;\n        });\n    }\n}\nexports.default = CreateAdmin;\n\n\n//# sourceURL=webpack:///./src/console/commands/create-admin.ts?");

/***/ }),

/***/ "./src/console/commands/notes-seed.ts":
/*!********************************************!*\
  !*** ./src/console/commands/notes-seed.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker_1 = __webpack_require__(/*! faker */ \"faker\");\nconst db_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/db */ \"@jsway/interior/core/db\"));\nconst DB = new db_1.default();\nclass NotesSeed {\n    run() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield DB.connection();\n            yield Array.from(Array(3)).reduce(promise => promise.then(() => __awaiter(this, void 0, void 0, function* () {\n                yield query(`\n        insert into notes (title, description) values ($1, $2)\n      `, [\n                    faker_1.lorem.word(),\n                    faker_1.lorem.paragraphs()\n                ]);\n            })), Promise.resolve());\n            return 0;\n        });\n    }\n}\nexports.default = NotesSeed;\n\n\n//# sourceURL=webpack:///./src/console/commands/notes-seed.ts?");

/***/ }),

/***/ "./src/db/migrations sync \\.ts$":
/*!***************************************************!*\
  !*** ./src/db/migrations sync nonrecursive \.ts$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./1626534129061_create-session-table.ts\": \"./src/db/migrations/1626534129061_create-session-table.ts\",\n\t\"./1626534146212_create-users-table.ts\": \"./src/db/migrations/1626534146212_create-users-table.ts\",\n\t\"./1626534162948_create-notes-table.ts\": \"./src/db/migrations/1626534162948_create-notes-table.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/db/migrations sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/db/migrations_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/db/migrations/1626534129061_create-session-table.ts":
/*!*****************************************************************!*\
  !*** ./src/db/migrations/1626534129061_create-session-table.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst db_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/db */ \"@jsway/interior/core/db\"));\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst { NODE_MODULES_PATH = './node_modules' } = dotenv_parse_variables_1.default(process.env);\nconst DB = new db_1.default();\n// const { db, getConnection } = DBDefiner;\n// const { driver } = getConnection();\nclass CreateSessionTable {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const queryFilePath = path_1.resolve(NODE_MODULES_PATH, 'connect-pg-simple', 'table.sql');\n            const queryString = fs_1.readFileSync(queryFilePath).toString();\n            const connection = yield DB.connection();\n            yield connection.query(queryString);\n        });\n    }\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateSessionTable;\n\n\n//# sourceURL=webpack:///./src/db/migrations/1626534129061_create-session-table.ts?");

/***/ }),

/***/ "./src/db/migrations/1626534146212_create-users-table.ts":
/*!***************************************************************!*\
  !*** ./src/db/migrations/1626534146212_create-users-table.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst db_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/db */ \"@jsway/interior/core/db\"));\nconst DB = new db_1.default();\nclass CreateUsersTable {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield DB.connection();\n            yield connection.query(`\n      create table users (\n        id bigserial not null constraint users_pkey primary key,\n        name varchar(255) not null,\n        email varchar(255) not null constraint users_email_unique unique,\n        password varchar(255) not null,\n        auth_token varchar(100),\n        active boolean default true not null\n      );\n    `);\n        });\n    }\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateUsersTable;\n\n\n//# sourceURL=webpack:///./src/db/migrations/1626534146212_create-users-table.ts?");

/***/ }),

/***/ "./src/db/migrations/1626534162948_create-notes-table.ts":
/*!***************************************************************!*\
  !*** ./src/db/migrations/1626534162948_create-notes-table.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst db_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/db */ \"@jsway/interior/core/db\"));\nconst DB = new db_1.default();\nclass CreateNotesTable {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield DB.connection();\n            yield connection.query(`\n      create table notes (\n        id bigserial not null constraint notes_pkey primary key,\n        title varchar(255) not null,\n        description text\n      );\n    `);\n        });\n    }\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateNotesTable;\n\n\n//# sourceURL=webpack:///./src/db/migrations/1626534162948_create-notes-table.ts?");

/***/ }),

/***/ "./src/http/controllers sync \\.ts$":
/*!******************************************************!*\
  !*** ./src/http/controllers sync nonrecursive \.ts$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./api.ts\": \"./src/http/controllers/api.ts\",\n\t\"./index.ts\": \"./src/http/controllers/index.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/http/controllers sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/http/controllers_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/http/controllers/api.ts":
/*!*************************************!*\
  !*** ./src/http/controllers/api.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst crypto_1 = __webpack_require__(/*! crypto */ \"crypto\");\nconst http_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/http */ \"@jsway/interior/core/http\"));\nconst auth_1 = __importDefault(__webpack_require__(/*! http/middleware/auth */ \"./src/http/middleware/auth.ts\"));\nconst body_parsers_1 = __webpack_require__(/*! http/middleware/body-parsers */ \"./src/http/middleware/body-parsers.ts\");\nconst headers_1 = __webpack_require__(/*! http/middleware/headers */ \"./src/http/middleware/headers.ts\");\nconst user_1 = __importDefault(__webpack_require__(/*! models/user */ \"./src/models/user.ts\"));\nconst note_1 = __importDefault(__webpack_require__(/*! models/note */ \"./src/models/note.ts\"));\nfunction getModelByRoute(route) {\n    switch (route) {\n        case 'users': return user_1.default;\n        case 'notes': return note_1.default;\n    }\n}\nfunction getAuthControllers(options) {\n    const { routesConfig: routes } = options;\n    return [\n        {\n            method: 'post',\n            path: routes.auth,\n            handler: ({ session, body }, response) => __awaiter(this, void 0, void 0, function* () {\n                const { login, password } = body;\n                yield (new user_1.default())\n                    .authenticate(login, password)\n                    .then(userId => {\n                    const accessToken = crypto_1.randomBytes(24).toString('hex');\n                    session.userId = userId;\n                    session.accessToken = accessToken;\n                    response.send({ accessToken });\n                })\n                    .catch(err => {\n                    response.status(401).send({ message: 'Unauthenticated', reason: err.message });\n                });\n            })\n        }\n    ];\n}\nfunction getModelControllers(options) {\n    const { routesConfig: routes } = options;\n    return [\n        {\n            method: 'get',\n            path: routes.entityIndex,\n            handler: ({ params }, response) => __awaiter(this, void 0, void 0, function* () {\n                const { model: route } = params;\n                const ModelClass = getModelByRoute(route);\n                if (typeof ModelClass !== 'undefined') {\n                    const list = yield new ModelClass().list();\n                    response.send(list);\n                }\n                else {\n                    response.status(500).send(`No model class presented for route \"${String(route)}\"`);\n                }\n            })\n        },\n        {\n            method: 'get',\n            path: routes.entityItem,\n            handler: ({ params }, response) => __awaiter(this, void 0, void 0, function* () {\n                const { model: route, id } = params;\n                const ModelClass = getModelByRoute(route);\n                if (typeof ModelClass !== 'undefined') {\n                    const item = yield (new ModelClass()).getById(id);\n                    response.send(item);\n                }\n                else {\n                    response.status(500).send(`No model class presented for route \"${String(route)}\"`);\n                }\n            })\n        }\n    ];\n}\nexports.default = [\n    http_1.default.setMiddleware(getAuthControllers, headers_1.apiHeaders, body_parsers_1.json),\n    http_1.default.setMiddleware(getModelControllers, headers_1.apiHeaders, body_parsers_1.json, auth_1.default)\n];\n\n\n//# sourceURL=webpack:///./src/http/controllers/api.ts?");

/***/ }),

/***/ "./src/http/controllers/index.ts":
/*!***************************************!*\
  !*** ./src/http/controllers/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst http_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/http */ \"@jsway/interior/core/http\"));\nconst auth_1 = __importDefault(__webpack_require__(/*! http/middleware/auth */ \"./src/http/middleware/auth.ts\"));\nfunction getBaseControllers(options) {\n    const { routesConfig: routes, publicPath } = options;\n    const handler = () => __awaiter(this, void 0, void 0, function* () {\n        return fs_1.readFileSync(path_1.resolve(publicPath, 'index.html'));\n    });\n    return [\n        {\n            method: 'get',\n            path: routes.signIn,\n            handler\n        },\n        {\n            method: 'get',\n            path: routes.entityIndex,\n            handler\n        },\n        {\n            method: 'get',\n            path: routes.entityItem,\n            handler\n        }\n    ];\n}\nexports.default = http_1.default.setMiddleware(getBaseControllers, auth_1.default);\n\n\n//# sourceURL=webpack:///./src/http/controllers/index.ts?");

/***/ }),

/***/ "./src/http/middleware/auth.ts":
/*!*************************************!*\
  !*** ./src/http/middleware/auth.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst routes_1 = __importDefault(__webpack_require__(/*! config/routes */ \"./src/config/routes.ts\"));\nfunction auth(request, response, next) {\n    const { signIn: signInPath } = routes_1.default;\n    const { session, xhr, url } = request;\n    const { userId } = session;\n    if (typeof userId !== 'undefined') {\n        next();\n    }\n    else {\n        if (xhr) {\n            response.status(401).send({ message: 'Unauthorized', redirect: signInPath });\n        }\n        else {\n            if (url !== signInPath) {\n                response.redirect(signInPath);\n            }\n            else {\n                next();\n            }\n        }\n    }\n}\nexports.default = auth;\n\n\n//# sourceURL=webpack:///./src/http/middleware/auth.ts?");

/***/ }),

/***/ "./src/http/middleware/body-parsers.ts":
/*!*********************************************!*\
  !*** ./src/http/middleware/body-parsers.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.json = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nexports.json = express_1.default.json();\n\n\n//# sourceURL=webpack:///./src/http/middleware/body-parsers.ts?");

/***/ }),

/***/ "./src/http/middleware/headers.ts":
/*!****************************************!*\
  !*** ./src/http/middleware/headers.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.apiHeaders = void 0;\nfunction apiHeaders(request, response, next) {\n    response.set({\n        'Access-Control-Allow-Origin': '*'\n    });\n    next();\n}\nexports.apiHeaders = apiHeaders;\n\n\n//# sourceURL=webpack:///./src/http/middleware/headers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst minimist_1 = __importDefault(__webpack_require__(/*! minimist */ \"minimist\"));\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst console_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/console */ \"@jsway/interior/core/console\"));\nconst import_all_1 = __importDefault(__webpack_require__(/*! @jsway/interior/utils/import-all */ \"@jsway/interior/utils/import-all\"));\nconst db_1 = __importDefault(__webpack_require__(/*! config/db */ \"./src/config/db.ts\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! config/routes */ \"./src/config/routes.ts\"));\ndotenv_1.config();\nconst { IS_COMMAND = false, APP_PUBLIC_DIR = './build/public', APP_STORAGE_DIR = './storage', APP_HOST = 'localhost', APP_PORT = 3000 } = dotenv_parse_variables_1.default(process.env);\nconst app = express_1.default();\n(() => __awaiter(void 0, void 0, void 0, function* () {\n    interior_1.console({\n        commandsFactory: import_all_1.default(__webpack_require__(\"./src/console/commands sync \\\\.ts$\"))\n    });\n    yield interior_1.db(db_1.default, {\n        migrationsFactory: import_all_1.default(__webpack_require__(\"./src/db/migrations sync \\\\.ts$\")),\n        migrationsStoragePath: path_1.resolve(APP_STORAGE_DIR, 'migrations.json')\n    });\n    yield interior_1.session(app);\n    if (IS_COMMAND) {\n        const _a = minimist_1.default(process.argv.slice(2)), { _: commands } = _a, options = __rest(_a, [\"_\"]);\n        const [command] = commands;\n        const exitCode = yield console_1.default.runCommand(command, options);\n        process.exit(exitCode);\n    }\n    else {\n        interior_1.http(app, {\n            publicPath: path_1.resolve(APP_PUBLIC_DIR),\n            routesConfig: routes_1.default,\n            controllersFactory: import_all_1.default(__webpack_require__(\"./src/http/controllers sync \\\\.ts$\"))\n        });\n        const listener = app.listen(APP_PORT, APP_HOST, () => {\n            const { address, port } = listener.address();\n            console.log(`App is running on http://${address}:${port}\\n`);\n        });\n    }\n}))();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/note.ts":
/*!****************************!*\
  !*** ./src/models/note.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst model_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/model */ \"@jsway/interior/core/model\"));\nclass NoteModel extends model_1.default {\n    constructor() {\n        super(...arguments);\n        this.table = 'notes';\n    }\n}\nexports.default = NoteModel;\n\n\n//# sourceURL=webpack:///./src/models/note.ts?");

/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst model_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/model */ \"@jsway/interior/core/model\"));\nconst db_1 = __importDefault(__webpack_require__(/*! @jsway/interior/core/db */ \"@jsway/interior/core/db\"));\nconst DB = new db_1.default();\nclass UserModel extends model_1.default {\n    constructor() {\n        super(...arguments);\n        this.table = 'users';\n    }\n    authenticate(login, password) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield DB.connection();\n            const { rows } = yield connection.query(`\n      select * from ${this.table} where email=$1 limit 1\n    `, [login]);\n            const user = rows[0];\n            if (typeof user === 'undefined') {\n                throw new Error(`User \"${login}\" is not exist!`);\n            }\n            const { id, password: passwordHash } = user;\n            const isAuthenticated = yield bcrypt_1.compare(password, passwordHash);\n            if (!isAuthenticated) {\n                throw new Error(`Wrong password for user \"${login}\"!`);\n            }\n            return id;\n        });\n    }\n}\nexports.default = UserModel;\n\n\n//# sourceURL=webpack:///./src/models/user.ts?");

/***/ }),

/***/ "@jsway/interior":
/*!**********************************!*\
  !*** external "@jsway/interior" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jsway/interior\");\n\n//# sourceURL=webpack:///external_%22@jsway/interior%22?");

/***/ }),

/***/ "@jsway/interior/core/console":
/*!***********************************************!*\
  !*** external "@jsway/interior/core/console" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jsway/interior/core/console\");\n\n//# sourceURL=webpack:///external_%22@jsway/interior/core/console%22?");

/***/ }),

/***/ "@jsway/interior/core/db":
/*!******************************************!*\
  !*** external "@jsway/interior/core/db" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jsway/interior/core/db\");\n\n//# sourceURL=webpack:///external_%22@jsway/interior/core/db%22?");

/***/ }),

/***/ "@jsway/interior/core/http":
/*!********************************************!*\
  !*** external "@jsway/interior/core/http" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jsway/interior/core/http\");\n\n//# sourceURL=webpack:///external_%22@jsway/interior/core/http%22?");

/***/ }),

/***/ "@jsway/interior/core/model":
/*!*********************************************!*\
  !*** external "@jsway/interior/core/model" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jsway/interior/core/model\");\n\n//# sourceURL=webpack:///external_%22@jsway/interior/core/model%22?");

/***/ }),

/***/ "@jsway/interior/utils/import-all":
/*!***************************************************!*\
  !*** external "@jsway/interior/utils/import-all" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jsway/interior/utils/import-all\");\n\n//# sourceURL=webpack:///external_%22@jsway/interior/utils/import-all%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

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

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"minimist\");\n\n//# sourceURL=webpack:///external_%22minimist%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });
});
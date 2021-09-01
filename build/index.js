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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst { DB_CONNECTION: connection = 'pgsql', DB_HOST: host = 'localhost', DB_PORT: port = 5432, DB_NAME: database = 'postgres', DB_USER: user = 'postgres', DB_PASSWORD: password = '' } = dotenv_parse_variables_1.default(process.env);\nexports.default = {\n    defaultConnection: connection,\n    connections: {\n        pgsql: {\n            driver: 'pgsql',\n            host,\n            port,\n            database,\n            user,\n            password\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./src/config/db.ts?");

/***/ }),

/***/ "./src/config/http.ts":
/*!****************************!*\
  !*** ./src/config/http.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\nconst connect_pg_simple_1 = __importDefault(__webpack_require__(/*! connect-pg-simple */ \"connect-pg-simple\"));\nconst { APP_PUBLIC_DIR = './build/public', APP_HOST = 'localhost', APP_PORT = 80, SESSION_DRIVER: sessionDriver = 'database' } = dotenv_parse_variables_1.default(process.env);\nexports.default = {\n    host: APP_HOST,\n    port: APP_PORT,\n    staticPath: path_1.resolve(APP_PUBLIC_DIR),\n    loginRoute: 'login',\n    headers: {\n        'Content-Security-Policy': 'default-src \\'self\\''\n    },\n    sessionDriver,\n    sessionDrivers: {\n        database() {\n            const db = new interior_1.DB();\n            const { driver, host, port, database, user, password } = db.getConnectionConfig();\n            switch (driver) {\n                case 'pgsql': {\n                    const PostgreSQLSession = connect_pg_simple_1.default(express_session_1.default);\n                    return {\n                        store: new PostgreSQLSession({ conObject: { host, port, database, user, password } }),\n                        secret: 'session-secret',\n                        saveUninitialized: true,\n                        resave: true\n                    };\n                }\n            }\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./src/config/http.ts?");

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
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst db = new interior_1.DB();\nclass CreateAdmin extends interior_1.ConsoleCommand {\n    run() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield db.connection();\n            const passwordHash = yield bcrypt_1.hash('123456', 5);\n            yield query(`\n      insert into users (name, email, password)\n      values ($1, $2, $3)\n  `, ['Admin', 'admin@jsway.ru', passwordHash]);\n            return 0;\n        });\n    }\n}\nexports.default = CreateAdmin;\n\n\n//# sourceURL=webpack:///./src/console/commands/create-admin.ts?");

/***/ }),

/***/ "./src/console/commands/notes-seed.ts":
/*!********************************************!*\
  !*** ./src/console/commands/notes-seed.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst faker_1 = __webpack_require__(/*! faker */ \"faker\");\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst db = new interior_1.DB();\nclass NotesSeed extends interior_1.ConsoleCommand {\n    run() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield db.connection();\n            yield Array.from(Array(3)).reduce(promise => promise.then(() => __awaiter(this, void 0, void 0, function* () {\n                yield query(`\n        insert into notes (title, description) values ($1, $2)\n      `, [\n                    faker_1.lorem.word(),\n                    faker_1.lorem.paragraphs()\n                ]);\n            })), Promise.resolve());\n            return 0;\n        });\n    }\n}\nexports.default = NotesSeed;\n\n\n//# sourceURL=webpack:///./src/console/commands/notes-seed.ts?");

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
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst db = new interior_1.DB();\nclass CreateSessionTable extends interior_1.DBMigration {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const queryFilePath = path_1.resolve('node_modules', 'connect-pg-simple', 'table.sql');\n            const queryString = fs_1.readFileSync(queryFilePath).toString();\n            const connection = yield db.connection();\n            yield connection.query(queryString);\n        });\n    }\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateSessionTable;\n\n\n//# sourceURL=webpack:///./src/db/migrations/1626534129061_create-session-table.ts?");

/***/ }),

/***/ "./src/db/migrations/1626534146212_create-users-table.ts":
/*!***************************************************************!*\
  !*** ./src/db/migrations/1626534146212_create-users-table.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst db = new interior_1.DB();\nclass CreateUsersTable extends interior_1.DBMigration {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield db.connection();\n            yield connection.query(`\n      create table users (\n        id bigserial not null constraint users_pkey primary key,\n        name varchar(255) not null,\n        email varchar(255) not null constraint users_email_unique unique,\n        password varchar(255) not null,\n        auth_token varchar(100),\n        active boolean default true not null\n      );\n    `);\n        });\n    }\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateUsersTable;\n\n\n//# sourceURL=webpack:///./src/db/migrations/1626534146212_create-users-table.ts?");

/***/ }),

/***/ "./src/db/migrations/1626534162948_create-notes-table.ts":
/*!***************************************************************!*\
  !*** ./src/db/migrations/1626534162948_create-notes-table.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst db = new interior_1.DB();\nclass CreateNotesTable extends interior_1.DBMigration {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield db.connection();\n            yield connection.query(`\n      create table notes (\n        id bigserial not null constraint notes_pkey primary key,\n        title varchar(255) not null,\n        description text\n      );\n    `);\n        });\n    }\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateNotesTable;\n\n\n//# sourceURL=webpack:///./src/db/migrations/1626534162948_create-notes-table.ts?");

/***/ }),

/***/ "./src/http/controllers sync recursive \\.ts$":
/*!*****************************************!*\
  !*** ./src/http/controllers sync \.ts$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./api/auth.ts\": \"./src/http/controllers/api/auth.ts\",\n\t\"./api/note.ts\": \"./src/http/controllers/api/note.ts\",\n\t\"./api/notes.ts\": \"./src/http/controllers/api/notes.ts\",\n\t\"./index.ts\": \"./src/http/controllers/index.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/http/controllers sync recursive \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/http/controllers_sync_\\.ts$?");

/***/ }),

/***/ "./src/http/controllers/api/auth.ts":
/*!******************************************!*\
  !*** ./src/http/controllers/api/auth.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst crypto_1 = __webpack_require__(/*! crypto */ \"crypto\");\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst user_1 = __importDefault(__webpack_require__(/*! models/user */ \"./src/models/user.ts\"));\nclass AuthController extends interior_1.HttpController {\n    get(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { accessToken } = request.session;\n            if (accessToken) {\n                return { error: false, message: { accessToken } };\n            }\n            else {\n                return { error: true, message: 'Unauthorized' };\n            }\n        });\n    }\n    post(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { login, password } = request.body;\n            return (new user_1.default())\n                .authenticate(login, password)\n                .then(userId => {\n                const accessToken = crypto_1.randomBytes(24).toString('hex');\n                request.session.userId = userId;\n                request.session.accessToken = accessToken;\n                return { error: false, message: { accessToken } };\n            })\n                .catch(err => ({ error: true, message: err.message }));\n        });\n    }\n}\nexports.default = AuthController;\n\n\n//# sourceURL=webpack:///./src/http/controllers/api/auth.ts?");

/***/ }),

/***/ "./src/http/controllers/api/note.ts":
/*!******************************************!*\
  !*** ./src/http/controllers/api/note.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst note_1 = __importDefault(__webpack_require__(/*! models/note */ \"./src/models/note.ts\"));\n//type CreateBody = NoteModel.Schema[];\nclass NoteController extends interior_1.HttpController {\n    get(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            /*const validator = await new HttpValidator(...rules).validate(request);\n            \n            if (validator.hasErrors) {\n              return validator.errors;\n            }*/\n            const { id } = request.params;\n            return (new note_1.default()).getById(id);\n        });\n    }\n}\nexports.default = NoteController;\n\n\n//# sourceURL=webpack:///./src/http/controllers/api/note.ts?");

/***/ }),

/***/ "./src/http/controllers/api/notes.ts":
/*!*******************************************!*\
  !*** ./src/http/controllers/api/notes.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst note_1 = __importDefault(__webpack_require__(/*! models/note */ \"./src/models/note.ts\"));\n//type CreateBody = NoteModel.Schema[];\nclass NotesController extends interior_1.HttpController {\n    get(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            /*const validator = await new HttpValidator(...rules).validate(request);\n            \n            if (validator.hasErrors) {\n              return validator.errors;\n            }*/\n            const { filters } = request.params;\n            return (new note_1.default()).list(filters);\n        });\n    }\n}\nexports.default = NotesController;\n\n\n//# sourceURL=webpack:///./src/http/controllers/api/notes.ts?");

/***/ }),

/***/ "./src/http/controllers/index.ts":
/*!***************************************!*\
  !*** ./src/http/controllers/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nclass IndexController extends interior_1.HttpController {\n    get() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const staticPath = interior_1.Http.getConfig().staticPath;\n            const indexPath = path_1.resolve(staticPath, 'index.html');\n            if (fs_1.existsSync(indexPath)) {\n                return fs_1.readFileSync(indexPath);\n            }\n        });\n    }\n}\nexports.default = IndexController;\n\n\n//# sourceURL=webpack:///./src/http/controllers/index.ts?");

/***/ }),

/***/ "./src/http/middlewares sync recursive \\.ts$":
/*!*****************************************!*\
  !*** ./src/http/middlewares sync \.ts$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./auth.ts\": \"./src/http/middlewares/auth.ts\",\n\t\"./headers.ts\": \"./src/http/middlewares/headers.ts\",\n\t\"./json.ts\": \"./src/http/middlewares/json.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/http/middlewares sync recursive \\\\.ts$\";\n\n//# sourceURL=webpack:///./src/http/middlewares_sync_\\.ts$?");

/***/ }),

/***/ "./src/http/middlewares/auth.ts":
/*!**************************************!*\
  !*** ./src/http/middlewares/auth.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nfunction auth(request, response, next) {\n    var _a, _b;\n    const { session, xhr, url } = request;\n    const { userId } = session;\n    const loginRoute = interior_1.Http.getConfig().loginRoute;\n    const loginPath = loginRoute && ((_a = interior_1.Http.getRoute(loginRoute)) === null || _a === void 0 ? void 0 : _a.path);\n    const homeRoute = interior_1.Http.getConfig().homeRoute;\n    const homePath = homeRoute && ((_b = interior_1.Http.getRoute(homeRoute)) === null || _b === void 0 ? void 0 : _b.path);\n    if (typeof userId !== 'undefined') {\n        next();\n    }\n    else {\n        if (xhr) {\n            if (typeof userId === 'undefined') {\n                response.status(401).send({ message: 'Unauthorized', redirect: loginPath });\n            }\n            else {\n                next();\n            }\n        }\n        else {\n            if (typeof userId === 'undefined') {\n                if (loginPath && url !== loginPath) {\n                    response.redirect(loginPath);\n                }\n                else {\n                    next();\n                }\n            }\n            else {\n                if (homePath && url === loginPath) {\n                    response.redirect(homePath);\n                }\n                else {\n                    next();\n                }\n            }\n        }\n    }\n}\nexports.default = auth;\n\n\n//# sourceURL=webpack:///./src/http/middlewares/auth.ts?");

/***/ }),

/***/ "./src/http/middlewares/headers.ts":
/*!*****************************************!*\
  !*** ./src/http/middlewares/headers.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.apiHeaders = void 0;\nfunction headers(request, response, next) {\n    response.set({\n        'Content-Security-Policy': 'default-src \\'self\\''\n    });\n    next();\n}\nexports.default = headers;\nfunction apiHeaders(request, response, next) {\n    response.set({\n        'Access-Control-Allow-Origin': '*'\n    });\n    next();\n}\nexports.apiHeaders = apiHeaders;\n\n\n//# sourceURL=webpack:///./src/http/middlewares/headers.ts?");

/***/ }),

/***/ "./src/http/middlewares/json.ts":
/*!**************************************!*\
  !*** ./src/http/middlewares/json.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nexports.default = express_1.default.json();\n\n\n//# sourceURL=webpack:///./src/http/middlewares/json.ts?");

/***/ }),

/***/ "./src/http/routes.ts":
/*!****************************!*\
  !*** ./src/http/routes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\ninterior_1.Http\n    .setRoutes({\n    login: { path: '/login' },\n    notes: { path: '/notes' },\n    note: { path: '/notes/:id' }\n}, 'auth')\n    .setRoutes({\n    apiAuth: { path: '/api/auth', controller: 'api/auth' }\n}, 'json')\n    .setRoutes({\n    apiNotes: { path: '/api/notes', controller: 'api/notes' },\n    apiNote: { path: '/api/notes/:id', controller: 'api/note' }\n}, 'json', 'auth');\n\n\n//# sourceURL=webpack:///./src/http/routes.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst minimist_1 = __importDefault(__webpack_require__(/*! minimist */ \"minimist\"));\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst db_1 = __importDefault(__webpack_require__(/*! config/db */ \"./src/config/db.ts\"));\nconst http_1 = __importDefault(__webpack_require__(/*! config/http */ \"./src/config/http.ts\"));\ndotenv_1.config();\nconst { NODE_ENV = 'development', IS_COMMAND = false, APP_STORAGE_DIR = './storage' } = dotenv_parse_variables_1.default(process.env);\nconst app = express_1.default();\n(() => __awaiter(void 0, void 0, void 0, function* () {\n    interior_1.Console\n        .setCommandsConfig({\n        allowCommandsExecution: NODE_ENV !== 'production'\n    })\n        .setCommands(interior_1.importAll(__webpack_require__(\"./src/console/commands sync \\\\.ts$\")));\n    yield interior_1.DB\n        .setConfig(db_1.default)\n        .setMigrations(interior_1.importAll(__webpack_require__(\"./src/db/migrations sync \\\\.ts$\")))\n        .setMigrationsLogPath(path_1.resolve(APP_STORAGE_DIR, 'migrations.json'))\n        .init();\n    if (IS_COMMAND) {\n        const _a = minimist_1.default(process.argv.slice(2)), { _: commands } = _a, options = __rest(_a, [\"_\"]);\n        const [command] = commands;\n        const exitCode = yield interior_1.Console.runCommand(command, options);\n        process.exit(exitCode);\n    }\n    else {\n        yield Promise.resolve().then(() => __importStar(__webpack_require__(/*! http/routes */ \"./src/http/routes.ts\")));\n        interior_1.Http\n            .setConfig(http_1.default)\n            .setApp(app)\n            .setControllers(interior_1.importAll(__webpack_require__(\"./src/http/controllers sync recursive \\\\.ts$\")))\n            .setMiddlewares(interior_1.importAll(__webpack_require__(\"./src/http/middlewares sync recursive \\\\.ts$\")))\n            .init();\n    }\n}))();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/note.ts":
/*!****************************!*\
  !*** ./src/models/note.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nclass NoteModel extends interior_1.Model {\n    constructor() {\n        super(...arguments);\n        this.table = 'notes';\n    }\n}\nexports.default = NoteModel;\n\n\n//# sourceURL=webpack:///./src/models/note.ts?");

/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst interior_1 = __webpack_require__(/*! @jsway/interior */ \"@jsway/interior\");\nconst db = new interior_1.DB();\nclass UserModel extends interior_1.Model {\n    constructor() {\n        super(...arguments);\n        this.table = 'users';\n    }\n    authenticate(login, password) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield db.connection();\n            const { rows } = yield connection.query(`\n      select * from ${this.table} where email=$1 limit 1\n    `, [login]);\n            const user = rows[0];\n            if (typeof user === 'undefined') {\n                throw new Error(`User \"${login}\" is not exist!`);\n            }\n            const { id, password: passwordHash } = user;\n            const isAuthenticated = yield bcrypt_1.compare(password, passwordHash);\n            if (!isAuthenticated) {\n                throw new Error(`Wrong password for user \"${login}\"!`);\n            }\n            return id;\n        });\n    }\n}\nexports.default = UserModel;\n\n\n//# sourceURL=webpack:///./src/models/user.ts?");

/***/ }),

/***/ "@jsway/interior":
/*!**********************************!*\
  !*** external "@jsway/interior" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jsway/interior\");\n\n//# sourceURL=webpack:///external_%22@jsway/interior%22?");

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
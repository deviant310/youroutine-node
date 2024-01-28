/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/db.ts":
/*!**************************!*\
  !*** ./src/config/db.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst { DB_CONNECTION: connection = 'pgsql', DB_HOST: host = 'localhost', DB_PORT: port = 5432, DB_NAME: database = 'postgres', DB_USER: user = 'postgres', DB_PASSWORD: password = '' } = dotenv_parse_variables_1.default(process.env);\nexports.default = {\n    defaultConnection: connection,\n    connections: {\n        pgsql: {\n            driver: 'pgsql',\n            host,\n            port,\n            database,\n            user,\n            password\n        }\n    }\n};\n\n\n//# sourceURL=webpack://planner/./src/config/db.ts?");

/***/ }),

/***/ "./src/config/http.ts":
/*!****************************!*\
  !*** ./src/config/http.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\nconst connect_pg_simple_1 = __importDefault(__webpack_require__(/*! connect-pg-simple */ \"connect-pg-simple\"));\nconst { APP_PUBLIC_DIR = './build/public', APP_HOST = 'localhost', APP_PORT = 80, SESSION_DRIVER: sessionDriver = 'database' } = dotenv_parse_variables_1.default(process.env);\n//@ TODO вынести sessionDrivers в nojo\nexports.default = {\n    host: APP_HOST,\n    port: APP_PORT,\n    staticPath: path_1.resolve(APP_PUBLIC_DIR),\n    loginRoute: 'login',\n    headers: {\n        'Content-Security-Policy': 'default-src \\'self\\''\n    },\n    sessionDriver,\n    sessionDrivers: {\n        database() {\n            const db = new nojo_1.DB();\n            const { driver, host, port, database, user, password } = db.getConnectionConfig();\n            switch (driver) {\n                case 'pgsql': {\n                    const PostgreSQLSession = connect_pg_simple_1.default(express_session_1.default);\n                    return {\n                        store: new PostgreSQLSession({ conObject: { host, port, database, user, password } }),\n                        secret: 'session-secret',\n                        saveUninitialized: true,\n                        resave: true\n                    };\n                }\n            }\n        }\n    }\n};\n\n\n//# sourceURL=webpack://planner/./src/config/http.ts?");

/***/ }),

/***/ "./src/console/commands/create-admin.ts":
/*!**********************************************!*\
  !*** ./src/console/commands/create-admin.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst db = new nojo_1.DB();\nclass CreateAdmin extends nojo_1.ConsoleCommand {\n    run() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield db.connection();\n            const passwordHash = yield bcrypt_1.hash('123456', 5);\n            yield query(`\n      insert into users (name, email, password)\n      values ($1, $2, $3)\n  `, ['Admin', 'admin@foobar.ru', passwordHash]);\n            return 0;\n        });\n    }\n}\nexports.default = CreateAdmin;\n\n\n//# sourceURL=webpack://planner/./src/console/commands/create-admin.ts?");

/***/ }),

/***/ "./src/console/commands/notes-seed.ts":
/*!********************************************!*\
  !*** ./src/console/commands/notes-seed.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst faker_1 = __webpack_require__(/*! faker */ \"faker\");\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst db = new nojo_1.DB();\nclass NotesSeed extends nojo_1.ConsoleCommand {\n    run() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { query } = yield db.connection();\n            yield Array.from(Array(3)).reduce(promise => promise.then(() => __awaiter(this, void 0, void 0, function* () {\n                yield query(`\n        insert into notes (title, description) values ($1, $2)\n      `, [\n                    faker_1.lorem.word(),\n                    faker_1.lorem.paragraphs()\n                ]);\n            })), Promise.resolve());\n            return 0;\n        });\n    }\n}\nexports.default = NotesSeed;\n\n\n//# sourceURL=webpack://planner/./src/console/commands/notes-seed.ts?");

/***/ }),

/***/ "./src/db/migrations/1626534129061_create-session-table.ts":
/*!*****************************************************************!*\
  !*** ./src/db/migrations/1626534129061_create-session-table.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst db = new nojo_1.DB();\nclass CreateSessionTable extends nojo_1.DBMigration {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const queryFilePath = path_1.resolve('node_modules', 'connect-pg-simple', 'table.sql');\n            const queryString = fs_1.readFileSync(queryFilePath).toString();\n            const connection = yield db.connection();\n            yield connection.query(queryString);\n        });\n    }\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateSessionTable;\n\n\n//# sourceURL=webpack://planner/./src/db/migrations/1626534129061_create-session-table.ts?");

/***/ }),

/***/ "./src/db/migrations/1626534146212_create-users-table.ts":
/*!***************************************************************!*\
  !*** ./src/db/migrations/1626534146212_create-users-table.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst db = new nojo_1.DB();\nclass CreateUsersTable extends nojo_1.DBMigration {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield db.connection();\n            yield connection.query(`\n      create table users (\n        id bigserial not null constraint users_pkey primary key,\n        name varchar(255) not null,\n        email varchar(255) not null constraint users_email_unique unique,\n        password varchar(255) not null,\n        auth_token varchar(100),\n        active boolean default true not null\n      );\n    `);\n        });\n    }\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateUsersTable;\n\n\n//# sourceURL=webpack://planner/./src/db/migrations/1626534146212_create-users-table.ts?");

/***/ }),

/***/ "./src/db/migrations/1626534162948_create-notes-table.ts":
/*!***************************************************************!*\
  !*** ./src/db/migrations/1626534162948_create-notes-table.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst db = new nojo_1.DB();\nclass CreateNotesTable extends nojo_1.DBMigration {\n    up() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield db.connection();\n            yield connection.query(`\n      create table notes (\n        id bigserial not null constraint notes_pkey primary key,\n        title varchar(255) not null,\n        description text\n      );\n    `);\n        });\n    }\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    down() {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n}\nexports.default = CreateNotesTable;\n\n\n//# sourceURL=webpack://planner/./src/db/migrations/1626534162948_create-notes-table.ts?");

/***/ }),

/***/ "./src/http/controllers/api/auth.ts":
/*!******************************************!*\
  !*** ./src/http/controllers/api/auth.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst crypto_1 = __webpack_require__(/*! crypto */ \"crypto\");\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst user_1 = __importDefault(__webpack_require__(/*! models/user */ \"./src/models/user.ts\"));\nclass AuthController extends nojo_1.HttpController {\n    get(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { accessToken } = request.session;\n            if (accessToken) {\n                return { error: false, message: { accessToken } };\n            }\n            else {\n                return { error: true, message: 'Unauthorized' };\n            }\n        });\n    }\n    post(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { login, password } = request.body;\n            return (new user_1.default())\n                .authenticate(login, password)\n                .then(userId => {\n                const accessToken = crypto_1.randomBytes(24).toString('hex');\n                request.session.userId = userId;\n                request.session.accessToken = accessToken;\n                return { error: false, message: { accessToken } };\n            })\n                .catch(err => ({ error: true, message: err.message }));\n        });\n    }\n}\nexports.default = AuthController;\n\n\n//# sourceURL=webpack://planner/./src/http/controllers/api/auth.ts?");

/***/ }),

/***/ "./src/http/controllers/api/note.ts":
/*!******************************************!*\
  !*** ./src/http/controllers/api/note.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst note_1 = __importDefault(__webpack_require__(/*! models/note */ \"./src/models/note.ts\"));\n//type CreateBody = NoteModel.Schema[];\nclass NoteController extends nojo_1.HttpController {\n    get(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            /*const validator = await new HttpValidator(...rules).validate(request);\n            \n            if (validator.hasErrors) {\n              return validator.errors;\n            }*/\n            const { id } = request.params;\n            return (new note_1.default()).getById(id);\n        });\n    }\n}\nexports.default = NoteController;\n\n\n//# sourceURL=webpack://planner/./src/http/controllers/api/note.ts?");

/***/ }),

/***/ "./src/http/controllers/api/notes.ts":
/*!*******************************************!*\
  !*** ./src/http/controllers/api/notes.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst note_1 = __importDefault(__webpack_require__(/*! models/note */ \"./src/models/note.ts\"));\n//type CreateBody = NoteModel.Schema[];\nclass NotesController extends nojo_1.HttpController {\n    get(request) {\n        return __awaiter(this, void 0, void 0, function* () {\n            /*const validator = await new HttpValidator(...rules).validate(request);\n            \n            if (validator.hasErrors) {\n              return validator.errors;\n            }*/\n            const { filters } = request.params;\n            return (new note_1.default()).list(filters);\n        });\n    }\n}\nexports.default = NotesController;\n\n\n//# sourceURL=webpack://planner/./src/http/controllers/api/notes.ts?");

/***/ }),

/***/ "./src/http/controllers/index.ts":
/*!***************************************!*\
  !*** ./src/http/controllers/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nclass IndexController extends nojo_1.HttpController {\n    get() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const staticPath = nojo_1.Http.getConfig().staticPath;\n            const indexPath = path_1.resolve(staticPath, 'index.html');\n            if (fs_1.existsSync(indexPath)) {\n                return fs_1.readFileSync(indexPath);\n            }\n        });\n    }\n}\nexports.default = IndexController;\n\n\n//# sourceURL=webpack://planner/./src/http/controllers/index.ts?");

/***/ }),

/***/ "./src/http/middlewares/auth.ts":
/*!**************************************!*\
  !*** ./src/http/middlewares/auth.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nfunction auth(request, response, next) {\n    var _a;\n    const { session, xhr, url } = request;\n    const { userId } = session;\n    const loginRoute = nojo_1.Http.getConfig().loginRoute;\n    const loginPath = loginRoute && ((_a = nojo_1.Http.getRoute(loginRoute)) === null || _a === void 0 ? void 0 : _a.path);\n    //const homeRoute = Http.getConfig().homeRoute;\n    if (userId !== undefined) {\n        next();\n    }\n    else {\n        if (xhr) {\n            response.status(401).send({ message: 'Unauthorized', redirect: loginPath });\n        }\n        else {\n            if (loginPath && url !== loginPath) {\n                response.redirect(loginPath);\n            }\n            else {\n                next();\n            }\n        }\n    }\n}\nexports.default = auth;\n\n\n//# sourceURL=webpack://planner/./src/http/middlewares/auth.ts?");

/***/ }),

/***/ "./src/http/middlewares/json.ts":
/*!**************************************!*\
  !*** ./src/http/middlewares/json.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nexports.default = express_1.default.json();\n\n\n//# sourceURL=webpack://planner/./src/http/middlewares/json.ts?");

/***/ }),

/***/ "./src/http/routes.ts":
/*!****************************!*\
  !*** ./src/http/routes.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\n//@ TODO реализовать в виде статичного экспорта маршрутов\nnojo_1.Http\n    .setRoutes({\n    login: { path: '/login' },\n    notes: { path: '/notes' },\n    note: { path: '/notes/:id' }\n}, 'auth')\n    .setRoutes({\n    apiAuth: { path: '/api/auth', controller: 'api/auth' }\n}, 'json')\n    .setRoutes({\n    apiNotes: { path: '/api/notes', controller: 'api/notes' },\n    apiNote: { path: '/api/notes/:id', controller: 'api/note' }\n}, 'json', 'auth');\n\n\n//# sourceURL=webpack://planner/./src/http/routes.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst minimist_1 = __importDefault(__webpack_require__(/*! minimist */ \"minimist\"));\nconst dotenv_parse_variables_1 = __importDefault(__webpack_require__(/*! dotenv-parse-variables */ \"dotenv-parse-variables\"));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst db_1 = __importDefault(__webpack_require__(/*! config/db */ \"./src/config/db.ts\"));\nconst http_1 = __importDefault(__webpack_require__(/*! config/http */ \"./src/config/http.ts\"));\ndotenv_1.config();\nconst { NODE_ENV = 'development', IS_COMMAND = false, APP_STORAGE_DIR = './storage' } = dotenv_parse_variables_1.default(process.env);\nconst app = express_1.default();\n(() => __awaiter(void 0, void 0, void 0, function* () {\n    nojo_1.Console\n        .setCommandsConfig({\n        allowCommandsExecution: NODE_ENV !== 'production'\n    })\n        .setCommands(nojo_1.importAll(__webpack_require__(\"./src/console/commands sync \\\\.ts$\")));\n    yield nojo_1.DB\n        .setConfig(db_1.default)\n        .setMigrations(nojo_1.importAll(__webpack_require__(\"./src/db/migrations sync \\\\.ts$\")))\n        .setMigrationsLogPath(path_1.resolve(APP_STORAGE_DIR, 'migrations.json'))\n        .init();\n    if (IS_COMMAND) {\n        const _a = minimist_1.default(process.argv.slice(2)), { _: commands } = _a, options = __rest(_a, [\"_\"]);\n        const [command] = commands;\n        const exitCode = yield nojo_1.Console.runCommand(command, options);\n        process.exit(exitCode);\n    }\n    else {\n        yield Promise.resolve().then(() => __importStar(__webpack_require__(/*! http/routes */ \"./src/http/routes.ts\")));\n        nojo_1.Http\n            .setConfig(http_1.default)\n            .setApp(app)\n            .setControllers(nojo_1.importAll(__webpack_require__(\"./src/http/controllers sync recursive \\\\.ts$\")))\n            .setMiddlewares(nojo_1.importAll(__webpack_require__(\"./src/http/middlewares sync recursive \\\\.ts$\")))\n            .init();\n    }\n}))();\n\n\n//# sourceURL=webpack://planner/./src/index.ts?");

/***/ }),

/***/ "./src/models/note.ts":
/*!****************************!*\
  !*** ./src/models/note.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nclass NoteModel extends nojo_1.Model {\n    constructor() {\n        super(...arguments);\n        this.table = 'notes';\n    }\n}\nexports.default = NoteModel;\n\n\n//# sourceURL=webpack://planner/./src/models/note.ts?");

/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst nojo_1 = __webpack_require__(/*! @foobar/nojo */ \"@foobar/nojo\");\nconst db = new nojo_1.DB();\nclass UserModel extends nojo_1.Model {\n    constructor() {\n        super(...arguments);\n        this.table = 'users';\n    }\n    authenticate(login, password) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const connection = yield db.connection();\n            const { rows } = yield connection.query(`\n      select * from ${this.table} where email=$1 limit 1\n    `, [login]);\n            const user = rows[0];\n            if (typeof user === 'undefined') {\n                throw new Error(`User \"${login}\" is not exist!`);\n            }\n            const { id, password: passwordHash } = user;\n            const isAuthenticated = yield bcrypt_1.compare(password, passwordHash);\n            if (!isAuthenticated) {\n                throw new Error(`Wrong password for user \"${login}\"!`);\n            }\n            return id;\n        });\n    }\n}\nexports.default = UserModel;\n\n\n//# sourceURL=webpack://planner/./src/models/user.ts?");

/***/ }),

/***/ "./src/console/commands sync \\.ts$":
/*!*******************************************************!*\
  !*** ./src/console/commands/ sync nonrecursive \.ts$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./create-admin.ts\": \"./src/console/commands/create-admin.ts\",\n\t\"./notes-seed.ts\": \"./src/console/commands/notes-seed.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/console/commands sync \\\\.ts$\";\n\n//# sourceURL=webpack://planner/./src/console/commands/_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/db/migrations sync \\.ts$":
/*!****************************************************!*\
  !*** ./src/db/migrations/ sync nonrecursive \.ts$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./1626534129061_create-session-table.ts\": \"./src/db/migrations/1626534129061_create-session-table.ts\",\n\t\"./1626534146212_create-users-table.ts\": \"./src/db/migrations/1626534146212_create-users-table.ts\",\n\t\"./1626534162948_create-notes-table.ts\": \"./src/db/migrations/1626534162948_create-notes-table.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/db/migrations sync \\\\.ts$\";\n\n//# sourceURL=webpack://planner/./src/db/migrations/_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./src/http/controllers sync recursive \\.ts$":
/*!******************************************!*\
  !*** ./src/http/controllers/ sync \.ts$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./api/auth.ts\": \"./src/http/controllers/api/auth.ts\",\n\t\"./api/note.ts\": \"./src/http/controllers/api/note.ts\",\n\t\"./api/notes.ts\": \"./src/http/controllers/api/notes.ts\",\n\t\"./index.ts\": \"./src/http/controllers/index.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/http/controllers sync recursive \\\\.ts$\";\n\n//# sourceURL=webpack://planner/./src/http/controllers/_sync_\\.ts$?");

/***/ }),

/***/ "./src/http/middlewares sync recursive \\.ts$":
/*!******************************************!*\
  !*** ./src/http/middlewares/ sync \.ts$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./auth.ts\": \"./src/http/middlewares/auth.ts\",\n\t\"./json.ts\": \"./src/http/middlewares/json.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/http/middlewares sync recursive \\\\.ts$\";\n\n//# sourceURL=webpack://planner/./src/http/middlewares/_sync_\\.ts$?");

/***/ }),

/***/ "@foobar/nojo":
/*!*******************************!*\
  !*** external "@foobar/nojo" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@foobar/nojo");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "connect-pg-simple":
/*!************************************!*\
  !*** external "connect-pg-simple" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("connect-pg-simple");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "dotenv-parse-variables":
/*!*****************************************!*\
  !*** external "dotenv-parse-variables" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv-parse-variables");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-session");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("faker");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("minimist");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
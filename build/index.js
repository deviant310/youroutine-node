module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(1)),{DB_DRIVER:o="pgsql"}=i.default(process.env),u=n(9);t.default=function(){return(new(0,u(`./${o}.ts`).default)).init()}},function(e,t){e.exports=require("dotenv-parse-variables")},function(e,t){e.exports=require("path")},function(e,t,n){var r={"./notes":4,"./notes.ts":4};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=3},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(23));class o extends i.default{constructor(){super(...arguments),this.table="notes"}}t.default=o},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Console=t.bootstrap=void 0;const o=i(n(6));t.Console=o.default;const u=i(n(14)),s=i(n(19));t.bootstrap=function(e){return r(this,void 0,void 0,(function*(){yield u.default(),s.default(e)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7);t.default=class{static runCommand(e,t){return(0,r(`./${e}.ts`).default)(t)}}},function(e,t,n){var r={"./seed.ts":8};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=7},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0));t.default=function(){return r(this,void 0,void 0,(function*(){const e=yield o.default();return yield e.query("\n    insert into notes\n      (title, description)\n    values\n      ('Заметка 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi.'),\n      ('Заметка 2', 'Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi.'),\n      ('Заметка 3', 'Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam.')\n  "),0}))}},function(e,t,n){var r={"./pgsql.ts":10};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=9},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(1)),u=n(11),s=i(n(12)),a=i(n(13)),{DB_HOST:c="localhost",DB_PORT:l=5432,DB_NAME:f="postgres",DB_USER:d="postgres",DB_PASSWORD:v=""}=o.default(process.env);class h{get connection(){return h._client}init(){return r(this,void 0,void 0,(function*(){if(!h._client){(yield a.default(`${c}:${l}`))||(yield s.default({host:c,port:l,timeout:15e3}));const e=new u.Client({user:d,host:c,database:f,password:v,port:l});yield e.connect(),h._client=e}return this}))}query(e,t){return r(this,void 0,void 0,(function*(){return this.connection.query(e,t)}))}}t.default=h},function(e,t){e.exports=require("pg")},function(e,t){e.exports=require("wait-port")},function(e,t){e.exports=require("is-reachable")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),o=n(15),u=n(16);t.default=function(){return r(this,void 0,void 0,(function*(){const e=i.resolve("/home/dunloop/www/@jsway/planner/storage","migrations.json"),t=o.existsSync(e)?JSON.parse(o.readFileSync(e).toString()):{},n=yield u.keys().sort((e,t)=>{const[{birthtimeMs:n},{birthtimeMs:r}]=[e,t].map(e=>o.statSync(i.resolve("/home/dunloop/www/@jsway/planner/src/backend/migrations",e)));return n-r}).reduce((e,n)=>e.then(e=>r(this,void 0,void 0,(function*(){const r=i.parse(n).name;if(t[r])return e;const o=new(0,u(n).default);return yield o.up(),e[r]={key:r,time:(new Date).toLocaleString("ru")},e}))),Promise.resolve({}));o.writeFileSync(e,JSON.stringify(Object.assign(Object.assign({},t),n),null,2))}))}},function(e,t){e.exports=require("fs")},function(e,t,n){var r={"./create.notes.table.ts":17,"./create.users.table.ts":18};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=16},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.down=t.up=void 0;const o=i(n(0));t.up=function(){return r(this,void 0,void 0,(function*(){return(yield o.default()).query("\n    create table notes (\n      id bigserial not null constraint notes_pkey primary key,\n      title varchar(255) not null,\n      description text\n    );\n  ")}))},t.down=function(){return r(this,void 0,void 0,(function*(){}))}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0));t.default=class{up(){return r(this,void 0,void 0,(function*(){return(yield o.default()).query("\n      create table users (\n        id bigserial not null constraint users_pkey primary key,\n        name varchar(255) not null,\n        email varchar(255) not null constraint users_email_unique unique,\n        password varchar(255) not null,\n        auth_token varchar(100),\n        active boolean default true not null\n      );\n    ")}))}down(){}}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),o=n(20);t.default=function(e){for(let t of o.keys()){const n=o(t).default,u=i.parse(t).name;for(let t of n){const{method:n,path:o,bodyParser:s,handler:a}=t;e[n](i.join("/"+u,o),s,(e,t)=>r(this,void 0,void 0,(function*(){const n=yield a(e);t.send(n)})))}}}},function(e,t,n){var r={"./api.ts":21};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=20},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(22)),u=[{method:"get",path:"/:model",bodyParser:o.default.json(),handler:({params:e})=>r(void 0,void 0,void 0,(function*(){const{model:t}=e;return(new(0,n(3)("./"+t).default)).list()}))},{method:"get",path:"/:model/:id",bodyParser:o.default.json(),handler:({params:e})=>r(void 0,void 0,void 0,(function*(){const{model:t,id:r}=e;return(new(0,n(3)("./"+t).default)).getById(r)}))}];t.default=u},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0));t.default=class{constructor(){return this.table="",new Proxy(this,{get:(e,t)=>{if(!this.table)throw new Error(`Table of ${this.constructor.name} is undefined! Define it in your model class!`);return e[t]}})}list(e={}){return r(this,void 0,void 0,(function*(){const e=yield o.default();return(yield e.query(`\n      select * from ${this.table}\n    `)).rows}))}getById(e){return r(this,void 0,void 0,(function*(){const t=yield o.default();return(yield t.query(`\n      select * from ${this.table} where id=$1 limit 1\n    `,[e])).rows[0]}))}}}]);
module.exports=function(e){var t={};function u(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,u),n.l=!0,n.exports}return u.m=e,u.c=t,u.d=function(e,t,i){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(i,n,function(t){return e[t]}.bind(null,n));return i},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u(u.s=0)}([function(e,t,u){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(u(1)),r={notes:u(2).default,notes_categories:u(3).default};t.default=e=>{e.post("/api/:controller/:action",n.default.json(),(e,t)=>{const u=e.params,{controller:i,action:n}=u,{body:a}=e,s=(0,(new(0,r[i]))[n])(a);t.send(s)})}},function(e,t){e.exports=require("express")},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=[{id:1,title:"Заметка 123",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi."},{id:2,title:"Еще одна заметка",description:"Quisque pellentesque massa at ante bibendum semper. Nunc egestas orci vel nulla auctor porta. Ut ultrices, mauris sed hendrerit feugiat, arcu metus tristique leo, non auctor ex nisi sit amet purus. Suspendisse rutrum vehicula nisi eu aliquam. In ullamcorper nisl sit amet urna aliquet faucibus. Nulla id cursus tortor, nec blandit sapien. Etiam posuere turpis ac elit fringilla rutrum. Fusce ullamcorper tellus et neque vehicula auctor. Vivamus et magna et orci eleifend fermentum ut quis lacus. Pellentesque cursus dui sed mi commodo, ac hendrerit nisl laoreet. Nullam gravida faucibus vulputate. Sed vehicula nisl vel orci bibendum tincidunt. Phasellus velit ex, vehicula id neque at, feugiat tincidunt quam. Sed vitae enim ut justo tempus sollicitudin sed eget sapien. Vivamus laoreet elit varius ipsum facilisis malesuada quis ut nunc."},{id:3,title:"Третья заметка",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed urna vel nulla varius congue. Nunc tempor efficitur egestas. Fusce sapien purus, porta pellentesque luctus non, facilisis nec ante. Nunc laoreet magna vel tempor elementum. Duis finibus lectus at mauris malesuada, nec blandit neque aliquam. Quisque urna dui, eleifend eget nisi vel, aliquam rhoncus odio. Integer tempor, dui eu molestie aliquam, eros nulla pharetra leo, quis consectetur orci orci id mi. Donec id nulla mi."}];t.default=class{list(){return i}get(e){let{id:t}=e;return i.find(e=>e.id===t)}}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{list(){return[{notes_categories:"list"}]}}}]).default;
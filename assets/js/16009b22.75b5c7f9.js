"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[2263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Next.js\uc5d0\uc11c \u2018className\u2019 did not match \uc5d0\ub7ec \ub300\uc751\ud574\ubcf4\uae30"},l=void 0,i={unversionedId:"front-end-development/nextjs/11",id:"front-end-development/nextjs/11",title:"Next.js\uc5d0\uc11c \u2018className\u2019 did not match \uc5d0\ub7ec \ub300\uc751\ud574\ubcf4\uae30",description:"image",source:"@site/docs/front-end-development/nextjs/11.md",sourceDirName:"front-end-development/nextjs",slug:"/front-end-development/nextjs/11",permalink:"/docs/front-end-development/nextjs/11",draft:!1,tags:[],version:"current",frontMatter:{title:"Next.js\uc5d0\uc11c \u2018className\u2019 did not match \uc5d0\ub7ec \ub300\uc751\ud574\ubcf4\uae30"},sidebar:"developmentSidebar",previous:{title:"Dockder Container \uc548\uc5d0\uc11c pm2\ub85c next.js \uc2e4\ud589\ud558\ub294 \ubc29\ubc95",permalink:"/docs/front-end-development/nextjs/10"},next:{title:"Next.js\uc5d0\uc11c SSR\uc77c \ub54c styled-components\uac00 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc744 \ub54c \ub300\uc751\ubc29\ubc95",permalink:"/docs/front-end-development/nextjs/12"}},c={},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(9007).Z,width:"1672",height:"774"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n  "presets": ["next/babel"],\n  "plugins": [\n    [\n      "babel-plugin-styled-components",\n      {\n                // \ucf54\ub4dc\uac00 \ud3ec\ud568\ub41c \ud30c\uc77c\uba85\uc744 \uc54c\ub824\uc90c\n                "fileName": true,\n                // \ud074\ub798\uc2a4\uba85\uc5d0 \ud574\ub2f9 \uc2a4\ud0c0\uc77c \uc815\ubcf4 \ucd94\uac00\n                "displayName": true,\n                // \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 \uc18d\uc131 \uc81c\uac70\n                "pure": true\n            }\n    ]\n  ]\n}\n')))}m.isMDXComponent=!0},9007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-1c5b04083d5a058f8c6768e395d5de98.png"}}]);
"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[6391],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(t),v=o,m=f["".concat(c,".").concat(v)]||f[v]||u[v]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=v;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8527:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={title:"ReferenceError at console.log"},i=void 0,l={unversionedId:"front-end-development/javascript/3",id:"front-end-development/javascript/3",title:"ReferenceError at console.log",description:"If variable",source:"@site/docs/front-end-development/javascript/3.md",sourceDirName:"front-end-development/javascript",slug:"/front-end-development/javascript/3",permalink:"/docs/front-end-development/javascript/3",draft:!1,tags:[],version:"current",frontMatter:{title:"ReferenceError at console.log"},sidebar:"developmentSidebar",previous:{title:"Cause of \u201cbrowser performance degradation\u201d - reflow, refaint",permalink:"/docs/front-end-development/javascript/2"},next:{title:"The Problems of Global Variable, \u201clet, const\u201d keyword and block level scope",permalink:"/docs/front-end-development/javascript/4"}},c={},s=[{value:"If variable",id:"if-variable",level:3},{value:"If primitive",id:"if-primitive",level:3}],p={toc:s},f="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"if-variable"},"If variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(message); // ReferenceError: message is not definedconst message = 'message'\n")),(0,o.kt)("p",null,"if you reference variable to console.log, then console.log reference variable \u21d2 then you reference variable before variable declaration, so it return ReferenceError"),(0,o.kt)("h3",{id:"if-primitive"},"If primitive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'console.log(3); // primitive value\nconsole.log("string"); // primitive value\n')),(0,o.kt)("p",null,"you might think this is not reference, so it would be assignment,"),(0,o.kt)("p",null,"this is NOT. because variable doesn\u2019t assign value, it\u2019s just pass the value to console.log"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[6391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"ReferenceError at console.log"},i=void 0,l={unversionedId:"front-end-development/javascript/3",id:"front-end-development/javascript/3",title:"ReferenceError at console.log",description:"If variable",source:"@site/docs/front-end-development/javascript/3.md",sourceDirName:"front-end-development/javascript",slug:"/front-end-development/javascript/3",permalink:"/docs/front-end-development/javascript/3",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698508080,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"ReferenceError at console.log"},sidebar:"developmentSidebar",previous:{title:"Cause of \u201cbrowser performance degradation\u201d - reflow, refaint",permalink:"/docs/front-end-development/javascript/2"},next:{title:"The Problems of Global Variable, \u201clet, const\u201d keyword and block level scope",permalink:"/docs/front-end-development/javascript/4"}},c={},s=[{value:"If variable",id:"if-variable",level:3},{value:"If primitive",id:"if-primitive",level:3}],p={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"if-variable"},"If variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(message); // ReferenceError: message is not definedconst message = 'message'\n")),(0,o.kt)("p",null,"if you reference variable to console.log, then console.log reference variable \u21d2 then you reference variable before variable declaration, so it return ReferenceError"),(0,o.kt)("h3",{id:"if-primitive"},"If primitive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'console.log(3); // primitive value\nconsole.log("string"); // primitive value\n')),(0,o.kt)("p",null,"you might think this is not reference, so it would be assignment,"),(0,o.kt)("p",null,"this is NOT. because variable doesn\u2019t assign value, it\u2019s just pass the value to console.log"))}u.isMDXComponent=!0}}]);
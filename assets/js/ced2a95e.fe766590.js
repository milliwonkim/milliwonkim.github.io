"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[9717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Next.js\uc5d0\uc11c Nookies\uc758 path\ub294 \ubb50\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uac78\uae4c?"},l=void 0,i={unversionedId:"front-end-development/nextjs/8",id:"front-end-development/nextjs/8",title:"Next.js\uc5d0\uc11c Nookies\uc758 path\ub294 \ubb50\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uac78\uae4c?",description:"- path\ub294 \ucfe0\uae30\uac00 \uc801\uc6a9\ub418\ub294 URL \uacbd\ub85c\ub97c \ub9d0\ud558\ub294 \uac74\ub370, \u2018/\u2019\ub97c \ud560 \uacbd\uc6b0, \ubaa8\ub4e0 \ud398\uc774\uc9c0\uc5d0\uc11c \ucfe0\ud0a4 \uc811\uadfc\uc774 \uac00\ub2a5\ud558\ub2e4",source:"@site/docs/front-end-development/nextjs/8.md",sourceDirName:"front-end-development/nextjs",slug:"/front-end-development/nextjs/8",permalink:"/docs/front-end-development/nextjs/8",draft:!1,tags:[],version:"current",frontMatter:{title:"Next.js\uc5d0\uc11c Nookies\uc758 path\ub294 \ubb50\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uac78\uae4c?"},sidebar:"developmentSidebar",previous:{title:"next-redux-wrapper\ub97c \uc774\uc6a9\ud574\uc11c Server\uc640 Client \uac04\uc758 Redux \uacf5\uc720\ud558\uae30",permalink:"/docs/front-end-development/nextjs/7"},next:{title:"monorepo \uae30\ubc18\uc758 next.js\ub97c docker\uc5d0 \uc62c\ub824\ubcf4\uc790",permalink:"/docs/front-end-development/nextjs/9"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { setCookie } from "nookies";\n\nconst handleLogin = () => {\n  // \ub85c\uadf8\uc778 \ucc98\ub9ac \ub85c\uc9c1...\n\n  // \ucfe0\ud0a4 \uc124\uc815 (\uc608: \ub85c\uadf8\uc778 \uc131\uacf5 \ud6c4 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \ucfe0\ud0a4\uc5d0 \uc800\uc7a5)\n  setCookie(null, "userToken", "example-token-value", {\n    maxAge: 3600, // \ucfe0\ud0a4\uc758 \uc720\ud6a8 \uae30\uac04 (\ucd08 \ub2e8\uc704)\n    path: "/", // \ucfe0\ud0a4\uac00 \uc801\uc6a9\ub418\ub294 URL \uacbd\ub85c (\uc774 \uacbd\uc6b0, \ubaa8\ub4e0 \ud398\uc774\uc9c0\uc5d0\uc11c \ucfe0\ud0a4 \uc811\uadfc \uac00\ub2a5)\n  });\n\n  // \ud398\uc774\uc9c0 \ub9ac\ub2e4\uc774\ub809\ud2b8 \ub4f1 \ud544\uc694\ud55c \ucc98\ub9ac...\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"path\ub294 \ucfe0\uae30\uac00 \uc801\uc6a9\ub418\ub294 URL \uacbd\ub85c\ub97c \ub9d0\ud558\ub294 \uac74\ub370, \u2018/\u2019\ub97c \ud560 \uacbd\uc6b0, \ubaa8\ub4e0 \ud398\uc774\uc9c0\uc5d0\uc11c \ucfe0\ud0a4 \uc811\uadfc\uc774 \uac00\ub2a5\ud558\ub2e4")))}m.isMDXComponent=!0}}]);
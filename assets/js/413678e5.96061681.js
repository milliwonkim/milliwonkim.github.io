"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[2333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 1. Lazy Loading"},o=void 0,c={unversionedId:"front-end-development/reactjs/12",id:"front-end-development/reactjs/12",title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 1. Lazy Loading",description:"\ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c \ub80c\ub354\ub9c1 \ud558\uba74 \ud06c\ub86c\uc5d0\uc11c\uc758 \ud37c\ud3ec\uba3c\uc2a4\uc640 fetching\ud558\ub294 \ud30c\uc77c\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",source:"@site/docs/front-end-development/reactjs/12.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/12",permalink:"/docs/front-end-development/reactjs/12",draft:!1,tags:[],version:"current",frontMatter:{title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 1. Lazy Loading"},sidebar:"developmentSidebar",previous:{title:"CRA \uc5c6\uc774 ESBuild\ub97c \uc774\uc6a9\ud55c \ub9ac\uc561\ud2b8 Boilerplate \ub9cc\ub4e4\uae30",permalink:"/docs/front-end-development/reactjs/11"},next:{title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 2. \ud14d\uc2a4\ud2b8 \uc555\ucd95",permalink:"/docs/front-end-development/reactjs/13"}},p={},s=[],l={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Switch, Route } from "react-router-dom";\nimport "./App.css";\nimport ListPage from "./pages/ListPage/index";\nimport ViewPage from "./pages/ViewPage/index";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Switch>\n        <Route path="/" component={ListPage} exact />\n        <Route path="/view/:id" component={ViewPage} exact />\n      </Switch>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c \ub80c\ub354\ub9c1 \ud558\uba74 \ud06c\ub86c\uc5d0\uc11c\uc758 \ud37c\ud3ec\uba3c\uc2a4\uc640 fetching\ud558\ub294 \ud30c\uc77c\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud37c\ud3ec\uba3c\uc2a4"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(4004).Z,width:"2000",height:"2404"})),(0,r.kt)("p",null,"\uc571\uc774 \ub85c\ub4dc \ub418\uc790\ub9c8\uc790 ListPage, ViewPage\uc5d0 \uad00\ub828\ub41c \ubaa8\ub4e0 js \ud30c\uc77c\uc774 \ub2e4 \uc5c5\ub85c\ub4dc \ub410\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8471).Z,width:"2000",height:"2061"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8709).Z,width:"2000",height:"614"})),(0,r.kt)("p",null,"0.chunk.js\uc758 \ub85c\ub529 \uc2dc\uac04\uc774 22ms"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \uc0c1\ud669\uc5d0\uc11c \ud37c\ud3ec\uba3c\uc2a4 \ud5a5\uc0c1\uc744 \uc704\ud574\uc11c"),(0,r.kt)("p",null,"Lazy Loading\uc744 \uc774\uc6a9\ud574\uc11c \ud544\uc694\ud560 \ub54c\ub9cc \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1 \ud558\ub294 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud560 \uac81\ub2c8\ub2e4."),(0,r.kt)("h1",{id:"lazy-loading"},"Lazy Loading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { Suspense } from "react";\nimport { Switch, Route } from "react-router-dom";\nimport "./App.css";\n\nconst ListPage = React.lazy(() => import("./pages/ListPage/index"));\nconst ViewPage = React.lazy(() => import("./pages/ViewPage/index"));\n\nfunction App() {\n  return (\n    <div className="App">\n      <Suspense fallback={<p>loading...</p>}>\n        <Switch>\n          <Route path="/" component={ListPage} exact />\n          <Route path="/view/:id" component={ViewPage} exact />\n        </Switch>\n      </Suspense>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"Suspense\ub85c \uac10\uc2f8\uc9c0 \uc54a\uc73c\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec\ub97c \ub9c8\uc8fc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(1410).Z,width:"2000",height:"1362"})),(0,r.kt)("p",null,"Lazy Loading\uc744 \uc801\uc6a9\ud55c \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(5174).Z,width:"2000",height:"2005"})),(0,r.kt)("p",null,"ViewPage\uc5d0 \ud574\ub2f9\ud558\ub294 URL\ub85c \uc774\ub3d9 \uc2dc, ViewPage\uc774 \ub80c\ub354\ub9c1 \ub418\uba74\uc11c"),(0,r.kt)("p",null,"\uadf8\uc5d0 \ud574\ub2f9\ud558\ub294 2.chunk.js, 5.chunk.js\uac00 \ub85c\ub4dc \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(2150).Z,width:"2000",height:"485"})),(0,r.kt)("p",null,"3.chunk.js \ud30c\uc77c \ub85c\ub4dc \uc2dc\uac04\uc774 6ms\ub85c \uc904\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(285).Z,width:"2000",height:"2035"})),(0,r.kt)("p",null,"\ud37c\ud3ec\uba3c\uc2a4\ub3c4 20\uc810\uc774\ub098 \uc624\ub978 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(2017).Z,width:"2000",height:"1960"})))}m.isMDXComponent=!0},4004:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-fc09469adb5e82b3281331f9b91eee08.png"},8471:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-b73c46ec4bc7d553d3d5e79c1f7dd77b.png"},8709:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-c1a53196b3fa6e7fb955ae9717fc4aae.png"},1410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-d1d69ace3edc633177838d3b834a5fe2.png"},5174:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-ed29c4c9a1ee20666948ba097d0ab6d9.png"},2150:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-ae9a8a5b248c2e99e6ea21cc0c522dbd.png"},285:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/7-fd2daf5a7f7226dc271c5c2495aeda1f.png"},2017:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8-973c6c3cc2d53c73c3875e246690fa07.png"}}]);
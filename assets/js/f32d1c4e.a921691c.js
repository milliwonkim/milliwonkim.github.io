"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[2628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[f]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"| \uc640 &\uc758 \ucc28\uc774"},i=void 0,p={unversionedId:"front-end-development/typescript/5",id:"front-end-development/typescript/5",title:"\\| \uc640 &\uc758 \ucc28\uc774",description:"| => javascript\uc758 || \ub290\ub08c (or)",source:"@site/docs/front-end-development/typescript/5.md",sourceDirName:"front-end-development/typescript",slug:"/front-end-development/typescript/5",permalink:"/docs/front-end-development/typescript/5",draft:!1,tags:[],version:"current",frontMatter:{title:"\\| \uc640 &\uc758 \ucc28\uc774"},sidebar:"developmentSidebar",previous:{title:"keyof \uc0ac\uc6a9\ubc95",permalink:"/docs/front-end-development/typescript/4"},next:{title:"\ud0c0\uc785\uc744 \uc9d1\ud569\uc73c\ub85c \uc774\ud574\ud558\uae30",permalink:"/docs/front-end-development/typescript/6"}},s={},c=[],l={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"| => javascript\uc758 || \ub290\ub08c (or)"),(0,o.kt)("p",null,"& => javascript\uc758 && \ub290\ub08c (and)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Person {\n  name: string;\n}\n\ninterface Liftspan {\n  birth: Date;\n  death?: Date;\n}\n\ntype PersonSpan = Person & Liftspan;\n\nconst spans: PersonSpan = {\n  name: \"kiwon\",\n  //   birth: new Date('2022-06-09'),death: new Date('2122-06-09')\n};\n\n/**\nType '{ name: string; death: Date; }' is not assignable to type 'PersonSpan'.\n  Property 'birth' is missing in type '{ name: string; death: Date; }' but required in type 'Liftspan'.(2322)\ninput.tsx(6, 5): 'birth' is declared here.\n*/ type PersonSpan = Person | Liftspan;\n\nconst spans: PersonSpan = {\n  name: \"kiwon\",\n  // birth: new Date('2022-06-09'),death: new Date('2122-06-09')\n};\n\n/*\n\uc815\uc0c1 \uc791\ub3d9\n*/\n")))}u.isMDXComponent=!0}}]);
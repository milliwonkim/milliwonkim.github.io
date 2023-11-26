"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[4176],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"React\uc5d0\uc11c useEffect\ub294 \uc5b4\ub5bb\uac8c \uc774\ub8e8\uc5b4\uc838\uc788\ub098?"},c=void 0,i={unversionedId:"front-end-development/reactjs/28",id:"front-end-development/reactjs/28",title:"React\uc5d0\uc11c useEffect\ub294 \uc5b4\ub5bb\uac8c \uc774\ub8e8\uc5b4\uc838\uc788\ub098?",description:"",source:"@site/docs/front-end-development/reactjs/28.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/28",permalink:"/docs/front-end-development/reactjs/28",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1700996348,formattedLastUpdatedAt:"Nov 26, 2023",frontMatter:{title:"React\uc5d0\uc11c useEffect\ub294 \uc5b4\ub5bb\uac8c \uc774\ub8e8\uc5b4\uc838\uc788\ub098?"},sidebar:"developmentSidebar",previous:{title:"React\uc5d0\uc11c useEffect \ub300\uc2e0\uc5d0 useLayoutEffect\uac00 \ub354 \uc88b\uc744\uae4c?",permalink:"/docs/front-end-development/reactjs/27"},next:{title:"React\uc758 StrictMode\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9ac\ub80c\ub354\ub9c1\ud558\uac8c \ub9cc\ub4dc\ub294\uac74\uac00?",permalink:"/docs/front-end-development/reactjs/29"}},l={},p=[],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function useEffect(callback, dependencies) {\n  const previousDependencies = useRef(dependencies);\n\n  // Call the callback function if dependencies have changed\n\n  if (!areDependenciesEqual(previousDependencies.current, dependencies)) {\n    callback();\n  }\n\n  // Update the previous dependencies\n\n  // useRef\ub97c \uc774\uc6a9\ud574\uc11c \uc774\uc804 \uac12\uc744 \uae30\uc5b5\ud558\uae30 \ub54c\ubb38\uc5d0\n  // previousDependencies\uac00 \ubc14\ub00c\uc5b4\ub3c4 \ub9ac\ub80c\ub354\ub9c1 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n  previousDependencies.current = dependencies;\n}\n\n// \ub450 deps array\uac00 \uac19\uc740\uc9c0 \uccb4\ud06c\ud558\ub294 Helper function\n\n// arr1\uc740 \uc774\uc804 deps array\n// arr2\ub294 \ud604\uc7ac deps array\nfunction areDependenciesEqual(arr1, arr2) {\n  // deps array\uac00 \uc544\uc608\uc5c6\uac70\ub098\n  // \uc774\uc804 deps array\uc640 \ud604\uc7ac deps array\uac00 \uac19\ub2e4\uba74\n  // \uc704\uc758 callback function\uc744 \ud2b8\ub9ac\uac70\ud55c\ub2e4\n  if (arr1 === undefined || arr2 === undefined || arr1.length !== arr2.length) {\n    return false;\n  }\n\n  // \uc774\uc804 deps arr[i]\uc640 \ud604\uc7ac deps arr[i]\uac00 \ud558\ub098\ub77c\ub3c4 \ub2e4\ub974\ub2e4\uba74\n  // \uc704\uc758 callback function\uc744 \ud2b8\ub9ac\uac70\ud55c\ub2e4\n  for (let i = 0; i < arr1.length; i++) {\n    if (arr1[i] !== arr2[i]) {\n      return false;\n    }\n  }\n\n  // \uc774\uac8c \ub2e4 \uc544\ub2d0\uacbd\uc6b0\n  // \uc704\uc758 callback function\uc744 \ud2b8\ub9ac\uac70\ud558\uc9c0 \uc54a\ub294\ub2e4\n  return true;\n}\n")))}u.isMDXComponent=!0}}]);
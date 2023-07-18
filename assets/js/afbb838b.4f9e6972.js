"use strict";(self.webpackChunktechdocs=self.webpackChunktechdocs||[]).push([[64],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||u;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,c=new Array(u);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var o=2;o<u;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const u={},c="useReducer",i={unversionedId:"React JS/useReducer",id:"React JS/useReducer",title:"useReducer",description:"* useReducer is used for State Management",source:"@site/docs/React JS/useReducer.md",sourceDirName:"React JS",slug:"/React JS/useReducer",permalink:"/techdocs/docs/React JS/useReducer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React JS/useReducer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React JS",permalink:"/techdocs/docs/category/react-js"},next:{title:"useRef",permalink:"/techdocs/docs/React JS/useRef"}},l={},o=[{value:"useReducer parameters",id:"usereducer-parameters",level:3},{value:"reducer function parameters",id:"reducer-function-parameters",level:3},{value:"useReducer return",id:"usereducer-return",level:3}],s={toc:o},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usereducer"},"useReducer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"useReducer is used for State Management"),(0,a.kt)("li",{parentName:"ul"},"It is an alternative to useState")),(0,a.kt)("h3",{id:"usereducer-parameters"},"useReducer parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    useReducer(reducer, initialState)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useReducer")," has 2 parameters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"reducer (function/method)"),(0,a.kt)("li",{parentName:"ul"},"initialState ")))),(0,a.kt)("h3",{id:"reducer-function-parameters"},"reducer function parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    newState = reducer(currentState, action)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reducer")," function has 2 parameters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"currentState")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"action")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reducer")," function will return a ",(0,a.kt)("inlineCode",{parentName:"li"},"newState"))),(0,a.kt)("h3",{id:"usereducer-return"},"useReducer return"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"useReducer")," will return a pair of state, depending on ",(0,a.kt)("inlineCode",{parentName:"li"},"reducer(currentState, action)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useReducer")," will returns a pair of values",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  [newState, dispatch]\n")))))}d.isMDXComponent=!0}}]);
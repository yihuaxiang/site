"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2328],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={title:"\u8def\u7531\u914d\u7f6e",order:5},p=void 0,u={unversionedId:"guide/basic/router",id:"guide/basic/router",title:"\u8def\u7531\u914d\u7f6e",description:"icejs \u63a8\u8350\u4f7f\u7528 \u914d\u7f6e\u5f0f\u8def\u7531 \u8fdb\u884c\u5e94\u7528\u7684\u8def\u7531\u7ba1\u7406\uff0c\u5982\u679c\u5e0c\u671b\u4f7f\u7528\u6587\u4ef6\u7ea6\u5b9a\u8def\u7531\u53ef\u53c2\u8003 \u6587\u6863\u3002",source:"@site/docs/guide/basic/router.md",sourceDirName:"guide/basic",slug:"/guide/basic/router",permalink:"/docs/guide/basic/router",draft:!1,editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/basic/router.md",tags:[],version:"current",frontMatter:{title:"\u8def\u7531\u914d\u7f6e",order:5},sidebar:"docs",previous:{title:"Vite \u6a21\u5f0f",permalink:"/docs/guide/basic/vite"},next:{title:"React \u7ec4\u4ef6",permalink:"/docs/guide/basic/component"}},s={},c=[{value:"\u8def\u7531\u5168\u5c40\u914d\u7f6e",id:"\u8def\u7531\u5168\u5c40\u914d\u7f6e",level:2},{value:"\u8def\u7531\u5217\u8868\u914d\u7f6e",id:"\u8def\u7531\u5217\u8868\u914d\u7f6e",level:2},{value:"\u8def\u7531\u8df3\u8f6c",id:"\u8def\u7531\u8df3\u8f6c",level:2},{value:"\u9ad8\u9636\u6307\u5357",id:"\u9ad8\u9636\u6307\u5357",level:2},{value:"\u6309\u9700\u52a0\u8f7d",id:"\u6309\u9700\u52a0\u8f7d",level:3},{value:"HashHistory \u4e0e BrowserHistory",id:"hashhistory-\u4e0e-browserhistory",level:3},{value:"\u5982\u4f55\u4f7f\u7528 BrowserRouter",id:"\u5982\u4f55\u4f7f\u7528-browserrouter",level:3},{value:"\u4f7f\u7528\u8def\u7531\u9ad8\u9636\u7ec4\u4ef6",id:"\u4f7f\u7528\u8def\u7531\u9ad8\u9636\u7ec4\u4ef6",level:3},{value:"\u52a8\u6001\u8def\u7531\u53c2\u6570",id:"\u52a8\u6001\u8def\u7531\u53c2\u6570",level:3},{value:"\u5982\u4f55\u914d\u7f6e\u5e26 <code>.</code> \u7684\u8def\u7531\u6bd4\u5982 <code>/a.html</code>",id:"\u5982\u4f55\u914d\u7f6e\u5e26--\u7684\u8def\u7531\u6bd4\u5982-ahtml",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"icejs \u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5f0f\u8def\u7531")," \u8fdb\u884c\u5e94\u7528\u7684\u8def\u7531\u7ba1\u7406\uff0c\u5982\u679c\u5e0c\u671b\u4f7f\u7528\u6587\u4ef6\u7ea6\u5b9a\u8def\u7531\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/advanced/convention-routing"},"\u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"\u8def\u7531\u5168\u5c40\u914d\u7f6e"},"\u8def\u7531\u5168\u5c40\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u914d\u7f6e\u8def\u7531\u7684\u7c7b\u578b\u548c\u57fa\u7840\u8def\u5f84\u7b49\u4fe1\u606f\uff0c\u5177\u4f53\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { runApp } from 'ice';\n\nconst appConfig = {\n  router: {\n    type: 'browser',\n    basename: '/seller',\n    fallback: <div>loading...</div>\n    modifyRoutes: (routes) => {\n      return routes;\n    }\n  }\n};\n\nrunApp(appConfig);\n")),(0,o.kt)("p",null,"\u914d\u7f6e\u9879\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: \u8def\u7531\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c ",(0,o.kt)("inlineCode",{parentName:"li"},"hash"),"\uff0c\u53ef\u9009\u503c ",(0,o.kt)("inlineCode",{parentName:"li"},"browser|hash|static")),(0,o.kt)("li",{parentName:"ul"},"basename: \u8def\u7531\u57fa\u51c6\u5730\u5740"),(0,o.kt)("li",{parentName:"ul"},"fallback: \u5f00\u542f\u6309\u9700\u52a0\u8f7d\u65f6\u914d\u7f6e fallback UI"),(0,o.kt)("li",{parentName:"ul"},"modifyRoutes: \u52a8\u6001\u4fee\u6539\u8def\u7531"),(0,o.kt)("li",{parentName:"ul"},"history: \u81ea\u5b9a\u4e49\u521b\u5efa history \u5bf9\u8c61\uff0c",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/history/blob/master/docs/getting-started.md"},"\u8be6\u89c1"))),(0,o.kt)("h2",{id:"\u8def\u7531\u5217\u8868\u914d\u7f6e"},"\u8def\u7531\u5217\u8868\u914d\u7f6e"),(0,o.kt)("p",null,"\u5e94\u7528\u7684\u8def\u7531\u4fe1\u606f\u7edf\u4e00\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes.ts")," \u4e2d\u914d\u7f6e\uff0c\u914d\u7f6e\u534f\u8bae\u652f\u6301\u591a\u7ea7\u5d4c\u5957\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import UserLayout from '@/Layouts/UserLayout';\nimport UserLogin from '@/pages/UserLogin';\nimport NotFound from '@/components/NotFound';\nimport wrapperPage from '@/components/WrapperPage';\n\nconst routerConfig = [\n  // \u5206\u7ec4\u8def\u7531\uff0cchildren \u91cc\u7684\u8def\u7531\u4f1a\u5c06\u7236\u8282\u70b9\u7684 component \u4f5c\u4e3a\u5e03\u5c40\u7ec4\u4ef6\n  {\n    path: '/user',\n    component: UserLayout,\n    children: [\n      {\n        // \u8def\u7531\u8def\u5f84\n        path: '/login',\n        // \u7cbe\u786e\u5339\u914d\n        exact: true,\n        // \u8def\u7531\u7ec4\u4ef6\n        component: UserLogin,\n        // \u6ce8\u610f\uff1a\u4ec5 2.x \u652f\u6301\u5728 routes \u4e2d\u914d\u7f6e\uff0cicejs 1.x \u53ea\u652f\u6301\u5c06 pageConfig \u914d\u7f6e\u5728\u5bf9\u5e94\u7684\u9875\u9762\u7ec4\u4ef6\u4e0a\uff0c\u8bf7\u53c2\u8003\u300c\u9875\u9762\u7ec4\u4ef6\u300d\u7ae0\u8282\n        pageConfig: {\n          title: '\u767b\u5f55\u9875\u9762',\n          scrollToTop: true,\n          // \u81ea\u5b9a\u4e49\u914d\u7f6e\n          foo: 'bar',\n        },\n      },\n      {\n        path: '/',\n        // \u91cd\u5b9a\u5411\n        redirect: '/user/login',\n      },\n      {\n        // 404 \u6ca1\u6709\u5339\u914d\u5230\u7684\u8def\u7531\n        component: NotFound,\n      },\n    ],\n  },\n  // \u975e\u5206\u7ec4\u8def\u7531\n  {\n    path: '/about',\n    component: About,\n  },\n];\n\nexport default routerConfig;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8def\u7531\u6709\u4e00\u4e2a\u6309\u987a\u5e8f\u5339\u914d\u7684\u89c4\u5219\uff0c\u4ece\u4e0a\u5230\u4e0b\u4e00\u65e6\u547d\u4e2d\u8def\u7531\u5339\u914d\u89c4\u5219\u5c31\u4f1a\u505c\u6b62\u904d\u5386\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u5728\u6700\u524d\u9762\u914d\u7f6e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," \u8fd9\u6837\u4e00\u4e2a\u8def\u7531\uff0c\u5219\u6240\u6709\u7684\u8def\u7531\u90fd\u4f1a\u547d\u4e2d\u8be5\u89c4\u5219\uff0c\u5bfc\u81f4\u5176\u4ed6\u8def\u7531\u6ca1\u6709\u6548\u679c\uff0c\u6240\u4ee5\u5728\u5f00\u53d1\u65f6\u8981\u6ce8\u610f\u8def\u7531\u7684\u987a\u5e8f\u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"exact: true")," \u5c5e\u6027\u7684\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"\u8def\u7531\u8df3\u8f6c"},"\u8def\u7531\u8df3\u8f6c"),(0,o.kt)("p",null,"\u901a\u5e38\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," \u7ec4\u4ef6\u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"history")," API \u8fdb\u884c\u8def\u7531\u7684\u8df3\u8f6c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Link, useHistory } from 'ice';\n\nfunction Home() {\n  const history = useHistory();\n  return (\n    <>\n      <Link to=\"/about\">\u53bb about \u9875\u9762</Link>\n      <span\n        onClick={() => {\n          history.push('/about');\n        }}\n      >\n        \u53bb about \u9875\u9762\n      </span>\n    </>\n  );\n}\n")),(0,o.kt)("p",null,"\u8def\u7531\u8df3\u8f6c\u4f20\u9012\u53c2\u6570\uff0c\u9664\u4e86\u901a\u8fc7 url params \u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"/projects/:id")," \u4ee5\u53ca url query \u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"/project?id=1")," \u4ee5\u5916\uff0c\u4e5f\u53ef\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u53c2\u6570\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1astate \u4f20\u9012\u53c2\u6570\u4ec5\u652f\u6301 BrowserHistory \u4e0d\u652f\u6301 HashHistory\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u91cc\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"router.type")," \u5b57\u6bb5\u53ef\u914d\u7f6e\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Link, useHistory } from 'ice';\n\nfunction Home() {\n  const history = useHistory();\n  return (\n    <>\n      <Link\n        to={{\n          pathname: '/about',\n          state: { from: 'click link' },\n        }}\n      >\n        \u53bb about \u9875\u9762\n      </Link>\n    </>\n  );\n}\n")),(0,o.kt)("p",null,"\u5728 about \u9875\u9762\u5373\u53ef\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," \u8bbf\u95ee\u5230\u5bf9\u5e94\u7684 state\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useLocation } from 'ice';\n\nfunction About() {\n  const location = useLocation();\n  console.log('history state', location.state);\n  return <></>;\n}\n")),(0,o.kt)("h2",{id:"\u9ad8\u9636\u6307\u5357"},"\u9ad8\u9636\u6307\u5357"),(0,o.kt)("h3",{id:"\u6309\u9700\u52a0\u8f7d"},"\u6309\u9700\u52a0\u8f7d"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/advanced/code-splitting"},"\u4ee3\u7801\u5206\u5272")," \u3002"),(0,o.kt)("h3",{id:"hashhistory-\u4e0e-browserhistory"},"HashHistory \u4e0e BrowserHistory"),(0,o.kt)("p",null,"\u524d\u7aef\u8def\u7531\u901a\u5e38\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff1aHashHistory \u548c BrowserHistory\uff0c\u8def\u7531\u90fd\u5e26\u7740 ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," \u8bf4\u660e\u4f7f\u7528\u7684\u662f HashHistory\u3002\u8fd9\u4e24\u79cd\u65b9\u5f0f\u4f18\u7f3a\u70b9\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7279\u70b9","\\","\u65b9\u6848"),(0,o.kt)("th",{parentName:"tr",align:null},"HashHistory"),(0,o.kt)("th",{parentName:"tr",align:null},"BrowserHistory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u7f8e\u89c2\u5ea6"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0d\u597d\uff0c\u6709 # \u53f7"),(0,o.kt)("td",{parentName:"tr",align:null},"\u597d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6613\u7528\u6027"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e2d\u7b49\uff0c\u9700\u8981 server \u914d\u5408")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56 server \u7aef\u914d\u7f6e"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4f9d\u8d56"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u8ddf\u951a\u70b9\u529f\u80fd\u51b2\u7a81"),(0,o.kt)("td",{parentName:"tr",align:null},"\u51b2\u7a81"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0d\u51b2\u7a81")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u517c\u5bb9\u6027"),(0,o.kt)("td",{parentName:"tr",align:null},"IE8"),(0,o.kt)("td",{parentName:"tr",align:null},"IE10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"state \u4f20\u9012\u53c2\u6570"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,o.kt)("td",{parentName:"tr",align:null},"\u652f\u6301")))),(0,o.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5bf9\u5e94\u65b9\u6848\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528-browserrouter"},"\u5982\u4f55\u4f7f\u7528 BrowserRouter"),(0,o.kt)("p",null,"\u672c\u5730\u5f00\u53d1\u65f6\uff0c\u53ea\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import { runApp } from 'ice';\n\nconst appConfig = {\n  router: {\n+    type: 'browser',\n  }\n};\n\nrunApp(appConfig);\n")),(0,o.kt)("p",null,"\u7ebf\u4e0a\u8fd0\u884c\u65f6\u9700\u8981\u670d\u52a1\u7aef\u652f\u6301\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u5237\u65b0 404 \u95ee\u9898\uff0c\u5177\u4f53\u65b9\u6848\u8bf7\u53c2\u8003\u793e\u533a\u6587\u6863\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/LoeiFy/Recordum/issues/15"},"\u5173\u4e8e react-router \u7684 browserHistory \u6a21\u5f0f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zzugbb.github.io/passages/react-router%E9%97%AE%E9%A2%98/"},"react-router \u4e4b HashRouter & BrowserRouter"))),(0,o.kt)("h3",{id:"\u4f7f\u7528\u8def\u7531\u9ad8\u9636\u7ec4\u4ef6"},"\u4f7f\u7528\u8def\u7531\u9ad8\u9636\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u901a\u8fc7\u8def\u7531\u9ad8\u9636\u7ec4\u4ef6\u53ef\u4ee5\u5bf9\u8def\u7531\u7ec4\u4ef6\u5b9e\u73b0\u7edf\u4e00\u7684\u4e1a\u52a1\u903b\u8f91\uff08\u6bd4\u5982\u9274\u6743\u3001\u57cb\u70b9\u7b49\uff09\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u5b9e\u73b0\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/components/LoginWrapper\nimport { useAuth, Redirect } from 'ice';\n\nconst LoginWrapper = (WrappedComponent) => {\n  const LoginWrappedPage = (props) => {\n    const isLogin = true; // \u66ff\u6362\u6210\u4e1a\u52a1\u903b\u8f91\n    return <>{isLogin ? <WrappedComponent {...props} /> : <Redirect to=\"/login\" />}</>;\n  };\n\n  return LoginWrappedPage;\n};\n\nexport default LoginWrapper;\n")),(0,o.kt)("p",null,"\u7136\u540e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes")," \u4e2d\u914d\u7f6e wrappers \u5b57\u6bb5\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"+import WrapperPage from '@/components/WrapperPage';\n\nconst routerConfig = [\n  {\n    path: '/user',\n    component: User,\n+    wrappers: [WrapperPage]\n  },\n]\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aWrapper \u7ec4\u4ef6\u4e0d\u652f\u6301\u901a\u8fc7 lazy \u5bfc\u5165")),(0,o.kt)("h3",{id:"\u52a8\u6001\u8def\u7531\u53c2\u6570"},"\u52a8\u6001\u8def\u7531\u53c2\u6570"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u53ef\u80fd\u9700\u8981\u52a8\u6001\u6307\u5b9a\u8def\u7531\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/:id"),"\uff0c\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u8def\u7531\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import UserInfo from '@/pages/UserInfo';\n\n// src/routes.ts\nconst routerConfig = [\n  {\n    path: '/user/:id',\n    exact: true,\n    component: UserInfo,\n  },\n];\n")),(0,o.kt)("p",null,"\u52a8\u6001\u8def\u7531\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useParams } from 'ice';\n\nexport default = () => {\n  const { id } = useParams();\n  // console.log(id) // 123\n}\n")),(0,o.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e\u5e26--\u7684\u8def\u7531\u6bd4\u5982-ahtml"},"\u5982\u4f55\u914d\u7f6e\u5e26 ",(0,o.kt)("inlineCode",{parentName:"h3"},".")," \u7684\u8def\u7531\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"h3"},"/a.html")),(0,o.kt)("p",null,"\u9996\u5148\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u5f00\u542f\u914d\u7f6e\u9879\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "devServer": {\n+    "historyApiFallback": {\n+      "disableDotRule": true\n+    }\n  }\n}\n')),(0,o.kt)("p",null,"\u63a5\u7740\u6309\u7167\u8def\u7531\u89c4\u5219\u914d\u7f6e\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"// src/routes.ts\nimport Home from '@/pages/Home';\nimport About from '@/pages/About';\n\nexport default [{\n  path: '/home',\n  component: Home,\n}, {\n+  path: '/about.html',\n+  exact: true,\n+  component: About,\n}];\n")))}d.isMDXComponent=!0}}]);
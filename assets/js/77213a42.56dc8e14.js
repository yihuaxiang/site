"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7591],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"\u540e\u7aef\u5e94\u7528\u96c6\u6210",order:19},p=void 0,c={unversionedId:"guide/advanced/backend",id:"guide/advanced/backend",title:"\u540e\u7aef\u5e94\u7528\u96c6\u6210",description:"\u672c\u6587\u8bb2\u89e3\u5982\u4f55\u5728\u540e\u7aef\u5e94\u7528\u96c6\u6210\u524d\u7aef\u8d44\u6e90\u3002",source:"@site/docs/guide/advanced/backend.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/backend",permalink:"/docs/guide/advanced/backend",draft:!1,editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/advanced/backend.md",tags:[],version:"current",frontMatter:{title:"\u540e\u7aef\u5e94\u7528\u96c6\u6210",order:19},sidebar:"docs",previous:{title:"\u4ee3\u7801\u8d28\u91cf\u4fdd\u969c",permalink:"/docs/guide/advanced/quality"}},u={},s=[{value:"Node.js \u5e94\u7528",id:"nodejs-\u5e94\u7528",level:2},{value:"\u521d\u59cb\u5316 Koa \u5e94\u7528",id:"\u521d\u59cb\u5316-koa-\u5e94\u7528",level:3},{value:"\u5b9a\u4e49\u89c6\u56fe",id:"\u5b9a\u4e49\u89c6\u56fe",level:3},{value:"\u6e32\u67d3\u89c6\u56fe",id:"\u6e32\u67d3\u89c6\u56fe",level:3},{value:"\u8fd0\u884c\u793a\u4f8b",id:"\u8fd0\u884c\u793a\u4f8b",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"Java \u5e94\u7528",id:"java-\u5e94\u7528",level:2},{value:"resources",id:"resources",level:3},{value:"Controller",id:"controller",level:3},{value:"HTML \u6258\u7ba1\u670d\u52a1",id:"html-\u6258\u7ba1\u670d\u52a1",level:2},{value:"\u5168\u5c40\u5b89\u88c5 surge",id:"\u5168\u5c40\u5b89\u88c5-surge",level:3},{value:"\u8fd0\u884c surge",id:"\u8fd0\u884c-surge",level:3},{value:"\u5176\u4ed6\u540c\u7c7b\u4ea7\u54c1",id:"\u5176\u4ed6\u540c\u7c7b\u4ea7\u54c1",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u8bb2\u89e3\u5982\u4f55\u5728\u540e\u7aef\u5e94\u7528\u96c6\u6210\u524d\u7aef\u8d44\u6e90\u3002"),(0,l.kt)("h2",{id:"nodejs-\u5e94\u7528"},"Node.js \u5e94\u7528"),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316-koa-\u5e94\u7528"},"\u521d\u59cb\u5316 Koa \u5e94\u7528"),(0,l.kt)("p",null,"\u65b0\u5efa\u9879\u76ee\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"ice-node-koa"),"\uff0c\u53ef\u81ea\u7531\u6307\u5b9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir ice-node-koa && cd ice-node-koa\n$ npm init\n$ npm i ejs koa koa-logger koa-views --save\n")),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u89c6\u56fe"},"\u5b9a\u4e49\u89c6\u56fe"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"views/index.ejs"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />\n    <meta name="viewport" content="width=device-width" />\n    <title>ICE Design Lite</title>\n    <link rel="shortcut icon" href="<%= publicPath %>/favicon.png" />\n    <link href="<%= publicPath %>/css/index.css" rel="stylesheet" />\n  </head>\n\n  <body>\n    <div id="ice-container"></div>\n    <script type="text/javascript" src="<%= publicPath %>/js/index.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("h3",{id:"\u6e32\u67d3\u89c6\u56fe"},"\u6e32\u67d3\u89c6\u56fe"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"app.js"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const views = require('koa-views');\nconst path = require('path');\nconst Koa = require('koa');\n\nconst app = (module.exports = new Koa());\n\napp.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));\n\napp.use(async function (ctx) {\n  await ctx.render('index', { publicPath: 'http://localhost:4444/' });\n});\n\napp.listen(3000);\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u517c\u5bb9\u5355\u9875\u5e94\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"HashRouter")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"BrowserRouter"),"\uff0c\u5982\u591a\u9875\u5e94\u7528\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/koajs/examples"},"https://github.com/koajs/examples")," \u4e2d blog \u793a\u4f8b\u914d\u7f6e\u8def\u7531")),(0,l.kt)("h3",{id:"\u8fd0\u884c\u793a\u4f8b"},"\u8fd0\u884c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ node app.js\n")),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 http://localhost:3000"),(0,l.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u5e94\u7528\u53ea\u90e8\u7f72\u4e86 html\uff0c\u517c\u5bb9 ",(0,l.kt)("inlineCode",{parentName:"li"},"BrowserRouter")," \u505a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"fallback")," \u5904\u7406 (\u9ed8\u8ba4\u6240\u6709\u8bf7\u6c42\u8def\u5f84\u8fd4\u56de\u540c\u4e00\u4efd html)"),(0,l.kt)("li",{parentName:"ul"},"Node.js \u524d\u540e\u7aef\u4e00\u4f53\u5e94\u7528\uff0c\u9700\u8981\u8fdb\u884c\u8def\u7531\u914d\u7f6e")),(0,l.kt)("h2",{id:"java-\u5e94\u7528"},"Java \u5e94\u7528"),(0,l.kt)("p",null,"\u4ee5 Spring Boot \u4e3a\u4f8b\u3002"),(0,l.kt)("h3",{id:"resources"},"resources"),(0,l.kt)("p",null,"\u65b0\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"/velocity/layout/index.vm"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />\n    <meta name="viewport" content="width=device-width" />\n    <title>ICE Design Lite</title>\n    <link rel="shortcut icon" href="$!publicPath/favicon.png" />\n    <link href="$!publicPath/css/index.css" rel="stylesheet" />\n  </head>\n\n  <body>\n    <div id="ice-container"></div>\n    <script type="text/javascript" src="$!publicPath/js/index.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("h3",{id:"controller"},"Controller"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("/")\n@VelocityLayout("/velocity/layout/index.vm")\npublic String index(Model model) {\n  model.addAttribute(publicPath, jsConfig.get(publicPath));\n  return "index";\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u5c55\u793a\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"HashRouter")," \u8def\u7531\uff0c\u5982\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"BrowserRouter"),"\uff0c\u5efa\u8bae\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'@GetMapping(value = { "/**" })')," \u5b9e\u73b0\u524d\u7aef fallback")),(0,l.kt)("h2",{id:"html-\u6258\u7ba1\u670d\u52a1"},"HTML \u6258\u7ba1\u670d\u52a1"),(0,l.kt)("p",null,"\u672c\u7ae0\u8282\u8bb2\u89e3\u5982\u4f55\u5728 HTML \u6258\u7ba1\u670d\u52a1\u4e2d\u96c6\u6210\u524d\u7aef\u8d44\u6e90\uff0c\u6211\u4eec\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"http://surge.sh/"},"surge")," \u4e3a\u4f8b\u3002"),(0,l.kt)("h3",{id:"\u5168\u5c40\u5b89\u88c5-surge"},"\u5168\u5c40\u5b89\u88c5 surge"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global surge\n")),(0,l.kt)("h3",{id:"\u8fd0\u884c-surge"},"\u8fd0\u884c surge"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"ice-demo")," \u9879\u76ee\u540d\uff0cice \u9879\u76ee\u9ed8\u8ba4\u6784\u5efa\u76ee\u5f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ice-demo/build\nsurge\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f9d\u6b21\u786e\u8ba4\u8d26\u6237\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"project path"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," \u7b49\u4fe1\u606f\uff0c\u7b49\u5f85\u4e0a\u4f20\u751f\u6548\u5373\u53ef\uff0c\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://surge.sh/"},"surge")," \u5b98\u65b9\u8bf4\u660e")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u540c\u7c7b\u4ea7\u54c1"},"\u5176\u4ed6\u540c\u7c7b\u4ea7\u54c1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://surge.sh/"},"surge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.netlify.com/"},"netlify"))))}m.isMDXComponent=!0}}]);
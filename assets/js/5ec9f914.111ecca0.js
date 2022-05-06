"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[775],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3082:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r={container:"container_m2HS",webpack:"webpack_KOQl",vite:"vite_KZ0X"};var i=function(e){var t=e.list;return a.createElement("span",{className:r.container},["webpack","vite"].map((function(e){return a.createElement("img",{title:e,className:r[e],key:e,src:"/img/svg/"+(t.includes(e)?e:e+"-gray")+".svg"})})))}},5922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(3082),p=["components"],o={title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",order:2},s=void 0,c={unversionedId:"guide/advanced/ssr",id:"guide/advanced/ssr",title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",description:"icejs \u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3\uff08\u5373 SSR\uff09\u80fd\u529b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6309\u9700\u4e00\u952e\u5f00\u542f SSR \u7684\u6a21\u5f0f\uff0c\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684\u5ba2\u6237\u7aef\u6e32\u67d3\uff0cSSR \u5e38\u7528\u4e8e\u4e24\u4e2a\u573a\u666f\uff1a1. \u6709 SEO \u8bc9\u6c42\uff1b2. \u5bf9\u9996\u5c4f\u6e32\u67d3\u901f\u5ea6\u8981\u6c42\u6bd4\u8f83\u9ad8\u3002\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684 SSR \u65b9\u6848\uff0cicejs \u63d0\u4f9b\u7684 SSR \u80fd\u529b\u5177\u6709\u4ee5\u4e0b\u7279\u6027\uff1a",source:"@site/docs/guide/advanced/ssr.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/ssr",permalink:"/docs/guide/advanced/ssr",draft:!1,editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/advanced/ssr.md",tags:[],version:"current",frontMatter:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",order:2},sidebar:"docs",previous:{title:"\u591a\u9875\u5e94\u7528 MPA",permalink:"/docs/guide/advanced/mpa"},next:{title:"\u6784\u5efa\u65f6\u9884\u6e32\u67d3 SSG",permalink:"/docs/guide/advanced/ssg"}},u={},d=[{value:"\u5f00\u542f SSR",id:"\u5f00\u542f-ssr",level:2},{value:"\u5e94\u7528\u7ea7\u6570\u636e",id:"\u5e94\u7528\u7ea7\u6570\u636e",level:2},{value:"\u83b7\u53d6\u5e94\u7528\u521d\u59cb\u5316\u6570\u636e",id:"\u83b7\u53d6\u5e94\u7528\u521d\u59cb\u5316\u6570\u636e",level:3},{value:"\u9875\u9762\u7ea7\u6570\u636e",id:"\u9875\u9762\u7ea7\u6570\u636e",level:2},{value:"\u6784\u5efa\u4ea7\u7269",id:"\u6784\u5efa\u4ea7\u7269",level:2},{value:"\u670d\u52a1\u7aef\u96c6\u6210",id:"\u670d\u52a1\u7aef\u96c6\u6210",level:2},{value:"\u9ad8\u9636\u7528\u6cd5",id:"\u9ad8\u9636\u7528\u6cd5",level:2},{value:"\u52a8\u6001\u8bbe\u7f6e\u9875\u9762 Meta \u6807\u7b7e",id:"\u52a8\u6001\u8bbe\u7f6e\u9875\u9762-meta-\u6807\u7b7e",level:3},{value:"\u670d\u52a1\u7aef\u8bf7\u6c42\u5fc5\u987b\u4f7f\u7528\u7edd\u5bf9\u7684 URL \u8def\u5f84",id:"\u670d\u52a1\u7aef\u8bf7\u6c42\u5fc5\u987b\u4f7f\u7528\u7edd\u5bf9\u7684-url-\u8def\u5f84",level:3}],m={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{list:["webpack","vite"],mdxType:"Support"}),(0,i.kt)("p",null,"icejs \u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3\uff08\u5373 SSR\uff09\u80fd\u529b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6309\u9700\u4e00\u952e\u5f00\u542f SSR \u7684\u6a21\u5f0f\uff0c\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684\u5ba2\u6237\u7aef\u6e32\u67d3\uff0cSSR \u5e38\u7528\u4e8e\u4e24\u4e2a\u573a\u666f\uff1a1. \u6709 SEO \u8bc9\u6c42\uff1b2. \u5bf9\u9996\u5c4f\u6e32\u67d3\u901f\u5ea6\u8981\u6c42\u6bd4\u8f83\u9ad8\u3002\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684 SSR \u65b9\u6848\uff0cicejs \u63d0\u4f9b\u7684 SSR \u80fd\u529b\u5177\u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e00\u952e\u5f00\u542f/\u5173\u95ed SSR \u80fd\u529b"),(0,i.kt)("li",{parentName:"ul"},"\u4e0e\u670d\u52a1\u7aef\u4f4e\u8026\u5408\uff0c\u65e0\u8bba\u662f\u4f20\u7edf\u7684 Nodejs \u5e94\u7528\u8fd8\u662f Serverless \u6a21\u5f0f\uff0c\u90fd\u53ef\u4ee5\u975e\u5e38\u7b80\u5355\u7684\u96c6\u6210"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u9875\u9762\u7ea7\u670d\u52a1\u7aef\u52a0\u8f7d\u6570\u636e")),(0,i.kt)("h2",{id:"\u5f00\u542f-ssr"},"\u5f00\u542f SSR"),(0,i.kt)("p",null,"\u5728\u5de5\u7a0b\u914d\u7f6e\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u5f00\u542f SSR\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ssr": true\n}\n')),(0,i.kt)("p",null,"\u914d\u7f6e\u5b8c\u4e4b\u540e\u5373\u53ef\u542f\u7528 SSR\uff0c\u540c\u7406\u7f6e\u4e3a false \u5373\u53ef\u5173\u95ed SSR \u529f\u80fd\u3002\u6b64\u65f6\u91cd\u65b0\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run start")," \u5373\u53ef\u770b\u5230\u9875\u9762\u4e2d\u76f4\u51fa\u7684 HTML:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1rk9Bzhv1gK0jSZFFXXb0sXXa-2880-1026.png",alt:"SSR \u6548\u679c"})),(0,i.kt)("h2",{id:"\u5e94\u7528\u7ea7\u6570\u636e"},"\u5e94\u7528\u7ea7\u6570\u636e"),(0,i.kt)("h3",{id:"\u83b7\u53d6\u5e94\u7528\u521d\u59cb\u5316\u6570\u636e"},"\u83b7\u53d6\u5e94\u7528\u521d\u59cb\u5316\u6570\u636e"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u901a\u8fc7\u58f0\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"app.getInitialData")," \u83b7\u53d6\u5168\u5c40\u6570\u636e\uff0c\u540c\u65f6\u652f\u6301\u901a\u8fc7 API \u5728 View \u4e2d\u6d88\u8d39\u8be5\u6570\u636e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/basic/app#appgetinitialdata"},"app.getInitialData")," \u3002"),(0,i.kt)("p",null,"\u5f00\u542f\u4e86 SSR \u7684\u884c\u4e3a\u8bf4\u660e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u65f6\u76f4\u63a5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.getInitialData()")," \u83b7\u53d6\u6570\u636e\u5e76\u6e32\u67d3\u5e94\u7528\uff0c\u540c\u65f6\u5c06\u6570\u636e\u6ce8\u5165\u5230 HTML \u7684\u5168\u5c40\u53d8\u91cf\u4e2d"),(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7aef\u6e32\u67d3\uff08hydrate\uff09\u65f6\u76f4\u63a5\u901a\u8fc7\u5168\u5c40\u53d8\u91cf\u83b7\u53d6\u521d\u59cb\u6570\u636e\uff0c\u4e0d\u518d\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.getInitialData()"))),(0,i.kt)("p",null,"\u672a\u5f00\u542f SSR \u7684\u884c\u4e3a\u8bf4\u660e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7aef\u4f1a\u540c\u6b65\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.getInitialData()")),(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5b8c\u6210\u540e\u6267\u884c\u9875\u9762 render \u903b\u8f91")),(0,i.kt)("h2",{id:"\u9875\u9762\u7ea7\u6570\u636e"},"\u9875\u9762\u7ea7\u6570\u636e"),(0,i.kt)("p",null,"SEO \u573a\u666f\u4e0b\uff0c\u9700\u8981\u8bbf\u95ee\u6bcf\u4e2a\u9875\u9762\u65f6\u90fd\u80fd\u591f\u8fd4\u56de\u5b9e\u9645\u7684 DOM \u8282\u70b9\uff0c\u6b64\u65f6\u5982\u679c\u628a\u6570\u636e\u653e\u5230\u5168\u5c40\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"initialData")," \u91cc\u7ba1\u7406\u6210\u672c\u4f1a\u975e\u5e38\u9ad8\uff0c\u56e0\u6b64 icejs \u652f\u6301\u9875\u9762\u7ea7\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps")," \u6765\u83b7\u53d6\u81ea\u8eab\u9700\u8981\u7684\u6570\u636e\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u53ea\u662f\u8ffd\u6c42\u9996\u5c4f\u52a0\u8f7d\u901f\u5ea6\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528\u9875\u9762\u7ea7\u7684 getInitialProps\uff0c\u56e0\u4e3a\u8fd9\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f1a\u5ef6\u957f\u670d\u52a1\u7aef\u6e32\u67d3\u76f4\u51fa HTML \u7684\u65f6\u95f4\u3002")),(0,i.kt)("p",null,"\u5728\u9875\u9762\u7ea7\u7ec4\u4ef6\u4e2d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Component.getInitialProps")," \u6765\u83b7\u53d6\u9875\u9762\u521d\u59cb\u6570\u636e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import { request } from 'ice';\n\nfunction Home({ stars }) {\n  return <div>icejs stars: {stars}</div>;\n}\n\n+ Home.getInitialProps = async (ctx) => {\n+   const res = await request.get('https://api.github.com/repos/alibaba/ice');\n+   return { stars: res.data.stargazers_count };\n+ }\n\nexport default Home;\n")),(0,i.kt)("p",null,"\u5f00\u542f\u4e86 SSR \u7684\u884c\u4e3a\u8bf4\u660e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6e32\u67d3\u65f6\u8c03\u7528\u5bf9\u5e94\u9875\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"getInitialProps"),"\uff0c\u7136\u540e\u5728\u6e32\u67d3\u9875\u9762\u7ec4\u4ef6\u65f6\u5c06\u6570\u636e\u4f5c\u4e3a props \u4f20\u9012\u7ed9\u9875\u9762\u7ec4\u4ef6\uff0c\u540c\u65f6\u5c06\u6570\u636e\u6ce8\u5165\u5230 HTML \u5168\u5c40\u53d8\u91cf\u4e0a"),(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7aef\u6e32\u67d3\uff08hydrate\uff09\u65f6\u4e0d\u518d\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"getInitialProps"),"\uff0c\u4f1a\u76f4\u63a5\u901a\u8fc7\u5168\u5c40\u53d8\u91cf\u83b7\u53d6\u521d\u59cb\u6570\u636e\u5e76\u4f5c\u4e3a\u7ec4\u4ef6\u7684 props")),(0,i.kt)("p",null,"\u672a\u5f00\u542f SSR \u7684\u884c\u4e3a\u8bf4\u660e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7aef\u6e32\u67d3\u65f6\uff0c\u5148\u8fdb\u884c\u7ec4\u4ef6\u6e32\u67d3\uff08render\uff09\uff0c\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"useEffect(() => {}, [])")," \u4e2d\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Component.getInitialProps")),(0,i.kt)("li",{parentName:"ul"},"getInitialProps \u6267\u884c\u5b8c\u6210\u540e\uff0c\u89e6\u53d1\u7ec4\u4ef6 rerender \u6b64\u65f6\u62ff\u5230\u7684\u65b0\u7684 props \u6570\u636e")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9875\u9762\u7ec4\u4ef6\u4e2d\u9700\u8981\u517c\u5bb9\u597d ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialProps()")," \u672a\u6267\u884c\u65f6 props \u53d6\u4e0d\u5230\u5bf9\u5e94\u6570\u636e\uff08\u6bd4\u5982\u4e0a\u8ff0\u7684 props.stars\uff09\u7684\u60c5\u51b5"))),(0,i.kt)("h2",{id:"\u6784\u5efa\u4ea7\u7269"},"\u6784\u5efa\u4ea7\u7269"),(0,i.kt)("p",null,"\u5f53\u5e94\u7528\u5f00\u53d1\u5b8c\u6210\u65f6\uff0c\u901a\u8fc7\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," \u9ed8\u8ba4\u6784\u5efa\u540e\u7684\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"  .\n  \u251c\u2500\u2500 build\n  \u2502   \u251c\u2500\u2500 index.html\n  \u2502   \u251c\u2500\u2500 css/index.css\n  \u2502   \u251c\u2500\u2500 js/index.js\n  \u2502   \u251c\u2500\u2500 loadable-stats.json\n+ |   \u251c\u2500\u2500 server\n+ |   \u2502   \u251c\u2500\u2500 chunk1.js\n+ |   \u2502   \u251c\u2500\u2500 chunk2.js\n+ |   \u2502   \u2514\u2500\u2500 index.js\n")),(0,i.kt)("h2",{id:"\u670d\u52a1\u7aef\u96c6\u6210"},"\u670d\u52a1\u7aef\u96c6\u6210"),(0,i.kt)("p",null,"\u672c\u5730\u5f00\u53d1\u65f6 icejs \u901a\u8fc7\u5185\u7f6e\u7684 dev-server \u505a\u670d\u52a1\u7aef\u6e32\u67d3\uff0c\u5e94\u7528\u53d1\u5e03\u540e\u5219\u9700\u8981\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u81ea\u884c\u6e32\u67d3\u3002\u9996\u5148\u5efa\u8bae\u5c06\u6574\u4e2a build \u4ea7\u7269\u590d\u5236\u5230\u670d\u52a1\u7aef\u6307\u5b9a\u76ee\u5f55\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 build/\n\u2502   \u251c\u2500\u2500 loadable-stats.json   // \u53ef\u9009\uff0c\u4ec5\u5728 webpack \u6a21\u5f0f\u4e0b\u5b58\u5728\n|   \u2514\u2500\u2500 server/\n\u2514\u2500\u2500 app.js   // \u670d\u52a1\u7aef\u5e94\u7528\u5165\u53e3\n")),(0,i.kt)("p",null,"app.js \u6838\u5fc3\u903b\u8f91\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const path = require('path');\nconst Koa = require('koa');\nconst Router = require('@koa/router');\n\nconst app = new Koa();\nconst router = new Router();\n\nrouter.get('/', (ctx, next) => {\n  const buildDir = path.join(__dirname, './build');\n  const serverBundlePath = path.resolve(buildDir, 'server/index.js');\n  // vite \u6a21\u5f0f\u4e0b\u4e0d\u5b58\u5728 loadable-stats.json\uff0cloadableStatsPath \u4f20\u5165 false \u5373\u53ef\n  const webStatsPath = path.resolve(buildDir, 'loadable-stats.json');\n\n  const serverRender = require(serverBundlePath);\n  const { html, error, redirectUrl } = await serverRender.default(\n    ctx,\n    {\n      loadableStatsPath: webStatsPath,\n    },\n  );\n\n  if (redirectUrl) {\n    console.log('[SSR Redirect]', `Redirect to the new path ${redirectUrl}`);\n    // \u91cd\u5b9a\u5411\n    ctx.res.redirect(302, redirectUrl);\n  } else {\n    if (error) {\n      console.log('[SSR ERROR]', 'serverRender error', error);\n    }\n    ctx.res.body = html;\n  }\n});\n\napp.use(router.routes())\napp.listen(3000);\n")),(0,i.kt)("p",null,"icejs \u6784\u5efa\u51fa\u6765\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"server/index.js")," \u4f1a\u66b4\u9732\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\u4f9b\u670d\u52a1\u7aef\u8c03\u7528\uff0c\u8be5\u65b9\u6cd5\u63d0\u4f9b\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ctx: \u5fc5\u586b\uff0c\u5f53\u524d\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0cctx \u7684\u683c\u5f0f\u5982\u4e0b\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.req"),"\uff1aHTTP request \u5bf9\u8c61\uff08\u4ec5\u5728 server \u7aef\u8f93\u51fa\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.res"),"\uff1aHTTP response \u5bf9\u8c61\uff08\u4ec5\u5728 server \u7aef\u8f93\u51fa\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.pathname"),"\uff1a\u5f53\u524d\u8def\u7531\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.query"),"\uff1a\u8bf7\u6c42\u53c2\u6570\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.path"),"\uff1aURL \u8def\u5f84\uff08\u5305\u62ec\u8bf7\u6c42\u53c2\u6570\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx.ssrError"),"\uff1a\u670d\u52a1\u7aef\u6e32\u67d3\u65f6\u9519\u8bef\u4fe1\u606f\uff08\u4ec5\u5728 client \u7aef\u8f93\u51fa\uff09"))),(0,i.kt)("li",{parentName:"ul"},"options:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"loadableStatsPath: \u5fc5\u586b\uff0cloadable-stats.json \u672c\u5730\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},"htmlTemplate: \u9009\u586b\uff0chtml \u6a21\u677f\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"initialData: \u9009\u586b\uff0c\u5982\u679c\u4e0d\u586b\u5199\uff0c\u670d\u52a1\u7aef\u5219\u4f1a\u8c03\u7528\u524d\u7aef\u58f0\u660e\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.getInitialData()")," \u65b9\u6cd5\uff0c\u4f46\u5982\u679c",(0,i.kt)("strong",{parentName:"li"},"\u5bf9\u6027\u80fd\u8ffd\u6c42\u6bd4\u8f83\u6781\u81f4"),"\uff0c\u670d\u52a1\u7aef\u5219\u53ef\u4ee5\u81ea\u884c\u83b7\u53d6\u5bf9\u5e94\u6570\u636e\u5e76\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"initialData")," \u4f20\u5165\u3002\uff08\u8c03\u7528\u524d\u7aef\u7684 getInitialData \u4e00\u822c\u4f1a\u53d1\u8d77 HTTP \u8bf7\u6c42\uff0c\u4f46\u662f\u670d\u52a1\u7aef\u6709\u53ef\u80fd\u901a\u8fc7\u7f13\u5b58/\u6570\u636e\u5e93\u6765\u67e5\u8be2\uff0c\u901f\u5ea6\u4f1a\u5feb\u4e00\u70b9\uff09")))),(0,i.kt)("h2",{id:"\u9ad8\u9636\u7528\u6cd5"},"\u9ad8\u9636\u7528\u6cd5"),(0,i.kt)("h3",{id:"\u52a8\u6001\u8bbe\u7f6e\u9875\u9762-meta-\u6807\u7b7e"},"\u52a8\u6001\u8bbe\u7f6e\u9875\u9762 Meta \u6807\u7b7e"),(0,i.kt)("p",null,"\u5728 SEO \u573a\u666f\u4e0b\uff0c\u5f80\u5f80\u9700\u8981\u52a8\u6001\u8bbe\u7f6e\u6bcf\u4e2a\u9875\u9762\u7684\u6807\u9898\u548c Meta \u6807\u7b7e\uff0c\u4ee5\u66f4\u597d\u5730\u8ba9\u641c\u7d22\u5f15\u64ce\u6293\u53d6\u9875\u9762\u5185\u5bb9\u3002\u4f7f\u7528\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// pages/Home/index.jsx\nimport React from 'react';\nimport { Head } from 'ice';\n\nconst Home = (props) => {\n  const { title, description } = props;\n\n  return (\n    <div>\n      <Head>\n        <title>{title}</title>\n        <meta name=\"description\" content={description} />\n        <meta name=\"keywords\" content=\"Home Keywords\" />\n      </Head>\n    </div>\n  );\n};\n\nHome.getInitialProps = async () => {\n  // \u6a21\u62df\u670d\u52a1\u7aef\u8fd4\u56de title \u548c description \u6570\u636e\n  const res = await request('/detail');\n  return {\n    title: res.data.title,\n    description: res.data.description,\n  };\n};\n")),(0,i.kt)("h3",{id:"\u670d\u52a1\u7aef\u8bf7\u6c42\u5fc5\u987b\u4f7f\u7528\u7edd\u5bf9\u7684-url-\u8def\u5f84"},"\u670d\u52a1\u7aef\u8bf7\u6c42\u5fc5\u987b\u4f7f\u7528\u7edd\u5bf9\u7684 URL \u8def\u5f84"),(0,i.kt)("p",null,"\u5f00\u542f\u4e86 SSR \u4e4b\u540e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"app.getInitialData")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"Home.getInitialProps")," \u90fd\u4f1a\u5728\u670d\u52a1\u7aef\u4e0b\u6267\u884c\uff0c\u670d\u52a1\u7aef\u53d1\u8bf7\u6c42\u5fc5\u987b\u7528\u7edd\u5bf9\u8def\u5f84\u4e0d\u80fd\u7528\u76f8\u5bf9\u8def\u5f84\uff0c\u56e0\u6b64\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u91cc\u5982\u679c\u51fa\u73b0\u5f02\u6b65\u8bf7\u6c42\uff0c\u8bf7\u52a1\u5fc5\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\uff0c\u6216\u8005\u6b63\u786e\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"request.baseURL"),"\u3002\u63a8\u8350\u505a\u6cd5\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"src/config.js")," \u4e2d\u52a8\u6001\u533a\u5206\u73af\u5883\u5e76\u914d\u7f6e baseURL\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env.__IS_SERVER__) {\n  // \u52a8\u6001\u6269\u5c55\u73af\u5883\uff1a\u670d\u52a1\u7aef\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u533a\u5206\uff0c\u6b64\u5904\u4ee5 Midway \u4e3a\u4f8b\n  globalThis.__app_mode__ = process.env.MIDWAY_SERVER_ENV;\n} else {\n  // \u52a8\u6001\u6269\u5c55\u73af\u5883\n  globalThis.__app_mode__ = globalThis.__env__;\n}\n\nexport default {\n  local: {\n    baseURL: `http://localhost:${process.env.SERVER_PORT}`,\n  },\n  daily: {\n    baseURL: 'https://ice-ssr.daily.fx.net',\n  },\n  prod: {\n    baseURL: 'https://ice-ssr.fx.com',\n  },\n};\n")),(0,i.kt)("p",null,"\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.js")," \u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"request.baseURL"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import { runApp, IAppConfig } from 'ice';\n\nconst appConfig: IAppConfig = {\n+  request: {\n+    baseURL: config.baseURL\n+  }\n};\n\nrunApp(appConfig);\n")))}k.isMDXComponent=!0}}]);
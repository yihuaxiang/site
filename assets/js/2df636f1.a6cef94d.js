"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3039],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),l=["components"],o={title:"\u7f16\u5199\u5355\u5143\u6d4b\u8bd5",order:16},i=void 0,p={unversionedId:"guide/advanced/test",id:"guide/advanced/test",title:"\u7f16\u5199\u5355\u5143\u6d4b\u8bd5",description:"icejs \u63d0\u4f9b\u4e86 icejs test \u547d\u4ee4\uff0c\u5185\u7f6e\u4e86 Jest \u76f8\u5173\u914d\u7f6e\u3002",source:"@site/docs/guide/advanced/test.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/test",permalink:"/docs/guide/advanced/test",draft:!1,editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/advanced/test.md",tags:[],version:"current",frontMatter:{title:"\u7f16\u5199\u5355\u5143\u6d4b\u8bd5",order:16},sidebar:"docs",previous:{title:"\u672c\u5730 Proxy \u65b9\u6848",permalink:"/docs/guide/advanced/proxy"},next:{title:"\u524d\u7aef\u8d44\u6e90\u53d1\u5e03",permalink:"/docs/guide/advanced/publish"}},c={},u=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",id:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",level:2},{value:"\u6d4b\u8bd5\u6587\u4ef6\u540d\u7ea6\u5b9a",id:"\u6d4b\u8bd5\u6587\u4ef6\u540d\u7ea6\u5b9a",level:3},{value:"\u7f16\u5199\u7528\u4f8b",id:"\u7f16\u5199\u7528\u4f8b",level:3},{value:"\u4f7f\u7528 Snapshot \u8fdb\u884c UI \u6d4b\u8bd5",id:"\u4f7f\u7528-snapshot-\u8fdb\u884c-ui-\u6d4b\u8bd5",level:3},{value:"\u4f7f\u7528 Enzyme \u6d4b\u8bd5\u7ec4\u4ef6",id:"\u4f7f\u7528-enzyme-\u6d4b\u8bd5\u7ec4\u4ef6",level:3},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:4},{value:"\u7ec4\u4ef6\u6d4b\u8bd5\u7528\u4f8b",id:"\u7ec4\u4ef6\u6d4b\u8bd5\u7528\u4f8b",level:4},{value:"\u9ad8\u9636\u7528\u6cd5",id:"\u9ad8\u9636\u7528\u6cd5",level:2},{value:"\u81ea\u5b9a\u4e49 jest \u914d\u7f6e",id:"\u81ea\u5b9a\u4e49-jest-\u914d\u7f6e",level:2},{value:"\u4f7f\u7528 Jest CLI \u53c2\u6570",id:"\u4f7f\u7528-jest-cli-\u53c2\u6570",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"icejs \u63d0\u4f9b\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"icejs test")," \u547d\u4ee4\uff0c\u5185\u7f6e\u4e86 Jest \u76f8\u5173\u914d\u7f6e\u3002"),(0,s.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,s.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u624b\u52a8\u5b89\u88c5 jest \u4f9d\u8d56\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i --save-dev jest\n")),(0,s.kt)("p",null,"\u5728 package.json \u4e2d\u6dfb\u52a0\u5bf9\u5e94 scripts\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},'{\n  "scripts": {\n    "start": "icejs start",\n+    "test": "icejs test"\n  }\n}\n')),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"npm test")," \u5373\u53ef\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,s.kt)("h2",{id:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"},"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"),(0,s.kt)("h3",{id:"\u6d4b\u8bd5\u6587\u4ef6\u540d\u7ea6\u5b9a"},"\u6d4b\u8bd5\u6587\u4ef6\u540d\u7ea6\u5b9a"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"testMatch")," \u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"**/?*.(spec|test).(j|t)s?(x)"),"\uff0c\u5373 icejs \u5c06\u67e5\u627e\u9879\u76ee\u76ee\u5f55\u4e0b\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u6587\u4ef6\u6765\u6267\u884c\u6d4b\u8bd5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540e\u7f00\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},".spec.js"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},".spec.jsx"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},".spec.ts"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},".spec.tsx")),(0,s.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540e\u7f00\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},".test.js"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},".test.jsx"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},".test.ts"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},".test.tsx"))),(0,s.kt)("h3",{id:"\u7f16\u5199\u7528\u4f8b"},"\u7f16\u5199\u7528\u4f8b"),(0,s.kt)("p",null,"\u4f7f\u7528 Jest \u63d0\u4f9b\u7684\u5185\u7f6e\u51fd\u6570\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u76f8\u5e94\u7684\u6d4b\u8bd5\u7528\u4f8b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function sum(a, b) {\n  return a + b;\n}\n\nit('sum numbers', () => {\n  expect(sum(1, 2)).toEqual(3);\n  expect(sum(2, 2)).toEqual(4);\n});\n")),(0,s.kt)("p",null,"\u5728\u65e5\u5e38 React \u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u4e0a\u8ff0\u7b80\u5355\u7684\u4f8b\u5b50\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u6d4b\u8bd5\u9700\u6c42\uff0c\u6d4b\u8bd5\u5b9e\u8df5\u4e2d\u7684\u9700\u6c42\u5f80\u5f80\u53ef\u4ee5\u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b\uff0c\u6839\u636e\u76f8\u5e94\u7684\u9700\u6c42\u53ef\u4ee5\u9009\u62e9\u793e\u533a\u7684\u5de5\u5177\u6765\u5e2e\u52a9\u5b8c\u6210\u6d4b\u8bd5\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5feb\u7167\u8fdb\u884c UI \u6d4b\u8bd5 - \u53ef\u4ee5\u901a\u8fc7 Jest SnapShot \u80fd\u529b\u8fdb\u884c\u6d4b\u8bd5"),(0,s.kt)("li",{parentName:"ul"},"DOM \u4ea4\u4e92\u6d4b\u8bd5 - \u63a8\u8350\u4f7f\u7528 Enzyme\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684 API \u80fd\u529b\u652f\u6301 UI \u4ea4\u4e92\u6d4b\u8bd5")),(0,s.kt)("h3",{id:"\u4f7f\u7528-snapshot-\u8fdb\u884c-ui-\u6d4b\u8bd5"},"\u4f7f\u7528 Snapshot \u8fdb\u884c UI \u6d4b\u8bd5"),(0,s.kt)("p",null,"Snapshot \u6d4b\u8bd5\u662f Jest \u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u7ec4\u4ef6 UI \u8f93\u51fa\u7684\u63cf\u8ff0\u6587\u4ef6\uff0c\u786e\u4fdd\u4f60\u7684 UI \u4e0d\u4f1a\u53d1\u751f\u610f\u5916\u7684\u6539\u53d8\u3002"),(0,s.kt)("p",null,"\u7ec4\u4ef6\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ./src/test.js\nimport React from 'react';\n\nexport default function Test() {\n  return (\n    <div className=\"test-component\">\n      test\n    </div>\n  );\n}\n")),(0,s.kt)("p",null,"\u7ec4\u4ef6\u6d4b\u8bd5\u4ee3\u7801\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ./test/snapshot.test.js\nimport React from 'react';\nimport renderer from 'react-test-renderer';\nimport Test from '../src/test';\n\nit('renders', () => {\n  const tree = renderer\n    .create(<Test />)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n")),(0,s.kt)("p",null,"\u5728\u7b2c\u4e00\u6b21\u8fd0\u884c\u540e\uff0cJest Snapshot \u5c06\u4f1a\u751f\u6210\u5bf9\u5e94\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},".snap")," \u6587\u4ef6\uff0c\u5982\u679c\u7ec4\u4ef6\u7684\u8f93\u51fa\u5185\u5bb9\u53d1\u751f\u53d8\u66f4\uff0c\u5219\u4f1a\u5bfc\u81f4\u6d4b\u8bd5\u7528\u4f8b\u65e0\u6cd5\u901a\u8fc7\u3002"),(0,s.kt)("h3",{id:"\u4f7f\u7528-enzyme-\u6d4b\u8bd5\u7ec4\u4ef6"},"\u4f7f\u7528 Enzyme \u6d4b\u8bd5\u7ec4\u4ef6"),(0,s.kt)("p",null,"Enzyme \u662f Airbnb \u63d0\u4f9b\u7684\u6d4b\u8bd5\u7c7b\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u5957\u7b80\u6d01\u5f3a\u5927\u7684 API\u3002\u80fd\u591f\u7075\u6d3b\u64cd\u4f5c DOM\uff0c\u662f React \u793e\u533a\u63a8\u8350\u7684\u6d4b\u8bd5\u65b9\u6848\u3002"),(0,s.kt)("h4",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,s.kt)("p",null,"\u5b89\u88c5\u6d4b\u8bd5\u76f8\u5173\u4f9d\u8d56\u5305"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer\n")),(0,s.kt)("p",null,"\u57fa\u4e8e React \u5f00\u53d1\u7684\u6d4b\u8bd5\uff0c\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684 React Adapter \u6765\u4fdd\u8bc1 enzyme \u6e32\u67d3\u7684\u7248\u672c\u548c\u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u7248\u672c\u4e00\u81f4\uff0c\u4ee5 react 16 \u7248\u672c\u4e3a\u4f8b\uff0c\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u8bbe\u7f6e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { configure } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\n\nconfigure({ adapter: new Adapter() });\n")),(0,s.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u6bcf\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u90fd\u53bb\u5b9a\u4e49\u4e00\u904d\uff0c\u53ef\u4ee5\u5c06\u4e0a\u8ff0\u5185\u5bb9\u4fdd\u5b58\u81f3 ",(0,s.kt)("inlineCode",{parentName:"p"},"src/setupTests.js")," \u6587\u4ef6\u4e2d\uff0c\u5e76\u81ea\u5b9a\u4e49 Jest \u914d\u7f6e\u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"setupFilesAfterEnv")," \uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],\n};\n")),(0,s.kt)("h4",{id:"\u7ec4\u4ef6\u6d4b\u8bd5\u7528\u4f8b"},"\u7ec4\u4ef6\u6d4b\u8bd5\u7528\u4f8b"),(0,s.kt)("p",null,"Enzyme \u63d0\u4f9b shallow \u65b9\u6cd5\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u6d45\u6e32\u67d3\uff0c\u5373\u5b83\u4ec5\u4ec5\u4f1a\u6e32\u67d3\u81f3\u865a\u62df DOM\uff0c\u4e0d\u4f1a\u8fd4\u56de\u771f\u5b9e\u7684 DOM \u8282\u70b9\u3002\u591a\u6570\u60c5\u51b5\u4e0b shallow \u65b9\u6cd5\u5c31\u80fd\u6ee1\u8db3\u6d4b\u8bd5\u9700\u6c42\u3002"),(0,s.kt)("p",null,"\u7ec4\u4ef6\u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState } from 'react';\n\nexport default function Test() {\n  const [content, setContent] = useState('default content');\n  function onContentChanged() {\n    setContent('test');\n  }\n  return (\n    <div className=\"test-component\">\n      <span>{content}</span>\n      <button onClick={onContentChanged}>button</button>\n    </div>\n  );\n}\n")),(0,s.kt)("p",null,"\u4f7f\u7528 shallow \u65b9\u6cd5\u6d4b\u8bd5\u7ec4\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport Test from '../src/test';\nimport { shallow } from 'enzyme';\n\nit('renders', () => {\n  const wrapper = shallow(<Test />);\n  const button = wrapper.find('button').at(0);\n  // \u6a21\u62df\u89e6\u53d1 \u70b9\u51fb \u4e8b\u4ef6\uff0c\u6765\u6539\u53d8\u5f53\u524d\u7684 state\n  button.simulate('click');\n  expect(wrapper.find('span').at(0).text()).toBe('test');\n});\n")),(0,s.kt)("p",null,"\u66f4\u591a\u6d4b\u8bd5\u7528\u4f8b\u7f16\u5199\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"https://airbnb.io/enzyme/"},"Enzyme \u5b98\u7f51")),(0,s.kt)("h2",{id:"\u9ad8\u9636\u7528\u6cd5"},"\u9ad8\u9636\u7528\u6cd5"),(0,s.kt)("h2",{id:"\u81ea\u5b9a\u4e49-jest-\u914d\u7f6e"},"\u81ea\u5b9a\u4e49 jest \u914d\u7f6e"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"icejs")," \u5df2\u7ecf\u5185\u7f6e\u4e86 Jest \u6d4b\u8bd5\u6240\u9700\u7684\u914d\u7f6e\uff0c\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u6d4b\u8bd5\u80fd\u529b\uff0c\u5982\u679c\u9700\u8981\u5b9a\u5236\u81ea\u5df1\u7684 Jest \u914d\u7f6e\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"jest.config.js")," \u6587\u4ef6\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  testMatch: ['**/?*.e2e.js'],\n};\n")),(0,s.kt)("p",null,"jest.config.js \u4e2d\u81ea\u5b9a\u4e49\u914d\u7f6e\u6700\u7ec8\u5c06\u548c\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u5408\u5e76\uff0c\u66f4\u591a Jest \u76f8\u5173\u914d\u7f6e\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration"},"\u5b98\u7f51"),"\u3002"),(0,s.kt)("h2",{id:"\u4f7f\u7528-jest-cli-\u53c2\u6570"},"\u4f7f\u7528 Jest CLI \u53c2\u6570"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"icejs")," \u901a\u8fc7\u7ea6\u5b9a\u7684\u65b9\u5f0f\u652f\u6301\u6240\u6709 Jest CLI \u53c2\u6570\uff0c\u76f8\u5173\u53c2\u6570\u589e\u52a0 jest \u524d\u7f00\u5373\u53ef\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Jest CLI \u53c2\u6570 --watchAll\n$ icejs test --jest-watchAll\n# \u6216\u8005\n$ npm test -- --jest-watchAll\n")))}m.isMDXComponent=!0}}]);
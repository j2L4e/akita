(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),s=n(9),o=(n(0),n(187)),a={title:"The Store"},i={id:"store",title:"The Store",description:"The `Store` is a single object which contains the store state and serves as the _single source of truth_.",source:"@site/docs/store.mdx",permalink:"/akita/docs/store",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/store.mdx",sidebar:"docs",previous:{title:"Installation",permalink:"/akita/docs/installation"},next:{title:"The Query",permalink:"/akita/docs/query"}},c=[{value:"<code>update()</code>",id:"update",children:[]},{value:"<code>setLoading()</code>",id:"setloading",children:[]},{value:"<code>setError()</code>",id:"seterror",children:[]},{value:"<code>destroy()</code>",id:"destroy",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," is a single object which contains the store state and serves as the ",Object(o.b)("em",{parentName:"p"},"single source of truth"),"."),Object(o.b)("p",null,"To create a store, you need to extend Akita's ",Object(o.b)("inlineCode",{parentName:"p"},"Store"),", passing the type as well as its initial state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.store.ts"',title:'"session.store.ts"'}),"import { Store, StoreConfig } from '@datorama/akita';\n\nexport interface SessionState {\n   token: string;\n   name: string;\n}\n\nexport function createInitialState(): SessionState {\n  return {\n    token: '',\n    name: ''\n  };\n}\n\n@StoreConfig({ name: 'session' })\nexport class SessionStore extends Store<SessionState> {\n  constructor() {\n    super(createInitialState());\n  }\n}\n")),Object(o.b)("p",null,"With this setup you get a ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," with the following methods:"),Object(o.b)("h3",{id:"update"},Object(o.b)("inlineCode",{parentName:"h3"},"update()")),Object(o.b)("p",null,"When you want to update the store, you can call the ",Object(o.b)("inlineCode",{parentName:"p"},"update()")," method passing the new ",Object(o.b)("inlineCode",{parentName:"p"},"state"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.service.ts"',title:'"session.service.ts"'}),"import { SessionStore } from './session.store';\n \nexport class SessionService {\n  constructor(private sessionStore: SessionStore) {}\n\n  updateUserName(newName: string) {\n    this.sessionStore.update({ name: newName });\n  }  \n}\n")),Object(o.b)("p",null,"The second ",Object(o.b)("inlineCode",{parentName:"p"},"update()")," option gives you more control. It receives a ",Object(o.b)("inlineCode",{parentName:"p"},"callback")," function, which gets the current state, and returns a new ",Object(o.b)("strong",{parentName:"p"},"immutable")," state, which will be the new value of the store. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.service.ts"',title:'"session.service.ts"'}),"import { SessionStore } from './session.store';\n \nexport class SessionService {\n  constructor(private sessionStore: SessionStore) {}\n\n  updateUserName(newName: string) {\n    this.sessionStore.update(state => ({\n      name: newName\n    }));\n  }  \n}\n")),Object(o.b)("h3",{id:"setloading"},Object(o.b)("inlineCode",{parentName:"h3"},"setLoading()")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"loading")," state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.service.ts"',title:'"session.service.ts"'}),"import { SessionStore } from './session.store';\n \nexport class SessionService {\n  constructor(private sessionStore: SessionStore, \n              private http: HttpClient) {}\n\n  async updateUserName(newName: string) {\n    this.sessionStore.setLoading(true);\n    await this.http(...).toPromise();\n    this.sessionStore.update({ name: newName});\n    this.sessionStore.setLoading(false);\n  }  \n}\n")),Object(o.b)("h3",{id:"seterror"},Object(o.b)("inlineCode",{parentName:"h3"},"setError()")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"error")," state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.service.ts"',title:'"session.service.ts"'}),"import { SessionStore } from './session.store';\n \nexport class SessionService {\n  constructor(private sessionStore: SessionStore, \n              private http: HttpClient) {}\n\n  async updateUserName(newName: string) {\n    try {\n      await this.http(...).toPromise();\n    } catch(error) {\n      this.sessionStore.setError(error);\n    }\n  }  \n}\n")),Object(o.b)("h3",{id:"destroy"},Object(o.b)("inlineCode",{parentName:"h3"},"destroy()")),Object(o.b)("p",null,"Destroys the store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"sessionStore.destroy();\n")))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?s.a.createElement(m,i({ref:t},l,{components:n})):s.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
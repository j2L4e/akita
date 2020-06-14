(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),o=(n(0),n(187)),r={title:"Entity Store"},c={id:"entities/entity-store",title:"Entity Store",description:"For the most part, the stores you'll require in your applications will be entity stores. You can think of an entity store as a table in a database, where each table represents a flat collection of entities.",source:"@site/docs/entities/entity-store.mdx",permalink:"/akita/docs/entities/entity-store",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/entities/entity-store.mdx",sidebar:"docs",previous:{title:"Store Config",permalink:"/akita/docs/config"},next:{title:"Query Entity",permalink:"/akita/docs/entities/query-entity"}},d=[{value:"Extend the Entity Store",id:"extend-the-entity-store",children:[]},{value:"Entity Id",id:"entity-id",children:[]},{value:"API",id:"api",children:[{value:"<code>set()</code>",id:"set",children:[]},{value:"<code>add()</code>",id:"add",children:[]},{value:"<code>update()</code>",id:"update",children:[]},{value:"<code>remove()</code>",id:"remove",children:[]},{value:"<code>upsert()</code>",id:"upsert",children:[]},{value:"<code>upsertMany()</code>",id:"upsertmany",children:[]},{value:"<code>replace()</code>",id:"replace",children:[]},{value:"<code>move()</code>",id:"move",children:[]},{value:"<code>setLoading()</code>",id:"setloading",children:[]},{value:"<code>setError()</code>",id:"seterror",children:[]}]}],s={rightToc:d};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For the most part, the stores you'll require in your applications will be entity stores. You can think of an entity store as a table in a database, where each table represents a flat collection of entities.\nAkita's ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore")," simplifies the process, giving you everything you need to manage it."),Object(o.b)("p",null,"Let's see how we can use it to create a ",Object(o.b)("inlineCode",{parentName:"p"},"todos")," table, i.e., an ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore")," managing a ",Object(o.b)("inlineCode",{parentName:"p"},"Todo")," object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.store.ts"',title:'"todos.store.ts"'}),"import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';\nimport { Todo } from './todo.model';\n\nexport interface TodosState extends EntityState<Todo, number> { }\n\n@StoreConfig({ name: 'todos' })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() {\n    super() ;\n  }\n}\n")),Object(o.b)("p",null,"First, we need to define the store's interface. In our case, we can make do with extending the ",Object(o.b)("inlineCode",{parentName:"p"},"EntityState")," from Akita, providing it with the ",Object(o.b)("inlineCode",{parentName:"p"},"Todo")," Entity type and the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," type, which in our case is a ",Object(o.b)("inlineCode",{parentName:"p"},"number"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"EntityState")," has the following signature:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface EntityState<Entity = any, IDType = any> {\n  entities: HashMap<Entity>;\n  ids: IDType[];\n  loading: boolean;\n  error: any;\n}\n")))),Object(o.b)("h2",{id:"extend-the-entity-store"},"Extend the Entity Store"),Object(o.b)("p",null,"Sometimes it's useful to extend the store and add more properties to it, for example, you might want to save the todos active filter.\nTo do so, first, we need to update our interface with the ",Object(o.b)("inlineCode",{parentName:"p"},"property")," type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{5} title="todos.store.ts"',"{5}":!0,title:'"todos.store.ts"'}),"import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';\nimport { Todo } from './todo.model';\n\nexport interface TodosState extends EntityState<Todo, number> {\n  filter: string;\n}\n")),Object(o.b)("p",null,"Next, if we want to pass an initial state for this property, we can do it in the constructor as we did with a Store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{11} title="todos.store.ts"',"{11}":!0,title:'"todos.store.ts"'}),"import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';\nimport { Todo } from './todo.model';\n\nexport interface TodosState extends EntityState<Todo, number> {\n  filter: string;\n}\n\n@StoreConfig({ name: 'todos' })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() {\n    super({ filter: 'ALL' });\n  }\n}\n")),Object(o.b)("p",null,"Now we can update the property by using the ",Object(o.b)("inlineCode",{parentName:"p"},"update()")," method. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.update({ filter: 'COMPLETED' });\n")),Object(o.b)("h2",{id:"entity-id"},"Entity Id"),Object(o.b)("p",null,"By default, Akita takes the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," key from the entity ",Object(o.b)("inlineCode",{parentName:"p"},"id")," field. To change it, you can pass the ",Object(o.b)("inlineCode",{parentName:"p"},"idKey")," option to the store config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.store.ts"',title:'"todos.store.ts"'}),"export interface TodosState extends EntityState<Todo, number> {}\n\n@StoreConfig({ name: 'todos', idKey: '_id' })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(o.b)("p",null,"By using this model, you will receive a lot of built-in functionality from Akita:"),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"set"},Object(o.b)("inlineCode",{parentName:"h3"},"set()")),Object(o.b)("p",null,"Replace current collection with the provided collection, and ",Object(o.b)("strong",{parentName:"p"},"resets")," the active entity:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Pass an array\nstore.set([ Entity, Entity ]);\n// Pass an object\nstore.set({ 1: Entity, 2: Entity });\n// Set the active id\nstore.set([ Entity, Entity ], { activeId: 1 });\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you pass an object, Akita doesn't guarantee the order of the data received."))),Object(o.b)("h3",{id:"add"},Object(o.b)("inlineCode",{parentName:"h3"},"add()")),Object(o.b)("p",null,"Add an entity or entities to the store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Add multiple\nstore.add([Entity, Entity]);\n// Add one\nstore.add(Entity);\n\n// Prepend\nstore.add([Entity, Entity], { prepend: true });\nstore.add(Entity, { prepend: true })\n")),Object(o.b)("h3",{id:"update"},Object(o.b)("inlineCode",{parentName:"h3"},"update()")),Object(o.b)("p",null,"Update an entity or entities in the store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Update one\nstore.update(entityId, { name: 'New Name' ));\n\n// Use a predicate function\nstore.update(({ name }) => name === 'John', {\n  name: 'New Name'\n});\n\n// Use a callback function\nstore.update(entityId, entity => {\n  return {\n    config: {\n      ...entity.config,\n      date\n    }\n  }\n});\n\n// Update multiple\nstore.update([id, id, id], { count: 5 });\n\n// Update all\nstore.update(null, { name: 'New Name' });\n")),Object(o.b)("h3",{id:"remove"},Object(o.b)("inlineCode",{parentName:"h3"},"remove()")),Object(o.b)("p",null,"Remove one or more entities from the store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Remove one\nstore.remove(5);\n\n// Remove multiple\nstore.remove([1,2,3]);\n\n// Remove by predicate\nstore.remove(({ name }) => name === 'John');\n\n// Remove all\nstore.remove();\n")),Object(o.b)("h3",{id:"upsert"},Object(o.b)("inlineCode",{parentName:"h3"},"upsert()")),Object(o.b)("p",null,"Insert or update an entity. Creates a new entity when no entity matches the ",Object(o.b)("inlineCode",{parentName:"p"},"id"),"; otherwise, it performs an update:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.upsert(id, { isOpen: true }, (id, newState) => ({ id, ...newState });\nstore.upsert(id, (oldState) => ({ isOpen: !(oldState?.isOpen ?? true) }), (id, newState) => ({ id, ...newState });\n")),Object(o.b)("p",null,"The first argument is the entity to be inserted or updated, the second contains the new entity state, and the last\nargument is the callback for creating a new entity if it does not exist."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The initializing callback parameter can be omitted, but then type safety of entities cannot be guaranteed. Use\nthis if all state properties are declared optional or if manually type check for ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),"."))),Object(o.b)("h3",{id:"upsertmany"},Object(o.b)("inlineCode",{parentName:"h3"},"upsertMany()")),Object(o.b)("p",null,"Insert or update multiple entities. Creates a new entity when no entity matches the ",Object(o.b)("inlineCode",{parentName:"p"},"id"),"; otherwise, it performs an update:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.upsertMany([entity, entity]);\n")),Object(o.b)("h3",{id:"replace"},Object(o.b)("inlineCode",{parentName:"h3"},"replace()")),Object(o.b)("p",null,"Replace an entity (except the ",Object(o.b)("inlineCode",{parentName:"p"},"id"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.replace(id, newEntity);\nstore.replace([id, id, id], newEntity);\n")),Object(o.b)("h3",{id:"move"},Object(o.b)("inlineCode",{parentName:"h3"},"move()")),Object(o.b)("p",null,"Move an entity from the current ",Object(o.b)("inlineCode",{parentName:"p"},"index")," to a new ",Object(o.b)("inlineCode",{parentName:"p"},"index"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.move(fromIndex, toIndex);\n")),Object(o.b)("h3",{id:"setloading"},Object(o.b)("inlineCode",{parentName:"h3"},"setLoading()")),Object(o.b)("p",null,"Update the store's ",Object(o.b)("inlineCode",{parentName:"p"},"loading")," state. The initial value is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and is switched to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," when you call ",Object(o.b)("inlineCode",{parentName:"p"},"store.set()"),". This can come in handy for indicating ",Object(o.b)("inlineCode",{parentName:"p"},"loading"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.setLoading(true);\n")),Object(o.b)("h3",{id:"seterror"},Object(o.b)("inlineCode",{parentName:"h3"},"setError()")),Object(o.b)("p",null,"Update the store's ",Object(o.b)("inlineCode",{parentName:"p"},"error")," state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"store.setError(error);\n")))}l.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(r,".").concat(m)]||p[m]||b[m]||o;return n?i.a.createElement(u,c({ref:t},s,{components:n})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
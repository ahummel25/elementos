(this["webpackJsonpelementos-example"]=this["webpackJsonpelementos-example"]||[]).push([[0],{61:function(e,t,n){e.exports=n(81)},62:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);n(62);var i,r=n(0),o=n.n(r),a=n(53),u=n.n(a),c=n(96),s=n(90),l=n(12),d=n(11),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onSubscriberChange,n=e.reverse,i=void 0!==n&&n,r=[];return{subscribe:function(e){return r=i?[e].concat(Object(d.a)(r)):[].concat(Object(d.a)(r),[e]),t&&t({count:r.length}),function(){r=r.filter((function(t){return t!==e})),t&&t({count:r.length})}},notifySubscribers:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r.forEach((function(e){e.apply(void 0,t)}))}}},m=function(){var e={commitPhaseOne:f(),commitPhaseTwo:f(),rollback:f()};return{commit:function(){e.commitPhaseOne.notifySubscribers(),e.commitPhaseTwo.notifySubscribers()},rollback:function(){e.rollback.notifySubscribers()},onCommitPhaseOne:function(t){return e.commitPhaseOne.subscribe(t)},onCommitPhaseTwo:function(t){return e.commitPhaseTwo.subscribe(t)},onRollback:function(t){return e.rollback.subscribe(t)}}},p=function(){return i},v=function(e){i=e},b=function(e){return function(){var t=p();if(t)return e.apply(void 0,arguments);t=m(),v(t);try{var n=e.apply(void 0,arguments);return v(void 0),t.commit(),n}catch(i){throw v(void 0),t&&t.rollback(),i}}},h=function(e,t){var n,i=e,r=new WeakMap,o=f(),a=f({onSubscriberChange:function(e){var t=e.count;o.notifySubscribers({count:t})}}),u=b((function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p();r.has(n)||(n.onCommitPhaseOne((function(){i=r.get(n),r.delete(n)})),n.onRollback((function(){r.delete(n)})),r.set(n,i)),t="function"===typeof e?e(r.get(n)):e,r.set(n,t),a.notifySubscribers(n)}));return{get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p();return t&&r.has(t)?e(r.get(t)):e(i)},subscribe:function(e){return a.subscribe(e)},onObserverChange:function(e){return o.subscribe(e)},actions:(null===t||void 0===t||null===(n=t.actions)||void 0===n?void 0:n.call(t,u))||{set:u}}},g=function(e,t){if(void 0===e||e.length!==t.length)return!1;for(var n in e)if(!Object.is(e[n],t[n]))return!1;return!0},q=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.paramsEqual,o=void 0===r?g:r;return function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o(t,r)||(t=r,n=e.apply(void 0,r)),n}},j=function(e,t){return g(e&&Object.values(e[0]),Object.values(t[0]))},O=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.actions,r=n.deriver,o=void 0===r?function(e){return e}:r,a=function(t){var n={};return Object.keys(e).forEach((function(i){var r=e[i];n[i]=r.get((function(e){return e}),t)})),n},u=q(o,{paramsEqual:j}),c=f(),s=f({onSubscriberChange:function(e){var n=e.count;c.notifySubscribers({count:n}),n>0&&!t?t=m():0===n&&t&&(t(),t=void 0)}}),d=new WeakMap,m=function(){var t=[];Object.values(e).forEach((function(e){var n=e.subscribe((function(e){d.has(e)||(e.onCommitPhaseOne((function(){d.delete(e)})),e.onRollback((function(){d.delete(e)})),d.set(e,q(o,{paramsEqual:j}))),s.notifySubscribers(e)}));t.push(n)}));return function(){t.forEach((function(e){return e()}))}},v={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p();if(t&&d.has(t)){var n=d.get(t);return e(null===n||void 0===n?void 0:n(a(t)))}return e(u(a()))},subscribe:function(e){return s.subscribe(e)},onObserverChange:function(e){return c.subscribe(e)}};return Object(l.a)(Object(l.a)({},v),{},{children:e,actions:(null===i||void 0===i?void 0:i(e))||e})},E=function(e,t){var n,i,r=!0,o=new Set,a=function(){"function"===typeof n&&n()},u=function(){var o=e.get();!r&&Object.is(i,o)||(a(),n=t(o),i=o,r=!1)},c=e.subscribe((function(e){e?o.has(e)||(o.add(e),e.onCommitPhaseTwo((function(){u(),o.delete(e)})),e.onRollback((function(){o.delete(e)}))):u()}));u();return function(){c(),a()}};var y,x=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current},w=function(e){var t=Object(r.useRef)(null);return null==t.current&&(t.current={value:e()}),t.current.value},k=function(e,t){var n,i,r;for(n in i={},e)r=e[n],i[n]=t(r);return i},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useRef)([]),i=w((function(){return k(t,(function(e){return h(e)}))})),o=w((function(){return e({beforeUnmount:function(e){n.current.push(e)},atoms:i})})),a=x(t);return Object(r.useEffect)((function(){a&&b((function(){Object.keys(i).forEach((function(e){Object.is(a[e],t[e])||i[e].actions.set((function(){return t[e]}))}))}))()})),Object(r.useEffect)((function(){return function(){n.current.forEach((function(e){e()}))}}),[]),o},P=n(7),C=function(e){var t=Object(r.useState)(e.get()),n=Object(P.a)(t,2),i=n[0],o=n[1];return Object(r.useEffect)((function(){return E(e,(function(e){o(e)}))}),[e]),i},F=n(19),R=n(92),N=n(98),I=n(9),T=n.n(I),$=n(18);!function(e){e.Initial="initial",e.Pending="pending",e.Fulfilled="fulfilled",e.Rejected="rejected"}(y||(y={}));var z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.defaultData,i=h(y.Initial),r=h(n),o=h(null);return O({status:i,data:r,error:o},{actions:function(t){var n=t.status,i=t.data,r=t.error,o={setPending:b((function(){n.actions.set(y.Pending),r.actions.set(null)})),setFulfilled:b((function(e){n.actions.set(y.Fulfilled),i.actions.set(e),r.actions.set(null)})),setRejected:b((function(e){n.actions.set(y.Rejected),r.actions.set(e)}))},a=0,u=function(){var t=Object($.a)(T.a.mark((function t(){var n,i,r=arguments;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=++a,o.setPending(),(i=e.apply(void 0,r)).then((function(e){n===a&&o.setFulfilled(e)})).catch((function(e){n===a&&o.setRejected(e)})),t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.a)(Object(l.a)({},o),{},{execute:u})},deriver:function(e){var t=e.status,n=e.data,i=e.error;return{isInitial:t===y.Initial,isPending:t===y.Pending,isFulfilled:t===y.Fulfilled,isRejected:t===y.Rejected,status:t,data:n,error:i}}})},A=n(97),B=function(e){return e.active?o.a.createElement(s.a,{position:"absolute",height:"100%",width:"100%",align:"center",justify:"center",bg:"white"},o.a.createElement(A.a,{size:"lg",color:"purple.600"})):null},D=n(91),U=function(e){var t=e.title,n=e.description,i=e.active,r=Object(F.a)(e,["title","description","active"]);return o.a.createElement(N.b,Object.assign({w:"100%",rounded:0,bg:i?"purple.200":"none",p:2,_hover:{bg:i?"purple.200":"purple.100"}},r),o.a.createElement(D.a,{noOfLines:1,casing:"uppercase",fontSize:"sm"},t),n&&o.a.createElement(D.a,{noOfLines:2,fontSize:"xs"},n))},G=[{id:1,folder:"recipes",title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",description:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{id:2,folder:"project ideas",title:"qui est esse",description:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{id:3,folder:"gift ideas",title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",description:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{id:4,folder:"recipes",title:"eum et est occaecati",description:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{id:5,folder:"recipes",title:"nesciunt quas odio",description:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"},{id:6,folder:"gift ideas",title:"dolorem eum magni eos aperiam quia",description:"ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"},{id:7,folder:"gift ideas",title:"magnam facilis autem",description:"dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"},{id:8,folder:null,title:"dolorem dolore est ipsam",description:"dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"},{id:9,folder:"project ideas",title:"nesciunt iure omnis dolorem tempora et accusantium",description:"consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"},{id:10,folder:null,title:"optio molestias id quia eum",description:"quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"},{id:11,folder:"project ideas",title:"et ea vero quia laudantium autem",description:"delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"},{id:12,folder:"project ideas",title:"in quibusdam tempore odit est dolorem",description:"itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"},{id:13,folder:"gift ideas",title:"dolorum ut in voluptas mollitia et saepe quo animi",description:"aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"},{id:14,folder:"project ideas",title:"voluptatem eligendi optio",description:"fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"},{id:15,folder:null,title:"eveniet quod temporibus",description:"reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"}],H=function(e){return new Promise((function(t){return setTimeout(t,e)}))},M=function(){var e=Object($.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(750);case 2:return t=G.reduce((function(e,t){return t.folder&&e.add(t.folder),e}),new Set),e.abrupt("return",Array.from(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object($.a)(T.a.mark((function e(){var t,n,i,r,o,a,u,c=arguments;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=t.page,i=void 0===n?1:n,r=t.perPage,o=void 0===r?10:r,a=t.folder,console.log("FETCHING NOTES"),e.next=4,H(750);case 4:return u=G.filter((function(e){return null==a||e.folder===a})),e.abrupt("return",u.slice((i-1)*o,i*o));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object($.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("FETCHING NOTE: "+t),e.next=3,H(750);case 3:return n=G.find((function(e){return e.id===t})),e.abrupt("return",null!=n?Object(l.a)({},n):null);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object($.a)(T.a.mark((function e(t,n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("UPDATING NOTE: "+t),e.next=3,H(750);case 3:G=G.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),n):e}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(e){var t,n=e.selectedFolder,i=e.onFolderSelect,r=Object(F.a)(e,["selectedFolder","onFolderSelect"]),a=S((function(){var e=z(M);return e.actions.execute(),{request$:e}})).request$,u=C(a);return o.a.createElement(R.a,Object.assign({},r,{position:"relative"}),o.a.createElement(B,{active:u.isPending}),o.a.createElement(N.a,{h:"100%",overflow:"auto"},o.a.createElement(U,{key:"all",onClick:function(){i(null)},active:null===n,title:"All"}),null===(t=u.data)||void 0===t?void 0:t.map((function(e){return o.a.createElement(U,{key:e,onClick:function(){i(e)},active:n===e,title:e})}))))},K=function(e){var t,n=e.folder,i=e.selectedNote,r=e.onNoteSelect,a=Object(F.a)(e,["folder","selectedNote","onNoteSelect"]),u=S((function(e){var t=e.atoms,n=e.beforeUnmount,i=z(W);return n(E(t.folder,(function(e){i.actions.execute({folder:e})}))),{request$:i}}),{folder:n}).request$,c=C(u);return o.a.createElement(R.a,Object.assign({},a,{position:"relative"}),o.a.createElement(B,{active:c.isPending}),o.a.createElement(N.a,{h:"100%",overflow:"auto"},null===(t=c.data)||void 0===t?void 0:t.map((function(e){return o.a.createElement(U,{key:e.id,onClick:function(){r(e.id)},active:i===e.id,title:e.title,description:e.description})}))))},Q=n(57),V=n.n(Q),X=n(95),Y=function(e){var t=e.noteId,n=Object(F.a)(e,["noteId"]),i=S((function(e){var t=e.atoms,n=e.beforeUnmount,i=O({title:h(""),description:h("")},{actions:function(e){var t=e.title,n=e.description;return{setData:b((function(e){t.actions.set(e.title),n.actions.set(e.description)})),title:t,description:n}}}),r=V()(L,1e3),o=z(J),a=z(function(){var e=Object($.a)(T.a.mark((function e(t,n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t,n);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());return n(E(t.noteId,(function(e){e&&o.actions.execute(e)}))),n(E(o,(function(e){var t=e.isFulfilled,n=e.data;t&&i.actions.setData(n)}))),n(E(i,(function(e){a.actions.execute(t.noteId.get(),e)}))),{form$:i,fetchRequest$:o}}),{noteId:t}),r=i.form$,a=i.fetchRequest$,u=C(a),c=C(r);return o.a.createElement(s.a,Object.assign({},n,{direction:"column",position:"relative"}),null===t&&o.a.createElement(s.a,{h:"100%",direction:"column",justify:"center",align:"center"},o.a.createElement("img",{src:"empty.svg",alt:"No note selected",width:"200"}),o.a.createElement(D.a,{fontWeight:"600",size:"xl",p:"4"},"No note selected")),t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(B,{active:u.isPending}),u.isFulfilled&&o.a.createElement(o.a.Fragment,null,o.a.createElement(X.a,{value:c.title,onChange:function(e){r.actions.title.actions.set(e.target.value)},resize:"none",rounded:"0",p:2,display:"block",focusBorderColor:"transparent",boxSizing:"border-box",size:"lg",fontStyle:"bold",minHeight:"64px",border:"none"}),o.a.createElement(s.a,{borderBottom:"2px",borderBottomColor:"purple.300"}),o.a.createElement(X.a,{value:c.description,onChange:function(e){r.actions.description.actions.set(e.target.value)},flex:"1",resize:"none",rounded:"0",p:2,display:"block",focusBorderColor:"transparent",boxSizing:"border-box",size:"sm",border:"none"}))))},Z=n(94),ee=Object(Z.a)({fonts:{body:"Poppins, sans-serif",heading:"Poppins, serif",mono:"Menlo, monospace"}}),te=function(){var e=S((function(){return{selectedFolder$:h(null),selectedNote$:h(null)}})),t=e.selectedFolder$,n=e.selectedNote$,i=C(t),r=C(n);return o.a.createElement(c.a,{theme:ee},o.a.createElement(s.a,{h:"100%",color:"purple.700"},o.a.createElement(_,{w:240,selectedFolder:i,onFolderSelect:t.actions.set,borderRight:"2px",borderColor:"purple.300"}),o.a.createElement(K,{folder:i,selectedNote:r,onNoteSelect:n.actions.set,w:320,borderRight:"2px",borderColor:"purple.300"}),o.a.createElement(Y,{noteId:r||null,flex:1})))};u.a.render(o.a.createElement(te,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.190c70df.chunk.js.map
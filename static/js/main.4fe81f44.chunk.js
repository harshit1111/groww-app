(this.webpackJsonpgroww=this.webpackJsonpgroww||[]).push([[0],{11:function(e,t,c){e.exports={header:"allBanks_header__UTYjS",table:"allBanks_table__3OsF3",dropdown:"allBanks_dropdown__3w1E-",button:"allBanks_button__2rdeN",pagination:"allBanks_pagination__18BD2",text:"allBanks_text__3TAX7",row:"allBanks_row__3ETaf"}},21:function(e,t,c){e.exports={button:"pagination_button__fY4_e"}},22:function(e,t,c){e.exports={sideBar:"sidebar_sideBar__2GqxY"}},23:function(e,t,c){e.exports={loader:"loader_loader__1OZcu"}},29:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(15),l=c.n(s),r=(c(29),c(9)),i=c(22),o=c.n(i),j=c(1);var b=function(){return Object(j.jsx)("div",{className:o.a.sideBar,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/",children:"All Banks"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/favourites",children:"favourites"})})]})})},d=c(3),u=c(14),h=c(4),O=c(11),x=c.n(O);var f=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("select",{style:{width:"150px"},defaultValue:"jajaj",placeholder:"jajaj",onChange:function(t){e.change(t.target.value)},children:[e.selected?Object(j.jsx)("option",{hidden:!0,selected:!0,children:e.selected}):Object(j.jsx)("option",{hidden:!0,selected:!0,children:e.label}),e.options.map((function(e){return Object(j.jsx)("option",{value:e.value,children:e.name},e.value)}))]})})},p=c(23),m=c.n(p);var v=function(){return Object(j.jsx)("div",{className:m.a.loader})},g=c(21),N=c.n(g);var _=function(e){var t=e.currentPageNumber,c=e.totalPages;return console.log(t),Object(j.jsxs)("div",{className:"mt-3 d-flex justify-content-center align-items-center",children:[Object(j.jsx)("button",{disabled:!t,className:N.a.button,onClick:function(){return e.change(t-1)},children:"previous"}),Object(j.jsx)("span",{children:t+1}),Object(j.jsx)("button",{disabled:t==c,className:N.a.button,onClick:function(){return e.change(t+1)},children:"next"})]})},k=c(13),S=[{name:"mumbai",value:"mumbai"},{name:"delhi",value:"delhi"},{name:"pune",value:"pune"},{name:"bengalore",value:"bengalore"},{name:"chennai",value:"chennai"}],y=[{name:"ifsc",vaue:"ifsc"},{name:"branch",value:"branch"},{name:"bank name",value:"bank_name"},{name:"address",value:"address"}];var w=function(e){var t,c,a=this,s=Object(k.b)(),l=Object(k.c)((function(e){return e.city})),r=Object(n.useState)([]),i=Object(h.a)(r,2),o=i[0],b=i[1],O=Object(n.useState)([]),p=Object(h.a)(O,2),m=p[0],g=p[1],N=Object(n.useState)([]),w=Object(h.a)(N,2),C=w[0],B=w[1],E=Object(n.useState)(!0),U=Object(h.a)(E,2),I=U[0],T=U[1],A=Object(n.useState)(""),D=Object(h.a)(A,2),F=D[0],J=D[1],G=Object(n.useState)(""),P=Object(h.a)(G,2),Y=P[0],H=P[1],M=Object(n.useState)(0),R=Object(h.a)(M,2),K=R[0],W=R[1],q=Object(n.useState)(10),L=Object(h.a)(q,2),V=L[0],X=(L[1],Object(n.useState)()),Z=Object(h.a)(X,2),z=Z[0],Q=Z[1],$=Object(n.useState)(!1),ee=Object(h.a)($,2),te=ee[0],ce=ee[1],ne=Object(d.f)();Object(n.useEffect)((function(){T(!0),ce(!1),W(0);var e=localStorage.getItem(l);if(e){if(e=JSON.parse(e),console.log(e.expiry,Date.now()),e.expiry>Date.now())return b(e.banks),g(e.banks),void T(!1);localStorage.clear()}fetch("https://vast-shore-74260.herokuapp.com/banks?city=".concat(l.toUpperCase())).then((function(e){return e.json()})).then((function(e){console.log(e),b(e),g(e),T(!1);var t={banks:e,expiry:Date.now()+2592e5};localStorage.setItem("".concat(l),JSON.stringify(t))})).catch((function(e){console.log("something went wrong"),ce(!0),T(!1)}))}),[l]),Object(n.useEffect)((function(){var e=[];console.log(m);for(var t=K*V;t<K*V+V&&t<m.length;t++)e.push(m[t]);B(e)}),[m,K]);var ae=function(e){ne.push("/bank-details/".concat(e),l)};return Object(n.useEffect)((function(){var e=setTimeout((function(){!function(){var e=[];console.log(l,F,Y),e=F&&Y?o.filter((function(e){return e.city.toUpperCase()==l.toUpperCase()&&e[F].toUpperCase()==Y.toUpperCase()})):o.filter((function(e){return console.log(e.city.toUpperCase(),l.toLocaleUpperCase()),e.city.toUpperCase()==l.toUpperCase()})),g(e)}()}),500);return function(){clearTimeout(e)}}),[Y,F,l,o]),Object(n.useEffect)((function(){Q(m.length/V-1)}),[m]),Object(j.jsxs)("div",{className:"container_fluid",children:[Object(j.jsxs)("div",{className:x.a.header,children:[Object(j.jsx)("h4",{children:"All banks"}),Object(j.jsxs)("ul",{className:x.a.dropdown,children:[Object(j.jsx)("li",{children:Object(j.jsx)(f,(t={label:"Choose city",selected:l,change:function(e){console.log("???????????"),s({type:"change",city:e})}},Object(u.a)(t,"label","choose city"),Object(u.a)(t,"options",S),t))}),Object(j.jsx)("li",{children:Object(j.jsx)(f,(c={label:"Choose Category",selected:F,change:function(e){J(e)}},Object(u.a)(c,"label","choose Category"),Object(u.a)(c,"options",y),c))}),Object(j.jsx)("li",{children:Object(j.jsx)("input",{onInput:function(e){return H(e.target.value)},placeholder:"search"})})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("table",{className:x.a.table,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Branch Name"}),Object(j.jsx)("th",{children:"IFSC"}),Object(j.jsx)("th",{children:"NAME"}),Object(j.jsx)("th",{children:"ID"}),Object(j.jsx)("th",{children:"address"})]})}),Object(j.jsx)("tbody",{children:C.map((function(e,t){return Object(j.jsxs)("tr",{className:x.a.row,onClick:ae.bind(a,e.ifsc),children:[Object(j.jsxs)("td",{children:[" ",e.bank_name]}),Object(j.jsx)("td",{children:e.ifsc}),Object(j.jsx)("td",{children:e.branch}),Object(j.jsx)("td",{children:e.bank_id}),Object(j.jsx)("td",{className:x.a.text,children:e.address})]},t)}))})]}),I?Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)(v,{})," "]}):null,te?Object(j.jsx)("div",{className:"text-center mt-2",children:Object(j.jsx)("h1",{children:"SOMETHING WENT WRONG , TRY AGAIN"})}):null,m.length>0?Object(j.jsx)(_,{currentPageNumber:K,totalPages:z,change:function(e){W(e)}}):null,I||te||0!=m.length?null:Object(j.jsx)("div",{className:"text-center mt-3",children:Object(j.jsx)("h1",{children:"NO BANKS FOUNDS"})})]})]})},C=["mumbai","delhi","pune"];var B=function(e){var t=Object(n.useState)(),c=Object(h.a)(t,2),a=c[0],s=c[1],l=Object(n.useState)({}),r=Object(h.a)(l,2),i=r[0],o=r[1],b=Object(n.useState)(!1),u=Object(h.a)(b,2),O=u[0],x=u[1],f=Object(d.f)();return Object(n.useEffect)((function(){var e=f.location.pathname.split("/"),t=e[e.length-1];console.log(t),s(t)}),[f]),Object(n.useEffect)((function(){var e=null;if(console.log(a),x(!0),f.location.state){var t=f.location.state,c=JSON.parse(localStorage.getItem(t));c&&(console.log(c),e=c.banks.find((function(e){return e.ifsc===a})))}else for(var n=0;n<C.length;n++){var s=JSON.parse(localStorage.getItem(C[n]));if(s&&(e=s.banks.find((function(e){return console.log(e.ifsc==a),e.ifsc==a}))),e)break}e&&o(e),console.log(e),x(!1)}),[a]),Object(j.jsxs)("div",{className:"container_fluid",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h3",{children:"Selected Bank details"})})}),Object(j.jsxs)("div",{className:"row",children:[O?Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)(v,{})}):null,0!=Object.keys(i).length||O?null:Object(j.jsx)("h2",{children:"NO BANK FOUND"}),Object(j.jsx)("tbody",{children:Object.keys(i).map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e}),Object(j.jsx)("td",{children:i[e]})]})})}))})]})]})},E=c(24),U=Object(E.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{city:"mumbai"},t=arguments.length>1?arguments[1]:void 0;return"change"==t.type?{city:t.city}:e}));var I=function(){return Object(j.jsx)("h1",{children:"NOTHING HERE"})};var T=function(){return Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",exact:!0,children:Object(j.jsx)(k.a,{store:U,children:Object(j.jsx)(w,{})})}),Object(j.jsx)(d.a,{path:"/bank-details/:ifsc",exact:!0,children:Object(j.jsx)(B,{})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(I,{})})]})};var A=function(){return Object(j.jsx)("div",{className:"container_fluid",children:Object(j.jsxs)("div",{className:"row bg-light p-4",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:"col-10",children:Object(j.jsx)(T,{})})]})})};var D=function(){return Object(j.jsx)(A,{})};c(36);l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{basename:"/groww-app",children:Object(j.jsx)(D,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4fe81f44.chunk.js.map
(this.webpackJsonpgroww=this.webpackJsonpgroww||[]).push([[0],{11:function(e,t,c){e.exports={header:"allBanks_header__UTYjS",table:"allBanks_table__3OsF3",dropdown:"allBanks_dropdown__3w1E-",button:"allBanks_button__2rdeN",pagination:"allBanks_pagination__18BD2"}},18:function(e,t,c){e.exports={sideBar:"sidebar_sideBar__2GqxY"}},20:function(e,t,c){e.exports={loader:"loader_loader__1OZcu"}},25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),r=c.n(s),l=(c(25),c(8)),i=c(18),j=c.n(i),o=c(0);var b=function(){return Object(o.jsx)("div",{className:j.a.sideBar,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"All Banks"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/favourites",children:"favourites"})})]})})},d=c(2),u=c(4),O=c(11),h=c.n(O);var x=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("select",{onChange:function(t){e.change(t.target.value)},children:[Object(o.jsx)("option",{hidden:!0,disabled:!0,selected:!0,children:e.label}),e.options.map((function(e){return Object(o.jsx)("option",{value:e.value,children:e.name},e.value)}))]})})},f=c(20),p=c.n(f);var v=function(){return Object(o.jsx)("div",{className:p.a.loader})};var m=function(e){var t=e.currentPageNumber,c=e.totalPages;console.log(t);var n={padding:"1px 10px",margin:"10px",border:"1px solid gray",borderRadius:"5px"};return Object(o.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[t>0?Object(o.jsx)("span",{style:n,onClick:function(){return e.change(t-1)},children:"previous"}):null,Object(o.jsx)("span",{children:t}),t<c?Object(o.jsx)("span",{style:n,onClick:function(){return e.change(t+1)},children:"next"}):null]})},g=[{name:"mumbai",value:"mumbai"},{name:"delhi",value:"delhi"}],N=[{name:"ifsc",vaue:"ifsc"},{name:"branch",value:"branch"},{name:"bank name",value:"bank_name"},{name:"address",value:"address"}];var _=function(e){var t=this,c=Object(n.useState)([]),a=Object(u.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),j=i[0],b=i[1],O=Object(n.useState)([]),f=Object(u.a)(O,2),p=f[0],_=f[1],k=Object(n.useState)(!0),S=Object(u.a)(k,2),w=S[0],B=S[1],y=Object(n.useState)("mumbai"),C=Object(u.a)(y,2),E=C[0],U=C[1],I=Object(n.useState)(""),J=Object(u.a)(I,2),A=J[0],F=J[1],M=Object(n.useState)(""),P=Object(u.a)(M,2),D=P[0],Y=P[1],q=Object(n.useState)(0),G=Object(u.a)(q,2),K=G[0],R=G[1],T=Object(n.useState)(10),Z=Object(u.a)(T,2),z=Z[0],H=(Z[1],Object(n.useState)()),L=Object(u.a)(H,2),Q=L[0],V=L[1],W=Object(d.f)();Object(n.useEffect)((function(){B(!0);var e=localStorage.getItem("banks");if(e)return r(JSON.parse(e)),b(JSON.parse(e)),void B(!1);fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI").then((function(e){return e.json()})).then((function(e){console.log(e),r(e),b(e),B(!1),localStorage.setItem("banks",JSON.stringify(e))})).catch((function(e){console.log("something went wrong"),B(!1)}))}),[]),Object(n.useEffect)((function(){var e=[];console.log(j);for(var t=K*z;t<K*z+z&&t<j.length;t++)e.push(j[t]);console.log(e),_(e)}),[j,K]),Object(n.useEffect)((function(){}),[]);var X=function(e){W.push("/bank-details/".concat(e))};return function(e,t){var c=0}((function(){console.log("jajaj");var e=[];e=A&&D?s.filter((function(e){return e.city.toUpperCase()==E.toUpperCase()&&e[A].toUpperCase()==D.toUpperCase()})):s.filter((function(e){return e.city.toUpperCase()==E.toUpperCase()})),b(e)}),2e3),Object(n.useEffect)((function(){V(j.length/z)}),[j]),console.log(p),Object(o.jsxs)("div",{className:"container_fluid",children:[Object(o.jsxs)("div",{className:h.a.header,children:[Object(o.jsx)("h4",{children:"All banks"}),Object(o.jsxs)("ul",{className:h.a.dropdown,children:[Object(o.jsx)("li",{children:Object(o.jsx)(x,{change:function(e){U(e)},label:"choose city",options:g})}),Object(o.jsx)("li",{children:Object(o.jsx)(x,{change:function(e){F(e)},label:"choose Category",options:N})}),Object(o.jsx)("li",{children:Object(o.jsx)("input",{onInput:function(e){return Y(e.target.value)},placeholder:"search"})})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("table",{className:h.a.table,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Branch Name"}),Object(o.jsx)("th",{children:"IFSC"}),Object(o.jsx)("th",{children:"NAME"}),Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"address"})]})}),Object(o.jsx)("tbody",{children:p.map((function(e,c){return Object(o.jsxs)("tr",{onClick:X.bind(t,e.ifsc),children:[Object(o.jsx)("td",{children:e.bank_name}),Object(o.jsx)("td",{children:e.ifsc}),Object(o.jsx)("td",{children:e.branch}),Object(o.jsx)("td",{children:e.bank_id}),Object(o.jsx)("td",{children:e.address})]},c)}))})]}),w?Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)(v,{})," "]}):null,Object(o.jsx)(m,{currentPageNumber:K,totalPages:Q,change:function(e){console.log(e),R(e)}})]})]})};var k=function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(),l=Object(u.a)(r,2),i=l[0],j=l[1],b=Object(n.useState)({}),O=Object(u.a)(b,2),h=O[0],x=O[1],f=Object(n.useState)(!1),p=Object(u.a)(f,2),v=(p[0],p[1],Object(d.f)());return Object(n.useEffect)((function(){var e=localStorage.getItem("banks");e?(e=JSON.parse(e),s(e)):fetch().then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){console.log("something went wrong")}))}),[]),Object(n.useEffect)((function(){var e=v.location.pathname.split("/"),t=e[e.length-1];console.log(t),j(t)}),[v]),Object(n.useEffect)((function(){var e=a.find((function(e){return e.ifsc===i}));e&&x(e),console.log(e)}),[i]),Object(o.jsxs)("div",{className:"container_fluid",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("h3",{children:"Selected Bank details"})})}),Object(o.jsxs)("div",{className:"row",children:[0==Object.keys(h).length?Object(o.jsx)("h2",{children:"NO BANK FOUND"}):null,Object.keys(h).map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-6",children:e}),Object(o.jsx)("div",{className:"col-6",children:h[e]})]})}))]})]})};var S=function(){return Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/",exact:!0,children:Object(o.jsx)(_,{})}),Object(o.jsx)(d.a,{path:"/bank-details/:ifsc",exact:!0,children:Object(o.jsx)(k,{})})]})};var w=function(){return Object(o.jsx)("div",{className:"container_fluid",children:Object(o.jsxs)("div",{className:"row bg-light p-4",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)(b,{})}),Object(o.jsx)("div",{className:"col-10",children:Object(o.jsx)(S,{})})]})})};var B=function(){return Object(o.jsx)(w,{})};c(32);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l.a,{basename:"/groww-app",children:Object(o.jsx)(B,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.70046004.chunk.js.map
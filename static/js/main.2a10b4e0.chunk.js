(this.webpackJsonpgroww=this.webpackJsonpgroww||[]).push([[0],{11:function(e,t,c){e.exports={header:"allBanks_header__UTYjS",table:"allBanks_table__3OsF3",dropdown:"allBanks_dropdown__3w1E-",button:"allBanks_button__2rdeN",pagination:"allBanks_pagination__18BD2"}},18:function(e,t,c){e.exports={sideBar:"sidebar_sideBar__2GqxY"}},20:function(e,t,c){e.exports={loader:"loader_loader__1OZcu"}},25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),r=c.n(s),i=(c(25),c(8)),l=c(18),j=c.n(l),o=c(0);var b=function(){return Object(o.jsx)("div",{className:j.a.sideBar,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"All Banks"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/favourites",children:"favourites"})})]})})},u=c(2),d=c(4),O=c(11),h=c.n(O);var f=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("select",{onChange:function(t){e.change(t.target.value)},children:[Object(o.jsx)("option",{hidden:!0,disabled:!0,selected:!0,children:e.label}),e.options.map((function(e){return Object(o.jsx)("option",{value:e.value,children:e.name},e.value)}))]})})},x=c(20),p=c.n(x);var v=function(){return Object(o.jsx)("div",{className:p.a.loader})};var m=function(e){var t=e.currentPageNumber,c=e.totalPages;console.log(t);var n={padding:"1px 10px",margin:"10px",border:"1px solid gray",borderRadius:"5px"};return Object(o.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[t>0?Object(o.jsx)("span",{style:n,onClick:function(){return e.change(t-1)},children:"previous"}):null,Object(o.jsx)("span",{children:t}),t<c?Object(o.jsx)("span",{style:n,onClick:function(){return e.change(t+1)},children:"next"}):null]})},g=[{name:"mumbai",value:"mumbai"},{name:"delhi",value:"delhi"}],N=[{name:"ifsc",vaue:"ifsc"},{name:"branch",value:"branch"},{name:"bank name",value:"bank_name"},{name:"address",value:"address"}];var _=function(e){var t=this,c=Object(n.useState)([]),a=Object(d.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)([]),l=Object(d.a)(i,2),j=l[0],b=l[1],O=Object(n.useState)([]),x=Object(d.a)(O,2),p=x[0],_=x[1],k=Object(n.useState)(!0),S=Object(d.a)(k,2),w=S[0],y=S[1],B=Object(n.useState)("mumbai"),C=Object(d.a)(B,2),E=C[0],U=C[1],I=Object(n.useState)(""),A=Object(d.a)(I,2),J=A[0],F=A[1],M=Object(n.useState)(""),P=Object(d.a)(M,2),D=P[0],T=P[1],Y=Object(n.useState)(0),q=Object(d.a)(Y,2),G=q[0],K=q[1],R=Object(n.useState)(10),Z=Object(d.a)(R,2),z=Z[0],H=(Z[1],Object(n.useState)()),L=Object(d.a)(H,2),Q=L[0],V=L[1],W=Object(u.f)();Object(n.useEffect)((function(){X()}),[s,J,E]),Object(n.useEffect)((function(){ee()}),[D,s]),Object(n.useEffect)((function(){y(!0);var e=localStorage.getItem("banks");if(e)return r(JSON.parse(e)),b(JSON.parse(e)),void y(!1);fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI").then((function(e){return e.json()})).then((function(e){console.log(e),r(e),b(e),y(!1),localStorage.setItem("banks",JSON.stringify(e))})).catch((function(e){console.log("something went wrong"),y(!1)}))}),[]),Object(n.useEffect)((function(){var e=[];console.log(j);for(var t=G*z;t<G*z+z&&t<j.length;t++)e.push(j[t]);console.log(e),_(e)}),[j,G]);var X=function(){console.log("jajaj");var e=[];e=J&&D?s.filter((function(e){return e.city.toUpperCase()==E.toUpperCase()&&e[J].toUpperCase()==D.toUpperCase()})):s.filter((function(e){return e.city.toUpperCase()==E.toUpperCase()})),b(e)};Object(n.useEffect)((function(){}),[]);var $=function(e){W.push("/bank-details/".concat(e))},ee=function(e,t){var c=0;return function(){for(var n=this,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];clearTimeout(c),c=setTimeout((function(){e.apply(n,s)}),t)}}(X,2e3);return Object(n.useEffect)((function(){V(j.length/z)}),[j]),console.log(p),Object(o.jsxs)("div",{className:"container_fluid",children:[Object(o.jsxs)("div",{className:h.a.header,children:[Object(o.jsx)("h4",{children:"All banks"}),Object(o.jsxs)("ul",{className:h.a.dropdown,children:[Object(o.jsx)("li",{children:Object(o.jsx)(f,{change:function(e){U(e)},label:"choose city",options:g})}),Object(o.jsx)("li",{children:Object(o.jsx)(f,{change:function(e){F(e)},label:"choose Category",options:N})}),Object(o.jsx)("li",{children:Object(o.jsx)("input",{onInput:function(e){return T(e.target.value)},placeholder:"search"})})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("table",{className:h.a.table,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Branch Name"}),Object(o.jsx)("th",{children:"IFSC"}),Object(o.jsx)("th",{children:"NAME"}),Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"address"})]})}),Object(o.jsx)("tbody",{children:p.map((function(e,c){return Object(o.jsxs)("tr",{onClick:$.bind(t,e.ifsc),children:[Object(o.jsx)("td",{children:e.bank_name}),Object(o.jsx)("td",{children:e.ifsc}),Object(o.jsx)("td",{children:e.branch}),Object(o.jsx)("td",{children:e.bank_id}),Object(o.jsx)("td",{children:e.address})]},c)}))})]}),w?Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)(v,{})," "]}):null,Object(o.jsx)(m,{currentPageNumber:G,totalPages:Q,change:function(e){console.log(e),K(e)}})]})]})};var k=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(),i=Object(d.a)(r,2),l=i[0],j=i[1],b=Object(n.useState)({}),O=Object(d.a)(b,2),h=O[0],f=O[1],x=Object(n.useState)(!1),p=Object(d.a)(x,2),v=(p[0],p[1],Object(u.f)());return Object(n.useEffect)((function(){var e=localStorage.getItem("banks");e?(e=JSON.parse(e),s(e)):fetch().then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){console.log("something went wrong")}))}),[]),Object(n.useEffect)((function(){var e=v.location.pathname.split("/"),t=e[e.length-1];console.log(t),j(t)}),[v]),Object(n.useEffect)((function(){var e=a.find((function(e){return e.ifsc===l}));e&&f(e),console.log(e)}),[l]),Object(o.jsxs)("div",{className:"container_fluid",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("h3",{children:"Selected Bank details"})})}),Object(o.jsxs)("div",{className:"row",children:[0==Object.keys(h).length?Object(o.jsx)("h2",{children:"NO BANK FOUND"}):null,Object.keys(h).map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-6",children:e}),Object(o.jsx)("div",{className:"col-6",children:h[e]})]})}))]})]})};var S=function(){return Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/",exact:!0,children:Object(o.jsx)(_,{})}),Object(o.jsx)(u.a,{path:"/bank-details/:ifsc",exact:!0,children:Object(o.jsx)(k,{})})]})};var w=function(){return Object(o.jsx)("div",{className:"container_fluid",children:Object(o.jsxs)("div",{className:"row bg-light p-4",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)(b,{})}),Object(o.jsx)("div",{className:"col-10",children:Object(o.jsx)(S,{})})]})})};var y=function(){return Object(o.jsx)(w,{})};c(32);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(i.a,{basename:"/groww-app",children:Object(o.jsx)(y,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2a10b4e0.chunk.js.map
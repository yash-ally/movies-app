(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(17),s=c.n(r),i=(c(43),c(29),c(0)),o=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Footer"})})},j=c(4),l=c(11),d=Object(l.b)((function(e){return{cart:e.prodReducer.cart,user:e.userReducer}}),null)((function(e){var t=e.cart,c=e.user,n="/movies-app";return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)("a",{className:"navbar-brand",href:"#",children:["Ally.io, Welcome ",c.userName]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j.b,{to:"".concat(n,"/"),className:"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j.b,{to:"".concat(n,"/products"),className:"nav-link",children:"Products"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j.b,{to:"".concat(n,"/about"),className:"nav-link",children:"About Us"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j.b,{to:"".concat(n,"/contact"),className:"nav-link",children:"Contact Us"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(j.b,{to:"".concat(n,"/cart"),className:"nav-link",children:["Cart ",Object(i.jsx)("sup",{children:t.length})]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j.b,{to:"".concat(n,"/movies"),className:"nav-link",children:"Movies"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j.b,{to:"".concat(n,"/signin"),className:"nav-link",children:"SignIn"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j.b,{to:"".concat(n,"/signup"),className:"nav-link",children:"SignUp"})})]})})]})})})})),b=c(12),u=c(14),h=c.n(u),O=function(e){return{type:"GET_PRODUCTS",payload:e}},p=function(e){return{type:"ADD_TO_CART",payload:e}},m=(c(68),Object(l.b)((function(e){return{products:e.prodReducer.products}}),(function(e){return{sendProducts:function(t){return e(O(t))},addProduct:function(t){return e(p(t))}}}))((function(e){Object(n.useEffect)((function(){h()("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(t){setTimeout((function(){e.sendProducts(t.data)}),5e3)})).catch((function(e){return alert(e)}))}),[]);var t="/movies-app";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("hr",{}),Object(i.jsx)("div",{class:"d-flex flex-wrap",children:e.products.length&&e.products.map((function(c){var n=c.name,a=c.preview,r=c.brand,s=c.id,o=c.description,l=c.price;return 0==c.isAccessory?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Clothing:"}),Object(i.jsxs)("div",{class:"card",children:[Object(i.jsx)(j.b,{to:{pathname:"".concat(t,"/products/").concat(s),preview:a,name:n,descriptionName:o},children:Object(i.jsx)("img",{src:c.preview,class:"card-img-top",alt:"..."})}),Object(i.jsxs)("div",{class:"card-body",children:[Object(i.jsx)(j.b,{to:{pathname:"".concat(t,"/products/").concat(s),preview:a,name:n,descriptionName:o},children:Object(i.jsx)("h2",{class:"card-title",children:n})}),Object(i.jsx)("h4",{class:"card-text",children:r}),Object(i.jsx)("p",{class:"card-para",children:o}),Object(i.jsx)("p",{class:"card-para",children:l}),Object(i.jsx)("a",{href:"#",class:"btn btn-primary",onClick:function(){return e.addProduct(c)},children:"Add to Cart"})]})]})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Accessories:"}),Object(i.jsxs)("div",{class:"card",children:[Object(i.jsx)(j.b,{to:{pathname:"".concat(t,"/products/").concat(s),preview:a,name:n,descriptionName:o},children:Object(i.jsx)("img",{src:c.preview,class:"card-img-top",alt:"..."})}),Object(i.jsxs)("div",{class:"card-body",children:[Object(i.jsx)(j.b,{to:{pathname:"".concat(t,"/products/").concat(s),preview:a,name:n,descriptionName:o},children:Object(i.jsx)("h2",{class:"card-title",children:n})}),Object(i.jsx)("h4",{class:"card-text",children:r}),Object(i.jsx)("p",{class:"card-para",children:o}),Object(i.jsx)("p",{class:"card-para",children:l}),Object(i.jsx)("a",{href:"#",class:"btn btn-primary",onClick:function(){return e.addProduct(c)},children:"Add to Cart"})]})]})]})}))})]})}))),x=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2);t[0],t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m,{})})},v=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{children:"About Us"})})},f=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{children:"Contact Us"})})},g=c(3),N=Object(l.b)((function(e){return{cart:e.prodReducer.cart,redirectHome:e.prodReducer.redirectHome}}),(function(e){return{clearCartProds:function(){return e({type:"CLEAR_CART",payload:t});var t}}}))((function(e){var t=e.cart,c=e.clearCartProds,n=e.redirectHome;return Object(i.jsxs)(i.Fragment,{children:[n&&Object(i.jsx)(g.a,{to:"/products"}),Object(i.jsxs)("h1",{children:["Your Cart has ",t.length," items"]}),t.length&&t.map((function(e){e.name,e.preview,e.description;var t=e.quantity,c=e.price;Number(c),Number(t)})),Object(i.jsxs)("h1",{children:["Total = ",t.reduce((function(e,t){return e+Number(t.price)*Number(t.quantity)}),0)]}),Object(i.jsx)("button",{className:"btn btn-success",onClick:function(){c()},children:"Place Order"})]})})),y=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m,{})})},C=(c(69),Object(l.b)((function(e){return{cart:e.cart}}),(function(e){return{sendProducts:function(t){return e(O(t))},addProduct:function(t){return e(p(t))}}}))((function(e){var t=Object(n.useState)({}),c=Object(b.a)(t,2),a=c[0],r=c[1],s=Object(g.g)().id,o=Object(n.useState)(!1),j=Object(b.a)(o,2),l=j[0],d=j[1];Object(n.useEffect)((function(){h()("".concat("https://5d76bf96515d1a0014085cf9.mockapi.io/product/").concat(s)).then((function(e){return r(e.data)})).catch((function(e){return alert(e)}))}),[]);var u=function(){d(!l)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h1",{children:["Product Id: ",s]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row m-2",children:[Object(i.jsx)("div",{className:"col-4 p-4",children:Object(i.jsx)("img",{src:a.preview,style:{width:"80%"}})}),Object(i.jsxs)("div",{className:"col-6 p-4",children:[Object(i.jsx)("h1",{className:"title",children:a.name}),Object(i.jsx)("h3",{className:"brand",children:a.brand}),Object(i.jsx)("h3",{children:"Description:"}),Object(i.jsx)("p",{className:"description",children:a.description}),Object(i.jsxs)("h4",{className:"price",children:["Price: Rs ",Object(i.jsx)("span",{id:"price-tag",children:a.price})]}),Object(i.jsx)("h5",{children:"Preview Images:"}),Object(i.jsx)("div",{className:"images",children:void 0!==a.photos&&a.photos.length&&a.photos.slice(0,a.photos.length).map((function(e){return Object(i.jsx)("img",{className:l?"active_image":"image_list",onClick:u,src:e,width:100})}))}),Object(i.jsx)("button",{onClick:function(){return e.addProduct(a)},children:"Add to Cart"})]})]})]})}))),w=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),o=s[0],j=s[1],l=Object(n.useState)(!1),d=Object(b.a)(l,2),u=d[0],h=d[1],O="yash",p="1234",m=function(e){e.preventDefault();var t=O,n=p;c.toLowerCase()===t&&o===n&&h(!0)};return Object(i.jsxs)(i.Fragment,{children:[u&&Object(i.jsx)(g.a,{to:"/products"}),Object(i.jsx)("h1",{children:"Sign In"}),Object(i.jsxs)("form",{onSubmit:function(){return m},children:[Object(i.jsx)("label",{children:"User Name"}),Object(i.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Password"}),Object(i.jsx)("input",{type:"text",value:o,onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"submit"})]})]})},S=c(20),k=c(21),R=c(23),T=c(22),_=function(e){Object(R.a)(c,e);var t=Object(T.a)(c);function c(e){var a;return Object(S.a)(this,c),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(a.firstName.current.value,a.firstName)},a.state={},a.firstName=Object(n.createRef)(),a.lastName=Object(n.createRef)(),a.age=Object(n.createRef)(),a}return Object(k.a)(c,[{key:"componentDidUpdate",value:function(){console.log("Hello Change")}},{key:"render",value:function(){return Object(i.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(i.jsx)("label",{children:"First Name"}),Object(i.jsx)("input",{type:"text",ref:this.firstName}),Object(i.jsx)("label",{children:"Last Name"}),Object(i.jsx)("input",{type:"text",ref:this.lastName}),Object(i.jsx)("label",{children:"Age"}),Object(i.jsx)("input",{type:"number",ref:this.age}),Object(i.jsx)("input",{type:"submit"})]})}}]),c}(n.Component),P=(c(70),function(e){Object(R.a)(c,e);var t=Object(T.a)(c);function c(e){var n;return Object(S.a)(this,c),(n=t.call(this,e)).searchServer=function(){fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((function(e){return e.json()})).then((function(e){n.setState({movieList:e.Search,originalMovies:e.Search,loader:!1})}),4e3)},n.searchMovies=function(){if(n.state.originalMovies.length){var e=n.state.originalMovies.filter((function(e){return e.Year.includes(n.state.searchValue)||e.Title.includes(n.state.searchValue)}));n.setState({movieList:e})}},n.state={movieList:[],originalMovies:[],loader:!0,searchValue:""},n}return Object(k.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((function(e){return e.json()})).then((function(t){e.setState({movieList:t.Search,originalMovies:t.Search,loader:!1})}),4e3)}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"top",children:Object(i.jsx)("h2",{children:"HOOKED"})}),Object(i.jsxs)("div",{className:"inputs",children:[Object(i.jsx)("input",{onChange:function(t){return e.setState({searchValue:t.target.value})}}),Object(i.jsx)("button",{onClick:this.searchMovies,children:"Search"})]}),Object(i.jsx)("a",{href:"https://yash-ally.github.io/movies-app/",children:Object(i.jsx)("h1",{className:"Title",children:"Movies"})}),Object(i.jsx)("div",{className:"moviedata",children:this.state.loader?Object(i.jsx)("h1",{children:"Loading.."}):this.state.movieList.length&&this.state.movieList.map((function(e){return Object(i.jsxs)("div",{className:"movienames",children:[Object(i.jsx)("div",{className:"imgcontainer",children:Object(i.jsx)("img",{src:e.Poster})}),Object(i.jsx)("div",{className:"overlay",children:Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("h3",{children:e.Title}),Object(i.jsxs)("h4",{children:["Releaased: ",e.Year]}),Object(i.jsxs)("h3",{children:["ImDb: ",e.imdbId]})]})})]})}))})]})}}]),c}(a.a.Component)),D=function(){var e="/movies-app";return Object(i.jsx)("div",{children:Object(i.jsxs)(j.a,{children:[Object(i.jsx)(d,{}),Object(i.jsxs)(g.d,{children:[Object(i.jsx)(g.b,{path:"".concat(e,"/"),exact:!0,component:x}),Object(i.jsx)(g.b,{path:"".concat(e,"/about"),component:v}),Object(i.jsx)(g.b,{path:"".concat(e,"/contact"),component:f}),Object(i.jsx)(g.b,{path:"".concat(e,"/cart"),component:N}),Object(i.jsx)(g.b,{path:"".concat(e,"/products"),exact:!0,component:y}),Object(i.jsx)(g.b,{path:"".concat(e,"/products/:id"),component:C}),Object(i.jsx)(g.b,{path:"".concat(e,"/movies"),exact:!0,component:P}),Object(i.jsx)(g.b,{path:"".concat(e,"/signin"),exact:!0,component:w}),Object(i.jsx)(g.b,{path:"".concat(e,"/signup"),exact:!0,component:_}),Object(i.jsx)(g.b,{component:function(){return Object(i.jsx)("h1",{children:"404 Not Found"})}})]}),Object(i.jsx)(o,{})]})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},E=c(28),F=(c(71),c(38)),L=c(10),I="ADD_TO_CART",U="GET_PRODUCTS",M="USER_DETAILS",H="CLEAR_CART",V={products:[],cart:[],redirectHome:!1},q={userDetails:{},userName:"All",login:!1,status:!0},X=Object(E.a)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case M:return Object(L.a)(Object(L.a)({},e),{},{products:n});default:return e}},prodReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case U:return Object(L.a)(Object(L.a)({},e),{},{products:n});case I:var a=n.id,r=e.cart,s=[],i=r.findIndex((function(e){return e.id===a}));return-1!==i?(r[i].quantity=r[i].quantity+1,s=r):s=[].concat(Object(F.a)(r),[Object(L.a)(Object(L.a)({},n),{},{quantity:1})]),Object(L.a)(Object(L.a)({},e),{},{cart:s});case H:return Object(L.a)(Object(L.a)({},e),{},{cart:[],redirectHome:!0});default:return e}}}),Y=Object(E.b)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(i.jsx)(l.a,{store:Y,children:Object(i.jsx)(D,{})}),document.getElementById("root")),A()}},[[72,1,2]]]);
//# sourceMappingURL=main.606ef652.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,c){},63:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),i=c.n(s),r=(c(44),c(31),c(15)),l=c(24),d=c(5),o=c(13),j=c.n(o),b=(c(63),c(0)),h=(document.querySelector("#some_random_id"),function(e){var t=Object(a.useState)({}),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(0),o=Object(d.a)(i,2),h=o[0],u=o[1],m=Object(a.useState)({}),O=Object(d.a)(m,2),p=(O[0],O[1],Object(a.useState)("")),x=Object(d.a)(p,2),f=x[0],v=x[1],g=Object(a.useState)({id:"",firstName:"",lastName:"",description:"",Address:"",City:"",State:"",Zip:""}),N=Object(d.a)(g,2),y=N[0],k=N[1];Object(a.useEffect)((function(){j()("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D").then((function(e){s(e.data)})).catch((function(e){return alert(e)}))}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("main",{children:[Object(b.jsxs)("div",{id:"table-section",children:[Object(b.jsxs)("form",{action:"/",children:[Object(b.jsx)("img",{src:"./img/search-icon.svg",alt:"Search Icon"}),Object(b.jsx)("input",{type:"text",placeholder:"Enter something",name:"search-box",id:"search-box",value:"",onChange:function(e){v(e.target.value)}}),Object(b.jsx)("button",{onClick:{searchData:function(){var t=[];e.data_details.length&&(n.filter((function(e){(e.firstName.toLowerCase().includes(f)||e.lastName.toLowerCase().includes(f)||e.email.toLowerCase().includes(f))&&(t=[].concat(Object(l.a)(t),[e]))})),n(t))}},children:"Search"})]}),Object(b.jsxs)("div",{id:"table-wrapper",children:[Object(b.jsx)("div",{id:"table-headers",children:Object(b.jsx)("table",{children:Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"column1",children:"Id"}),Object(b.jsx)("th",{className:"column2",children:"FirstName"}),Object(b.jsx)("th",{className:"column3",children:"LastName"}),Object(b.jsx)("th",{className:"column4",children:"Email"}),Object(b.jsx)("th",{className:"column5",children:"Phone"})]})})})}),Object(b.jsx)("div",{id:"table-data",children:Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:n&&n.length&&n.map((function(e,t){var c;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("tr",(c={className:"data-row"},Object(r.a)(c,"className",h===t?"active":null),Object(r.a)(c,"onClick",(function(c){!function(e){u(e)}(t),k({id:e.id,firstName:e.firstName,lastName:e.lastName,description:e.description,address:e.address.streetAddress,city:e.address.city,state:e.address.state,zip:e.address.zip})})),Object(r.a)(c,"children",[Object(b.jsx)("td",{className:"column1",children:e.id}),Object(b.jsx)("td",{className:"column2",children:e.firstName}),Object(b.jsx)("td",{className:"column3",children:e.lastName}),Object(b.jsx)("td",{className:"column4",children:e.email}),Object(b.jsx)("td",{className:"column5",children:e.phone})]),c))})}))})})})]})]}),Object(b.jsxs)("div",{id:"info-wrapper",children:[Object(b.jsx)("h1",{children:"Details"}),Object(b.jsx)("p",{children:"Click on a table item to get detailed information"}),y?Object(b.jsxs)("div",{className:"info-content",children:[Object(b.jsx)("h2",{children:"".concat(y.firstName," ").concat(y.lastName)}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Description: "}),Object(b.jsx)("textarea",{cols:"50",rows:"5",readonly:!0,value:y.description})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Address:"})," ",y.address]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"City:"})," ",y.city]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"State:"})," ",y.state]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Zip:"})," ",y.zip]})]}):Object(b.jsx)("div",{})]})]}),Object(b.jsx)("div",{})]})}),u=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Footer"})})},m=c(3),O=c(6),p=Object(O.b)((function(e){return{cart:e.prodReducer.cart,user:e.userReducer}}),null)((function(e){var t=e.cart,c=e.user,a="/movies-app";return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("a",{className:"navbar-brand",href:"#",children:["Ally.io, Welcome ",c.userName]}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/"),className:"nav-link",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/products"),className:"nav-link",children:"Products"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/about"),className:"nav-link",children:"About Us"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/contact"),className:"nav-link",children:"Contact Us"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(m.b,{to:"".concat(a,"/cart"),className:"nav-link",children:["Cart ",Object(b.jsx)("sup",{children:t.length})]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/movies"),className:"nav-link",children:"Movies"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/adminPanel"),className:"nav-link",children:"Admin Panel"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/signin"),className:"nav-link",children:"SignIn"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(m.b,{to:"".concat(a,"/signup"),className:"nav-link",children:"SignUp"})})]})})]})})})})),x=function(e){return{type:"GET_PRODUCTS",payload:e}},f=function(e){return{type:"ADD_TO_CART",payload:e}},v=(c(70),Object(O.b)((function(e){return{products:e.prodReducer.products}}),(function(e){return{sendProducts:function(t){return e(x(t))},addProduct:function(t){return e(f(t))}}}))((function(e){Object(a.useEffect)((function(){j()("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(t){setTimeout((function(){e.sendProducts(t.data)}),5e3)})).catch((function(e){return alert(e)}))}),[]);var t="/movies-app";return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{children:"Clothing for Men and Women:"}),Object(b.jsx)("div",{class:"d-flex flex-wrap",children:e.products.length&&e.products.map((function(c){var a=c.name,n=c.preview,s=c.brand,i=c.id,r=c.description,l=c.price;if(0==c.isAccessory)return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)(m.b,{to:{pathname:"".concat(t,"/products/").concat(i),preview:n,name:a,descriptionName:r},children:Object(b.jsx)("img",{src:c.preview,class:"card-img-top",alt:"..."})}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)(m.b,{to:{pathname:"".concat(t,"/products/").concat(i),preview:n,name:a,descriptionName:r},children:Object(b.jsx)("h2",{class:"card-title",children:a})}),Object(b.jsx)("h4",{class:"card-text",children:s}),Object(b.jsx)("p",{class:"card-para",children:r}),Object(b.jsx)("p",{class:"card-para",children:l}),Object(b.jsx)("a",{href:"#",class:"btn btn-primary",onClick:function(){return e.addProduct(c)},children:"Add to Cart"})]})]})})}))}),Object(b.jsx)("h2",{children:"Accessories for Men and Women:"}),Object(b.jsx)("div",{class:"d-flex flex-wrap",children:e.products.length&&e.products.map((function(c){var a=c.name,n=c.preview,s=c.brand,i=c.id,r=c.description,l=c.price;if(1==c.isAccessory)return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)(m.b,{to:{pathname:"".concat(t,"/products/").concat(i),preview:n,name:a,descriptionName:r},children:Object(b.jsx)("img",{src:c.preview,class:"card-img-top",alt:"..."})}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)(m.b,{to:{pathname:"".concat(t,"/products/").concat(i),preview:n,name:a,descriptionName:r},children:Object(b.jsx)("h2",{class:"card-title",children:a})}),Object(b.jsx)("h4",{class:"card-text",children:s}),Object(b.jsx)("p",{class:"card-para",children:r}),Object(b.jsx)("p",{class:"card-para",children:l}),Object(b.jsx)("a",{href:"#",class:"btn btn-primary",onClick:function(){return e.addProduct(c)},children:"Add to Cart"})]})]})})}))})]})}))),g=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2),c=(t[0],t[1],Object(O.d)((function(e){return e.prodReducer.redirectHome}))),n=Object(O.c)();return Object(a.useEffect)((function(){c&&n({type:"CHANGE_REDIRECT"})}),[c]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("section",{id:"banner",className:"slick-initialized slick-slider slick-dotted",children:Object(b.jsx)("div",{className:"slick-list draggable",children:Object(b.jsxs)("div",{className:"slick-track",style:{opacity:"1",width:"15993px",transform:"translate3d(-7108px, 0px, 0px)"},children:[Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img4.png",alt:"Image 4",className:"slick-slide slick-cloned","data-slick-index":"-1","aria-hidden":"true",tabindex:"-1",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img1.png",alt:"Image 1",className:"slick-slide","data-slick-index":"0","aria-hidden":"true",tabindex:"-1",role:"tabpanel",id:"slick-slide00","aria-describedby":"slick-slide-control00",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img2.png",alt:"Image 2",className:"slick-slide","data-slick-index":"1","aria-hidden":"true",tabindex:"-1",role:"tabpanel",id:"slick-slide01","aria-describedby":"slick-slide-control01",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img3.png",alt:"Image 3",className:"slick-slide","data-slick-index":"2","aria-hidden":"true",tabindex:"-1",role:"tabpanel",id:"slick-slide02","aria-describedby":"slick-slide-control02",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img4.png",alt:"Image 4",className:"slick-slide slick-current slick-active","data-slick-index":"3","aria-hidden":"false",tabindex:"0",role:"tabpanel",id:"slick-slide03","aria-describedby":"slick-slide-control03",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img1.png",alt:"Image 1",className:"slick-slide slick-cloned","data-slick-index":"4","aria-hidden":"true",tabindex:"-1",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img2.png",alt:"Image 2",className:"slick-slide slick-cloned","data-slick-index":"5","aria-hidden":"true",tabindex:"-1",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img3.png",alt:"Image 3",className:"slick-slide slick-cloned","data-slick-index":"6","aria-hidden":"true",tabindex:"-1",style:{width:"1777px"}}),Object(b.jsx)("img",{src:"https://shoplane.netlify.app/img/img4.png",alt:"Image 4",className:"slick-slide slick-cloned","data-slick-index":"7","aria-hidden":"true",tabindex:"-1",style:{width:"1777px"}})]})})}),Object(b.jsx)(v,{})]})},N=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"About Us"})})},y=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"Contact Us"})})},k=c(4),w=Object(O.b)((function(e){return{cart:e.prodReducer.cart,redirectHome:e.prodReducer.redirectHome}}),(function(e){return{clearCartProds:function(){return e({type:"CLEAR_CART",payload:t});var t}}}))((function(e){var t=e.cart,c=e.clearCartProds,a=e.redirectHome;return Object(b.jsxs)(b.Fragment,{children:[a&&Object(b.jsx)(k.a,{to:"".concat("/movies-app","/orderPlaced")}),Object(b.jsxs)("h1",{children:["Your Cart has ",t.length," items"]}),t.length&&t.map((function(e){e.preview,e.name,e.price,e.quantity,Number(e.price),Number(e.quantity)})),Object(b.jsxs)("h1",{children:["Total = ",t.reduce((function(e,t){return e+Number(t.price)*Number(t.quantity)}),0)]}),Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){c()},children:"Place Order"})]})})),C=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,{})})},S=(c(71),Object(O.b)((function(e){return{cart:e.cart}}),(function(e){return{sendProducts:function(t){return e(x(t))},addProduct:function(t){return e(f(t))}}}))((function(e){var t=Object(a.useState)({}),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(k.g)().id,r=Object(a.useState)(0),l=Object(d.a)(r,2),o=l[0],h=l[1];Object(a.useEffect)((function(){j()("".concat("https://5d76bf96515d1a0014085cf9.mockapi.io/product/").concat(i)).then((function(e){return s(e.data)})).catch((function(e){return alert(e)}))}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h1",{children:["Product Id: ",i]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row m-2",children:[Object(b.jsx)("div",{className:"col-4 p-4",children:void 0!==n.photos&&n.photos.length&&n.photos.slice(0,1).map((function(e,t){return Object(b.jsx)("img",{src:n.photos[o],width:100})}))}),Object(b.jsxs)("div",{className:"col-6 p-4",children:[Object(b.jsx)("h1",{className:"title",children:n.name}),Object(b.jsx)("h3",{className:"brand",children:n.brand}),Object(b.jsx)("h3",{children:"Description:"}),Object(b.jsx)("p",{className:"description",children:n.description}),Object(b.jsxs)("h4",{className:"price",children:["Price: Rs ",Object(b.jsx)("span",{id:"price-tag",children:n.price})]}),Object(b.jsx)("h5",{children:"Preview Images:"}),Object(b.jsx)("div",{className:"images",children:void 0!==n.photos&&n.photos.length&&n.photos.slice(0,n.photos.length).map((function(e,t){return Object(b.jsx)("img",{className:o===t?"active_image":"image_list",onClick:function(){return function(e){h(e)}(t)},src:e,width:100})}))}),Object(b.jsx)("button",{onClick:function(){return e.addProduct(n)},children:"Add to Cart"})]})]})]})}))),D=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),r=i[0],l=i[1],o=Object(a.useState)(!1),j=Object(d.a)(o,2),h=j[0],u=j[1],m="yash",O="1234",p=function(e){e.preventDefault();var t=m,a=O;c.toLowerCase()===t&&r===a&&u(!0)};return Object(b.jsxs)(b.Fragment,{children:[h&&Object(b.jsx)(k.a,{to:"/products"}),Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsxs)("form",{onSubmit:function(){return p},children:[Object(b.jsx)("label",{children:"User Name"}),Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit"})]})]})},E=c(21),P=c(22),R=c(25),_=c(23),A=function(e){Object(R.a)(c,e);var t=Object(_.a)(c);function c(e){var n;return Object(E.a)(this,c),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(n.firstName.current.value,n.firstName)},n.state={},n.firstName=Object(a.createRef)(),n.lastName=Object(a.createRef)(),n.age=Object(a.createRef)(),n}return Object(P.a)(c,[{key:"componentDidUpdate",value:function(){console.log("Hello Change")}},{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("label",{children:"First Name"}),Object(b.jsx)("input",{type:"text",ref:this.firstName}),Object(b.jsx)("label",{children:"Last Name"}),Object(b.jsx)("input",{type:"text",ref:this.lastName}),Object(b.jsx)("label",{children:"Age"}),Object(b.jsx)("input",{type:"number",ref:this.age}),Object(b.jsx)("input",{type:"submit"})]})}}]),c}(a.Component),I=function(e){var t=e.redirectHome,c="/movies-app";return Object(b.jsxs)(b.Fragment,{children:[t&&Object(b.jsx)(k.a,{to:"".concat(c,"/")}),Object(b.jsx)("h2",{children:"Your Order has been Placed..."}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsxs)(m.b,{to:"".concat(c,"/"),className:"nav-link",style:{color:"grey"},children:[" ",Object(b.jsx)("span",{style:{color:"blue"},children:"Click Here"})," to go back to Home"]})]})},T=(c(72),function(e){Object(R.a)(c,e);var t=Object(_.a)(c);function c(e){var a;return Object(E.a)(this,c),(a=t.call(this,e)).searchServer=function(){fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((function(e){return e.json()})).then((function(e){a.setState({movieList:e.Search,originalMovies:e.Search,loader:!1})}),4e3)},a.searchMovies=function(){if(a.state.originalMovies.length){var e=a.state.originalMovies.filter((function(e){return e.Year.includes(a.state.searchValue)||e.Title.includes(a.state.searchValue)}));a.setState({movieList:e})}},a.state={movieList:[],originalMovies:[],loader:!0,searchValue:""},a}return Object(P.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((function(e){return e.json()})).then((function(t){e.setState({movieList:t.Search,originalMovies:t.Search,loader:!1})}),4e3)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"top",children:Object(b.jsx)("h2",{children:"HOOKED"})}),Object(b.jsxs)("div",{className:"inputs",children:[Object(b.jsx)("input",{onChange:function(t){return e.setState({searchValue:t.target.value})}}),Object(b.jsx)("button",{onClick:this.searchMovies,children:"Search"})]}),Object(b.jsx)("a",{href:"https://yash-ally.github.io/movies-app/",children:Object(b.jsx)("h1",{className:"Title",children:"Movies"})}),Object(b.jsx)("div",{className:"moviedata",children:this.state.loader?Object(b.jsx)("h1",{children:"Loading.."}):this.state.movieList.length&&this.state.movieList.map((function(e){return Object(b.jsxs)("div",{className:"movienames",children:[Object(b.jsx)("div",{className:"imgcontainer",children:Object(b.jsx)("img",{src:e.Poster})}),Object(b.jsx)("div",{className:"overlay",children:Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("h3",{children:e.Title}),Object(b.jsxs)("h4",{children:["Releaased: ",e.Year]}),Object(b.jsxs)("h3",{children:["ImDb: ",e.imdbId]})]})})]})}))})]})}}]),c}(n.a.Component)),F=function(){var e="/movies-app";return Object(b.jsx)("div",{children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(k.d,{children:[Object(b.jsx)(k.b,{path:"".concat(e,"/"),exact:!0,component:g}),Object(b.jsx)(k.b,{path:"".concat(e,"/about"),component:N}),Object(b.jsx)(k.b,{path:"".concat(e,"/contact"),component:y}),Object(b.jsx)(k.b,{path:"".concat(e,"/cart"),component:w}),Object(b.jsx)(k.b,{path:"".concat(e,"/products"),exact:!0,component:C}),Object(b.jsx)(k.b,{path:"".concat(e,"/products/:id"),component:S}),Object(b.jsx)(k.b,{path:"".concat(e,"/movies"),exact:!0,component:T}),Object(b.jsx)(k.b,{path:"".concat(e,"/signin"),exact:!0,component:D}),Object(b.jsx)(k.b,{path:"".concat(e,"/signup"),exact:!0,component:A}),Object(b.jsx)(k.b,{path:"".concat(e,"/orderPlaced"),exact:!0,component:I}),Object(b.jsx)(k.b,{path:"".concat(e,"/adminPanel"),component:h}),Object(b.jsx)(k.b,{component:function(){return Object(b.jsx)("h1",{children:"404 Not Found"})}})]}),Object(b.jsx)(u,{})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},H=c(30),M=(c(73),c(11)),U="ADD_TO_CART",B="GET_PRODUCTS",q="USER_DETAILS",V="CLEAR_CART",z={products:[],cart:[],redirectHome:!1},G={userDetails:{},userName:"All",login:!1,status:!0},X=Object(H.a)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case q:return Object(M.a)(Object(M.a)({},e),{},{products:a});default:return e}},prodReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case B:return Object(M.a)(Object(M.a)({},e),{},{products:a});case U:var n=a.id,s=e.cart,i=[],r=s.findIndex((function(e){return e.id===n}));return-1!==r?(s[r].quantity=s[r].quantity+1,i=s):i=[].concat(Object(l.a)(s),[Object(M.a)(Object(M.a)({},a),{},{quantity:1})]),Object(M.a)(Object(M.a)({},e),{},{cart:i});case V:return Object(M.a)(Object(M.a)({},e),{},{cart:[],redirectHome:!0});case"CHANGE_REDIRECT":return Object(M.a)(Object(M.a)({},e),{},{redirectHome:!1});default:return e}}}),Y=Object(H.b)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(b.jsx)(O.a,{store:Y,children:Object(b.jsx)(F,{})}),document.getElementById("root")),L()}},[[74,1,2]]]);
//# sourceMappingURL=main.dba58d10.chunk.js.map
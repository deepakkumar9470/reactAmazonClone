(this["webpackJsonpreact-amazon"]=this["webpackJsonpreact-amazon"]||[]).push([[0],{35:function(e,a,t){e.exports=t.p+"static/media/amazon.d86ccbaf.png"},38:function(e,a,t){e.exports=t.p+"static/media/primeIndependence.4ec08347.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/prime.0bbad6c3.png"},43:function(e,a,t){e.exports=t(76)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(34),r=t.n(c),i=(t(48),t(23)),m=t(5),s=(t(49),t(14)),o=t(3),u=(t(50),t(35)),E=t.n(u),d=t(36),p=t.n(d),g=t(37),h=t.n(g),f=Object(n.createContext)(),v=function(e){var a=e.reducer,t=e.initialState,c=e.children;return l.a.createElement(f.Provider,{value:Object(n.useReducer)(a,t)},c)},b=function(){return Object(n.useContext)(f)},N=t(27),k=t.n(N),A=(k.a.initializeApp({apiKey:"AIzaSyCP956q3dTHmQB6oXqUHX94qfa32nBhltI",authDomain:"react-61ebb.firebaseapp.com",databaseURL:"https://react-61ebb.firebaseio.com",projectId:"react-61ebb",storageBucket:"react-61ebb.appspot.com",messagingSenderId:"400622550545",appId:"1:400622550545:web:fe44d8e11bcefca3093bb0",measurementId:"G-T23G8N18YT"}),k.a.auth());var S=function(){var e=b(),a=Object(m.a)(e,1)[0],t=a.basket,n=a.user;return l.a.createElement("nav",{className:"header"},l.a.createElement(s.b,{to:"/"},l.a.createElement("img",{className:"header_image",src:E.a,alt:"Amazonlogo"})),l.a.createElement("div",{className:"header-search"},l.a.createElement("input",{text:"text",className:"header-searchInput"}),l.a.createElement(p.a,{className:"header-searchIcon"})),l.a.createElement("div",{className:"header-nav"},l.a.createElement(s.b,{to:!n&&"/login",className:"header-link"},l.a.createElement("div",{onClick:function(){n&&A.signOut()},className:"header-options"},l.a.createElement("span",{className:"link-span-1"},"Hello ",null===n||void 0===n?void 0:n.email),l.a.createElement("span",{className:"link-span-2"},n?"SignOut":"Login"))),l.a.createElement(s.b,{to:"/",className:"header-link"},l.a.createElement("div",{className:"header-options"},l.a.createElement("span",{className:"link-span-1"},"Returns"),l.a.createElement("span",{className:"link-span-2"},"& Orders"))),l.a.createElement(s.b,{to:"/",className:"header-link"},l.a.createElement("div",{className:"header-options"},l.a.createElement("span",{className:"link-span-1"},"Try"),l.a.createElement("span",{className:"link-span-2"},"Prime"))),l.a.createElement(s.b,{to:"/checkout",className:"header-link"},l.a.createElement("div",{className:"header-basket"},l.a.createElement(h.a,null),l.a.createElement("span",{className:"link-span-2 header-basketCount"},null===t||void 0===t?void 0:t.length)))))},_=(t(66),t(67),t(20)),C=t(41);t(68);var y=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),i=Object(m.a)(r,2),s=i[0],o=i[1];return l.a.createElement("div",{className:"head"},Object(_.a)(Array(5)).map((function(e,a){var n=a+1;return l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"rating",value:n,onClick:function(){return c(n)}}),l.a.createElement(C.a,{className:"star",color:n<=(s||t)?"#ffc107":"#e4e5e9",size:18,onMouseEnter:function(){return o(n)},onMouseLeave:function(){return o(null)}}))})))};var O=function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,r=e.image,s=b(),o=Object(m.a)(s,2);Object(i.a)(o[0]);var u=o[1];return l.a.createElement("div",{className:"products"},l.a.createElement("div",{className:"products-info"},l.a.createElement("p",null,t),l.a.createElement("div",{className:"product-price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,n)),l.a.createElement("div",{className:"product-rating"},Array(c).fill().map((function(e){return l.a.createElement(y,null)})))),l.a.createElement("img",{src:r,alt:"laptop"}),l.a.createElement("button",{onClick:function(){u({type:"ADD_ITEM_TO_BASKET",item:{id:a,title:t,price:n,rating:c,image:r}})}},"Add to cart"))};t(69);var j=function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row footer-head text-warning"},l.a.createElement("div",{className:"col footer-col"},l.a.createElement("h3",null,"Get to Know Us"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"About Us"),l.a.createElement("li",null,"Careers"),l.a.createElement("li",null,"Press Releases"),l.a.createElement("li",null,"Amazon Cares"),l.a.createElement("li",null,"Gift a Smile"))),l.a.createElement("div",{className:"col footer-col"},l.a.createElement("h3",null,"Connect with Us"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"Facebook"),l.a.createElement("li",null,"Twitter"),l.a.createElement("li",null,"Instagram"))),l.a.createElement("div",{className:"col footer-col"},l.a.createElement("h3",{className:"list-h3"},"Make Money with Us"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"Sell on Amazon"),l.a.createElement("li",null,"Sell under Amazon Accelerator"),l.a.createElement("li",null,"Become an Affiliate"),l.a.createElement("li",null,"Fulfilment by Amazon"),l.a.createElement("li",null,"Advertise Your Products"),l.a.createElement("li",null,"Amazon Pay on Merchants"))),l.a.createElement("div",{className:"col footer-col"},l.a.createElement("h3",{className:"list-h3"},"Let Us Help You"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"Your Account"),l.a.createElement("li",null,"Returns Centre"),l.a.createElement("li",null,"Become an Affiliate"),l.a.createElement("li",null,"100% Purchase Protection"),l.a.createElement("li",null,"Amazon App Download"),l.a.createElement("li",null,"Amazon Assistant Download"),l.a.createElement("li",null,"Help")))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("p",{className:"footer-bottom"},"Copyright @2020 || All right Reserved")))},w=t(38),z=t.n(w);var I=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("img",{className:"home-banner-image",src:z.a,alt:"amazonbanner"}),l.a.createElement("div",{className:"home-row"},l.a.createElement(O,{id:"36595915",title:" HP Pavilion x360 Core i7 8th Gen 14-inch Touchscreen 2-in-1 FHD Thin and Light Laptop (16GB/512GB SSD/Windows 10/MS Office/2GB Graphics/Mineral Silver/1.59 kg), 14- dh0045TX",price:700.99,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/712apOL4JaL._AC_UY218_.jpg"}),l.a.createElement(O,{id:"45672435",title:"Mask and hand sanitizer keeps away from corona.Be safe at home.King Shine Anti Pollution Protection K N 95 face Mask & Respirator Combo (2 Mask And One Hand Sanitizer)",price:4.9,rating:l.a.createElement(y,null),image:"https://images-na.ssl-images-amazon.com/images/I/41xU103tGDL._SX425_.jpg"})),l.a.createElement("div",{className:"home-row"},l.a.createElement(O,{id:"12761002",title:"Fire TV Stick streaming media player with Alexa built in, includes all-new Alexa Voice Remote, HD, easy set-up, released 2019",price:58.6,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/51FWoUi2uiL._AC_UY218_.jpg"}),l.a.createElement(O,{id:"10099426",title:"Samsung Galaxy M21 (Raven Black, 4GB RAM, 64GB Storage)",price:200.9,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/71QLvGIAq5L._AC_UY218_.jpg"}),l.a.createElement(O,{id:"25007231",title:"Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case",price:475.9,rating:l.a.createElement(y,null),image:"https://images-eu.ssl-images-amazon.com/images/I/51UHoxzInpL._AC_SY200_.jpg"})),l.a.createElement("div",{className:"home-row"},l.a.createElement(O,{id:"12661802",title:"Apple Watch Series 5 (GPS, 44mm) - Silver Aluminium Case with White Sport Band",price:698.6,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/71HtGqb9vXL._AC_UY218_.jpg"}),l.a.createElement(O,{id:"15559505",title:"VPRINT QUALITY Hanuman murti Multicolor (3X5)",price:4.9,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/51V6j1R0PiL._AC_UL320_.jpg"}),l.a.createElement(O,{id:"20907011",title:"pTron Boom3 Ultima 4D Dual Driver in-Ear Wired Headphones with Mic - (Black and Silver)",price:11.5,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/61SOGzRa7+L._AC_UY218_.jpg"}),l.a.createElement(O,{id:"30924300",title:"BelleVie\r Cotton Salwar for women and girls_free size",price:14.99,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/615qYe2A7lL._AC_UL320_.jpg"})),l.a.createElement("div",{className:"home-row"},l.a.createElement(O,{id:"10002311",title:"Branded Men's and Women Fashion",price:7.89,rating:l.a.createElement(y,null),image:"https://images-eu.ssl-images-amazon.com/images/I/31+k-XGy4+L._AC_SY200_.jpg"}),l.a.createElement(O,{id:"10002311",title:"Bacca Bucci\xae Men's Phantom Running Shoes Lightweight Shockproof Walking Shoes Cushioning Men Sneakers for Gym Sports Casual Athletic Outdoor-Size-UK-6 to 13/Big",price:13.89,rating:l.a.createElement(y,null),image:"https://m.media-amazon.com/images/I/71hfZ8yu-5L._AC_UL320_.jpg"})),l.a.createElement(j,null))},T=(t(70),t(39)),B=t.n(T);t(71);var L=function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,r=e.image,i=b(),s=Object(m.a)(i,2),o=(s[0].basket,s[1]);return l.a.createElement("div",{className:"checkout-products"},l.a.createElement("img",{className:"checkout-products-image",src:r,alt:""}),l.a.createElement("div",{className:"checkout-products_info"},l.a.createElement("p",{className:"checkout-products-title"},t),l.a.createElement("p",{className:"checkout-products-price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,n)),l.a.createElement("div",{className:"checkout-products-rating"},Array(c).fill().map((function(e,a){return l.a.createElement("h2",{key:a},l.a.createElement(y,null))}))),l.a.createElement("button",{onClick:function(){o({type:"REMOVE_ITEM_TO_BASKET",id:a})}},"Remove from Cart")))},U=(t(72),t(40)),M=t.n(U),x=t(18),P=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},R=function(e,a){switch(a.type){case"SET_USER":return Object(x.a)(Object(x.a)({},e),{},{user:a.user});case"ADD_ITEM_TO_BASKET":return Object(x.a)(Object(x.a)({},e),{},{basket:[].concat(Object(_.a)(e.basket),[a.item])});case"REMOVE_ITEM_TO_BASKET":var t=Object(_.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Can't remove product (id: ".concat(a.id,") as it non basket item")),Object(x.a)(Object(x.a)({},e),{},{basket:t});default:return e}};var G=function(){var e=b(),a=Object(m.a)(e,1)[0].basket;return l.a.createElement("div",{className:"subtotal"},l.a.createElement(M.a,{renderText:function(e){return l.a.createElement("div",null,l.a.createElement("p",{className:"total-subtotal"},"Subtotal(",a.length," items) :",l.a.createElement("strong",null,"".concat(e))),l.a.createElement("small",{className:"subtotal-gift"},l.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},displayScale:2,value:P(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",null,"Proceed to Checkout"))};var D=function(){var e=b(),a=Object(m.a)(e,1)[0].basket;return l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{className:"checkout-left"},l.a.createElement("img",{className:"checkout_ad",src:B.a,alt:"Prime Time"}),0===(null===a||void 0===a?void 0:a.length)?l.a.createElement("div",{className:"checkout-empty-title"},l.a.createElement("h2",null,"Shopping Cart",l.a.createElement("br",null),"Your Shopping Cart is empty."),l.a.createElement("p",null,'You have items saved to buy later. To buy one or more now, click "Move to cart" next to the item.')):l.a.createElement("div",null,l.a.createElement("h2",{className:"checkout-title"},"Your Shopping Cart"),a.map((function(e){return l.a.createElement(L,{id:e.id,title:e.title,price:e.price,rating:e.rating,image:e.image})})))),a.length>0&&l.a.createElement("div",{className:"checkout-right"},l.a.createElement(G,null)))};t(74);var Y=function(){var e=Object(o.f)(),a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],r=t[1],i=Object(n.useState)(""),u=Object(m.a)(i,2),E=u[0],d=u[1];return l.a.createElement("div",{className:"login"},l.a.createElement(s.b,{to:"/"},l.a.createElement("img",{className:"login-image",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"login_image"})),l.a.createElement("div",{className:"login-container"},l.a.createElement("form",{className:"login-div"},l.a.createElement("h1",{className:"login-h1"},"Login"),l.a.createElement("h5",{className:"login-h5"},"Email or mobile phone number"),l.a.createElement("input",{type:"email",name:"email",value:c,onChange:function(e){return r(e.target.value)}}),l.a.createElement("h5",{className:"login-h5",for:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",value:E,onChange:function(e){return d(e.target.value)}}),l.a.createElement("button",{onClick:function(a){a.preventDefault(),A.signInWithEmailAndPassword(c,E).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login-btn"},"Login")),l.a.createElement("p",null,"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice"),l.a.createElement("button",{onClick:function(a){a.preventDefault(),A.createUserWithEmailAndPassword(c,E).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"signup-btn"},"Create your Amazon account")))};var H=function(){var e=b(),a=Object(m.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){var e=A.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/login"},l.a.createElement(Y,null)),l.a.createElement(o.a,{path:"/checkout"},l.a.createElement(S,null),l.a.createElement(D,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(S,null),l.a.createElement(I,null)))))};r.a.render(l.a.createElement(v,{initialState:{basket:[],user:null},reducer:R},l.a.createElement(H,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.46fa7dad.chunk.js.map
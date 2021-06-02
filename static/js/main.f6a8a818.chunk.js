(this["webpackJsonpflickr-search"]=this["webpackJsonpflickr-search"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(21),s=c.n(r),o=(c(28),c(11)),i=c(3),l=(c(29),c(13)),j=c(23),d=c(2),u="SET_IMAGES",b="SET_RESPONSE_DATA",m="ADD_TO_BOOKMARKS",h="REMOVE_FROM_BOOKMARKS",O="FETCH_NEXT_PAGE",f="FETCH_PREV_PAGE",g="ADD_TAG",p="SET_SEARCH_QUERY";function x(e,t){switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{images:t.payload||[]});case b:return Object(d.a)(Object(d.a)({},e),{},{responseData:t.payload.data,currentPage:t.payload.isResetCurrentPage?1:e.currentPage});case O:return Object(d.a)(Object(d.a)({},e),{},{currentPage:e.currentPage+1});case f:return Object(d.a)(Object(d.a)({},e),{},{currentPage:e.currentPage-1});case m:return Object(d.a)(Object(d.a)({},e),{},{bookmarks:[].concat(Object(j.a)(e.bookmarks),[t.payload])||[]});case h:return Object(d.a)(Object(d.a)({},e),{},{bookmarks:e.bookmarks.filter((function(e){return e.id!==t.payload}))});case g:var c=e.images.map((function(e){return e.id===t.payload.id?Object(d.a)(Object(d.a)({},e),{},{tag:t.payload.tag}):e}));return Object(d.a)(Object(d.a)({},e),{},{images:c});case p:return Object(d.a)(Object(d.a)({},e),{},{searchQuery:t.payload});default:return e}}var k=c(0),y=function(e,t){return{type:b,payload:{data:e,isResetCurrentPage:t}}},v=function(e){return{type:u,payload:e}},N=function(e){return{type:m,payload:e}},P=function(e){return{type:h,payload:e}},C=function(){return{type:O}},_=function(){return{type:f}},E=function(e,t){return{type:g,payload:{id:e,tag:t}}},S=function(e){return{type:p,payload:e}},w={searchQuery:"",responseData:{},currentPage:1,images:[],bookmarks:localStorage.getItem("bookmarks")?JSON.parse(localStorage.getItem("bookmarks")):[],setResponseData:function(e,t){},setImages:function(e){},addToBookmarks:function(e){},removeFromBookmarks:function(e){},setNextPage:function(){},setPrevPage:function(){},addTag:function(e,t){},setSearchQuery:function(e){}},T=Object(a.createContext)(w),D=function(e){var t=e.children,c=Object(a.useReducer)(x,w),n=Object(l.a)(c,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){localStorage.setItem("bookmarks",JSON.stringify(r.bookmarks))}),[r]),r.setResponseData=function(e,t){s(y(e,t))},r.setImages=function(e){s(v(e))},r.addToBookmarks=function(e){s(N(e))},r.removeFromBookmarks=function(e){s(P(e))},r.setNextPage=function(){s(C())},r.setPrevPage=function(){s(_())},r.addTag=function(e,t){s(E(e,t))},r.setSearchQuery=function(e){s(S(e))},Object(k.jsx)(T.Provider,{value:r,children:t})},R=function(){return Object(k.jsx)("nav",{className:"grey darken-4 header nav-wraper",children:Object(k.jsxs)("div",{className:"nav-wrapper",children:[Object(k.jsx)("a",{href:"/flickr-search",className:"brand-logo",children:"Image Finder"}),Object(k.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"https://github.com/the-lensky/flickr-search",rel:"noreferrer",target:"_blank",children:Object(k.jsx)("i",{className:"large material-icons",children:"account_circle"})})})})]})})};c(31);var I=function(){return Object(k.jsxs)("div",{className:"wrapper-icon",children:[Object(k.jsx)(o.b,{exact:!0,to:"/",activeClassName:"activeIcon",children:Object(k.jsx)("i",{className:"material-icons large icon",children:"search"})}),Object(k.jsx)(o.b,{to:"/bookmarks",activeClassName:"activeIcon",children:Object(k.jsx)("i",{className:"material-icons large icon",children:"star"})})]})},A=(c(37),function(e){var t=e.getImages,c=e.searchQuery,a=e.setSearchQuery;return Object(k.jsx)("div",{className:"row ",children:Object(k.jsxs)("div",{className:"input-field col s12",children:[Object(k.jsx)("input",{type:"text",id:"search-field",placeholder:"Find images",value:c,onChange:function(e){return function(e){a(e.target.value)}(e)},onKeyDown:function(e){"Enter"===e.key&&t(c,!0)}}),Object(k.jsx)("i",{className:"material-icons prefix large icon search-icon",onClick:function(){return t(c,!0)},children:"search"})]})})}),Q=(c(19),function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],r=c[1],s=e.title,o=e.farm,i=e.server,j=e.secret,d=e.id,u=Object(a.useContext)(T),b=u.addToBookmarks,m=u.bookmarks,h=u.addTag,O="https://farm".concat(o,".staticflickr.com/").concat(i,"/").concat(d,"_").concat(j,".jpg"),f=!!m.find((function(e){return e.id===d}));return Object(k.jsxs)("div",{className:"card grey darken-4",children:[Object(k.jsx)("div",{className:"card-image ",children:Object(k.jsx)("img",{src:O,alt:s})}),Object(k.jsx)("div",{className:"card-content grey darken-4",children:Object(k.jsx)("span",{className:"card-title",children:s})}),Object(k.jsx)("div",{className:"card-action",children:Object(k.jsx)("button",{className:"btn grey darken-1 ",onClick:function(){return b(e)},disabled:f,type:"submit",children:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})}),Object(k.jsx)("div",{className:"card-action",children:Object(k.jsx)("input",{placeholder:"some tags?",value:n,type:"text",onChange:function(e){r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(h(d,n),r(""))}})})]})}),B=(c(20),function(){var e=Object(a.useContext)(T).images;return e.length?Object(k.jsx)("div",{className:"images",children:e.map((function(e){return Object(k.jsx)(Q,Object(d.a)({},e),e.id)}))}):Object(k.jsx)("h4",{children:"No images here. Would you try to search for anything esle?"})}),F=(c(38),function(){var e=Object(a.useContext)(T),t=e.responseData,c=e.setNextPage,n=e.setPrevPage,r=e.currentPage,s=t.pages,o=r<2,i=r>=s;return Object(k.jsxs)("ul",{className:"pagination pagination-wrapper",children:[o?null:Object(k.jsx)("li",{className:" waves-effect ",children:Object(k.jsx)("button",{disabled:o,className:"btn grey darken-4",onClick:n,children:Object(k.jsx)("i",{className:"material-icons",children:"chevron_left"})})}),Object(k.jsx)("li",{className:"grey darken-4 page-counter",children:"Page ".concat(r," of ").concat(s)}),i?null:Object(k.jsx)("li",{className:" waves-effect ",children:Object(k.jsx)("button",{disabled:i,className:"btn grey darken-4",onClick:c,children:Object(k.jsx)("i",{className:"material-icons",children:"chevron_right"})})})]})}),K=function(){var e=Object(a.useContext)(T),t=e.setImages,c=e.images,n=e.setResponseData,r=e.currentPage,s=e.searchQuery,o=e.setSearchQuery,i="https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("83749e874de0980b7ce466f1c2d3773e","&page=").concat(r,"&per_page=24&format=json&nojsoncallback=true&text="),l=function(e){var c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{""!==e.toLowerCase().trim()?fetch("".concat(i).concat(e)).then((function(e){return e.json()})).then((function(e){n(e.photos,c),t(e.photos.photo)})):(n({},c),t([]))}catch(a){console.log(a)}};return Object(a.useEffect)((function(){l(s)}),[r]),Object(k.jsxs)("div",{className:"container content grey darken-3",children:[Object(k.jsx)(A,{searchQuery:s,setSearchQuery:o,getImages:l}),c.length?Object(k.jsx)(F,{}):null,Object(k.jsx)(B,{})]})},M=function(e){var t=e.title,c=e.farm,n=e.server,r=e.secret,s=e.id,o=e.tag,i=Object(a.useContext)(T).removeFromBookmarks,l="https://farm".concat(c,".staticflickr.com/").concat(n,"/").concat(s,"_").concat(r,".jpg");return Object(k.jsxs)("div",{className:"card grey darken-4",children:[Object(k.jsx)("div",{className:"card-image ",children:Object(k.jsx)("img",{src:l,alt:t})}),Object(k.jsx)("div",{className:"card-content grey darken-4",children:Object(k.jsx)("span",{className:"card-title",children:t})}),Object(k.jsxs)("div",{className:"card-action",children:[Object(k.jsx)("p",{children:o}),Object(k.jsx)("button",{className:"btn grey darken-1 ",onClick:function(){return i(s)},type:"submit",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"})]}),Object(k.jsx)("div",{className:"card-action"})]})},G=function(){var e=Object(a.useContext)(T).bookmarks;return Object(k.jsxs)("div",{className:"container content grey darken-3 ",children:[e.length?null:Object(k.jsx)("h4",{children:"You have no bookmarks yet :)"}),Object(k.jsx)("div",{className:"images",children:e.map((function(e){return Object(k.jsx)(M,Object(d.a)({},e),e.id)}))})]})},H=function(){return Object(k.jsx)("footer",{className:"page-footer grey darken-4 footer",children:Object(k.jsx)("div",{className:"footer-copyright grey darken-4 center",children:Object(k.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Have a nice day!\ud83d\ude3c"]})})})},J=function(){return Object(k.jsx)(D,{children:Object(k.jsx)(o.a,{basename:"/flickr-search",children:Object(k.jsxs)("main",{className:"wrapper grey darken-2",children:[Object(k.jsx)(R,{}),Object(k.jsx)(I,{}),Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{path:"/",exact:!0,component:K}),Object(k.jsx)(i.a,{path:"/bookmarks",component:G})]}),Object(k.jsx)(H,{})]})})})};s.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(J,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f6a8a818.chunk.js.map
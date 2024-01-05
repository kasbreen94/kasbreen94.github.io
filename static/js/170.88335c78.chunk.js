"use strict";(self.webpackChunkReactSocialNetwork=self.webpackChunkReactSocialNetwork||[]).push([[170],{170:(e,s,l)=>{l.r(s),l.d(s,{UsersContainer:()=>P});var n=l(791),a=l(420),o=l(848);const t={pagination:"users_pagination__Npw4H",infoPage:"users_infoPage__NPDb7",pageInput:"users_pageInput__lsrhg",numberPage:"users_numberPage__t8Pin",usersSearch:"users_usersSearch__6+QpO",userItem:"users_userItem__4HrV7",userPhoto:"users_userPhoto__Nyd6G",follow:"users_follow__3zutk",followed:"users_followed__cPPnS",followed_unfollow:"users_followed_unfollow__wHdb9",info:"users_info__9ncw0",stateFollow:"users_stateFollow__lEePx",stateUnfollow:"users_stateUnfollow__9fIUW",description:"users_description__U3-mM",showMore:"users_showMore__xGKj5"};var r=l(134),u=l(184);const i=e=>{let{setPage:s,requestUsers:l,page:n}=e;const{register:a,handleSubmit:o}=(0,r.cI)({mode:"onChange",defaultValues:{term:"",friend:"null"}});return(0,u.jsx)("div",{className:t.usersSearch,children:(0,u.jsxs)("form",{onChange:o((e=>{(e=>{s(1),l(n,e)})({term:e.term,friend:"null"===e.friend?null:"true"===e.friend})})),children:[(0,u.jsx)("input",{autoComplete:"off",...a("term",{})}),(0,u.jsxs)("select",{...a("friend",{}),children:[(0,u.jsx)("option",{value:"null",children:"All"}),(0,u.jsx)("option",{value:"true",children:"Only follow"}),(0,u.jsx)("option",{value:"false",children:"Only unfollow"})]})]})})},c=e=>{let{setPage:s,page:l,setCount:n,users:a,loading:o,totalPage:r}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:t.pageInput,children:["Input page number:",(0,u.jsx)("input",{className:t.numberPage,type:"number",min:1,max:r,onChange:e=>{let n=Number(e.target.value);s(n),(n<1||n>r)&&s(l)}})]}),(0,u.jsxs)("div",{className:t.pagination,children:[(0,u.jsx)("button",{onClick:()=>{s(l-1),n(4)},className:t.showMore,disabled:1===l,children:"PrevPage"}),(0,u.jsxs)("div",{className:t.numberPage,children:["Current page: ",l]}),(0,u.jsx)("button",{onClick:()=>{s(l+1),n(4)},className:t.showMore,disabled:o||a.length<100,children:"NextPage"})]})]})},d=e=>{let{setCurrentPage:s,currentPage:l,setCount:n,users:a,loading:o,count:r,totalPage:i}=e;return(0,u.jsx)("div",{children:r<a.length?(0,u.jsx)("button",{onClick:()=>n(r+10),className:t.showMore,disabled:o,children:o?"Loading...":"Load More"}):(l<i||100===r)&&(0,u.jsx)("button",{onClick:()=>{s(l+1),n(4)},className:t.showMore,children:"NextPage"})})};var g=l(87),h=l(91);const m=e=>e.usersPage.users,f=e=>e.usersPage.totalCount,p=e=>e.usersPage.followingId,_=e=>e.usersPage.page,x=e=>e.usersPage.loading,j=e=>e.usersPage.filter,w=e=>{let{users:s,count:l}=e;const n=(0,a.v9)(p),r=(0,a.I0)();return(0,u.jsx)(u.Fragment,{children:s.slice(0,l).map(((e,s)=>(0,u.jsxs)("div",{className:t.userItem,children:[(0,u.jsxs)("span",{className:t.follow,children:[(0,u.jsx)(g.OL,{to:"/"+e.id,children:(0,u.jsx)("img",{src:e.photos.small?e.photos.small:h.Z,alt:"",className:t.userPhoto})}),(0,u.jsx)("button",{className:"".concat(t.followed," ").concat(e.followed&&t.followed_unfollow),disabled:n===e.id,onClick:()=>r((0,o.Gp)(e.id)),children:e.followed?"Unfollow":"Follow"})]}),(0,u.jsxs)("div",{className:t.info,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{children:"Name: "}),e.name]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{children:"Followed:"}),(0,u.jsx)("div",{className:"".concat(t.stateFollow," ").concat(!e.followed&&t.stateUnfollow)})]}),(0,u.jsx)("span",{children:"User id: "}),e.id]}),null!==e.status&&(0,u.jsxs)("div",{className:t.description,children:[(0,u.jsx)("span",{children:"Status: "}),e.status]})]},s)))})},P=n.memo((()=>{const e=(0,a.v9)(m),s=(0,a.v9)(f),l=((0,a.v9)(p),(0,a.v9)(_)),r=(0,a.v9)(x),h=(0,a.v9)(j),P=(0,a.I0)(),v=(e,s)=>{P((0,o.D7)(e,s))},[N,b]=(0,n.useState)(4),[C,k]=(0,n.useState)(l),I=Math.ceil(s/100),[U,S]=(0,g.lr)();return(0,n.useEffect)((()=>{v(C,h)}),[C]),(0,n.useEffect)((()=>{const e=h.term,s=h.friend;let l=(""===e?"":"&term=".concat(e))+(null===s?"":"&friend=".concat(s))+(1===C?"":"&page=".concat(C));S(l)}),[h,C]),(0,u.jsxs)("div",{className:t.users,children:[(0,u.jsxs)("div",{className:t.infoPage,children:[(0,u.jsx)("span",{children:"Users per page: 100"}),(0,u.jsxs)("span",{children:["Total pages: ",I]}),(0,u.jsxs)("span",{children:["Total users: ",s]})]}),(0,u.jsx)(c,{totalPage:I,setPage:k,page:C,setCount:b,users:e,loading:r}),(0,u.jsx)(i,{setPage:k,requestUsers:v,page:C}),(0,u.jsx)(w,{users:e,count:N}),(0,u.jsx)(d,{setCurrentPage:k,count:N,totalPage:I,currentPage:C,setCount:b,users:e,loading:r})]})}))}}]);
//# sourceMappingURL=170.88335c78.chunk.js.map
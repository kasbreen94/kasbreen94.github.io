"use strict";(self.webpackChunkReactSocialNetwork=self.webpackChunkReactSocialNetwork||[]).push([[586],{586:(s,e,o)=>{o.r(e),o.d(e,{default:()=>h});var l=o(791),a=o(420),t=o(315);const n={userItem:"Users_userItem__wX4gC",userPhoto:"Users_userPhoto__0hFuF",follow:"Users_follow__g0azf",followed:"Users_followed__iwrLF",followed_unfollow:"Users_followed_unfollow__cDCHo",info:"Users_info__3XOHj",stateFollow:"Users_stateFollow__D6VE2",stateUnfollow:"Users_stateUnfollow__GXIbH",description:"Users_description__mkOV+",showMore:"Users_showMore__BhhDM"},r=s=>s.usersPage.users,c=s=>s.usersPage.followingInProgress;var d=o(87),i=o(91);const u=o(294).Z.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"80f7eb98-d03d-4e4e-bcc2-ee3aa206800e"}}),w={getUsers:s=>u.get("users?count=".concat(s)),getFollowed:s=>u.get("follow/".concat(s),{}),unfollow:s=>u.delete("follow/".concat(s),{}),follow:s=>u.post("follow/".concat(s),{},{})};var f=o(184);const h=(0,a.$j)((s=>({count:s.usersPage.count,loading:s.usersPage.loading,isFetching:s.usersPage.isFetching,users:r(s),followingInProgress:c(s)})),{followed:t.Gp,requestUsers:t.D7})((s=>{const[e,o]=(0,l.useState)([]),[a,t]=(0,l.useState)(5),[r,c]=(0,l.useState)(!1),[u,h]=(0,l.useState)({userId:null});return(0,l.useEffect)((()=>{(async s=>{const e=await w.getUsers(s);o(e.data.items)})(a)}),[a,r]),(0,f.jsxs)("div",{className:n.users,children:[e.map((s=>(0,f.jsxs)("div",{className:n.userItem,children:[(0,f.jsxs)("span",{className:n.follow,children:[(0,f.jsx)(d.OL,{to:"/"+s.id,children:(0,f.jsx)("img",{src:null!=s.photos.small?s.photos.small:i.Z,alt:"",className:n.userPhoto})}),(0,f.jsx)("button",{className:"".concat(n.followed," ").concat(s.followed&&n.followed_unfollow),disabled:u.userId===s.id,onClick:()=>(async s=>{h({userId:s});let e=await w.getFollowed(s);c(e.data),e=!1===e.data?await w.follow(s):await w.unfollow(s),0===e.data.resultCode&&c(!r),h({userId:null})})(s.id),children:s.followed?"Unfollow":"Follow"})]}),(0,f.jsxs)("div",{className:n.info,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Name: "}),s.name]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Followed:"}),(0,f.jsx)("div",{className:"".concat(n.stateFollow," ").concat(!s.followed&&n.stateUnfollow)})]}),(0,f.jsx)("span",{children:"User id: "}),s.id]}),null!==s.status&&(0,f.jsxs)("div",{className:n.description,children:[(0,f.jsx)("span",{children:"Status: "}),s.status]})]},s.id))),(0,f.jsx)("div",{children:(0,f.jsx)("button",{onClick:()=>t((s=>s+6)),className:n.showMore,disabled:s.loading,children:s.loading?"Loading...":"Load More"})})]})}))}}]);
//# sourceMappingURL=586.167f9fa7.chunk.js.map
"use strict";(self.webpackChunkReactSocialNetwork=self.webpackChunkReactSocialNetwork||[]).push([[619],{5619:(s,e,a)=>{a.r(e),a.d(e,{default:()=>M});var d=a(2906),i=a(2791);const l="Dialogs_dialogs__ThEfZ",r="Dialogs_dialogsItems__YLEE7",o="Dialogs_dialog__gZ2oy",t="Dialogs_active__roUlT",g="Dialogs_messages__zYslj",n="Dialogs_message__44r0l",c="Dialogs_addMessage__eb9SC";var m=a(1134),x=a(184);const v=s=>{var e;const{register:a,formState:{errors:d,isValid:i},handleSubmit:l,reset:r}=(0,m.cI)({mode:"onBlur"});return(0,x.jsxs)("form",{onSubmit:l((e=>{s.onSubmit(e),r()})),children:[(0,x.jsx)("textarea",{placeholder:"Add your text",...a("newMessage",{required:"Add your text",minLength:{value:5,message:"min 5 symbols"}})}),(0,x.jsx)("div",{children:(null===d||void 0===d?void 0:d.textarea)&&(0,x.jsx)("p",{children:(null===d||void 0===d||null===(e=d.textarea)||void 0===e?void 0:e.message)||"Error!"})}),(0,x.jsx)("button",{type:"submit",disabled:!i,children:"Send"})]})},h=s=>(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)("div",{className:n,children:s.message.map((s=>(0,x.jsx)("div",{children:s.message},s.id)))}),(0,x.jsx)("div",{className:c,children:(0,x.jsx)(v,{onSubmit:e=>{s.addMessage(e.newMessage)}})})]});var u=a(1087);const j=s=>(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:r,children:s.dialogs.map((s=>(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("img",{src:s.avatar,alt:""}),(0,x.jsx)(u.OL,{to:"/dialogs/"+s.id,className:s=>{let{isActive:e}=s;return e?t:o},children:s.name})]},s.id)))})}),_=s=>(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)(j,{dialogs:s.dialogsPage.dialogs}),(0,x.jsx)(h,{message:s.dialogsPage.messages,addMessage:s.addMessage})]});var p=a(4420);class b extends i.Component{render(){return(0,x.jsx)(_,{dialogsPage:this.props.dialogsPage,addMessage:this.props.addMessage})}}const M=(0,p.$j)((s=>({dialogsPage:s.dialogsPage})),{addMessage:d.H})(b)}}]);
//# sourceMappingURL=619.b1608d0d.chunk.js.map
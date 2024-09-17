"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[211],{5805:(e,s,r)=>{r.d(s,{A:()=>n});r(5043);const a=r.p+"static/media/icon.f07fbab0ef8427fbc29843f3c96e56f9.svg";var t=r(579);const n=function(e){let{className:s}=e;return(0,t.jsxs)("div",{className:s,children:[(0,t.jsx)("img",{src:a,alt:"Icon"}),(0,t.jsx)("span",{children:"Money Guard"})]})}},8838:(e,s,r)=>{r.d(s,{A:()=>d});var a=r(8387);r(5043);const t="Button_button__1Rc+9",n="Button_coloredButton__IBChQ",i="Button_whiteButton__wVpSo";var o=r(579);const d=function(e){let{type:s,children:r,variant:d="",handleClick:l,disabled:c,className:u}=e;return(0,o.jsx)("button",{disabled:c,onClick:l,type:s,className:(0,a.A)(u,t,"colored"===d?n:i),children:r})}},2461:(e,s,r)=>{r.d(s,{A:()=>i});r(5043);var a=r(8387);const t={inputContainer:"Input_inputContainer__O5Ziv",input:"Input_input__g+vvH",inputCenter:"Input_inputCenter__cXrS5",inputInfo:"Input_inputInfo__NWpb9"};var n=r(579);function i(e){let{type:s,placeholder:r,required:i,variant:o="",className:d,name:l,handleChange:c,width:u,value:p,paddingLeft:m,autoComplete:h,handleBlur:g}=e;return(0,n.jsx)("div",{style:{width:u||"auto"},className:t.inputContainer,children:(0,n.jsx)("input",{autoComplete:h||"off",style:{paddingLeft:m||"0px"},onChange:c,name:l||"",className:(0,a.A)(t.input,d,"center"===o?t.inputCenter:t.input),type:s||"text",placeholder:r||"",required:i||!1,value:p||"",onBlur:g})})}},2870:(e,s,r)=>{r.d(s,{A:()=>t});var a=r(5043);const t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[s,r]=(0,a.useState)(Object.keys(e).reduce(((e,s)=>(e[s]=!1,e)),{}));return{touched:s,handleBlur:e=>()=>{r((s=>({...s,[e]:!0})))}}}},1313:(e,s,r)=>{r.d(s,{A:()=>t});var a=r(5043);const t=(e,s)=>{const[r,t]=(0,a.useState)(e),[n,i]=(0,a.useState)({});return{fields:r,setFields:t,errors:n,validateFields:()=>{const e=s(r);return i(e),0===Object.keys(e).length}}}},5340:(e,s,r)=>{r.d(s,{A:()=>t});var a=r(5043);function t(e){const[s,r]=(0,a.useState)(e);return[s,function(){r(!s)}]}},7211:(e,s,r)=>{r.r(s),r.d(s,{default:()=>I});var a=r(5043),t=r(3003),n=r(1870),i=r(5475),o=r(3910),d=r(7929),l=r(2461),c=r(8838),u=r(5340),p=r(1036),m=r(5659),h=r(1313);const g=e=>{const s={};return e.username||(s.username="Username is required"),e.password.length<6&&(s.password="Password must be at least 6 characters!"),e.email||(s.email="Email is required"),e.password||(s.password="Password is required"),e.passwordConfirm?e.password!==e.passwordConfirm&&(s.passwordConfirm="Passwords do not match"):s.passwordConfirm="Password confirmation is required",s};var _=r(2870);const w=e=>{const[s,r]=(0,a.useState)(0);return(0,a.useEffect)((()=>{r((e=>{let s=0;return e.length>7&&(s+=1),e.length>10&&(s+=1),/[A-Z]/.test(e)&&(s+=1),/[0-9]/.test(e)&&(s+=1),/[^A-Za-z0-9]/.test(e)&&(s+=1),s})(e))}),[e]),s},x={form:"RegisterForm_form__UpwOq",input:"RegisterForm_input__tySPg",inputs:"RegisterForm_inputs__er6id",inputWrapper:"RegisterForm_inputWrapper__5nYgw",inputError:"RegisterForm_inputError__daLET",inputIcon:"RegisterForm_inputIcon__Ng3tB",eyeIcon:"RegisterForm_eyeIcon__oheS-",error:"RegisterForm_error__IBmYt",buttonsContainer:"RegisterForm_buttonsContainer__pNhtq",navLink:"RegisterForm_navLink__V8Kd9",passwordStrengthBar:"RegisterForm_passwordStrengthBar__Clrzg",passwordStrengthIndicator:"RegisterForm_passwordStrengthIndicator__8CvTq"};var v=r(579);const C=function(){const{fields:e,setFields:s,validateFields:r}=(0,h.A)({username:"",email:"",password:"",passwordConfirm:""},g),{touched:C,handleBlur:f}=(0,_.A)(),j=w(e.password),[N,y]=(0,a.useState)(""),R=(0,t.wA)(),[A,I]=(0,a.useState)("password"),[b,S]=(0,u.A)(!0),[B,k]=(0,u.A)(!1),[q,F]=(0,a.useState)("password"),[P,E]=(0,u.A)(!0),[L,W]=(0,u.A)(!1);return(0,v.jsxs)("form",{className:x.form,onSubmit:a=>{if(a.preventDefault(),!r())return;const{passwordConfirm:t,...i}=e;R((0,n.kz)(i)).unwrap().then((()=>{s({username:"",email:"",password:"",passwordConfirm:""}),p.oR.success("Registration successful!")})).catch((e=>{console.error(e),y("Account with this email already exists."),p.oR.error("Account with this email already exists.")}))},children:[(0,v.jsx)(p.N9,{}),(0,v.jsxs)("div",{className:x.inputs,children:[(0,v.jsxs)("div",{className:x.inputContainer,children:[(0,v.jsxs)("div",{className:x.inputWrapper,children:[(0,v.jsx)(o.g,{icon:d.X46,className:x.inputIcon}),(0,v.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:"text",value:e.username,handleChange:r=>{s({...e,username:r.target.value})},handleBlur:f("username"),placeholder:"Name",required:!0})]}),C.username&&!e.username&&(0,v.jsx)("p",{className:x.inputError,children:"Required"})]}),(0,v.jsxs)("div",{className:x.inputContainer,children:[(0,v.jsxs)("div",{className:x.inputWrapper,children:[(0,v.jsx)(o.g,{icon:d.y_8,className:x.inputIcon}),(0,v.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:"email",value:e.email,handleChange:r=>{s({...e,email:r.target.value})},handleBlur:f("email"),placeholder:"E-mail",required:!0})]}),C.email&&!e.email&&(0,v.jsx)("p",{className:x.inputError,children:"Required"})]}),(0,v.jsxs)("div",{className:x.inputContainer,children:[(0,v.jsxs)("div",{className:x.inputWrapper,children:[(0,v.jsx)(o.g,{icon:d.DW4,className:x.inputIcon}),b&&(0,v.jsx)(m.gZ8,{onClick:()=>{S(),k(),I("text")},size:"24px",className:x.eyeIcon}),B&&(0,v.jsx)(m.iWd,{onClick:()=>{S(),k(),I("password")},size:"24px",className:x.eyeIcon}),(0,v.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:A,value:e.password,handleChange:r=>{s({...e,password:r.target.value})},handleBlur:f("password"),placeholder:"Password",required:!0})]}),C.password&&!e.password&&(0,v.jsx)("p",{className:x.inputError,children:"Required"})]}),(0,v.jsxs)("div",{className:x.inputContainer,children:[(0,v.jsxs)("div",{className:x.inputWrapper,children:[(0,v.jsx)(o.g,{icon:d.DW4,className:x.inputIcon}),P&&(0,v.jsx)(m.gZ8,{onClick:()=>{E(),W(),F("text")},size:"24px",className:x.eyeIcon}),L&&(0,v.jsx)(m.iWd,{onClick:()=>{E(),W(),F("password")},size:"24px",className:x.eyeIcon}),(0,v.jsx)(l.A,{autoComplete:"on",paddingLeft:"53.5px",width:"100%",type:q,value:e.passwordConfirm,handleChange:r=>s({...e,passwordConfirm:r.target.value}),handleBlur:f("passwordConfirm"),placeholder:"Confirm Password",required:!0})]}),C.passwordConfirm&&!e.passwordConfirm&&(0,v.jsx)("p",{className:x.inputError,children:"Required"}),C.passwordConfirm&&e.password!==e.passwordConfirm&&(0,v.jsx)("p",{className:x.inputError,children:"Passwords must match"})]}),(0,v.jsx)("div",{className:x.passwordStrengthBar,children:(0,v.jsx)("div",{className:x.passwordStrengthIndicator,style:{width:j/5*100+"%",backgroundColor:j<3?"red":j<4?"orange":"green"}})})]}),(0,v.jsxs)("div",{className:x.buttonsContainer,children:[(0,v.jsx)(c.A,{variant:"colored",type:"submit",children:"Register"}),N&&(0,v.jsx)("p",{className:x.error,children:N}),(0,v.jsxs)(c.A,{type:"button",children:[(0,v.jsx)(i.N_,{to:"/login",className:x.navLink,children:"Log in"})," "]})]})]})},f="RegistrationPage_container__s3FXY",j="RegistrationPage_backgroundImage__XagCH",N="RegistrationPage_registrationPage__wSSd8",y="RegistrationPage_registrationContainer__27RN7",R="RegistrationPage_logoContainer__iwYM2";var A=r(5805);const I=function(){return(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("div",{className:j}),(0,v.jsx)("div",{className:N,children:(0,v.jsxs)("div",{className:y,children:[(0,v.jsx)(A.A,{className:R}),(0,v.jsx)(C,{})]})})]})}}}]);
//# sourceMappingURL=211.82e37bf5.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[332],{3332:function(e,l,i){i.r(l),i.d(l,{default:function(){return p}});var n=i(9434),r=i(9273),a={form:"LoginForm_form__gPEx5",input:"LoginForm_input__aQRtt",label:"LoginForm_label__F7sLE"},s=i(7498),t=i(8618),o=i(9753),d=i(7697),u=i(3306),c=i(4683),m=i(3329),v=function(){var e=(0,n.I0)(),l=(0,n.v9)(c.vU);return(0,m.jsxs)(m.Fragment,{children:[l&&(0,m.jsxs)(s.b,{status:"error",children:[(0,m.jsx)(t.z,{className:a.error}),(0,m.jsx)(o.C,{children:"The data is entered incorrectly!"})]}),(0,m.jsxs)("form",{className:a.form,onSubmit:function(l){l.preventDefault();var i=l.currentTarget;e((0,r.Ib)({email:i.elements.email.value,password:i.elements.password.value})),i.reset()},autoComplete:"off",children:[(0,m.jsxs)("label",{className:a.label,children:["Email",(0,m.jsx)(d.I,{className:a.input,type:"email",name:"email"})]}),(0,m.jsxs)("label",{className:a.label,children:["Password",(0,m.jsx)(d.I,{className:a.input,type:"password",name:"password"})]}),(0,m.jsx)(u.z,{colorScheme:"teal",size:"sm",type:"submit",children:"Log In"})]})]})};function p(){return(0,m.jsx)("div",{children:(0,m.jsx)(v,{})})}},7697:function(e,l,i){i.d(l,{I:function(){return q}});var n=i(1413),r=i(4925),a=i(9439),s=i(9886),t=i(4591),o=i(7872),d=i(9219),u=i(9477),c=i(2154),m=i(6992),v=i(2791),p=i(3329),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),Z=x[0],g=x[1],y=(0,s.k)({strict:!1,name:"FormControlContext"}),I=(0,a.Z)(y,2),F=I[0],R=I[1];var k=(0,o.G)((function(e,l){var i=(0,d.jC)("Form",e),s=function(e){var l=e.id,i=e.isRequired,s=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,r.Z)(e,h),c=(0,v.useId)(),p=l||"field-".concat(c),f="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),Z=(0,v.useState)(!1),g=(0,a.Z)(Z,2),y=g[0],I=g[1],F=(0,v.useState)(!1),R=(0,a.Z)(F,2),k=R[0],_=R[1],j=(0,v.useState)(!1),C=(0,a.Z)(j,2),P=C[0],q=C[1],N=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:x},e),{},{ref:(0,t.lq)(l,(function(e){e&&_(!0)}))})}),[x]),T=(0,v.useCallback)((function(){var e,l,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},i),{},{ref:r,"data-focus":(0,m.PB)(P),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(d),id:null!=(e=i.id)?e:f,htmlFor:null!=(l=i.htmlFor)?l:p})}),[p,o,P,s,d,f]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:b},e),{},{ref:(0,t.lq)(l,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),u),{},{ref:l,role:"group"})}),[u]),D=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:l,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!o,isFocused:!!P,onFocus:function(){return q(!0)},onBlur:function(){return q(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:k,setHasHelpText:_,id:p,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:N,getErrorMessageProps:O,getRootProps:w,getLabelProps:T,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),o=s.getRootProps,b=(s.htmlProps,(0,r.Z)(s,f)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(F,{value:b,children:(0,p.jsx)(Z,{value:i,children:(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},o({},l)),{},{className:x,__css:i.container}))})})}));k.displayName="FormControl",(0,o.G)((function(e,l){var i=R(),r=g(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,n.Z)((0,n.Z)({},null==i?void 0:i.getHelpTextProps(e,l)),{},{__css:r.helperText,className:a}))})).displayName="FormHelperText";var _=["isDisabled","isInvalid","isReadOnly","isRequired"],j=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function C(e){var l=function(e){var l,i,a,s=R(),t=e.id,o=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,v=e.isInvalid,p=e.isReadOnly,h=e.isDisabled,f=e.onFocus,b=e.onBlur,x=(0,r.Z)(e,j),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&Z.push(s.feedbackId);(null==s?void 0:s.hasHelpText)&&Z.push(s.helpTextId);return(0,n.Z)((0,n.Z)({},x),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=t?t:null==s?void 0:s.id,isDisabled:null!=(l=null!=o?o:h)?l:null==s?void 0:s.isDisabled,isReadOnly:null!=(i=null!=d?d:p)?i:null==s?void 0:s.isReadOnly,isRequired:null!=(a=null!=u?u:c)?a:null==s?void 0:s.isRequired,isInvalid:null!=v?v:null==s?void 0:s.isInvalid,onFocus:(0,m.v0)(null==s?void 0:s.onFocus,f),onBlur:(0,m.v0)(null==s?void 0:s.onBlur,b)})}(e),i=l.isDisabled,a=l.isInvalid,s=l.isReadOnly,t=l.isRequired,o=(0,r.Z)(l,_);return(0,n.Z)((0,n.Z)({},o),{},{disabled:i,readOnly:s,required:t,"aria-invalid":(0,m.Qm)(a),"aria-required":(0,m.Qm)(t),"aria-readonly":(0,m.Qm)(s)})}var P=["htmlSize"],q=(0,o.G)((function(e,l){var i=e.htmlSize,a=(0,r.Z)(e,P),s=(0,d.jC)("Input",a),t=C((0,u.Lr)(a)),o=(0,m.cx)("chakra-input",e.className);return(0,p.jsx)(c.m.input,(0,n.Z)((0,n.Z)({size:i},t),{},{__css:s.field,ref:l,className:o}))}));q.displayName="Input",q.id="Input"}}]);
//# sourceMappingURL=332.3118550f.chunk.js.map
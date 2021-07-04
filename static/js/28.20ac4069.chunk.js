(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[28],{1414:function(e,a,t){"use strict";var l=t(17),r=t(3),i=t(22),n=t(0),o=t.n(n),s=t(65),c=t(1307),m=t(1466),d=t(1309),u=t(1520),p=t(1311),v=t(1304),b=t(1296),f=t(1373),g=t(1993),h=t(1518);a.a=function(){var e=Object(n.useState)({date:new Date}),a=Object(i.a)(e,2),t=a[0],E=a[1];Object(n.useEffect)((function(){return s.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return console.log(e),e===t.password})),function(){return s.ValidatorForm.removeValidationRule("isPasswordMatch")}}),[t.password]);var x=function(e){e.persist(),E(Object(r.a)(Object(r.a)({},t),{},Object(l.a)({},e.target.name,e.target.value)))},y=t.username,N=t.firstName,L=t.creditCard,O=t.mobile,j=t.password,q=t.confirmPassword,w=t.gender,C=t.date,S=t.email;return o.a.createElement("div",null,o.a.createElement(s.ValidatorForm,{onSubmit:function(e){},onError:function(){return null}},o.a.createElement(c.a,{container:!0,spacing:6},o.a.createElement(c.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(s.TextValidator,{className:"mb-4 w-full",label:"Username (Min length 4, Max length 9)",onChange:x,type:"text",name:"username",value:y||"",validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),o.a.createElement(s.TextValidator,{className:"mb-4 w-full",label:"First Name",onChange:x,type:"text",name:"firstName",value:N||"",validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(s.TextValidator,{className:"mb-4 w-full",label:"Email",onChange:x,type:"email",name:"email",value:S||"",validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),o.a.createElement(f.a,{utils:h.a},o.a.createElement(g.a,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:C,onChange:function(e){E(Object(r.a)(Object(r.a)({},t),{},{date:e}))},KeyboardButtonProps:{"aria-label":"change date"}})),o.a.createElement(s.TextValidator,{className:"mb-8 w-full",label:"Credit Card",onChange:x,type:"number",name:"creditCard",value:L||"",validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),o.a.createElement(c.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(s.TextValidator,{className:"mb-4 w-full",label:"Mobile Nubmer",onChange:x,type:"text",name:"mobile",value:O||"",validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(s.TextValidator,{className:"mb-4 w-full",label:"Password",onChange:x,name:"password",type:"password",value:j||"",validators:["required"],errorMessages:["this field is required"]}),o.a.createElement(s.TextValidator,{className:"mb-4 w-full",label:"Confirm Password",onChange:x,name:"confirmPassword",type:"password",value:q||"",validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),o.a.createElement(m.a,{className:"mb-4",value:w||"",name:"gender",onChange:x,row:!0},o.a.createElement(d.a,{value:"Male",control:o.a.createElement(u.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),o.a.createElement(d.a,{value:"Female",control:o.a.createElement(u.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),o.a.createElement(d.a,{value:"Others",control:o.a.createElement(u.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),o.a.createElement(d.a,{control:o.a.createElement(p.a,null),label:"I have read and agree to the terms of service."}))),o.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit"},o.a.createElement(b.a,null,"send"),o.a.createElement("span",{className:"pl-2 capitalize"},"Submit"))))}},1995:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),i=t(1414),n=t(22),o=t(2),s=t(6),c=(t(5),t(4)),m=t(8),d=t(235),u=l.forwardRef((function(e,a){var t=e.active,r=e.alternativeLabel,i=void 0!==r&&r,n=e.classes,m=e.className,d=e.completed,u=e.disabled,p=(e.index,e.orientation),v=void 0===p?"horizontal":p,b=Object(s.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return l.createElement("div",Object(o.a)({className:Object(c.a)(n.root,n[v],m,i&&n.alternativeLabel,t&&n.active,d&&n.completed,u&&n.disabled),ref:a},b),l.createElement("span",{className:Object(c.a)(n.line,{horizontal:n.lineHorizontal,vertical:n.lineVertical}[v])}))})),p=Object(m.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(u),v=l.createElement(p,null),b=l.forwardRef((function(e,a){var t=e.activeStep,r=void 0===t?0:t,i=e.alternativeLabel,n=void 0!==i&&i,m=e.children,u=e.classes,p=e.className,b=e.connector,f=void 0===b?v:b,g=e.nonLinear,h=void 0!==g&&g,E=e.orientation,x=void 0===E?"horizontal":E,y=Object(s.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),N=l.isValidElement(f)?l.cloneElement(f,{orientation:x}):null,L=l.Children.toArray(m),O=L.map((function(e,a){var t={index:a,active:!1,completed:!1,disabled:!1};return r===a?t.active=!0:!h&&r>a?t.completed=!0:!h&&r<a&&(t.disabled=!0),l.cloneElement(e,Object(o.a)({alternativeLabel:n,connector:N,last:a+1===L.length,orientation:x},t,e.props))}));return l.createElement(d.a,Object(o.a)({square:!0,elevation:0,className:Object(c.a)(u.root,u[x],p,n&&u.alternativeLabel),ref:a},y),O)})),f=Object(m.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(b),g=(t(179),l.forwardRef((function(e,a){var t=e.active,r=void 0!==t&&t,i=e.alternativeLabel,n=e.children,m=e.classes,d=e.className,u=e.completed,p=void 0!==u&&u,v=e.connector,b=e.disabled,f=void 0!==b&&b,g=e.expanded,h=void 0!==g&&g,E=e.index,x=e.last,y=e.orientation,N=Object(s.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),L=v?l.cloneElement(v,{orientation:y,alternativeLabel:i,index:E,active:r,completed:p,disabled:f}):null,O=l.createElement("div",Object(o.a)({className:Object(c.a)(m.root,m[y],d,i&&m.alternativeLabel,p&&m.completed),ref:a},N),L&&i&&0!==E?L:null,l.Children.map(n,(function(e){return l.isValidElement(e)?l.cloneElement(e,Object(o.a)({active:r,alternativeLabel:i,completed:p,disabled:f,expanded:h,last:x,icon:E+1,orientation:y},e.props)):null})));return L&&!i&&0!==E?l.createElement(l.Fragment,null,L,O):O}))),h=Object(m.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(g),E=t(1243),x=t(57),y=Object(x.a)(l.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),N=Object(x.a)(l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),L=t(412),O=l.createElement("circle",{cx:"12",cy:"12",r:"12"}),j=l.forwardRef((function(e,a){var t=e.completed,r=void 0!==t&&t,i=e.icon,n=e.active,o=void 0!==n&&n,s=e.error,m=void 0!==s&&s,d=e.classes;if("number"===typeof i||"string"===typeof i){var u=Object(c.a)(d.root,o&&d.active,m&&d.error,r&&d.completed);return m?l.createElement(N,{className:u,ref:a}):r?l.createElement(y,{className:u,ref:a}):l.createElement(L.a,{className:u,ref:a},O,l.createElement("text",{className:d.text,x:"12",y:"16",textAnchor:"middle"},i))}return i})),q=Object(m.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(j),w=l.forwardRef((function(e,a){var t=e.active,r=void 0!==t&&t,i=e.alternativeLabel,n=void 0!==i&&i,m=e.children,d=e.classes,u=e.className,p=e.completed,v=void 0!==p&&p,b=e.disabled,f=void 0!==b&&b,g=e.error,h=void 0!==g&&g,x=(e.expanded,e.icon),y=(e.last,e.optional),N=e.orientation,L=void 0===N?"horizontal":N,O=e.StepIconComponent,j=e.StepIconProps,w=Object(s.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),C=O;return x&&!C&&(C=q),l.createElement("span",Object(o.a)({className:Object(c.a)(d.root,d[L],u,f&&d.disabled,n&&d.alternativeLabel,h&&d.error),ref:a},w),x||C?l.createElement("span",{className:Object(c.a)(d.iconContainer,n&&d.alternativeLabel)},l.createElement(C,Object(o.a)({completed:v,active:r,error:h,icon:x},j))):null,l.createElement("span",{className:d.labelContainer},m?l.createElement(E.a,{variant:"body2",component:"span",display:"block",className:Object(c.a)(d.label,n&&d.alternativeLabel,v&&d.completed,r&&d.active,h&&d.error)},m):null,y))}));w.muiName="StepLabel";var C=Object(m.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(w),S=t(1304);function M(){var e=r.a.useState(0),a=Object(n.a)(e,2),t=a[0],l=a[1],i=["Select master blaster campaign settings","Create an ad group","Create an ad"];return r.a.createElement("div",null,r.a.createElement(f,{activeStep:t,alternativeLabel:!0},i.map((function(e){return r.a.createElement(h,{key:e},r.a.createElement(C,null,e))}))),r.a.createElement("div",null,t===i.length?r.a.createElement("div",null,r.a.createElement(E.a,null,"All steps completed"),r.a.createElement(S.a,{className:"mt-4",variant:"contained",color:"secondary",onClick:function(){l(0)}},"Reset")):r.a.createElement("div",null,r.a.createElement(E.a,null,function(e){switch(e){case 0:return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tincidunt velit. Quisque laoreet, lectus id tincidunt fringilla, eros est bibendum felis, sit amet lobortis ante sem non diam. Donec viverra a nisi eu eleifend. Mauris vel leo tempor, commodo felis in, sollicitudin velit. Nullam eu sem id lacus venenatis commodo nec a lacus. Donec in egestas justo. Quisque elementum diam felis. In a ullamcorper leo. In lorem urna, mollis in feugiat sed, aliquet nec diam. Mauris tempus dui at gravida pharetra. Etiam nec lectus metus. In dapibus placerat consequat. Quisque ornare ut lacus ac tempus. Pellentesque sed ornare tellus. Curabitur dictum turpis quam, at feugiat mi elementum a.";case 1:return"Integer euismod dapibus sapien, a interdum augue blandit eget. Donec pellentesque, sapien iaculis dignissim sagittis, risus nulla auctor eros, sed suscipit eros mauris id lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor mauris egestas consequat molestie. Nam egestas iaculis malesuada. Praesent sagittis venenatis finibus. Praesent porttitor ipsum et sapien cursus, eu mattis augue ornare.";case 2:return"In laoreet, dui vel tristique facilisis, velit dui dictum diam, nec feugiat mi mauris eu nunc. Nullam auctor eget ante ac laoreet. Aliquam et ante ligula. Nam imperdiet augue magna, ac tincidunt neque mollis nec. Sed eu nunc sit amet tellus commodo elementum non sit amet sem. Etiam ipsum nibh, rutrum vel ultrices in, vulputate ac dolor. Morbi dictum lectus id orci dapibus, et faucibus nulla viverra. Nulla consectetur ex vitae pretium vehicula. Quisque varius tempor erat et semper. Vivamus consectetur, eros sit amet ornare facilisis, nulla felis laoreet tortor, sit amet egestas risus ipsum sed eros.";default:return"Aenean arcu ligula, porttitor id neque imperdiet, congue convallis erat. Integer libero sapien, convallis a vulputate vel, pretium vulputate metus. Donec leo justo, viverra ut tempor commodo, laoreet eu velit. Donec vel sem quis velit pharetra elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam in commodo mauris. Ut iaculis ipsum velit."}}(t)),r.a.createElement("div",{className:"pt-4"},r.a.createElement(S.a,{variant:"contained",color:"secondary",disabled:0===t,onClick:function(){l((function(e){return e-1}))}},"Back"),r.a.createElement(S.a,{className:"ml-4",variant:"contained",color:"primary",onClick:function(){l((function(e){return e+1}))}},t===i.length-1?"Finish":"Next")))))}var z=t(101);a.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(z.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Form"}]})),r.a.createElement(z.q,{title:"Simple Form"},r.a.createElement(i.a,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(z.q,{title:"stepper form"},r.a.createElement(M,null)))}}}]);
//# sourceMappingURL=28.20ac4069.chunk.js.map
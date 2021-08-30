webpackJsonp([1],{192:function(e,n,t){"use strict";function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),l=t.n(u),c=t(7),s=t(193),p=t(57),A=t(205),d=t.n(A),b=t(13),h=t(58),g=t(10),f=t(15),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),v=function(e){function n(){var e,t,i,u;r(this,n);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return t=i=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),i.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},i.inputChangedHandler=function(e,n){var t=Object(f.b)(i.state.controls,Object.assign({},i.state.controls,o({},n,Object(f.b)(i.state.controls[n],{value:e.target.value,valid:Object(f.a)(e.target.value,i.state.controls[n].validation),touched:!0}))));i.setState({controls:t})},i.submitHandler=function(e){e.preventDefault(),i.props.onAuth(i.state.controls.email.value,i.state.controls.password.value,i.state.isSignup)},i.switchAuthModeHandler=function(){i.setState(function(e){return{isSignup:!e.isSignup}})},u=t,a(i,u)}return i(n,e),m(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var o=n.map(function(n){return l.a.createElement(s.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(o=l.a.createElement(h.a,null));var r=null;this.props.error&&(r=l.a.createElement("p",null,this.props.error.message));var a=null;return this.props.isAuthenticated&&(a=l.a.createElement(g.c,{to:this.props.authRedirectPath})),l.a.createElement("div",{className:d.a.Auth},a,r,l.a.createElement("form",{onSubmit:this.submitHandler},o,l.a.createElement(p.a,{btnType:"Success"},"Submit")),l.a.createElement(p.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),n}(u.Component),C=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},x=function(e){return{onAuth:function(n,t,o){return e(b.b(n,t,o))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}};n.default=Object(c.b)(C,x)(v)},193:function(e,n,t){"use strict";var o=t(0),r=t.n(o),a=t(194),i=t.n(a),u=function(e){var n=null,t=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(i.a.Invalid),e.elementType){case"input":n=r.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=r.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=r.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=r.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),n)};n.a=u},194:function(e,n,t){var o=t(195);"string"===typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;t(189)(o,r);o.locals&&(e.exports=o.locals)},195:function(e,n,t){n=e.exports=t(188)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/Users/karav/React/Burger-Improving/Burger-Improving-2/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n.Invalid {\n    border: 1px solid red;\n    background-color: #FDA49A;\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},205:function(e,n,t){var o=t(206);"string"===typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;t(189)(o,r);o.locals&&(e.exports=o.locals)},206:function(e,n,t){n=e.exports=t(188)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["C:/Users/karav/React/Burger-Improving/Burger-Improving-2/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,yBACE,mBACE,WAAa,CACd,CACF",file:"Auth.css",sourcesContent:[".Auth {\r\n  margin: 20px auto;\r\n  width: 80%;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .Auth {\r\n    width: 500px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt"}}});
//# sourceMappingURL=1.c432d8e3.chunk.js.map
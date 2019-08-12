(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"3b73":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-field",{staticClass:"file"},[r("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[r("a",{staticClass:"button is-primary"},[r("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),r("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?r("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},s=[],o={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Pick another file":"Pick a file"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},n=o,i=r("2877"),l=Object(i["a"])(n,a,s,!1,null,null,null);e["a"]=l.exports},c66d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("title-bar",{attrs:{"title-stack":t.titleStack}}),r("hero-bar",[t._v("\n    Profile\n    "),r("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v("\n      Dashboard\n    ")])],1),r("section",{staticClass:"section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("profile-update-form")],1),r("div",{staticClass:"column is-two-fifths"},[r("card-component",{attrs:{title:"Profile",icon:"account"}},[r("div",{staticClass:"image is-user-avatar"},[r("img",{staticClass:"is-rounded",attrs:{src:t.userAvatar,alt:t.userName}})]),r("hr"),r("b-field",{attrs:{label:"Name"}},[r("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),r("hr"),r("b-field",{attrs:{label:"E-mail"}},[r("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1)]),r("hr"),r("password-update-form")],1)],1)},s=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),n=r("2f62"),i=r("6df7"),l=r("1e1d"),u=r("503b"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-field",{attrs:{horizontal:"",label:"Avatar"}},[r("file-picker")],1),r("hr"),r("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[r("b-input",{attrs:{name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[r("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("hr"),r("b-field",{attrs:{horizontal:""}},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n          Submit\n        ")])])])],1)])},m=[],p=r("3b73");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach(function(e){Object(o["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={name:"ProfileUpdateForm",components:{CardComponent:i["a"],FilePicker:p["a"]},data:function(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:f({},Object(n["b"])(["userName","userEmail"])),mounted:function(){this.form.name=this.userName,this.form.email=this.userEmail},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.isLoading=!1,t.$store.commit("user",t.form),t.$buefy.snackbar.open({message:"Updated",queue:!1})},500)}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}},w=b,h=r("2877"),v=Object(h["a"])(w,c,m,!1,null,null,null),g=v.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card-component",{attrs:{title:"Change Password",icon:"lock"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[r("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),r("hr"),r("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[r("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[r("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),r("hr"),r("b-field",{attrs:{horizontal:""}},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n          Submit\n        ")])])])],1)])},y=[],P={name:"PasswordUpdateForm",components:{CardComponent:i["a"]},data:function(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Updated",queue:!1},500)})}}},_=P,j=Object(h["a"])(_,O,y,!1,null,null,null),C=j.exports;function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(r,!0).forEach(function(e){Object(o["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var $={name:"Profile",components:{PasswordUpdateForm:C,ProfileUpdateForm:g,HeroBar:u["a"],TitleBar:l["a"],CardComponent:i["a"]},computed:E({titleStack:function(){return["Admin","Profile"]}},Object(n["b"])(["userName","userEmail","userAvatar"]))},q=$,D=Object(h["a"])(q,a,s,!1,null,null,null);e["default"]=D.exports}}]);
//# sourceMappingURL=profile.c7ad3789.js.map
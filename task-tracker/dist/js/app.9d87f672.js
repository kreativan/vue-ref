(function(e){function t(t){for(var a,o,u=t[0],s=t[1],i=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3590:function(e,t,n){},3796:function(e,t,n){},"380a":function(e,t,n){},4523:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"uk-section"},c={class:"uk-container uk-container-xsmall"};function o(e,t){var n=Object(a["k"])("Header"),o=Object(a["k"])("AddTask"),u=Object(a["k"])("Tasks");return Object(a["g"])(),Object(a["c"])("div",r,[Object(a["f"])("div",c,[Object(a["f"])(n,{title:"Task Tracker",class:"default"}),Object(a["f"])(o,{onAddTask:e.addTask},null,8,["onAddTask"]),Object(a["f"])(u,{tasks:e.tasks,onDeleteTask:e.deleteTask,onToggleReminder:e.toggleReminder},null,8,["tasks","onDeleteTask","onToggleReminder"])])])}var u=n("5530"),s=n("2909"),i=(n("99af"),n("4de4"),n("d81d"),n("8323")),l=n.n(i),d=n("263c"),f=n.n(d),b=Object(a["p"])("data-v-5166987a");Object(a["i"])("data-v-5166987a");var k={class:"uk-flex uk-flex-between"},m={class:"uk-margin-remove"};Object(a["h"])();var p=b((function(e,t){var n=Object(a["k"])("Button");return Object(a["g"])(),Object(a["c"])("header",k,[Object(a["f"])("h1",m,Object(a["l"])(e.title),1),Object(a["f"])(n,{text:"Add Task",buttonClass:"primary"})])}));function O(e,t){return Object(a["g"])(),Object(a["c"])("button",{onClick:t[1]||(t[1]=function(t){return e.onClick()}),class:["uk-button uk-button-small","uk-button-".concat(e.buttonClass)]},Object(a["l"])(e.text),3)}var j={name:"Button",props:{text:String,buttonClass:{type:String,default:"default"}},methods:{onClick:function(){var e=document.querySelector("#new-task-modal");l.a.modal(e).show()}}};j.render=O;var v=j,g={name:"Header",props:{title:String},components:{Button:v}};n("ad99");g.render=p,g.__scopeId="data-v-5166987a";var h=g,y=Object(a["p"])("data-v-725920b6");Object(a["i"])("data-v-725920b6");var x={class:"uk-list uk-list-striped"};Object(a["h"])();var T=y((function(e,t){var n=Object(a["k"])("Task");return Object(a["g"])(),Object(a["c"])("ul",x,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(e.tasks,(function(t){return Object(a["g"])(),Object(a["c"])(n,{key:t.id,task:t,onDeleteTask:function(n){return e.$emit("delete-task",t.id)},onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)}},null,8,["task","onDeleteTask","onToggleReminder"])})),128))])})),w=Object(a["f"])("br",null,null,-1),S={key:0,"uk-icon":"icon:clock; ratio:0.8",class:"uk-margin-small-right uk-text-muted"},A={class:"uk-text-muted uk-text-small"};function _(e,t){return Object(a["g"])(),Object(a["c"])("li",{class:["uk-flex uk-flex-between uk-flex-middle",[e.task.reminder?"is-reminder":"","task"]],onDblclick:t[2]||(t[2]=function(t){return e.$emit("toggle-reminder",e.task.id)})},[Object(a["f"])("div",null,[Object(a["e"])(Object(a["l"])(e.task.text)+" ",1),w,e.task.reminder?(Object(a["g"])(),Object(a["c"])("span",S)):Object(a["d"])("",!0),Object(a["f"])("span",A,Object(a["l"])(e.task.day),1)]),Object(a["f"])("div",null,[Object(a["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("delete-task",e.task.id)}),class:"uk-icon-button uk-text-danger","uk-icon":"close"})])],34)}var M={name:"Task",props:{task:Object}};n("d5e5");M.render=_;var C=M,D={name:"Tasks",props:{tasks:Array},components:{Task:C},emits:["delete-task","toggle-reminder"]};n("8f80");D.render=T,D.__scopeId="data-v-725920b6";var P=D,R={id:"new-task-modal",class:"uk-flex-top","uk-modal":""},$={class:"uk-modal-dialog uk-margin-auto-vertical"},B=Object(a["f"])("div",{class:"uk-modal-header uk-background-primary uk-light"},[Object(a["f"])("h3",null,"New Task")],-1),H={class:"uk-modal-body"},U={class:"uk-margin"},V=Object(a["f"])("label",{class:"uk-form-label"},"Task",-1),q={class:"uk-margin"},G=Object(a["f"])("label",{class:"uk-form-label"},"Day & Time",-1),I={class:"uk-margin"},J={class:"uk-form-label"},E=Object(a["f"])("span",{class:"uk-margin-small-left"},"Set Reminder",-1),N=Object(a["f"])("div",{class:"uk-modal-footer uk-flex uk-flex-between uk-background-muted"},[Object(a["f"])("button",{type:"button",class:"uk-button uk-button-default uk-modal-close"},"Cancel"),Object(a["f"])("button",{type:"submit",form:"new-task-form",value:"save_task",class:"uk-button uk-button-primary"}," Save Task ")],-1);function z(e,t){return Object(a["g"])(),Object(a["c"])("div",R,[Object(a["f"])("div",$,[B,Object(a["f"])("div",H,[Object(a["f"])("form",{onSubmit:t[4]||(t[4]=function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),id:"new-task-form",class:"uk-form uk-form-stacked uk-margin-remove"},[Object(a["f"])("div",U,[V,Object(a["o"])(Object(a["f"])("input",{class:"uk-input",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.text=t}),name:"text",placeholder:"Add Task"},null,512),[[a["n"],e.text]])]),Object(a["f"])("div",q,[G,Object(a["o"])(Object(a["f"])("input",{class:"uk-input",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.day=t}),name:"day",placeholder:"Add Day & Time"},null,512),[[a["n"],e.day]])]),Object(a["f"])("div",I,[Object(a["f"])("label",J,[Object(a["o"])(Object(a["f"])("input",{class:"uk-checkbox",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.reminder=t}),name:"reminder"},null,512),[[a["m"],e.reminder]]),E])])],32)]),N])])}var F={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e4*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t);var n=document.querySelector("#new-task-modal");l.a.modal(n).hide(),this.text="",this.day="",this.reminder=!1}else l.a.notification("Please add task text",{status:"danger",timeout:1500})}}};n("f0fb");F.render=z;var K=F;l.a.use(f.a);var L={name:"App",components:{Header:h,Tasks:P,AddTask:K},data:function(){return{tasks:[]}},methods:{addTask:function(e){this.tasks=[].concat(Object(s["a"])(this.tasks),[e])},deleteTask:function(e){var t=this;l.a.modal.confirm("<h3>Are you sure?</h3>").then((function(){t.tasks=t.tasks.filter((function(t){return t.id!==e}))}),(function(){console.log("cancaled")}))},toggleReminder:function(e){this.tasks=this.tasks.map((function(t){return t.id===e?Object(u["a"])(Object(u["a"])({},t),{},{reminder:!t.reminder}):t}))}},created:function(){this.tasks=[{id:1,text:"Go to Sofia",day:"May 15 at 8:00am",reminder:!1},{id:2,text:"Hug Eevryone",day:"May 15 at 11:00am",reminder:!0},{id:3,text:"Go Back to Serbia",day:"May 16 at 20:00pm",reminder:!1}]}};n("ac09");L.render=o;var Q=L;Object(a["b"])(Q).mount("#app")},"8f80":function(e,t,n){"use strict";n("3590")},ac09:function(e,t,n){"use strict";n("380a")},ad99:function(e,t,n){"use strict";n("e4fd")},d5e5:function(e,t,n){"use strict";n("3796")},e4fd:function(e,t,n){},f0fb:function(e,t,n){"use strict";n("4523")}});
//# sourceMappingURL=app.9d87f672.js.map
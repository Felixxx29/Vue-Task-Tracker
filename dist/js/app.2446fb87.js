(function(e){function t(t){for(var r,c,d=t[0],s=t[1],i=t[2],u=0,b=[];u<d.length;u++)c=d[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,d=1;d<n.length;d++){var s=n[d];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2233:function(e,t,n){"use strict";n("f0a5")},"23e4":function(e,t,n){},"422e":function(e,t,n){"use strict";n("23e4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"},o={key:0};function c(e,t,n,c,d,s){var i=Object(r["w"])("Header"),l=Object(r["w"])("AddTask"),u=Object(r["w"])("Tasks");return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])(i,{onBtnClick:s.toggleAddTask,title:"Task Tracker",showAddTask:d.showAddTask},null,8,["onBtnClick","showAddTask"]),d.showAddTask?(Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])(l,{onAddTask:s.addTask},null,8,["onAddTask"])])):Object(r["e"])("",!0),Object(r["g"])(u,{onToggleReminder:s.toggleReminder,onDeleteTask:s.deleteTask,tasks:d.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var d=n("5530"),s=n("2909"),i=(n("99af"),n("4de4"),n("d81d"),Object(r["E"])("data-v-048afa8d")),l=i((function(e,t,n,a,o,c){var d=Object(r["w"])("Button");return Object(r["p"])(),Object(r["d"])("header",null,[Object(r["g"])("h1",null,Object(r["y"])(n.title),1),Object(r["g"])(d,{onBtnClick:t[1]||(t[1]=function(t){return e.$emit("btn-click")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"#127779":"green"},null,8,["text","color"])])})),u=Object(r["E"])("data-v-8698b6ce"),b=u((function(e,t,n,a,o,c){return Object(r["p"])(),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(e){return c.onClick()}),style:{background:n.color},class:"btn"},Object(r["y"])(n.text),5)})),f={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};f.render=b,f.__scopeId="data-v-8698b6ce";var p=f,k={name:"Header",components:{Button:p},props:{title:String,showAddTask:Boolean}};n("73dd");k.render=l,k.__scopeId="data-v-048afa8d";var m=k,O=Object(r["E"])("data-v-405db66e"),j=O((function(e,t,n,a,o,c){var d=Object(r["w"])("Task");return Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.tasks,(function(t){return Object(r["p"])(),Object(r["d"])("div",{key:t.id},[Object(r["g"])(d,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)})),h=Object(r["E"])("data-v-9e66b980"),g=h((function(e,t,n,a,o,c){return Object(r["p"])(),Object(r["d"])("div",{onDblclick:t[2]||(t[2]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:[n.task.reminder?"reminder":"","task"]},[Object(r["g"])("h3",null,[Object(r["f"])(Object(r["y"])(n.task.text)+" ",1),Object(r["g"])("i",{onClick:t[1]||(t[1]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["g"])("p",null,Object(r["y"])(n.task.day),1)],34)})),v={name:"Task",props:{task:Object}};n("8a00");v.render=g,v.__scopeId="data-v-9e66b980";var y=v,T={name:"Tasks",components:{Task:y},props:{tasks:Array},emits:["delete-task","toggle-reminder"]};T.render=j,T.__scopeId="data-v-405db66e";var w=T,x=Object(r["E"])("data-v-168c0bba");Object(r["s"])("data-v-168c0bba");var A={class:"form-control"},S=Object(r["g"])("label",null,"Task",-1),_={class:"form-control"},D=Object(r["g"])("label",null,"Day & Time",-1),M={class:"form-control form-control-check"},B=Object(r["g"])("label",null,"Set Reminder",-1),C=Object(r["g"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1);Object(r["q"])();var P=x((function(e,t,n,a,o,c){return Object(r["p"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["g"])("div",A,[S,Object(r["D"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["B"],o.text]])]),Object(r["g"])("div",_,[D,Object(r["D"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.day=e}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["B"],o.day]])]),Object(r["g"])("div",M,[B,Object(r["D"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.reminder=e}),name:"reminder"},null,512),[[r["A"],o.reminder]])]),C],32)})),R={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("422e");R.render=P,R.__scopeId="data-v-168c0bba";var $=R,E={name:"App",components:{Header:m,Tasks:w,AddTask:$},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(e){this.tasks=[].concat(Object(s["a"])(this.tasks),[e])},deleteTask:function(e){confirm("Are you sure?")&&(this.tasks=this.tasks.filter((function(t){return t.id!==e})))},toggleReminder:function(e){this.tasks=this.tasks.map((function(t){return t.id===e?Object(d["a"])(Object(d["a"])({},t),{},{reminder:!t.reminder}):t}))}},created:function(){this.tasks=[{id:1,text:"Doctors Appointment",day:"March 1st at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"March 3rd at 1:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"March 3rd at 11:00am",reminder:!0}]}};n("2233");E.render=c;var I=E,H=n("6c02"),U=[],V=Object(H["a"])({history:Object(H["b"])("/"),routes:U}),J=V;Object(r["c"])(I).use(J).mount("#app")},"73dd":function(e,t,n){"use strict";n("e8fa")},"8a00":function(e,t,n){"use strict";n("cd3c")},cd3c:function(e,t,n){},e8fa:function(e,t,n){},f0a5:function(e,t,n){}});
//# sourceMappingURL=app.2446fb87.js.map
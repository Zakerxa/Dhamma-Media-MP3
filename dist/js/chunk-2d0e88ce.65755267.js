(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e88ce"],{"8a6e":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-center pt-2"},[i("div",{staticClass:"col-9 text-center pr-0"},[i("b-form-input",{staticClass:"my-2",staticStyle:{height:"40px"},attrs:{size:"sm",placeholder:"တရားခေါင်းစဥ် နာမည် ဖြင့်ရှာမည်"},on:{keydown:function(s){return t.search()}},model:{value:t.title,callback:function(s){t.title=s},expression:"title"}})],1),i("div",{staticClass:"col-2 text-center pl-2 pr-0"},[i("b-button",{staticClass:"my-2 pl-4 pr-4 bg-info",staticStyle:{height:"40px"},attrs:{size:"sm"},on:{click:function(s){return t.search()}}},[i("i",{staticClass:"fa fa-search"})])],1),i("div",{staticClass:"col-1"})]),i("div",{staticClass:"row justify-content-center pb-5 p-1"},[i("div",{staticClass:"col p-2 pt-4 text-center"},[i("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.main.name)+" "+t._s(t.main.title))])]),i("div",{staticClass:"col-12 text-center pt-2"},[i("h5",[t._v("( တရားခေါင်းစဥ်များ "),i("span",{staticClass:"badge badge-success"},[t._v(t._s(t.section.length))]),t._v(" )")])]),t._l(t.section,(function(s,e){return i("router-link",{key:e,staticClass:"col-12 col-md-6 col-lg-5 offset-lg-1 card bg-light text-dark mt-3 shadow",staticStyle:{"text-decoration":"none","min-height":"100px","letter-spacing":"1px"},attrs:{to:"path?id="+t.id+"&title="+(e+1)}},[i("div",{staticClass:"row d-flex align-items-center justify-content-center",staticStyle:{"min-height":"10vh"}},[i("div",{staticClass:"col-4 p-0",staticStyle:{"min-height":"100px"}},[i("img",{staticClass:"w-100",attrs:{src:t.main.img,alt:""}})]),i("div",{staticClass:"col-8"},[i("b",[t._v(t._s(s.title))])])])])}))],2)])},a=[],c={name:"view",data(){return{main:[],section:[],id:null,title:""}},methods:{search(){i("4d75");const t=this.main;this.section=t.dhamma.filter(t=>t.title.includes(this.title))}},mounted(){const t=i("4d75");this.id=this.$route.query.id,this.main=t.mp3.find(t=>t.id==this.id);const s=this.main;this.section=s.dhamma.map(t=>t)}},n=c,l=i("2877"),o=Object(l["a"])(n,e,a,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e88ce.65755267.js.map
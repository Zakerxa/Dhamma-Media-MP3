(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7ea9076"],{"22f7":function(t,i,e){"use strict";e("38f3")},"38f3":function(t,i,e){},"637b":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center pt-2"},[e("div",{staticClass:"col-9 text-center pr-0"},[e("b-form-input",{staticClass:"my-2",staticStyle:{height:"40px"},attrs:{size:"sm",placeholder:"တရားနာမည် ဖြင့်ရှာမည်"},on:{keydown:function(i){return t.search()}},model:{value:t.title,callback:function(i){t.title=i},expression:"title"}})],1),e("div",{staticClass:"col-2 text-center pl-2 pr-0"},[e("b-button",{staticClass:"my-2 pl-4 pr-4 bg-info",staticStyle:{height:"40px"},attrs:{size:"sm"},on:{click:function(i){return t.search()}}},[e("i",{staticClass:"fa fa-search"})])],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row justify-content-center pb-5 p-2"},[e("div",{staticClass:"col-12 pt-4 pb-3"},[e("h5",{staticClass:"font-weigh-bold mb-0"},[t._v(t._s(t.path.title))])]),e("div",{staticClass:"col-12 text-center pt-2"},[e("h5",[t._v(" ( စုစုပေါင်း အရေအတွက် "),e("span",{staticClass:"badge badge-success"},[t._v(t._s(t.playlist.length))]),t._v(" ) ")])]),t._l(t.playlist,(function(i,s){return e("div",{key:s,staticClass:"col-12 col-md-5 offset-md-1 col-lg-3 card bg  mt-3 shadow pt-2 pb-2",staticStyle:{"border-radius":"15px","text-decoration":"none"},on:{click:function(i){return t.player(s)}}},[e("div",{staticClass:"row d-flex align-items-center justify-content-center",staticStyle:{"min-height":"10vh"}},[t._m(0,!0),e("div",{staticClass:"col-10 col-md-9"},[e("p",{staticClass:"m-0 text-dark"},[t._v(t._s(i.title))])])])])}))],2),e("div",{directives:[{name:"show",rawName:"v-show",value:t.playpopup,expression:"playpopup"}],staticClass:"audio-player row m-0 position-fixed w-100",staticStyle:{"z-index":"9999",bottom:"-2px",left:"0"}},[e("div",{staticClass:"name col-12 w-100 pl-2 mt-1 pt-2 position-relative",staticStyle:{"z-index":"0"}},[e("marquee",{attrs:{direction:"left",truespeed:"10"}},[t._v(" "+t._s(t.mp3.title))])],1),t._m(1),e("div",{staticClass:"controls pb-2"},[e("audio",{staticStyle:{width:"100%"},attrs:{id:"audio",autoplay:""}},[t._l(t.playlist,(function(i,s){return e("source",{key:s,attrs:{src:t.mp3.url,type:"audio/"+t.mp3.type,"data-track-number":s+1}})})),t._v(" Your browser does not support the audio tag. ")],2),t._m(2),e("div",{staticClass:"play-container position-absolute w-100 pr-4 pt-1 mt-2"},[e("div",{staticClass:"mr-4 pt-1"},[e("i",{staticClass:"fas fa-backward",on:{click:function(i){return t.backward()}}})]),e("div",{on:{click:function(i){return t.playbtn()}}},[e("i",{staticClass:"fas pt-2",class:{"fa-pause":t.play,"fa-play":t.pause}})]),e("div",{staticClass:"ml-4 pt-1"},[e("i",{staticClass:"fas fa-forward",on:{click:function(i){return t.forward()}}})])]),e("div",{staticClass:"volume-container pt-1 pr-3"},[e("div",{staticClass:"fas volume-button",class:{"fa-volume-up":t.up,"fa-volume-mute":t.mute},on:{click:function(i){return t.volume()}}})])])])])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"text-center col-2 col-md-3 d-flex align-items-center"},[s("img",{staticClass:"w-100 pt-2",attrs:{src:e("ae0b"),alt:""}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"timeline mt-4 pt-2"},[e("input",{staticClass:"w-100 progress col-12 p-0 m-0",staticStyle:{opacity:"0.8",height:"4px"},attrs:{id:"seekslider",type:"range",min:"1",max:"100",value:"0"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"time pt-1",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"current"},[t._v("0:00")]),e("div",{staticClass:"divider"},[t._v("/")]),e("div",{staticClass:"length"})])}],l=(/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),{name:"path",data(){return{path:[],id:null,titleid:null,title:"",main:[],playlist:[],mp3:[],audioPlayer:"",audio:"",up:!0,mute:!1,play:!0,pause:!1,playpopup:!1,yit:""}},methods:{search(){e("4d75");const t=this.path;this.playlist=t.source.filter(t=>t.title.includes(this.title))},player(t){this.audio=document.getElementById("audio"),this.playpopup=!0,this.mp3=this.path.source[t],this.audio.load(),this.yit=t},playbtn(){this.seekslider.value=0,this.audio.paused?(this.audio.play(),this.play=!0,this.pause=!1):(this.audio.pause(),this.play=!1,this.pause=!0)},backward(){this.yit>0?this.player(this.yit-1):console.log("Can't Back")},forward(){this.yit<this.playlist.length-1?this.player(this.yit+1):console.log("Can't Next")},volume(){this.audioPlayer.querySelector(".volume-container .volume");this.audio.muted=!this.audio.muted,this.audio.muted?(this.up=!1,this.mute=!0):(this.up=!0,this.mute=!1)},audioSeek(){var t=this.audio.duration*(this.seekslider.value/100);this.audio.currentTime=t},audiotime(){const t=this.audio.currentTime*(100/this.audio.duration);this.seekslider.value=t}},mounted(){const t=e("4d75");this.id=this.$route.query.id,this.titleid=this.$route.query.title;const i=t.mp3.find(t=>t.id==this.id);function s(t){let i=parseInt(t),e=parseInt(i/60);i-=60*e;const s=parseInt(e/60);return e-=60*s,0===s?`${e}:${String(i%60).padStart(2,0)}`:`${String(s).padStart(2,0)}:${e}:${String(i%60).padStart(2,0)}`}this.path=i.dhamma.find(t=>t.id==this.titleid),this.playlist=this.path.source,this.audio=document.getElementById("audio"),this.audioPlayer=document.querySelector(".audio-player"),this.seekslider=document.getElementById("seekslider"),this.seekslider.addEventListener("change",this.audioSeek,!1),this.audio.addEventListener("timeupdate",this.audiotime,!1),console.dir(this.audio),this.audio.addEventListener("loadeddata",()=>{this.audioPlayer.querySelector(".time .length").textContent=s(this.audio.duration)},!1),setInterval(()=>{const t=this.audioPlayer.querySelector(".progress");t.style.width=this.audio.currentTime/this.audio.duration*100+"%",this.audioPlayer.querySelector(".time .current").textContent=s(this.audio.currentTime)},500)}}),o=l,r=(e("22f7"),e("2877")),n=Object(r["a"])(o,s,a,!1,null,null,null);i["default"]=n.exports},ae0b:function(t,i,e){t.exports=e.p+"img/symbol.b8a78612.png"}}]);
//# sourceMappingURL=chunk-c7ea9076.0371dc83.js.map
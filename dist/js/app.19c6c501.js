(function(){"use strict";var e={2206:function(e,t,r){var a=r(9242),s=r(3396);function o(e,t){const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(r)}var i=r(89);const m={},n=(0,i.Z)(m,[["render",o]]);var l=n,c=r(2483);const d=(0,s._)("h1",{class:"form__title"},"Заполните анкету",-1);function u(e,t,r,o,i,m){const n=(0,s.up)("NameItem"),l=(0,s.up)("AgeItem"),c=(0,s.up)("EmailItem"),u=(0,s.up)("Data-item"),h=(0,s.up)("AdressItem"),p=(0,s.up)("TimeItem");return(0,s.wg)(),(0,s.iD)(s.HY,null,[d,(0,s._)("form",{action:"#",class:"form__container",onSubmit:t[1]||(t[1]=(0,a.iM)(((...t)=>e.onSubmit&&e.onSubmit(...t)),["prevent"]))},[(0,s.Wm)(n),(0,s.Wm)(l),(0,s.Wm)(c),(0,s.Wm)(u),(0,s.Wm)(h),(0,s.Wm)(p),(0,s._)("button",{class:"button",onClick:t[0]||(t[0]=(...e)=>m.checkForm&&m.checkForm(...e))}," Записаться ")],32)],64)}var h=r(7139);const p={class:"form__item"},_=(0,s._)("label",{for:"name",class:"form__text"},[(0,s.Uk)(" ФИО "),(0,s._)("span",{class:"necessarily"}," * ")],-1);function g(e,t,r,o,i,m){return(0,s.wg)(),(0,s.iD)("div",p,[_,(0,s.wy)((0,s._)("input",{class:(0,h.C_)(["form__field",{error:e.error}]),id:"name",type:"text",placeholder:"Фамилия, имя, отчество(при наличии)","onUpdate:modelValue":t[0]||(t[0]=e=>i.name=e),onChange:t[1]||(t[1]=e=>m.checkName(i.name))},null,34),[[a.nr,i.name,void 0,{trim:!0}]]),(0,s.wy)((0,s._)("span",{class:"form__error"},(0,h.zw)(i.errorMessage),513),[[a.F8,e.error]])])}var f=r(65),v={name:"name-item",data(){return{name:"",errorMessage:"Ошибка"}},methods:{checkName(e){const t=/^[а-яА-ЯёЁa-zA-Z]+\s+[а-яА-ЯёЁa-zA-Z]/,r=t.test(String(e));r?this.pleaseSetName(e):this.pleaseShowNameError()},...(0,f.nv)({pleaseSetName:"nameItem/pleaseSetName",pleaseShowNameError:"nameItem/pleaseShowNameError"})},computed:{...(0,f.rn)("nameItem",{error:e=>e.nameError})}};const w=(0,i.Z)(v,[["render",g]]);var E=w;const S={class:"form__item"},y=(0,s._)("label",{class:"form__text",for:"age"},[(0,s.Uk)(" Возраст "),(0,s._)("span",{class:"necessarily"}," * ")],-1);function I(e,t,r,o,i,m){return(0,s.wg)(),(0,s.iD)("div",S,[y,(0,s.wy)((0,s._)("input",{class:(0,h.C_)(["form__field",{error:e.error}]),id:"age",type:"number",placeholder:"Возраст","onUpdate:modelValue":t[0]||(t[0]=e=>i.age=e),onChange:t[1]||(t[1]=e=>m.checkAge(i.age))},null,34),[[a.nr,i.age,void 0,{number:!0}]]),(0,s.wy)((0,s._)("span",{class:"form__error"},(0,h.zw)(i.errorMessage),513),[[a.F8,e.error]])])}var D={name:"age-item",data(){return{age:"",errorMessage:"Ошибка"}},methods:{checkAge(e){0<=e&&e<=150?this.pleaseSetAge(e):this.pleaseShowAgeError()},...(0,f.nv)({pleaseSetAge:"ageItem/pleaseSetAge",pleaseShowAgeError:"ageItem/pleaseShowAgeError"})},computed:{...(0,f.rn)("ageItem",{error:e=>e.ageError})}};const k=(0,i.Z)(D,[["render",I]]);var A=k;const b={class:"form__item"},C=(0,s._)("label",{for:"email",class:"form__text"},[(0,s.Uk)(" Email "),(0,s._)("span",{class:"necessarily"}," * ")],-1);function T(e,t,r,o,i,m){return(0,s.wg)(),(0,s.iD)("div",b,[C,(0,s.wy)((0,s._)("input",{class:(0,h.C_)(["form__field",{error:e.error}]),id:"email",type:"email",placeholder:"E-mail","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),onChange:t[1]||(t[1]=e=>m.checkEmail(i.email))},null,34),[[a.nr,i.email,void 0,{trim:!0}]]),(0,s.wy)((0,s._)("span",{class:"form__error"},(0,h.zw)(i.errorMessage),513),[[a.F8,e.error]])])}var x={name:"email-item",data(){return{email:"",errorMessage:"Ошибка"}},methods:{checkEmail(e){const t=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,r=t.test(String(e).toLowerCase());r?this.pleaseSetEmail(e):this.pleaseShowEmailError()},...(0,f.nv)({pleaseSetEmail:"emailItem/pleaseSetEmail",pleaseShowEmailError:"emailItem/pleaseShowEmailError"})},computed:{...(0,f.rn)("emailItem",{error:e=>e.emailError})}};const F=(0,i.Z)(x,[["render",T]]);var M=F;const N={class:"form__item"},V=(0,s._)("label",{class:"form__text",for:"date"},[(0,s.Uk)(" Дата "),(0,s._)("span",{class:"necessarily"}," * ")],-1);function z(e,t,r,o,i,m){return(0,s.wg)(),(0,s.iD)("div",N,[V,(0,s.wy)((0,s._)("input",{class:(0,h.C_)(["form__field",{error:e.error}]),id:"date",type:"date","onUpdate:modelValue":t[0]||(t[0]=e=>i.date=e),onChange:t[1]||(t[1]=e=>m.checkDate(i.date))},null,34),[[a.nr,i.date,void 0,{trim:!0}]]),(0,s.wy)((0,s._)("span",{class:"form__error"},(0,h.zw)(i.errorMessage),513),[[a.F8,e.error]])])}var L={name:"date-item",data(){return{date:null,errorMessage:"Ошибка",today:null,nextMonth:null}},methods:{checkDate(e){const t=new Date(e),r=this.today.toLocaleDateString()===t.toLocaleDateString();r||this.today<t&&t<this.nextMonth?this.pleaseSetDate(t.toLocaleDateString()):this.pleaseShowDateError()},...(0,f.nv)({pleaseSetDate:"dateItem/pleaseSetDate",pleaseShowDateError:"dateItem/pleaseShowDateError"})},computed:{...(0,f.rn)("dateItem",{error:e=>e.dateError})},mounted(){this.today=new Date;const e=new Date;this.nextMonth=new Date(e.setMonth(e.getMonth()+1))}};const O=(0,i.Z)(L,[["render",z]]);var j=O;const U={class:"form__item list"},Z=(0,s._)("label",{class:"form__text",for:"adress"}," Адрес ",-1),W={key:0,class:"list__wrapper"},H=["onClick"];function P(e,t,r,o,i,m){return(0,s.wg)(),(0,s.iD)("div",U,[Z,(0,s.wy)((0,s._)("input",{class:(0,h.C_)(["form__field",{error:e.error}]),id:"adress",type:"text",placeholder:"Город и улица","onUpdate:modelValue":t[0]||(t[0]=e=>i.adress=e),onKeyup:t[1]||(t[1]=e=>m.checkCity(i.adress))},null,34),[[a.nr,i.adress]]),i.showList?((0,s.wg)(),(0,s.iD)("div",W,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.items,(e=>((0,s.wg)(),(0,s.iD)("div",{onClick:t=>m.checkAdress(e.value,e.data.street),class:"list__item",key:e.id},(0,h.zw)(e.value),9,H)))),128))])):(0,s.kq)("",!0),(0,s.wy)((0,s._)("span",{class:"form__error"},(0,h.zw)(i.errorMessage),513),[[a.F8,e.error]])])}var Y={name:"adress-item",data(){return{adress:"",errorMessage:"Ошибка",items:[],showList:!1}},methods:{checkAdress(e,t){this.adress=e,t?this.pleaseSetAdress(e):this.pleaseShowAdressError(),this.showList=!1},async checkCity(e){const t="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",r="d3ad8ae62a7f264b0be02696b72d549b2ed31f38";let a=e,s={method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token "+r},body:JSON.stringify({query:a})};this.showList=!0;try{this.items=await fetch(t,s).then((e=>e.json())).then((e=>e.suggestions))}catch(o){throw o}},...(0,f.nv)({pleaseSetAdress:"adressItem/pleaseSetAdress",pleaseShowAdressError:"adressItem/pleaseShowAdressError"})},computed:{...(0,f.rn)("adressItem",{error:e=>e.adressError})}};const K=(0,i.Z)(Y,[["render",P]]);var q=K;const J={class:"form__item"},$=(0,s._)("label",{for:"time",class:"form__text"},[(0,s.Uk)(" Время "),(0,s._)("span",{class:"necessarily"}," * ")],-1),R=["value"];function B(e,t,r,o,i,m){return(0,s.wg)(),(0,s.iD)("div",J,[$,(0,s.wy)((0,s._)("select",{name:"time",id:"time",class:(0,h.C_)(["form__field",{error:e.error}]),onClick:t[0]||(t[0]=(...e)=>m.chosenTime&&m.chosenTime(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>i.time=e)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.items,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,value:e.value},(0,h.zw)(e.value),9,R)))),128))],2),[[a.bM,i.time]]),(0,s.wy)((0,s._)("span",{class:"form__error"},(0,h.zw)(i.errorMessage),513),[[a.F8,e.error]])])}var G={name:"time-item",data(){return{time:"",errorMessage:"Ошибка",items:null}},methods:{chosenTime(){const e=/^[0-9]/,t=e.test(String(this.time).toLowerCase());t&&this.pleaseSetTime(this.time)},...(0,f.nv)({pleaseSetTime:"timeItem/pleaseSetTime",pleaseShowTimeError:"timeItem/pleaseShowTimeError"})},computed:{...(0,f.rn)("timeItem",{error:e=>e.timeError,timeData:e=>e.timeData})},mounted(){this.items=this.timeData}};const Q=(0,i.Z)(G,[["render",B]]);var X=Q,ee={name:"Home",components:{NameItem:E,AgeItem:A,EmailItem:M,DataItem:j,AdressItem:q,TimeItem:X},data(){return{}},methods:{...(0,f.nv)({pleaseCheckForm:"pleaseCheckForm"}),checkForm(){this.pleaseCheckForm(),this.validForm&&this.$router.push("/result")}},computed:{...(0,f.rn)({validForm:e=>e.validForm})}};const te=(0,i.Z)(ee,[["render",u]]);var re=te;const ae=(0,s._)("h1",{class:"form__title"}," Проверьте данные ",-1),se={class:"form__item"},oe=(0,s._)("span",{class:"form__text"}," ФИО ",-1),ie={class:"form__field"},me={class:"form__item"},ne=(0,s._)("span",{class:"form__text"}," Возраст ",-1),le={class:"form__field"},ce={class:"form__item"},de=(0,s._)("span",{class:"form__text"}," Email ",-1),ue={class:"form__field"},he={class:"form__item"},pe=(0,s._)("span",{class:"form__text"}," Дата ",-1),_e={class:"form__field"},ge={class:"form__item"},fe=(0,s._)("span",{class:"form__text"}," Адрес ",-1),ve={class:"form__field"},we={class:"form__item"},Ee=(0,s._)("span",{class:"form__text"}," Время ",-1),Se={class:"form__field"},ye=(0,s._)("button",{class:"button"}," Назад ",-1);function Ie(e,t,r,a,o,i){const m=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[ae,(0,s._)("div",se,[oe,(0,s._)("span",ie,(0,h.zw)(e.name),1)]),(0,s._)("div",me,[ne,(0,s._)("span",le,(0,h.zw)(e.age),1)]),(0,s._)("div",ce,[de,(0,s._)("span",ue,(0,h.zw)(e.email),1)]),(0,s._)("div",he,[pe,(0,s._)("span",_e,(0,h.zw)(e.date),1)]),(0,s._)("div",ge,[fe,(0,s._)("span",ve,(0,h.zw)(e.adress),1)]),(0,s._)("div",we,[Ee,(0,s._)("span",Se,(0,h.zw)(e.time),1)]),(0,s.Wm)(m,{to:"/"},{default:(0,s.w5)((()=>[ye])),_:1})],64)}var De={name:"Result",computed:{...(0,f.rn)("nameItem",{name:e=>e.name}),...(0,f.rn)("ageItem",{age:e=>e.age}),...(0,f.rn)("emailItem",{email:e=>e.email}),...(0,f.rn)("dateItem",{date:e=>e.date}),...(0,f.rn)("adressItem",{adress:e=>e.adress}),...(0,f.rn)("timeItem",{time:e=>e.time})}};const ke=(0,i.Z)(De,[["render",Ie]]);var Ae=ke;const be=[{path:"/",name:"home",component:re},{path:"/result",name:"result",component:Ae}],Ce=(0,c.p7)({history:(0,c.PO)("/"),routes:be});var Te=Ce,xe={namespaced:!0,root:!0,state:()=>({name:null,nameError:!1}),mutations:{setName(e,t){e.name=t,e.nameError=!1},nameError(e){e.nameError=!0,e.name=null}},actions:{async pleaseSetName({commit:e},t){const r=await this.dispatch("transformToLatinWords",t);this.dispatch("changeValidName",!0),e("setName",r)},pleaseShowNameError({commit:e}){this.dispatch("changeValidName",!1),e("nameError")}},getters:{}},Fe={namespaced:!0,state:()=>({age:null,ageError:!1}),mutations:{setAge(e,t){e.age=t,e.ageError=!1},ageError(e){e.ageError=!0,e.age=null}},actions:{pleaseSetAge({commit:e},t){this.dispatch("changeValidAge",!0),e("setAge",t)},pleaseShowAgeError({commit:e}){this.dispatch("changeValidAge",!1),e("ageError")}},getters:{}},Me={namespaced:!0,state:()=>({email:null,emailError:!1}),mutations:{setEmail(e,t){e.email=t,e.emailError=!1},emailError(e){e.emailError=!0,e.email=null}},actions:{pleaseSetEmail({commit:e},t){this.dispatch("changeValidEmail",!0),e("setEmail",t)},pleaseShowEmailError({commit:e}){this.dispatch("changeValidEmail",!1),e("emailError")}},getters:{}},Ne={namespaced:!0,state:()=>({date:null,dateError:!1}),mutations:{setDate(e,t){e.date=t,e.dateError=!1},dateError(e){e.dateError=!0,e.date=null}},actions:{pleaseSetDate({commit:e},t){this.dispatch("changeValidDate",!0),e("setDate",t)},pleaseShowDateError({commit:e}){this.dispatch("changeValidDate",!1),e("dateError")}},getters:{}},Ve={namespaced:!0,state:()=>({adress:null,adressError:!1}),mutations:{setAdress(e,t){e.adress=t,e.adressError=!1},adressError(e){e.adressError=!0,e.adress=null}},actions:{async pleaseSetAdress({commit:e},t){const r=await this.dispatch("transformToLatinWords",t);e("setAdress",r)},pleaseShowAdressError({commit:e}){e("adressError")}},getters:{}},ze=JSON.parse('[{"id":0,"value":"09:00-10:00"},{"id":1,"value":"10:00-11:00"},{"id":2,"value":"11:00-12:00"},{"id":3,"value":"12:00-13:00"},{"id":4,"value":"13:00-14:00"},{"id":5,"value":"14:00-15:00"},{"id":6,"value":"15:00-16:00"},{"id":7,"value":"16:00-17:00"},{"id":8,"value":"17:00-18:00"}]'),Le={namespaced:!0,state:()=>({time:null,timeError:!1,timeData:ze}),mutations:{setTime(e,t){e.time=t,e.timeError=!1},timeError(e){e.timeError=!0,e.time=null}},actions:{pleaseSetTime({commit:e},t){this.dispatch("changeValidTime",!0),e("setTime",t)},pleaseShowTimeError({commit:e}){this.dispatch("changeValidTime",!1),e("timeError")}},getters:{}},Oe=(0,f.MT)({modules:{nameItem:xe,ageItem:Fe,emailItem:Me,dateItem:Ne,adressItem:Ve,timeItem:Le},state:{name:!1,age:!1,email:!1,date:!1,time:!1,validForm:!1},mutations:{validForm(e){e.validForm=!0},validName(e,t){e.name=t},validAge(e,t){e.age=t},validEmail(e,t){e.email=t},validDate(e,t){e.date=t},validTime(e,t){e.time=t}},actions:{changeValidName({commit:e},t){e("validName",t)},changeValidAge({commit:e},t){e("validAge",t)},changeValidEmail({commit:e},t){e("validEmail",t)},changeValidDate({commit:e},t){e("validDate",t)},changeValidTime({commit:e},t){e("validTime",t)},transformToLatinWords({commit:e},t){let r={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"j","з":"z","и":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"kh","ц":"c","ч":"ch","ш":"sh","щ":"shch","ы":"y","э":"e","ю":"u","я":"ya","ъ":"ie","ь":"","й":"y"};return[...t].map((e=>{let t=r[e.toLocaleLowerCase()];return e!==e.toLocaleLowerCase()?t=t.charAt(0).toLocaleUpperCase()+t.slice(1):void 0===t&&(t=e),t})).join("")},pleaseCheckForm({commit:e}){this.state.name||e("nameItem/nameError"),this.state.age||e("ageItem/ageError"),this.state.email||e("emailItem/emailError"),this.state.date||e("dateItem/dateError"),this.state.time||e("timeItem/timeError"),this.state.name&&this.state.age&&this.state.email&&this.state.date&&this.state.time&&e("validForm")}}});(0,a.ri)(l).use(Oe).use(Te).mount("#app")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],o=e[c][2];for(var m=!0,n=0;n<a.length;n++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[n])}))?a.splice(n--,1):(m=!1,o<i&&(i=o));if(m){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,s,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,i=a[0],m=a[1],n=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in m)r.o(m,s)&&(r.m[s]=m[s]);if(n)var c=n(r)}for(t&&t(a);l<i.length;l++)o=i[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},a=self["webpackChunkrospotrebnadzor"]=self["webpackChunkrospotrebnadzor"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(2206)}));a=r.O(a)})();
//# sourceMappingURL=app.19c6c501.js.map
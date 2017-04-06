//vue.js application test script
//alert("Ive loaded");

Vue.component('error',{props:['error'],template:"<div style='margin:.25em auto;'>{{error.text}}</div>"})
Vue.component('jumbotron',{props: ['title','subtitle'],template:'#jtron'})
Vue.component('alert',{props:['alerttitle','alertmsg','alerttype'],template:'#alerttempl'})

var viewmodel = new Vue({
  el: '#app',
  data:{
    errormgs: [
      {text: "I worked!"},
      {text: "This is cool"},
      {text: "It was worth the shoot out!"}
    ],
    // alerts:[],
    // newAlertObj: {
    //               alertTitle:'',
    //               alertMsg:'',
    //               alerttypeSuccess:false,
    //               alerttypeInfo:false,
    //               alerttypeWarn:false,
    //               alerttypeDanger:false,
    //               alerttypeDismiss:false,
    //               alerttypeAnimate:false,
    //               alerttypeLink:false,
    //               alertLinkUrl:'#'
    //             },
    alerttypeSuccess:true,
    alerttypeInfo:false,
    alerttypeWarn:false,
    alerttypeDanger:false,
    alerttype: '',
    alerttypevalue: 'alert-success',
    alerttitle:'',
    alertmsg:'',
    title:"",
    subtitle:""
  },
  method:{},
  computed:{
    alerttype: function(){
      if (this.alerttype === "success") {
        this.alerttypeSuccess = true
      }else if (this.alerttype === "info") {
        this.alerttypeInfo = true
      }else if (this.alerttype === "warn") {
        this.alerttypeWarn = true
      }else if (this.alerttype === "danger") {
        this.alerttypeDanger =true
      }else {
        return "alert-failed-processing";
      }
    }
  }
});

// Vue.component('jumbotron',{
//   props: ['title','subtitle'],
//   template:'#jtron'
// })

// var jumbo_tron = new Vue({
//   el:'#jmbTron',
//   data:{title:"Homepage",subtitle:"It Worked!"}
// })

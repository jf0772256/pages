//vue.js application test script
//alert("Ive loaded");

Vue.component('error',{props:['error'],template:"<p>{{error.text}}</p>"})

var viewmodel = new Vue({
  el: '#app',
  data:{
    errormgs: [
      {text: "I worked!"},
      {text: "This is cool"},
      {text: "It was worth the shoot out!"}
    ]
  },
  method:{}
});

Vue.component('jumbotron',{
  props: ['title','subtitle'],
  template:'#jtron'
})

var jumbo_tron = new Vue({
  el:'#jmbTron',
  data:{title:"Homepage",subtitle:"It Worked!"}
})

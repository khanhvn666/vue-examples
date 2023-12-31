import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  
  data () {
    return {
      stateOfBob: '--stateOfBob--Welcome to Your Vue.js App',
      test: 'tttttt',
    }
  },
  methods: {
    getUnits: function () {
      alert(333);
    }
  },
  mounted() {
    console.log("I'm mounted hook:", this.test );
    
  },
  //khanh - life cycle 
  //beforeCreate() {
  //   console.log("I'm beforeCreate hook");
  //   // console.log("Bob is currently ", this.stateOfBob);
  //   // console.log("computed hook is returning ", this.test);
  // },
  beforeMount() {
    console.log("I'm beforeMount ", this.test );
    this.getUnits()
  }, 
  beforeCreate() {
    console.log("I'm beforeCreate hook", this.test );
  
  },

})

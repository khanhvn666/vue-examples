import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  methods: {
    getUnits: function () {
      alert(333);
    }
  },
  beforeMount() {
    this.getUnits()
  }
})

import Vue from 'vue';

new Vue({
  el: '.vue-app',
  components: {
    'component': () => import('./page.vue')
  },
  data: {
    vue_data: "This data from 'main.js' vue"
  }
});
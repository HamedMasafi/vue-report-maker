<template>
  <div id="app">
    <Inputs :groups="groups" :model="model" />

<div class="d-print-none">
    <b-button variant="primary">چاپ</b-button>
    <b-button variant="outline-primary"><font-awesome-icon icon="save" />ذخیره</b-button>
    <b-button variant="outline-primary"><font-awesome-icon icon="folder-open" />گشودن</b-button>
</div>

    <Form1 :model="model" />

  {{model.name}}
  </div>
</template>

<script>
import Inputs from './components/Inputs.vue'
import Form1 from './components/Form1.vue'

import { groups, props, forms } from './data'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'

export default {
  name: 'app',
  data(){
      return{
        pages: ['a','b','c','d'],
        groups: groups,
        props: props,
        forms: forms,
        model: {
          a:3,
          name_full(){return this["name"] + " " + this["last_name"];}
        }
      }
  },
  components: {
    Inputs, Form1
  }
}

Vue.use(BootstrapVue)

</script>

<style>
@import 'http://cdn.font-store.ir/nazanin.css';
@import 'https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css';
</style>
<style>
#app {
  direction: rtl;
  font-family: 'nazanin';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

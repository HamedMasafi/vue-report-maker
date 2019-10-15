<template>
  <div id="app">
    <Inputs :groups="groups" :model="model" />

    <div class="d-print-none">
        <input type="file" style="display:none" id="openfile" />
        <b-button variant="primary" @click="print()"><font-awesome-icon icon="print" />چاپ</b-button>
        <b-button variant="outline-primary" @click="save()"><font-awesome-icon icon="save" />ذخیره</b-button>
        <b-button variant="outline-primary" @click="open()"><font-awesome-icon icon="folder-open" />گشودن</b-button>
    </div>

    <Form1 :model="model" />
    <DefenseLicense :model="model" />
    <Grade :model="model" dr="supervisor" />
    <Grade :model="model" dr="arbiter" />
    <Grade :model="model" dr="consultant" />

    <div style="direction:ltr">
    {{model}}
    </div>
  </div>
</template>

<script>
import Inputs from './components/Inputs.vue'
import Form1 from './components/Form1.vue'
import DefenseLicense from './components/DefenseLicense'
import Grade from './components/Grade'

import { groups, props, forms } from './data'
import { Settings, model } from './settings'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'

var settings = new Settings();

export default {
  name: 'app',
  data(){
      return{
        pages: ['a','b','c','d'],
        groups: groups,
        props: props,
        forms: forms,
        model: model
      }
  },
  methods: {
    print() {
      settings.save();
      window.print();
    }, 
    open() {
      settings.from_file();
    },
    save() {
      settings.to_file();
    }
  },
  components: {
    Inputs, Form1,
    DefenseLicense: () => import('./components/DefenseLicense'),
    Grade
  }
}

Vue.use(BootstrapVue)

settings.load();

</script>

<style>
@import 'http://cdn.font-store.ir/nazanin.css';
@import 'https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css';
@import 'assets/style.css'
</style>
<style>
#app {
  direction: rtl;
  font-family: 'nazanin';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.btn svg {
    vertical-align: middle;
    margin-left: 5px;
}
</style>

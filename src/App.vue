<template>
  <div id="app">
    <a class="d-print-none github-fork-ribbon left-top" href="https://github.com/HamedMasafi/vue-report-maker" 
        data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>

    <Inputs :groups="groups" :model="model" />

    <div class="d-print-none buttons">
        <input type="file" style="display:none" id="openfile" />
        <b-button pill variant="primary" @click="print()"><font-awesome-icon icon="print" />چاپ</b-button>
        <b-button pill variant="outline-primary" @click="save()"><font-awesome-icon icon="save" />ذخیره</b-button>
        <b-button pill variant="outline-primary" @click="open()"><font-awesome-icon icon="folder-open" />گشودن</b-button>
    </div>

    <Form12 :model="model" />
    <!-- <Form1 :model="model" /> -->
    <Form10 :model="model" />
    <DefenseLicense :model="model" />
    <Grade :model="model" dr="supervisor" />
    <Grade :model="model" dr="arbiter" />
    <Grade :model="model" dr="consultant" />
  </div>
</template>

<script>
import Inputs from './components/Inputs.vue'
import Form1 from './components/Form1.vue'
import Form10 from './components/Form10.vue'
import DefenseLicense from './components/DefenseLicense'
import Grade from './components/Grade'
import Form12 from './components/Form12'

import { groups, props, forms, components_info } from './data'
import { Settings, model } from './settings'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'

var settings = new Settings();

export default {
  name: 'app',
  data(){
      return{
        groups: groups,
        props: props,
        forms: forms,
        model: model,
        components_info: components_info
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
    Inputs
    , Form1, Form10,
    DefenseLicense,
    Form12,    
    Grade
  },
  // created(){
  //   this.components_info.forEach(function(ci){
  //     console.log("loading", ci);
  //     view.component(ci, () => import('./components/' + ci));
  //   })
  // }
}

Vue.use(BootstrapVue)

settings.load();

</script>

<style>
@import 'http://cdn.font-store.ir/nazanin.css';
@import 'https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css';
@import 'assets/style.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css';

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
.btn {
  margin: 10px;
}
</style>

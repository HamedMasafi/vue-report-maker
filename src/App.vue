<template>
  <v-app id="app">
    <v-navigation-drawer class="d-print-none"
        v-model="drawer"
        app right>
      <v-list subheader dense>
        <v-subheader inset>صفحات</v-subheader>

        <v-list-item @click="tab = index + 1" v-for="(group, index) in groups" :key="group.name">
          <v-list-item-icon>
            <v-icon>mdi-page-next-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{group.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-divider inset></v-divider>
        <v-subheader inset>بیشتر</v-subheader>

        <v-list-item @click="print">
            <v-list-item-icon>
            <v-icon>mdi-printer</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>چاپ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="save">
            <v-list-item-icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>ذخیره</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="open">
            <v-list-item-icon>
            <v-icon>mdi-cloud-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>گشودن</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="open">
            <v-list-item-icon>
            <v-icon>mdi-github-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>دریافت سورس</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer> 
     
    <v-app-bar
        class="d-print-none"
        color="deep-purple accent-4"
        dark
        flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>فرم‌ساز {{tab > 0 ? ' - ' + groups[tab - 1].title : ''}}</v-toolbar-title>

    <template v-slot:extension v-if="!drawer">

      <v-tabs v-model="tab">
        <v-tab>صفحه اصلی</v-tab>
        <v-tab v-for="group in groups" :key="group.name">{{group.title}}</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
  
  <v-content class="d-print-none">
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat color="basil">
          <Info />
        </v-card>
      </v-tab-item>
      <v-form lazy-validation>
        <v-tab-item
            v-for="group in groups"
            :key="group.name">
          <v-card flat color="basil">
            <v-row v-for="field in group.fields" :key="field.name">
              <v-col cols="2" v-if="field.type === 'person'">
                <v-select 
                    v-model="model[field.name + '_sex']" 
                    label="جنسیت" 
                    :items="[{text:'آقا',value:'male'},{text:'خانم',value:'female'}]" >
                </v-select>
              </v-col>
              <v-col cols="5"> 
                <v-text-field 
                    v-model="model[field.name]" 
                    :label="field.title + ' به فارسی'" 
                    required>
                </v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field 
                    v-model="model[field.name + '_en']" 
                    :label="field.title + ' به انگلیسی'" 
                    required 
                    v-if="field.tr">
                </v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-form>
    </v-tabs-items> 
      
    <v-btn color="blue" bottom
              fixed left dark fab @click="print" >
        <v-icon>mdi-printer</v-icon>
    </v-btn>
  </v-content>
  <!-- <v-layout column class="d-print-none fab-container">
      <v-btn color="pink" dark fab @click="save">
          <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <v-btn color="pink" dark fab @click="open">
          <v-icon>mdi-cloud-upload</v-icon>
      </v-btn>
  </v-layout> -->
    <a class="d-print-none github-fork-ribbon left-top fixed" href="https://github.com/HamedMasafi/vue-report-maker" 
        data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>

    <!-- <MainUI :groups="groups" /> -->
    <!-- <Inputs :groups="groups" :model="model" /> -->

    <!-- <div class="d-print-none buttons">
        <input type="file" style="display:none" id="openfile" />
        <b-button pill variant="primary" @click="print()"><font-awesome-icon icon="print" />چاپ</b-button>
        <b-button pill variant="outline-primary" @click="save()"><font-awesome-icon icon="save" />ذخیره</b-button>
        <b-button pill variant="outline-primary" @click="open()"><font-awesome-icon icon="folder-open" />گشودن</b-button>
    </div> -->
    <div class="d-none d-print-block">
      <Form12 :model="model" />
      <Form1 :model="model" />
      <Form10 :model="model" />
      <DefenseLicense :model="model" />
      <Grade :model="model" dr="supervisor" />
      <Grade :model="model" dr="arbiter" />
      <Grade :model="model" dr="consultant" />
    </div>
  </v-app>
</template>

<script>
import Inputs from './components/Inputs.vue'
// import Form1 from './components/Form1.vue'
// import Form10 from './components/Form10.vue'
// import DefenseLicense from './components/DefenseLicense'
// import Grade from './components/Grade'
// import Form12 from './components/Form12'
import MainUI from './components/MainUI'
import Info from './components/Info'

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
        tab: null,
        drawer: false,
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
    Inputs, Info,
    // Form1, Form10,
    // DefenseLicense,
    // Form12,    
    // Grade, Info
  },
  created(){
    this.components_info.forEach(function(ci){
      console.log("loading", ci);
      Vue.component(ci, () => import('./components/' + ci));
    })
  }
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
  /* margin-left: 10px; */
  /* margin-right: 10px; */
}
.btn svg {
    vertical-align: middle;
    margin-left: 5px;
}
/* .btn {
  margin: 10px;
} */
/* .fab-container {
    position: fixed;
    bottom: 10px;
    left: 10px;
}

.fab-container button{
  margin-top: 8px;
} */
.v-window-item{
  margin: 10px;
}
</style>

<template>
  <v-app id="app" dark style="background-color: white">
    <v-navigation-drawer class="d-print-none"
        v-model="drawer"
        app right>
      <v-list subheader dense>
        <v-subheader inset>صفحات</v-subheader>

        <v-list-item @click="tab = 0">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>صفحه اصلی</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item @click="tab = index + 1" v-for="(group, index) in groups" :key="group.name">
          <v-list-item-icon>
            <v-icon>mdi-page-next-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{group.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item @click="tab = groups.length + 1" v-if="show_forms">
          <v-list-item-icon>
            <v-icon>mdi-checkbox-multiple-marked-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>انتخاب فرم‌ها</v-list-item-title>
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

        <v-list-item href="https://github.com/HamedMasafi/vue-report-maker" target="_blank">
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
      <v-toolbar-title v-if="show_forms">فرم‌ساز {{(tab > 0 && tab < groups.length + 1) ? ' - ' + groups[tab - 1].title : ''}}</v-toolbar-title>
      <v-toolbar-title v-if="!show_forms">فرم‌ساز {{tab > 0 ? ' - ' + groups[tab - 1].title : ''}}</v-toolbar-title>

    <!-- <template v-slot:extension v-if="!drawer">

      <v-tabs v-model="tab">
        <v-tab>صفحه اصلی</v-tab>
        <v-tab v-for="group in groups" :key="group.name">{{group.title}}</v-tab>
        <!-- <v-tab>فرم‌ها</v-tab> -- >
      </v-tabs>
    </template> -->
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
              <v-col cols="12" md="2" lg="2" xl="2" v-if="field.type === 'person'">
                <v-select 
                    v-model="model[field.name + '_sex']" 
                    label="جنسیت" 
                    :items="[{text:'آقا',value:'male'},{text:'خانم',value:'female'}]" >
                </v-select>
              </v-col>
              <v-col cols="12" md="5" lg="5" xl="5"> 
                <v-text-field 
                    v-model="model[field.name]" 
                    :label="field.title + ' به فارسی'" 
                    required>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="5" lg="5" xl="5">
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
      <v-tab-item v-if="show_forms">
          <v-checkbox v-for="(component, index) in components_props" 
              :key="index"  
              v-model="reports[index]"
              :label="component.title == undefined ? component.name : component.title" />
          <v-btn title="چاپ" @click="print" color="primary">
            <v-icon>mdi-printer</v-icon>
            چاپ
          </v-btn>
      </v-tab-item>
    </v-tabs-items> 
      
    <v-btn color="blue" bottom
              fixed left dark fab @click="print" >
        <v-icon>mdi-printer</v-icon>
    </v-btn>
  </v-content>

    <a class="d-print-none github-fork-ribbon left-top fixed" href="https://github.com/HamedMasafi/vue-report-maker" 
        data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>

    <div class="d-print-block d-none">
      <component 
          v-for="(cmp, index) in components_props" 
          v-show="reports[index]"
          :is="cmp.name" 
          :key="index" v-bind="prop(cmp.props)" />
    </div>
    
  </v-app>
</template>

<script>
import Info from './components/Info'

import { groups, components_props } from './data'
import { Settings, model } from './settings'
import Vue from 'vue'

import './assets/style.css'
import './assets/print.css'
import './assets/screen.css'
// import './assets/debug.css'

var settings = new Settings();
var reports = [];
for (var cmp in components_props)
  reports.push(true);

export default {
  name: 'app',
  data(){
      return{
        tab: 0,
        drawer: null,
        groups: groups,
        show_forms: true,
        model: model,
        reports: reports,
        components_props: components_props
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
    },
    prop(p){
      if (p == undefined) {
        debugger;
        return {}
      }
      p.model = model;
      return p;
    }
  },
  components: {
    Info
  },
  created(){
    var cl = [];
    for (var cmp in components_props)
      cl.push(components_props[cmp].name);
    cl = cl.filter(function(item, pos) {
      return cl.indexOf(item) == pos;
    })
    cl.forEach(function(ci){
      console.log("loading", ci);
      Vue.component(ci, () => import('./components/' + ci));
    })
  }
}

// Vue.use(BootstrapVue)

settings.load();

</script>

<style>
@import 'http://cdn.font-store.ir/nazanin.css';
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
.v-window-item{
  margin: 10px;
}
</style>

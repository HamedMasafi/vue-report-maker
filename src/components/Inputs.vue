<template>
<div id="editor" class="d-print-none">
  <b-tabs content-class="mt-3">
    <b-tab title="صفحه اصلی">
      <Info />      
    </b-tab>
    <b-tab v-for="group in groups" :title="group.title" :key="group.name">
      <h1>{{ group.title }}</h1>
      <b-form-group v-for="field in group.fields" :label="field.title" :key="field.name">

          <b-form-select v-model="model[field.name + '_sex']" 
                :options="[{text:'آقا',value:'male'},{text:'خانم',value:'female'}]" 
                v-if="field.type === 'person'" ></b-form-select>
          <b-form-input :placeholder="field.title + ' فارسی'" v-model="model[field.name]" 
            :type="field.type === 'number' ? 'number' : 'text'"></b-form-input>
          <b-form-input v-model="model[field.name + '_en']" :placeholder="field.title + ' انگلیسی'" v-if="field.tr"></b-form-input>
      </b-form-group>
    </b-tab>
  </b-tabs>

</div>
</template>

<script>
import Info from "./Info.vue";
export default {
    name: "Inputs",
    props: {
        groups: Array,
        model: Object
    },
    components: {Info}
}
</script>

<style scoped>
  #editor {
    background-color: white;
    padding: 20px;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    z-index: 9999;
     */
  }
</style>
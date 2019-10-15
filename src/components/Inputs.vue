<template>
<div id="editor" class="d-print-none">
  <b-tabs content-class="mt-3">
    <b-tab title="صفحه اصلی">
      <h1>فرم‌ساز</h1>
    </b-tab>
    <b-tab v-for="group in groups" :title="group.title">
      <h1>{{ group.title }}</h1>
      <b-form-group v-for="field in group.fields" :label="field.title">

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
export default {
    name: "Inputs",
    props: {
        groups: Array,
        model: Object
    }
}
</script>

<style scoped>
  #editor {
    margin: 20px;
    padding: 20px;
  }
</style>
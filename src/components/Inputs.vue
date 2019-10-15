<template>
<div id="editor" class="d-print-none">
  <b-tabs content-class="mt-3">
    <b-tab v-for="group in groups" v-bind:key="group" :title="group.title">
      <p>{{ group.title }}</p>
      <b-form-group v-for="field in group.fields" :key="field"
          v-bind:label="field.title">

          <b-form-select v-model="model[field.name + '_sex']" :options="['آقا', 'خانم']" v-if="field.type === 'person'" ></b-form-select>
          <b-form-input :name="field.name" :placeholder="field.title + ' فارسی'" v-model="model[field.name]" 
            :type="field.type === 'number' ? 'number' : 'test'"></b-form-input>
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
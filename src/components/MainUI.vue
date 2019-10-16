<template>
<v-card>
    <v-tabs v-model="tab">
      <!-- <v-tab>صفحه اصلی</v-tab> -->
      <v-tab v-for="group in groups" :key="group.name">{{group.title}}</v-tab>
    </v-tabs>
   <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="group in groups"
        :key="group.name">
        <v-card flat color="basil">
          <v-card-text>{{ group.title }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
</v-card>
</template>

<script>
export default {
    name: "MainUI", 
    props: {
        groups: Array
    },
    data() {
      return{
        tab: null
      }
    }
}
</script>
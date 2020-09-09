<template>
  <v-app id="app">
    <v-system-bar>system-bar</v-system-bar>
    <v-app-bar>app-bar</v-app-bar>
    <v-navigation-drawer>navigation-drawer</v-navigation-drawer>
    <v-bottom-navigation>bottom-navigation</v-bottom-navigation>
    <v-footer>footer</v-footer>
    <!-- <router-view></router-view> -->
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class App extends Vue {
  created(){
    this.$vuetify.theme.dark = true
  }
}
</script>
<style lang="scss">

</style>

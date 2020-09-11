<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  created() {
    // this.$vuetify.theme.dark = true
  }
}
</script>
<style lang="scss">
</style>

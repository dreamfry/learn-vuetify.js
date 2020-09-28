<template>
  <div class="ma-6">
    <v-list-icon v-for="(icon, i) in icons" :key="i" class="ma-4">
      {{icon}}
      <v-icon>{{icon}}</v-icon>
    </v-list-icon>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class ClassName extends Vue {
  icons = [
    "mdi-home", 
    "mdi-email",
    "mdi-exit-to-app", 
    "mdi-code-tags", 
    "mdi-view-dashboard",
    "mdi-cog",
    "mdi-contacts",
    "mdi-history",
    "mdi-content-copy",
    "mdi-chevron-up",
    "mdi-chevron-down",
    "mdi-message",
    "mdi-help-circle",
    "mdi-cellphone-link",
    "mdi-keyboard",
    "mdi-trending-up",
    "mdi-youtube-subscription",
    "mdi-playlist-play",
    "mdi-clock",
    "mdi-apps",
  ];
}
</script>

<style>
</style>
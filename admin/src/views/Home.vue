<template>
  <v-app id="home">
    <v-app-bar app class="ms-4 text-overline font-italic" dir="rtl">app-bar</v-app-bar>
    <v-navigation-drawer class="d-xs-none d-sm-flex" app>
      1
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row class="blue-grey lighten-5">
          <v-col cols="6" md="4" class="cyan--text">block1</v-col>
          <v-col cols="6" md="4">block2</v-col>
          <v-col cols="6" md="4">block3</v-col>
          <v-col cols="6" md="4">block4</v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>footer</v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {}
</script>

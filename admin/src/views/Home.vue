<template>
  <v-app id="home">
    <v-app-bar app>app-bar</v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6" md="4">block1</v-col>
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

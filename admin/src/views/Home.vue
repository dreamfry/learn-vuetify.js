<template>
  <div class="home">
    <v-card class="mx-auto" max-width="120px">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>vapp</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>vcontainer</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {}
</script>

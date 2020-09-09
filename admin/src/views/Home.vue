<template>
  <v-app id="home">
    <v-app-bar app>{{title}}</v-app-bar>
    <v-navigation-drawer class="d-xs-none d-sm-flex" app>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-content>card</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app class="text-caption justify-end">@ROBO LEE</v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {
  title="Card"
}
</script>

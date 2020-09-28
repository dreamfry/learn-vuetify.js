<template>
  <v-app>
    <v-navigation-drawer app width="180px" floating permanent>
      <v-list dense>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>demos</v-list-item-title>
          </template>

          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" :target="item.target ? 'item.target' : '_blank'">
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>mydemos</v-list-item-title>
          </template>

          <v-list-item v-for="(item, i) in items2" :key="i" :to="item.link" :target="item.target ? 'item.target' : '_blank'">
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {
  items = [
    { text: "Baseline", link: "/demo/Baseline"},
    { text: "Baseline Flipped", link: "/demo/BaselineFlipped" },
    { text: "Centered", link: "/demo/Centered" },
    { text: "Complex", link: "/demo/Complex" },
    { text: "Dark", link: "/demo/Dark" },
    { text: "Google Contacts", link: "/demo/GoogleContacts" },
    { text: "Google Keep", link: "/demo/GoogleKeep" },
    { text: "Google Youtube", link: "/demo/GoogleYoutube" },
    { text: "Sandbox", link: "/demo/Sandbox" },
  ];

  items2 = [
    { text:"menu", link: "/mydemo/menu", target: '_slef' },
    { text:"Icon", link: "/mydemo/icon", target: '_slef' },
    { text:"Card", link: "/mydemo/card", target: '_slef' },
  ]
}
</script>
<style>
</style>

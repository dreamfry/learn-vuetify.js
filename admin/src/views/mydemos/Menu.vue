<template>
  <v-container class="fill-height text-center">
    <v-row>
      <v-menu v-model="showMenu" absolute offset-y style="max-width: 600px">
        <template v-slot:activator="{on: menu, attrs}">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn color="primary" dark v-bind="attrs" v-on="{ ...tooltip, ...menu}">MENU</v-btn>
            </template>
            <span>Im A ToolTip</span>
          </v-tooltip>
        </template>
        
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-container>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Menu extends Vue {
  showMenu = false

  items = [
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me 2" },
  ];
}
</script>



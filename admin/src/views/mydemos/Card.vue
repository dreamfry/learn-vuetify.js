<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <!-- outlined: 删除框阴影并添加细边框 -->
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1"
            >Headline 5</v-list-item-title
          >
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar title size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              src="http://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card>
      <v-card-text>
        <div>Word of the Day</div>
        <p>be·nev·o·lent</p>
        <p>adjective</p>
        <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4">learn more</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
        <v-card-title>
          Top 10 Australian beaches
        </v-card-title>
      </v-img>
      <v-card-subtitle>Number 10</v-card-subtitle>
      <v-card-text>
        <div>Whitehaven Beach</div>
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>Share</v-btn>
        <v-btn color="orange" text>Explore</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="indigo" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Discover</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card>
              <v-img :src="card.src" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                <v-card-title v-text="card.title">
                </v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class ClassName extends Vue {
  cards = [
    { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12},
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6},
  ]
}
</script>

<style>
</style>
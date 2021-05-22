<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title> Hackacom </q-toolbar-title>
        <div>Instituto Biodivercidade</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-blue-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div
            class="text-white q-gutter-md flex justify-around"
            style="font-size: 1.8em"
          >
            <div @click="hello()">
              <q-icon name="home" class="cursor-pointer"/>
            </div>
            <div @click="hello()">
              <q-icon
                name="account_circle"
                class="cursor-pointer"
                
              />
            </div>
            <div @click="hello()" >
              <q-icon name="money" class="cursor-pointer" />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template> 

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
  methods: {
    hello: () => {
      console.log("clicked");
    },
  },
};
</script>

<style scoped>
</style>

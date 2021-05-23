<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="!userLoggedIn">
      <q-toolbar>
        <q-btn
          v-if="this.$route.path != '/'"
          flat
          dense
          round
          icon="arrow_back"
          aria-label="Menu"
          @click="$router.replace('/')"
        />
        <q-toolbar-title
          class="text-center"
          style="position: absolute; left: 50%; transform: translate(-50%, 0)"
        >
        GIVAS X
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-bar elevated v-if="userLoggedIn" class="bg-transparent" style="padding:40px 10px;">
      <q-toolbar class="">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->
        <q-toolbar-title class="text-center text-white text-bold header_title"> GIVAS X </q-toolbar-title>
        <!-- <div>Instituto Biodivercidade</div> -->
      </q-toolbar>
    </q-bar>
<!-- 
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      v-if="userLoggedIn"
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
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="footer_bar text-white" v-if="userLoggedIn">
      <q-toolbar>
        <q-toolbar-title>
          <div
            class="text-white q-gutter-md flex justify-around"
            style="font-size: 1.8em"
          >
            <div @click="$router.replace('/home')">
              <q-icon name="home" class="cursor-pointer" />
            </div>
            <div @click="$router.push('/perfil')">
              <q-icon name="account_circle" class="cursor-pointer" />
            </div>
            <div @click="hello()">
              <q-icon name="paid" class="cursor-pointer" />
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
      userLoggedIn: true,
    };
  },
  beforeMount() {
    let routePath = this.$router.history.current.path;
    if (
      routePath == "/cadastro" ||
      routePath == "/login" ||
      routePath == "/"
    ) {
      this.userLoggedIn = false;
    }
  },
  methods: {
    hello: () => {
      console.log("clicked");
      console.log(this.$route.name);
    },
  },
};
</script>

<style scoped>
.header_title{
  font-family: 'digitalfont';
  letter-spacing: 0.4em;
  font-size: 2em;
}
.footer_bar {
  background-color: #380A3B;
}
</style>

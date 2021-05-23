<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated fixed>
      <q-toolbar class="bg-transparent text-white header_title">
        <div
          v-if="!userLoggedIn && !itsStartPage"
          @click="$router.replace('/')"
        >
          <q-icon size="sm" name="arrow_back" color="white"></q-icon>
        </div>

        <q-toolbar-title class="text-center"> GIVAS X </q-toolbar-title>
      </q-toolbar>
    </q-header>

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
      <router-view :key="$route.path" />
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
import router from "src/router";

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
      arrowPath: null,
      itsStartPage: false,
    };
  },
  watch: {
    $route: {
      handler(newRoute) {
        console.log(newRoute);
        if (
          newRoute.path == "/cadastro" ||
          newRoute.path == "/login" ||
          newRoute.path == "/"
        ) {
          this.userLoggedIn = false;
          this.itsStartPage = false;
          if (newRoute.path == "/") {
            this.itsStartPage = true;
          }
        } else {
          this.userLoggedIn = true;
        }
      },
      immediate: true,
      deep: true,
    },
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
.header_title {
  font-family: "digitalfont";
  letter-spacing: 0.4em;
  font-size: 2em;
}
.footer_bar {
  background-color: #380a3b;
}
</style>

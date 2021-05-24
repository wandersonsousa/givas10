<template>
  <q-page class="bg-white">
    <!-- profile_bar -->
    <div style="min-width: 100%" class="text-black">
      <div>
        <div
          rounded
          class="flex justify-around items-center profile_bar q-mb-lg"
        >
          <div
            style="width: 70%; padding: 0 0"
            class="flex justify-between items-center profile_data"
          >
            <div class="flex items-center">
              <q-icon
                name="arrow_back"
                class="q-mr-sm"
                @click="$router.replace('/home')"
                size="md"
              ></q-icon>
              <span class="text-grey text-light">João Costa</span>
            </div>

            <div class="flex row items-center" style="font-size: 20px">
              <q-icon
                name="monetization_on"
                class="text-orange"
                style="margin-right: 5px"
                size="md"
              ></q-icon>
              <span style="font-family: Arial; font-weight: bold"> 20 </span>
            </div>
          </div>

          <q-avatar style="padding:5px;">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </div>
      </div>
    </div>

    <!-- <div class="carroussel">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div> -->

    <div class="apoiase_main">
      <div class="apoiase_title">
        <h5>APOIA-SE</h5>
        <div class="title_img">
          <q-img
            src="../assets/img/anuncie.png"
            spinner-color="white"
          />
        </div>  
      </div>
      <div class="apoiase_subtitle">
        <h6>CAMPANHA TURBINADA</h6>
      </div>
      <div class="apoiase_description">
        <h6>FUNCIONA ASSIM: </h6>
        <p>Campanha 2 em 1.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet. Earum ab doloribus vitae perferendis culpa aliquid.</p>
      </div>
      <div class="apoiase_btn">
        <q-btn 
        class="bg-secondary" 
        color="#ffffff" 
        border-radius="10px"
        style="border-radius: 16px;">
          Apoiar com R$1 ou +
        </q-btn>
      </div>
    </div>
    

    <!-- <div class="apoie_items">
      <div class="loja apoie_item">
        <div class="item_img">
          <q-img
            src="../assets/img/balao.png"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
        <h6>LOJINHA</h6>
      </div>
      <div class="apoia apoie_item">
        <div class="item_img">
          <q-img
            src="../assets/img/base_lunar.png"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
        <h6>APOIA-SE</h6>
      </div>
      <div class="anuncie apoie_item">
        <div class="item_img">
          <q-img
            src="../assets/img/anuncie.png"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
        <h6>ANUNCIE</h6>
      </div>
      <div class="compartilhe apoie_item">
        <div class="item_img">
          <q-img
            src="../assets/img/compartilhe.png"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
        <h6>COMPARTILHE</h6>
      </div>
    </div> -->
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        slide: "style",
        lorem:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet. Earum ab doloribus vitae perferendis culpa aliquid. Odit, tempore sed libero laborum quidem voluptatem officiis eius sequi consectetur sint porro!",
      };
    },
  };
</script>

<style>
  .apoiase_main {
    width: 100%;
    display: inline-block;
    position: relative;
    padding-top: 15px;
  }
  .apoiase_title {
    width: 100%;
    display: inline-flex;
    position: inherit;
    background: #580940;
    color: #ffffff;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }
  .apoiase_title h5 {
    margin: auto 24px;
    width: 80%;
  }
  .title_img {
    width: 50px;
    height: 50px;
    margin: 8px 16px;
  }
  .apoiase_subtitle {
    padding: 16px 0 8px 0;
  }
  .apoiase_subtitle h6 {
    color: #580940;
    margin: auto 24px;
  }
  .apoiase_description {
    padding: 16px 0 8px 0;
  }
  .apoiase_description h6 {
    color: #580940;
    margin: auto 24px;
  }
  .apoiase_description p {
    color: #580940;
    margin: auto 24px;
    padding: 8px 0 4px 0;
  }
  .apoiase_btn {
    width: 100%;
    display: inline-flex;
    position: inherit;
    flex-direction: row;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
    padding-right: 24px;
  }
</style>
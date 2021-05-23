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
              <q-icon name="arrow_back" class="q-mr-sm" @click="$router.replace('/home')" size="md"></q-icon>
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

          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </div>
      </div>
    </div>
    <!---->
    <!-- stage detail -->
    <div>
      <q-item
        v-bind:class="{ inactive: !etapa.done }"
        clickable
        v-ripple
        class="stage_item q-mb-sm q-py-md columnfull-width"
      >
        <div class="flex">
          <q-item-section thumbnail>
            <img
              :src="etapa.imgUrl"
              spinner-color="white"
              class="q-ml-md"
              style="height: 100px; max-width: 110px"
            />
          </q-item-section>
          <q-item-section class="text-center">
            <div class="flex column">
              <h5
                style="padding: 0 !important; margin: 0"
                class="text-left text-bold"
              >
                {{ etapa.nome }}
              </h5>
              <p>{{ etapa.description }}</p>

              <div class="flex full-width items-center justify-center">
                <div
                  style="width: 50%; height: 100%"
                  class="flex flex-center items-center justify-center"
                >
                  <q-linear-progress
                    rounded
                    size="15px"
                    :value="0.5"
                    color="secondary"
                  />
                </div>

                <div
                  style="width: 40%; height: 100%"
                  class="flex-flex-center items-center justify-center etapa_badges"
                >
                  48 minutos restantes
                </div>

                <div
                  style="width: 40%; height: 100%"
                  class="flex-flex-center items-center justify-center etapa_badges"
                  v-if="false"
                >
                  Nota: 10
                  <div>Completo</div>
                </div>
              </div>
            </div>
          </q-item-section>
        </div>
      </q-item>
    </div>
    <!---->

    <div>
      <q-list bordered separator>
        <q-item
          clickable
          class="item_default"
          v-ripple
          :active="tema.available"
          active-class="active_item"
          v-for="(tema, index) in etapa.temas"
          :key="index"
          @click="tema.available?$router.push('/tema'):null"
        >
          <q-item-section class="text-center text-bold"
            >Tema {{ index + 1 }} - {{ tema.name }}</q-item-section
          >
          <q-item-section side><q-icon v-if="!tema.available" name="lock" /></q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      active: true,
      etapa: {
        id: 0,
        nome: "FASE 1",
        description:
          "Estruturando um Plano de Comunicação e Estratégica Voltada para OSCs",
        done: true,
        imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
        temas: [
          {
            name: "CHECKLIST",
            available: true,
          },
          {
            name: "ANÁLISE F.O.F.A",
            available: false,
          },
          {
            name: "PROBLEMA",
            available: false,
          },
          {
            name: "OBJETIVOS",
            available: false,
          },
           {
            name: "...",
            available: false,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.profile_bar {
  padding: 15px 0px !important;
  background-color: #ffffff !important;
  color: #380a3b !important;
  font-weight: bold;
  font-size: 1.3em;
}
.profile_data {
  padding-bottom: 3px !important;
  border-bottom: 0.4px solid purple;
}
.fase_b_item {
  padding: 5px 0;
  background: #380a3b;
}
.etapa_badges {
  font-size: 0.8em !important;
  font-weight: 350;
}
.item_default {
  background-image: linear-gradient(#eaeaea, #ffffff);
  opacity: 0.5;
  color: #707070;
}
.active_item {
    opacity: 1;
    background-image: linear-gradient(#eaeaea, #ffffff);
    color:#380A3B;
}
</style>


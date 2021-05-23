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

          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </div>
      </div>
    </div>
    <!--  -->

    <!-- fase header -->
    <div class="fase_header flex">
      <!-- tema_detail -->
      <div></div>
      <div class="fase_detail">
        <h5 class="fase_detail_title text-center text-bold">
          {{ etapa.nome }}
        </h5>
        <h6 class="text-center text-bold" style="margin: 0; font-size: 1.2em">
          {{ etapa.description }}
        </h6>
      </div>
    </div>
    <!--  -->
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      etapa: {
        nome: "FASE BÔNUS",
        description:
          "Estruturando um Plano de Comunicação e Estratégica Voltada para OSCs",
        active: true,
        progress: 0.5,
        imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
        timeLabel: "45 minutos restantes",
      },
    };
  },
};
</script>

<style>
</style>
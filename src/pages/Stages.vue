<template>
  <q-page class="flex flex-center bg-white">
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
            <div>João Costa</div>
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

          <q-avatar @click="$router.push('/perfil')">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </div>
      </div>
      <div>
        <q-list
          bordered
          v-for="etapa in etapas"
          :key="etapa.id"
          class="flex flex-center align-center"
          style="border: none; min-width: 100%"
        >
          <q-item
            v-bind:class="{ inactive: !etapa.active }"
            clickable
            v-ripple
            @click="etapa.active && !etapa.noClickable ? $router.push('/etapa') : null"
            class="stage_item q-mb-sm q-py-md column"
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
                <div class="flex flex-center column">
                  <h6 style="padding: 0 !important; margin: 0">
                    {{ etapa.nome }}
                  </h6>
                  <p>{{ etapa.description }}</p>

                  <div class="flex full-width items-center justify-center">
                    <div
                      style="width: 50%; height: 100%"
                      class="flex flex-center items-center justify-center"
                    >
                      <q-linear-progress
                        rounded
                        size="15px"
                        :value="etapa.progress"
                        color="secondary"
                      />
                    </div>

                    <div
                      style="width: 40%; height: 100%"
                      class="flex-flex-center items-center justify-center etapa_badges"
                    >
                      {{etapa.timeLabel}}
                    </div>

                  </div>
                </div>
              </q-item-section>
            </div>

            <div
              class="q-py-sm text-white full-width text-center row flex-end justify-around fase_b_item"
            >
              <div>FASE BÔNUS</div>
              <div>
                <q-icon
                  name="star"
                  size="sm"
                  :color="etapa.active ? 'yellow' : ''"
                ></q-icon>
              </div>
            </div>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      concluiu_primeira: false,
      etapas: [
        {
          id: 0,
          nome: "FASE 1",
          description:
            "Estruturando um Plano de Comunicação e Estratégica Voltada para OSCs",
          active: true,
          progress: 0.5,
          imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
          timeLabel: '45 minutos restantes'
        },
        {
          id: 1,
          nome: "FASE BÔNUS",
          imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
        },
        {
          id: 2,
          nome: "FASE BÔNUS",
          imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
        },
        {
          id: 3,
          nome: "FASE BÔNUS",
          imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
        },
        {
          id: 4,
          nome: "FASE BÔNUS",
          imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
        },
      ],
    };
  },
  mounted(){
    this.concluiu_primeira = sessionStorage.getItem('concluiu_primeira_etapa')||false;
    if(this.concluiu_primeira){
      this.etapas[1] = {
          id: 1,
          nome: "FASE 2",
          description:
            "Estruturando um Plano de Comunicação e Estratégica Voltada para OSCs",
          active: true,
          progress: 0,
          imgUrl: "https://i.ibb.co/jWbqbDv/rocket-removebg-preview.png",
          timeLabel: '50 minutos restantes',
          noClickable:true
        };
      this.etapas[0].progress = 1;
      this.etapas[0].timeLabel = 'completo';
    }
  }
};
</script>

<style scoped>
.q-item {
  width: 96%;
  height: auto;
  border: none;
  border-radius: 2%;
  background-image: linear-gradient(#eaeaea, #ffffff) !important;
}
.inactive {
  background-color: #969696 !important;
  opacity: 45%;
}
.inactive > * {
  background-color: #969696 !important;
  opacity: 50%;
}
.inactive img {
  opacity: 10%;
}
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
</style>


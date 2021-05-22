<template>
  <q-page class="flex flex-center">
    <div style="min-width: 100%">
      <h4 class="text-center text-blue">Etapas</h4>
      <q-list bordered v-for="etapa in etapas" :key="etapa.id">
        <q-item clickable v-ripple class="stage_item q-py-md q-mb-0">
          <q-item-section thumbnail>
            <img
              :src="etapa.imgUrl"
              spinner-color="white"
              class="q-ml-md"
              style="height: 100px; max-width: 110px"
            />
          </q-item-section>
          <q-item-section class="text-center">
            <h6>{{ etapa.nome }}</h6></q-item-section
          >
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      etapas: [
        {
          id: 0,
          nome: "Etapa 1",
          imgUrl: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          id: 1,
          nome: "Etapa 2",
          imgUrl: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          id: 2,
          nome: "Etapa 3",
          imgUrl: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          id: 3,
          nome: "Etapa 4",
          imgUrl: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          id: 4,
          nome: "Etapa 5",
          imgUrl: "https://cdn.quasar.dev/img/mountains.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.q-item {
  width: 100%;
  height: 120px;
  border: none;
  margin: 0;
}
</style>


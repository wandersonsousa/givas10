<template>
  <q-page class="flex flex-center">
    <div>
      
    </div>
    <div>
      <q-banner
        rounded
        class="bg-grey-3 flex row items-center justify-center"
        style="width: 100%"
      >
        <template v-slot:avatar>
          <q-avatar style="width: 110px; height: 115px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </template>

        <h3>João Costa</h3>
      </q-banner>
    </div>

    <div style="width: 100%" class="bg-white text-center">
      <q-btn
        color="white"
        text-color="black"
        label="Desempenho"
        class="improve_title"
      />
      <div class="flex">
        <div style="width: 100%">
          <q-linear-progress size="60px" :value="courseProgress" color="accent">
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="courseProgressLabel"
              />
            </div>
          </q-linear-progress>
        </div>
      </div>
    </div>

    <div class="flex bg-white q-mt-lg">
      <div style="width: 100%">
        <q-list dense bordered padding class="rounded-borders">
          <q-item clickable v-ripple>
            <q-item-section>
              Etapa atual: Comunicação em redes sociais
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Etapas concluidas: 10 </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section> Horas de estudo: 15h </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <div class="q-mt-lg bg-white full-width">
      <h6 class="text-center" style="margin: 20px 0">Seus amigos</h6>
      <q-list bordered class="text-center">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white"> R </q-avatar>
          </q-item-section>

          <q-item-section>João</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white"> R </q-avatar>
          </q-item-section>

          <q-item-section>Maria</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white"> R </q-avatar>
          </q-item-section>

          <q-item-section>Marcos</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white"> R </q-avatar>
          </q-item-section>

          <q-item-section>Pedro</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      courseProgress: 0.4,
      courseProgressLabel: "Progresso do Curso",
    };
  },
};
</script>

<style scoped>
.progress_title {
  border: 1px solid #9c27b0;
}
.improve_title {
  margin-bottom: 30px;
  padding: 20px 0px;
  width: 100%;
}
</style>
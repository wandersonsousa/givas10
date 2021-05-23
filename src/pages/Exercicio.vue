<template>
  <q-page class="flex flex-center bg-white">
    <div class="flex row full-width">
      <q-linear-progress
        dark
        stripe
        rounded
        size="20px"
        :value="progress"
        color="positive"
        class="q-mt-sm"
        style=""
      >
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="progressLabel" />
        </div>
      </q-linear-progress>
    </div>
    <div class="full-width">
      <q-card
        class="bg-positive text-white border-none no-border"
        v-for="questao in questoes.slice(a, b)"
        :key="questao.id"
      >
        <q-card-section>
          <div class="text-h6 text-center">
            {{ questao.title }}
          </div>
        </q-card-section>

        <q-separator dark />

        <q-card-actions class="bg-white">
          <q-btn
            @click="selectResponse(alternativa)"
            flat
            v-bind:class="{
              alternativa_correta: alternativa.correct,
              alternativa_errada: !alternativa.correct,
            }"
            class="full-width q-pa-lg bg-accent q-ma-sm btn-quiz"
            v-for="alternativa in questao.alternativas"
            :key="alternativa.id"
            >{{ alternativa.valor }}</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      b: 1,
      progress: 0,
      maxQuestao: 1,
      respondidas: 0,
      questoes: [
        {
          id: 0,
          respondida: false,
          title: "Qual o primeiro presidente do Brasil ?",
          alternativas: [
            {
              id: 0,
              valor: "Cristovão Colombo",
              correct: false,
            },
            {
              id: 1,
              valor: "Putin",
              correct: true,
            },
            {
              id: 2,
              valor: "Maduro",
              correct: false,
            },
          ],
        },
        {
          id: 1,
          title: "Qual maior estado do Brasil ?",
          respondida: false,
          alternativas: [
            {
              id: 0,
              valor: "São Paulo",
              correct: false,
            },
            {
              id: 1,
              valor: "Rio de Janeiro",
              correct: false,
            },
            {
              id: 2,
              valor: "Piauí",
              correct: true,
            },
          ],
        },
      ],
    };
  },
  computed: {
    progressLabel: function(){
        return this.progress * 100 + "%"
    },
  },
  methods: {
    selectResponse(alternativa) {
      if (alternativa.correct) {
        alternativa.id;
      }
      if (alternativa.correct) {
        this.score++;
      }
      ++this.respondidas;
      this.progress = this.respondidas/ this.questoes.length;
      if (this.a == this.maxQuestao) {
        return setTimeout(() => this.$router.push("/perfil"), 500);
      }
      setTimeout(() => {
        this.a++;
        this.b++;
      }, 500);
    }
  },
};
</script>

<style>
.alternativa_correta:active {
  background-color: #21ba45 !important;
}
.alternativa_errada:active {
  background-color: #c10015 !important;
}
</style>
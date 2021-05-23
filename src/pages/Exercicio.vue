<template>
  <q-page class="flex flex-center bg-white">
    <div class="flex row full-width">
      <q-linear-progress
        stripe
        rounded
        size="20px"
        :value="progress"
        color="warning"
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
        class="text-white border-none no-border"
        v-for="questao in questoes.slice(a, b)"
        :key="questao.id"
      >
        <q-card-section class="">
          <div class="text-h6 text-center text-black">
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
            class="full-width q-pa-lg q-ma-sm btn-quiz"
            style="background-color:#580940;"
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
      score:0,
      questoes: [
        {
          id: 0,
          respondida: false,
          title: "O primeiro passo para estruturar um plano estratégico de comunicação é a imersão de informações.",
          alternativas: [
            {
              id: 0,
              valor: "Verdadeiro",
              correct: true,
            },
            {
              id: 1,
              valor: "Falso",
              correct: false,
            }
          ],
        },
        {
          id: 1,
          title: "Qual destas afirmações está sendo aplicada corretamente?",
          respondida: false,
          alternativas: [
            {
              id: 0,
              valor: "A Análise Ambiental levanta informações internas e externas da OSC.",
              correct: false,
            },
            {
              id: 1,
              valor: "A Análise F.O.F.A. levanta informações sobre a situação interna e externa da OSC.",
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
        sessionStorage.setItem('concluiu_primeira_etapa', true);
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
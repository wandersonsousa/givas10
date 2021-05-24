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
                @click="$router.replace('/etapa')"
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
    <!--v-for="(tema, index) in temas" :key="index"-->
    <div class="tema" v-for="(tema, index) in temas.slice(a, b)" :key="index">
      <!-- tema_detail -->
      <div class="tema_detail">
        <h5 class="tema_detail_title text-center text-bold">
          {{ tema.title }}
        </h5>
        <h6 class="text-center text-bold" style="margin: 0; font-size: 1.2em">
          {{ tema.name }}
        </h6>
      </div>
      <!--  -->
      <!-- tema_content -->
      <div class="tema_content q-pb-sm">
          <div class="flex flex-center">
          <q-video
            class="q-mb-md"
            src="https://www.youtube.com/embed/ThiCMd5kGbE?rel=0"
            style="width:80%;"
          />
        </div>
        <p class="content_title text-subtitle1 q-px-sm">
          Checklist de técnicas fundamentais que compõem o Plano de Comunicação
          Estratégica:
        </p>
        <div class="content_text text-body2 q-pa-sm">
          <p>
            ✓Análise F.O.F.A. ou Matriz S.W.O.T. Aqui é feito um levantamento de
            informações sobre a situação interna e externa da OSC.
          </p>
          <p>
            ✓Problema Aqui é determinado qual problema será abordado no Plano.
          </p>
          <p>
            ✓Objetivos Aqui é definido onde o Plano de Comunicação deve chegar.
          </p>
        </div>
      </div>
      <!--  -->

      <!-- helper_astronaut-->
      <div class="full-width" v-if="!tema.first && !tema.last">
        <div class="full-width flex items-center justify-center">
          <div
            style="width: 30%"
            class="row items-center justify-center"
            @click="backTheme(tema)"
          >
            <q-icon name="arrow_back" size="lg" color="primary" />
          </div>

          <div style="width: 40%" class="row items-center justify-center">
            <img
              src="../assets/img/astronaut.webp"
              width="95"
              height="90"
              alt=""
            />
          </div>

          <div
            style="width: 30%"
            class="row items-center justify-center"
            @click="nextTheme(tema)"
          >
            <q-icon name="arrow_forward" size="lg" color="primary" />
          </div>
        </div>
      </div>

      <!-- helper_astronaut for first-->
      <div class="row justify-around" v-if="tema.first">
        <div class="flex justify-center items-center full-width">
          <div style="width: 40%">
            <img
              src="../assets/img/astronaut.webp"
              width="95"
              height="90"
              alt=""
            />
          </div>
          <div style="width: 60%" @click="nextTheme(tema)">
            <span class="text-bold q-mr-sm">Próximo tema</span>
            <q-icon name="arrow_forward" size="lg" color="primary" />
          </div>
        </div>
        <!-- <div class="text-bold text-h6" >Agora, vamos fazer alguns exercícios</div> -->
      </div>

      <!-- helper_astronaut for last-->
      <div class="row justify-around" v-if="tema.last">
        <div class="flex justify-center items-center full-width">
          <div style="width: 50%" class="flex justify-end items-center">
            <img
              src="../assets/img/astronaut.webp"
              width="95"
              height="90"
              alt=""
            />
          </div>
          <div
            style="width: 45%"
            class="q-ml-sm flex justify-start items-center"
            @click="$router.push('/exercicio')"
          >
            <q-icon name="arrow_forward" size="lg" color="primary" />
          </div>
        </div>
        <div class="text-bold text-h6">
          Agora, vamos fazer alguns exercícios
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      b: 1,
      temas: [
        {
          title: "TEMA 1",
          name: "CHECKLIST",
          first: true,
          content:
            "Checklist de técnicas fundamentais que compõem o Plano de Comunicação Estratégica:\n✓Análise F.O.F.A. ou Matriz S.W.O.T. Aqui é feito um levantamento de informações sobre a situação interna e externa da OSC.\n✓Problema Aqui é determinado qual problema será abordado no Plano.\n✓Objetivos Aqui é definido onde o Plano de Comunicação deve chegar.",
        },
        {
          title: "TEMA 2",
          name: "ANÁLISE F.O.F.A",
          content:
            "✓Análise F.O.F.A. (que é a sigla de Forças, Oportunidades, Fraquezas e Ameaças) ou Matriz S.W.O.T. (como é chamada em inglês), é a análise da situação geral da OSC.\n Para facilitar este levantamento de informações, responda a estas perguntas: ● O que a OSC tem de mais importante na sua existência? Sua maior força. ● O que a OSC pode fazer pelo ambiente que atua? Pontue as oportunidades. ● Qual a maior dificuldade que a OSC enfrenta? Analise suas fraquezas. ● O que acontece se a OSC não cumpre completamente seus objetivos? As suas maiores ameaças.",
        },
        {
          title: "TEMA 3",
          name: "PROBLEMA",
          content:
            "✓Problema\n Definir problemas da OSC é uma tática abrangente. Aqui, vamos identificar o problema central especificamente da comunicação, e que por si, ajuda a resolver diversos outros problemas dentro da instituição. Algumas perguntas devem ser respondidas para chegar ao problema em questão: ● Como a OSC se comunica com seu público: colaboradores, parceiros, investidores, voluntários, entre outros? ● A resposta desse público é a esperada pela OSC? ● Se a resposta não é bem a esperada, ou deseja alcançar outros resultados, em qual momento do processo da comunicação a OSC entende que deva melhorar? Com essa reflexão: descreva o problema identificado.s",
        },
        {
          title: "TEMA 4",
          name: "OBJETIVOS",
          last: true,
          content:
            "✓Objetivos \nDepois de identificar o problema de comunicação a ser trabalhado, é possível visualizar com maior facilidade quais caminhos tomar. Mas antes de colocar em prática as tomadas de decisões, você precisa definir aqui onde quer chegar. Você pode responder a esta pergunta para tornar mais claro o seu objetivo: ● Qual ou quais efeitos positivos a OSC refletirá com um planejamento estratégico de comunicação adequado ao problema apontado anteriormente? Estes serão os objetivos do seu plano.",
        },
      ],
    };
  },
  methods: {
    nextTheme: function (currentTema) {
      this.a++;
      this.b++;
      window.scrollTo(0, 0);
    },
    backTheme: function (currentTema) {
      this.a--;
      this.b--;
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.tema_detail {
  background-image: linear-gradient(#ffffff, #eaeaea) !important;
  color: #380a3b !important;
}
.tema_detail_title {
  margin: 0 !important;
}
.tema_content {
  color: #380a3b !important;
}
</style>
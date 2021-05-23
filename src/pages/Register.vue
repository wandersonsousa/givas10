<template>
  <q-page class="q-pa-md flex flex-center align-center justify-center bg-white">
    <h6 class="page-title">Crie sua conta</h6>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Nome da ONG*"
        hint="Nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Digite o nome da ONG']"
      />

      <q-input
        filled
        v-model="cnpj"
        label="CNPJ da ONG*"
        hint="CNPJ"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Digite o CNPJ  da ONG']"
      />

      <q-input
        filled
        v-model="username"
        label="Usuário para login *"
        hint="Usuário"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Digite um nome de usuário',
        ]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Senha *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Digite sua senha',
          (val) => val.length >= 8 || 'Senha deve ter mais de 8 caractéres',
        ]"
      />

      <div class="flex flex-center">
        <q-btn label="Cadastrar" type="submit" color="primary" />
      </div>
      <div class="flex full-width justify-right q-mb-lg">
        <img src="../assets/img/astronaut.webp" width="95" height="90" alt="" />
        <div class="">
          <h6><a @click="$router.push('/login')">Já possui uma conta ?</a></h6>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      name: null,
      cnpj: null,
    };
  },

  methods: {
    onSubmit() {
      try {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Logado",
        });
      } catch (error) {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style scoped>
.q-input {
  border-radius: 20px !important;
}
.page-title {
  margin-bottom: 15px !important;
  margin-top: 0;
}
</style>

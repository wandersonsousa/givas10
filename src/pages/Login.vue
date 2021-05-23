<template>
  <q-page class="q-pa-md flex column justify-center bg-white">
    <h4>Login</h4>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Nome de Usuário *"
        hint="Usuário"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Digite um username']"
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
        <q-btn label="Entrar" size="lg" type="submit" color="primary" />
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
        return this.$router.replace('/home');
      }
    },
  },
};
</script>
<style scoped>
h4 {
  color: #580940;
  font-weight: 600 !important;
}
</style>


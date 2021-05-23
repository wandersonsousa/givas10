<template>
  <q-page class="container">
    <div class="title">
      <h2>GIVAS X</h2>
    </div>

    <div class="buttons-container flex justify-center">
      <q-btn :size="'lg'" class="bg-red text-white signup-btn" @click="$router.push('/cadastro')">Cadastrar</q-btn>
      <q-btn :size="'lg'" class="bg-red text-white signup-btn" @click="$router.push('/login')"
        >Já tenho cadastro</q-btn
      >
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  color: white;
}

h2 {
  font-family: "digitalfont", Georgia, "Times New Roman", Times, serif !important;
  letter-spacing: 0.1em;
}

.signup-btn {
  border-radius: 20px;
  margin-top: 10px;
  width: 200px;
  padding: 10px 10px;
  background-color: #a0175d !important;
  font-weight: 700 !important;
  font-size: 1.1em !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.signup-btn:nth-child(2) {
  width: 300px;
  background-color: #707070 !important;
  opacity: 0.9 !important;
}

.buttons-container {
  margin-top: 35%;
}
.title {
  margin-top: 15%;
}
</style>
 

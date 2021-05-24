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

    <div>
      <div class="full-width flex text-center items-center justify-center" style="background-color: #580940; color: #fff">
        <h5
          class="text-center lojinha_title"
        >
          LOJINHA
        </h5>
        <q-icon name="store" size="sm" color="white"/>
      </div>

      <div class="products_grid row justify-around">
        <div class="col-6 product text-center">
          <q-img
            src="../assets/img/xicara.jpeg"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
          <div class="product_details text-center">
            <h6 class="product_title">Caneca</h6>
            <p>R$29,00</p>
          </div>
        </div>

        <div class="col-6 product text-center">
          <q-img
            src="../assets/img/givas_tshirt.jpeg"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
          <div class="product_details text-center">
            <h6 class="product_title">Moleton</h6>
            <p>R$45,00</p>
          </div>
        </div>
      </div>

      <div class="products_grid row justify-around">
        <div class="col-6 product text-center">
          <q-img
            src="../assets/img/agenda.jpeg"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
          <div class="product_details text-center">
            <h6 class="product_title">Agenda</h6>
            <p>R$20,00</p>
          </div>
        </div>

        <div class="col-6 product text-center">
          <q-img
            src="../assets/img/givas_tshirt.jpeg"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
          <div class="product_details text-center">
            <h6 class="product_title">Caneca</h6>
            <p>R$25,00</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
.product_title {
  margin: 0;
}
.product_details h6,
p {
  font-weight: 300;
}
.lojinha_title {
  padding: 10px;
  margin: 0;
}
p {
  margin: 0;
}
</style>
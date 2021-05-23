<template>
  <q-page class="bg-white">
    <div class="profile column items-center full-width">
      <div>
        <h5 class="text-center profile_title">Perfil</h5>
      </div>

      <div class="flex items-center justify-around full-width">
        <div class="profile_info flex items-center">
          <q-avatar style="width: 60px; height: 55px" class="q-mr-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="desc">
            <p class="text-bold">João Costa</p>
            <p class="ong_name">Associação água pura</p>
          </div>
        </div>
        <div class="currency_stats">
          <div class="flex row items-center" style="font-size: 18px">
            <q-icon
              name="monetization_on"
              class="text-orange"
              style="margin-right: 5px"
              size="sm"
            ></q-icon>
            <span style="font-family: Arial; font-weight: bold"> 20 </span>
          </div>
          <div>
            <q-icon name="edit" size="sm" class="q-mt-sm"> </q-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="performace q-pa-lg">
      <div>
        <h5 style="font-size: 1.2em" class="performace_title text-bold">
          Desempenho
        </h5>
      </div>
      <div class="walt_to_the_moon flex justify-around items-center">
        <div style="width: 70%">
          Passos até a lua
          <q-linear-progress
            rounded
            size="10px"
            color="info"
            :value="moon_progress"
          />
        </div>
        <q-img
          src="https://i.ibb.co/pfp44zc/real-flag-removebg-preview.png"
          spinner-color="white"
          style="height: 35; max-width: 45px; width: 30%"
        />
      </div>
      <div class="center_of_earth flex justify-around items-center">
        <div style="width: 70%">
          Até o centro da terra
          <q-linear-progress
            rounded
            size="10px"
            color="info"
            :value="earth_progress"
          />
        </div>
        <q-img
          src="https://i.ibb.co/rZhSTz4/earth-removebg-preview.png"
          spinner-color="white"
          style="height: 35; max-width: 45px; width: 30%"
        />
      </div>
      <div class="knowlegdge flex justify-around items-center">
        <div style="width: 70%">
          Conhecimento abduzido
          <q-linear-progress
            rounded
            size="10px"
            color="secondary"
            :value="know_progress"
          />
        </div>

        <q-img
          src="https://i.ibb.co/Z6rwPxL/flag-removebg-preview.png"
          spinner-color="white"
          style="height: 35; max-width: 45px; width: 30%"
        />
      </div>
      <div class="shine flex justify-around items-center">
        <div style="width: 70%">
          Pronto pra brilhar
          <q-linear-progress
            rounded
            size="10px"
            color="info"
            :value="shine_progress"
          />
        </div>
        <q-img
          src="https://i.ibb.co/0KJDLLB/sun-removebg-preview.png"
          spinner-color="white"
          style="height: 35; max-width: 45px; width: 30%"
        />
      </div>
    </div>

    <div class="friends q-pa-lg">
      <div class="q-mb-sm">
        <h5 style="font-size: 1.2em" class="friends_title text-bold">Amigos</h5>
      </div>
      <div class="friends_list flex justify-around">
        <div class="friend text-center">
          <q-avatar size="70px">
            <img src="../assets/img/young.jpeg" />
          </q-avatar>
          <p>FASE 2</p>
        </div>
         <div class="friend text-center">
          <q-avatar size="70px">
            <img src="../assets/img/woman (1).jpg" />
          </q-avatar>
          <p>FASE 3</p>
        </div>
        <div class="friend text-center">
          <q-avatar size="70px">
           <img src="../assets/img/man_resize.jpg" />
          </q-avatar>
          <p>FASE 5</p>
        </div>
      </div>
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
      moon_progress: 0.5,
      earth_progress: 0.6,
      know_progress: 0.4,
      shine_progress: 0.6,
    };
  },
};
</script>

<style scoped lang="scss">
.q-page {
  color: $text_color;
}
.profile {
  background-image: linear-gradient(#eaeaea, #ffffff) !important;
}
.profile_title {
  font-family: "Pelida Bold";
  font-weight: 500;
  padding: 20px;
  margin: 0;
}
.performace_title,
.friends_title {
  margin: 0;
}
.friends_title p {
  font-weight: 800 !important;
}

.improve_title {
  margin-bottom: 30px;
  padding: 20px 0px;
  width: 100%;
}
.profile_info .desc p {
  margin: 0;
}
.profile_info .desc .ong_name {
  color: #594e5a;
}
</style>
<template>
  <section>
    <v-app-bar
      :style="{ backgroundColor: change_color ? '#005546' : 'transparent' }"
      fixed
      flat
    >
      <router-link to="/">
        <v-toolbar-title>
          <v-img src="@/assets/logo_with_text.png"></v-img>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn
        text
        class="text-capitalize "
        color="white"
        link
        to="/list-rent"
      >
        Reservasi
      </v-btn>

      <v-btn text class="text-capitalize " color="white"> Testimony </v-btn>

      <v-btn text class="text-capitalize " color="white"> Our Story </v-btn>
    </v-app-bar>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    scrollPosition: null,
  }),
  computed: {
    change_color() {
      return this.scrollPosition > 200;
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.change-color {
  background-color: red;
}
</style>
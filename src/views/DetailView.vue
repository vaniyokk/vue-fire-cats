<template lang="pug">
  v-container
    v-layout
      v-flex(lg6 offset-lg3)
        v-card(v-if="cat")
          v-img(:src="cat.url" :aspect-ratio="1")
          v-card-title 
            | {{ cat.comment }}
          v-card-text 
            | {{ cat.info }}
</template>

<script>
export default {
  data() {
    return {
      cat: null
    };
  },
  mounted() {
    this.cat = this.getCats().find(
      cat => cat['.key'] === this.$route.params.id
    );
  },
  methods: {
    getCats() {
      if (navigator.onLine) {
        return this.$root.cat;
      } else {
        return JSON.parse(localStorage.getItem('cats'));
      }
    }
  }
};
</script>

<template lang="pug">
  v-container(fluid="" grid-list-lg="")
    v-layout(row="" wrap="")
      v-flex(v-for="picture in this.getCats()" :key="picture.url" xs12="" sm6="" lg4="")
        v-card.white--text(color="blue-grey darken-2" :to="'/detail/' + picture['.key']")
          v-img(:src="picture.url" :aspect-ratio="1")
          v-card-title(primary-title="")
            .headline {{ picture.comment}}

    v-speed-dial(fixed bottom right direction="top" transition="slide-y-reverse-transition")
      v-btn(slot="activator" color="pink" dark fab )
        v-icon add
        v-icon close
      v-btn(fab dark small to="/camera" color="blue")
        v-icon camera_alt
      v-btn(fab dark small to="/post" color="orange")
        v-icon cloud

</template>

<script>
export default {
  methods: {
    getCats() {
      if (navigator.onLine) {
        this.saveCatsToCache();
        return this.$root.cat;
      } else {
        return JSON.parse(localStorage.getItem('cats'));
      }
    },
    saveCatsToCache() {
      this.$root.$firebaseRefs.cat
        .orderByChild('created_at')
        .once('value', snapshot => {
          let cachedCats = [];
          snapshot.forEach(catSnapshot => {
            let cachedCat = catSnapshot.val();
            cachedCat['.key'] = catSnapshot.key;
            cachedCats.push(cachedCat);
          });
          localStorage.setItem('cats', JSON.stringify(cachedCats));
        });
    }
  },
  mounted() {
    this.saveCatsToCache();
  }
};
</script>

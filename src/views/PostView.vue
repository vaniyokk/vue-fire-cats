<template lang="pug">
  v-container
    v-layout
      v-flex(lg6 offset-lg3)
        form
          v-img(:src="this.cat.url" v-if="this.cat.url" :aspect-ratio="1")
          v-text-field(v-model="cat.title" label="Title" required)
          v-btn(@click="postCat") Post a cat
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cat: {
        url: null,
        title: ''
      }
    };
  },
  async mounted() {
    const { data } = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    );
    this.cat.url = data[0].url;
  },
  methods: {
    postCat() {
      this.$root.$firebaseRefs.cat
        .push({
          url: this.cat.url,
          comment: this.cat.title,
          info: 'Posted by Charles on Tuesday',
          created_at: -1 * new Date().getTime()
        })
        .then(this.$router.push('/'));
    }
  }
};
</script>

<template>
  <v-flex>
    <v-card v-if="cat">
      <v-img :src="cat.url">
      </v-img>
      <v-card-title>{{ cat.comment }}</v-card-title>
      <v-card-text>{{ cat.info }}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      cat: null
    }
  },
  mounted () {
    this.cat = this.$root.cat.find((cat) => cat['.key'] === this.$route.params.id)
  }
};
</script>

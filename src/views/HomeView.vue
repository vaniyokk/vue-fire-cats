<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="picture in this.$root.cat" :key="picture.url" xs12>
        <v-card color="blue-grey darken-2" class="white--text" :to="'/detail/' + picture['.key']">
          <v-img :src="picture.url"></v-img>
          <v-card-title primary-title>
            <div class="headline">{{ picture.comment}}</div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn
      to="/post"
      color="pink"
      fab
      fixed
      bottom
      right
    ><v-icon>add</v-icon></v-btn>
  </v-container>
</template>

<script>
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({ name: 'detail', params: { id: id } })
      }
    }
  }
</script>

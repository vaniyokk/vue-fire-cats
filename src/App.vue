<template lang="pug">
  v-app
    v-navigation-drawer(persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app)
      v-list
        v-list-tile(value="true" v-for="(item, i) in items" :key="i" :to="item.path")
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar(app :clipped-left="clipped")
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title(v-text="title")
      v-spacer
    v-content
      router-view
    v-footer(:fixed="fixed" app)
      v-layout(justify-center)
        v-flex(text-xs-center)
          span © 2017
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          path: '/'
        },
        {
          icon: 'add',
          title: 'Random cat',
          path: '/post'
        },
        {
          icon: 'camera',
          title: 'Take picture',
          path: '/camera'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'FireCats'
    };
  }
};
</script>

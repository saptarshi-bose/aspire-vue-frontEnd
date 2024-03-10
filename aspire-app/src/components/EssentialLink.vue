<template>
  <q-item
    clickable
    class="navbar-items"
    :to="link"
    v-ripple
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <img :src="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#/cards'
    },

    icon: {
      type: String,
      default: ''
    }
  }
});
</script>
<style lang="scss">
.navbar-items{
  margin-bottom: 12%;
}
</style>
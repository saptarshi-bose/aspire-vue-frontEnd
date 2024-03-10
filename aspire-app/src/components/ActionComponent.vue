<template>
    <div @click="clickHandler">
        <q-btn round color="secondary" style="width: fit-content; object-fit: cover;" >
            <img :src="data.logo" style="width: 100%; height: 100%; object-fit: cover;">
        </q-btn>
        <p style="width: 80%">{{data.title}}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'actionComponent',
  props: {
    data: {
      type: Object,
      required: true
    },
    clickHandler: {
      type: Function,
      required: true
    }
  },
});
</script>
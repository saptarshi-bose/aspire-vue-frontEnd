<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar> -->
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="navbar"
    >
      <q-list>
        <q-item-label
          header
        >
          <q-img src="Aspire Logo.svg"
          class="aspire-logo-navbar"  />
        </q-item-label>
        <q-item-label style="opacity:30%; margin-bottom: 20%;">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    icon: '/icons/Home.svg',
    link: '/'
  },
  {
    title: 'Cards',
    icon: '/icons/Card.svg',
    link: '/cards'
  },
  {
    title: 'Payments',
    icon: '/icons/Payments.svg',
    link: '/payments'
  },
  {
    title: 'Credit',
    icon: '/icons/Credit.svg',
    link: '/credits'
  },
  {
    title: 'Settings',
    icon: '/icons/user.svg',
    link: '/settings'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>

<style lang="scss">
.aspire-logo-navbar{
  max-width: 60%;
}
.navbar{
  padding: 16% 12% 0% 16%;
  background-color: #0C365A;
  color: white;
}
</style>

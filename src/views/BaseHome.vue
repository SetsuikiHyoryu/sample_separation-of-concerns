<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

import { routes } from '@/router'
import { RouteType } from '@/enums'

const displayList = routes.filter(
  (item: RouteRecordRaw) => item.meta?.type === RouteType.FEATURE_PAGE
)
</script>

<template>
  <div id="base-home">
    <h1>Home</h1>

    <nav class="navigation">
      <ul>
        <li v-for="route in displayList" :key="route.name">
          <RouterLink :to="route">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#base-home {
  padding: 2rem;
}
</style>

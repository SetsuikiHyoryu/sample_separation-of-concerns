<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router'

interface Props {
  route: RouteRecordRaw
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="route">γ θΏε</RouterLink>
</template>

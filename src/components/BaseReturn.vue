<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router'

interface Props {
  route: RouteRecordRaw
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="route">く 返回</RouterLink>
</template>

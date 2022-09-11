<!-- 加減器 -->
<script lang="ts" setup>
import BaseReturn from '@/components/BaseReturn.vue'

import type { UsePlusMinusMachine } from '@/hooks/services'
import type { RouteRecordRaw } from 'vue-router'

import { usePlusMinusMachine } from '@/hooks/services'
import { routes } from '@/router'
import { RouteType } from '@/enums'
import { onBeforeUnmount } from 'vue'

const { _number, setNumber, resetState }: UsePlusMinusMachine =
  usePlusMinusMachine()

/** 返回按钮 */
const returnRoute: RouteRecordRaw =
  routes.find(
    (route: RouteRecordRaw): boolean => route.meta?.type === RouteType.HOME
  ) ?? ({ path: '/' } as RouteRecordRaw)

/** 加减器 */
// 操作 DOM 时我只关心调用了什么方法，并不关心方法中的实现
function handlePlus(): void {
  setNumber(1)
}

function handleMinus(): void {
  setNumber(-1)
}

// 御载组件时重置 State 以使每次进入画面都以默认值开始
onBeforeUnmount(() => resetState())
</script>

<template>
  <div id="plus-minus-machine">
    <!-- 返回铵钮 -->
    <BaseReturn class="return" :route="returnRoute" />

    <!-- 加减器 -->
    <div class="content-wrapper">
      <button class="button" @click="handleMinus">-</button>
      <span>{{ _number }}</span>
      <button class="button" @click="handlePlus">+</button>
    </div>
  </div>
</template>

<style scoped>
#plus-minus-machine {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 2rem;
  position: relative;
}

.return {
  left: 2rem;
  position: absolute;
  top: 2rem;
}

.content-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
}

.button {
  height: 3rem;
  margin: 2rem;
  width: 5rem;
}
</style>

<!-- Todo List -->
<script lang="ts" setup>
import BaseReturn from '@/components/BaseReturn.vue'

import type { RouteRecordRaw } from 'vue-router'
import type { TodoList } from '@/store'

import { ref, computed } from 'vue'
import { useTodoList } from '@/store'

const store = useTodoList()
const { addTodo, toggleTodo, deleteTodo } = store

/** Input */
const inputValue = ref<string>('')
const setInputValue = (value: string) => (inputValue.value = value)

function handleInput(event: Event): void {
  const node = event.target as HTMLInputElement
  setInputValue(node.value)
}

function handleEnterInput(event: Event): void {
  const node = event.target as HTMLInputElement
  addTodo(node.value)
  setInputValue('')
}

/** List */
const todoList = computed<TodoList>(() => store.todoList)

function clickTodo(id: number): void {
  toggleTodo(id)
}
</script>

<template>
  <div id="todo-list">
    <!-- 返回键 -->
    <BaseReturn class="return" :route="{ path: '/' } as RouteRecordRaw" />

    <!-- TodoList -->
    <div class="content-wrapper">
      <!-- 输入框 -->
      <input
        class="input"
        type="text"
        :value="inputValue"
        @input="handleInput"
        @keypress.enter="handleEnterInput"
      />

      <!-- 列表 -->
      <ul>
        <li
          tabindex="0"
          v-for="item in todoList"
          :key="item.id.toString()"
          @click.self="() => clickTodo(item.id)"
        >
          <!-- 待办事项 -->
          <span class="todo-content" :class="{ 'line-through': item.status }">
            {{ item.content }}
          </span>

          <!-- 删除按钮 -->
          <span
            class="close-icon"
            tabindex="0"
            @click.stop="() => deleteTodo(item.id)"
          >
            ✕
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#todo-list {
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
  background: #333;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #000;
  height: 30rem;
  padding: 2rem;
}

.input {
  border-radius: 4px;
  height: 2rem;
  width: 30rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 2rem 0 0;
}

ul li {
  align-items: center;
  border: 1px solid #eee6;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 3rem;
  margin: 0.7rem 0 0;
  padding: 8px;
  position: relative;
  width: 100%;
}

ul li:hover {
  outline: 2px solid #eee6;
}

ul li:active {
  background: #0003;
}

.line-through {
  text-decoration: line-through;
}

.close-icon {
  align-items: center;
  background: #fff;
  border-radius: 50%;
  color: #333;
  display: flex;
  font-weight: 900;
  height: 1rem;
  justify-content: center;
  position: absolute;
  padding: 0.3rem;
  right: 1rem;
  width: 1rem;
}

.close-icon:hover {
  outline: 2px solid #eee;
}

.close-icon:active {
  background: #fff9;
}
</style>

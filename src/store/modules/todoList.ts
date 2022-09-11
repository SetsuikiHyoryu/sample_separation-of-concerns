import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

const STORE_TYPE = 'todoList'

export interface TodoItem {
  id: number // 时间戳
  content: string // 内容
  status: boolean // 完成状态: true: 已完成; false: 未完成
}

export type TodoList = TodoItem[]

interface State {
  todoList: Ref<TodoList>
}

interface Actions {
  addTodo(todoContent: string): void
  toggleTodo(id: number): void
  deleteTodo(id: number): void
}

export interface UseTodoList extends State, Actions {}

export const useTodoList = defineStore<typeof STORE_TYPE, UseTodoList>(
  STORE_TYPE,

  () => {
    const todoList = ref<TodoList>([])

    function addTodo(todoContent: string): void {
      const item: TodoItem = {
        id: Date.now(),
        content: todoContent,
        status: false
      }

      todoList.value = [item, ...todoList.value]
    }

    function toggleTodo(id: number): void {
      const target: TodoItem | undefined = todoList.value.find(
        (item: TodoItem): boolean => item.id === id
      )

      if (!target) {
        return
      }

      target.status = !target.status
    }

    function deleteTodo(id: number): void {
      todoList.value = todoList.value.filter(
        (item: TodoItem): boolean => item.id !== id
      )
    }

    return { todoList, addTodo, toggleTodo, deleteTodo }
  }
)

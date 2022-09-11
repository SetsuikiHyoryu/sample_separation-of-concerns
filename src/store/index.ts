import { createPinia } from 'pinia'

export { usePlusMinusMachine } from './modules/plus-minus-machine'

export type {
  PlusMinusMachineState,
  PlusMinusMachineActions
} from './modules/plus-minus-machine'

export { useTodoList } from './modules/todoList'

export type { UseTodoList, TodoItem, TodoList } from './modules/todoList'

const pinia = createPinia()

export default pinia

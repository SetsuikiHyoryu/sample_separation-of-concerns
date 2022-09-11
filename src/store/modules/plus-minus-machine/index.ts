import type { PlusMinusMachineState } from './state'
import type { PlusMinusMachineActions } from './actions'

import { defineStore } from 'pinia'
import state from './state'
import actions from './actions'

export { PlusMinusMachineState, PlusMinusMachineActions }

const STORE_TYPE = 'plusMinusMachine'

export const usePlusMinusMachine = defineStore<
  typeof STORE_TYPE,
  PlusMinusMachineState,
  {},
  PlusMinusMachineActions
>(STORE_TYPE, { state, actions })

import type { ComputedRef } from 'vue'

import { usePlusMinusMachine } from '@/store'
import { computed } from 'vue'

export interface UsePlusMinusMachine {
  _number: ComputedRef<number>
  setNumber(value: number): void
  resetState(): void
}

export default (): UsePlusMinusMachine => {
  const store = usePlusMinusMachine()
  const { setNumber } = store

  return {
    _number: computed<number>(() => store._number),
    setNumber,
    resetState: (): void => store.$reset(),
  }
}

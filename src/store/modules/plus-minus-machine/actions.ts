import { usePlusMinusMachine } from '.'

export interface PlusMinusMachineActions {
  setNumber(value: number): void
}

export default {
  setNumber(value: number): void {
    const { $patch, _number } = usePlusMinusMachine()
    $patch({ _number: _number + value })
  },
}

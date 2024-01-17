import { signal, effect } from "@preact/signals-react"

const count = signal(0)
const Counter = () => {
  effect(() => console.log(count.value))
  return <button onClick={() => count.value++}>{count}</button>
}

export function Signal() {
  return (<Counter/>)
}

export default Signal
import { ref } from 'vue'

export default function (initialValue, key) {
  const val = ref(initialValue)

  window.localStorage.setItem(key, JSON.stringify(val.value))
  const storageVal = window.localStorage.getItem(key)

  if (storageVal) {
    val.value = JSON.parse(storageVal)
  }
  return val
}

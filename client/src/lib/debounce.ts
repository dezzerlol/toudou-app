//@ts-nocheck

export function debounce(callback: any, wait: number) {
  let timeout: any
  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      callback.apply(this, args)
    }, wait)
  }
}

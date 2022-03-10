function debounce(func: Function, timeout: number = 150) {
    let timer: any
    return (...args: any) => {
        clearTimeout(timer)
        timer = setTimeout(() => {func.apply(args)}, timeout)
    }
}

export default debounce;
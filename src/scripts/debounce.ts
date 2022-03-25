/**
 * Prevents a function from being run too often.
 * @param func The function to be debounced
 * @param timeout How often to run the function (in milliseconds)
 */
function debounce(func: Function, timeout: number = 150) {
    let timer: any
    return (...args: any) => {
        clearTimeout(timer)
        timer = setTimeout(() => {func.apply(args)}, timeout)
    }
}

export default debounce;
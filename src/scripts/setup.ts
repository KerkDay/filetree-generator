import { Writable, writable } from "svelte/store"
import { setContext } from "svelte"

import { settings, icons, defaultTree } from "../constants"

const localStorage = window.localStorage;

function setup(): void {
    const settingsStore = createStore("settings", settings)
    const iconStore = createStore("icons", icons)
    const tree = createStore("tree", defaultTree)
}

/**
 * Creates a svelte store that is put inside an attainable context 
 * throughout the project, and syncs with localStorage
 * @param title 
 * @param value 
 * @returns the store created
 */
function createStore(title: string = "title", value: any = null): Writable<any> {
    const newStore = writable(value)
    
    const localValue = localStorage.getItem(title)
    if (localValue) {
        newStore.set(localValue)
    }

    newStore.subscribe(value => {
        localStorage.setItem(title, value)
    })

    setContext(title, newStore)

    return newStore
}

export default setup
export { setup, createStore }

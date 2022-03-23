interface AsciiSymbolsSets {
    [index: string]: {
        base: string,
        files: string,
        last_file?: string
    }
}

const asciiSymbols: AsciiSymbolsSets = {
    "Default": {
        base: "│",
        files: "├",
        last_file: "└"
    },
    "Thick": {
        base: "┃",
        files: "┣",
        last_file: "┗"
    }
}

export default asciiSymbols
export { asciiSymbols }
export type {AsciiSymbolsSets}
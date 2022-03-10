import icons from "./icons"
import themes from "./themes"
import asciiSymbols from "./asciiSymbols"

interface SettingsSets {
    [index: string]: {
        default: any,
        title: string,
        tooltip?: string,
        selection?: any[] | Object
    }
}

const settings: SettingsSets = {

        // ASCII Control
        "tree_symbols": {
            default: asciiSymbols.Default,
            title: "Tree Characters",
            selection: Object.keys(asciiSymbols)
        },

        // Directory Control
        "add_slash": {
            default: true,
            title: "Automatically add slashes to directories"
        },
        "slash_character": {
            default: ["\\", "/"],
            title: "The character(s) used for folders",
            tooltip: "The first character would be the default character used"
        },

        // Icon Control
        "use_icons": {
            default: true,
            title: "Use icons for folders and files",
        },
        "icons": {
            default: icons.Default,
            title: "Icon Set",
            selection: Object.keys(icons)
        },

        // Editor Look
        "theme": {
            default: themes.Github,
            title: "Theme",
            selection: Object.keys(themes)
        }
}

export default settings
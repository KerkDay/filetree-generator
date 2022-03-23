interface IconSets {
    [index: string]: {
        /** For the base folder */
        base?: string,
        /** For files that don't have a recognized icon */
        default?: string,
        /** For folders (by default) */
        folder?: string,
        exact?: {
            [index: string]: string
        }
        /** A dictionary of file types to associated icon
         * @example "js": "📜"
         */
        ends_with?: [string[], string][]
        /** A set of file exension to associated icons as a dictionary
         * @example ["js"]: "📜"
         */
        begins_with?: {
            [index: string]: string
        }
    }
}

const icons: IconSets = {
    "Default": {
        base: "📦",
        folder: "📁",
        default: "📄",
        ends_with: [
            [["txt"], "📄"],
            [["md", "markdown"], "📓"],
            [["js"], "🟨"],
            [["ts"], "🟦"],
            [["jsx", "tsx", "mdx"], "⚛"],
            [["css"], "📜"],
            [["exe"], "💿"],
            [["java", "jar"], "☕"],
            [["bmp", "png", "webp", "jpeg", "jpg", "gif", "svg", "ico", "psd"], "🖼"],
            [["mp4", "mkv", "mov", "avi", "flv", "wmv", "webm", "mpeg"], "🎦"],
            [["mp3", "wav", "wma", "mid", "midi", "ogg", "flac"], "🔉"]
        ]
    },
    "Basic": {
        default: "📄",
        folder: "📁",
    },
};

export default icons
export { icons }
export type { IconSets }

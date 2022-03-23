interface ThemeSets {
    [index: string]: string
}

const themes: ThemeSets = {
    "Github Light": "github-light",
    "Github Codeblock Light": "github-code-light",
    "Github Dark": "github-dark",
    "Github Codeblock Dark": "github-code-dark"
}

export default themes
export { themes }
export type { ThemeSets }
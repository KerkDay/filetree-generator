interface FileTree {
    [index: number]: {
        tabs?: number
        icon?: string
        name?: string
        comment?: string
        children?: FileTree[]
    }
}

const defaultTree = [
    { name: "Project" },
    { tabs: 1, name: ".gitignore" },
    { tabs: 1, name: "README.md" },
    { tabs: 1, name: "index.php", icon: "🏠" },
    { tabs: 1, name: "spaghetti.png" },
    { tabs: 1, name: "file", comment: "An example comment" },
    {},
    { comment: "Comments can be added to new lines" }
]

export default defaultTree
export { defaultTree, FileTree }
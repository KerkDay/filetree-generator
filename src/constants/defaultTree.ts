interface FileTree {
    [index: number]: {
        icon?: string,
        name?: string,
        comment?: string,
        children?: FileTree[]
    }
}

const defaultTree = [
    {
        name: "Project",
        children: [
            { name: ".gitignore" },
            { name: "README.md" },
            { name: "index.php", icon: "🏠" },
            { name: "spaghetti.png" },
            { 
                name: "file", 
                comment: "An example comment"
            }
        ]
    },
    {},
    {
        comment: "Comments can be added to new lines"
    }
]

export default defaultTree
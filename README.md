# FileTree Generator Notes

## Plan
This project is to create a basic filetree editor, where a user can quickly and efficiently create a file tree from scratch. This is also to get used to some of the concepts presented in making a brand new WYSIWYG editor.

This project is made in [Svelte](https://svelte.dev), because I like it.

To make this project efficient, it will be based on WYSIWYG concepts, so this will make heavy use of keyboard events. The end project should be easily produced without touching the mouse at all. However, should a user want/nedd to use a mouse they could.

## Structure
Each "row" of the editor is made up of the following items:
- ASCII tree symbols --- `Examples: │ ├ └`
- File Icon --- `Examples: 📦 📁 📜`
- File Name --- `Example: index.js`
- Comments --- `Example: // This is the index file`

With that, their structure in a JSON object would look like this:

## Constants
### `FileTree`
```ts
interface FileTree {
    [index: number]: {
        icon?: string,
        name?: string,
        comment?: string,
        children?: FileTree[]
    }
}
```
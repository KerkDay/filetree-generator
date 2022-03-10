<script lang="ts">
import Comment from "./Comment.svelte"
import FileName from "./FileName.svelte"
import Icon from "./Icon.svelte"
import Structure from "./Structure.svelte"

export let structure: string = ""
export let fileName: string = ""
export let icon: string = ""
export let comment: string = ""
</script>

<div class="line" tabindex="0">
    <Structure>
        {structure}
    </Structure>
    <Icon>
        {icon}
    </Icon>
    <FileName>
        {fileName}
    </FileName>
    <Comment>
        {comment}
    </Comment>
</div>

<style lang="sass">
.line
    color: var(--line-text-color)
    line-height: var(--line-height)
    font-size: var(--line-font-size)
    font-family: var(--line-font-family)
    background-color: var(--line-background)
    &:hover
        background-color: var(--line-hover-background)
    &::focus
        background-color: var(--line-focus-background)
</style>
<script lang="ts">
    export let tagText: string;
    export let onClick: (() => void) | undefined;
</script>

<button class="ai-dashboard-tag" on:click={onClick}>
    {tagText}
</button>

<style>
    .ai-dashboard-tag {
        display: flex;
        padding: 16px 32px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 54px;
        border: none; 
        background: #F1F1F1;    
    }
</style>
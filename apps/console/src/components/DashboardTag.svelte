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
		padding: var(--ai-size-16) var(--ai-size-24);
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: var(--ai-size-56);
		border: none; 
		background: var(--ai-color-neutral-100);    
	}
</style>
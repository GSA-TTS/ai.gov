<script lang="ts">
    export let title: string; 
    export let metric: string | number; 
    export let description: string; 
    export let actions: Array<{ text: string; onClick: () => void }> = [];
</script>

<div class="ai-dashboard-card">
    <div class="ai-dashboard-card__header">
        <h2 class="ai-dashboard-card-header">{title}</h2>
        {#if actions.length}
            <div class="ai-card-actions">
                {#each actions as action (action.text)}
                    <button class="ai-dashboard-card-button" on:click={action.onClick}>
                        {action.text}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
    <div class="ai-dashboard-card__body">
        <p class="description">{description}</p>
        <p class="metric">{metric}</p>
    </div>
</div>



<style>
  .ai-dashboard-card {
    padding: 1rem;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .ai-dashboard-card__header {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .ai-card-actions {
    display: flex;
    gap: 0.5rem;
  }
  .ai-dashboard-card-button {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
</style>
<script lang="ts">
  export let title: string; 
  export let metric: string | number; 
  export let description: string; 
  export let smallMetric: boolean = false;
  export let fullWidth: boolean = false;
  export let actions: Array<{
    text: string;
    iconSrc?: string;
    iconAlt?: string; 
    type?: string;
    href?: string;
    onClick?: () => void;
  }> = [];
</script>

<div class="ai-dashboard-card" class:ai-dashboard-card--full={fullWidth}>
    <div class="ai-dashboard-card__header">
        <h3 class="ai-dashboard-card-header">{title}</h3>
        <div class="ai-card-actions" hidden={!actions.length}>
          {#each actions as action (action.text)}
            <button class="ai-dashboard-card-button" on:click={action.onClick}>
                {action.text}
                {#if action.iconSrc}
                  <img src={action.iconSrc} alt={action.iconAlt || ''} class="ai-dashboard-card-button-icon" />
                {/if}
            </button>
          {/each}
        </div>
    </div>
    <div class="ai-dashboard-card__body">
        <p class="description">{description}</p>
        <p class="metric" class:metric--small={smallMetric}>{metric}</p>    
    </div>
    <div class="ai-dashboard-data-viz">

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
  }
  .ai-dashboard-card--full {
    grid-column: span 2; /* overrides default grid behavior */
  }
  .ai-dashboard-card-header {
    font-size: 14px; 
    color: #888;
    font-weight: 400; 
    margin: 0; 
  }
  .ai-dashboard-card__header {
    display: flex;
    min-height: 35px; 
    justify-content: space-between;
    align-items: center;
  }
  .ai-card-actions {
    display: flex;
    gap: 0.5rem;
  }
  .ai-dashboard-card-button {
    display: flex;
    border-radius: 4px;
    background: transparent; 
    border: 1px solid #E4E4E4;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }
  .metric {
    font-size: 3rem; 
    margin: 0; 
  }
  .metric--small {
    font-size: 2rem;
    font-weight: normal;
  }
</style>
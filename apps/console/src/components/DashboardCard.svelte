<script lang="ts">
  export let title: string; 
  export let halfWidth: boolean = false;
  export let fullWidth: boolean = false;
  const layoutClass = fullWidth
    ? 'ai-dashboard-card--full'
    : halfWidth
    ? 'ai-dashboard-card--half'
    : '';
  export let actions: Array<{
    text: string;
    iconSrc?: string;
    iconAlt?: string; 
    type?: string;
    href?: string;
    onClick?: () => void;
  }> = [];
</script>

<div class={`ai-dashboard-card ${layoutClass}`}>    
  <div class="ai-dashboard-card__header">
    <h3 class="ai-dashboard-card-header">{title}</h3>
    <div class="ai-card-actions" hidden={!actions.length}>
      <slot name="actions" />
    </div>
  </div>
  <div class="ai-dashboard-card__body">    
      <slot/>
  </div>
  <div class="ai-dashboard-data-viz">
    <slot name="data-viz"/>
  </div>
  <div class="ai-dashboard-footer">
    <slot name="footer"/>
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
    justify-content: space-between;
    height: 100%;
    :global(img.icon){
      width: 20px; 
    }
  }
  .ai-dashboard-card--half {
    grid-column: span 2;
  }
  .ai-dashboard-card--full {
    grid-column: span 4;
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
  .ai-dashboard-card__body {
    flex: 1 1 auto;
  }
  .ai-card-actions > :global(*) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .ai-card-actions :global(button),
  .ai-card-actions :global(select),
  .ai-card-actions :global(.card-action-stat) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    background-color: white;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  .ai-card-actions :global(select) {
    padding: 0.5rem 1.75rem 0.5rem 0.5rem;
    appearance: none;
    background-image: url('../uswds/img/usa-icons/expand_more.svg');
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 1rem auto;
  }
  :global(.metric) {
    font-size: 3rem; 
    margin: 0; 
  }
  :global(.metric--small) {
    font-size: 2rem;
    font-weight: normal;
  }
  :global(.ai-dashboard-list--large) {
    padding-left: 0rem; 
    font-size: 1.5rem;
    :global(li) {
      padding-bottom: 1rem; 
      display: flex; 
      flex-direction: row;
      justify-content: space-between;
      :global(.performance) {
        font-size: 0.875rem;
        display: flex; 
        align-items: center;
        gap: 0.25rem;
      }
    }
  }
  .ai-dashboard-footer > :global(*) {
    align-self: flex-start;
    display: flex;  
    flex-direction: row;
    :global(p) {
      margin: 0.25rem 0; 
      font-size: 0.875rem; 
      display: flex; 
      align-items: center; 
      gap: 0.25rem;
    }
  }
  .ai-dashboard-footer:empty {
    display: none;
  }
</style>
<script lang="ts">
  export let title: string; 
  export let titleId: string;
  export let headingLevel = 'h2'; 
  export let halfWidth: boolean = false;
  export let fullWidth: boolean = false;
  const layoutClassMap: Record<'full' | 'half' | 'default', string> = {
    full: 'ai-dashboard-card--full',
    half: 'ai-dashboard-card--half',
    default: ''
  };
  const width = fullWidth ? 'full' : halfWidth ? 'half' : 'default';
  const layoutClass = layoutClassMap[width];
  export let actions: Array<{
    text: string;
    iconSrc?: string;
    iconAlt?: string; 
    type?: string;
    href?: string;
    onClick?: () => void;
  }> = [];
</script>

<section aria-labelledby={titleId} class={`ai-dashboard-card ${layoutClass}`}>
  <div class="ai-dashboard-card__header">
  <svelte:element this={headingLevel} id={titleId} class="ai-dashboard-card-header">{title}</svelte:element>   
    <div class="ai-card-actions" aria-label="Dashboard card actions" hidden={!actions.length}>
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
</section>

<style>
  .ai-dashboard-card {
    padding: var(--ai-size-16);
    background: var(--ai-color-white);
    border: 1px solid var(--ai-color-neutral-100);
    border-radius: var(--ai-size-8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    :global(img.icon){
      width: var(--ai-size-20); 
    }
  }
  .ai-dashboard-card--half {
    grid-column: span 2;
  }
  .ai-dashboard-card--full {
    grid-column: 1 / -1;
  }
  .ai-dashboard-card-header {
    font-size: var(--ai-size-14); 
    color: var(--ai-color-neutral-800);
    font-weight: 400; 
    margin: 0; 
  }
  .ai-dashboard-card__header {
    display: flex;
    min-height: var(--ai-size-32); 
    justify-content: space-between;
    align-items: center;
  }
  .ai-dashboard-card__body {
    flex: 1 1 auto;
  }
  .ai-card-actions > :global(*) {
    display: flex;
    align-items: center;
    gap: var(--ai-size-8);
  }
  .ai-card-actions :global(button),
  .ai-card-actions :global(select),
  .ai-card-actions :global(.card-action-stat) {
    padding: var(--ai-size-8) var(--ai-size-12);
    font-size: var(--ai-size-14);
    border: 1px solid var(--ai-color-neutral-100);
    border-radius: var(--ai-size-2);
    background-color: white;
    display: inline-flex;
    align-items: center;
    gap: var(--ai-size-8);
  }
  .ai-card-actions :global(select) {
    padding: var(--ai-size-8) var(--ai-size-28) var(--ai-size-8) var(--ai-size-8);
    appearance: none;
    background-image: url('/uswds/img/usa-icons/expand_more.svg');
    background-repeat: no-repeat;
    background-position: right var(--ai-size-8) center;
    background-size: var(--ai-size-16) auto;
  }
  :global(.metric) {
    font-size: var(--ai-size-48); 
    margin: 0; 
  }
  :global(.metric--small) {
    font-size: var(--ai-size-32);
    font-weight: normal;
  }
  :global(.ai-dashboard-list--large) {
    padding-left: 0; 
    font-size: var(--ai-size-24);
    :global(li) {
      padding-bottom: var(--ai-size-16); 
      display: flex; 
      flex-direction: row;
      justify-content: space-between;
      :global(.performance) {
        font-size: var(--ai-size-14);
        display: flex; 
        align-items: center;
        gap: var(--ai-size-4);
      }
    }
  }
  .ai-dashboard-footer > :global(*) {
    align-self: flex-start;
    display: flex;  
    flex-direction: row;
    :global(p), :global(span) {
      margin: var(--ai-size-4) 0; 
      font-size: var(--ai-size-14); 
      display: flex; 
      align-items: center; 
      gap: var(--ai-size-16);
    }
  }
  .ai-dashboard-footer:empty {
    display: none;
  }
</style>

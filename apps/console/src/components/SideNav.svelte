<script>
  import { toggleSidebar } from '../utils/toggleSidebar.js';
  import { Logo } from '@repo/ui/components';
  import { getUrlFromBase } from '@repo/ui/helpers/url.js';
  import NavigationSection from './NavigationSection.svelte';
  import SideNavUserFooter from './SideNavUserFooter.svelte';
  import { sideNavConfig } from '../../data/sideNavConfig.js';
  export let currentPath = '';
</script>

<div class="ai-console-sidebar__brand">
  <Logo />
  <div class="ai-console-sidebar__mobile-close">
    <button
      class="ai-console-sidebar__close-btn usa-button--unstyled"
      aria-label="Close menu"
      on:click={toggleSidebar}>
       <img
        alt=""
        class="display-block"
        src={getUrlFromBase('/uswds/img/usa-icons/close.svg')}
        width=24
        height=24
      />  
    </button>
  </div>
</div>

<nav class="ai-console-sidebar__nav">
  {#each sideNavConfig.sections as section}
    <NavigationSection
      title={section.title}
      items={section.items}
      {currentPath}
    />
  {/each}
</nav>

<SideNavUserFooter
  userName="General Services Administration"
  userRole="Longer Agency Name"
  avatarText="ZW"
  avatarColor="#374151"
/>


<style>

.ai-console-sidebar__brand {
  padding: 0 var(--ai-size-24) var(--ai-size-24);
  display: flex; 
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  :global(.usa-logo) {
    margin-left: 0; 
  }
  :global(img) {
    max-width: var(--ai-size-56); 
  } 
}

@media(min-width: 40rem) {
  .ai-console-sidebar__mobile-close {
    display: none; 
  }
}

.ai-console-sidebar__nav {
  flex: 1; 
}

</style>

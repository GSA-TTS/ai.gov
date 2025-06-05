<script lang="ts">
  import NavigationLink from './NavigationLink.svelte';

  export let title: string;
  export let items: Array<{ label: string; href: string }>;
  export let currentPath: string = '';

  const sectionId = `nav-section-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const listId = `nav-list-${title.toLowerCase().replace(/\s+/g, '-')}`;
</script>

<section
  class="ai-nav-section"
  role="group"
  aria-labelledby={sectionId}
>
  <h3 class="ai-nav-section__title" id={sectionId}>{title}</h3>
  <ul 
    class="ai-nav-section__list"
    id={listId}
    role="menu"
    aria-labelledby={sectionId}>
    {#each items as item}
      <NavigationLink
        href={item.href}
        label={item.label}
        isActive={currentPath === item.href}
      />
    {/each}
  </ul>
</section>

<style>
  .ai-nav-section {
    margin-bottom: var(--ai-size-32);
  }

  .ai-nav-section__title {
    padding: 0 var(--ai-size-24);
    margin: 0 0 var(--ai-size-16) 0;
    font-size: var(--ai-size-12);
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .ai-nav-section__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>

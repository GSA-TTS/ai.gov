<script lang="ts">
  export let href: string;
  export let label: string;
  export let isActive: boolean = false;
  
type AriaCurrent = "page" | "step" | "location" | "date" | "time" | boolean;
let ariaCurrent: AriaCurrent;

$: ariaCurrent = isActive ? "page" : false;
</script>

<li class="ai-nav-link__item">
  <a 
    {href}
    class="ai-nav-link"
    class:ai-nav-link--active={isActive}
    aria-current={ariaCurrent}
    role="menuitem"
    tabindex="0"
  >
    <span class="ai-nav-link__label">{label}</span>
  </a>
</li>

<style>
  .ai-nav-link__item {
    margin: 0;
  }

  .ai-nav-link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    color: #4b5563;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .ai-nav-link:hover {
    background-color: #f1f5f9;
    color: #1f2937;
  }

  .ai-nav-link--active {
    color: black;
    font-weight: bold;
  }

  .ai-nav-link__label {
    flex: 1;
  }
</style>

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
    padding: var(--ai-size-12) var(--ai-size-24);
    color: #4b5563;
    text-decoration: none;
    font-size: var(--ai-size-16);
    font-weight: 400;
    transition: color 0.3s ease-in;
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

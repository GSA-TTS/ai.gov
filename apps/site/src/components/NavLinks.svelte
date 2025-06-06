<script>
  export let isPlatformExpanded = false;
  export let togglePlatformMenu;
</script>

<ul class="usa-nav__primary usa-accordion ai-nav__primary">
  <li class="usa-nav__primary-item ai-nav__primary-item">
    <button
      type="button"
      class="usa-accordion__button usa-nav__link"
      aria-controls="platform-submenu"
      aria-expanded={isPlatformExpanded}
      on:click={togglePlatformMenu}
    >
      <span>Platform</span>
    </button>
    <ul
      id="platform-submenu"
      class="usa-nav__submenu ai-nav__submenu {isPlatformExpanded
        ? 'usa-nav__submenu--expanded'
        : ''}"
    >
      <li class="usa-nav__submenu-item ai-nav__submenu-item">
        <a href="/"><span>Chat</span></a>
      </li>
      <li class="usa-nav__submenu-item ai-nav__submenu-item">
        <a href="/"><span>API</span></a>
      </li>
      <li class="usa-nav__submenu-item ai-nav__submenu-item">
        <a href="/"><span>Console</span></a>
      </li>
    </ul>
  </li>
  <li class="usa-nav__primary-item ai-nav__primary-item">
    <a href="/" class="usa-nav-link">Use Cases</a>
  </li>
  <li class="usa-nav__primary-item ai-nav__primary-item">
    <a href="/" class="usa-nav-link">Guides</a>
  </li>
</ul>

<style>
  .ai-nav__primary button,
  .ai-nav__primary a {
    font-weight: 500;
    color: var(--ai-color-neutral-900);
  }

  .ai-nav__primary button:hover,
  .ai-nav__primary a:hover {
    color: #005ea2;
  }
  .ai-nav__primary button[aria-expanded='true'] {
    background-color: var(--ai-color-neutral-50);
  }
  .ai-nav__primary button[aria-expanded='true'] span::after {
    background-color: var(--ai-color-neutral-900);
  }

  .ai-nav__submenu {
    background-color: var(--ai-color-neutral-50);
  }

  .ai-nav__submenu-item a {
    color: var(--ai-color-black);
  }

  .ai-nav__submenu-item a:hover {
    background-color: var(--ai-color-neutral-900);
    color: var(--ai-color-white);
  }

  @media (--ai-size-breakpoint-desktop) {
    .ai-nav__submenu {
      width: 9rem;
    }
  }
</style>

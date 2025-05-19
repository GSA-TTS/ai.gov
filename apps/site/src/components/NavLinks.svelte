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
  a {
    font-weight: 500;
    color: #404040;
  }

  .ai-nav__primary button:hover,
  a:hover {
    font-weight: 500;
    color: #005ea2;
  }
  .ai-nav__primary button[aria-expanded='true'] {
    background-color: #f0f0f0;
    font-weight: 500;
  }
  .ai-nav__primary button[aria-expanded='true'] span::after {
    background-color: #404040;
  }

  .ai-nav__submenu {
    background-color: #f0f0f0;
  }

  .ai-nav__submenu-item a {
    color: #000;
  }

  .ai-nav__submenu-item a:hover {
    background-color: #404040;
    color: #fff;
  }

  @media (min-width: 64em) {
    .ai-nav__submenu {
      width: 9rem;
    }
  }
</style>

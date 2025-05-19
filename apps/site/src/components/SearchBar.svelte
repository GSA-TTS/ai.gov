<form class="usa-search" role="search">
  <label class="usa-sr-only" for="search-field-en-small">Search</label>
  <input
    class="usa-input ai-input"
    id="search-field-en-small"
    type="search"
    name="search"
  />
  <button class="usa-button ai-search-button" type="submit" aria-label="Search">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
        stroke="#0F172A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</form>

<style>
  [type='search'] {
    height: var(--ai-button-height);
  }

  .ai-input {
    border-color: var(--ai-button-border-outline-rest);
    border-radius: var(--ai-radius-round);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .ai-search-button {
    border-radius: var(--ai-button-radius);
    background-color: transparent;
    border: 1px solid var(--ai-button-border-outline-rest);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: transparent;
    height: var(--ai-button-height);
  }
</style>

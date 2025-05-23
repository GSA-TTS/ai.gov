<div class="ai-menu-buttons">
  <button
    class="usa-button usa-button--primary ai-button ai-button--primary"
    type="button"
  >
    Log in
  </button>
  <button
    class="usa-button usa-button--outline ai-button ai-button--outline"
    type="button"
  >
    Chat
  </button>
</div>

<style>
  .ai-menu-buttons {
    display: flex;
    gap: 1rem;
  }
  @media (max-width: 64em) {
    .ai-menu-buttons {
      flex-direction: column;
      padding: 1rem;
      margin-bottom: 1.5rem;
      position: absolute;
      bottom: 0;
      width: 90%;
    }
  }
</style>

<script>
  export let onClick;
</script>

<button type="button" class="usa-menu-btn ai-menu-btn" on:click={onClick}>
  Menu
</button>

<style>
  .ai-menu-btn {
    background-color: var(--ai-button-background-primary-rest);
  }
</style>

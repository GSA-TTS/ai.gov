<script>
  export let features = [];
</script>

<section
  class="grid-container ai-maxw-widescreen desktop:padding-x-4"
  aria-label="Key features"
>
  <div class="padding-y-4 ai-feature-card-row">
    {#each features as feature}
      <div class="grid-row padding-y-4 ai-feature-card">
        <div class="ai-feature-card__icon">
          <img
            src={feature.iconPath}
            alt={feature.iconAlt || ''}
            width="83"
            height="83"
          />
        </div>
        <h2 class="ai-feature-card__title">{feature.title}</h2>
        <div class="ai-feature-card__description">{feature.description}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .ai-feature-card-row {
    display: flex;
    flex-direction: column;
    color: var(--ai-color-black);
    min-height: var(--ai-size-384);
    align-items: flex-start;
  }
  .ai-feature-card {
    align-items: flex-start;
    gap: var(--ai-size-16);
    flex: 1 1 0;
  }
  .ai-feature-card__icon {
    align-items: center;
    justify-content: center;
  }
  .ai-feature-card__title {
    font-size: var(--ai-size-24);
    font-weight: 400;
  }
  .ai-feature-card__description {
    font-size: var(--ai-size-16);
    font-weight: 400;
  }

  @media (--ai-size-breakpoint-desktop) {
    .ai-feature-card-row {
      flex-direction: row;
      gap: var(--ai-size-128);
    }
    .ai-feature-card {
      padding-right: var(--ai-size-32);
    }
  }
</style>

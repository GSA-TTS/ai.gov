<script>
  export let features = [];
</script>

<section
  class="grid-container ai-maxw-widescreen ai-section-card"
  aria-label="Key features"
>
  <div class="ai-feature-card-row">
    {#each features as feature}
      <div class="ai-feature-card">
        <div class="ai-feature-card__icon">
          <img
            src={feature.iconPath}
            alt={feature.iconAlt || ''}
            width="83"
            height="83"
          />
        </div>
        <h3 class="ai-feature-card__title">{feature.title}</h3>
        <div class="ai-feature-card__description">{feature.description}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .ai-feature-card-row {
    display: flex;
    flex-direction: column;
    color: #000;
    min-height: 391px;
    padding-top: var(--ai-size-32);
    padding-bottom: var(--ai-size-32);
    align-items: flex-start;
  }
  .ai-feature-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: var(--ai-size-32);
    padding-bottom: var(--ai-size-32);
    gap: var(--ai-size-17, 17px);
    flex: 1 1 0;
  }
  .ai-feature-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ai-feature-card__title {
    align-self: stretch;
    font-size: var(--ai-size-24);
    font-style: normal;
    font-weight: 400;
  }
  .ai-feature-card__description {
    font-size: var(--ai-size-16);
    font-style: normal;
    font-weight: 400;
  }

  @media (min-width: 64em) {
    .ai-feature-card-row {
      flex-direction: row;
      gap: var(--ai-size-64);
    }

    .ai-section-card {
      padding-left: var(--ai-size-32);
      padding-right: var(--ai-size-32);
    }
  }
</style>

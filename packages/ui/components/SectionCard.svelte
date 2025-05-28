<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  export let headingId: string = `section-card-title-${uuidv4()}`;
  export let backgroundColor: string = '#D7DAE0';
  export let textColor: string = '#000';
  export let title: string = '';
  export let description: string = '';
  export let buttons: Array<{ text: string; type: string; href?: string }> = [];
  export let iconText: string = '';
  export let iconSvgPath: string | undefined;
  export let isHeaderSection: boolean = false;
</script>

<div style="background: {backgroundColor}; color: {textColor};">
  <section
    class="grid-container ai-maxw-widescreen ai-section-card"
    aria-labelledby={headingId}
  >
    <div class="grid-row">
      <div class="desktop:grid-col-5">
        <div class="ai-section-card__text">
          {#if iconSvgPath || iconText}
            <div class="ai-section-card__icon-row">
              <div class="ai-section-card__icon">
                {#if iconSvgPath}
                  {#if iconSvgPath.endsWith('.svg')}
                    <img src={iconSvgPath} alt="" width="20.656" height="21" />
                  {/if}
                {/if}
              </div>
              {#if iconText}
                <span class="ai-section-card__icon-text">{iconText}</span>
              {/if}
            </div>
          {/if}
          <div class="ai-section-card__title-row">
            {#if isHeaderSection}
              <h1
                id={headingId}
                class="ai-section-card__title ai-section-card__title--header"
              >
                {title}
              </h1>
            {:else}
              <h2 id={headingId} class="ai-section-card__title">
                {title}
              </h2>
            {/if}
          </div>
          <p class="ai-section-card__description">{description}</p>
        </div>
        {#if buttons.length}
          <div
            class="ai-menu-buttons"
            role="group"
            aria-label="Section actions"
          >
            {#each buttons as button}
              <a
                class="usa-button ai-button
                {button.type === 'white' ? 'ai-button--white' : ''}
                {button.type === 'outline' ? 'ai-button--outline' : ''}
                {button.type === 'primary' ? 'ai-button--primary' : ''}
                {button.type === 'unstyled' ? 'ai-button--unstyled' : ''}"
                href={button.href || '/'}
                type="button"
              >
                {button.text}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </section>
</div>

<style>
  .ai-section-card {
    padding: 2rem;
  }
  .ai-section-card__icon-row {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-bottom: .25rem;
  }
  .ai-section-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ai-section-card__title {
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.2;
    margin-block: 0 1rem;
  }
  .ai-section-card__title--header {
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1.2;
  }
  .ai-section-card__description {
    line-height: 1.4;
    margin-block: 0 1.5rem;
  }
  .ai-menu-buttons {
    display: flex;
    gap: 1.5rem;
  }

  @media (min-width: 64em) {
    .ai-section-card {
      padding-block-start: 9.5rem;
      padding-block-end: 2.625rem;
    }
    
    .ai-section-card__title--header {
      font-weight: 600;
      font-size: 3rem;
      line-height: 1.2;
    }
  }
</style>

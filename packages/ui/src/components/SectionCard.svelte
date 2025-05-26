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
    <div class="ai-section-card__row">
      <div class="ai-section-card__content">
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
    display: flex;
    min-height: 420px;
    padding-left: 32px;
    padding-right: 32px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  }
  .ai-section-card__row {
    display: flex;
    max-width: 580px;
    align-items: flex-end;
    gap: 64px;
    align-self: stretch;
  }
  .ai-section-card__content {
    display: flex;
    padding-bottom: 42px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
  }
  .ai-section-card__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
  .ai-section-card__icon-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .ai-section-card__icon {
    width: 20.656px;
    height: 21px;
    aspect-ratio: 20.66 / 21;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ai-section-card__icon-text {
    color: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  .ai-section-card__title-row {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    align-self: stretch;
  }
  .ai-section-card__title {
    align-self: stretch;
    color: inherit;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin: 0;
  }
  .ai-section-card__title--header {
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
  }
  .ai-section-card__description {
    align-self: stretch;
    color: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin: 0;
  }
  .ai-menu-buttons {
    display: flex;
    gap: 1.5rem;
  }

  @media (min-width: 64em) {
    .ai-section-card__title--header {
      font-weight: 600;
      font-size: 48px;
      line-height: 120%;
    }
  }
</style>

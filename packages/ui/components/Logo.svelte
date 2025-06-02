<script>
  import { siteName } from '@repo/ui/constants';
  import { getUrlFromBase } from '../helpers';

  export let baseUrl = '/';

  const logoSrc = getUrlFromBase('/assets/images/ai-gov-logo.svg', baseUrl);
</script>

<div class="usa-logo line-height-1 margin-y-0">
  <em class="usa-logo__text">
    <a href="/" class="display-block">
      <img src={logoSrc} alt={siteName} width="105" height="39" />
    </a>
  </em>
</div>

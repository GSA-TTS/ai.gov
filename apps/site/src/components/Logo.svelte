<script>
  import { siteName } from '../../constants';
  import { getUrlFromBase } from '../helpers/url';
  const logoSrc = getUrlFromBase('/images/ai-gov-logo.svg');
</script>

<div class="usa-logo line-height-1 margin-y-0">
  <em class="usa-logo__text">
    <a href="/" class="display-block">
      <img src={logoSrc} alt={siteName} width="105" height="39" />
    </a>
  </em>
</div>

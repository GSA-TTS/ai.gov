<script>
  import { getIconUrl } from '@repo/ui/helpers/icons.js';
  export let indicator;

  const isUp = indicator.pct_change_symbol === '+';
  const icon = isUp ? 'trending_up' : 'trending_down';
</script>

<img
  class="icon"
  src={getIconUrl(icon)}
  alt={isUp ? 'Trending up' : 'Trending down'}
/>
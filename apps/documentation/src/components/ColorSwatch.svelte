<script lang="ts">
  type Props = {
    value: string;
    size: 'small' | 'medium' | 'large';
  };

  const { value, size }: Props = $props();
  
  const sizeMap: Record<'small' | 'medium' | 'large', string> = {
    small: 'var(--ai-size-20)',
    medium: 'var(--ai-size-40)',
    large: 'var(--ai-size-80)',
  };
  
  const mappedSize = sizeMap[size] || sizeMap.small;
</script>

<div
  class="color"
  style={`background-color: ${value}; height: ${mappedSize}; width: ${mappedSize};`}
/>

<style>
  .color {
    display: block;
    border: 1px solid var(--ai-color-neutral-500);
  }
</style>

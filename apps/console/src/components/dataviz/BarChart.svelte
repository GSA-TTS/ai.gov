<script lang="ts">
  export let data: Record<string, number> = {};

  const entries = Object.entries(data).slice(0, 10);
  const svgWidth = 600;
  const rowHeight = 25;

  function toTitleCase(str: string) {
    return str
      .replace(/_/g, ' ')
      .replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
  }
</script>

<svg
  viewBox={`0 0 ${svgWidth} ${entries.length * rowHeight}`}
  width="100%"
  height="auto"
  preserveAspectRatio="xMinYMin meet"
>
  {#each entries as [label, count], i}
    <text x="0" y={i * rowHeight + 25} font-size="12">
      {toTitleCase(label)}
    </text>

    <rect
      x="150"
      y={i * rowHeight + 10}
      width={(count / entries[0][1]) * 400}
      height="20"
      fill="var(--ai-color-blue-400)"
      rx="4"
      ry="4"
    />

    <text
      x={150 + (count / entries[0][1]) * 400 + 8}
      y={i * rowHeight + 25}
      font-size="12"
    >
      {count.toLocaleString()}
    </text>
  {/each}
</svg>

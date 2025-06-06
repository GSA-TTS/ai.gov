<script lang="ts">
  export let data: any;
</script>

 <svg viewBox="0 0 300 300" width="300" height="300">
  <g transform="translate(150, 150)">
    <!-- Axes -->
    <g stroke="#ccc">
      <line x1="0" y1="0" x2="0" y2="-100"></line>
      <line x1="0" y1="0" x2="95" y2="-31"></line>
      <line x1="0" y1="0" x2="59" y2="81"></line>
      <line x1="0" y1="0" x2="-59" y2="81"></line>
      <line x1="0" y1="0" x2="-95" y2="-31"></line>
    </g>

    <!-- Labels -->
    <text x="0" y="-110" text-anchor="middle">Business</text>
    <text x="100" y="-30" text-anchor="start">Coding</text>
    <text x="65" y="95" text-anchor="start">Reading</text>
    <text x="-65" y="95" text-anchor="end">Safeguards</text>
    <text x="-100" y="-30" text-anchor="end">FAR</text>

    <!-- Polygon for Haiku -->
    <polygon
      fill="rgba(0, 123, 255, 0.3)"
      stroke="#007bff"
      stroke-width="1"
      points="
      0,-65
      70,-23
      53,73
      -55,75
      -57,-19
    "
    ></polygon>

    <!-- Polygon for Sonnet -->
    <polygon
      fill="rgba(255, 99, 132, 0.3)"
      stroke="#ff6384"
      stroke-width="1"
      points="
      0,-85
      74,-24
      53,73
      -55,75
      -76,-25
    "
    ></polygon>
  </g>
</svg>

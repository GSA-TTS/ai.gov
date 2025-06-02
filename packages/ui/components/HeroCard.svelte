<script>
  export let background = '#D7DAE0';
  export let textColor = '#000';
</script>

<section>
  <div
    class="grid-row ai-hero-card__row"
    style={`background: ${background}; color: ${textColor};`}
  >
    <div class="desktop:grid-col-5 padding-y-5 padding-x-4">
      <div>
        <slot name="iconRow" />
        <slot name="title" />
        <slot name="description" />
      </div>
      <slot name="buttons" />
    </div>
    <slot name="heroImage" />
  </div>
</section>

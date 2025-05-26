declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/dist/runtime/server';
  const Component: AstroComponentFactory;
  export default Component;
}

declare module '*.svelte' {
  import type { SvelteComponentTyped } from 'svelte';
  const Component: typeof SvelteComponentTyped;
  export default Component;
}
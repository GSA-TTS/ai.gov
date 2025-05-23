declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/dist/runtime/server';
  const Component: AstroComponentFactory;
  export default Component;
}

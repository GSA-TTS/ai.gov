// src/stores/sidebar.ts
import { writable } from 'svelte/store';

const isSidebarOpen = writable(true);

if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  const handleChange = () => {
    // Automatically close on small screen, open on large
    isSidebarOpen.set(!mediaQuery.matches);
  };

  // Initial check
  handleChange();

  // Listen for future changes
  mediaQuery.addEventListener('change', handleChange);
}

export { isSidebarOpen };

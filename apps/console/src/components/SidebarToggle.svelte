<script>
  import { isSidebarOpen } from '../stores/sidebar';

  function toggleSidebar() {
    isSidebarOpen.update(open => !open);
  }
</script>

<button 
  class="sidebar-toggle"
  on:click={toggleSidebar}
  aria-controls="sidebar"
  aria-expanded={$isSidebarOpen}
>
  {$isSidebarOpen ? 'Hide' : 'Show'} Menu
</button>

<style>
  .sidebar-toggle {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 999;
  }
</style>
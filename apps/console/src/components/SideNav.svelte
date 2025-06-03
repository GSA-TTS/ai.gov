<script>
  import { isSidebarOpen } from '../stores/sidebar';
  const toggleSidebar = () => isSidebarOpen.update(v => !v);
</script>

<div
  id="sidebar"
  class="sidebar { $isSidebarOpen ? 'open' : 'closed' }"  
  aria-hidden={!$isSidebarOpen}>
    <slot />
</div>

<style>
.sidebar {
  width: 280px;
  background-color: #f5f5f5;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  transform: translateX(0);
}

.sidebar.closed {
  transform: translateX(-100%);
}

@media (max-width: 768px) {
  .sidebar {
    position: absolute;
    height: 100%;
    z-index: 998;
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>
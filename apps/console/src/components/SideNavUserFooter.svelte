<script lang="ts">
  export let userName: string = 'General Services Administration';
  export let userRole: string = 'Longer Agency Name';
  export let avatarText: string = 'ZW';
  export let avatarColor: string = '#374151';
</script>

<div class="ai-sidebar-footer">
  <div class="ai-sidebar-footer__user">
    <div 
      class="ai-sidebar-footer__avatar"
      style="background-color: {avatarColor}"
    >
      {avatarText}
    </div>
    <div class="ai-sidebar-footer__user-info">
      <div class="ai-sidebar-footer__user-name" title={userName}>
        {userName}
      </div>
      <div class="ai-sidebar-footer__user-role" title={userRole}>
        {userRole}
      </div>
    </div>
  </div>
</div>

<style>
  .ai-sidebar-footer {
    padding: var(--ai-size-24);
    border-top: 1px solid #e5e7eb;
  }

  .ai-sidebar-footer__user {
    display: flex;
    align-items: center;
    gap: var(--ai-size-12);
  }

  .ai-sidebar-footer__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--ai-size-14);
    font-weight: 500;
    flex-shrink: 0;
  }

  .ai-sidebar-footer__user-info {
    flex: 1;
    min-width: 0;
  }

  .ai-sidebar-footer__user-name {
    font-size: var(--ai-size-14);
    font-weight: 500;
    color: #111827;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ai-sidebar-footer__user-role {
    font-size: var(--ai-size-12);
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

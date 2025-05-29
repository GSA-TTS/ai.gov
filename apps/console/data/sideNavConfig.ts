export const sideNavConfig = {
  sections: [
    { 
      title: 'ANALYSIS',
      items: [
        { label: 'Dashboard', href: '/dashboard/' },
        { label: 'Model evaluation', href: '/model-evaluation/' },
        { label: 'Trending topics', href: '/trending-topics/' },
        { label: 'Reports', href: '/reports/' },
      ]
    },
    {
      title: 'ADMIN',
      items: [
        { label: 'Team', href: '/team/' },
        { label: 'Model library', href: '/model-library/' },
        { label: 'Datasets', href: '/datasets/' },
        { label: 'Suggested prompts', href: '/suggested-prompts/' },
        { label: 'Payment settings', href: '/payment-settings/' },
      ]
    }
  ]
};
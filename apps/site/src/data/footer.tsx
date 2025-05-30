interface FooterLink {
  title: string;
  url: string;
}

interface FooterMenu {
  title: string;
  items: Array<FooterLink>;
}

export const footerMenus: Array<FooterMenu> = [
  {
    title: 'Platform',
    items: [
      {
        title: 'Chat',
        url: '#',
      },
      {
        title: 'API',
        url: '#',
      },
      {
        title: 'Console',
        url: '#',
      },
    ],
  },
  {
    title: 'Initiatives',
    items: [
      {
        title: 'Use Cases',
        url: '#',
      },
      {
        title: 'Research',
        url: '#',
      },
      {
        title: 'Policies',
        url: '#',
      },
      {
        title: 'Guides',
        url: '#',
      },
    ],
  },
  {
    title: 'Get Started',
    items: [
      {
        title: 'Documentation',
        url: '#',
      },
      {
        title: 'Pricing',
        url: '#',
      },
      {
        title: 'Data Security',
        url: '#',
      },
      {
        title: 'Changelog',
        url: '#',
      },
    ],
  },
  {
    title: 'Connect',
    items: [
      {
        title: 'Support',
        url: '#',
      },
      {
        title: 'Inquiries',
        url: '#',
      },
      {
        title: 'Policies',
        url: '#',
      },
      {
        title: 'Accessibility',
        url: '#',
      },
      {
        title: 'Academy',
        url: '#',
      },
    ],
  },
];

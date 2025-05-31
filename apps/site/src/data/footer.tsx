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
    ],
  },
  {
    title: 'Get Started',
    items: [
      {
        title: 'Contact Sales',
        url: '#',
      },
      {
        title: 'Status',
        url: '#',
      },
      {
        title: 'Privacy policy',
        url: 'https://www.gsa.gov/website-information/website-policies',
      },
      {
        title: 'Performance reports',
        url: 'https://www.gsa.gov/reference/reports/budget-performance',
      },
    ],
  },
  {
    title: 'Connect',
    items: [
      {
        title: 'About GSA',
        url: 'https://www.gsa.gov/about-us',
      },
      {
        title: 'Accessibility statement',
        url: 'https://www.gsa.gov/website-information/accessibility-statement',
      },
      {
        title: 'Vulnerability Disclosure Policy',
        url: 'https://www.gsa.gov/vulnerability-disclosure-policy',
      },
      {
        title: 'FOIA requests',
        url: 'https://www.gsa.gov/reference/freedom-of-information-act-foia',
      },
      {
        title: 'No FEAR Act data',
        url: 'https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002',
      },
      {
        title: 'Office of the Inspector General',
        url: 'https://www.gsaig.gov/',
      },
    ],
  },
];

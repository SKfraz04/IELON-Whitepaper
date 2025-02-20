import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '803'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '38b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cbe'),
            routes: [
              {
                path: '/docs/Blockchain',
                component: ComponentCreator('/docs/Blockchain', 'afd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/coin',
                component: ComponentCreator('/docs/coin', 'fa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Disclaimer',
                component: ComponentCreator('/docs/Disclaimer', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Roadmapp',
                component: ComponentCreator('/docs/Roadmapp', '03e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tokenomics',
                component: ComponentCreator('/docs/tokenomics', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

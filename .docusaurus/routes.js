
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','35d'),
  exact: true,
},
{
  path: '/blog/2019/07/22/how-to-build-acustomer-360journey',
  component: ComponentCreator('/blog/2019/07/22/how-to-build-acustomer-360journey','001'),
  exact: true,
},
{
  path: '/blog/2019/07/26/enhance-your-digitization-strategy-using-ml',
  component: ComponentCreator('/blog/2019/07/26/enhance-your-digitization-strategy-using-ml','dc7'),
  exact: true,
},
{
  path: '/blog/2019/08/16/effective-governance-in-adp',
  component: ComponentCreator('/blog/2019/08/16/effective-governance-in-adp','bd7'),
  exact: true,
},
{
  path: '/blog/2019/08/16/how-could-dl-handle-storage-and-compute-decoupling',
  component: ComponentCreator('/blog/2019/08/16/how-could-dl-handle-storage-and-compute-decoupling','bcf'),
  exact: true,
},
{
  path: '/blog/2019/11/23/deepdive-into-amazon-forecast',
  component: ComponentCreator('/blog/2019/11/23/deepdive-into-amazon-forecast','1ed'),
  exact: true,
},
{
  path: '/blog/2020/02/03/how-much-cost',
  component: ComponentCreator('/blog/2020/02/03/how-much-cost','b97'),
  exact: true,
},
{
  path: '/blog/page/2',
  component: ComponentCreator('/blog/page/2','5d6'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','690'),
  exact: true,
},
{
  path: '/blog/tags/amorphic-data-lake',
  component: ComponentCreator('/blog/tags/amorphic-data-lake','127'),
  exact: true,
},
{
  path: '/blog/tags/c-360',
  component: ComponentCreator('/blog/tags/c-360','e77'),
  exact: true,
},
{
  path: '/blog/tags/cloud-data-lake',
  component: ComponentCreator('/blog/tags/cloud-data-lake','af0'),
  exact: true,
},
{
  path: '/blog/tags/cost-analysis',
  component: ComponentCreator('/blog/tags/cost-analysis','993'),
  exact: true,
},
{
  path: '/blog/tags/customer-journey',
  component: ComponentCreator('/blog/tags/customer-journey','5c4'),
  exact: true,
},
{
  path: '/blog/tags/journey-analytics',
  component: ComponentCreator('/blog/tags/journey-analytics','cc3'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/news',
  component: ComponentCreator('/news','36b'),
  exact: true,
},
{
  path: '/news/2020/08/30/release-cycle-change',
  component: ComponentCreator('/news/2020/08/30/release-cycle-change','41e'),
  exact: true,
},
{
  path: '/news/2021/03/01/v1.8.0-release',
  component: ComponentCreator('/news/2021/03/01/v1.8.0-release','d15'),
  exact: true,
},
{
  path: '/news/2021/04/01/v1.8.1-release',
  component: ComponentCreator('/news/2021/04/01/v1.8.1-release','6fa'),
  exact: true,
},
{
  path: '/news/tags',
  component: ComponentCreator('/news/tags','713'),
  exact: true,
},
{
  path: '/news/tags/amorphic-community',
  component: ComponentCreator('/news/tags/amorphic-community','6ed'),
  exact: true,
},
{
  path: '/news/tags/new-release-cycle',
  component: ComponentCreator('/news/tags/new-release-cycle','816'),
  exact: true,
},
{
  path: '/news/tags/update',
  component: ComponentCreator('/news/tags/update','c9e'),
  exact: true,
},
{
  path: '/news/tags/v-1-8-0',
  component: ComponentCreator('/news/tags/v-1-8-0','bf0'),
  exact: true,
},
{
  path: '/news/tags/v-1-8-1',
  component: ComponentCreator('/news/tags/v-1-8-1','3c1'),
  exact: true,
},
{
  path: '/news/tags/version-release',
  component: ComponentCreator('/news/tags/version-release','4c7'),
  exact: true,
},
{
  path: '/news/tags/welcome',
  component: ComponentCreator('/news/tags/welcome','a6d'),
  exact: true,
},
{
  path: '/news/welcome',
  component: ComponentCreator('/news/welcome','13e'),
  exact: true,
},
{
  path: '/team/',
  component: ComponentCreator('/team/','f38'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','93b'),
  
  routes: [
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];

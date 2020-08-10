export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f315728586658008f6f600a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5x4phxhb',
                  apiId: '0c712afd-4f46-423a-97de-562cd370e18a'
                },
                {
                  buildHookId: '5f3157281bf661016d7cd714',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zqkgbb9o',
                  apiId: '6d6cc143-150d-4245-b55b-351aedc45f19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/clauswrm/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zqkgbb9o.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cd0f81c976de9cf81fd4814',
                  name: 'Sanity Studio',
                  siteId: '652f0ad0-6459-4ba0-8f29-4d24cdb8d42c'
                },
                {
                  buildHookId: '5cd0f81d535a119c7cd2fc36',
                  name: 'Blog Website',
                  siteId: '59cfe965-4d6f-41c3-a0c2-702ae3411b81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KyleAMathews/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-5hpsk39r.netlify.com', category: 'apps' }
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

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
                  buildHookId: '5f82c3586b2fb5648de43d35',
                  title: 'Sanity Studio',
                  name: 'hughson-repo-studio',
                  apiId: '411a455d-6323-451c-981a-f1de3ffdbf63'
                },
                {
                  buildHookId: '5f82c3586b2fb569abe57038',
                  title: 'Blog Website',
                  name: 'hughson-repo',
                  apiId: 'b32979ba-90c3-4bd6-9e9c-e31de98dbc4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chug2k/hughson-repo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hughson-repo.netlify.app', category: 'apps' }
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

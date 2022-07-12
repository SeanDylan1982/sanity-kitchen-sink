export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '62cd1e6866d54e4bb89187a8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jefcxgc9',
                  apiId: '8873dfc8-ba3c-46e0-b111-d01df9c994e1'
                },
                {
                  buildHookId: '62cd1e697d80ef4cc8c9b519',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-isjry3bz',
                  apiId: '9a5735fa-0edd-44ff-9eba-98dd9abb73b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SeanDylan1982/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-isjry3bz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f7267affed772014a2e39a8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aymn65zk',
                  apiId: '52ddb6da-a37d-4848-b533-47e604127b8c'
                },
                {
                  buildHookId: '5f7267b078d462009b17c542',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-18eq5gru',
                  apiId: '1b6d9374-b272-4e9b-b629-e4b5b640d195'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tinydingo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-18eq5gru.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

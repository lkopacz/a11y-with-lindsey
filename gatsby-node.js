// const path = require('path')

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

//   return graphql(`
//     {
//       allMdx(
//         filter: { frontmatter: { draft: { eq: false } } }
//         sort: { order: DESC, fields: frontmatter___date }
//       ) {
//         nodes {
//           frontmatter {
//             path
//             tags
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMdx.nodes

//     result.data.allMdx.nodes.forEach(({ frontmatter }) => {
//       createPage({
//         path: frontmatter.path,
//         component: blogPostTemplate,
//         context: {}, // additional data can be passed via context
//       })
//     })
//   })
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create post', result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: {
        slug: `${post.frontmatter.path}`,
      },
    })
  })
}

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

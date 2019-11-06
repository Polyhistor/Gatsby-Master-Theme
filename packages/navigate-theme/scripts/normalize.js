/*Will use this a default*/

DEFAULT_BLOG_MEDIA_ID = 999999
DEFAULT_AUTHOR_ID_MEDIA = 999999

exports.normalizeBlogNode = async ({ createNodeField, getNodes, node }) => {
  let contentfulBlogMedia = getNodes().filter(
    n =>
      n.internal.type === "ContentfulWpMedia" &&
      (n.blogId === node.wordpress_id || n.blogId === DEFAULT_BLOG_MEDIA_ID)
  )
  /*should always have a default value and the blog id*/
  if (contentfulBlogMedia.length < 1) {
    throw new Error(`Neither Featured media or default media were found for blog post ${node.slug}.
    `)
  } else if (contentfulBlogMedia.length === 1) {
    console.warn(
      `Featured media for Blog Post ${node.slug} was not found. Will consider the default one`
    )
  } else {
    contentfulBlogMedia = contentfulBlogMedia.filter(
      n => n.blogId === node.wordpress_id
    )
  }

  const blogImage = contentfulBlogMedia[0]
  createNodeField({
    node,
    name: "featured_media___NODE",
    value: blogImage.image___NODE,
  })
}

exports.normalizeAuthorNode = async ({ createNodeField, getNodes, node }) => {
  let contentfulBlogMedia = getNodes().filter(
    n =>
      n.internal.type === "ContentfulWpMedia" &&
      (n.author_id === node.wordpress_id ||
        n.authorId === DEFAULT_AUTHOR_ID_MEDIA)
  )
  /*should always have a default value and the blog id*/
  if (contentfulBlogMedia.length < 1) {
    throw new Error(`Neither Featured media or default media were found for author ${node.slug}.
      `)
  } else if (contentfulBlogMedia.length === 1) {
    console.warn(
      `Featured media for Author ${node.slug} was not found. Will consider the default one`
    )
  } else {
    contentfulBlogMedia = contentfulBlogMedia.filter(
      n => n.authorId === node.wordpress_id
    )
  }

  const blogImage = contentfulBlogMedia[0]
  createNodeField({
    node,
    name: "image___NODE",
    value: blogImage.image___NODE,
  })
}

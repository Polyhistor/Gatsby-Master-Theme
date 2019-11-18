/*Will use this a default*/

DEFAULT_BLOG_MEDIA_ID = 999999
DEFAULT_AUTHOR_ID_MEDIA = 999999

const addSeoProperty = (yoastObject, seoObject, propertyName) => {
  if (yoastObject && yoastObject.content) {
    Object.defineProperty(seoObject, propertyName, {
      value: yoastObject.content,
      writable: false,
    })
  }
}

const extractSeoFields = node => {
  let seoObject = {}

  if (!Array.isArray(node.yoast_meta)) {
    console.warn(`Blog ${node.slug} does not have yoast_meta definted.`)
    return seoObject
  }

  if (node.yoast_meta) {
    const title = node.yoast_meta.find(c => c.property === "og:title")
    const description = node.yoast_meta.find(c => c.name === "description")
    const twitterTitle = node.yoast_meta.find(c => c.name === "twitter:title")
    const twitterCard = node.yoast_meta.find(c => c.name === "twitter:card")
    //  const twitterImage = node.yoast_meta.find(c=>c.property === 'twitter:image');
    const twitterDescription = node.yoast_meta.find(
      c => c.name === "twitter:description"
    )
    //  const ogImage = node.yoast_meta.find(c=>c.property === 'twitter:description');
    const ogTitle = node.yoast_meta.find(c => c.property === "og:title")
    const ogDescription = node.yoast_meta.find(
      c => c.property === "og:description"
    )

    addSeoProperty(title, seoObject, "title")
    addSeoProperty(description, seoObject, "description")
    addSeoProperty(twitterTitle, seoObject, "twitterTitle")
    addSeoProperty(twitterCard, seoObject, "twitterCard")
    addSeoProperty(twitterDescription, seoObject, "twitterDescription")
    addSeoProperty(ogTitle, seoObject, "ogTitle")
    addSeoProperty(ogDescription, seoObject, "ogDescription")

    return seoObject
  }
}

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

  const seoFields = extractSeoFields(node)

  const title = seoFields.title || node.title
  const description = seoFields.description || node.excerpt
  createNodeField({
    node,
    name: "seoTitle",
    value: title,
  })

  createNodeField({
    node,
    name: "seoDescription",
    value: description,
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

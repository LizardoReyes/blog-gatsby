import React from 'react'
import "./post.scss"
import BlogLayout from '../../layouts/BlogLayout'
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import SEO from "../../components/seo"

export default function Post({ pageContext }) {
    const { data: post } = pageContext

    return (
        <BlogLayout className="post">
            <SEO
                title={post.seo_title}
                description={post.seo_description}
                // image={post.miniature.publicURL}
             />
            <h1>{post.title}</h1>
            <div className="markdown-body">
                <div dangerouslySetInnerHTML={{ __html: TransformOembedToIframe(post.content) }}></div>
            </div>
        </BlogLayout>
    )
}

import React from 'react'
import "./PostList.scss"
import { Grid, Card, Icon, Image, CardContent } from "semantic-ui-react"
import { Link } from "gatsby"
import { map } from "lodash"
import moment from "moment"
import "moment/locale/es"

export default function PostList({ posts }) {
    return (
        <Grid className="post-list">
            {map(posts, (post, index) => (
                <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
                    <Link to={`/${post.url}`}>
                    <Card className="post-list__item">
                        {/* <Image src={post.miniature.publicURL} /> */}
                        <CardContent>
                            <Card.Header>{post.title}</Card.Header>
                        </CardContent>
                        <Card.Content extra>
                            <Card.Meta>
                                <Icon name="calendar alternate outline" />
                                {moment(post.createdAt).format("LL")}
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                    </Link>
                </Grid.Column>
            ))}
        </Grid>
    )
}

import React from 'react'
import { Container, Grid } from 'semantic-ui-react';
import "./BlogLayout.scss"
import Menu from '../../components/Menu/Menu';

export default function BlogLayout({ children, className }) {
    return (
        <Container fluid className={`blog-layout ${className || ''}`}>
            <Grid>
                <Grid.Column mobile={16} tablet={16} computer={4}>
                    <Menu />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={12}>
                    {children}
                </Grid.Column>
            </Grid>
        </Container>
    )
}

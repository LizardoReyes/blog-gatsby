import React from 'react'
import "./Menu.scss"
import { Link } from 'gatsby'
import SocialMedia from '../SocialMedia'
import Courses from '../Courses/Courses'

export default function Menu() {
    return (
        <div className="menu">
            <Link to="/">
                <h2>Blog Developer</h2>
            </Link>
            <p>
                Blog sobre desarrollo web y programación en diferentes lenguajes.
            </p>
            <SocialMedia />
            <Courses />
        </div>
    )
}

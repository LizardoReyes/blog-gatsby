import React from 'react'
import { Icon } from 'semantic-ui-react'
import "./SocialMedia.scss"
import { map } from "lodash"
import socialData from "./data"

export default function SocialMedia() {
    return (
        <div className="social-media">
            {map(socialData, (social, index) => (
                <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                    <Icon circular link name={social.name} className={social.name} />
                </a>
            ))}
        </div>
    )
}

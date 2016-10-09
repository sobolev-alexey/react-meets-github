import React, { PropTypes } from 'react'
import { styles } from '../styles/User';

const User = ({ user }) => {
    const { login, avatarUrl, name, bio, company, location,
        email, blog, createdAt, publicRepos } = user
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' }
    const date = new Date(createdAt).toLocaleString('en-US', dateFormat)

    return (
        <div style={styles.userColumn}>
            <img
                className="avatar"
                src={avatarUrl}
                alt={login}
                style={styles.avatar}
                width="233"
                height="233"
            />
            <div style={styles.names}>
                {name && <span style={styles.name}>{name}</span>}
                {login && <span style={styles.login} className="login">({login})</span>}
            </div>

            <div style={styles.details}>
                {bio && <span style={styles.text}>{bio}</span>}
                {company && <span style={styles.text}>Company: {company}</span>}
                {location && <span style={styles.text}>Location: {location}</span>}
                {email && <span style={styles.text}>Email: {email}</span>}
                {blog && <span style={styles.text}>Blog: {blog}</span>}
                {createdAt && <span style={styles.text}>Joined on {date}</span>}
                <span style={styles.text}>Public Repos: {publicRepos}</span>
            </div>

        </div>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string
    }).isRequired
}

export default User

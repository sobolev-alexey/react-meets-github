import React, { PropTypes } from 'react'
import { styles } from '../styles/Repo';

const Repo = ({ repo }) => {
    const { name, description, fullName, stargazersCount, language } = repo
    const url = `https://github.com/${fullName}`

    return (
        <div style={styles.repository}>
            <div style={styles.titleColumn}>
                <div style={styles.title}>
                    <a style={styles.link} href={url}>{name}</a>
                </div>

                {description && <p style={styles.text}>{description}</p>}
            </div>

            {language &&
                <div style={styles.languageColumn}>
                    <p style={styles.text}>{language}</p>
                </div>
            }

            <div style={styles.starColumn}>
                <p style={styles.text}>* {stargazersCount}</p>
            </div>

            <div style={{clear: 'both'}}></div>
        </div>
    )
}

Repo.propTypes = {
    repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired
}

export default Repo

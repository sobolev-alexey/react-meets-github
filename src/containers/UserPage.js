import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUser, loadRepos } from '../actions'
import { styles } from '../styles/Page';
import User from '../components/User'
import Repo from '../components/Repo'
import List from '../components/List'
import zip from 'lodash/zip'

const loadData = ({ login, loadUser, loadRepos }) => {
    loadUser(login, [ 'name' ])
    loadRepos(login)
}

class UserPage extends Component {
    static propTypes = {
        login: PropTypes.string.isRequired,
        user: PropTypes.object,
        errorMessage: PropTypes.string,
        reposPagination: PropTypes.object,
        ownRepos: PropTypes.array.isRequired,
        loadUser: PropTypes.func.isRequired,
        loadRepos: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login !== this.props.login) {
            loadData(nextProps)
        }
    }

    handleLoadMoreClick = () => {
        this.props.loadRepos(this.props.login, true)
    }

    renderRepo([ repo, owner ]) {
        return (
            <Repo
                repo={repo}
                owner={owner}
                key={repo.fullName}
            />
        )
    }

    render() {
        const { user, login, errorMessage } = this.props

        if (!user && !errorMessage) {
            return <p style={styles.text}>Loading {login}{"'s profile..."}</p>
        }

        const { ownRepos, reposPagination } = this.props
        return (
            <div style={styles.mainSection}>
                <User user={user} />
                <List renderItem={this.renderRepo}
                    items={zip(ownRepos)}
                    onLoadMoreClick={this.handleLoadMoreClick}
                    loadingLabel={`Loading ${login}'s repos...`}
                    {...reposPagination}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // It is needed to lower case the login due to the way GitHub's API behaves.
    const login = ownProps.params.login.toLowerCase()
    const errorMessage = state.errorMessage || null;

    const {
        pagination: { reposByUser },
        entities: { users, repos }
    } = state

    const reposPagination = reposByUser[login] || { ids: [] }
    const ownRepos = reposPagination.ids.map(id => repos[id])

    return {
        login,
        ownRepos,
        reposPagination,
        errorMessage,
        user: users[login]
    }
}

export default connect(mapStateToProps, {
    loadUser,
    loadRepos
})(UserPage)

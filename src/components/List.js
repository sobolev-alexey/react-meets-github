import React, { Component, PropTypes } from 'react'
import { styles } from '../styles/Repo';

export default class List extends Component {
    static propTypes = {
        loadingLabel: PropTypes.string.isRequired,
        pageCount: PropTypes.number,
        renderItem: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        onLoadMoreClick: PropTypes.func.isRequired,
        nextPageUrl: PropTypes.string
    }

    static defaultProps = {
        isFetching: true,
        loadingLabel: 'Loading...'
    }

    renderLoadMore() {
        const { isFetching, onLoadMoreClick } = this.props
        return (
            <button
                style={styles.paginateContainer}
                onClick={onLoadMoreClick}
                disabled={isFetching}
            >
                {isFetching ? 'Loading...' : 'Load More'}
            </button>
        )
    }

    render() {
        const {
            isFetching, nextPageUrl, pageCount,
            items, renderItem, loadingLabel
        } = this.props
        const isEmpty = items.length === 0
        const isLastPage = !nextPageUrl

        if (isEmpty && isFetching) {
            return <h2><i>{loadingLabel}</i></h2>
        }

        return (
            <div style={styles.repoColumn}>
                {
                    isEmpty && isLastPage
                    ? ( <h1 style={styles.noRepos}>
                            <p style={styles.text}>
                                No public repositories found!
                            </p>
                        </h1>) : null
                }
                {items.map(renderItem)}
                {pageCount > 0 && !isLastPage && this.renderLoadMore()}
            </div>
        )
    }
}

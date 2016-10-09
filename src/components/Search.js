import React, { Component, PropTypes } from 'react'
import { styles } from '../styles/Search';

export default class Search extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setInputValue(nextProps.value)
        }
    }

    getInputValue = () => {
        return this.refs.input.value
    }

    setInputValue = (val) => {
        // Generally mutating DOM is a bad idea in React components,
        // but doing this for a single uncontrolled field is less fuss
        // than making it controlled and maintaining a state for it.
        this.refs.input.value = val
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleGoClick()
        }
    }

    handleGoClick = () => {
        this.props.onChange(this.getInputValue())
    }

    render() {
        return (
            <div style={styles.searchSection}>
                <div style={styles.search}>
                    <input
                        className="search"
                        style={styles.input}
                        size="37"
                        ref="input"
                        defaultValue={this.props.value}
                        onKeyUp={this.handleKeyUp}
                        placeholder="GitHub username"
                    />
                    <button
                        className="go"
                        onClick={this.handleGoClick}
                        style={styles.button}
                    >
                        Search GitHub
                    </button>
                </div>
            </div>
        )
    }
}

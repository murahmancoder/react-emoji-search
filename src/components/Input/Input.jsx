import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'


const Input = ({ onChange, value }) => {
    return (
        <input
            className={styles.input}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="search" />
    )
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default Input;
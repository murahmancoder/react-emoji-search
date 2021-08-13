import styles from './EmojiBox.module.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const EmojiBox = ({ symbol, title }) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setSelected(false), 600)

        return () => clearTimeout(timer)
    }, [selected])

    return (
        // jika selected true maka di cx selected dijalankan
        <div className={cx(styles.emojiBox, { [styles.selected]: selected })}
            onClick={() => {
                navigator.clipboard.writeText(symbol)
                setSelected(true)
            }}
        >
            <p
                className={styles.emoji}
                dangerouslySetInnerHTML={{
                    __html: `&#${symbol.codePointAt(0)}`
                }}

            />

            <p className={styles.emojiText}>
                {selected ? 'Copied!' : title}
            </p>
        </div>
    )
}

EmojiBox.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
}

export default EmojiBox;
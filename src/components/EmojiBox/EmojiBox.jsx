import styles from './EmojiBox.module.css'

import PropTypes from 'prop-types'

const EmojiBox = ({ symbol, title }) => {
    return (
        <div className={styles.emojiBox}>
            <p
                className={styles.emoji}
                dangerouslySetInnerHTML={{
                    __html: `&#${symbol.codePointAt(0)}`
                }}

            />

            <p className={styles.emojiText}>{title}</p>
        </div>
    )
}

EmojiBox.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
}

export default EmojiBox;
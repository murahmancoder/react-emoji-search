import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import EmojiBox from '../EmojiBox/EmojiBox'
import styles from './Emojis.module.css'

import { filterEmojis } from '../../utils/filterEmojis';
import Empty from '../Empty/Empty';

const Emojis = ({ emojisData, searchText }) => {
    const [filteredEmojis, setFilteredEmojis] = useState([]);

    useEffect(() => {
        // mengisi filterEmojis dengan function filterEmojis data yang di filter
        setFilteredEmojis(filterEmojis({
            // sama nama variabelnya dan parameternya 
            // kenapa kurung kurawal karena berupa objek difunction filterEmojis
            emojisData: emojisData,
            searchText: searchText
        }))
    }, [emojisData, searchText])


    if (filteredEmojis.length > 0) {
        return (
            <div className={styles.emojisGrid}>
                {/* dibawah tidak pake return karena sudah diganti kurung nya jadi () bukan {} */}
                {filteredEmojis.map((data, index) => (

                    <EmojiBox
                        key={index}
                        title={data.title}
                        symbol={data.symbol}
                    />

                ))}
            </div>
        )
    } else {
        return (
            <Empty text="Oopss... data yang anda cari tidak ada" />
        )
    }

}

Emojis.propTypes = {
    emojisData: PropTypes.array,
    searchText: PropTypes.string
}

export default Emojis;
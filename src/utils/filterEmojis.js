export const filterEmojis = ({emojisData, searchText="", maxResults=20}) => {

    // dialam filter mereturn emojisData dengan alias emoji sebagai function
    const filteredEmojis= emojisData.filter(emoji => {

        if(emoji.title.toLowerCase().includes(searchText.toLowerCase())){
            return true
        }

        if(emoji.keywords.toLowerCase().includes(searchText.toLowerCase())){
            return true
        }

        return false
    }
    
    )

    // filteredEmoji berisi data yang sudah difilter sesuai kondisi 
    // dan dikembalikan sesuai maxresult dgn array splice
    return filteredEmojis.splice(0, maxResults)
}
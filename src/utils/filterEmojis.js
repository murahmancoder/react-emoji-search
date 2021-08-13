export const filterEmojis = (EmojisData, seachText="", maxResult=20) =>{

    // dialam filter mereturn emojisData dengan alias emoji sebagai function
    const filteredEmojis= EmojisData.filter(emoji => {

        if(emoji.title.toLowerCase().includes(seachText.toLowerCase())){
            return true
        }

        if(emoji.keyword.toLowerCase().includes(seachText.toLowerCase())){
            true
        }

        return false
    }
    
    )

    // filteredEmoji berisi data yang sudah difilter sesuai kondisi 
    // dan dikembalikan sesuai maxresult dgn array splice
    return filteredEmojis.splice(0, maxResult)
}
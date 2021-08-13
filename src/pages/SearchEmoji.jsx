import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import Empty from "../components/Empty/Empty";
import Emojis from "../components/Emojis/Emojis";
import Input from "../components/Input/Input";

const SearchEmoji = () => {
    const [emojisData, setEmojisData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        // callback
        async function fetchEmojis() {
            // loading dulu terjadi berarti ubah jadi true
            setLoading(true);

            // error handling
            try {
                const res = await axios.get(
                    "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
                );
                // menyimpan data res emoji data ke state
                setEmojisData(res.data);

                // proses selesai loading jadi false
                setLoading(false);
            } catch (error) {
                console.error(error);

                // seterror dan loading jadi false
                setError(true);
                setLoading(true);
            }
            // console.log(res);
        }

        // pemanggilan atau menjalankan function
        fetchEmojis();
    }, []);

    // console.log("loading", loading);
    // console.log("error", error);
    // console.log("res", emojisData);

    // fungsi menghandle input untuk searchtext
    const [searchText, setSearchText] = useState('')
    const handleOnChange = (e) => {
        setSearchText(e.target.value)
    }

    // console.log(searchText)

    return (
        <div>
            <Navbar />
            <Container>
                <Input onChange={handleOnChange} value={searchText} />
                {loading && <Empty text={'loading...'} />}
                {error && <Empty text={'wah error nih...'} />}
                {emojisData.length > 0 && <Emojis emojisData={emojisData} searchText={searchText} />}
            </Container>
        </div>
    );
}

export default SearchEmoji;
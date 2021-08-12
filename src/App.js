import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
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

  return (
    <div>
      <h1>Hello World</h1>
      {loading && <p>Loading...</p>}
      {error && <p>wahhh...</p>}
      {emojisData.length > 0 && <p>Ada Emoji Nihh...</p>}
    </div>
  );
}

export default App;

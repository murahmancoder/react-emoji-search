import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [emojisData, setEmojisData] = useState([]);

  useEffect(() => {
    // callback
    async function fetchEmojis() {
      const res = await axios.get(
        "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
      );
      console.log(res);
    }

    // pemanggilan atau menjalankan function
    fetchEmojis();
  }, []);

  return <div className="App">Hello WOrld</div>;
}

export default App;

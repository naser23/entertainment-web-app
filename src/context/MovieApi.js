import { createContext, useState, useEffect } from "react";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
      "X-RapidAPI-Key": "2fd2c0727dmsh5b922ccc270d30dp14ee5bjsna1a90ecec93c",
    },
  };

  async function getData() {
    try {
      const response = await fetch(
        "https://mdblist.p.rapidapi.com/?s=spiderman",
        options
      );
      const json = response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  //   fetch("https://mdblist.p.rapidapi.com/?s=jaws", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));

  const [data, setData] = useState();

  return (
    <MovieApiContext.Provider value={data}>{children}</MovieApiContext.Provider>
  );
}

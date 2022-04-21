import { createContext, useState, useEffect } from "react";

const MovieApiContext = createContext();

export function MovieApiProvider({ children }) {
  const [data, setData] = useState();
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
  //     "X-RapidAPI-Key": "2fd2c0727dmsh5b922ccc270d30dp14ee5bjsna1a90ecec93c",
  //   },
  // };

  const settings = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  async function getData() {
    try {
      const response = await fetch("data.json", settings);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  // getData();

  // console.log(data);
  //   fetch("https://mdblist.p.rapidapi.com/?s=jaws", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));

  return (
    <MovieApiContext.Provider value={data}>{children}</MovieApiContext.Provider>
  );
}

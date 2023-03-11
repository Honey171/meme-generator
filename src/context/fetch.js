import React, { createContext, useState, useEffect } from 'react';

export const MemeData = createContext();

export const MemeDataProvider = ({ children }) => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const memeDataFetch = async () => {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        setMemes(data);
      } catch (err) {
        console.log(err);
      }
    };
    memeDataFetch();
  }, []);

  return <MemeData.Provider value={{ memes }}>{children}</MemeData.Provider>;
};

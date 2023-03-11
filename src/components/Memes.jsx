import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MemeData } from '../context/fetch';

function Memes() {
  const { memes } = useContext(MemeData);
  const [searchedValue, setSearchedValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchedValue.trim() === '') {
      setSearchResult([]);
    }
    if (searchedValue.trim() !== '') {
      const searchHandler = () => {
        const results = memes.data.memes.filter((meme) =>
          meme.name.toLowerCase().includes(searchedValue.toLowerCase()),
        );
        setSearchResult(results);
      };
      searchHandler();
    }
  }, [memes?.data?.memes, searchedValue]);

  return (
    <section className="flex flex-col items-center gap-5">
      <p className="text-center text-[25px] font-bold text-[#f1c40f]">
        You can select Top 100 (most used ones) meme templates and create meme!
      </p>
      <div className="self-start px-10">
        <input
          type="text"
          placeholder="Search a meme template"
          onChange={(e) => {
            setSearchedValue(e.target.value);
          }}
          className={`outline-none px-4 py-2.5 rounded-sm bg-[#151b25] focus:bg-slate-900 transition-all duration-300 text-sm placeholder:text-[white] text-white ${
            searchResult.length === 0 ? 'w-auto' : 'w-[75%]'
          }`}
        />
        <div
          className={`${
            searchResult.length === 0
              ? 'opacity-0 w-0 h-0'
              : 'opacity-1 w-[17rem] h-[10rem]'
          } overflow-auto grid grid-cols-1 gap-4 py-3 scroll-smooth transition-all duration-300`}
        >
          {searchResult.length !== 0 &&
            searchResult.map((result, idx) => (
              <Link
                to={'/create'}
                key={idx}
                state={{ meme: result.url }}
                className="shadow-lg text-[#f1c40f] transition-all duration-200 hover:shadow-md hover:shadow-gray-700 hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800 focus:text-white focus:shadow-md focus:shadow-gray-700"
              >
                <li className="flex space-x-5 items-center">
                  <img
                    src={result.url}
                    alt="meme"
                    className="w-20 h-20 rounded-sm"
                    loading="lazy"
                  />
                  <p className="text-sm max-w-[125px] font-semibold">
                    {result.name}
                  </p>
                </li>
              </Link>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 overflow-auto px-10 py-10 bg-slate-900 rounded-md w-[21.875rem] h-[20rem] sm:w-[30rem] sm:h-[25rem] md:w-[40rem] md:h-[25rem] lg:w-[50rem] lg:h-[25rem] xl:w-[60rem] xl:h-[36rem] scroll-smooth">
        {memes &&
          memes?.data?.memes.map((meme, idx) => (
            <Link
              key={idx}
              to="/create"
              state={{ meme: meme.url }}
              className="transition-all duration-300 focus:scale-105 focus:outline-[#f1c40f] hover:scale-105"
            >
              <img
                src={meme.url}
                alt=""
                className="sm:w-[21.875rem] sm:h-[15.625rem] w-[21rem] h-[12rem] rounded-sm"
              />
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Memes;

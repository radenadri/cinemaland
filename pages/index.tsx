import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import MovieCard from '../components/MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=5aeeac32'

const Home: NextPage = () => {

  const [search, setSearch] = useState<string>("")
  const [movies, setMovies] = useState<Array<any>>([])

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search);
  }

  const handleChange = (e: any) => setSearch(e.target.value)
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      if ( search.length <= 0 ) {
        alert('You must enter the title!')
        return
      }

      searchMovies(search)
    }
  }

  useEffect(() => {
    searchMovies('fallen')
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen from-indigo-100 via-indigo-200 to-indigo-300 bg-gradient-to-br">
      <Head>
        <title>CinemaLand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Backdrop Blur */}
      <div className="absolute w-full h-full bg-white/30 backdrop-blur-sm" />

      {/* Header */}
      <header className="w-full min-h-[60px] border-b bg-white/10 backdrop-blur-sm z-[2]">
        <div className="flex items-center justify-between px-8 mx-auto max-w-screen-2xl">
          <Image className="flex-shrink" src="/logo.svg" alt="CinemaLand Logo" width={200} height={100} />
          <div className="flex-shrink text-right">
            <a href="mailto:radenadriep@gmail.com" className="inline-block px-4 py-2 font-bold text-white bg-indigo-500 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 md:px-20 text-center z-[2]">
        {/* Search */}
        <div className="w-full max-w-[650px] my-16">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
              <svg className="text-slate-400 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              className="block w-full py-5 pl-16 text-2xl border-indigo-300 rounded-full shadow-sm text-slate-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none placeholder:text-slate-400"
              type="text"
              placeholder="Search movie..."
              value={search}
              onChange={handleChange}
              onKeyPress={handleKeyPress} />
          </div>
        </div>

        {/* Movie */}
        {movies?.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center w-full max-w-screen-2xl">
            {movies?.map((movie, i) => (
              <MovieCard key={i} {...movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center w-full max-w-screen-2xl">
            <h1 className="text-2xl">No movies found</h1>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="flex items-center mt-16 justify-center w-full h-24 border-t z-[2]">
        <div className="flex flex-col gap-4">
          <span className="text-slate-700">
            Made with 💗 by {' '}
            <a
              className="text-indigo-500 hover:text-indigo-600"
              href="https://radenadri.netlify.app"
              target="_blank"
              rel="noopener noreferrer">
              Adriana Eka Prayudha
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home

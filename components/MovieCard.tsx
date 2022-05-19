import Image from 'next/image'

type MovieType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const MovieCard = (movie : MovieType)  => {

  const { Title, Year, imdbID, Type, Poster } = movie

  return (
    <div className="group rounded-lg shadow-sm m-6 w-[300px] h-[450px] cursor-pointer hover:scale-105 transition-transform ease-linear">
      <div className="relative flex flex-col w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute top-0 w-full h-full group-hover:bg-black/50 z-[1] ease-in-out transition-all rounded-lg"></div>
          <Image
            className="rounded-tl-lg rounded-tr-lg"
            src={Poster}
            alt={Title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={Poster} />
        </div>
        <div className="absolute rounded-bl-lg rounded-br-lg bottom-0 left-0 right-0 flex flex-col items-start p-6 pt-4 group-hover:bg-transparent bg-purple-50 z-[2]">
          <span className="text-sm font-medium tracking-wider text-indigo-500 uppercase transition-all ease-in-out group-hover:text-slate-100">{Type}</span>
          <h3 className="mt-1 text-xl font-semibold text-left transition-all ease-in-out text-slate-700 group-hover:text-slate-100">{Title}</h3>
          <p className="mt-1 transition-all ease-in-out text-slate-500 group-hover:text-slate-100">
            {Year}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
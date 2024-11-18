import { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

interface Genre {
  games: Array<{ id: number; name: string; slug: string; added: number }>;
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}
interface GenreProps{
  setGenre: unknown;
}

const Genres : React.FC<GenreProps> = ({setGenre}) => {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [genre,setGenreId] = useState<number>(0);

  const getGenreList = async () => {
    await GlobalApi.getGenreList.then((res) => {
      // console.log(res.data.results);
      const data = res.data.results as Genre;
      setGenreList(data);
    });
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white ">Genre</h2>
      {genreList.map((genre, index) => {
        return (
          <div
            onClick={() => {
              setActiveIndex(index);
              setGenreId(genre.id);
            }}
            key={index}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg horver:dark:bg:gray-600
            ${activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null}
            `}>
            <img
              src={genre.image_background}
              alt="genre-image"
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all duration-300 ease-out  
                ${activeIndex === index ? "scale-105" : null}  
              `}
            />
            <h3
              className={`dark:text-white text-[18px] group-hover:font-bold transition-all duration-300 ease-out *
                ${activeIndex === index ? "font-bold" : null}                
              `}>
              {index} {genre.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Genres;

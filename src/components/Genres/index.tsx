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

const Genres = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);

  const getGenreList = async () => {
    await GlobalApi.getGenreList.then((res) => {
      // console.log(res.data.results);
      const data = res.data.results as Genre;
      console.log("testing-->", data);
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
          <div key={index} className="flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2">
            <img
              src={genre.image_background}
              alt="genre-image"
              className="w-[40px] h-[40px] object-cover rounded-lg"
            />
            <h3 className="">{index} {genre.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Genres;

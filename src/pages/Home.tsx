import { useEffect, useState } from "react";
import Genres from "../components/Genres";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenreId from "../components/GamesByGenreId";

const Home = () => {
  const [allGamesList, setAllGamesList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);

  const getAllGamesList = async () => {
    await GlobalApi.getAllGameList.then((res) => {
      setAllGamesList(res.data.results);
      setGameListByGenre(res.data.results)
      
      console.log(allGamesList);
    });
  };

  const getGameListbyGenreId = async (id: number) => {
    await GlobalApi.getGameListByGenreId(id).then((res) => {
      console.log("List by Id", res.data.results);
      setGameListByGenre(res.data.results)
    });
  };

  useEffect(() => {
    getAllGamesList();
    getGameListbyGenreId(3);
  }, []);

  return (
    <div className="grid grid-cols-4 p-5">
      <div className="h-full hidden md:block ">
        <Genres setGenre={''}/>
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 && gameListByGenre.length > 0 ? (
          <div className="">
            <Banner gameBanner={allGamesList[4]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenreId gameList = {gameListByGenre}/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;

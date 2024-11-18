import React, { useEffect } from "react";

interface TrendingGamesProps {
  gameList: unknown;
}
// const Banner : React.FC<BannerProps> = ({gameBanner}) => {
const TrendingGames: React.FC<TrendingGamesProps> = ({ gameList }) => {
  useEffect(() => {
    console.log("list from trending component", gameList);
  }, [gameList]);
  return (
    <>
      <div className="mt-5 hidden md:block">
        <h2 className=" font-bold text-[30px] dark:text-white">
          Trending Games
        </h2>
        <div className=" hidden md:grid lg:grid-cols-4 gap-4 mt-5">
          {gameList.map(
            (item: any, index: number) =>
              index < 4 && (
                <div className=" bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                  <img
                    src={item.background_image}
                    alt="trending-games-image"
                    className="h-[270px] object-cover rounded-t-lg w-full"
                  />
                  <h2 className="font-bold p-2 dark:text-white text-[20px]">
                    {item.name}
                  </h2>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default TrendingGames;

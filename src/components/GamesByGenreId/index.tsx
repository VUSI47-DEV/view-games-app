import { useEffect } from "react";

interface GamesByGenreProps {
  gameList: [];
}

const GamesByGenreId: React.FC<GamesByGenreProps> = ({ gameList }) => {
  useEffect(() => {
    console.log("From Genre By Id Component", gameList);
  }, [gameList]);

  return (
    <>
      <h2 className="font-bold mt-5 text-[30px] dark:text-white ">
        Poplular games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {gameList.map((item: any, index: number) => {
          return (
            <div
              className="bg-[#76a8f75e] p-3 pb-10 rounded-lg h-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer "
              key={index}>
              <img
                src={item.background_image}
                alt=""
                className="w-full h-[80%] rounded-xl object-cover"
              />
              <h2 className="dark:text-white text-[20px] ">
                {item.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                  {item.metacritic}
                </span>
              </h2>
              <h2 className="dark:text-white text-gray-500">
                ✨ {item.rating} 🗨 {item.reviews_count} 🔥
                {item.suggestions_count}
              </h2>
              {/* <h2></h2> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GamesByGenreId;

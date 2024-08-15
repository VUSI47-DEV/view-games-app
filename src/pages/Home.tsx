import Genres from "../components/Genres"

const Home = () => {
  return (
    <div className="grid grid-cols-4 p-5">
        <div className="h-full hidden md:block ">
          <Genres/>
        </div>
        <div className="col-span-4 md:col-span-3 bg-blue-400">GameList</div>
    </div>
  )
}

export default Home
import { useSelector } from "react-redux";
import { RootState } from "../Types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MainApp = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  // const token  = useSelector( (state: RootState) => state.auth.token);
  console.log(user);
  let navigate = useNavigate();
  const QuitGame = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="h-screen app-bg ">
      <div
        className="
        pt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
      >
        <div
          className="
            bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10"
        >
          <div>
            <p className="text-center text-xl p-2">Hello! {user?.name} 🐱</p>
          </div>

          <button
            className="text-center w-full
          border
          border-gray-400
          rounded-md
          p-2
          
          bg-rose-700
          text-white
          text-2xl
          "
          >
            <Link to="/game">Play Game </Link>
          </button>
          <button
            className="text-center w-full
          border
          border-gray-400
          rounded-md
          p-2
          mt-2
          bg-rose-700
          text-white
          text-2xl
          "
          >
            <Link to="/app/leaderboard">Leader Board</Link>
          </button>
          <button
            className="text-center w-full
          border
          border-gray-400
          rounded-md
          p-2
          mt-2
          bg-rose-700
          text-white
          text-2xl
          "
          >
            <Link to="/app/instructons">Instructions For Game</Link>
          </button>
          <button
            className="text-center w-full
          border
          border-gray-400
          rounded-md
          p-2
          mt-2
          bg-rose-700
          text-white
          text-2xl
          "
            onClick={QuitGame}
          >
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainApp;

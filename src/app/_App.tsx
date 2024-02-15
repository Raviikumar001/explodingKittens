
import {  useSelector } from "react-redux";
import { RootState } from "../Types";


const MainApp = () => {

  const user = useSelector( (state: RootState) => state.auth.user);
  console.log(user)

  return (
    <div className="h-screen app-bg">
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
            Play Game
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
            Leader Board
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
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainApp;

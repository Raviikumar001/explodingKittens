import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Types";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

const Leaderboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const storedToken = localStorage.getItem("token");
  const token = storedToken ? storedToken.replace(/"/g, "") : ""; // Remove double quotes from token
  const [totalGamesWon, setTotalGamesWon] = useState(0);
  const [totalGamesLost, setTotalGamesLost] = useState(0);

  const fetchResults = async () => {
    console.log(token);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/get-result?id=${user?.ID}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response) {
        const user = await JSON.parse(response.data?.user);
        setTotalGamesWon(user.total_points);
        setTotalGamesLost(user.total_games_lost);
      }
    } catch (error: unknown) {
      const err = error as AxiosError<{ msg: string }>;
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="full-height-bg ">
      <div className="grid content-center text-xl">
        <div
          className=' bg-white
            px-4
            py-8
            shadow
            mt-[10%]
            mr-[20%]
            ml-[20%]
            
            sm:rounded-lg
            sm:px-10" '
        >
          {" "}
          <h3 className="text-center text-3xl underline">Score Board</h3>
          <img src="/cat2.jpeg" alt="cat img" height={300} width={300} className="rounded-lg" />
          <h2 className="mt-5">Player Name : {user?.name}</h2>
        
            <>
              <h3>Total Games Won: {totalGamesWon}</h3>
              <h3>Total Games Lost: {totalGamesLost}</h3>
              <h3>Total Games played: { totalGamesLost + totalGamesWon  }</h3>
            </>
     
          <button className="block mt-3 border-2 border-sky-300 p-1 rounded-md hover:bg-orange-300">
            <Link to="/app">Main Menu </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

import React, {useEffect} from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../../Types";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
type Close = {
  onClose: () => void;
};

import { useDispatch } from "react-redux";
import { resetGame } from "../../reducers/gameReducer";

const WonPopup: React.FC<Close> = ({ onClose }) => {
  const dispatch = useDispatch();


  const user= useSelector( (state: RootState) => state.auth.user);
  
  const storedToken = localStorage.getItem('token');
  const token = storedToken ? storedToken.replace(/"/g, '') : ''; // Remove double quotes from token
  
  const upDateResults = async () => {

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/update-game-result`,
        {
          ID: user?.ID,
          gameResult: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        console.log(response)
    } catch (error: unknown) {
      const err = error as AxiosError<{ msg: string }>;
      console.log(err);
    }
  };


  const dispatchRestart = () => {
    dispatch(resetGame());
  };

  useEffect(()=> {
    upDateResults()
  }, [])
  return (
    <div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img src="/kitten1.webp" alt="exploding cat" className="rounded-md" height={200} width={200} />
        <p className="text-lg font-semibold mb-4">YAAY! GAME WIN </p>
        <p className="mb-4">Let everything happen to you Beauty and terror Just keep going No feeling is final</p>
        <button
          onClick={() => {
            dispatchRestart();
            onClose();
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <Link to="/app"> Main Menu</Link>
        </button>
      </div>
    </div>
  );
};

export default WonPopup;

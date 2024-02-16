import React from "react";
import { Link } from "react-router-dom";
type Close= {
    onClose : () => void;
}

const Popup:React.FC<Close> = ({ onClose }) => {
  return (
    <div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img src="/exploding.jpeg"  alt="exploding cat" height={200} width={200}/>
        <p className="text-lg font-semibold mb-4">OPPS! GAME OVER</p>
        <p className="mb-4">Life is like a roller coaster, live it, be happy, enjoy life.</p>
        <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
        <Link to="/app"> Main Menu</Link>

        </button>
      </div>
    </div>
  );
};

export default Popup;
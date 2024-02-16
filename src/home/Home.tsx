
import AccountForm from "../components/home/_AccountForm"
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { RootState } from "../Types";
// import { useEffect } from "react";
const Home = () => {

  // const user = useSelector((state: RootState) => state.auth.user);
   
  // let navigate = useNavigate();

  // useEffect(()=> {
  //   if(user?.name)
  //   {
  //     navigate('/app');

  //   }
  // }, [])
  return (
    <div className="home-body font-inter">

        <div>
            <p className="text-center text-white 
            text-3xl font-medium pt-10
            
            
            "
            >EXPLODING KITTENS🔥</p>
        </div>
        
        <div className="pt-10 grid md:grid-cols-2 sm:grid-cols-1 gap-5 ">
         <div>
        <img 
        className="rounded-r-lg"
        src="./kitten1.webp" alt="cat image" />
         </div>
         <div className="h-full bg-[#45c0ae] p-2 rounded-l-lg">
            <p className="text-black text-3xl pl-5
              font-medium
            ">
                A Card Game for people who are  & <br />into
                Kittens
            </p>
            <AccountForm />
            

         </div>
        </div>


    </div>
  )
}

export default Home
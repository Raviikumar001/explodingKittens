import React, { useState, useCallback} from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess,removeError, registerFailure, registerStart, registerSuccess} from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../Types";
import axios, { AxiosError } from "axios";

type Varient = "LOGIN" | "REGISTER";

const AccountForm: React.FC = () => {
  const [Varient, setVarient] = useState<Varient>("LOGIN");
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  let navigate = useNavigate();

  const dispatch = useDispatch(); 
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authApi = Varient === "LOGIN" ?"/auth/v1/login" : "/auth/v1/register"  ;
    const dispatchAction = Varient === "LOGIN" ? loginStart : registerStart;

    try {
      dispatch(dispatchAction())
      console.log(Varient);
      console.log(authApi , "auth")
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}${authApi}`,{
        name : name,
        userName: userName
      })

      console.log(response);
      if(response)
      {   
         if (Varient === 'REGISTER'){
          const user = await JSON.parse(response.data?.user);
          const token = response.data?.token;
          dispatch(registerSuccess({user,token}))
          navigate('/app');
         }else if(Varient == 'LOGIN')
         {
          const user = await JSON.parse(response.data?.user);
          const token = response.data?.token;
          dispatch(loginSuccess({user,token}))
          navigate('/app');
         }

      }
    } catch (error: unknown) {
      const err = error as AxiosError<{ msg: string }>;
      console.log(error)
      if (err.response) { 
        if (Varient === 'REGISTER'){
          const message = err.response?.data?.msg;
         dispatch(registerFailure(message))
        }else if(Varient == 'LOGIN')
        {
          const message = err.response?.data?.msg;
         dispatch(registerFailure(message))
        }
    
      }
    }
  };

  const toggleVarient = useCallback(() => {
    if (Varient === "LOGIN") {
      setUserName('')
      setVarient("REGISTER");
      dispatch(removeError())
    } else {
      setName('')
      setUserName('')
      setVarient("LOGIN");
    }
  }, [Varient]);

 

  return (
    <div>
      <div
        className="
        mt-8
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
          <form className="space-y-2" onSubmit={(e) => handleSubmit(e)}>
            {Varient == "REGISTER" && (
              <>
                <label
                  className="block
            text-sm
            font-medium
            leading-6
            text-gray-900
            "
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input
                    block
                    w-full
                    rounded-md
                    border-0
                    p-2
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-inset
                   
                    sm:text-sm
                    sm:leading-6"
                />
              </>
            )}

            <label
              className="block
            text-sm
            font-medium
            leading-6
            text-gray-900
            "
              htmlFor="Name"
            >
              Username
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-input
                    block
                    w-full
                    rounded-md
                    border-0
                    p-2
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-inset
                   
                    sm:text-sm
                    sm:leading-6"
            />
            {error}
            <button
              className=" flex
                    justify-center
                    border
                    border-gray-300
                    rounded-md
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    disabled:bg-gray-300
                    "
              disabled={isLoading}
              // fullwidth
              type="submit"
            >
              {Varient === "LOGIN" ? "Sign In" : "Register"}
            </button>
          </form>

          <div
            className="
            flex
            gap-2
            justify-center
            text-sm
            mt-6
            px-2
            text-gray-500
            
            "
          >
            <div>{Varient === "LOGIN" ? "Don't have an Account?" : "Already have an account?"}</div>
            <div onClick={toggleVarient} className="underline cursor-pointer">
              {Varient === "LOGIN" ? "Create an Account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;

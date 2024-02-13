import { useState, useCallback } from "react";

type Varient = "LOGIN" | "REGISTER";

const AccountForm = () => {
  const [Varient, setVarient] = useState<Varient>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVarient = useCallback(() => {
    if (Varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
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
          <form
            className="space-y-6"
            // onSubmit={handleSubmit(onSubmit)}
          >
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
                <input className="form-input
                    block
                    w-full
                    rounded-md
                    border-0
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
                    sm:leading-6" />
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
            <input className="form-input
                    block
                    w-full
                    rounded-md
                    border-0
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
                    sm:leading-6" />

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
                    focus-visible:outline-offset-2"
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

"use client";

const { useRouter } = require("next/navigation");
const { useState } = require("react");

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const hardCodedUser = {
    username: "johndoe",
    password: "password",
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // const user = user.find(
    //   (user) => user.username === username && user.password === password
    // );

    if (username === hardCodedUser.username && password === hardCodedUser.password) {
      router.push("/home");
    } else {
      setError("Invalid username or password");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-solid border-4 border-black p-8 shadow-lg ">
        <div className="flex justify-center items-center font-bold text-lg">
          <h1 className="text-blue-600 mb-10">FilmRewind</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mb-5">
          <label
            htmlFor="username"
            className="text-black mb-1 text-small font-bold w-full"
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-solid border-2 border-black p-1"
          ></input>
          <label
            htmlFor="password"
            className="text-black mb-1 text-small font-bold w-full"
          >
            Password
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-solid border-2 border-black p-1"
          ></input>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-500 text-white font-bold rounded shadow-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center mb-5 font-bold">
          <p>OR</p>
        </div>
        <div className="flex m-2">
          <p className="font-bold pr-2">Don't have an account?</p>
          <a href="/signup" className="text-blue-500 hover:text-blue-600 ">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

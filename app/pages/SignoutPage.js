"use client";

const { useRouter } = require("next/router");
const { useState } = require("react");

const Signup = () => {
  // const router = useRouter()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("The passwords do not match");
      return;
    }

    // ## Need to add logic for verification
    setError("");
    // router.push("/signin");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 shadow-lg">
      <div className="border-solid border-4 border-black bg-gray-300 p-8 shadow-lg ">
        <div className="flex justify-center items-center font-bold text-lg">
          <h1 className="text-blue-600 mb-10">FilmRewind</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mb-5">
          <label
            htmlFor="first-name"
            className="text-black mb-1 text-small font-bold w-full"
          >
            First Name
          </label>
          <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border-solid border-2 border-black p-1">
          </input>
          <label
            htmlFor="last-name"
            className="text-black mb-1 text-small font-bold w-full"
          >
            Last Name
          </label>
          <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border-solid border-2 border-black p-1">
          </input>
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
          <label
            htmlFor="confirm-password"
            className="text-black mb-1 text-small font-bold w-full"
          >
            Confirm Password
          </label>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            className="border-solid border-2 border-black p-1"
          ></input>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-500 text-white font-bold rounded shadow-md hover:bg-blue-600"
          >
            Create Account
          </button>
          {error && <p className="text-black my-4"></p>}
        </form>
        <div className="flex justify-center mb-5 font-bold">
          <p>OR</p>
        </div>
        <div className="flex m-2">
          <p className="font-bold pr-2">Already have an account?</p>
          <a href="/signin" className="text-blue-500 hover:text-blue-600 ">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;

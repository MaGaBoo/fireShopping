import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../App";

const auth = getAuth();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute, setUser } = useContext(AppContext);
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        console.log(user);
        toast(`User ${email} successfully registered`);
        setEmail("");
        setPassword("");
        setUser(user)
        setRoute("home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

    const handleSubmit = e => {
        e.preventDefault();
        createUser();
    }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-sky-700 font-semibold text-center">Regístrate y empieza a disfrutar de FireShopping</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="pasword" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-sky-600 py-1 text-white rounded shadow hover:bg-sky-800">Register</button>
      </form>
    </div>
  );
};

export default Register;

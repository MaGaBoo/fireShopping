import React, { useState, createContext, useContext } from "react";
import { app, messaging } from "./firebase/index";
import Header from "./components/Header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Shopping from "./routes/Shopping";

import { Toaster, toast } from "react-hot-toast";
import { onMessage } from "firebase/messaging";

import "./index.css";
import Footer from "./components/Footer";

export const AppContext = createContext(null);

onMessage(messaging, (payload) => {
  console.log("New notification", payload);
  toast(payload.notification.body);
  // You can customize your toast by use toast.custom with Tailwindcss or whatever
});

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <div className="h-screen">
        <Toaster />
        <Header />
        <main className="p-6 pt-24 pb-20">
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {route === "shopping" && <Shopping />}
          {user && <p>Welcome {user.email}</p>}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import HairstyleList from "../pages/HairstyleList";
import NewHairstyle from "../pages/NewHairstyle";
import HairstyleCard from "../pages/HairstyleCard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
         <Route path="/hairstyles/new">
           <NewHairstyle user={user} />
         </Route>

         <Route path="/me">
           <HairstyleCard user={user}/>
         </Route>

         <Route path="/">
           <HairstyleList user={user}/>
         </Route> 
        </Switch>x
      </main>
    </>
  );
}

export default App;

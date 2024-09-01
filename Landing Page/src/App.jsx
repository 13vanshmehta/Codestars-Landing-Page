import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Pages/Home"
import { Events } from "./Pages/Events"
import { Team } from "./Pages/Team"
import { Sponsers } from "./Pages/Sponsers"
import { Contact } from "./Pages/Contact"
import { Footer } from "./Components/Footer"

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route  path = "/" element = { < Home /> } />
            <Route  path = "/event" element = { < Events /> } />
            <Route  path = "/teams" element = { < Team /> } />
            <Route  path = "/sponsers" element = { < Sponsers /> } />
            <Route  path = "/contact" element = { < Contact /> } />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
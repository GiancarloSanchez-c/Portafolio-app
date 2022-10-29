import { Banner, NavBar, Skills,Projects, Contact } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
};

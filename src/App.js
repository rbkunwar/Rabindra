import './App.css';
import "./style.css";

import { Hero }from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Header } from "./components/Header"
;
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
<input type="checkbox" id="darkMode" class="dark-mode-checkbox" />
<div class="wrapper">
<label htmlFor="darkMode">
<i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
</label>

<Header />
<Hero />
<AboutMe />
<Skills />
<Footer />
<Projects />
<Footer />
<Contact />
</div>

    </>
  );
}

export default App;

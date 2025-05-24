
import Homeinfo from "./components/Home/Homeinfo";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";



function App() {
  return (
<div style={{ backgroundColor: 'rgb(58, 108, 161)', minHeight: '100vh', color: 'white' }}>
 
 <div className=" container-fluid row min-vh-100 " style={{ paddingTop: '70px' }}>
 <Navbar />
 <Homeinfo  />

 </div>
 <div id='skills'>
 <Skill/>
 </div>
 <div id='project'>
<Project/>
 </div>
 <div id='contact'>
<Contact/>
 </div>
 <Footer/>
</div>


  );
}

export default App;
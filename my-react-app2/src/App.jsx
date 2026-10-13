import Header from "./components/Header";
import Profile from "./components/Profile";
import CourseInfo from "./components/CourseInfo";   
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";


function App() {

  // a component must return ONE root element (the <div>), which can hold many components.
  return (
    <div>
        <Header />  
        <Profile studentname = "Ali" coursename = "Web Development" year = "2026"/>
        <Profile studentname = "Amy" coursename = "Web Development" year = "2026"/>
        <CourseInfo/>
        <StudentList/>
        <Footer/>

    </div>

    
    
  );
}

export default App;
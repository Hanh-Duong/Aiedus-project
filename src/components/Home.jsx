import React from "react";
import CourseCard from "./CourseCard";
import Nav from "./Nav";
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Nav />
      <section>
        <div className='headline'>
          <h1>Courses</h1>
        </div>
        <div className="section">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
    </div>
  );
}
export default Home;
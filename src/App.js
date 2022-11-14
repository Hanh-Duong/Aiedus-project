import './App.css';
import CourseCard from './components/CourseCard';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <>
      <section className="section">
        <div>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>

      <div>
        <RegisterForm />
      </div>

    </>
  );
}

export default App;

import AddCourse from './components/courses/addCourse';
import Courses from './components/courses/courses';
import { Routes, Route , Router} from 'react-router-dom';

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<AddCourse />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </>
  )

}

export default App
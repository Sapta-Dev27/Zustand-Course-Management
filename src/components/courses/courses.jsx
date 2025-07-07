import useCourseStore from "../../app/store.js";
import { useNavigate } from "react-router-dom";

const Courses = () => {

  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  }
 

  return (
    <>
      <div className="bg-gray-900 min-h-screen ">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold text-white p-4 m-4 text-center">My Courses</h1>
          <div className="flex flex-wrap justify-center items-center  p-4">
            {
              courses.map((course, index) => (
                <div className="flex flex-col justify-start  bg-gray-80 p-4 m-2 rounded-lg shadow-lg w-96
                border border-gray-700 hover:shadow-xl transition-shadow duration-200" key={index}>
                  <div key={index} className="text-md font-semibold text-gray-300 p-2">Course Id : {course.id}</div>
                  <div className="text-md font-semibold text-white p-2">Title : {course.title}</div>
                  <div className="text-md font-semibold text-gray-300 p-2">Description : {course.description}</div>
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="bg-blue-600 text-white px-2 py-2 m-2 rounded-lg w-40 hover:bg-blue-700 transition-all duration-200 shadow-md">Remove Course</button>
                </div>
              ))
            }
            <button onClick={handleNavigation} className="bg-blue-600 text-white px-2 py-2 rounded-lg w-40 ml-20 hover:bg-blue-700 transition-all duration-200 shadow-md">Add Courses</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default Courses
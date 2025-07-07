import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCourseStore from "../../app/store.js";

const AddCourse = () => {

  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const navigate = useNavigate();

  const addNewCourse = useCourseStore((state) => state.addCourse);

  const handleChangeTitle = (e) => {
    setCourseTitle(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setCourseDescription(e.target.value)
  }

  const handleNavigation = () => {
    navigate("/courses");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!courseTitle || !courseDescription) {
      alert("Please fill in both fields before submitting.");
      return;
    }
    addNewCourse({
      id: Math.ceil(Math.random() * 1000),
      title: courseTitle,
      description: courseDescription
    })
    setCourseTitle("")
    setCourseDescription("")

    if (addNewCourse) {
      console.log("Course added successfully!");
      alert("Course added successfully!");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold text-white p-4 m-4">Add Courses For Placement</h1>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="title"
            value={courseTitle}
            onChange={handleChangeTitle}
            placeholder="Enter the Course Title"
            className="w-2xl px-4 py-2 m-1 bg-gray-700 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-sm " >
          </input>
          <textarea
            type="text"
            value={courseDescription}
            onChange={handleChangeDescription}
            name="description"
            placeholder="Enter the Course Description"
            className="w-2xl h-32 px-4 py-2 m-1 bg-gray-700 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 shadow-sm "
          >
          </textarea>
          <div className="flex justify-center items-center gap-2 -ml-64 -mt-8">
          <button type="submit" className="bg-blue-600 text-white px-2 py-2 m-1 rounded-lg w-40 hover:bg-blue-700 transition-all duration-200 shadow-md">
            Add Course
          </button>
          <button className="bg-blue-600 text-white px-2 py-2 m-10  rounded-lg w-40 hover:bg-blue-700 transition-all duration-200 shadow-md" onClick={handleNavigation}>View Courses</button>
          </div>
        </form>
        
      </div>
    </>
  )
}

export default AddCourse;
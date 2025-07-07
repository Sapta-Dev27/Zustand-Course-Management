import { create } from "zustand";
import { persist } from "zustand/middleware";

const courseStore = persist((set) => ({
  courses: [],
  addCourse: (course) => set((state) => ({
    courses: [course, ...state.courses]
  })),
  removeCourse: (courseId) => set((state) => ({
    courses: state.courses.filter((course) => course.id != courseId)
  }))
}),
  {
    name: "course-storage",
  }
)


const useCourseStore = create(courseStore);

export default useCourseStore;
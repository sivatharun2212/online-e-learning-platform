import { createContext, useState } from 'react';
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
      const [selectedCourse , setSelectedCourse] = useState(null);
      const [selectedMyCourse,setSelectedMyCourse] = useState([]);

      const handleCourseClick = (course) => {
            setSelectedCourse(course);
            setSelectedMyCourse((prevSelectedCourses) => {
              // Check if the course is already present in the array
              if (prevSelectedCourses.some((selectedCourse) => selectedCourse.title === course.title)) {
                return prevSelectedCourses; // If already present, return the previous array
              } else {
                return [...prevSelectedCourses, course]; // If not present, add the course to the array
              }
            });
          };
          
      return (
            <CourseContext.Provider value={{selectedCourse, handleCourseClick, selectedMyCourse, setSelectedMyCourse}}>
                  {children}
            </CourseContext.Provider>
      );
};
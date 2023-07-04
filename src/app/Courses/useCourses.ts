import { useCallback, useMemo, useState } from "react";

import { CourseInterface } from "../../@types";
import Swal from "sweetalert2";
import { appAtom } from "../../atoms/app.atom";
import { useRecoilState } from "recoil";

export interface useCoursesProps {
  open?: boolean;
}

/***
 * Custom hook to handle courses logic
 */
export function useCourses({ open = false }: useCoursesProps) {
  /***
   * form state
   */
  const [isFormOpen, setIsFromOpen] = useState(open);

  /***
   * App state
   */
  const [state, setState] = useRecoilState(appAtom);
  const [search, setSearch] = useState("");

  const [selectedCourse, setSelectedCourse] = useState<CourseInterface>();

  /***
   * From Events
   */
  const onClose = useCallback(() => {
    setIsFromOpen(false);
    setSelectedCourse(undefined);
  }, []);

  const onOpen = useCallback((course: any = null) => {
    setIsFromOpen(true);

    if (selectedCourse) setSelectedCourse(course);
  }, []);

  /***
   * State manager
   */
  const courses = useMemo(
    () =>
      state.courses.filter(
        (course) =>
          course.title.indexOf(search) !== -1 ||
          course.description?.indexOf(search) !== -1
      ),
    [state.courses, search]
  );

  /***
   * Courses Events
   */
  const updateCourse = useCallback(
    (oldCourse: CourseInterface, newCourse: CourseInterface) => {
      const newCourses = [...state.courses];

      const courseIndex = newCourses.findIndex(
        (course) => course.id === oldCourse.id
      );

      if (courseIndex !== -1)
        newCourses[courseIndex] = {
          ...newCourse,
          updatedAt: new Date().toJSON(),
          drafts: [
            ...oldCourse.drafts,
            { ...newCourse, id: `${oldCourse.id}-${newCourse.id}` },
          ],
        };

      setState({
        ...state,
        courses: newCourses,
      });
    },
    [setState, state]
  ); /* Updates a course */

  const createCourse = useCallback(
    (newCourse: CourseInterface) => {
      const newCourses = [
        ...state.courses,
        {
          ...newCourse,
          id: new Date().getTime(),
          createdAt: new Date().toJSON(),
          drafts: [] as CourseInterface[],
        },
      ];

      setState({
        ...state,
        courses: newCourses as CourseInterface[],
      });
    },
    [setState, state]
  ); /* Creates a new course */

  const deleteCourse = useCallback(
    (course: CourseInterface) => {
      Swal.fire({
        title: "Delete course",
        text: `Are you sure you want to delete this course ${course.title} ?`,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setState({
            ...state,
            courses: state.courses.filter((c) => c.id !== course.id),
          });
        }
      });
    },
    [setState, state]
  ); /* Deletes a course */

  return {
    /***
     * Is Form Open or not
     */
    isFormOpen,

    /***
     * Closes the form
     */
    onClose,

    /***
     * Opens the form
     */
    onOpen,

    /***
     * Saved Courses
     */
    courses,

    /***
     * Creates a new course
     */
    createCourse,

    /***
     * Updates a specific course
     */
    updateCourse,

    /***
     * Delete a specific course
     */
    deleteCourse,

    /***
     * Selected course
     */
    selectedCourse,

    /***
     * Update selected course
     */
    setSelectedCourse,

    /***
     * Update search
     */
    setSearch,
  };
}

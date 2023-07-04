import { Button, Col, Input, Row } from "reactstrap";

import { AiOutlinePlus } from "react-icons/ai";
import CourseCard from "./components/CourseCard/CourseCard";
import { CourseInterface } from "../../@types";
import { useCourses } from "./useCourses";

/***
 * Import `CoursesForm`
 */
import CoursesFrom from "./components/CoursesForm";
import { Helmet } from "react-helmet";

export default function Courses() {
  const {
    courses,
    createCourse,
    deleteCourse,
    updateCourse,
    isFormOpen,
    onClose,
    onOpen,
    selectedCourse,
    setSelectedCourse,
    setSearch,
  } = useCourses({
    open: false,
  });

  return (
    <>
      <Helmet>
        <title>courses Page</title>
      </Helmet>

      <h2 className="d-flex align-items-center justify-content-between">
        Courses
        <Button onClick={onOpen} color="success">
          <AiOutlinePlus />
          Add Course
        </Button>
      </h2>

      <Row className="mt-5">
        <Col lg="12" md="12" sm="12" className="mb-3">
          <Input
            className="p-3"
            type="search"
            placeholder="Filter courses"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>

        {courses.map((course: CourseInterface) => (
          <CourseCard
            key={"course-" + course.id}
            course={course}
            deleteCourse={deleteCourse}
            onOpen={onOpen}
            setSelectedCourse={setSelectedCourse}
          />
        ))}

        {courses.length === 0 && (
          <Col
            lg={12}
            md={12}
            sm={12}
            className="text-center p-5 h4 text-danger"
          >
            No Courses Found
          </Col>
        )}
      </Row>

      {isFormOpen && (
        <CoursesFrom
          onClose={onClose}
          selectedCourse={selectedCourse}
          createCourse={createCourse}
          updateCourse={updateCourse}
        />
      )}
    </>
  );
}

import { CONFIG } from "../../config";
import { useCourseDate } from "./useCoursePage";
import { CourseInterface } from "../../@types";
import CourseCard from "../Courses/components/CourseCard/CourseCard";
import { Button, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Helmet } from "react-helmet";

export default function CoursePage() {
  const { course, isChild, parentId } = useCourseDate();

  return (
    <>
      <Helmet>
        <title>{course?.title}</title>
      </Helmet>

      <div
        className="course-image"
        style={{
          backgroundImage: `url(${
            course?.thumbnail || CONFIG.app.design.dummyImage
          })`,
        }}
      ></div>
      <h1 className="d-flex justify-content-between align-items-center mt-3">
        {course?.title}

        {isChild && (
          <Link
            to={CONFIG.urls.course.view({
              ...course,
              id: parentId,
            } as CourseInterface)}
            className="text-decoration-none"
          >
            <Button color="success">
              <BiArrowBack />
              Go to Parent
            </Button>
          </Link>
        )}
      </h1>

      <p className="text-wrap">{course?.description}</p>

      {!isChild && (
        <>
          <h2>Drafts</h2>
          <Row>
            {course?.drafts?.map((draft: CourseInterface) => (
              <CourseCard course={draft} key={"draft" + draft.id} />
            ))}
          </Row>
        </>
      )}
    </>
  );
}

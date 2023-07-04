import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Col,
} from "reactstrap";

import { CourseInterface } from "../../../../@types";
import React from "react";
import { Link } from "react-router-dom";
import { CONFIG } from "../../../../config";

export interface CourseCardProps {
  course: CourseInterface;
  setSelectedCourse?: React.Dispatch<
    React.SetStateAction<CourseInterface | undefined>
  >;
  onOpen?: (course?: CourseInterface) => void;
  deleteCourse?: (course: CourseInterface) => void;
}

export default function CourseCard({
  course,
  setSelectedCourse,
  onOpen,
  deleteCourse,
}: CourseCardProps) {
  return (
    <>
      <Col md={6} sm={12} xm={12} className="mb-4">
        <Link
          to={{ pathname: CONFIG.urls.course.view(course) }}
          className="text-decoration-none"
        >
          <Card>
            <CardImg
              src={course.image || CONFIG.app.design.dummyImage}
              className="course-card-image"
              loading="lazy"
              alt="Card image cap"
              height={250}
            />

            <CardTitle className="p-3 d-flex justify-content-end gap-2 align-items-center">
              <span className="text-muted">Last update</span>
              <Badge className="p-2" color="success">
                {new Date(
                  course?.updatedAt || course?.createdAt || ""
                )?.toLocaleDateString()}
              </Badge>
            </CardTitle>

            <CardBody className="pt-0 course-content-body">
              <h4 className="text-capitalize">{course.title}</h4>
              <p>{course.description}</p>
            </CardBody>

            {setSelectedCourse && onOpen && deleteCourse && (
              <CardFooter className="d-flex gap-2 justify-content-end">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    onOpen();
                    setSelectedCourse(course);
                  }}
                >
                  <AiOutlineEdit />
                  Edit
                </Button>

                <Button
                  color="danger"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteCourse(course);
                  }}
                >
                  <AiOutlineDelete />
                  Delete
                </Button>
              </CardFooter>
            )}
          </Card>
        </Link>
      </Col>
    </>
  );
}

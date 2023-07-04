import { CourseInterface } from "../@types";

export const URLS = {
  home: "/",
  course: {
    url: "/courses/:id",
    view: (course: CourseInterface) => `/courses/${course.id}`,
  },
  notFound: "*",
};

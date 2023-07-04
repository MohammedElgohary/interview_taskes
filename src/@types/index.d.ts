export interface CourseInterface {
  id: string;
  title: string;
  description?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  drafts: CourseInterface[];
}

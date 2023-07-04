export interface CourseInterface {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  duration: number;
  isNew: boolean;
  drafts: CourseInterface[];
  createdAt?: string;
  updatedAt?: string;
}

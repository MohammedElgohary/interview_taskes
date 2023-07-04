import { CourseInterface } from "../../../../@types";
import { useForm } from "react-hook-form";
import { validationSchema } from "./courses.form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

export interface useCourseFromProps {
  onClose: () => void;
  selectedCourse?: CourseInterface;
  updateCourse: (oldData: CourseInterface, newDate: CourseInterface) => void;
  createCourse: (data: CourseInterface) => void;
}

export function useCourseFrom({
  onClose,
  selectedCourse,
  createCourse,
  updateCourse,
}: useCourseFromProps) {
  const form = useForm<CourseInterface>({
    defaultValues: selectedCourse,
    resolver: yupResolver(validationSchema) as any,
  });

  function onSave(data: CourseInterface) {
    if (selectedCourse) {
      data.id = selectedCourse.id;

      updateCourse(selectedCourse, data);
    } else {
      createCourse(data);
    }

    onClose();
  }

  function onCancel() {
    if (form.formState.dirtyFields.title) {
      Swal.fire({
        title: "Confirm close",
        text: "Are you sure you want to close?",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          onClose();
        }
      });
    } else {
      onClose();
    }
  }

  return { ...form, onSave, onCancel };
}

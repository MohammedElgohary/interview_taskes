import {
  Button,
  CloseButton,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

import { BaseInput } from "../../../../components/Input/BaseInput";
import { CourseInterface } from "../../../../@types";
import { useCourseFrom } from "./useCourseFrom";

export interface CoursesFormProps {
  onClose: () => void;
  createCourse: (course: CourseInterface) => void;
  updateCourse: (
    oldCourse: CourseInterface,
    newCourse: CourseInterface
  ) => void;
  selectedCourse?: CourseInterface;
}

export default function CoursesForm({
  onClose,
  createCourse,
  updateCourse,
  selectedCourse,
}: CoursesFormProps) {
  const { control, handleSubmit, onSave, onCancel } = useCourseFrom({
    createCourse,
    onClose,
    updateCourse,
    selectedCourse,
  });

  return (
    <>
      <Modal isOpen={true} size="lg">
        <form onSubmit={handleSubmit(onSave)} encType="">
          <ModalHeader>
            <span>{`${selectedCourse ? "Edit" : "Add"} Course`}</span>

            <CloseButton onClick={onCancel} />
          </ModalHeader>

          <ModalBody>
            <Row>
              <Col md="12">
                <BaseInput control={control} name="title" />
              </Col>

              <Col md="12">
                <BaseInput
                  control={control}
                  name="thumbnail"
                  label="image"
                  type="url"
                />
              </Col>

              <Col md="12">
                <BaseInput
                  control={control}
                  name="description"
                  type="textarea"
                  rows={5}
                />
              </Col>

              <Col md="6">
                <BaseInput control={control} name="duration" type="number" />
              </Col>

              <Col md="6">
                <BaseInput
                  control={control}
                  name="isNew"
                  type="switch"
                  label="is new"
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-start">
            <Button type="submit" color="success">
              Save
            </Button>

            <Button onClick={onCancel}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
}

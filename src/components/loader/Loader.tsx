import { Spinner } from "reactstrap";

export default function Loader() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100 overlay">
      <Spinner color="light" />
    </div>
  );
}

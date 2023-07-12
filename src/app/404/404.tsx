import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { CONFIG } from "../../config";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Notfound</title>
      </Helmet>
      <div className="d-flex align-items-center justify-content-center w-100 notFoundPage flex-column">
        404 Notfound <p />
        <Link to={CONFIG.urls.home} className="text-decoration-none">
          <Button color="success">Go to Home</Button>
        </Link>
      </div>
    </>
  );
}

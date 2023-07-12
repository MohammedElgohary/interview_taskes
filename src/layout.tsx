import { Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { BiHomeAlt2 } from 'react-icons/bi'

import App from './app'
import { CONFIG } from './config'

export default function layout() {
  return (
    <>
      <header className="p-3 bg-light">
        <h1 className="h3 d-flex justify-content-between">
          {CONFIG.app.name} Task
          <Link to={CONFIG.urls.home} className="text-decoration-none">
            <Button className="px-5">
              <BiHomeAlt2 />
              Home
            </Button>
          </Link>
        </h1>
      </header>

      <main>
        <Container className="pt-5">
          <App />
        </Container>
      </main>

      <footer className="p-3 text-center">
        &copy; Mohammed Samara Elgohary {new Date().getFullYear()}
      </footer>
    </>
  );
}

import { Link } from "react-router-dom";

//Navegar entre componentes dentro de la aplicacion
export default function LoginView() {
  return (
    <>
      <nav>
        <Link to="/auth/register">No tienes una cuenta? Crea una aqui</Link>
      </nav>
    </>
  );
}

import { Link } from "react-router-dom";

//Navegar entre componentes dentro de la aplicacion Link

export default function RegisterView() {
  return (
    <>
      <div>RegisterView</div>
      <nav>
        <Link to="/auth/login">Ya tienes una cuenta? Inicia Sesion</Link>
      </nav>
    </>
  );
}

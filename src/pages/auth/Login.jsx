
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
  Button,
  Alert,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Credenciales simuladas
    const usuarioValido = "agente";
    const contrasenaValida = "123456";
    const pinValido = "2379";

    if (
      usuario === usuarioValido &&
      contrasena === contrasenaValida &&
      pin === pinValido
    ) {
      sessionStorage.setItem("auth_token", "token-seguro");
      navigate("/dashboard/Inicio");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader
          variant="gradient"
          color="gray"
          floated={false}
          shadow={false}
          className="mb-4 text-center"
        >
          <Typography variant="h5" color="white">
            SEGEDOC-MILITAR
          </Typography>
          <Typography variant="small" className="text-white mt-1">
            Acceso Restringido
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          {error && (
            <Alert color="red" className="text-sm">
              Credenciales o PIN incorrectos.
            </Alert>
          )}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              label="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
            <Input
              type="password"
              label="PIN de Seguridad"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
            <Button type="submit" color="gray" fullWidth>
              Iniciar Sesión
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
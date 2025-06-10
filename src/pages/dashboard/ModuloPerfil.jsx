import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
  Button,
  Avatar,
  Chip,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ShieldCheckIcon,
  KeyIcon,
  ClockIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export function ModuloPerfil() {
  const userInfo = {
    nombre: "Cap. Juan Pérez",
    unidad: "Inteligencia Militar",
    acceso: "Secreto",
    correo: "jperez@ejercito.mil",
    ingreso: "2025-06-05 14:21",
    pin: "2379", // PIN del usuario (simulado)
  };

  const [openModal, setOpenModal] = useState(false);
  const [pin, setPin] = useState("");
  const [formData, setFormData] = useState({
    actual: "",
    nueva: "",
    confirmar: "",
  });

  const handlePinSubmit = () => {
    if (pin === userInfo.pin) {
      alert("✅ Contraseña actualizada exitosamente.");
      setOpenModal(false);
      setPin("");
    } else {
      alert("❌ PIN incorrecto. Operación cancelada.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <Typography variant="h4" className="text-white mb-2">
          Perfil del Agente
        </Typography>
        <Typography className="text-blue-gray-300">
          Información sensible. El acceso está restringido y registrado.
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Panel Izquierdo */}
        <Card className="w-full lg:w-1/2 shadow-sm border">
          <CardHeader
            floated={false}
            shadow={false}
            className="bg-gray-800 p-6 flex items-center gap-4"
          >
            <Avatar
              src="/img/avatar.jpg"
              alt="avatar"
              size="lg"
              variant="rounded"
              className="border-2 border-white"
            />
            <div>
              <Typography variant="h6" color="white">
                {userInfo.nombre}
              </Typography>
              <Typography variant="small" color="white">
                {userInfo.unidad}
              </Typography>
            </div>
            <Tooltip content="Perfil Verificado">
              <ShieldCheckIcon className="h-6 w-6 text-green-400 ml-auto" />
            </Tooltip>
          </CardHeader>
          <CardBody>
            <div className="space-y-2 text-blue-gray-700 text-sm">
              <p><strong>Correo:</strong> {userInfo.correo}</p>
              <p>
                <strong>Acceso:</strong>
                <Chip value={userInfo.acceso} color="orange" size="sm" className="ml-2 inline-block" />
              </p>
              <p>
                <strong>Último Ingreso:</strong>
                <span className="inline-flex items-center gap-1 ml-1 text-blue-gray-600">
                  <ClockIcon className="h-4 w-4" /> {userInfo.ingreso}
                </span>
              </p>
            </div>
          </CardBody>
        </Card>

        {/* Panel Derecho */}
        <Card className="w-full lg:w-1/2 shadow-sm border">
          <CardHeader floated={false} shadow={false} className="bg-gray-900 p-4">
            <Typography variant="h6" color="white">
              Seguridad de la Cuenta
            </Typography>
          </CardHeader>
          <CardBody>
            <Typography className="mb-2 text-blue-gray-700 font-medium">
              Cambiar Contraseña
            </Typography>
            <div className="space-y-3">
              <Input
                type="password"
                label="Contraseña Actual"
                icon={<KeyIcon className="h-4 w-4" />}
                value={formData.actual}
                onChange={(e) => setFormData({ ...formData, actual: e.target.value })}
              />
              <Input
                type="password"
                label="Nueva Contraseña"
                icon={<KeyIcon className="h-4 w-4" />}
                value={formData.nueva}
                onChange={(e) => setFormData({ ...formData, nueva: e.target.value })}
              />
              <Input
                type="password"
                label="Confirmar Nueva Contraseña"
                icon={<KeyIcon className="h-4 w-4" />}
                value={formData.confirmar}
                onChange={(e) => setFormData({ ...formData, confirmar: e.target.value })}
              />
              <Button color="gray" className="mt-2 w-full" onClick={() => setOpenModal(true)}>
                Actualizar Contraseña
              </Button>
            </div>

            <hr className="my-6 border-blue-gray-100" />
            <Typography variant="small" className="text-blue-gray-600 mb-2">
              - Autenticación en dos pasos: <span className="text-green-600 font-bold">Activa</span>
            </Typography>
            <Typography variant="small" className="text-blue-gray-600 mb-2">
              - Registros de inicio de sesión protegidos
            </Typography>
            <Typography variant="small" className="text-blue-gray-600 mb-2">
              - Verificación de dispositivo habilitada
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Modal de PIN */}
      <Dialog open={openModal} handler={setOpenModal}>
        <DialogHeader className="flex items-center gap-2">
          <LockClosedIcon className="h-6 w-6 text-blue-500" />
          Ingresar PIN de Seguridad
        </DialogHeader>
        <DialogBody>
          <Input
            label="PIN de Seguridad"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button variant="gradient" color="blue" onClick={handlePinSubmit}>
            Confirmar
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ModuloPerfil;

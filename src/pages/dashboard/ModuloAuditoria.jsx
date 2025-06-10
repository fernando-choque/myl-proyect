// src/pages/dashboard/ModuloAuditoria.jsx
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export function ModuloAuditoria() {
  const registros = [
    {
      usuario: "Cap. Pérez",
      accion: "Visualizó",
      documento: "Informe 001",
      fecha: "2025-06-01",
      ip: "192.168.0.21",
    },
    {
      usuario: "Tte. López",
      accion: "Descargó",
      documento: "Reporte 2024",
      fecha: "2025-06-02",
      ip: "192.168.0.18",
    },
  ];

  const PIN_USUARIO = "2379";
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);
  const [pinInput, setPinInput] = useState("");

  const validarPin = () => {
    if (pinInput === PIN_USUARIO) {
      setMostrarTabla(true);
      setOpenDialog(false);
    } else {
      alert("❌ PIN incorrecto. Acceso denegado.");
    }
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Registro de Auditoría
          </Typography>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          {!mostrarTabla ? (
            <Typography color="gray" className="p-4 italic">
              Acceso restringido. Ingrese el PIN para ver el historial de auditoría.
            </Typography>
          ) : (
            <table className="w-full min-w-[800px] table-auto">
              <thead>
                <tr>
                  {["Usuario", "Acción", "Documento", "Fecha", "IP"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {registros.map((log, i) => {
                  const className = `py-3 px-5 ${
                    i === registros.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;
                  return (
                    <tr key={i}>
                      <td className={className}>{log.usuario}</td>
                      <td className={className}>{log.accion}</td>
                      <td className={className}>{log.documento}</td>
                      <td className={className}>{log.fecha}</td>
                      <td className={className}>{log.ip}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>

      <Dialog open={openDialog} handler={setOpenDialog}>
        <DialogHeader className="flex items-center gap-2">
          <LockClosedIcon className="h-6 w-6 text-blue-500" />
          Ingresar PIN de Seguridad
        </DialogHeader>
        <DialogBody>
          <Input
            label="PIN"
            type="password"
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenDialog(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={validarPin}
          >
            Ver Auditoría
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ModuloAuditoria;

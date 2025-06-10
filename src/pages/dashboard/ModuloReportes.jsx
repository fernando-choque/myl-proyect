import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export function ModuloReportes() {
  const PIN_USUARIO = "2379";
  const [pinDialogOpen, setPinDialogOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [pendingAction, setPendingAction] = useState(null); // 'generar', 'excel', 'pdf'

  const solicitarPIN = (accion) => {
    setPendingAction(accion);
    setPin("");
    setPinError(false);
    setPinDialogOpen(true);
  };

  const handleConfirmAction = () => {
    if (pin === PIN_USUARIO) {
      setPinDialogOpen(false);
      switch (pendingAction) {
        case "generar":
          alert("Reporte generado correctamente.");
          break;
        case "excel":
          alert("Descargando reporte en formato Excel.");
          break;
        case "pdf":
          alert("Descargando reporte en formato PDF.");
          break;
        default:
          break;
      }
    } else {
      setPinError(true);
    }
  };

  return (
    <div className="mt-12 mb-8 flex flex-col items-center">
      <Card className="w-full max-w-4xl">
        <CardHeader variant="gradient" color="gray" className="p-6">
          <Typography variant="h6" color="white">
            Generar Reporte de Auditoría
          </Typography>
        </CardHeader>
        <CardBody className="p-6 space-y-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              solicitarPIN("generar");
            }}
            className="space-y-6"
          >
            <Input label="Usuario" color="green" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Typography variant="small" className="mb-1 text-blue-gray-700 font-medium">
                  Desde
                </Typography>
                <Input type="date" color="blue" />
              </div>
              <div>
                <Typography variant="small" className="mb-1 text-blue-gray-700 font-medium">
                  Hasta
                </Typography>
                <Input type="date" color="blue" />
              </div>
            </div>

            <Button type="submit" color="green" fullWidth>
              Generar
            </Button>
          </form>

          <div className="flex gap-4 justify-center">
            <Button color="blue" onClick={() => solicitarPIN("excel")}>
              Exportar Excel
            </Button>
            <Button color="red" onClick={() => solicitarPIN("pdf")}>
              Exportar PDF
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Modal de PIN */}
      <Dialog open={pinDialogOpen} handler={setPinDialogOpen}>
        <DialogHeader>Autenticación Requerida</DialogHeader>
        <DialogBody>
          <Typography className="mb-4 text-blue-gray-600">
            Ingrese el PIN de seguridad para autorizar esta acción.
          </Typography>
          <Input
            label="PIN de seguridad"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            error={pinError}
          />
          {pinError && (
            <Typography variant="small" className="text-red-600 mt-2">
              PIN incorrecto. Intente nuevamente.
            </Typography>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={() => setPinDialogOpen(false)}>
            Cancelar
          </Button>
          <Button color="green" onClick={handleConfirmAction}>
            Confirmar
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ModuloReportes;

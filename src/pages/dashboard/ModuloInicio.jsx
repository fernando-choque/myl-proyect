// Módulo 1: Inicio
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function ModuloInicio() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-10 bg-gray-900">
      <Card className="w-full max-w-2xl bg-gray-900 text-white shadow-md">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col items-center gap-4 pt-6"
        >
          <img
            src="/img/logo-ejercito.png"
            alt="Logo Ejército de Bolivia"
            className="h-40 w-40 rounded-full shadow-lg border-2 border-white"
          />
          <div className="text-center">
            <Typography variant="h3" color="white" className="font-bold">
              SEGEDOC-MILITAR
            </Typography>
            <Typography variant="h6" color="white" className="mt-1 font-light">
              Sistema de Gestión de Documentos Clasificados
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-6 items-center">
          <Typography variant="lead" color="white" className="italic">
            "Todo acceso está registrado. Autorización requerida."
          </Typography>
          <Typography
            variant="h6"
            className="text-white italic font-semibold text-center"
          >
            “Con honor, silencio y sacrificio, custodiamos la verdad de la patria.”
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default ModuloInicio;

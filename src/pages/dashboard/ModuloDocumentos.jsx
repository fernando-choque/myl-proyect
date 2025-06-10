import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { list_documentos } from "../../services/services_gral";

export function ModuloDocumentos() {

    const [documentos, setDocumentos] = useState([]);
  useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const data = await list_documentos();
        setDocumentos(data);
      } catch (error) {
        console.error("Error al obtener anuncios:", error);
      }
    };

    fetchDocumentos();
  }, []);
  console.log(documentos);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Gestión de Documentos Clasificados
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[800px] table-auto">
            <thead>
              <tr>
                {["Nombre", "Clasificación", "Unidad", "Subido por", "Fecha", "Ver", "Descargar"].map((el) => (
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
              {documentos.map((doc, key) => {
                const className = `py-3 px-5 ${
                  key === documentos.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={key}>
                    <td className={className}>{doc.Nombre}</td>
                    <td className={className}>
                      <Chip
                        variant="gradient"
                        color={
                          doc.Clasificación === "Ultrasecreto"
                            ? "red"
                            : doc.Clasificación === "Secreto"
                            ? "blue"
                            : "green"
                        }
                        value={doc.Clasificación}
                        className="py-0.5 px-2 text-[11px] font-medium w-fit"
                      />
                    </td>
                    <td className={className}>{doc.Unidad}</td>
                    <td className={className}>{doc.SubidoPor}</td>
                    <td className={className}>{doc.Fecha}</td>
                    <td className={className}>
                      <Button size="sm" variant="outlined" color="blue">
                        Ver
                      </Button>
                    </td>
                    <td className={className}>
                      <Button size="sm" variant="gradient" color="green">
                        Descargar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default ModuloDocumentos;

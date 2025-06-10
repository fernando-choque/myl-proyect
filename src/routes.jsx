import { TableCellsIcon } from "@heroicons/react/24/solid";

// Módulos personalizados
import Login from "@/pages/auth/Login";
import ModuloInicio from "@/pages/dashboard/ModuloInicio";
import ModuloDocumentos from "@/pages/dashboard/ModuloDocumentos";
import ModuloAuditoria from "@/pages/dashboard/ModuloAuditoria";
import ModuloReportes from "@/pages/dashboard/ModuloReportes";
import ModuloPerfil from "@/pages/dashboard/ModuloPerfil";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Inicio",
        path: "/Inicio",
        element: <ModuloInicio />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Gestión de Documentos",
        path: "/documentos",
        element: <ModuloDocumentos />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Auditoría",
        path: "/Auditoria",
        element: <ModuloAuditoria />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Reportes",
        path: "/Reportes",
        element: <ModuloReportes />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Perfil",
        path: "/Perfil",
        element: <ModuloPerfil />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        name: "Login(Test)",
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;


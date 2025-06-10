import { Typography } from "@material-tailwind/react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center px-2 text-center">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year} — Sistema de Gestión de Documentos Clasificados | SEGEDOC-MILITAR
        </Typography>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;

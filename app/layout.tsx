import "./globals.css";
import PachaHeader from "./_components/PachaHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <PachaHeader />
        <main className="container-app py-6">{children}</main>
        <footer className="container-app py-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Municipalidad de Pachacámac · PACHACARD
        </footer>
      </body>
    </html>
  );
}

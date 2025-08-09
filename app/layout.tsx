import { TriviaProvider } from "./providers/TriviaProvider";
import { Header } from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <TriviaProvider> {/* El Provider envuelve todo */}
          <Header /> {/* El Header es visible en todas las páginas */}
          <main style={{ padding: '20px' }}>{children}</main>
        </TriviaProvider>
      </body>
    </html>
  );
}

import '../styles/globals.css';

export const metadata = { title: "Rakebet" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

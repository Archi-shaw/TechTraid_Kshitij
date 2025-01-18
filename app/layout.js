import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased`} suppressHydrationWarning
      >
        {children}  
      </body>
    </html>
  );
}

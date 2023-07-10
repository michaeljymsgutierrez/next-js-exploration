export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-w-[320px] bg-white font-sans text-black antialiased">
        {children}
      </body>
    </html>
  );
}

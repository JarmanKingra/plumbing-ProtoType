import '../styles/globals.css';

export const metadata = {
  title: 'Local Business Demo',
  description: 'Reusable local-service business website demo.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

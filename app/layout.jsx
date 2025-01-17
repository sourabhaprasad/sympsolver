import "@styles/global.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata = {
  title: "SympSolver",
  description: "Quick Insights, Clear Guidance",
  icons: {
    icon: "/icons/logo.png",
    // apple: "/apple-icon.jpg",
    // shortcut: "/favicon.ico",
  },
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div></div>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default layout;

import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import LoadingPage from "../ui/LoadingPage";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import UserReviews from "../Components/UserReviews";

function App() {
  const { state } = useNavigation();
  const { pathname } = useLocation();

  // 🔹 State to control initial loading

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 🔹 Show loading for initial 3s, or during route loading
  if (state === "loading") {
    return <LoadingPage />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <header className="sticky z-50 top-0">
        <Header />
      </header>

      <main className="min-h-screen">
        <Outlet />
        <UserReviews></UserReviews>
      </main>

      <footer>
        <Footer />
      </footer>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

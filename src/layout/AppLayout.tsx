import Header from "./../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";

const AppLayout = () => {
  return (
      <div className="2xl:container md:px-20 px-5 md:py-10 py-5  2xl:mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
      
  );
};

export default AppLayout;

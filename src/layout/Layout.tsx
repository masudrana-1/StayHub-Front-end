import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";


const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <HeaderText />
            <Footer/>
        </div>
    );
};

export default Layout;
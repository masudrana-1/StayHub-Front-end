import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderText from "../components/HeaderText";


interface Props{
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <HeaderText />
            <div className="container mx-auto py-10 flex-1">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
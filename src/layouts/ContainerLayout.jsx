import Footer from "@/components/Footer";
import GoTopButton from "@/components/GoTopButton";
import Header from "@/components/Header";

const ContainerLayout = ({ children }) => {
    return (
        <div>
            <Header />

            {children}

            <GoTopButton />

            <Footer />
        </div>

    );
}

export default ContainerLayout;
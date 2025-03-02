import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AllSector } from "../../components/AllSector";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import data from '../../data/info.json';

export default function Sectors() {
    const { category } = useParams(); // Para receber a categoria da URL
    const navigate = useNavigate(); // Redireciona para página correta

    // Categorias válidas
    const validCategories = ["promotions", "releases", "dresses", "accessories"];

    // Verificação de categoria válida
    if (!validCategories.includes(category)) {
        navigate("/");
        return null;
    }

    //Filtra os dados
    const filterCategory = data.sectors[category] || [];

    return (
        <>
            <Header />
            <Sidebar data={filterCategory} />
            <AllSector data={filterCategory} />
        </>
    );
}






// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { AllSector } from "../../components/Sector";
// import Header from "../../components/Header";
// import Sidebar from "../../components/Sidebar";
// import sectors from '../../data/info.json'


// export default function Sectors() {
//     const { category } = useParams(); //Para receber a categoria da URL
//     const navigate = useNavigate(); // Redireciona para página correta

//     //Categorias válidas
//     const validCategories = ["promotions", "releases", "dresses", "accessories"];

//     // Verificação
//     if (!validCategories.includes(category)) {
//         navigate("/");
//         return null;
//     }

//     const filterCategory = sectors[category]
//     const fil = sectors[category].includes

//     return (
//         <>
//             <Header />
//             <Sidebar data={filterCategory} />
//             <AllSector data={filterCategory}/>
//         </>
//     )
// }
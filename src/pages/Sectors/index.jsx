import Header from "../../components/Header";
import { AllSector } from "../../components/Sector";
import Sidebar from "../../components/Sidebar";
import data from '../../data/info.json'

export default function Sectors() {
    return (
        <>
            <Header />
            <Sidebar />
            <AllSector data={data.sectors} />
        </>
    )
}
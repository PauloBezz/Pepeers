import Header from "../../components/Header";
import Selection from "../../components/Selection";
import { clothing } from '../../data/info.json'

export const Product = () => {
    return (
        <>
            <Header />
            <Selection data={clothing} />
        </>
    )
}
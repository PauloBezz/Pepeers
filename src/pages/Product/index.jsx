import Header from "../../components/Header";
import Selection from "../../components/Selection";
import { clothing } from '../../data/info.json'
import {Cart} from "../../components/Cart/index"

export const Product = () => {
    return (
        <>
            <Header />
            <Selection data={clothing} />
            {/* <Cart/> */}
        </>
    )
}
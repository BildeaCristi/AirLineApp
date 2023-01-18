import "../App.css"
import "../pages/AllTables.css"
import ClientiComponent from "../components/ClientiComponent/ClientiComponent";
import ZboruriComponent from "../components/ZboruriComponent/ZboruriComponent";
import BileteComponent from "../components/BileteComponent/BileteComponent";
import CupoaneComponent from "../components/CupoaneComponent/CupoaneComponent";

function AllTables() {
    return (
        <div className="backgroundImage">
            <ClientiComponent/>
            <ZboruriComponent/>
            <BileteComponent/>
            <CupoaneComponent/>
        </div>
    );
}

export default AllTables;
import { LuPointer } from "react-icons/lu";
import './Arrow.css';

const Arrow = () => {
    return (
        <div className="arrow-container d-flex justify-content-center align-items-center">
            <div className="animacion_rebote">
                <LuPointer size={30}/>
            </div>
        </div>
    );
};

export default Arrow;

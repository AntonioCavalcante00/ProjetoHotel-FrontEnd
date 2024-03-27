import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';


export default function Offcanvas() {
    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <IoMdMenu />
            </button>

            <div className="offcanvas offcanvas-start offcanvas-lg" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <NavLink to='/hospedagem' >
                            Hospedagem
                        </NavLink>
                        <NavLink to='/passeios'>
                            Passeios</NavLink>
                        <NavLink reloadDocument to='/preços' >
                            Preços</NavLink>
                        <NavLink to='/resort' >
                            Resort</NavLink>
                        <NavLink to='/informações'>
                            Informações</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
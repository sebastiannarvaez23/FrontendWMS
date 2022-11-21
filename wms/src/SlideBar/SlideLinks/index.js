import React from "react";
import './SlideLinks.css';
import Swal from 'sweetalert2';
import imgProfile from "../image/profile.jpg";

function logout() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar la sesion',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Continúa despachando!',
                'error'
            )
        }
    })
}

function SlideLinks() {
    return (
        <ul className="nav-links">
            <li>
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link_name">Control</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Control</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-pie-chart-alt-2'></i>
                    <span className="link_name">Analiticas</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Analiticas</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-compass'></i>
                    <span className="link_name">Explorar</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Explorar</a></li>
                </ul>
            </li>
            <li>
                <a href="http://localhost:8000/admin/">
                    <i className='bx bx-cog'></i>
                    <span className="link_name">Configuraciones</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="http://localhost:8000/admin/">Configuraciones</a></li>
                </ul>
            </li>
            <li>
                <div className="profile-details">
                    <div className="profile-content">
                        <img src={imgProfile} alt="profileImg" />
                    </div>
                    <div className="name-job">
                        <div className="profile_name">Santi Sanchez</div>
                        <div className="job">Web Desginer</div>
                    </div>
                    <i onClick={() => { logout() }} className='bx bx-log-out'></i>
                </div>
            </li>
        </ul>
    );
}
export { SlideLinks };
import React from "react";
import './SlideLinks.css';
import Swal from 'sweetalert2';
import imgProfile from "../image/profile.jpg";

const logout = () => {
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

export const SlideLinks = () => {
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
                <i class='bx bx-door-open'></i>
                    <span className="link_name">Recepción</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Recepción</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-coin-stack'></i>
                    <span className="link_name">Inventarios</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Inventarios</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-home-alt'></i>
                    <span className="link_name">Almacenamiento</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Almacenamiento</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i class='bx bxs-truck'></i>
                    <span className="link_name">Despachos</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Despachos</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i class='bx bxs-plane-alt'></i>
                    <span className="link_name">Envío</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Envío</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-undo'></i>
                    <span className="link_name">Devoluciones</span>
                </a>
                <ul className="sub-menu blank">
                    <li><a className="link_name" href="#">Devoluciones</a></li>
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
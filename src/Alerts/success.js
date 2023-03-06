import Swal from 'sweetalert2';

export const alertEventSuccess = (msnTitle) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: msnTitle,
        showConfirmButton: false,
        timer: 1500
    })
}
import Swal from 'sweetalert2';

export const alertWithConfirm = (msnTitle, msnConfirm, functionResult) => {
    Swal.fire({
        title: msnTitle,
        //text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: msnConfirm,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            functionResult();
        }
      })
}
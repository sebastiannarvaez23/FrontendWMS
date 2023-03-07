import Swal from 'sweetalert2';

export const alertSmallTopCenter = (msnTitle, icon) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: icon,
        title: msnTitle
      })
}

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

export const alertEventSuccess = (msnTitle, icon) => {
  Swal.fire({
      position: 'top-end',
      icon: icon,
      title: msnTitle,
      showConfirmButton: false,
      timer: 1500
  })
}
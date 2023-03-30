import Swal from 'sweetalert2';
import styles from "./Alerts.module.css";

// const root = document.documentElement;
// const veryLikePink = getComputedStyle(root).getPropertyValue('--very-like-pink');

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

export const alertWithConfirm = (msnTitle, msnConfirm, btnCancel, functionResult, functionResultCancel) => {
  Swal.fire({
    title: msnTitle,
    //text: "You won't be able to revert this!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: veryLikePink,
    cancelButtonColor: '#d33',
    confirmButtonText: msnConfirm,
    cancelButtonText: btnCancel,
  }).then((result) => {
    if (result.isConfirmed) {
      functionResult();
    } else {
      functionResultCancel();
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

export const alertWithInput = (msnTitle, api, msnErrorQuery, functionResult, functionResultCancel) => {
  Swal.fire({
    title: msnTitle,
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (valueInput) => {
      let url = api + valueInput;
      return fetch(url)
        .then(response => { 
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            msnErrorQuery
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      functionResult(result.value);
    } else {
      functionResultCancel();
    }
  })
}
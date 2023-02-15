import React from "react";
import './LoginForm.css';
import Swal from 'sweetalert2';

export const FormLogin = (props) => {

  const credentials = [{ user: 'manager', pass: 'admin123' }]

  const [loginUser, setLoginUser] = React.useState('')
  const [loginPass, setLoginPass] = React.useState('')

  function cleanForm() {
    setLoginUser('');
    setLoginPass('');
    props.setShowCredentialError(false);
  }

  const sesionSuccess = (showCredentialError) => {
    if (showCredentialError) { props.setShowCredentialError(false) }
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
      icon: 'success',
      title: 'Inicio de Sesion Exitoso!'
    })
  }

  function validateCredential(loginUser, loginPass, onShowCredentialError) {
    credentials.forEach(credential => {
      if (credential['user'] === loginUser && credential['pass'] === loginPass) {
        sesionSuccess(props.showCredentialError);
        window.location.href = "/picking/"
      } else {
        //props.setShowCredentialError(true);
        const Toast = Swal.mixin({
          width: 600,
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 6000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'error',
          title: 'Las credenciales que estás ingresando son erroneas. Si el error persiste Comuniquese con el administrador.'
        })
      }
    });
  }

  const onLoginUser = (event) => {
    //console.log(event.target.value);
    setLoginUser(event.target.value);
  }

  const onLoginPass = (event) => {
    setLoginPass(event.target.value);
  }

  return (
    <div>
      {/* <form href={"/"} method={"get"}> */}
      <div className="inp-login"><input onChange={onLoginUser} value={loginUser} placeholder="usuario" className="form-control" /></div>
      <div className="inp-login"><input onChange={onLoginPass} value={loginPass} placeholder="contraseña" className="form-control" type={"password"} /></div>
      {props.children}
      <div><button onClick={() => { validateCredential(loginUser, loginPass, props.onShowCredentialError) }} className="btn btn-login" type={"submit"}>Iniciar Sesion</button></div>
      {/* </form> */}
      <div><button onClick={cleanForm} className="btn btn-login">Limpiar</button></div>
      <div className="contain-contact-manager"><a href="https://wa.me/573106418293" target={"_blank"}>Contactar al administrador</a></div>
      <div className="contain-contact-manager"><a href="http://localhost:8000/admin/" target={"_blank"}>Gestionar Usuarios</a></div>
    </div>
  );
}
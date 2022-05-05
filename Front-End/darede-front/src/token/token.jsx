export const usuarioAutenticado = () => localStorage.getItem('acctoken') !== null;
export const parseJwt = () => {
    let base64 = localStorage.getItem('acctoken').split('.')[1];
    console.log(base64);
    return JSON.parse( window.atob(base64) );
};
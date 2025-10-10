//inserción
function insertar(clave, valor){
    sessionStorage.setItem(String(clave), String(valor));
}
//eliminación
function eliminar(clave){
    sessionStorage.removeItem(String(clave));
}
//consultar
function existe(clave){
    return sessionStorage.getItem(String(clave)) !== null;
}
//borrar cierta información con base en las reglas de sessionStorage
function borrarPrefijo(prefijo) {
  const p = String(prefijo);
  const aBorrar = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const k = sessionStorage.key(i);
    if (k.startsWith(p)) aBorrar.push(k);
  }
  for (const k of aBorrar) sessionStorage.removeItem(k);
}

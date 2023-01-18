import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProdiver = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = (datos) => {
    //base
    let calculo = 2000;
    //obtener diferencia de años
    const diferenciaYear = obtenerDiferenciaYear(datos.year);
    //se debe restar el 3% de cada año
    calculo -= (diferenciaYear * 3 * resultado) / 100;
    //europero 30%
    //americano 15%%
    //asiatico 5%
    calculo *= calcularMarca(datos.marca);
    //console.log(resultado);
    calculo *= calcularPlan(datos.plan);
    //basico +20%
    //completo +50%

    calculo = calculo.toFixed(2);

    calculo = formatearDinero(calculo);
    setCargando(true);
    setTimeout(() => {
      setResultado(calculo);
      setCargando(false);
    }, 3000);
  };
  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
      }}>
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProdiver };
export default CotizadorContext;

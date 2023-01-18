import { CotizadorProdiver } from "./context/CotizadorProvider";
import AppSeguro from "./components/AppSeguro";

function App() {
  return (
    <CotizadorProdiver>
      <AppSeguro />
    </CotizadorProdiver>
  );
}

export default App;

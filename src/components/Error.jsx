import useCotizador from "../hooks/useCotizador";

const Error = () => {
  const { error } = useCotizador();
  return (
    <div className="border text-center border-red-600 bg-red-100 py-3 text-red-800">
      <p className="">{error}</p>
    </div>
  );
};

export default Error;

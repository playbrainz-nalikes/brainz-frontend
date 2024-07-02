export const PriceAdjuster = ({ value, onChange, currency = "ETH" }) => {

  const updatePrice = (operation) => {
    const increment = 1;
    let priceNumber = value;
    if (operation === "increment") {
      priceNumber = priceNumber + increment;
    } else if (operation === "decrement") {
      priceNumber = Math.max(0, priceNumber - increment);
    }
    onChange(priceNumber);
  };

  return (
    <div className="flex w-full md:w-60 px-[10px] lg:px-6 py-3.5 border border-primary-250 bg-primary flex gap-4 items-center justify-between rounded-3xl">
      <div className="flex-2.5 flex ">
        <button
          onClick={() => updatePrice("decrement")}
          className="text-base lg:text-lg font-bold text-white font-basement hover:text-secondary"
        >
          -
        </button>
        <input
          className="w-full overflow-hidden border-secondary mx-4 appearance-none font-basement font-bold text-base lg:text-lg  text-grey-650 bg-[transparent] outline-none focus:outline-none text-white"
          type="number"
          placeholder="121"
          value={value}
          onChange={(e) => {
            const newPrice =
              e.target.value === "" ? 0 : parseFloat(e.target.value);
            if (!isNaN(newPrice)) onChange(newPrice);
          }}
        />
      </div>
      <div className="flex-1 flex items-center justify-end gap-3 relative ">
        {/* <input
          className="hidden lg:block appearance-none font-basement font-bold text-base lg:text-lg  text-grey-650 bg-[transparent] outline-none focus:outline-none text-white"
          type="number"
          placeholder="121"
          value={price}
          onChange={(e) => {
            const newPrice =
              e.target.value === "" ? 0 : parseFloat(e.target.value);
            if (!isNaN(newPrice)) setPrice(newPrice);
          }}
          style={{
            minWidth: "50px",
            width: `${(price.toString().length + 1) * 10}px`,
          }}
        /> */}
        <h1 className="text-base lg:text-lg  font-bold font-basement text-secondary">
          {currency}
        </h1>
        <button
          onClick={() => updatePrice("increment")}
          className="text-base lg:text-lg  font-bold text-white font-basement hover:text-secondary"
        >
          +
        </button>
      </div>
    </div>
  );
};

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


gem lige min input field til currency converter:
    <input
          id={id}
          type="text"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amountValue}
          onChange={(e) => {
            // Allow only numbers and at most one comma
            const numericValue = e.target.value
              .replace(/[^\d,]/g, "") // Remove non-numeric characters and multiple commas
              .replace(/(,)(?=\1)|[^0-9,]/g, ""); // Remove extra commas

            setAmountValue(numericValue);
          }}
          onClick={handleInputClick} // Handle click event to reset the value
        />

import React, { useEffect, useState } from 'react';

const CurrencyConverter = ({ selectedCurrency, rate }) => {
  return (
    <div>
      {rate ? (
        <h2>1 USD = {rate[selectedCurrency]} {selectedCurrency}</h2>
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default CurrencyConverter;
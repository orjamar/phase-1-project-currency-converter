fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const currencies = data.currencies;

    const fromCurrencySelect = document.getElementById('from');
    const toCurrencySelect = document.getElementById('to');
    const amountInput = document.getElementById('amount');
    const convertButton = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    currencies.forEach(currency => {
      const option1 = document.createElement('option');
      option1.value = currency.code;
      option1.text = `${currency.code} - ${currency.name}`;
      fromCurrencySelect.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = currency.code;
      option2.text = `${currency.code} - ${currency.name}`;
      toCurrencySelect.appendChild(option2);
    });

    convertButton.addEventListener('click', () => {
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
      const amount = amountInput.value;

      const fromRate = currencies.find(currency => currency.code === fromCurrency).rate;
      const toRate = currencies.find(currency => currency.code === toCurrency).rate;

      const convertedAmount = (amount * toRate) / fromRate;
      resultDiv.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });

    amountInput.addEventListener('change', () => {
      convertButton.click();
    });
  });

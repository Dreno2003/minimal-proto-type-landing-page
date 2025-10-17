export async function getExchangeRate({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  // const UNIRATEKEY = process.env.UNIRATE_API_KEY; // in .env.local

  // Helper for validating results
  const isValidRate = (rate: number) => !isNaN(rate) && rate > 0;

  try {
    // 🟢 1. Try CurrencyFreaks (primary)
    const res = await fetch(
      `https://api.unirateapi.com/api/convert?api_key=XL89LFgeWPhfIwgPt0z3KEeZjile4bIebTJajctKWSyJ5UifiP0SZcOrNNJl7JpG&amount=1&from=${from}&to=${to}&format=json`

      //   `https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=${to}&base=${from}`
      //   `https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=${to}&base=${from}`
    );
    const data = await res.json();
    const rate = parseFloat(data?.result);
    if (isValidRate(rate)) return rate;

    throw new Error("CurrencyFreaks invalid response");
  } catch (err1) {
    console.warn("⚠️ CurrencyFreaks failed:", err1);
  }

  try {
    // 🟡 2. Try Exchangerate.host (high-traffic fallback)
    const res = await fetch(
      `https://api.exchangerate.host/convert?from=${from}&to=${to}`
    );
    const data = await res.json();
    const rate = parseFloat(data?.result);
    if (isValidRate(rate)) return rate;

    throw new Error("Exchangerate.host invalid response");
  } catch (err2) {
    console.warn("⚠️ Exchangerate.host failed:", err2);
  }

  try {
    // 🔵 3. Try Frankfurter.app (official ECB data)
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=${from}&to=${to}`
    );
    const data = await res.json();
    const rate = parseFloat(data?.rates?.[to]);
    if (isValidRate(rate)) return rate;

    throw new Error("Frankfurter invalid response");
  } catch (err3) {
    console.error("❌ All exchange rate APIs failed:", err3);
    return 1; // default fallback (no conversion)
  }
}

// export async function getExchangeRate(from: string, to: string) {
//   const res = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}`);
//   const data = await res.json();
//   return data.result; // conversion rate
// }

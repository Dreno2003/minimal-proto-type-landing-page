// utils/formatPrice.js
export function formatPrice({amount, displaySymbol = ""}:{amount:number, displaySymbol:string}) {
  if (isNaN(amount)) return `${displaySymbol}0.00`;
  
  return `${displaySymbol}${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

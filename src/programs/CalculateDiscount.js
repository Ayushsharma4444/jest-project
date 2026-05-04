export function calculateDiscount(price, percent) {
  if (price <= 0) throw new Error("Invalid price");
  if (percent < 0 || percent > 100) throw new Error("Invalid percent");
  return price - (price * percent) / 100;
}
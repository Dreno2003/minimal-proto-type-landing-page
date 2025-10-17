export async function getUserCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return {
      countryCode: data.country_code, // e.g., 'NG'
      countryName: data.country_name, // e.g., 'Nigeria'
      currency: data.currency,        // e.g., 'NGN'
    };
  } catch (error) {
    console.error("Error fetching user country:", error);
    return null;
  }
}

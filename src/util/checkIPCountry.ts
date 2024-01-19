import axios from 'axios';

export const checkIPCountry = async (
  ipAddress: string,
): Promise<string | null> => {
  try {
    const response = await axios.get(`https://freegeoip.app/json/${ipAddress}`);
    return response.data.country_code;
  } catch (error) {
    console.error('Error fetching IP information:', error);
    return null;
  }
};

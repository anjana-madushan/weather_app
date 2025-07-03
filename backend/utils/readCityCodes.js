import { readFile } from 'fs/promises';

//Extract the CityCodes from cities.json file
export const readCityCodes = async () => {
  try {
    const fileContent = await readFile('./cities.json', 'utf8');
    const cities = JSON.parse(fileContent);
    return cities.List.map(city => city.CityCode);
  }
  catch (error) {
    console.error('Failed to load city codes:', error.message);
    return [];
  }
}
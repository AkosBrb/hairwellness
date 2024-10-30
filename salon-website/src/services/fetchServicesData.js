import { URL } from "../constants/firebaseConfig";

async function getServicesData() {
  const response = await fetch(`${URL}/services.json`, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  return data
}

export default getServicesData;
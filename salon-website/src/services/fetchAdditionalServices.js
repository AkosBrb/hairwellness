import { URL } from "../constants/firebaseConfig";

async function getAdditionalServices() {
  const response = await fetch(`${URL}/additional.json`, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  return data
}

export default getAdditionalServices;
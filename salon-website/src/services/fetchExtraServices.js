import { URL } from "../constants/firebaseConfig"

async function getExtraServices() {
  const response = await fetch(`${URL}/child.json`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = response.json();
  return data
}

export default getExtraServices;
import { app } from '../firebaseConfig';
import { ref, getStorage, listAll, getDownloadURL } from "firebase/storage";

async function fetchGallery(setter) {
  const storage = getStorage(app);
  const fileRef = ref(storage, `gallery/`);

  const response = await listAll(fileRef);
  response.items.forEach(itemRef => {
    getDownloadURL(itemRef).then(url => setter(prevState => {
      return [...prevState, url]
    }))
  })
};

export default fetchGallery;
import { app } from '../firebaseConfig';
import { ref, getStorage, listAll, getDownloadURL } from "firebase/storage";

async function fetchGallery() {
  const storage = getStorage(app);
  const fileRef = ref(storage, `gallery/`);

  const response = await listAll(fileRef);
  const urlPromises = response.items.map(itemRef => getDownloadURL(itemRef))
  const urls = await Promise.all(urlPromises);
  preloadImgs(urls);
  return urls;
};
function preloadImgs(urls) {
  urls.forEach(url => {
    const imgObj = new Image();
    imgObj.src = url;
  })
}

export default fetchGallery;
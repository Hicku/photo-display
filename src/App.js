import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";

function App() {
  const [defaultImages, setDefaultImages] = useState([]);

  useEffect(() => {
    const getDefaultPhotos = async () => {
      const res = await fetch("https://picsum.photos/v2/list");
      const data = await res.json();
      console.log(data);
      setDefaultImages(data);
    };

    getDefaultPhotos();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Photos defaultImages={defaultImages} />
    </div>
  );
}

export default App;

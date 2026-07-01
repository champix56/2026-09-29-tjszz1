import React, { useEffect, useState } from "react";
import MT from "./MemeThumbnail";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { store } from "../../../store/store";

const MemeThumbnail: React.FC = () => {
  const [memes, setmemes] = useState<Array<MemeInterface>>([]);
  const [images, setimages] = useState<Array<ImageInterface>>([]);
  useEffect(() => {
    const actual = store.getState();
    setmemes(actual.memes);
    setimages(actual.images);
    store.subscribe(() => {
      setmemes(store.getState().memes);
      setimages(store.getState().images);
    });
  }, []);

  return <MT memes={memes} images={images} />;
};

export default MemeThumbnail;

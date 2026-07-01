import type { FC } from "react";
import styles from "./MemeThumbnail.module.css";
import {
  MemeSVGThumbnail,
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";

interface MemeThumbnailProps {
  memes: Array<MemeInterface>;
  //memes: MemeInterface[];
  images: Array<ImageInterface>;
}

const MemeThumbnail: FC<MemeThumbnailProps> = ({ memes, images }) => (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    {memes.map((m,i) => (
      <div key={i}>
        <MemeSVGViewer
          meme={m}
          image={images.find((im) => im.id === m.imageId)}
          basePath=""
        />
      </div>
    ))}
  </div>
);

export default MemeThumbnail;

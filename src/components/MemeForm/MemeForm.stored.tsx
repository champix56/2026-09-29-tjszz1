import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import MemeFormU from "./MemeForm";
import { update } from "../../store/slices/current";

const MemeForm = () => {
  const current = useSelector((s: RootState) => s.current.meme);
  const imgs = useSelector((s: RootState) => s.ressources.images);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <MemeFormU
      images={imgs}
      meme={current}
      onMemeChange={(meme) => {
        dispatch(update(meme));
      }}
    />
  );
};

export default MemeForm;
  
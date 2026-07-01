import { useNavigate, useParams } from "react-router";
import FlexH1Grow from "../components/layouts/FlexH1Grow/FlexH1Grow";
import MemeForm from "../components/MemeForm/MemeForm.stored";
import MemeSVGViewer from "../components/uis/MemeSVGViewer/MemeSVGViewer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { clear, update } from "../store/slices/current";

const Editor = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const current = useSelector((s: RootState) => s.current.meme);
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const nav = useNavigate();
  console.log(params);
  useEffect(() => {
    if (params.id) {
      if (current.id !== Number(params.id)) {
        const found = memes.find((m) => m.id === Number(params.id));
        if (found) {
          dispatch(update(found));
        } else nav("/");
      }
    } else {
      dispatch(clear());
    }
    return () => {};
  }, [params, current, dispatch, nav, memes]);

  return (
    <FlexH1Grow>
      <MemeSVGViewer />
      <MemeForm />
    </FlexH1Grow>
  );
};

export default Editor;

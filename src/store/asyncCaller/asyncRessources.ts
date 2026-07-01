import { createAsyncThunk } from "@reduxjs/toolkit";
import { RESSOURCES, REST_URL } from "../../config/constanteRest";

export const initialRessourcesLoad = createAsyncThunk(
  "ressources/load",
  async () => {
    const pri = fetch(`${REST_URL}${RESSOURCES.images}`).then((r) => r.json());
    const prm = fetch(`${REST_URL}${RESSOURCES.memes}`).then((r) => r.json());
    const prAll = await Promise.all([pri, prm]);
    return { images: await prAll[0], memes: await prAll[1] };
  },
);

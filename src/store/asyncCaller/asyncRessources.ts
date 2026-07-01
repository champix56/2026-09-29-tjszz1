import { createAsyncThunk } from "@reduxjs/toolkit";
import { RESSOURCES, REST_URL } from "../../config/constanteRest";
import type { MemeInterface } from "orsys-tjs-meme";

export const initialRessourcesLoad = createAsyncThunk(
  "ressources/load",
  async () => {
    const pri = fetch(`${REST_URL}${RESSOURCES.images}`).then((r) => r.json());
    const prm = fetch(`${REST_URL}${RESSOURCES.memes}`).then((r) => r.json());
    const prAll = await Promise.all([pri, prm]);
    return { images: await prAll[0], memes: await prAll[1] };
  },
);

export const saveCurrent = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const pr = await fetch(
      `${REST_URL}${RESSOURCES.memes}${meme.id !== undefined ? "/" + meme.id : ""}`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        body: JSON.stringify(meme),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return { meme: await pr.json() };
  },
);

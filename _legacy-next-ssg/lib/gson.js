import fetch from "axios";

export async function getData(sheetsURL) {
  const gson = `https://gson.fayazara.now.sh?url=${sheetsURL}`;

  const grab = await fetch(gson);

  return grab.data;
}

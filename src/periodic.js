import { output } from "../webpack.config";
// api data="http://www.omdbapi.com/?i=tt3896198&apikey=41a9886c"
// API Information

export const getAtomicNumber = async () => {
  try {
    const res = await fetch("https://periodictable.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "450615328emshbbbb01201edd700p1e3dcejsn51d009064d7a",
        "x-rapidapi-host": "periodictable.p.rapidapi.com",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

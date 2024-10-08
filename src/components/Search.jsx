import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "0e12d6de24a34cc4a8e60546214137a9"; // always keep it hide and personal

export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("pizza");

  //syntax of useEffect hook
  //   useEffect(()=>{}, [])
  //to fetch APi we make use of Fetch function i.e JS function
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); // it will return Json
      const data = await res.json(); // this wont work bc fetch takes time so we have to make fetch wait
      // console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}

import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
import { selectedData } from "../utils/data";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [selectedCategories, setSelectedCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState();

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategories);
  }, [selectedCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    // fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
    //   console.log(contents, "Selected Category");
    //   setSearchResults(contents);
    //   setLoading(false);
    // });
    //
    setTimeout(() => {
      setSearchResults(selectedData.contents);
      setLoading(false);
      console.log(selectedData.contents, "ajsjn");
    }, 3000);
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategories,
        setSelectedCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

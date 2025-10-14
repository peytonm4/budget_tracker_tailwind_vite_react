import { createContext, useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import useCategories from "../hooks/useCategories";
import CreateNewCategoryArea from "../components/CreateNewCategoryArea.jsx";

const CategoriesContext = createContext({
    categories: [],
    fetchCategories: async () => {}
});

export const CategoriesProvider = ({ children }) => {
    const { getAllCategories } = useCategories();
    const [categories, setCategories ] = useState([]);

    const fetchCategories = useCallback(async () => {
        let allCategories = await getAllCategories();
        console.log("Categories", allCategories);
        setCategories(allCategories);
    }, []);
    
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories])


    return (<CategoriesContext.Provider value={{ categories, fetchCategories }}>
        {children}
    </CategoriesContext.Provider>)
}

export const useCategoryContext = () => useContext(CategoriesContext);


import { createContext, useState, useEffect } from "react";
// import { SHOP_DATA } from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap:{},
    setCategoriesMap: ()=> {}
});


export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=> {
        const getCategoriesMap =async () => {
            const CategoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(CategoryMap);
        };
        getCategoriesMap();
    
}, []);

    const value = { categoriesMap, setCategoriesMap };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};





// useEffect(()=> {
//     addCollectionAndDocuments('collection', SHOP_DATA);
// }, []);
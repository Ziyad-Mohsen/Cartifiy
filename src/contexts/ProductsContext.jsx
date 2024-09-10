import React, { createContext, useState, useEffect } from "react";

const API_URL = "https://fakestoreapi.com/products/";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const catResponse = await fetch(API_URL + "/categories");
        const cat = await catResponse.json();
        const productsResponse = await fetch(API_URL);
        const data = await productsResponse.json();
        setProducts(data);
        setCategories(cat);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, categories, isLoading, isError, API_URL }}
    >
      {children}
    </ProductContext.Provider>
  );
}

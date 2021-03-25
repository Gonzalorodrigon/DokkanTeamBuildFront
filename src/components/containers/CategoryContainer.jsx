import React, { useState, useEffect } from "react";
import axios from 'axios';
import { getCategories } from '../../adapters/getMethods'


const CategoryContainer = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect (() => {
      const fetchCategories = async () => {
        const categories = await getCategories();
        setCategories(categories);
        setIsLoaded(true);
    };    
    fetchCategories();
}, []);

       if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
             {
          categories.map((category) => {
            return <div key={category.name}>{category.name}</div>
        })
      }
          </div>
        );
      }
    }

    export default CategoryContainer;

import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Shopping from "./Components/ShoopingCart/Shopping";
import Buttons from "./Components/Buttons/Buttons";
import Super from "./Components/Super/Super";
import Loding from "./Components/Loding/Loding";
import Supscripe from "./Components/Supscripe/Supscripe";
import { Routes, Route } from 'react-router-dom';
import { useFetchCategories, useFetchProducts } from "./Custom/Customhook";
import React from "react";
import { useTranslation } from 'react-i18next';


function App() {
    const [loading, setLoading] = useState(true);
    const { i18n } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState();
    const products = useFetchProducts();
    const categories = useFetchCategories();


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const changeAr = () => {
        i18n.changeLanguage('ar')
        localStorage.setItem('language', 'ar');
    }
    const changeEn = () => {
        i18n.changeLanguage('en')
        localStorage.setItem('language', 'en');
    }

    return (
        <>
            {loading ? (
                <Loding />
            ) : (
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header changeAr={changeAr} changeEn={changeEn} />
                            <Super />
                            <Supscripe />
                            <Buttons categories={categories} setSelectedCategory={setSelectedCategory} products={products} />
                            <Card products={products} selectedCategory={selectedCategory} />
                        </>
                    } />
                    <Route path="/Shoping" element={
                        <>
                            <Header changeAr={changeAr} changeEn={changeEn} />
                            <Shopping />
                        </>
                    } />
                   
                </Routes>
            )}

        </>
    );
}

export default App;

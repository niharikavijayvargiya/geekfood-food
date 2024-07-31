import axios from "axios";
import './Foodpage.css'
import { useEffect, useState } from "react";
import Foodcard from "../components/Foodcard/Foodcard";
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Foodpage() {
    const [foods, setFood] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [uniqueCountries, setUniqueCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const filteredData = foods.filter((obj) =>
        obj.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
                const data = await response.json();
                const countries = data.meals.map(meal => meal.strArea);
                const countriesList = Array.from(new Set(countries));
                setUniqueCountries(countriesList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {

            try {
                let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
                if (selectedCountry !== '') {
                    url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setFood(data.meals ? data.meals : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };
        fetchData();
    }, [selectedCountry]);

    const renderProducts = () => {
        return filteredData.map((product) => (
            <NavLink to={`/food/${product.idMeal}`} style={{ textDecoration: "none" }} >
                <Foodcard
                    product={product}
                    key={product.idMeal}
                />
            </NavLink>
        ));
    };


    return (

        <>
            <Header />
            <div className="main-container">
                <label>🔍</label>
                <input
                    type="text"
                    placeholder="Search your food"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />

                <select style={{ height: "30px", marginLeft: "10px" }} value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} >
                    <option value="">All Cuisines</option>
                    {uniqueCountries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>

                <div className="food-container">
                    {renderProducts()}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Foodpage
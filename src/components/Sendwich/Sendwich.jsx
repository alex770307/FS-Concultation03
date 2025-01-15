import { useState } from 'react'
import './Sendwich.module.css'

export default function Sendwich() {

    const [ingredients, setIngredients] = useState("Бутербродный конфигуратор: ");

    const addBread = () => {
        setIngredients(`${ingredients} хлеб 🍞`);
    };

    const addCheese = () => {
        setIngredients(`${ingredients} Сыр 🧀`);
    };

    const addSausage = () => {
        setIngredients(`${ingredients} Колбаса 🍠`);
    };

    const addSalad = () => {
        setIngredients(`${ingredients} Салат 🥦`);
    };
    const resetResults = () => {
        setIngredients("Бутербродный конфигуратор: ");

    };

    return (
        <div>
            <h1>Sendwich</h1>
            <img src="https://cdn.pixabay.com/photo/2020/12/06/14/51/sandwiches-5809006_1280.jpg" alt="Sendwich" />
            <p>{ingredients}</p>
            <button type="button" onClick={addBread}>Добавить хлеб 🍞</button>
            <button type="button" onClick={addCheese}>Добавить сыр 🧀</button>
            <button type="button" onClick={addSausage}>Добавить колбасу 🍠</button>
            <button type="button" onClick={addSalad}>Добавить салат 🥦</button>
            <button type="button" onClick={resetResults}>Удалить</button>
        </div>
    )
}
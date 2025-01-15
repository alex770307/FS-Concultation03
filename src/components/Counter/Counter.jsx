import { useState } from 'react';
import style from './Counter.module.css';
export default function Counter() {
    const [counter, setCouter] = useState(0)

    function handelPlus() {
        setCouter(counter +1);
    }

    function handelMinus() {
        setCouter(counter -1);
    }

    function handel100() {
        setCouter(counter +100);
    }
    const resetResults = () => {
        setCouter(0);
        
    };
return (
    <div>
        <h1>Добавление денег</h1>
        <img src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
        <div className={style.container}></div>
        <button type="button" className={style.btn} onClick={handelMinus}>Убрать лишние деньги</button>
        <button type="button" className={style.btn} onClick={resetResults}>Обнулить</button>
        <span style={{color: "red"}}>${counter} euro</span>
        <button type="button" className={style.btn} onClick={handelPlus}>Добавить деньги на счёт</button>
        <button type="button" className={style.btn} onClick={handel100}>Добавить 100 на счёт</button>
        
    </div>
)


}
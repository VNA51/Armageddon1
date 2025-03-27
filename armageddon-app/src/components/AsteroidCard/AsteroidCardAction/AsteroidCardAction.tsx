import styles from "./Action.module.css"
import {useContext} from "react";
import {AsteroidsContext} from "../../asteroids-context/AsteroidsContext";

export const AsteroidCardAction =(props:{isDangerous:boolean,onClick:(asteroid:any)=>void  }) =>{
    const {isDangerous, onClick} = props;

    return (<div>
        <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? `опасен` : `не опасен`}`}</div>
        <button className={styles.actionBut} onClick={onClick}>
            <div className={styles.actionText}>На уничтожение</div>
        </button>
    </div>)
}
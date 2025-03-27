import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import {getUserKey} from "../AsteroidCard/utils/getUserKey";
import {memo, useState} from "react";


export const Header = memo(()=>{
    const [inputOpened, setInputOpened] = useState(false)


    return <div className={styles.container}>
        <div>
            <h1>ARMAGGEDON V</h1>
            <div>Сервис мониторинга и уничтожения остероидов, опасно подлетающих к Земле.</div>
        </div>
        <div>
            <Link className={styles.button_asteroids} to={"/asteroids"} >Астероиды</Link>
            {'     '}
            <Link className={styles.button_deystroyment} to={"/destroyment"}>Уничтожение</Link>
        </div>
        <div>
            {getUserKey() == "DEMO_KEY" ? <button onClick={() => setInputOpened(!inputOpened)}>Ввести свой ключ</button> :
                <button>Ваш ключ подключен</button>}
        </div>
        {inputOpened ? <input data-testId={"Api_key_input"} onChange={(ev) => {
            if (ev.target.value.length == 40) {
                localStorage.setItem("API_KEY", ev.target.value);
                setInputOpened(false)
            }
        }
        }/> : null}
    </div>
})
Header.displayName = "Header"

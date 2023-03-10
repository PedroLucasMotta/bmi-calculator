import { Level } from "../../helpers/imc"
import styles from "./GridItem.module.css"
import upImage from "../../assets/up.png"
import downImage from "../../assets/down.png"

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.result &&
                <div className={styles.yourBMI}>Your BMI is {item.result} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    BMI is between <strong>{item.bmi[0]}</strong> and <strong>{item.bmi[1]}</strong>
                </>
            </div>
        </div>
    )
}
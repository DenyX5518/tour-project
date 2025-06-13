import { Button } from "antd";
import styles from '../../../styles/stylesCard.module.scss'
import { useDispatch } from "react-redux";
import { toggleModalOpen } from "../../../features/openSlice";
import { currentId } from "../../../features/idSlice";


export default function CardButton({id}:{id:number}) {
    const dispatch = useDispatch()
    const handlerBook = () => {
        dispatch(toggleModalOpen(true))
        dispatch(currentId(id))
    }
    return (
        <div>
            <Button onClick={handlerBook} className={styles.btn} color="volcano" variant="solid">Забронировать</Button>
        </div>
    )
}

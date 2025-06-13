import { useSelector } from "react-redux"
import type { ITour } from "../../../types/typesTourCard"
import type { RootState } from "../../../store/store"
import { Card } from "antd";
import styles from '../../../styles/stylesCard.module.scss'
import Meta from "antd/es/card/Meta";
import CardButton from "../CardButton/CardButton";
export default function TourCard(){
  const tours = useSelector((state:RootState)=>state.card.list)



  return (
    <div className={styles.wrapper}>
      {
        tours.map((tour:ITour)=>
          (
            <div key={tour.id} className={'item-' + tour.id}>
              <Card 
              hoverable
              cover={<img src={tour.image} alt={tour.county}/>}
              className={styles.card}
              >
                <div className={styles.content}>
                  <div className={styles.title}>
                    <Meta title={tour.name} />
                    <h4>{tour.county}</h4>
                  </div>
                  <h3>{tour.price}$</h3>
                  
                  <p>{tour.startDate.toString()}</p>
                  <CardButton id={tour.id}/>
                </div>
              </Card>
            </div>
          )
        )
      }
    </div>
  )
}

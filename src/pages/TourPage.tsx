import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTours } from "../features/cardSlice"
import type { TourList } from "../types/typesTourCard"
import TourCard from "../components/UI/TourCard/TourCard"

import ModalWindow from "../components/UI/Modal/ModalWindow"


export default function TourPage() {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch('/src/api/data.json')
    .then(res=>res.json())
    .then((data:TourList)=>dispatch(setTours(data)))
  }, [])
  return (
    <>
      <TourCard></TourCard>
      <ModalWindow></ModalWindow>
    </>
  )
}

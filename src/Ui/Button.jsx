import React from 'react'
import { Button } from 'react-bootstrap'

export default function Buttons({text,heigth, width, backgroundColor}) {
  return (
    <>
    <Button className=' d-flex justify-content-center align-items-center'  style={{backgroundColor: `${backgroundColor}`, height: `${heigth}`,width:`${width}`}}>{text}</Button>
    </>
  )
}

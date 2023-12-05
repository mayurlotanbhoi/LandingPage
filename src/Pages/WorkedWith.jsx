import React from 'react'
import { Container,Image } from 'react-bootstrap'

const img =[
    'https://unoapp.com/wp-content/uploads/2022/06/partner-monster_energy_logo.png',
    'https://unoapp.com/wp-content/uploads/2022/06/patner-cocacola-logo.png',
   ' https://unoapp.com/wp-content/uploads/2022/06/patner-corby-logo.png',
   'https://unoapp.com/wp-content/uploads/2022/06/partner-conagra-logo.png',
   'https://unoapp.com/wp-content/uploads/2022/06/patner-missJones-logo.png',
   'https://unoapp.com/wp-content/uploads/2022/06/partner-volvo-logo.png',
   'https://unoapp.com/wp-content/uploads/2022/06/partner-dealer-fx_logo.png',
   'https://unoapp.com/wp-content/uploads/2022/06/partner-lionsgate-logo.png'


]

export default function WorkedWith() {
  return (
    <section  style={{backgroundColor:"#F7F7F7",marginTop:"4rem", width:"100vw",  height:"100%"}}>

<div className=' text-center container '>
    <h1 className='pt-5' style={{color:"#EF3C0C", }}>WHO WE WORKED WITH</h1>
    <div className='brand-container d-flex flex-wrap justify-content-between align-items-center text-center'>
    {img.map((image, index)=>{
        return  <Image className='brand-img'  src={`${image}`} alt="logo" style={{ width : "120px", height:"50px", }}/>
    })}

    </div>
</div>


    </section>
  )
}

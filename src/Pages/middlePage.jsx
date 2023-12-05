import React from 'react';
import { Image } from 'react-bootstrap';
import { Buttons } from '../Ui';

export default function MiddlePage() {
  return (
    <section style={{ width: "100vw", marginTop: "4rem", height: "100%" }}>

      <div className='text-center '>
        <h1 className='pt-5' style={{ color: "#EF3C0C" }}>CASE STUDY</h1>

        <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-5' style={{height: "100%"}}>
          <Image
            className=''
            src={'https://unoapp.com/wp-content/uploads/2022/06/feature-budweiser.png'}
            alt="logo"
            style={{ width: "300px", height: "600px", margin: "5rem" }}
          />
          <div className='ms-3 text-start ' style={{width: "400px"}}>
            <h1>Budlight</h1>
            <span className=' lh-1' style={{fontSize: "1rem", color:"grey"}} >We helped bring an innovative experience to Bud Light consumers using mobile sweetstakes, social media engagements, and loyalty programs, achieving the brand’s objective to attract its target consumers.</span>
            <div className='mt-5'>
            <Buttons text={"Contact us for more information"} width={"20rem"} height={"3rem"} backgroundColor={"#333333"} />
</div>
          </div>
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import "./expert.css"
import Expert_Card from '../../../components/Expert_Card/Expert_Card'

const expert = () => {
  return (
    <div className='expert_container'>
        <div className='upperbox'>
        <h2>Our Experts</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur dolore repudiandae itaque, quo nobis dolorem nemo delectus iure illo deserunt commodi eveniet excepturi dolorum perspiciatis quos corrupti. Tempore, perferendis.
        Amet iste obcaecati nulla mm,di dictaea. Commodi delectus saepe, enim nihil repellat perspiciatis reprehenderit veritatis facere minus quasi.</p>
        </div>
        <div className='expert_cards'><Expert_Card/></div>
    </div>
  )
}

export default expert


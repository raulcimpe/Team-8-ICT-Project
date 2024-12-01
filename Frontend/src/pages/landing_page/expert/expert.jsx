import React from 'react'
import "./expert.css"
import Expert_Card from '../../../components/Expert_Card/Expert_Card'

const expert = () => {
  return (
    <div className='expert_container'>
        <div className='upperbox'>
        <h2>Our Experts</h2>
        <p>"Our experts are a dedicated team of professionals, bringing together diverse expertise from fields such as business, law, IT, and engineering. They work collaboratively to offer practical advice and solutions tailored to the needs of small and medium-sized enterprises. With extensive experience in areas like legal consulting, business strategy, and digital solutions, our experts are committed to empowering businesses to grow and succeed. Whether you're starting out or looking to refine your operations, our team is here to provide actionable insights, support, and guidance every step of the way."</p>
        </div>
        <div className='expert_cards'><Expert_Card/></div>
    </div>
  )
}

export default expert


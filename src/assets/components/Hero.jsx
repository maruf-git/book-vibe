import React from 'react'
import heroJpg from '../images/books.jpg'

const Hero = props => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-[12rem]">
    <img
      src={heroJpg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up<br />your bookshelf</h1>
      <button className="btn btn-primary mt-10">Get Started</button>
    </div>
  </div>
</div>
  )
}

Hero.propTypes = {

}

export default Hero

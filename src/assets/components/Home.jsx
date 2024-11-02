import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import Books from './Books'

const Home = props => {
  return (
    <div className="mt-10 mb-20">
        <Hero></Hero>
        <Books></Books>
    </div>
  )
}

Home.propTypes = {

}

export default Home

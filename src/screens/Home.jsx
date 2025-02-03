import React from 'react'
import Main from '../components/Main'
import Introduction from '../components/Introduction'
import Project from './Project'
import ExperienceTimeline from './Experience'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Main />
        <Introduction />
        <Project />
        <ExperienceTimeline />
    </div>
  )
}

export default Home
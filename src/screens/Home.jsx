import React from 'react'
import Main from '../components/Main'
import Introduction from '../components/Introduction'
import Project from './Project'
import ExperienceTimeline from './Experience'

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
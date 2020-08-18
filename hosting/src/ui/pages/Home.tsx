import React, { useState } from 'react'
import songs from 'config/songs.json'
import PageLayout from 'ui/layouts/PageLayout'

const Home = () => {
  const [app] = useState({
    height: window.innerHeight + 100,
    width: window.innerWidth + 100,
    song: songs[Math.floor(Math.random() * (songs.length - 1))]
  })

  console.log(app.song)
  return (
    <PageLayout
      page="home"
      crawl={false}
      style={{
        background: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60,
      }}>
      <iframe
        style={{ overflow: 'hidden' }}
        width={app.width}
        height={app.height}
        src={`https://www.youtube.com/embed/${app.song}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </PageLayout>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import songs from 'config/songs.json'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const Home = () => {
  const [app, setApp] = useState({
    height: 0,
    width: 0,
    song: null
  })

  useEffect(() => {
    setApp({
      height: window.innerHeight + 100,
      width: window.innerWidth + 100,
      song: songs[Math.floor(Math.random() * (songs.length - 1))]
    })
  }, [])

  return app.song ? (
    <PageLayout
      page="home"
      crawl={false}
      style={{
        background: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60
      }}>
      <div
        className="countdown-wrapper"
        style={{
          position: `fixed`,
          top: 0,
          left: 0,
          height: `100vh`,
          width: `100vw`,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}></div>
      <iframe
        style={{ overflow: 'hidden' }}
        width={app.width}
        height={app.height}
        src={`https://www.youtube.com/embed/Yd85ozj0p8o?autoplay=1`}
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen></iframe>
    </PageLayout>
  ) : (
    <div />
  )
}

export default Home

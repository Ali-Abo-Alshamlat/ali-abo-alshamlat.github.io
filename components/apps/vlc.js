import React from 'react'
import ReactPlayer from 'react-player'

export default function Vlc() {
    return (
        <div className="container h-full w-full bg-ub-cool-grey">
          <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' title="Vlc"/>
          </div>
    )
}
export const displayVlc = () => {
    return <Vlc/>;
  }
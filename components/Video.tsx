"use client"

import React from "react"

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

const Video: React.FC<VideoProps> = ({ src, className, ...props }) => {
  return (
    <video
      src={src}
      className={className}
      {...props}
    />
  )
}

export default Video

/* eslint-disable react/prop-types */
import React from 'react'
import { useRef, useEffect, useState } from 'react'

export default function LazyImg({ src, ...imgProps }) {
  const node = useRef(null)
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=',
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })

    if (node.current) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src])

  return <img ref={node} src={currentSrc} {...imgProps} />
}

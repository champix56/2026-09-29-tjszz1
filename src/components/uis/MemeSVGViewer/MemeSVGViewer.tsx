import { MemeSVGViewer as MemeSVGViewerUnconnected, type ImageInterface } from 'orsys-tjs-meme'
import React from 'react'
import  { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'

type Props = {
    basePath?:string
}

const MemeSVGViewer:React.FC<Props> = ({basePath=''}) => {
    const current=useSelector((s:RootState)=>s.current.meme)
    const image=useSelector((s:RootState)=>s.ressources.images.find(im=>im.id===s.current.meme.imageId))

  return (
   <MemeSVGViewerUnconnected meme={current} image={image} basePath={basePath} />
  )
}

export default MemeSVGViewer

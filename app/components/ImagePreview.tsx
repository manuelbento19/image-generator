import React from 'react'

type ImageProps = {
    src: string;
    close: (value:boolean) => void;
}

export default function ImagePreview({src,close}:ImageProps) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex z-10'>
      <div className='fixed inset-0 z-[11]' onClick={()=>close(false)}/>
      <div className='m-auto max-w-screen-sm w-full relative z-[12] flex flex-col gap-3'>
        <img src={src} alt="" className="w-full h-auto rounded"/>
        <button className='max-w-xs w-full mx-auto py-3 px-2 bg-zinc-900 text-white text-xs rounded transition hover:brightness-150'>Download</button>
      </div>
    </div>
  )
}

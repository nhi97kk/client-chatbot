import React, { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'

const ChatBody = ({chat}) => {
    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"
    
    const parent = useRef(null);
    const bottomRef = useRef(null);
    //for animation
    useEffect(()=>{
        parent.current && autoAnimate(parent.current)
    },[parent])
    //for scrolling
    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: "smooth"})
    }, [chat])

    return (
    <div className="flex flex-col gap-4" ref={parent}>
        {chat.map((message,i)=>{
            return(
                <div key={i} className={`border-[#999999] break-words
                border-2 rounded-xl self-end px-3 py-3 max-w-[80%] 
                ${message.sender === 'ai' && aiStyle}`}>
                    <pre className='whitespace-pre-wrap'>
                        <span>{message.message}</span>
                    </pre>
                </div>
            )
        })}

        <div className="h-3" ref={bottomRef}></div>
    </div>
  )
}

export default ChatBody
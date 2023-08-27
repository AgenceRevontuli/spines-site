"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

type Props = {
    text: string
}

export default function FadeInText({
    text
}: Props) {

    const ref = useRef([])
    const container = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        createAnimation()
    }, [])

    const createAnimation = () => {
        gsap.to(ref.current, {
            opacity: 1,
            ease: "none", 
            stagger: 0.8,
            scrollTrigger: {
                trigger: container.current, 
                start: 'top-80%',
                end: 'bottom-500px',
                scrub: true,
            }
        })
    }

    // Split all words 
    const splitWords = () => {
        let body = [] as any
        text.split(" ").forEach((word: string, index: number) => {
            const letters = splitLetters(word) as any
            body.push(<p className="mr-4" key={`word_${index}`}>{letters}</p>)
        })
        return body
    }

    const splitLetters = (word: string) => {
        let letters = [] as any
        word.split("").forEach((letter: string, index: number) => {
            // @ts-ignore
            letters.push(<span ref={el => {ref.current.push(el)}} className="opacity-[0.2]" key={`letter_${index}`}>{letter}</span>)
        })
        return letters
    }

  return (
    <div ref={container}>
        <div className="text-5xl leading-[1.2] flex flex-wrap">{splitWords()}</div>
    </div>
  )
}

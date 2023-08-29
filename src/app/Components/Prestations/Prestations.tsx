'use client'
import Acquisition from './Acquisition'
import Strategy from './Strategy'
import Pilotage from './Pilotage'
import { useState } from 'react'
import Automatisation from './Automatisation'
import IA from './IA'

export default function Prestations() {
  const [show, setShow] = useState('strategy')

  const showElement = (e: any) => {
    setShow(e.target.id)
  }

  return (
    <div className="px-32 py-32 text-white bg-slate-950 flex justify-center">
          <div className="flex flex-col gap-4 justify-center max-w-5xl w-full">
            <h2 className="text-5xl">Ce que nous faisons</h2>
            <div className="flex gap-4 mt-8">
              <div>
                <button 
                  className={`
                    rounded-full 
                    border 
                    px-4 
                    py-2 
                    ${show === 'strategy' ? "bg-white text-slate-950" : ""}
                  `}
                  id="strategy" onClick={showElement}
                >
                  Stratégie digitale
                </button>
              </div>
              <div>
                <button 
                  className={`
                    rounded-full 
                    border 
                    px-4 
                    py-2 
                    ${show === 'acquisition' ? "bg-white text-slate-950" : ""}
                  `}
                  id="acquisition" onClick={showElement}
                >
                  Acquisition web
                </button>
              </div>
              <div>
                <button 
                  className={`
                    rounded-full 
                    border 
                    px-4 
                    py-2 
                    ${show === 'data' ? "bg-white text-slate-950" : ""}
                  `}
                  id="data" onClick={showElement}
                >
                  Pilotage & Data
                </button>
              </div>
              <div>
                <button 
                  className={`
                    rounded-full 
                    border 
                    px-4 
                    py-2 
                    ${show === 'processus' ? "bg-white text-slate-950" : ""}
                  `}
                  id="processus" onClick={showElement}
                >
                  Automatisation de processus
                </button>
              </div>
              <div>
                <button 
                  className={`
                    rounded-full 
                    border 
                    px-4 
                    py-2 
                    ${show === 'ia' ? "bg-white text-slate-950" : ""}
                  `}
                  id="ia" onClick={showElement}
                >
                  IA
                </button>
              </div>
            </div>
            <Strategy visible={show} />
            <Acquisition visible={show} />
            <Pilotage visible={show} />
            <Automatisation visible={show} />
            <IA visible={show} />
          </div>
        </div>
  )
}

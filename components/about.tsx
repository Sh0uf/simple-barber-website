"use client"

import Image from "next/image"

export function About() {
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 duration-1000"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 max-w:xl justify-center items-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Om Fortuna Salong</h3>
          <p className="mb-4 justify-center items-center ">
            Fortuna Salong är en modern och välrenommerad frisörsalong som specialiserar sig på professionell hårvård, klippning, skäggtrimning och rakning. <br/> Med gedigen erfarenhet och en stark passion för yrket håller vi oss ständigt uppdaterade med de senaste trenderna och teknikerna för att kunna erbjuda förstklassiga tjänster.
          </p>
          <p>
            Vår salong är belägen på Tågaborg, ett av Helsingborgs mest exklusiva områden. <br/>Trots detta strävar vi efter att erbjuda högkvalitativa behandlingar till konkurrenskraftiga priser, så att alla män har möjlighet att se välvårdade och stilfulla ut.
          </p>
        </div>
      </div>
    </div>
  )
}


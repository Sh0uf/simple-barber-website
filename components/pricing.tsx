"use client"

import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray } from "lucide-react"

const services = [
  {
    icon: Scissors,
    name: "Klippning",
    items: [
      { name: "Man", price: "250 kr" },
      { name: "Senior", price: "150 kr" },
      { name: "Barn", price: "150 kr" },
    ],
  },
  {
    icon: Beard,
    name: "Skägg & Rakning",
    items: [
      { name: "Skägg Trim", price: "200 kr" },
      { name: "Hot Towel Shave", price: "300 kr" },
      { name: "Skägg Styling", price: "250 kr" },
    ],
  },
  {
    icon: Spray,
    name: "Andra Tjänster",
    items: [
      { name: "Hårvård", price: "100 kr" },
      { name: "Hårfärgning", price: "From 500 kr" },
      { name: "Ansiktsbehandling", price: "300 kr" },
      { name: "Huvudmassage", price: "200 kr" },
      { name: "Trådning", price: "200 kr" },
    ],
  },
]

export function Pricing() {
  return (
    <div className="container mx-auto px-4">
      <div
        className="animate-in fade-in slide-in-from-bottom-4 duration-1000"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Priser</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                <h3 className="text-xl font-semibold text-center mb-4 text-primary">{service.name}</h3>
                  <service.icon className="mx-[1rem] mt-[-10px] w-8 h-8 text-primary" />
                </div>
                <ul className="space-y-4 text-primary">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="font-semibold text-foreground">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


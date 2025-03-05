"use client"

import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div
        className="animate-in fade-in slide-in-from-bottom-4 duration-1000 p-8 mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-primary ">
          Kontakt
        </h2>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">Telefon</p>
                  <p className="text-lg text-primary">079 076 25 76</p>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/fortuna_salong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-primary transition-colors"
                  >
                    @fortuna_salong
                  </a>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">E-post</p>
                  <p className="text-lg text-primary">info@fortunasalong.se</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">

              <div
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">Öppettider</p>
                  <p className="text-lg text-primary">Tisdag - Fredag: 11 - 18</p>
                  <p className="text-lg text-primary">Lördag: 11 - 17</p>
                  <p className="text-lg text-primary">Söndag & Måndag: Stängt</p>
                </div>
              </div>
              <div
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">Adress</p>
                  <p className="text-lg text-primary">Aschebergsgatan 8, 254 38 Helsingborg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div
        className="animate-in fade-in slide-in-from-bottom-4 duration-1000 p-8 mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-primary ">
          Kontakt & Bokning
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
                  <a
                    href="sms:+46790762576" // Updated link to open SMS
                    className="text-lg text-primary transition-colors"
                  >
                    079 076 25 76
                  </a>
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
  href="https://instagram.com/direct/t/fortuna_salong"
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
    <a
      href="mailto:info@fortunasalong.se"
      className="text-lg text-primary transition-colors"
    >
      info@fortunasalong.se</a>
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
                  <p className="text-lg text-primary">Tis - Fre: 10 - 18</p>
                  <p className="text-lg text-primary">Lör: 11 - 16</p>
                  <p className="text-lg text-primary">Sön & Mån: Stängt</p>
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

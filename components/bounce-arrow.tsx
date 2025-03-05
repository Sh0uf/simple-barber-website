'use client'

import { FaChevronDown } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const BounceArrow = () => {
  return (
    <ScrollLink
      to="hem"
      smooth={true}
      duration={500}
      className="absolute bottom-32 cursor-pointer animate-bounce"
    >
      <div className="flex flex-col items-center">
        <FaChevronDown className="text-3xl" />
        <FaChevronDown className="text-3xl -mt-4 text-primary" />
      </div>
    </ScrollLink>
  )
}

export default BounceArrow 
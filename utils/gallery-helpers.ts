// This file is auto-generated. Do not edit directly.
import { getImagePath } from './image-path'

export const galleryImages = [
  "/imgs/Screenshot 2025-03-05 at 04-58-41 .png",
  "/imgs/Screenshot 2025-03-05 at 04-58-53 .png",
  "/imgs/Screenshot 2025-03-05 at 04-59-01 .png",
  "/imgs/Screenshot 2025-03-05 at 04-59-08 .png",
  "/imgs/Screenshot 2025-03-05.png"
]
  .map(path => ({
    src: getImagePath(path),
    alt: path.split('/').pop()?.split('.')[0] || 'Gallery image'
  }));
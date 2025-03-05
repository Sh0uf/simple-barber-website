const fs = require('fs');
const path = require('path');

const imgsDirectory = path.join(process.cwd(), 'public', 'imgs');

try {
  // Get all files in the imgs directory
  const files = fs.readdirSync(imgsDirectory);
  
  // Filter for image files
  const imageFiles = files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    })
    .map(file => `/imgs/${file}`);

  // Create the gallery-helpers.ts content
  const fileContent = `
// This file is auto-generated. Do not edit directly.
import { getImagePath } from './image-path'

export const galleryImages = ${JSON.stringify(imageFiles, null, 2)}
  .map(path => ({
    src: getImagePath(path),
    alt: path.split('/').pop()?.split('.')[0] || 'Gallery image'
  }));
`;

  // Write to utils/gallery-helpers.ts
  fs.writeFileSync(
    path.join(process.cwd(), 'utils', 'gallery-helpers.ts'),
    fileContent.trim()
  );

  console.log('Successfully generated gallery-helpers.ts');
} catch (error) {
  console.error('Error generating gallery list:', error);
  process.exit(1);
} 
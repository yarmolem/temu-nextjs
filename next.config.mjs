/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'placehold.co' },
      { hostname: 'ii1.pepperfry.com' },
      { hostname: 'www.precedent-furniture.com' },
      { hostname: 'hips.hearstapps.com' },
      { hostname: 'cdn.pixabay.com' },
      { hostname: 'apicms.thestar.com.my' },
      { hostname: 'picsum.photos' }
    ]
  }
}

export default nextConfig

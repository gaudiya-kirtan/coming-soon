/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/preface',
        destination: 'https://www.vineofdevotion.com/preface',
        permanent: true,
      },
      {
        source: '/socakas',
        destination: 'https://www.vineofdevotion.com/socakas',
        permanent: true,
      },
      {
        source: '/vaisnava-vandana',
        destination: 'https://www.vineofdevotion.com/vaisnava-vandana',
        permanent: true,
      },
      {
        source: '/panca-gita',
        destination: 'https://www.vineofdevotion.com/panca-gita',
        permanent: true,
      },
      {
        source: '/panca-tattva',
        destination: 'https://www.vineofdevotion.com/panca-tattva',
        permanent: true,
      },
      {
        source: '/asta-yama',
        destination: 'https://www.vineofdevotion.com/asta-yama',
        permanent: true,
      },
      {
        source: '/prayersofsurrender',
        destination: 'https://www.vineofdevotion.com/prayersofsurrender',
        permanent: true,
      },
      {
        source: '/sandhya-arati',
        destination: 'https://www.vineofdevotion.com/sandhya-arati',
        permanent: true,
      },
      {
        source: '/melody',
        destination: 'https://www.vineofdevotion.com/melody',
        permanent: true,
      },
      {
        source: '/raga',
        destination: 'https://www.vineofdevotion.com/raga',
        permanent: true,
      },
      {
        source: '/pronunciation',
        destination: 'https://www.vineofdevotion.com/pronunciation',
        permanent: true,
      },
      {
        source: '/sanskrit-meter',
        destination: 'https://www.vineofdevotion.com/sanskrit-meter',
        permanent: true,
      },
      {
        source: '/bengali-meter',
        destination: 'https://www.vineofdevotion.com/bengali-meter',
        permanent: true,
      },
      {
        source: '/bvtsongs',
        destination: 'https://www.vineofdevotion.com/bvtsongs',
        permanent: true,
      },
      {
        source: '/kalyana-kalpataru',
        destination: 'https://www.vineofdevotion.com/kalyana-kalpataru',
        permanent: true,
      },
      {
        source: '/festival',
        destination: 'https://www.vineofdevotion.com/festival',
        permanent: true,
      },
      {
        source: '/govardhana',
        destination: 'https://www.vineofdevotion.com/govardhana',
        permanent: true,
      },
      {
        source: '/syama-kunda',
        destination: 'https://www.vineofdevotion.com/syama-kunda',
        permanent: true,
      },
      {
        source: '/adhivasa-kirtana',
        destination: 'https://www.vineofdevotion.com/adhivasa-kirtana',
        permanent: true,
      },
      {
        source: '/upadesamrta',
        destination: 'https://www.vineofdevotion.com/upadesamrta',
        permanent: true,
      },
      {
        source: '/page-numbers',
        destination: 'https://www.vineofdevotion.com/page-numbers',
        permanent: true,
      },
      {
        source: '/transliteration',
        destination: 'https://www.vineofdevotion.com/transliteration',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

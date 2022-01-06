const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'images.unsplash.com', 'news.airbnb.com', 'media.giphy.com', 'www.smartertravel.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoic2FkaS1zc2giLCJhIjoiY2t4dWk2azVoMHhnMzJ1b3o1Nm5rMHFqaSJ9.mjSMJJrveDnXiPhM1QZ_0g'
  }
});

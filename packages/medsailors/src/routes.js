// In your routes configuration file
const path = require("path")
module.exports = [
  {
    path: "/faqs/choso",
    component: path.resolve(`src/pages/faq2.js`),
  },
  {
    path: "/faqs/choso2",
    component: path.resolve(`src/components/sectionVehicles.js`),
  },
]

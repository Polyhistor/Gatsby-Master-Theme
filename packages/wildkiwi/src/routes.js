// In your routes configuration file
const path = require("path")
module.exports = [
  {
    path: "/faq/choso",
    component: path.resolve(`src/pages/faq2.js`),
  },
  {
    path: "/faq/choso2",
    component: path.resolve(`src/components/sectionVehicles.js`),
  },
]

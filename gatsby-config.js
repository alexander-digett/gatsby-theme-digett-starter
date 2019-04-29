const path = require("path")

module.exports = {
  __experimentalThemes: ["gatsby-theme-digett"],
    siteMetadata: {
    title: `Gatsby Theme Digett Demo`,
    description: `Digett's Gatsby theme starter including all sub themes.`,
    siteUrl: `https://www.digett.com`,
    author: `@alexanderfountain`,
    logo: `/assets/logo_no_comp.png`,
    menuLinks:[
      {
         name:'blog',
         link:'/blog'
      },
      {
         name:'landing page',
         link:'/landing-page'
      },
      {
         name:'contact',
         link:'/contact'
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src", "pages"),
      },
    },
  ],
}

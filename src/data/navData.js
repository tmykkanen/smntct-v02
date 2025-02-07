const navData = [
  {
    name: "Our Vision",
    path: "/#vision"
  },
  {
    name: "Our Strategy",
    path: "/strategy",
    submenu: [
      {
        name: "Fellowship",
        path: "/strategy#fellowship",
      },
      {
        name: "Internship",
        path: "/internship",
      },
      {
        name: "Residency",
        path: "/strategy#residencies",
      },
      {
        name: "Events",
        path: "/strategy#events",
      }
    ]
    },
  {
    name: "Who We Are",
    path: "/about"
  },
  {
    name: "Contact Us",
    path: "mailto:hello@smntct.org"
  }
]

export default navData;
module.exports = {
  tags: ["citizen"],
  layout: "layouts/profile.njk",
  permalink: "/{{ title | slugify }}/index.html",
  privateHouse: "Yes"
};

module.exports = {
  tags: ["news"],
  layout: "layouts/news.njk",
  description: "A blog post from thesaiticon.netlify.app website",
  writer: "Anonymous",
  permalink: "/news/{{ title | slugify }}/index.html"
};

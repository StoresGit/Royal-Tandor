const linkMap = {
  menu: "https://order.royaltandor.com/",
  instagram: "https://www.instagram.com/royaltandor/",
  location: "https://maps.app.goo.gl/eorEFRfR1WcGrGa1A",
};

document.querySelectorAll("[data-link-key]").forEach((btn) => {
  const key = btn.dataset.linkKey;
  const url = linkMap[key];

  btn.href = url;
  btn.target = "_blank";
  btn.rel = "noreferrer";
});


(() => {
  // Add the site code from your GoatCounter account after creating it.
  const siteCode = "";

  if (!/^[a-z0-9-]+$/i.test(siteCode)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = `https://${siteCode}.goatcounter.com/count`;
  document.head.append(script);
})();

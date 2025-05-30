export function initGTM(id: string) {
  if (!id) return

  return `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${id}');
  `
}

export function GTMNoScript(id: string) {
  if (!id) return null

  return `
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
  `
}

export function trackEvent(event: string, properties?: Record<string, any>) {
  if (typeof window === "undefined" || !window.dataLayer) return

  window.dataLayer.push({
    event,
    ...properties,
  })
}

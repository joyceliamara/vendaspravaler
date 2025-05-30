"use client"

export function captureUTMParams() {
  if (typeof window === "undefined") return

  const urlParams = new URLSearchParams(window.location.search)
  const utmParams = {
    utm_source: urlParams.get("utm_source"),
    utm_medium: urlParams.get("utm_medium"),
    utm_campaign: urlParams.get("utm_campaign"),
    utm_term: urlParams.get("utm_term"),
    utm_content: urlParams.get("utm_content"),
  }

  // Filter out null values
  const filteredParams = Object.fromEntries(Object.entries(utmParams).filter(([_, value]) => value !== null))

  // Only save if there are UTM parameters
  if (Object.keys(filteredParams).length > 0) {
    localStorage.setItem("utm_params", JSON.stringify(filteredParams))
  }
}

export function getUTMParams() {
  if (typeof window === "undefined") return {}

  const storedParams = localStorage.getItem("utm_params")
  return storedParams ? JSON.parse(storedParams) : {}
}

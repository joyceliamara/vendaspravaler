import { z } from "zod"

export const pixelSettingsSchema = z.object({
  gtmId: z.string().optional(),
  gaId: z.string().optional(),
  adsConvId: z.string().optional(),
  metaPixelId: z.string().optional(),
})

export const offerSettingsSchema = z.object({
  regularPrice: z.string(),
  salePrice: z.string(),
  installments: z.string(),
  installmentValue: z.string(),
  endDate: z.string(),
})

export const contentSettingsSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  aboutTitle: z.string(),
  aboutContent: z.string(),
  offerTitle: z.string(),
  offerDescription: z.string(),
})

export type PixelSettings = z.infer<typeof pixelSettingsSchema>
export type OfferSettings = z.infer<typeof offerSettingsSchema>
export type ContentSettings = z.infer<typeof contentSettingsSchema>

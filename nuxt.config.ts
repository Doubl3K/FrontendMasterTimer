export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	app: {
		baseURL: process.env.NUXT_APP_BASE_URL || "/",
	},
})

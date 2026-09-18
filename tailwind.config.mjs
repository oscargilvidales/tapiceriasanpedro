/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				marfil: {
					DEFAULT: 'var(--color-bg-base)',
					oscuro: 'var(--color-bg-alt)',
				},
				carbon: {
					DEFAULT: 'var(--color-text-base)',
					claro: 'var(--color-text-muted)',
				}
			},
			borderRadius: {
				/* Coincide con las esquinas redondeadas del marco de tu logo */
				'logo': '1.5rem', 
			}
		},
	},
	plugins: [],
}
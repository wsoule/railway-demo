import houdini from "houdini/vite";
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [houdini(), tailwindcss(), sveltekit()],
	server: {
		allowedHosts: ['railway-demo-production-5839.up.railway.app']
	}
});

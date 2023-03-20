const refs = {
	switcherRadios: document.querySelectorAll('.switcher__radio'),
	switcher: document.querySelector('.switcher'),
	light: document.querySelector('[media="(prefers-color-scheme: light)"]'),
	dark: document.querySelector('[media="(prefers-color-scheme: dark)"]'),
};

const LOCALE_STORAGE_KEY = 'color-scheme';

refs.switcher.addEventListener('change', handleSwitcherChange);

setColorScheme();

function handleSwitcherChange(e) {
	localStorage.setItem(LOCALE_STORAGE_KEY, e.target.value);

	if (e.target.value === 'auto') {
		refs.light.media = '(prefers-color-scheme: light)';
		refs.dark.media = '(prefers-color-scheme: dark)';
	}
	if (e.target.value === 'light') {
		refs.light.media = 'all';
		refs.dark.media = 'not all';
	}
	if (e.target.value === 'dark') {
		refs.light.media = 'not all';
		refs.dark.media = 'all';
	}
}

function setColorScheme() {
	const colorScheme = localStorage.getItem(LOCALE_STORAGE_KEY);
	if (!colorScheme) return;

	if (colorScheme === 'auto') {
		refs.light.media = '(prefers-color-scheme: light)';
		refs.dark.media = '(prefers-color-scheme: dark)';

		[...refs.switcherRadios].find(item => item.value === 'auto').checked = true;
	}
	if (colorScheme === 'light') {
		refs.light.media = 'all';
		refs.dark.media = 'not all';

		[...refs.switcherRadios].find(
			item => item.value === 'light'
		).checked = true;
	}
	if (colorScheme === 'dark') {
		refs.light.media = 'not all';
		refs.dark.media = 'all';

		[...refs.switcherRadios].find(item => item.value === 'dark').checked = true;
	}
}

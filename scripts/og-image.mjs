// Builds the images shown when a link to the site is shared (og:image):
// public/og.png and public/og-es.png, 1200×630.
// Run after changing the logo, the screenshot or the wording:
//   node scripts/og-image.mjs
import sharp from 'sharp';

const W = 1200;
const H = 630;
const WALNUT = '#2B2118';
const SERIF = 'Fraunces, Georgia, Times New Roman, serif';

const dataUri = async (path, width) => {
	const png = await sharp(path).resize({ width }).png().toBuffer();
	return `data:image/png;base64,${png.toString('base64')}`;
};

const logo = await dataUri('src/assets/brand/mark-gold.png', 208);
const shot = await dataUri('src/assets/screens/app-light.png', 1440);

const versions = {
	'public/og.png': ['Free music', 'notation editor', 'Open source · Windows · macOS · Linux'],
	'public/og-es.png': ['Editor de partituras', 'gratuito', 'Código abierto · Windows · macOS · Linux'],
};

for (const [file, [line1, line2, small]] of Object.entries(versions)) {
	const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
	<defs>
		<clipPath id="window"><rect x="600" y="96" width="900" height="700" rx="16" /></clipPath>
	</defs>
	<defs><radialGradient id="bg" cx="0.3" cy="0.4" r="0.9"><stop offset="0" stop-color="#43332A"/><stop offset="1" stop-color="${WALNUT}"/></radialGradient></defs>
	<rect width="${W}" height="${H}" fill="url(#bg)" />
	<rect x="600" y="96" width="900" height="700" rx="16" fill="#000" opacity="0.25" transform="translate(-10 14)" />
	<image xlink:href="${shot}" x="600" y="96" width="900" height="562.5" clip-path="url(#window)" />
	<image xlink:href="${logo}" x="56" y="58" width="100" height="104" />
	<text x="172" y="135" font-family="${SERIF}" font-size="62" font-weight="700" fill="#F4ECDD">Partita</text>
	<text font-family="${SERIF}" font-size="46" font-weight="600" fill="#F4ECDD">
		<tspan x="60" y="330">${line1}</tspan>
		<tspan x="60" y="398">${line2}</tspan>
	</text>
	<text x="60" y="560" font-family="Segoe UI, Arial, sans-serif" font-size="23" fill="#E2C48C">${small}</text>
</svg>`;
	await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
	console.log(file);
}

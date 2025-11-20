export default function Header() {
	return (
		<header className="bg-primary text-black py-4 sticky top-0 z-50 shadow-md bg-white">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<div className="text-2xl font-bold">iFixed.id</div>
				<a
					href="https://wa.me/6281234567890"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
				>
					Konsultasi Gratis!
				</a>
			</div>
		</header>
	);
}

// components/SupportedModels.tsx
export default function SupportedModels() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-6 text-center">
				{/* Judul */}
				<h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">
					Kami Tangani Semua Seri iPhone
				</h2>

				{/* Kotak-kotak Model */}
				<div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
					{/* Seri Terbaru – Background Biru Tua + Teks Kuning */}
					<div className="flex-1 bg-primary text-yellow-400 rounded-3xl shadow-xl p-8 min-w-[280px] bg-black">
						<h3 className="text-2xl font-bold mb-3">Seri Terbaru</h3>
						<p className="text-lg leading-relaxed opacity-95">
							iPhone 15, 15 Pro, 14, 14 Pro, 13, 13 Pro,
							<br />
							dll.
						</p>
					</div>

					{/* Seri Mid-Range – Background Putih Keabu-abuan */}
					<div className="flex-1 bg-gray-100 rounded-3xl shadow-xl p-8 min-w-[280px] border border-gray-200">
						<h3 className="text-2xl font-bold text-primary mb-3">
							Seri Mid-Range
						</h3>
						<p className="text-lg text-gray-700 leading-relaxed">
							iPhone 12, 11 Pro, 11, XR, XS, X,
							<br />
							dll.
						</p>
					</div>

					{/* Seri Klasik – Background Putih Keabu-abuan */}
					<div className="flex-1 bg-gray-100 rounded-3xl shadow-xl p-8 min-w-[280px] border border-gray-200">
						<h3 className="text-2xl font-bold text-primary mb-3">
							Seri Klasik
						</h3>
						<p className="text-lg text-gray-700 leading-relaxed">
							iPhone 8, 7, 6S, SE (Generasi 2/3),
							<br />
							dll.
						</p>
					</div>
				</div>

				{/* Caption bawah */}
				<p className="mt-12 text-gray-600 text-lg">
					Kami menangani semua model dari terbaru hingga yang lebih lama.
				</p>
			</div>
		</section>
	);
}

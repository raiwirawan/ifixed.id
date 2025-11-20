export default function CTASection() {
	return (
		<section className="bg-primary text-black py-40">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-6">
					iPhone Rusak? Jangan Tunda Perbaikan!
				</h2>
				<p className="text-xl mb-10 opacity-90">
					Dapatkan estimasi biaya dan waktu pengerjaan yang transparan melalui
					**Konsultasi Gratis** kami.
				</p>
				<div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
					<p className="text-gray-800 text-lg mb-8">
						Tanyakan Masalah iPhone Anda Sekarang
					</p>
					<a
						href="https://wa.me/6281234567890"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary text-xl inline-flex items-center gap-3"
					>
						<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214  -3.741 .584  .597 -3.65 -.215-.361a9.865 9.865 0 01-1.32-5.015 9.92 9.92 0 0117.507-6.373c2.291 2.472 2.748 6.013 1.353 9.002a9.854 9.854 0 01-8.785 6.105z" />
						</svg>
						Hubungi Kami via WhatsApp
					</a>
					<p className="mt-6 text-sm text-gray-600">
						Estimasi Biaya dan Durasi Waktu Perbaikan akan diberikan secara
						detail.
					</p>
				</div>
			</div>
		</section>
	);
}

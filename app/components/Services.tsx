const services = [
	{
		icon: "📱",
		title: "Penggantian Layar/LCD",
		desc: "Mengatasi layar pecah, retak, atau touchscreen yang tidak berfungsi dengan komponen berkualitas.",
	},
	{
		icon: "🔋",
		title: "Penggantian Baterai",
		desc: "Solusi untuk baterai boros, cepat habis, atau masalah iPhone mati mendadak. Performa kembali maksimal.",
	},
	{
		icon: "💧",
		title: "Perbaikan Kerusakan Air",
		desc: "Penanganan khusus dan cepat untuk perangkat yang tidak sengaja terkena cairan (Water Damage).",
	},
	{
		icon: "⚙️",
		title: "Perbaikan Motherboard",
		desc: "Penanganan masalah kompleks seperti mati total, bootloop, atau kerusakan komponen internal lainnya.",
	},
	{
		icon: "📷",
		title: "Perbaikan Kamera",
		desc: "Mengatasi kamera yang blur, tidak fokus, atau tidak berfungsi sama sekali pada semua model iPhone.",
	},
	{
		icon: "🔊",
		title: "Komponen Lain",
		desc: "Penggantian speaker, port charging, tombol, housing, dan semua komponen minor lainnya.",
	},
];

export default function Services() {
	return (
		<section className="py-40">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
					Layanan Perbaikan Utama Kami
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((svc, i) => (
						<div
							key={i}
							className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
						>
							<div className="text-5xl mb-4">{svc.icon}</div>
							<h3 className="text-xl font-bold text-primary mb-3">
								{svc.title}
							</h3>
							<p className="text-gray-600">{svc.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

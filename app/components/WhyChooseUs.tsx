const reasons = [
	{
		icon: "📍",
		title: "Berbasis Lokal di Bali",
		desc: "Layanan perbaikan yang mudah dijangkau. Kami memahami urgensi dan kebutuhan warga Bali.",
	},
	{
		icon: "🛠️",
		title: "Teknisi Berpengalaman",
		desc: "Ditangani oleh spesialis yang telah menangani ribuan kasus iPhone, dari ringan hingga kompleks.",
	},
	{
		icon: "📸",
		title: "Transparansi Nyata",
		desc: "Lihat langsung foto-foto dokumentasi perbaikan kami sebagai jaminan kualitas dan kejujuran kerja.",
	},
	{
		icon: "⏰",
		title: "Estimasi Waktu Jelas",
		desc: "Dapatkan perkiraan waktu pengerjaan yang transparan di awal, karena kami menghargai waktu berharga Anda.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="py-40 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
					Mengapa Memilih iFixed.id?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{reasons.map((item, i) => (
						<div
							key={i}
							className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
						>
							<div className="text-5xl mb-4">{item.icon}</div>
							<h3 className="text-xl font-bold text-primary mb-3">
								{item.title}
							</h3>
							<p className="text-gray-600">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

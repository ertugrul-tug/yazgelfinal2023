﻿window.addEventListener('load', () => {
	// Derslerin ve hocaların çakışmaları
	const courses = {
		"Fizik I": ["Fizik I Lab.", "Nanoteknolojiye Giriş"],
		"Fizik I Lab.": ["Fizik I"],
		"Nanoteknolojiye Giriş": ["Fizik I"],
		"Algoritma ve Programlama I": ["Oyun Programlama", "Programlama Lab. I", "Yazılım Geliştirme Laboratuvarı-I"],
		"Oyun Programlama": ["Algoritma ve Programlama I", "Programlama Lab. I", "Yazılım Geliştirme Laboratuvarı-I"],
		"Programlama Lab. I": ["Algoritma ve Programlama I", "Oyun Programlama", "Yazılım Geliştirme Laboratuvarı-I"],
		"Yazılım Geliştirme Laboratuvarı-I": ["Algoritma ve Programlama I", "Oyun Programlama", "Programlama Lab. I"],
		"Diferansiyel Denklemler": [],
		"Web Tasarımı": ["Web Tasarımı Lab.", "Bulut Bilişimde Sanallaştırma Teknolojilerine Giriş", "Mobil Uygulama Geliştirme"],
		"Web Tasarımı Lab.": ["Web Tasarımı", "Bulut Bilişimde Sanallaştırma Teknolojilerine Giriş", "Mobil Uygulama Geliştirme"],
		"Bulut Bilişimde Sanallaştırma Teknolojilerine Giriş": ["Web Tasarımı", "Web Tasarımı Lab.", "Mobil Uygulama Geliştirme"],
		"Mobil Uygulama Geliştirme": ["Web Tasarımı", "Web Tasarımı Lab.", "Bulut Bilişimde Sanallaştırma Teknolojilerine Giriş"],
		"İşletme Ekonomisi": [],
		"Matematik I": [],
		"Elektrik Elektronik Devreler": ["Elektrik Elektronik Devreler Lab.", "Sayısal İşaret İşleme"],
		"Elektrik Elektronik Devreler Lab.": ["Elektrik Elektronik Devreler", "Sayısal İşaret İşleme"],
		"Sayısal İşaret İşleme": ["Elektrik Elektronik Devreler", "Elektrik Elektronik Devreler Lab."],
		"Nesne Yönelimli Programlama": ["Yapay Sinir Ağları", "Veri Madenciliği"],
		"Yapay Sinir Ağları": ["Nesne Yönelimli Programlama", "Veri Madenciliği"],
		"Veri Madenciliği": ["Nesne Yönelimli Programlama", "Yapay Sinir Ağları"],
		"Ayrık Matematik": ["Yapay Zeka", "Yazılım Geliştirme Laboratuvarı-I"],
		"Yapay Zeka": ["Ayrık Matematik", "Yazılım Geliştirme Laboratuvarı-I"],
		"Bilgisayar Mimari ve Organizasyonu": ["Kablosuz Ağ Teknolojileri ve Uygulamaları", "Veri Haberleşmesi"],
		"Kablosuz Ağ Teknolojileri ve Uygulamaları": ["Bilgisayar Mimari ve Organizasyonu", "Veri Haberleşmesi"],
		"Veri Haberleşmesi": ["Bilgisayar Mimari ve Organizasyonu", "Kablosuz Ağ Teknolojileri ve Uygulamaları"],
		"Bilişim Sistemleri Müh. Giriş": ["Bilişim Sistemleri Analizi ve Tasarımı", "E-İşletme ve E-Ticaret Uygulamaları"],
		"Bilişim Sistemleri Analizi ve Tasarımı": ["Bilişim Sistemleri Müh. Giriş", "E-İşletme ve E-Ticaret Uygulamaları"],
		"E-İşletme ve E-Ticaret Uygulamaları": ["Bilişim Sistemleri Müh. Giriş", "Bilişim Sistemleri Analizi ve Tasarımı"],
		"İş Sağlığı ve Güvenliği": [],
		"İstatistik ve Olasılık": [],
		"Linux İşletim Sistemi": ["Veri Yapıları ve Algoritmalar", "Veri Yapıları Lab.", "Görüntü İşleme"],
		"Veri Yapıları ve Algoritmalar": ["Linux İşletim Sistemi", "Veri Yapıları Lab.", "Görüntü İşleme"],
		"Veri Yapıları Lab.": ["Linux İşletim Sistemi", "Veri Yapıları ve Algoritmalar", "Görüntü İşleme"],
		"Görüntü İşleme": ["Linux İşletim Sistemi", "Veri Yapıları ve Algoritmalar", "Veri Yapıları Lab."],
		"Proje Yönetimi": [],
		"İngilizce I": [],
		"Atatürk İlkeleri ve İnkılap Tarihi I": [],
		"Türk Dili I": [],
		"Teknik İngilizce I": [],
		"Yönetim ve Organizasyon": [],
		"Bilişim Sistemleri Mühendisliğinde Özel Konular": [],
		"Kalite Yönetimi": []
	};


	// Sınıfların aldığı dersler
	const classes = {
		"1. Sınıf": ["Fizik I", "Fizik I Lab.", "Algoritma ve Programlama I", "Programlama Lab. I", "Matematik I", "İngilizce I", "Bilişim Sistemleri Müh. Giriş", "İş Sağlığı ve Güvenliği", "Atatürk İlkeleri ve İnkılap Tarihi I", "Türk Dili I"],
		"2. Sınıf": ["Diferansiyel Denklemler", "İşletme Ekonomisi", "Elektrik Elektronik Devreler", "Elektrik Elektronik Devreler Lab.", "Nesne Yönelimli Programlama", "Nanoteknolojiye Giriş", "Linux İşletim Sistemi", "Mobil Uygulama Geliştirme", "Veri Yapıları ve Algoritmalar", "İstatistik ve Olasılık", "Veri Yapıları Lab.", "Teknik İngilizce I"],
		"3. Sınıf": ["Web Tasarımı", "Web Tasarımı Lab.", "Bulut Bilişimde Sanallaştırma Teknolojilerine Giriş", "Ayrık Matematik", "Bilgisayar Mimari ve Organizasyonu", "Bilişim Sistemleri Analizi ve Tasarımı", "Veri Haberleşmesi", "E-İşletme ve E-Ticaret Uygulamaları", "Sayısal İşaret İşleme", "Yazılım Geliştirme Laboratuvarı-I", "Yönetim ve Organizasyon"],
		"4. Sınıf": ["Oyun Programlama", "Bilişim Sistemleri Mühendisliğinde Özel Konular", "Görüntü İşleme", "Kablosuz Ağ Teknolojileri ve Uygulamaları", "Kalite Yönetimi", "Veri Madenciliği", "Proje Yönetimi", "Yapay Sinir Ağları"]
	};

	// Backtracking algoritması
	function isSafe(course, color, courseColorMap, courseConflictMap, classCoursesMap) {
		// Eğer aynı renk başka bir çakışan derste kullanılmışsa, güvenli değildir
		if (courseConflictMap[course]) {
			for (let conflictingCourse of courseConflictMap[course]) {
				if (courseColorMap[conflictingCourse] === color) {
					return false;
				}
			}
		}

		// Aynı sınıflar için ders çakışmalarını kontrol et
		for (let classGroup in classCoursesMap) {
			if (classCoursesMap[classGroup].includes(course)) {
				for (let classCourse of classCoursesMap[classGroup]) {
					if (classCourse !== course && courseColorMap[classCourse] === color) {
						return false;
					}
				}
			}
		}

		return true;
	}

	function assignCourseColor(course, courseColorMap, courseConflictMap, classCoursesMap, colorCount) {
		for (let color = 1; color <= colorCount; color++) {
			if (isSafe(course, color, courseColorMap, courseConflictMap, classCoursesMap)) {
				courseColorMap[course] = color;

				if (Object.keys(courseColorMap).length === Object.keys(courseConflictMap).length ||
					assignCourseColor(Object.keys(courseConflictMap).find(c => !courseColorMap[c]),
						courseColorMap, courseConflictMap, classCoursesMap, colorCount)) {
					return true;
				}

				courseColorMap[course] = undefined;
			}
		}

		return false;
	}

	function createSchedule(courses, classes, colorCount) {
		let courseColorMap = {};
		let success = assignCourseColor(Object.keys(courses)[0], courseColorMap, courses, classes, colorCount);

		if (!success) {
			return 'Ders programı oluşturulamadı.';
		}

		return courseColorMap;
	}

	function createTable(schedule, classes) {
		const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
		const classGroups = ["1. Sınıf", "2. Sınıf", "3. Sınıf", "4. Sınıf"];
		const dayParts = ["Öğleden Önce", "Öğleden Sonra"];

		let table = '<table><tr><th>Gün / Sınıf</th>';
		for (let classGroup of classGroups) {
			table += `<th>${classGroup}</th>`;
		}
		table += '</tr>';

		for (let day of days) {
			for (let part of dayParts) {
				table += `<tr><td>${day} ${part}</td>`;
				for (let classGroup of classGroups) {
					let coursesToday = Object.entries(schedule).filter(([course, time]) => {
						let dayIndex = Math.floor((time - 1) / 2);
						let dayPartIndex = (time - 1) % 2;
						return days[dayIndex] === day && dayParts[dayPartIndex] === part && classes[classGroup].includes(course);
					}).map(([course, _]) => course);
					table += `<td>${coursesToday.join(", ")}</td>`;
				}
				table += '</tr>';
			}
		}

		table += '</table>';
		return table;
	}

	const schedule = createSchedule(courses, classes, 40); // 5 farklı zaman dilimi varsayıyoruz
	document.body.innerHTML = createTable(schedule, classes);
})
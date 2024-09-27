var languages = {
	en: {
		title: "Designing & Building Amazing Websites",
		about_me: "About me",
		about_title: "Know a little more about me",
		about_content: "Hi! My name is Daniel Melo, and I’m a passionate developer who loves building functional and intuitive web applications. I enjoy turning ideas into reality through creative solutions, always aiming to provide users with a smooth experience.\nIn addition to development, I’m 23 years old and currently pursuing a Bachelor's degree in Physical Education, with a deep love for bodybuilding. My goal is to help people achieve their dream bodies, combining my passion for both technology and fitness. I’m always eager to learn new skills and tools, exploring this path for pure fun and curiosity.",
		download: "Download CV",
	},
	pt: {
		title: "Projetando & Construindo Sites Incríveis",
		about_me: "Sobre mim",
		about_title: "Conheça um pouco mais sobre mim",
		about_content: "Oi! Meu nome é Daniel Melo, sou um desenvolvedor apaixonado por criar aplicações web funcionais e intuitivas. Gosto de transformar ideias em realidade através de soluções criativas, sempre com o objetivo de proporcionar uma experiência agradável para os usuários.\nAlém do desenvolvimento, tenho 23 anos e estou cursando Bacharelado em Educação Física, com um grande amor pela musculação. Meu objetivo é ajudar as pessoas a alcançarem seus corpos dos sonhos, combinando minha paixão por tecnologia e fitness. Estou sempre em busca de aprender novas habilidades e ferramentas, explorando esse caminho por pura diversão e curiosidade.",
		download: "Baixar CV",
	}
};

(function() {
	var section = document.querySelector("section.main");
	var changeBtn = document.querySelector("button.change-language");
	
	var updateLayout = function() {
		var currentLang = section.getAttribute("lang");
		section.classList.add(currentLang === 'pt' ? 'section-anim' : '');

		for (var key in languages[currentLang]) {
			section.querySelector(`[data-field="${key}"]`).textContent = languages[currentLang][key];
		}

		setTimeout(() => section.classList.remove('section-anim'), 500);
	};

	changeBtn.onclick = function() {
		var newLang = section.getAttribute("lang") === "en" ? "pt" : "en";
		section.setAttribute("lang", newLang);
		updateLayout();
	};

	section.style.display = 'block';
	updateLayout();
})();
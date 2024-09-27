var languages = {
	en: {
		title: "Designing & Building Amazing Websites",
		home: "Home.",
		about: "About.",
		skills: "Skills.",
		portfolio: "Portfolio.",
		contact: "Contact.",
		experience: "Years of Experience",
		completed: "Completed Porjects",
		about_me: "About me",
		about_title: "Know a little more about me",
		about_content: "Hi! My name is Daniel Melo, and I’m a passionate developer who loves building functional and intuitive web applications. I enjoy turning ideas into reality through creative solutions, always aiming to provide users with a smooth experience.\n In addition to development, I’m 23 years old and currently pursuing a Bachelor's degree in Physical Education, with a deep love for bodybuilding. My goal is to help people achieve their dream bodies, combining my passion for both technology and fitness. I’m always eager to learn new skills and tools, exploring this path for pure fun and curiosity",
		download: "Download CV",
		my_skills: "My Skills",
		skills_title: "These are the languages and tools I use the most in my applications.",
		section_text: "I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.",
		skills_btn: "Skills",
		tools_btn: "Tools",
		my_projects: "My Projects",
		projects_title: "See My some of my projects hope you like it :)",
		projects_text: "I like to make my projects as modern and intuitive as possible so that users have the best experience possible.",
		python_calculator: "Advanced Calculator in Python",
		bmi: "BMI Calculator",
		tic_tac: "Tic Tac Toe",
		tribute: "Tribute Pgae",
		load_more: "Load more projects",
		contact_subtitle: "Contact",
		contact_title: "Do You want to know me a little more ou know something?",
		contact_text: "Feel free to call me on social media or message",
		address: "Adress:",
		phone: "Phone:",
	},
	pt: {
		title: "Projetando & Costruindo Sites Incriveis",
		home: "Home.",
		about: "Sobre.",
		skills: "Skills.",
		portfolio: "Portfolio.",
		contact: "Contato.",
		experience: "Anos de experiência",
		completed: "Projetos finalizados",
		about_me: "Sobre mim",
		about_title: "Conheça um pouco mais sobre mim",
		about_content: "Oi! Meu nome é Daniel Melo, sou um desenvolvedor apaixonado por criar aplicações web funcionais e intuitivas. Gosto de transformar ideias em realidade através de soluções criativas, sempre com o objetivo de proporcionar uma experiência agradável para os usuários.\n Além do desenvolvimento, tenho 23 anos e estou cursando Bacharelado em Educação Física, com um grande amor pela musculação. Meu objetivo é ajudar as pessoas a alcançarem seus corpos dos sonhos, combinando minha paixão por tecnologia e fitness. Estou sempre em busca de aprender novas habilidades e ferramentas, explorando esse caminho por pura diversão e curiosidade.",
		download: "Baixar CV",
		my_skills: "Minhas Skills",
		skills_title: "Essas são as linguagens e ferramentas que mais uso nas minhas aplicações",
		section_text: "Desenvolvo uma interface de usuário simples, intuitiva e responsiva que ajuda os usuários a fazer as coisas com menos esforço e tempo com essas tecnologias.",
		skills_btn: "Skills",
		tools_btn: "Tools",
		my_projects: "Meus projetos",
		projects_title: "Veja alguns dos meus projetos espero que goste :)",
		projects_text: "Gosto de fazer meus projetos da forma mais moderna e intuitiva possivel para que os usuarios tenham a melhor experiência possível",
		python_calculator: "Calculadora avançada em Python",
		bmi: "Calculadora de IMC",
		tic_tac: "Jogo da Velha",
		tribute: "Pagina de Tributo",
		load_more: "Carregar mais projetos",
		contact_subtitle: "Contato",
		contact_title: "Quer me conhecer um pouco mais ou saber de alguma coisa?",
		contact_text: "Fique a vontade para me chamar nas redes sociais ou no WhatsApp",
		address: "Endereço:",
		phone: "Telefone:",
	}
};

(function() {
	var currentLanguage;
	var isButtonBlocked = false;
	var section = document.querySelector("section.main");
	var updateLayout = function() {
		isButtonBlocked = true;
		currentLanguage = section.getAttribute("lang").toLowerCase();
		section.classList.add(currentLanguage === 'pt' ? 'section-anim-rtl' : 'section-anim');

		if (!languages[currentLanguage]) {
			console.warn(currentLanguage + ": this language is not supported.");
			currentLanguage = "en";
		}

		var fields = section.querySelectorAll("[data-field]");
		fields.forEach(function(el) {
			const type = el.getAttribute("data-field");

			if (!languages[currentLanguage][type]) {
				console.warn("Error: Field with type '" + type + "' is not supported.");
				return;
			}

			el.textContent = languages[currentLanguage][type];
		});
		setTimeout(function() {
			section.classList.remove('section-anim');
			section.classList.remove('section-anim-rtl');
			isButtonBlocked = false;
		}, 500);
	};

	var changeBtn = document.querySelector("button.change-language");
	changeBtn.onclick = function() {
		if (isButtonBlocked) {
			return;
		}

		if (currentLanguage === "en") {
			section.setAttribute("lang", "pt");
			section.style.direction = "ltr"
			updateLayout();
			return;
		}
		section.setAttribute("lang", "en");
		section.style.direction = "ltr"
		updateLayout();
	};
	section.style.display = 'block';
	updateLayout();
})();
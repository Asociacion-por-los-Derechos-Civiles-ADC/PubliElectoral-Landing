/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 */
var translationsJson = {
	"landing": {
        "lang": {
            "en": "English",
            "es": "Español",
            "pt": "Português"
		},
		"section-header": {
			"description": {
				"en": "PubliElectoral is a technological tool of social interest developed with the purpose of collecting  information related to electoral advertising on social networks without affecting the privacy of users.",
				"es": "PubliElectoral es una herramienta tecnológica de interés social que permite la recolección de información relativa a la publicidad electoral en redes sociales sin afectar la privacidad de las personas usuarias.",
				"pt": "O PubliElectoral é uma ferramenta tecnológica de interesse social que permite a coleta de informação relativa à publicidade eleitoral nas redes sociais sem afetar a privacidade das pessoas usuárias."
			},
			"install-app": {
				"en": "install the app on your phone",
				"es": "instalar aplicación en tu teléfono",
				"pt": "instale o aplicativo no seu telefone"
			},
			"install-plugin": {
				"en": "install the extension in your browser",
				"es": "instala la extensión en tu navegador",
				"pt": "instale a extensão no seu navegador"
			},
			"download-buttons": {
				"app": {
					"en": "DOWNLOAD",
					"es": "DESCARGAR",
					"pt": "DESCARREGAR"
				},
				"plugin": {
					"chrome": {
						"en": "Google Chrome",
						"es": "Google Chrome",
						"pt": "Google Chrome"
					},
					"mozilla": {
						"en": "Mozilla Firefox",
						"es": "Mozilla Firefox",
						"pt": "Mozilla Firefox"
					}
				}
			},
		},
		"section-one": {
			"what-is-publielectoral": {
				"title": {
					"en": "What is PubliElectoral?",
					"es": "¿Qué es PubliElectoral?",
					"pt": "O que é o PubliElectoral?"
				},
				"description": {
					"en": "It is an application for smartphones and a  browser extension that  collects information related to electoral advertising on social networks.",
					"es": "Es una aplicación para celulares y una extensión para navegadores que permite la recolección de información relativa a la publicidad electoral en las redes sociales.",
					"pt": "É um aplicativo para celulares e uma extensão para navegadores que permitem a coleta da informação relativa à publicidade eleitoral nas redes sociais."
				}
			}
		},
		"section-two": {
			"how-to-install": {
				"title": {
					"en": "How to install PubliElectoral?",
					"es": "¿Cómo instalar PubliElectoral?",
					"pt": "Como instalar o PubliElectoral?"
				},
				"description": {
					"en": "In these tutorials you will see how to install the application on your smartphone and in your browser. ",
					"es": "En estos tutoriales podrás ver cómo instalar la aplicación en tu celular y la extensión en tu navegador.",
					"pt": "Nestes tutoriais você poderá ver como instalar o aplicativo no seu celular e a extensão no seu navegador."
				}
			},
			"install-app": {
				"en": "Install the application on your smartphone",
				"es": "Instalar la aplicación en tu celular",
				"pt": "Instale o aplicativo no seu celular"
			},
			"install-plugin": {
				"en": "Install the extension in your browser",
				"es": "Instalar la extensión en tu navegador",
				"pt": "Instale a extensão no seu navegador"
			},
			"how-to-work": {
				"title": {
					"en": "How does PubliElectoral work?",
					"es": "¿Cómo funciona PubliElectoral?",
					"pt": "Como funciona o PubliElectoral?"
				},
				"description": {
					"en": "PubliElectoral can be used from an Android device through the application or from your web browser through the extension. The user login in their Facebook account through the application or through the web. Political ads are then detected by the app or extension based on your country. The advertisements are stored in a database and later the research team analyzes them to generate public reports.",
					"es": "PubliElectoral puede utilizarse desde un celular con android mediante la aplicación o desde el navegador web mediante la extensión. La persona usuaria ingresa a su cuenta de Facebook a través de la aplicación o mediante la web. Luego, la aplicación o extensión detectan las publicidades políticas según su país. Las publicidades son almacenadas en una base de datos y posteriormente el equipo de investigación las analiza para generar reportes públicos.",
					"pt": "O PubliElectoral pode ser utilizado a partir de um celular com Android por meio de aplicativo ou a partir de navegador web mediante uso da extensão. A pessoa usuária acessa sua conta do Facebook através do aplicativo ou por meio da web. Depois, o aplicativo ou extensão detectam as publicidades políticas segundo o seu país. As publicidades são armazenadas em uma base de dados e posteriormente analisadas pela equipe de pesquisa, para gerar relatórios públicos."
				}
			},
			"what-permissions-require": {
				"title": {
					"en": "What permissions does it require?",
					"es": "¿Qué permisos requiere?",
					"pt": "Que permissões são requeridas?"
				},
				"description": {
					"en": "PubliElectoral does not read personal information or  posts from your news feed. We need you to install the app or extension to distinguish Facebook posts containing political advertising from accounts selected for the analysis.. PubliElectoral “copy” the advertisements and store it to be included in the research. At no time are your personal data (name, age, email, etc.) stored. The only thing we ask is to select your location, for statistical purposes (PubliElectoral works in different countries).",
					"es": "PubliElectoral no lee la información personal ni publicaciones de tu feed de noticias. Necesitamos que instales la aplicación o la extensión para distinguir las publicaciones de Facebook que contienen publicidad política de las cuentas que monitoreamos. PubliElectoral actúa “copiando” las publicidades. En ningún momento se almacenan tus datos personales (nombre, edad, email, etc). Lo único que pedimos es seleccionar tu ubicación, con fines estadísticos (PubliElectoral funciona en distintos países).",
					"pt": "O PubliElectoral não lê a informação pessoal nem as publicações do seu feed de notícias. Necessitamos que você instale o aplicativo ou a extensão para distinguir as publicações do Facebook que contiverem publicidade política das contas que monitoramos. O PubliElectoral atua “copiando” as publicidades. Em nenhum momento os seus dados pessoais são armazenados (nome, idade, e-mail etc.) A única coisa que pedimos é selecionar a sua localização, para fins estatísticos (O PubliElectoral funciona em diferentes países)."
				}
			},
			"what-info-reveal": {
				"title": {
					"en": "What information PubliElectoral reveal?",
					"es": "¿Qué información relevan?",
					"pt": "Que informações o aplicativo levanta?"
				},
				"description": {
					"en": "The application and the extension collects advertisements from political pages during campaigns  in social networks. It does this through real accounts of people like you, who cooperate with us by downloading the tool. Our goal is to gather this information and analyze it to understand if the electoral advertising system is working transparently from political parties and from social networks.",
					"es": "La aplicación y la extensión relevan avisos publicitarios de páginas políticas en redes sociales en campaña. Lo hace a través de cuentas reales de personas como tú, que cooperan con nosotros al descargarse la herramienta. Nuestro objetivo es reunir esa información y analizarla para entender si desde los partidos políticos y desde las redes sociales el sistema de anuncios electorales está funcionando de manera transparente.",
					"pt": "O aplicativo e a extensão levantam avisos publicitários de páginas políticas em redes sociais em campanha. Isto é feito através de contas reais de pessoas como você, que cooperam conosco ao descarregar a ferramenta. O nosso objetivo é reunir essa informação e analisá-la para compreender se desde os partidos políticos e desde as redes sociais o sistema de anúncios eleitorais está funcionando de maneira transparente."
				}
			},
			"see-more-faqs": {
				"en": "See More Frequently Asked Questions",
				"es": "Ver Más Preguntas Frecuentes",
				"pt": "Veja Mais Perguntas Frequentes"
			}
		},
		"section-three": {
			"reports": {
				"title": {
					"en": "PubliElectoral Reports",
					"es": "Informes de PubliElectoral",
					"pt": "Relatórios do PubliElectoral"
				},
				"arg": {
					"2019": {
						"en": "Argentina Elections 2019",
						"es": "Elecciones Argentina 2019",
						"pt": "Eleições Argentina 2019"
					},
					"2021": {
						"en": "Argentina Elections 2021",
						"es": "Elecciones Argentina 2021",
						"pt": "Eleições Argentina 2021"
					}
				},
				"cl": {
					"2020": {
						"en": "Chile Elections 2020",
						"es": "Elecciones Chile 2020",
						"pt": "Eleições Chile 2020"
					},
					"2021": {
						"en": "Chile Elections 2021",
						"es": "Elecciones Chile 2021",
						"pt": "Eleições Chile 2021"
					}
				},
				"mx": {
					"2021": {
						"en": "México Elections 2021",
						"es": "Elecciones México 2021",
						"pt": "Eleições México 2021"
					}
				}
			},
			"policy": {
				"en": "Privacy policy",
				"es": "Políticas de Privacidad",
				"pt": "Políticas de Privacidade",
			},
			"policy-pdf": {
				"en": "./policy/en/Privacy_Policy_of_PubliElectoral.pdf",
				"es": "./policy/es/Política_de_Privacidad_PubliElectoral.pdf",
				"pt": "./policy/pt/Politica_de_Privacidade_PubliElectoral.pdf"
			}
		},
		"section-four": {
			"with": {
				"en": "with",
				"es": "con",
				"pt":"com"
			},
			"cc-license": {
				"en": "PublicElectoral website. It is distributed under Creative Commons Attribution-ShareAlike 4.0 International License.",
				"es": "Sitio web de PubliElectoral. Se distribuye bajo una Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional.",
				"pt": "Sítio web do PubliElectoral. É distribuído sob uma Licença Creative Commons Atribución-CompartirIgual 4.0 Internacional."
			}
		},
		"faqs": {
			"title": {
				"en": "Frequent  Ask Questions",
				"es": "Preguntas Frecuentes",
				"pt": "Perguntas Frequentes"
			},
			"questions": {
				"1": {
					"title": {
						"en": "What is PubliElectoral?",
						"es": "¿Qué es PubliElectoral?",
						"pt": "O que é o PubliElectoral?"
					},
					"answer": {
						"en": "PubliElectoral is a technological tool of social interest developed with the purpose of collecting  information related to electoral advertising on social networks without affecting the privacy of users.",
						"es": "PubliElectoral es una herramienta tecnológica de interés social que permite la recolección de información relativa a la publicidad electoral en redes sociales sin afectar la privacidad de las personas ciudadanas usuarias.",
						"pt": "O PubliElectoral é uma ferramenta tecnológica de interesse social que permite a coleta de informação relativa à publicidade eleitoral nas redes sociais sem afetar a privacidade das pessoas cidadãs usuárias."
					}
				},
				"2": {
					"title": {
						"en": "How does PubliElectoral work?",
						"es": "¿Cómo funciona PubliElectoral?",
						"pt": "Como funciona o PubliElectoral?"
					},
					"answer": {
						"en": "PubliElectoral can be used from an Android device through the application or from your web browser through the extension. The user login in their Facebook account through the application or through the web. Political ads are then detected by the app or extension based on your country. The advertisements are stored in a database and later the research team analyzes them to generate public reports.",
						"es": "PubliElectoral puede utilizarse desde un celular con android mediante la aplicación o desde el navegador web mediante la extensión. La persona usuaria ingresa a su cuenta de Facebook a través de la aplicación o mediante la web y la aplicación o la extensión detectan las publicidades políticas según su país. Las publicidades son almacenadas en una base de datos y posteriormente el equipo de investigación las analiza para generar reportes y compartirlos.",
						"pt": "O PubliElectoral pode ser utilizado a partir de um telefone celular com Android por meio do aplicativo ou a partir de o navegador web por meio da extensão. A pessoa usuária acessa a sua conta do Facebook através do aplicativo ou por meio da web, e o aplicativo ou a extensão detectam as publicidades políticas segundo o seu país. As publicidades são armazenadas em uma base de dados e posteriormente analisadas pela equipe de pesquisa para gerar relatórios e compartilhá-los."
					}
				},
				"3": {
					"title": {
						"en": "What information do they reveal?",
						"es": "¿Qué información relevan?",
						"pt": "Que informação levanta?"
					},
					"answer": {
						"en": "The application and the extension collects advertisements from political pages during campaigns  in social networks. It does this through real accounts of people like you, who cooperate with us by downloading the tool. Our goal is to gather this information and analyze it to understand if the electoral advertising system is working transparently from political parties and from social networks.",
						"es": "La aplicación o extensión relevan avisos publicitarios de las páginas políticas en redes sociales en campaña. Lo hace a través de cuentas reales de personas como tú, que cooperan con nosotros al descargarse la herramienta. Nuestro objetivo es reunir esa información y analizarla para entender si desde los partidos políticos y desde las redes sociales el sistema de anuncios electorales está funcionando de manera transparente.",
						"pt": "O aplicativo ou extensão levantam avisos publicitários das páginas políticas nas redes sociais em campanha. Isto é feito através de contas reais de pessoas como você, que cooperam conosco ao descarregar a ferramenta. O nosso objetivo é coletar essa informação e analisá-la para compreender se desde os partidos políticos e desde as redes sociais o sistema de anúncios eleitorais está funcionando de maneira transparente."
					}
				},
				"4": {
					"title": {
						"en": "Do you store my information somewhere?",
						"es": "¿Almacenan mi información en algún lugar?",
						"pt": "A minha informação é armazenada em algum lugar?"
					},
					"answer": {
						"en": "We do not store personal information of users. We only store information on election ads for analysis.",
						"es": "No guardamos información personal de las personas usuarias. Lo que guardamos es la información de los avisos a analizar.",
						"pt": "Não guardamos informação pessoal das pessoas usuárias. O que guardamos é a informação dos avisos a serem analisados."
					}
				},
				"5": {
					"title": {
						"en": "On what networks does PubliElectoral work today?",
						"es": "¿Sobre qué redes actúa hoy PubliElectoral?",
						"pt": "Sobre que redes atua hoje o PubliElectoral?"
					},
					"answer": {
						"en": "Currently, the tool works on Facebook in its mobile version and in its web version. In future versions we will extend its reach to other networks and devices.",
						"es": "Actualmente, la herramienta actúa sobre Facebook en su versión mobile y en su versión web. En las próximas versiones extenderemos su alcance a otras redes y dispositivos.",
						"pt": "Atualmente, a ferramenta atua sobre o Facebook na sua versão móvel e na sua versão web. Nas próximas versões estenderemos o seu alcance para outras redes e dispositivos."
					}
				},
				"6": {
					"title": {
						"en": "If I couldn’t install the app or extension, what should  I do?",
						"es": "Si no pude instalar la aplicación o la extensión, ¿Que hago?",
						"pt": "Se não puder instalar o aplicativo ou a extensão, o que posso fazer?"
					},
					"answer": {
						"en": "If you could not install or had any problem, we appreciate you writing to electoralmonitor@adc.org.ar so we can help you.",
						"es": "Si no pudiste instalar o tuviste algún problema, agradecemos que nos escribas a electoralmonitor@adc.org.ar y así poder ayudarte.",
						"pt": "Se você no puder instalar ou se tiver algum problema, agradecemos nos escrever a electoralmonitor@adc.org.ar para poder ajudar você."
					}
				},
				"7": {
					"title": {
						"en": "What permissions does it require?",
						"es": "¿Qué permisos requiere?",
						"pt": "Quais são as permissões requeridas?"
					},
					"answer": {
						"en": "We will not read personal information and posts from your news feed. We need you to install the app or extension to uniquely distinguish Facebook posts containing political advertising from accounts we monitor. PubliElectoral acts “copying” the advertisements. At no time are your personal data (name, age, email, etc.) stored. The only thing we can ask you is to select your location, for statistical purposes.",
						"es": "No leeremos la información personal y publicaciones de tu feed de noticias. Necesitamos que instales la aplicación o extensión para distinguir únicamente las publicaciones de Facebook que contengan publicidad política de las cuentas que monitoreamos. PubliElectoral actúa “copiando” las publicidades. En ningún momento se almacenan tus datos personales (nombre, edad, email, etc). Lo único que podremos pedirte es seleccionar tu ubicación, con fines estadísticos.",
						"pt": "Não leremos a informação pessoal nem as publicações do seu feed de notícias. Necessitamos que você instale o aplicativo ou extensão para distinguir unicamente as publicações do Facebook que contiverem publicidade política das contas que monitoramos. O PubliElectoral atua “copiando” as publicidades. Em nenhum momento seus dados pessoais serão armazenados (nome, idade, e-mail etc.)  A única coisa que poderemos solicitar é selecionar a sua localização para fins estatísticos."
					}
				},
				"8": {
					"title": {
						"en": "How did PubliElectoral come about?",
						"es": "¿Cómo surgió PubliElectoral?",
						"pt": "Como surgiu o PubliElectoral?"
					},
					"answer": {
						"en": "PubliElectoral arose from the need to have an independent measurement tool for campaign ads on social networks, with the cooperation of citizens/internet users. The use of social networks as political campaign and advertising platforms grew worldwide. Political parties invest large sums of money in them, taking advantage of the lack of regulations that still exist for the accountability of internet advertising funds. Technology companies, on the other hand, do their work as private companies: they receive the money and turn it into ads, without asking too much where it comes from, unless some external actor demands explanations. This scheme makes possible some discretionalities in the financing and accountability of electoral expenses. The lack of transparency surrounding the practices, uses and financing of electoral advertising on the Internet and social networks is a concern that is progressively becoming part of the agenda of more and more actors. In this context, ADC started this project with a research for the 2019 presidential campaign in Argentina, which can be consulted here. In 2020, together with Derechos Digitales, we analyze the Constitutional Referendum in Chile. In 2021 we analyzed the federal elections in Mexico, the legislative elections in Argentina and the presidential election in Chile. During 2022 we will analyze the constitutional plebiscite in Chile and the presidential election in Brazil.",
						"es": "PubliElectoral surgió de la necesidad de tener una herramienta de medición independiente de anuncios de campaña en redes sociales, que cuente con la cooperación de los ciudadanos/usuarios de internet. El uso de las redes sociales como plataformas de campaña política y publicidad creció en todo el mundo. Los partidos políticos invierten grandes sumas de dinero en ellas, tomando ventaja de la falta de regulaciones que todavía existen para la rendición de fondos en concepto de publicidad en internet. Las empresas de tecnología, por otro lado, hacen su trabajo como empresas privadas: reciben el dinero y lo convierten en avisos, sin preguntar demasiado de dónde proviene, excepto que algún actor externo les exija explicaciones. Este esquema posibilita algunas discrecionalidades en el financiamiento y en la rendición de gastos electorales. La falta de transparencia que envuelve a las prácticas, los usos y el financiamiento de la publicidad electoral en internet y redes sociales es una preocupación que, de manera progresiva, se instala en la agenda de cada vez más actores. En este contexto, ADC inició este proyecto con una investigación para la campaña presidencial en la Argentina en 2019, que puede consultarse aquí. En 2020, junto a Derechos Digitales, se sumó el análisis del Referéndum Constitucional en Chile. En 2021 analizaremos las elecciones de México junto a la organización Artículo 19.",
						"pt": "O PubliElectoral surgiu a partir da necessidade de ter una ferramenta de medição independente de anúncios de campanha nas redes sociais, que conte com a cooperação dos cidadãos/usuários da internet. O uso das redes sociais como plataformas de campanha política e a publicidade cresceu em todo o mundo. Os partidos políticos investem grandes somas de dinheiro nelas, levando vantagem da falta de regulações que ainda existem para a prestação de contas pelos fundos utilizados em conceito de publicidade na internet.As empresas de tecnologia, por outra parte, fazem seu trabalho como empresas privadas: recebem o dinheiro e o convertem em avisos, sem perguntar demais de onde provém, exceto que algum ator externo lhes exija explicações. Este esquema possibilita algumas discricionaridades no financiamento e na prestação de contas de gastos eleitorais. A falta de transparência que rodeia as práticas, os usos e o financiamento da publicidade eleitoral na internet e nas redes sociais é uma preocupação que, de maneira progressiva, está se instalando na agenda de cada vez mais atores. Neste contexto, a ADC iniciou este projeto com una pesquisa para a campanha presidencial na Argentina em 2019, que pode ser consultada aqui. Em 2020, com a Derechos Digitales, somou-se à análise do Referendo Constitucional no Chile. Em 2021 analisamos as eleições federais do México, as eleições legislativas na Argentina e a eleição presidencial no Chile. Durante 2022 analisaremos o Plebiscito Constitucional no Chile e as eleições presidenciais no Brasil."
					}
				}
			},
			"back": {
				"en": "Return to main page",
				"es": "Volver a la página principal",
				"pt": "Voltar à Página Inicial"
			}
		}
	}
};

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || localStorage.getItem('plang') || 'es'
		this.language = lang;

		(function (i18n) {
			i18n.contents = translationsJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};


	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};


	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
			localStorage.setItem('plang', lang)
		}
		this.localize();
		return this.language;
	};


	this.I18n.prototype.localize = function () {
		
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
				$('[data-i18n-policy-file="'+key+'"]').attr('href', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)['es']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['es']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['es']);
				$('[data-i18n-policy-file="'+key+'"]').attr('href').replace("",  contents.prop(key)['es']);
				$('[data-i18n-policy-file="'+key+'"]').attr('href', contents.prop(key)['es']);
			}
		}
	};
}).apply(window);


$(document).ready(function () {
    var i18n = new I18n();
	i18n.localize();
	let lang = ''
	if (localStorage.getItem('plang')) {
		lang = localStorage.getItem('plang');
	} else {
		lang = navigator.language.split('-')[0] || 'es';
	}
	localStorage.setItem('plang', lang)
	selectLang($(this), lang);

	// Ocultar y mostrar dropdown menu de idiomas.
	$('.fa-chevron-down').css('cursor', 'pointer')
	$('#dropdownMenuButton').css('cursor', 'pointer')

	$('.dropdown-menu').hide()
	$('.fa-chevron-down').on('click', dropdownAction)
	$('#dropdownMenuButton').on('click', dropdownAction)
    
	$('.lang-picker #spanish').addClass('selected');
	
    $('.lang-picker #english').on('click', function () {
        i18n.lang('en');
		selectLang($(this), 'en');
		$('.dropdown-menu').hide()
    })
    $('.lang-picker #spanish').on('click', function () {
        i18n.lang('es');
		selectLang($(this), 'es');
		$('.dropdown-menu').hide()
	})
	$('.lang-picker #portugese').on('click', function () {
		i18n.lang('pt');
		selectLang($(this), 'pt');
		$('.dropdown-menu').hide()
	})

    function selectLang(picker, lang) {
        $('.lang-picker li').removeClass('selected')
        picker.addClass('selected')
 		enDesktopFlagsIds = {
			'es': 'images/AR.svg',
			'en': 'images/US.svg',
			'pt': 'images/BR.svg'
		}

        if (isSpanish(lang) && isDesktop()) {
            toggleFlags(enDesktopFlagsIds, lang)
        } else if (isSpanish(lang) && isMobile()) {
            toggleFlags(enDesktopFlagsIds, lang)
        } else if (isEnglish(lang) && isDesktop()) {
            toggleFlags(enDesktopFlagsIds, lang)
        } else if (isPortugese(lang) && isDesktop()) {
            toggleFlags(enDesktopFlagsIds, lang)
		} else if (isPortugese(lang) && isMobile()) {
			toggleFlags(enDesktopFlagsIds, lang)
		} else if (isEnglish(lang) && isMobile()) {
			toggleFlags(enDesktopFlagsIds, lang)
		}
	}
	
	function toggleFlags(flags, lang) {		
		$('#currentFlag').attr('src', flags[lang])
		$('#currentFlag').attr('alt', lang+' flag')
	}

    function isEnglish(lang) {
        return lang == 'en'
    }

    function isSpanish(lang) {
        return lang == 'es'
	}
	
	function isPortugese(lang) {
		return lang == 'pt'
	}

    function isDesktop() {
        return screen.width > 900
    }

    function isMobile() {
        return screen.width < 740
	}
	
	function dropdownAction() {
		if ($('.dropdown-menu').is(":hidden")) {
			$('.dropdown-menu').show()
		} else {
			$('.dropdown-menu').hide()
		}
	}
});
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
        "description": {
            "en": "PubliElectoral is a technological tool of social interest\nthat allows the collection of information related to electoral advertising on social networks\nwithout affecting the privacy of the users.",
            "es": "PubliElectoral es una herramienta tecnológica de interés social\nque permite la recolección de información relativa a la publicidad electoral en redes sociales\nsin afectar la privacidad de las personas usuarias.",
            "pt": "O PubliElectoral é uma ferramenta tecnológica de interesse social\nque permite a coleta de informações relacionadas à publicidade eleitoral nas redes sociais\nsem afetar a privacidade dos usuários."
		},
		"installApp": {
			"en": "install app on your cellphone",
			"es": "instalar aplicación en tu teléfono",
			"pt": "instale o aplicativo no seu telefone"
		},
		"installPlugin": {
			"en": "install the plug-in on your browser",
			"es": "instala la extensión en tu navegador",
			"pt": "instale a extensão no seu navegador"
		},
		"downloadButtons": {
			"app": {
				"en": "Download",
				"es": "Descargar",
				"pt": "Baixar"
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
		}
	}
};

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'es';
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
			} else {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

$(document).ready(function () {
    var i18n = new I18n();
    i18n.localize();
	selectLang($(this), 'es');

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
		console.log('FLAG ', flags[lang]);
		
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
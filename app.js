/**
 * Gaming Subscription Cost Calculator
 * A simple, no-BS calculator for subscription costs
 * Multi-language & Multi-region support
 */

(function() {
    'use strict';

    // ==================== Internationalization ====================
    const TRANSLATIONS = {
        en: {
            title: "💸 Subscription Calculator",
            subtitle: "Discover how much your digital entertainment really costs",
            modeQuestion: "How do you see yourself?",
            modeRealistic: "😐 I'm realistic",
            modeOptimistic: "😎 I'm optimistic",
            hintOptimistic: "Optimists multiply hours by 1.5. We'll see.",
            hintRealistic: "Realists tell the truth. Or so they think.",
            gaming: "🎮 Gaming",
            streaming: "📺 Streaming",
            costMonth: "$/mo",
            hoursMonth: "Hours/mo",
            hoursPlaceholder: "real hours, not ideal",
            calculateBtn: "Calculate the damage 💀",
            resultSpend: "You spend",
            resultUse: "You actually use them",
            resultCost: "It costs you",
            perYear: "/ year on subscriptions",
            perYearHours: "/ year",
            perHour: "/ hour of entertainment",
            disclaimer: "Not a judgment. Just numbers.",
            breakdown: "Breakdown",
            shareBtn: "📤 Share this with someone who has too many subs",
            copiedMsg: "✅ Copied to clipboard!",
            selectOne: "Select at least one subscription!",
            footer: "Made with 💸 by people who also have too many subs",
            perYearUnit: "/year",
            perHourUnit: "/h",
            infinity: "∞",
            affiliateTitle: "💡 Looking for deals?",
            affiliateGaming: "🎮 Gaming Deals",
            affiliateStreaming: "📺 Streaming Tips",
            affiliateSave: "💰 Save Money Guide",
            messages: {
                excellent: [
                    "🎯 Maximum efficiency. You're a machine.",
                    "💪 Great value. Keep it up.",
                    "✨ Your ratio is enviable. Literally."
                ],
                good: [
                    "👍 Acceptable. Doesn't hurt yet.",
                    "😌 Could be worse. Much worse.",
                    "🤷 Acceptable… but watch those quiet months."
                ],
                warning: [
                    "😬 This is starting to hurt.",
                    "💸 Every hour costs you. A lot.",
                    "🔥 Your wallet is crying silently."
                ],
                terrible: [
                    "💀 Canceling is an option. Just saying.",
                    "🚨 Houston, we have a subscription problem.",
                    "😱 You could rent a movie theater with this.",
                    "☠️ RIP wallet. Rest in peace."
                ],
                noUsage: [
                    "🤔 0 hours? That's a donation, not a subscription.",
                    "💤 You're paying for it to exist. Nothing more.",
                    "🎁 Generous gift to corporations."
                ]
            }
        },
        es: {
            title: "💸 Calculadora de Suscripciones",
            subtitle: "Descubre cuánto te cuesta realmente el entretenimiento digital",
            modeQuestion: "¿Cómo te ves?",
            modeRealistic: "😐 Soy realista",
            modeOptimistic: "😎 Soy optimista",
            hintOptimistic: "Los optimistas multiplican las horas x1.5. Ya veremos.",
            hintRealistic: "Los realistas dicen la verdad. O eso creen.",
            gaming: "🎮 Gaming",
            streaming: "📺 Streaming",
            costMonth: "€/mes",
            hoursMonth: "Horas/mes",
            hoursPlaceholder: "horas reales, no ideales",
            calculateBtn: "Calcular el daño 💀",
            resultSpend: "Gastas",
            resultUse: "Realmente las usas",
            resultCost: "Te cuesta",
            perYear: "/ año en suscripciones",
            perYearHours: "/ año",
            perHour: "/ hora de entretenimiento",
            disclaimer: "No es un juicio. Solo números.",
            breakdown: "Desglose",
            shareBtn: "📤 Comparte esto con alguien que tenga demasiadas subs",
            copiedMsg: "✅ ¡Copiado al portapapeles!",
            selectOne: "¡Selecciona al menos una suscripción!",
            footer: "Hecho con 💸 por gente que también tiene demasiadas subs",
            perYearUnit: "/año",
            perHourUnit: "/h",
            infinity: "∞",
            affiliateTitle: "💡 ¿Buscas ofertas?",
            affiliateGaming: "🎮 Ofertas Gaming",
            affiliateStreaming: "📺 Tips Streaming",
            affiliateSave: "💰 Guía de Ahorro",
            messages: {
                excellent: [
                    "🎯 Eficiencia máxima. Eres una máquina.",
                    "💪 Salen muy a cuenta. Sigue así.",
                    "✨ Tu ratio es envidiable. Literalmente."
                ],
                good: [
                    "👍 Aceptable. Todavía no duele.",
                    "😌 Podría ser peor. Mucho peor.",
                    "🤷 Aceptable… pero vigila los meses tranquilos."
                ],
                warning: [
                    "😬 Esto ya empieza a doler.",
                    "💸 Cada hora te sale cara. Muy cara.",
                    "🔥 Tu cartera está llorando en silencio."
                ],
                terrible: [
                    "💀 Cancelar es una opción. Solo digo.",
                    "🚨 Houston, tenemos un problema de suscripciones.",
                    "😱 Con esto podrías alquilar una sala de cine.",
                    "☠️ RIP cartera. Descansa en paz."
                ],
                noUsage: [
                    "🤔 ¿0 horas? Eso es una donación, no una suscripción.",
                    "💤 Estás pagando para que exista. Nada más.",
                    "🎁 Regalo generoso a las corporaciones."
                ]
            }
        },
        ca: {
            title: "💸 Calculadora de Subscripcions",
            subtitle: "Descobreix quant et costa realment l'entreteniment digital",
            modeQuestion: "Com et veus?",
            modeRealistic: "😐 Sóc realista",
            modeOptimistic: "😎 Sóc optimista",
            hintOptimistic: "Els optimistes multipliquen les hores x1.5. Ja veurem.",
            hintRealistic: "Els realistes diuen la veritat. O això creuen.",
            gaming: "🎮 Gaming",
            streaming: "📺 Streaming",
            costMonth: "€/mes",
            hoursMonth: "Hores/mes",
            hoursPlaceholder: "hores reals, no ideals",
            calculateBtn: "Calcula el dany 💀",
            resultSpend: "Gastes",
            resultUse: "Realment les uses",
            resultCost: "Et costa",
            perYear: "/ any en subscripcions",
            perYearHours: "/ any",
            perHour: "/ hora d'entreteniment",
            disclaimer: "No és un judici. Només números.",
            breakdown: "Desglossament",
            shareBtn: "📤 Comparteix això amb algú que tingui massa subs",
            copiedMsg: "✅ Copiat al portapapers!",
            selectOne: "Selecciona almenys una subscripció!",
            footer: "Fet amb 💸 per gent que també té massa subs",
            perYearUnit: "/any",
            perHourUnit: "/h",
            infinity: "∞",
            affiliateTitle: "💡 Busques ofertes?",
            affiliateGaming: "🎮 Ofertes Gaming",
            affiliateStreaming: "📺 Tips Streaming",
            affiliateSave: "💰 Guia d'Estalvi",
            messages: {
                excellent: [
                    "🎯 Eficiència màxima. Ets una màquina.",
                    "💪 Surten molt a compte. Continua així.",
                    "✨ El teu ratio és envejable. Literalment."
                ],
                good: [
                    "👍 Acceptable. Encara no fa mal.",
                    "😌 Podria ser pitjor. Molt pitjor.",
                    "🤷 Acceptable… però vigila els mesos tranquils."
                ],
                warning: [
                    "😬 Això ja comença a fer mal.",
                    "💸 Cada hora et surt cara. Molt cara.",
                    "🔥 El teu moneder està plorant en silenci."
                ],
                terrible: [
                    "💀 Cancel·lar és una opció. Només dic.",
                    "🚨 Houston, tenim un problema de subscripcions.",
                    "😱 Amb això podries llogar una sala de cine.",
                    "☠️ RIP cartera. Descansa en pau."
                ],
                noUsage: [
                    "🤔 0 hores? Això és una donació, no una subscripció.",
                    "💤 Estàs pagant perquè existeixi. Res més.",
                    "🎁 Regal generós a les corporacions."
                ]
            }
        },
        pt: {
            title: "💸 Calculadora de Assinaturas",
            subtitle: "Descubra quanto realmente custa o seu entretenimento digital",
            modeQuestion: "Como você se vê?",
            modeRealistic: "😐 Sou realista",
            modeOptimistic: "😎 Sou otimista",
            hintOptimistic: "Os otimistas multiplicam as horas por 1.5. Veremos.",
            hintRealistic: "Os realistas dizem a verdade. Ou assim pensam.",
            gaming: "🎮 Gaming",
            streaming: "📺 Streaming",
            costMonth: "R$/mês",
            hoursMonth: "Horas/mês",
            hoursPlaceholder: "horas reais, não ideais",
            calculateBtn: "Calcular o estrago 💀",
            resultSpend: "Você gasta",
            resultUse: "Realmente usa",
            resultCost: "Te custa",
            perYear: "/ ano em assinaturas",
            perYearHours: "/ ano",
            perHour: "/ hora de entretenimento",
            disclaimer: "Não é um julgamento. Apenas números.",
            breakdown: "Detalhamento",
            shareBtn: "📤 Compartilhe com alguém que tem muitas assinaturas",
            copiedMsg: "✅ Copiado para a área de transferência!",
            selectOne: "Selecione pelo menos uma assinatura!",
            footer: "Feito com 💸 por pessoas que também têm assinaturas demais",
            perYearUnit: "/ano",
            perHourUnit: "/h",
            infinity: "∞",
            affiliateTitle: "💡 Procurando ofertas?",
            affiliateGaming: "🎮 Ofertas Gaming",
            affiliateStreaming: "📺 Dicas Streaming",
            affiliateSave: "💰 Guia de Economia",
            messages: {
                excellent: [
                    "🎯 Eficiência máxima. Você é uma máquina.",
                    "💪 Vale muito a pena. Continue assim.",
                    "✨ Seu ratio é invejável. Literalmente."
                ],
                good: [
                    "👍 Aceitável. Ainda não dói.",
                    "😌 Poderia ser pior. Muito pior.",
                    "🤷 Aceitável… mas fique de olho nos meses parados."
                ],
                warning: [
                    "😬 Isso já está começando a doer.",
                    "💸 Cada hora sai cara. Muito cara.",
                    "🔥 Sua carteira está chorando em silêncio."
                ],
                terrible: [
                    "💀 Cancelar é uma opção. Só dizendo.",
                    "🚨 Houston, temos um problema de assinaturas.",
                    "😱 Com isso você alugaria uma sala de cinema.",
                    "☠️ RIP carteira. Descanse em paz."
                ],
                noUsage: [
                    "🤔 0 horas? Isso é doação, não assinatura.",
                    "💤 Você está pagando para existir. Só isso.",
                    "🎁 Presente generoso para as corporações."
                ]
            }
        },
        de: {
            title: "💸 Abo-Rechner",
            subtitle: "Finde heraus, was deine digitale Unterhaltung wirklich kostet",
            modeQuestion: "Wie siehst du dich?",
            modeRealistic: "😐 Ich bin realistisch",
            modeOptimistic: "😎 Ich bin optimistisch",
            hintOptimistic: "Optimisten multiplizieren die Stunden mit 1,5. Mal sehen.",
            hintRealistic: "Realisten sagen die Wahrheit. Oder glauben das.",
            gaming: "🎮 Gaming",
            streaming: "📺 Streaming",
            costMonth: "€/Monat",
            hoursMonth: "Std/Monat",
            hoursPlaceholder: "echte Stunden, nicht ideale",
            calculateBtn: "Schaden berechnen 💀",
            resultSpend: "Du gibst aus",
            resultUse: "Du nutzt sie wirklich",
            resultCost: "Es kostet dich",
            perYear: "/ Jahr für Abos",
            perYearHours: "/ Jahr",
            perHour: "/ Stunde Unterhaltung",
            disclaimer: "Kein Urteil. Nur Zahlen.",
            breakdown: "Aufschlüsselung",
            shareBtn: "📤 Teile das mit jemandem, der zu viele Abos hat",
            copiedMsg: "✅ In die Zwischenablage kopiert!",
            selectOne: "Wähle mindestens ein Abo aus!",
            footer: "Gemacht mit 💸 von Leuten, die auch zu viele Abos haben",
            perYearUnit: "/Jahr",
            perHourUnit: "/Std",
            infinity: "∞",
            affiliateTitle: "💡 Angebote suchen?",
            affiliateGaming: "🎮 Gaming Deals",
            affiliateStreaming: "📺 Streaming Tipps",
            affiliateSave: "💰 Spar-Guide",
            messages: {
                excellent: [
                    "🎯 Maximale Effizienz. Du bist eine Maschine.",
                    "💪 Lohnt sich sehr. Weiter so.",
                    "✨ Dein Verhältnis ist beneidenswert. Buchstäblich."
                ],
                good: [
                    "👍 Akzeptabel. Tut noch nicht weh.",
                    "😌 Könnte schlimmer sein. Viel schlimmer.",
                    "🤷 Akzeptabel… aber pass auf die ruhigen Monate auf."
                ],
                warning: [
                    "😬 Das fängt an wehzutun.",
                    "💸 Jede Stunde kostet dich. Sehr viel.",
                    "🔥 Dein Geldbeutel weint leise."
                ],
                terrible: [
                    "💀 Kündigen ist eine Option. Nur so gesagt.",
                    "🚨 Houston, wir haben ein Abo-Problem.",
                    "😱 Damit könntest du einen Kinosaal mieten.",
                    "☠️ RIP Geldbeutel. Ruhe in Frieden."
                ],
                noUsage: [
                    "🤔 0 Stunden? Das ist eine Spende, kein Abo.",
                    "💤 Du zahlst dafür, dass es existiert. Mehr nicht.",
                    "🎁 Großzügiges Geschenk an Konzerne."
                ]
            }
        },
        fr: {
            title: "💸 Calculateur d'Abonnements",
            subtitle: "Découvrez combien vous coûte vraiment le divertissement numérique",
            modeQuestion: "Comment vous voyez-vous ?",
            modeRealistic: "😐 Je suis réaliste",
            modeOptimistic: "😎 Je suis optimiste",
            hintOptimistic: "Les optimistes multiplient les heures par 1,5. On verra.",
            hintRealistic: "Les réalistes disent la vérité. Ou le croient.",
            gaming: "🎮 Gaming",
            streaming: "📺 Streaming",
            costMonth: "€/mois",
            hoursMonth: "Heures/mois",
            hoursPlaceholder: "heures réelles, pas idéales",
            calculateBtn: "Calculer les dégâts 💀",
            resultSpend: "Vous dépensez",
            resultUse: "Vous les utilisez vraiment",
            resultCost: "Ça vous coûte",
            perYear: "/ an en abonnements",
            perYearHours: "/ an",
            perHour: "/ heure de divertissement",
            disclaimer: "Ce n'est pas un jugement. Juste des chiffres.",
            breakdown: "Détail",
            shareBtn: "📤 Partagez avec quelqu'un qui a trop d'abos",
            copiedMsg: "✅ Copié dans le presse-papiers !",
            selectOne: "Sélectionnez au moins un abonnement !",
            footer: "Fait avec 💸 par des gens qui ont aussi trop d'abos",
            perYearUnit: "/an",
            perHourUnit: "/h",
            infinity: "∞",
            affiliateTitle: "💡 Cherchez des offres ?",
            affiliateGaming: "🎮 Offres Gaming",
            affiliateStreaming: "📺 Astuces Streaming",
            affiliateSave: "💰 Guide Économies",
            messages: {
                excellent: [
                    "🎯 Efficacité maximale. Vous êtes une machine.",
                    "💪 Très rentable. Continuez comme ça.",
                    "✨ Votre ratio est enviable. Littéralement."
                ],
                good: [
                    "👍 Acceptable. Ça ne fait pas encore mal.",
                    "😌 Ça pourrait être pire. Bien pire.",
                    "🤷 Acceptable… mais surveillez les mois calmes."
                ],
                warning: [
                    "😬 Ça commence à faire mal.",
                    "💸 Chaque heure vous coûte cher. Très cher.",
                    "🔥 Votre portefeuille pleure en silence."
                ],
                terrible: [
                    "💀 Résilier est une option. Je dis ça…",
                    "🚨 Houston, on a un problème d'abonnements.",
                    "😱 Avec ça, vous pourriez louer une salle de cinéma.",
                    "☠️ RIP portefeuille. Repose en paix."
                ],
                noUsage: [
                    "🤔 0 heures ? C'est un don, pas un abonnement.",
                    "💤 Vous payez pour que ça existe. C'est tout.",
                    "🎁 Cadeau généreux aux entreprises."
                ]
            }
        },
        it: {
            title: "💸 Calcolatore Abbonamenti",
            subtitle: "Scopri quanto ti costa davvero l'intrattenimento digitale",
            modeQuestion: "Come ti vedi?",
            modeRealistic: "😐 Sono realista",
            modeOptimistic: "😎 Sono ottimista",
            hintOptimistic: "Gli ottimisti moltiplicano le ore per 1,5. Vedremo.",
            hintRealistic: "I realisti dicono la verità. O così credono.",
            gaming: "🎮 Gaming",
            streaming: "📺 Streaming",
            costMonth: "€/mese",
            hoursMonth: "Ore/mese",
            hoursPlaceholder: "ore reali, non ideali",
            calculateBtn: "Calcola il danno 💀",
            resultSpend: "Spendi",
            resultUse: "Li usi davvero",
            resultCost: "Ti costa",
            perYear: "/ anno in abbonamenti",
            perYearHours: "/ anno",
            perHour: "/ ora di intrattenimento",
            disclaimer: "Non è un giudizio. Solo numeri.",
            breakdown: "Dettaglio",
            shareBtn: "📤 Condividi con chi ha troppi abbonamenti",
            copiedMsg: "✅ Copiato negli appunti!",
            selectOne: "Seleziona almeno un abbonamento!",
            footer: "Fatto con 💸 da gente che ha anche troppi abbonamenti",
            perYearUnit: "/anno",
            perHourUnit: "/h",
            infinity: "∞",
            affiliateTitle: "💡 Cerchi offerte?",
            affiliateGaming: "🎮 Offerte Gaming",
            affiliateStreaming: "📺 Tips Streaming",
            affiliateSave: "💰 Guida al Risparmio",
            messages: {
                excellent: [
                    "🎯 Efficienza massima. Sei una macchina.",
                    "💪 Molto conveniente. Continua così.",
                    "✨ Il tuo rapporto è invidiabile. Letteralmente."
                ],
                good: [
                    "👍 Accettabile. Non fa ancora male.",
                    "😌 Potrebbe andare peggio. Molto peggio.",
                    "🤷 Accettabile… ma occhio ai mesi tranquilli."
                ],
                warning: [
                    "😬 Inizia a fare male.",
                    "💸 Ogni ora ti costa cara. Molto cara.",
                    "🔥 Il tuo portafoglio piange in silenzio."
                ],
                terrible: [
                    "💀 Disdire è un'opzione. Solo per dire.",
                    "🚨 Houston, abbiamo un problema di abbonamenti.",
                    "😱 Con questi soldi affitteresti una sala cinema.",
                    "☠️ RIP portafoglio. Riposa in pace."
                ],
                noUsage: [
                    "🤔 0 ore? È una donazione, non un abbonamento.",
                    "💤 Stai pagando perché esista. Nient'altro.",
                    "🎁 Regalo generoso alle corporazioni."
                ]
            }
        }
    };

    // ==================== Regional Pricing ====================
    const REGIONAL_PRICES = {
        // US/UK - prices in USD/GBP
        US: {
            currency: '$',
            currencyAfter: false,
            xbox: 16.99,
            playstation: 17.99,
            nintendo: 3.99,
            netflix: 15.49,
            disney: 13.99,
            amazon: 8.99
        },
        GB: {
            currency: '£',
            currencyAfter: false,
            xbox: 12.99,
            playstation: 13.49,
            nintendo: 3.49,
            netflix: 10.99,
            disney: 10.99,
            amazon: 5.99
        },
        // Europe - EUR
        ES: {
            currency: '€',
            currencyAfter: true,
            xbox: 14.99,
            playstation: 13.99,
            nintendo: 3.99,
            netflix: 12.99,
            disney: 8.99,
            amazon: 4.99
        },
        DE: {
            currency: '€',
            currencyAfter: true,
            xbox: 14.99,
            playstation: 13.99,
            nintendo: 3.99,
            netflix: 12.99,
            disney: 8.99,
            amazon: 8.99
        },
        FR: {
            currency: '€',
            currencyAfter: true,
            xbox: 14.99,
            playstation: 13.99,
            nintendo: 3.99,
            netflix: 13.49,
            disney: 8.99,
            amazon: 6.99
        },
        IT: {
            currency: '€',
            currencyAfter: true,
            xbox: 14.99,
            playstation: 13.99,
            nintendo: 3.99,
            netflix: 12.99,
            disney: 8.99,
            amazon: 4.99
        },
        PT: {
            currency: '€',
            currencyAfter: true,
            xbox: 14.99,
            playstation: 13.99,
            nintendo: 3.99,
            netflix: 10.99,
            disney: 8.99,
            amazon: 4.99
        },
        // Brazil - BRL
        BR: {
            currency: 'R$',
            currencyAfter: false,
            xbox: 44.99,
            playstation: 43.90,
            nintendo: 19.99,
            netflix: 39.90,
            disney: 33.90,
            amazon: 14.90
        },
        // Mexico - MXN
        MX: {
            currency: '$',
            currencyAfter: false,
            xbox: 299,
            playstation: 279,
            nintendo: 79,
            netflix: 199,
            disney: 179,
            amazon: 99
        },
        // Default (fallback to EUR)
        DEFAULT: {
            currency: '€',
            currencyAfter: true,
            xbox: 14.99,
            playstation: 13.99,
            nintendo: 3.99,
            netflix: 12.99,
            disney: 8.99,
            amazon: 4.99
        }
    };

    // Language to country mapping for pricing
    const LANG_TO_COUNTRY = {
        en: 'US',
        es: 'ES',
        ca: 'ES',
        pt: 'BR',
        de: 'DE',
        fr: 'FR',
        it: 'IT'
    };

    // ==================== Configuration ====================
    const SUBSCRIPTIONS = [
        { id: 'xbox', name: 'Xbox Game Pass', category: 'gaming', link: 'https://geeknite.com/xbox-game-pass' },
        { id: 'playstation', name: 'PlayStation Plus', category: 'gaming', link: 'https://geeknite.com/playstation-plus' },
        { id: 'nintendo', name: 'Nintendo Switch Online', category: 'gaming', link: 'https://geeknite.com/nintendo-switch-online' },
        { id: 'netflix', name: 'Netflix', category: 'streaming', link: 'https://geeknite.com/netflix' },
        { id: 'disney', name: 'Disney+', category: 'streaming', link: 'https://geeknite.com/disney-plus' },
        { id: 'amazon', name: 'Amazon Prime Video', category: 'streaming', link: 'https://geeknite.com/amazon-prime-video' }
    ];

    // ==================== State ====================
    let isOptimistic = false;
    let currentLang = 'en';
    let currentRegion = 'DEFAULT';
    const OPTIMISTIC_FACTOR = 1.5;

    // ==================== Language & Region Detection ====================
    function detectLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && TRANSLATIONS[urlLang]) {
            return urlLang;
        }

        // Check localStorage
        const savedLang = localStorage.getItem('subs-lang');
        if (savedLang && TRANSLATIONS[savedLang]) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const shortLang = browserLang.split('-')[0].toLowerCase();
        
        if (TRANSLATIONS[shortLang]) {
            return shortLang;
        }

        // Default to English
        return 'en';
    }

    function detectRegion() {
        // Check URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const urlRegion = urlParams.get('region');
        if (urlRegion && REGIONAL_PRICES[urlRegion.toUpperCase()]) {
            return urlRegion.toUpperCase();
        }

        // Try to get from browser
        const browserLang = navigator.language || navigator.userLanguage;
        const parts = browserLang.split('-');
        
        if (parts.length > 1) {
            const country = parts[1].toUpperCase();
            if (REGIONAL_PRICES[country]) {
                return country;
            }
        }

        // Use language-based fallback
        return LANG_TO_COUNTRY[currentLang] || 'DEFAULT';
    }

    function t(key) {
        return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
    }

    function getRegionalPrice(subId) {
        const region = REGIONAL_PRICES[currentRegion] || REGIONAL_PRICES.DEFAULT;
        return region[subId] || REGIONAL_PRICES.DEFAULT[subId];
    }

    function getCurrency() {
        const region = REGIONAL_PRICES[currentRegion] || REGIONAL_PRICES.DEFAULT;
        return region.currency;
    }

    function isCurrencyAfter() {
        const region = REGIONAL_PRICES[currentRegion] || REGIONAL_PRICES.DEFAULT;
        return region.currencyAfter;
    }

    // ==================== DOM Elements ====================
    const elements = {
        btnRealistic: document.getElementById('btn-realistic'),
        btnOptimistic: document.getElementById('btn-optimistic'),
        modeHint: document.getElementById('mode-hint'),
        calculateBtn: document.getElementById('calculate-btn'),
        resultsSection: document.getElementById('results-section'),
        resultCost: document.getElementById('result-cost'),
        resultHours: document.getElementById('result-hours'),
        resultPerHour: document.getElementById('result-per-hour'),
        interpretation: document.getElementById('interpretation'),
        breakdownList: document.getElementById('breakdown-list'),
        shareBtn: document.getElementById('share-btn')
    };

    // ==================== Helpers ====================
    function getRandomMessage(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function formatCurrency(value) {
        const currency = getCurrency();
        const formatted = value.toFixed(2).replace('.', ',');
        return isCurrencyAfter() ? `${formatted} ${currency}` : `${currency}${formatted}`;
    }

    function formatHours(value) {
        return Math.round(value) + ' h';
    }

    function getInterpretation(costPerHour, totalHours) {
        const messages = t('messages');
        
        if (totalHours === 0) {
            return {
                message: getRandomMessage(messages.noUsage),
                level: 'terrible'
            };
        }

        if (costPerHour < 1) {
            return {
                message: getRandomMessage(messages.excellent),
                level: 'good'
            };
        } else if (costPerHour < 3) {
            return {
                message: getRandomMessage(messages.good),
                level: 'warning'
            };
        } else if (costPerHour < 5) {
            return {
                message: getRandomMessage(messages.warning),
                level: 'bad'
            };
        } else {
            return {
                message: getRandomMessage(messages.terrible),
                level: 'terrible'
            };
        }
    }

    // ==================== Calculation ====================
    function calculateResults() {
        let totalAnnualCost = 0;
        let totalAnnualHours = 0;
        const breakdown = [];

        SUBSCRIPTIONS.forEach(sub => {
            const enabledEl = document.getElementById(`${sub.id}-enabled`);
            const costEl = document.getElementById(`${sub.id}-cost`);
            const hoursEl = document.getElementById(`${sub.id}-hours`);

            if (enabledEl && enabledEl.checked) {
                const monthlyCost = parseFloat(costEl.value) || 0;
                let monthlyHours = parseFloat(hoursEl.value) || 0;

                // Apply optimistic factor
                if (isOptimistic) {
                    monthlyHours *= OPTIMISTIC_FACTOR;
                }

                const annualCost = monthlyCost * 12;
                const annualHours = monthlyHours * 12;
                const costPerHour = annualHours > 0 ? annualCost / annualHours : Infinity;

                totalAnnualCost += annualCost;
                totalAnnualHours += annualHours;

                breakdown.push({
                    name: sub.name,
                    link: sub.link,
                    annualCost,
                    annualHours,
                    costPerHour
                });
            }
        });

        const totalCostPerHour = totalAnnualHours > 0 
            ? totalAnnualCost / totalAnnualHours 
            : 0;

        return {
            totalAnnualCost,
            totalAnnualHours,
            totalCostPerHour,
            breakdown
        };
    }

    function displayResults(results) {
        // Main results
        elements.resultCost.textContent = formatCurrency(results.totalAnnualCost);
        elements.resultHours.textContent = formatHours(results.totalAnnualHours);
        
        if (results.totalAnnualHours > 0) {
            elements.resultPerHour.textContent = formatCurrency(results.totalCostPerHour);
        } else {
            elements.resultPerHour.textContent = t('infinity') + ' ' + getCurrency();
        }

        // Interpretation
        const interpretation = getInterpretation(results.totalCostPerHour, results.totalAnnualHours);
        elements.interpretation.textContent = interpretation.message;
        elements.interpretation.className = 'interpretation ' + interpretation.level;

        // Breakdown
        elements.breakdownList.innerHTML = '';
        results.breakdown.forEach(item => {
            const div = document.createElement('div');
            div.className = 'breakdown-item';
            
            const costPerHourText = item.costPerHour === Infinity 
                ? t('infinity') + ' ' + getCurrency() + t('perHourUnit')
                : formatCurrency(item.costPerHour) + t('perHourUnit');
            
            const linkHtml = item.link 
                ? `<a href="${item.link}" target="_blank" rel="noopener" class="breakdown-link" title="${t('affiliateTitle')}">${item.name} 🔗</a>`
                : `<span>${item.name}</span>`;
            
            div.innerHTML = `
                <span class="breakdown-name">${linkHtml}</span>
                <div class="breakdown-stats">
                    <div class="breakdown-cost">${formatCurrency(item.annualCost)}${t('perYearUnit')}</div>
                    <div class="breakdown-per-hour">${costPerHourText}</div>
                </div>
            `;
            elements.breakdownList.appendChild(div);
        });

        // Show results
        elements.resultsSection.classList.add('visible');
        
        // Scroll to results
        setTimeout(() => {
            elements.resultsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    }

    // ==================== Event Handlers ====================
    function handleModeChange(optimistic) {
        isOptimistic = optimistic;
        
        elements.btnRealistic.classList.toggle('active', !optimistic);
        elements.btnOptimistic.classList.toggle('active', optimistic);
        
        elements.modeHint.textContent = optimistic 
            ? "Els optimistes multipliquen les hores x1.5. Ja veurem."
            : "Els realistes diuen la veritat. O això creuen.";
    }

    function handleCheckboxChange(subId) {
        const card = document.querySelector(`[data-sub="${subId}"]`);
        const checkbox = document.getElementById(`${subId}-enabled`);
        
        if (card && checkbox) {
            card.classList.toggle('active', checkbox.checked);
        }
    }

    function handleCalculate() {
        // Check if at least one subscription is enabled
        const anyEnabled = SUBSCRIPTIONS.some(sub => {
            const el = document.getElementById(`${sub.id}-enabled`);
            return el && el.checked;
        });

        if (!anyEnabled) {
            alert(t('selectOne'));
            return;
        }

        const results = calculateResults();
        displayResults(results);
    }

    function handleShare() {
        const results = calculateResults();
        const currency = getCurrency();
        
        const text = `💸 ${t('resultSpend')}: ${formatCurrency(results.totalAnnualCost)}${t('perYearUnit')}.\n` +
                     `${t('resultUse')}: ${formatHours(results.totalAnnualHours)}${t('perYearUnit')}.\n` +
                     `${t('resultCost')}: ${results.totalAnnualHours > 0 ? formatCurrency(results.totalCostPerHour) : t('infinity') + ' ' + currency}${t('perHourUnit')}.\n\n` +
                     `https://subs.geeknite.com`;

        if (navigator.share) {
            navigator.share({
                title: 'Subscription Cost Calculator',
                text: text,
                url: 'https://subs.geeknite.com'
            }).catch(() => {
                // Fallback to clipboard
                copyToClipboard(text);
            });
        } else {
            copyToClipboard(text);
        }
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = elements.shareBtn.textContent;
            elements.shareBtn.textContent = t('copiedMsg');
            setTimeout(() => {
                elements.shareBtn.textContent = originalText;
            }, 2000);
        }).catch(() => {
            alert(text);
        });
    }

    // ==================== UI Translation ====================
    function updateUI() {
        // Update all translatable elements
        document.querySelector('header h1').textContent = t('title');
        document.querySelector('.subtitle').textContent = t('subtitle');
        document.querySelector('.mode-label').textContent = t('modeQuestion');
        elements.btnRealistic.innerHTML = t('modeRealistic');
        elements.btnOptimistic.innerHTML = t('modeOptimistic');
        elements.modeHint.textContent = isOptimistic ? t('hintOptimistic') : t('hintRealistic');
        
        document.querySelectorAll('.subscriptions-section h2')[0].textContent = t('gaming');
        document.querySelectorAll('.subscriptions-section h2')[1].textContent = t('streaming');
        
        elements.calculateBtn.textContent = t('calculateBtn');
        
        // Result labels
        document.querySelectorAll('.result-label')[0].textContent = t('resultSpend');
        document.querySelectorAll('.result-label')[1].textContent = t('resultUse');
        document.querySelectorAll('.result-label')[2].textContent = t('resultCost');
        
        document.querySelectorAll('.result-period')[0].textContent = t('perYear');
        document.querySelectorAll('.result-period')[1].textContent = t('perYearHours');
        document.querySelectorAll('.result-period')[2].textContent = t('perHour');
        
        document.querySelector('.disclaimer').textContent = t('disclaimer');
        document.querySelector('.breakdown-card h3').textContent = t('breakdown');
        elements.shareBtn.textContent = t('shareBtn');
        document.querySelector('footer p').textContent = t('footer');

        // Affiliate links
        const affiliateTitle = document.querySelector('.affiliate-title');
        if (affiliateTitle) affiliateTitle.textContent = t('affiliateTitle');
        
        const affiliateLinks = document.querySelectorAll('.affiliate-link');
        if (affiliateLinks.length >= 3) {
            affiliateLinks[0].textContent = t('affiliateGaming');
            affiliateLinks[1].textContent = t('affiliateStreaming');
            affiliateLinks[2].textContent = t('affiliateSave');
        }

        // Update input labels
        document.querySelectorAll('.input-group').forEach((group, idx) => {
            const labels = group.querySelectorAll('label');
            if (labels[0]) {
                if (idx % 2 === 0) {
                    labels[0].textContent = t('costMonth');
                } else {
                    labels[0].textContent = t('hoursMonth');
                }
            }
        });

        // Update placeholders
        document.querySelectorAll('input[id$="-hours"]').forEach(input => {
            input.placeholder = t('hoursPlaceholder');
        });

        // Update prices based on region
        SUBSCRIPTIONS.forEach(sub => {
            const costInput = document.getElementById(`${sub.id}-cost`);
            if (costInput && !costInput.dataset.userEdited) {
                costInput.value = getRegionalPrice(sub.id);
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
    }

    function createLanguageSelector() {
        const langSelector = document.createElement('div');
        langSelector.className = 'lang-selector';
        langSelector.innerHTML = `
            <select id="lang-select">
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="ca">🏴󠁥󠁳󠁣󠁴󠁿 Català</option>
                <option value="pt">🇧🇷 Português</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="it">🇮🇹 Italiano</option>
            </select>
        `;
        
        document.querySelector('header').insertBefore(langSelector, document.querySelector('.subtitle'));
        
        const select = document.getElementById('lang-select');
        select.value = currentLang;
        
        select.addEventListener('change', (e) => {
            currentLang = e.target.value;
            currentRegion = LANG_TO_COUNTRY[currentLang] || 'DEFAULT';
            localStorage.setItem('subs-lang', currentLang);
            updateUI();
        });
    }

    // ==================== Initialization ====================
    function init() {
        // Detect language and region
        currentLang = detectLanguage();
        currentRegion = detectRegion();

        // Create language selector
        createLanguageSelector();

        // Mode toggle
        elements.btnRealistic.addEventListener('click', () => handleModeChange(false));
        elements.btnOptimistic.addEventListener('click', () => handleModeChange(true));

        // Checkbox handlers
        SUBSCRIPTIONS.forEach(sub => {
            const checkbox = document.getElementById(`${sub.id}-enabled`);
            if (checkbox) {
                checkbox.addEventListener('change', () => handleCheckboxChange(sub.id));
            }

            // Track if user manually edited cost
            const costInput = document.getElementById(`${sub.id}-cost`);
            if (costInput) {
                costInput.addEventListener('input', () => {
                    costInput.dataset.userEdited = 'true';
                });
            }
        });

        // Calculate button
        elements.calculateBtn.addEventListener('click', handleCalculate);

        // Share button
        elements.shareBtn.addEventListener('click', handleShare);

        // Enter key on inputs triggers calculation
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleCalculate();
                }
            });
        });

        // Apply initial translations and prices
        updateUI();
    }

    // Start the app
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

/**
 * Brunna & Lucas - Apresentação de Casamento (Estilo Revista / Storyboard)
 * Lógica do Slideshow com Múltiplos Layouts e Trilha Sonora
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Definição do Storyboard (Estrutura de Slides com Textos Lindo e Fotos)
    // ==========================================================================
    const slidesData = [
        {
            layout: 'welcome',
            theme: 'dark',
            categories: ['all'],
            title: 'Lucas & Brunna',
            subtitle: 'NOSSA HISTÓRIA EM FOTOS',
            photos: ['https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop']
        },
        {
            layout: 'intro-welcome',
            theme: 'light',
            categories: ['all'],
            subtitle: 'BEM-VINDOS AO CASAMENTO DE',
            title1: 'Lucas',
            title2: 'Brunna',
            date: 'JULHO 11, 2026',
            photos: ['fotos/ensaio/125A7534.jpg']
        },
        {
            layout: 'about-groom', // Lucas
            theme: 'light',
            categories: ['ensaio'],
            sectionName: 'SOBRE O NOIVO',
            title: 'Lucas',
            text: 'Vindo do Sul do estado, Lucas trouxe consigo a determinação, a fé e o sonho de cuidar de vidas. Conquistou seu espaço na Medicina pela UFPI e, com sua presença firme e generosa, sempre soube o que queria. Decidido e cheio de coragem, foi dele a iniciativa de reencontrar Brunna em 2024, dando início ao capítulo mais lindo e definitivo da sua história.',
            photos: ['fotos/ensaio/125A7459.jpg']
        },
        {
            layout: 'about-bride', // Brunna
            theme: 'light',
            categories: ['brunna'],
            sectionName: 'SOBRE A NOIVA',
            title: 'Brunna',
            text: 'Nativa do Norte do Piauí, Brunna é a mistura perfeita de doçura, fé e determinação. Batalhadora e cheia de luz, realizou o sonho de passar em Medicina na UESPI. Com seu olhar empático e coração voltado ao cuidado, ela trouxe leveza e certezas absolutas para a vida de Lucas, transformando cada dia comum em um passo rumo ao \'para sempre\'.',
            photos: ['fotos/ensaio/125A7494.jpg']
        },
        {
            layout: 'cinematic-subtitle',
            theme: 'dark',
            categories: ['brunna'],
            text: 'Foi então que, no ano de 2022, o destino decidiu, pela primeira vez, aproximar seus caminhos.',
            photos: ['fotos/bruna/foto23.jpeg']
        },
        {
            layout: 'fullscreen-overlay', // Encontro 2020
            theme: 'dark',
            categories: ['ensaio'],
            title: 'Guiados pela fé e de mãos dadas, sob a bênção que uniu o nosso caminhar.',
            subtitle: '',
            photos: ['fotos/ensaio/125A7511.jpg']
        },
        {
            layout: 'collage-moments', // Momentos (Brunna)
            theme: 'dark',
            categories: ['brunna'],
            photos: [
                'fotos/bruna/foto10.jpeg', // Principal
                'fotos/bruna/foto14.jpeg', // Lateral 1
                'fotos/bruna/foto22.jpeg'  // Lateral 2
            ]
        },
        {
            layout: 'collage-moments',
            theme: 'dark',
            categories: ['brunna'],
            title: 'Primeiro Natal e Ano Novo',
            bgPhoto: 'fotos/bruna/foto17-2.jpeg',
            photos: [
                'fotos/bruna/foto15.jpeg',
                'fotos/bruna/foto09.jpeg',
                'fotos/bruna/foto17.jpeg'
            ]
        },
        {
            layout: 'proposal', // O Pedido
            theme: 'light',
            categories: ['brunna'],
            badge: 'O PEDIDO',
            title: 'O SIM MAIS IMPORTANTE',
            text: '',
            photos: [
                'fotos/bruna/foto46.jpeg', // Principal esquerda
                'fotos/bruna/foto20.jpeg', // Pequena rodapé 1
                'fotos/bruna/foto07.jpeg'  // Pequena rodapé 2
            ]
        },
        {
            layout: 'love-air', // Detalhes (Brunna)
            theme: 'light',
            categories: ['brunna'],
            bannerText: '• DETALHES DE NÓS DOIS •',
            photos: [
                'fotos/bruna/foto30.jpeg',
                'fotos/bruna/foto35.jpeg'
            ]
        },
        {
            layout: 'split-caricature', // Caricaturas
            theme: 'light',
            categories: ['brunna'],
            bannerText: '• DESENHADOS UM PARA O OUTRO •',
            photos: [
                'fotos/bruna/foto21.jpeg',
                'fotos/bruna/foto39.jpeg'
            ]
        },
        {
            layout: 'love-air', // Viagens
            theme: 'light',
            categories: ['brunna'],
            bannerText: '• NOSSAS AVENTURAS E VIAGENS •',
            photos: [
                'fotos/bruna/foto40.jpeg',
                'fotos/bruna/foto42.jpeg'
            ]
        },
        {
            layout: 'canyon-adventure',
            theme: 'dark',
            categories: ['brunna'],
            bgPhoto: 'fotos/bruna/foto47.jpeg',
            badge: 'PASSEIOS • RIO POTY',
            title: 'Cânion do Rio Poty',
            text: 'Entre os paredões milenares esculpidos pela força do tempo, encontramos a calmaria perfeita. Cada viagem ao seu lado é um lembrete de que o mundo é gigante, mas o meu lugar favorito continua sendo exatamente aqui: navegando no mesmo barco que você.',
            photos: [
                'fotos/bruna/foto12.jpeg',
                'fotos/bruna/foto13.jpeg'
            ]
        },
        {
            layout: 'arraia-moments',
            theme: 'dark',
            categories: ['brunna'],
            title: 'Nosso Arraiá',
            text: 'No arraiá da vida, meu coração acendeu a fogueira mais bonita quando te encontrou. Com direito a bandeirinhas, risadas e muito amor, você é a minha melhor companhia para dançar essa quadrilha eterna.',
            photos: [
                'fotos/bruna/foto44.jpeg'
            ]
        },
        {
            layout: 'growing-together',
            theme: 'dark',
            categories: ['brunna'],
            badge: 'CONQUISTAS • MEDICINA',
            title: 'Crescendo Juntos',
            text: 'Do sonho compartilhado nas salas de estudo ao orgulho de segurar o CRM. Trilhar o caminho da Medicina lado a lado foi a nossa maior jornada. Crescemos nos livros, nos plantões e na vida, descobrindo que cuidar do outro é ainda mais bonito quando feito a quatro mãos.',
            bgPhoto: 'fotos/bruna/foto38.jpeg',
            photos: [
                'fotos/bruna/foto35.jpeg',
                'fotos/bruna/foto38.jpeg',
                'fotos/bruna/foto43.jpeg'
            ]
        },
        {
            layout: 'faith-theme',
            theme: 'dark',
            categories: ['brunna'],
            badge: 'BÊNÇÃO • UNIÃO',
            title: 'Nossa Fé',
            text: 'Firmados na fé que nos guia e sob a bênção divina que conduz nossos passos. Encontramos no altar e na oração em conjunto o alicerce mais forte para o nosso amor. Diante de Deus, consagramos nosso caminho com a certeza de que a fé partilhada multiplica a nossa força e ilumina o nosso amanhã.',
            bgPhoto: 'fotos/bruna/foto33.jpeg',
            photos: [
                'fotos/bruna/foto32.jpeg',
                'fotos/bruna/foto33.jpeg',
                'fotos/bruna/foto34.jpeg'
            ]
        },
        {
            layout: 'collage-moments',
            theme: 'dark',
            categories: ['brunna'],
            title: 'O Amor está no Ar',
            bgPhoto: 'fotos/bruna/foto08.jpeg',
            photos: [
                'fotos/bruna/foto16.jpeg',
                '',
                'fotos/bruna/foto28.jpeg'
            ]
        },
        {
            layout: 'collage-moments', // Mais fotos ensaio curadas
            theme: 'dark',
            categories: ['ensaio'],
            photos: [
                'fotos/ensaio/125A7510.jpg', // Principal
                'fotos/ensaio/125A7516.jpg', // Lateral 1
                'fotos/ensaio/125A7517.jpg'  // Lateral 2
            ]
        },
        {
            layout: 'thanks', // Slide Final
            theme: 'dark',
            categories: ['all'],
            title: 'Obrigado por celebrarem conosco!',
            subtitle: '',
            photos: ['fotos/ensaio/125A7546.jpg']
        }
    ];

    // ==========================================================================
    // 2. Estado Global da Aplicação
    // ==========================================================================
    let currentSlides = [...slidesData]; // Slides ativos pós-filtragem
    let currentIdx = 0;
    let isPlaying = false;
    let duration = 8000; // Tempo de exibição de cada slide (8 segundos)
    let transitionType = 'kenburns'; // Tipo de transição
    let isShuffle = false;
    let shuffledIndices = [];
    let isMuted = false;
    
    // Controle da Barra de Progresso e tempo decorrido
    let startTime = null;
    let elapsedTime = 0;
    let progressFrame = null;
    let inactivityTimeout = null;

    const DEFAULT_MUSIC_URL = 'musica/Stephen Sanchez - Until I Found You.mp3';

    // ==========================================================================
    // 3. Elementos do DOM
    // ==========================================================================
    const welcomeScreen = document.getElementById('welcome-screen');
    const startBtn = document.getElementById('start-btn');
    const musicInput = document.getElementById('music-input');
    const selectedMusicName = document.getElementById('selected-music-name');
    
    const slideshowContainer = document.getElementById('slideshow-container');
    const slideWrapper = document.getElementById('slide-wrapper');
    const progressBar = document.getElementById('progress-bar');
    const slideInfoText = document.getElementById('slide-info-text');
    const bgMusic = document.getElementById('bg-music');
    bgMusic.src = DEFAULT_MUSIC_URL;
    
    // Controles
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const transitionSelect = document.getElementById('transition-select');
    const speedRange = document.getElementById('speed-range');
    const speedLabel = document.getElementById('speed-label');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    const audioOnIcon = document.getElementById('audio-on-icon');
    const audioOffIcon = document.getElementById('audio-off-icon');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const fullscreenEnter = document.getElementById('fullscreen-enter');
    const fullscreenExit = document.getElementById('fullscreen-exit');
    const toast = document.getElementById('toast-notification');

    // Configurar áudio padrão inicial
    bgMusic.src = DEFAULT_MUSIC_URL;

    // Sincronizar UI do tempo de transição com a variável padrão (9s)
    if (speedRange && speedLabel) {
        speedRange.value = duration / 1000;
        speedLabel.textContent = `${duration / 1000}s`;
    }

    // Configurar listeners dos botões de controle
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            togglePlayPause();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
        });
    }

    // ==========================================================================
    // 4. Inicialização e Áudio
    // ==========================================================================
    
    // Carregar música local personalizada
    musicInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            selectedMusicName.textContent = file.name;
            const fileURL = URL.createObjectURL(file);
            bgMusic.src = fileURL;
            showToast('Música carregada com sucesso!');
        }
    });

    // Iniciar Apresentação ao clicar no botão inicial
    startBtn.addEventListener('click', () => {
        const musicCheckbox = document.getElementById('music-enable-checkbox');
        const playMusic = musicCheckbox ? musicCheckbox.checked : true;
        
        if (!playMusic) {
            isMuted = true;
            bgMusic.muted = true;
            // Atualizar ícones do painel de controle
            audioToggleBtn.classList.remove('active');
            audioOnIcon.classList.add('hidden');
            audioOffIcon.classList.remove('hidden');
        } else {
            isMuted = false;
            bgMusic.muted = false;
            audioToggleBtn.classList.add('active');
            audioOnIcon.classList.remove('hidden');
            audioOffIcon.classList.add('hidden');
        }

        welcomeScreen.classList.add('fade-out');
        toggleFullscreen(true);

        setTimeout(() => {
            if (!isMuted) {
                bgMusic.play().catch(err => {
                    console.log("Autoplay de som bloqueado.", err);
                    showToast("Clique no ícone de música para ligar o som.");
                });
            }
            play();
            resetInactivityTimer();
        }, 500);
    });

    // ==========================================================================
    // 5. Renderização Dinâmica e Criação de Layouts
    // ==========================================================================
    
    // Resolve o índice correto se o modo aleatório (shuffle) estiver ativo
    function getRealIndex(idx) {
        if (isShuffle && shuffledIndices.length === currentSlides.length) {
            return shuffledIndices[idx];
        }
        return idx;
    }

    // Cria a estrutura HTML interna do slide com base no layout configurado
    function createSlideElement(slideObj) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        switch (slideObj.layout) {
            case 'welcome':
                slide.innerHTML = `
                    <div class="slide-layout-welcome">
                        <img class="cover-bg" src="${slideObj.photos[0]}" alt="Casamento">
                        <div class="cover-content">
                            <h1>${slideObj.title}</h1>
                            <div class="cover-subtitle">${slideObj.subtitle}</div>
                        </div>
                    </div>
                `;
                break;
                
            case 'cinematic-subtitle':
                slide.innerHTML = `
                    <div class="slide-layout-cinematic-subtitle">
                        <img class="bg-photo" src="${slideObj.photos[0]}" alt="Primeiro Encontro">
                        <div class="subtitle-banner">
                            <p class="subtitle-text">${slideObj.text}</p>
                        </div>
                    </div>
                `;
                break;
                
            case 'intro-welcome':
                slide.innerHTML = `
                    <div class="slide-layout-intro-welcome">
                        <div class="photo-col img-box-dual">
                            <img class="blur-bg" src="${slideObj.photos[0]}" alt="Casamento">
                            <img class="contain-fg" src="${slideObj.photos[0]}" alt="Casamento">
                        </div>
                        <div class="intro-content-col">
                            <div class="intro-subtitle">${slideObj.subtitle}</div>
                            <div class="names-script">
                                <span>${slideObj.title1}</span>
                                <span class="ampersand">&amp;</span>
                                <span>${slideObj.title2}</span>
                            </div>
                            <div class="intro-date">${slideObj.date}</div>
                        </div>
                    </div>
                `;
                break;
                
            case 'about-groom':
            case 'about-bride':
                slide.innerHTML = `
                    <div class="slide-layout-about">
                        <div class="text-col">
                            <div class="title-container">
                                <div class="section-name">${slideObj.sectionName}</div>
                                <h3 class="about-title">${slideObj.title}</h3>
                            </div>
                            <p class="desc-text">${slideObj.text}</p>
                        </div>
                        <div class="photo-col img-box-dual">
                            <img class="blur-bg" src="${slideObj.photos[0]}" alt="${slideObj.title}">
                            <img class="contain-fg" src="${slideObj.photos[0]}" alt="${slideObj.title}">
                        </div>
                    </div>
                `;
                break;
                
            case 'meet-collage':
                slide.innerHTML = `
                    <div class="slide-layout-meet">
                        <div class="photos-grid">
                            <div class="main-photo img-box-dual">
                                <img class="blur-bg" src="${slideObj.photos[0]}" alt="Encontro Principal">
                                <img class="contain-fg" src="${slideObj.photos[0]}" alt="Encontro Principal">
                            </div>
                            <div class="side-photos">
                                <div class="side-photo img-box-dual">
                                    <img class="blur-bg" src="${slideObj.photos[1]}" alt="Encontro 1">
                                    <img class="contain-fg" src="${slideObj.photos[1]}" alt="Encontro 1">
                                </div>
                                <div class="side-photo img-box-dual">
                                    <img class="blur-bg" src="${slideObj.photos[2]}" alt="Encontro 2">
                                    <img class="contain-fg" src="${slideObj.photos[2]}" alt="Encontro 2">
                                </div>
                            </div>
                        </div>
                        <div class="text-row">
                            <h3>${slideObj.title}</h3>
                            <p>${slideObj.text}</p>
                        </div>
                    </div>
                `;
                break;
                
            case 'love-air':
                slide.innerHTML = `
                    <div class="slide-layout-air">
                        <div class="top-banner">${slideObj.bannerText}</div>
                        <div class="photos-row">
                            <div class="photo-item img-box-dual">
                                <img class="blur-bg" src="${slideObj.photos[0]}" alt="Love 1">
                                <img class="contain-fg" src="${slideObj.photos[0]}" alt="Love 1">
                            </div>
                            <div class="photo-item img-box-dual">
                                <img class="blur-bg" src="${slideObj.photos[1]}" alt="Love 2">
                                <img class="contain-fg" src="${slideObj.photos[1]}" alt="Love 2">
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'split-caricature':
                slide.innerHTML = `
                    <div class="slide-layout-split-caricature">
                        <div class="top-banner-full">${slideObj.bannerText}</div>
                        <div class="content-row">
                            <div class="left-photo-box">
                                <img src="${slideObj.photos[0]}" alt="Caricatura Ilustração">
                            </div>
                            <div class="right-photo-box">
                                <img src="${slideObj.photos[1]}" alt="Caricatura Foto">
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'canyon-adventure':
                slide.innerHTML = `
                    <div class="slide-layout-canyon">
                        <img class="canyon-bg-blur" src="${slideObj.bgPhoto || slideObj.photos[1]}" alt="Fundo Canyon">
                        <div class="canyon-content">
                            <div class="photos-side">
                                <div class="canyon-card card-1">
                                    <img src="${slideObj.photos[0]}" alt="Passeio Poty 1">
                                </div>
                                <div class="canyon-card card-2">
                                    <img src="${slideObj.photos[1]}" alt="Passeio Poty 2">
                                </div>
                            </div>
                            <div class="text-side">
                                <div class="adventure-badge">${slideObj.badge}</div>
                                <h3>${slideObj.title}</h3>
                                <div class="divider"></div>
                                <p>${slideObj.text}</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'arraia-moments':
                slide.innerHTML = `
                    <div class="slide-layout-arraia">
                        <img class="arraia-bg-blur" src="${slideObj.photos[0]}" alt="Fundo Arraiá">
                        <div class="arraia-content">
                            <div class="photo-side">
                                <div class="arraia-frame">
                                    <div class="mini-flags">
                                        <div class="flag blue"></div>
                                        <div class="flag yellow"></div>
                                        <div class="flag red"></div>
                                        <div class="flag green"></div>
                                        <div class="flag orange"></div>
                                    </div>
                                    <img src="${slideObj.photos[0]}" alt="Arraiá do Casal">
                                </div>
                            </div>
                            <div class="text-side">
                                <div class="arraia-badge">TRADIÇÕES • MOMENTOS</div>
                                <h3>${slideObj.title}</h3>
                                <div class="divider"></div>
                                <p>${slideObj.text}</p>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'growing-together':
                slide.innerHTML = `
                    <div class="slide-layout-growing">
                        <img class="growing-bg-blur" src="${slideObj.bgPhoto || slideObj.photos[1]}" alt="Fundo">
                        <div class="growing-content">
                            <div class="text-side">
                                <div class="growing-badge">${slideObj.badge}</div>
                                <h3>${slideObj.title}</h3>
                                <div class="divider"></div>
                                <p>${slideObj.text}</p>
                            </div>
                            <div class="photos-side">
                                <div class="growing-card card-1 img-box-dual">
                                    <img class="blur-bg" src="${slideObj.photos[0]}" alt="Conquista 1">
                                    <img class="contain-fg" src="${slideObj.photos[0]}" alt="Conquista 1">
                                </div>
                                <div class="growing-card card-2 img-box-dual">
                                    <img class="blur-bg" src="${slideObj.photos[1]}" alt="Conquista 2">
                                    <img class="contain-fg" src="${slideObj.photos[1]}" alt="Conquista 2">
                                </div>
                                <div class="growing-card card-3 img-box-dual">
                                    <img class="blur-bg" src="${slideObj.photos[2]}" alt="Conquista 3">
                                    <img class="contain-fg" src="${slideObj.photos[2]}" alt="Conquista 3">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'faith-theme':
                slide.innerHTML = `
                    <div class="slide-layout-faith">
                        <img class="faith-bg-blur" src="${slideObj.bgPhoto || slideObj.photos[1]}" alt="Fundo">
                        <div class="faith-content-center">
                            <div class="faith-gallery">
                                <div class="faith-card">
                                    <div class="img-box-dual">
                                        <img class="blur-bg" src="${slideObj.photos[0]}" alt="Fé 1">
                                        <img class="contain-fg" src="${slideObj.photos[0]}" alt="Fé 1">
                                    </div>
                                </div>
                                <div class="faith-card">
                                    <div class="img-box-dual">
                                        <img class="blur-bg" src="${slideObj.photos[1]}" alt="Fé 2">
                                        <img class="contain-fg" src="${slideObj.photos[1]}" alt="Fé 2">
                                    </div>
                                </div>
                                <div class="faith-card">
                                    <div class="img-box-dual">
                                        <img class="blur-bg" src="${slideObj.photos[2]}" alt="Fé 3">
                                        <img class="contain-fg" src="${slideObj.photos[2]}" alt="Fé 3">
                                    </div>
                                </div>
                            </div>
                            <div class="faith-text-card">
                                <div class="faith-badge">${slideObj.badge}</div>
                                <h3>${slideObj.title}</h3>
                                <p>${slideObj.text}</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'fullscreen-overlay': {
                const isAltar = !slideObj.subtitle;
                if (isAltar) {
                    slide.innerHTML = `
                        <div class="slide-layout-altar-banner">
                            <div class="top-banner">${slideObj.title}</div>
                            <div class="photo-area img-box-dual">
                                <img class="blur-bg" src="${slideObj.photos[0]}" alt="Altar">
                                <img class="contain-fg" src="${slideObj.photos[0]}" alt="Altar">
                            </div>
                        </div>
                    `;
                } else {
                    slide.innerHTML = `
                        <div class="slide-layout-fullscreen img-box-dual">
                            <img class="blur-bg" src="${slideObj.photos[0]}" alt="Fundo">
                            <img class="contain-fg" src="${slideObj.photos[0]}" alt="Fundo">
                            <div class="overlay-content">
                                <h3>${slideObj.title}</h3>
                                <h4>${slideObj.subtitle}</h4>
                                <div class="deco-squares">
                                    <div class="deco-square"></div>
                                    <div class="deco-square"></div>
                                </div>
                            </div>
                        </div>
                    `;
                }
                break;
            }
                
            case 'collage-moments': {
                const isLoveAir = slideObj.title === 'O Amor está no Ar';
                slide.innerHTML = `
                    <div class="slide-layout-collage-container ${isLoveAir ? 'collage-love-air' : ''}">
                        <img class="collage-bg-blur" src="${slideObj.bgPhoto || slideObj.photos[0] || slideObj.photos[1] || slideObj.photos[2]}" alt="Fundo">
                        ${slideObj.title ? `<div class="collage-header-title">${slideObj.title}</div>` : ''}
                        <div class="slide-layout-collage-row">
                            <div class="collage-card">${slideObj.photos[0] ? `<img src="${slideObj.photos[0]}" alt="Foto 1">` : ''}</div>
                            <div class="collage-card">${slideObj.photos[1] ? `<img src="${slideObj.photos[1]}" alt="Foto 2">` : ''}</div>
                            <div class="collage-card">${slideObj.photos[2] ? `<img src="${slideObj.photos[2]}" alt="Foto 3">` : ''}</div>
                        </div>
                    </div>
                `;
                break;
            }
                
            case 'proposal':
                slide.innerHTML = `
                    <div class="slide-layout-proposal">
                        <div class="photo-item-left">
                            <img src="${slideObj.photos[0]}" alt="Pedido Principal" style="width: 100%; height: 100%; object-fit: contain;">
                        </div>
                        <div class="content-right">
                            <div class="badge">${slideObj.badge}</div>
                            <h3>${slideObj.title}</h3>
                            <p>${slideObj.text}</p>
                            <div class="small-photo-row">
                                <div class="small-photo">
                                    <img src="${slideObj.photos[1]}" alt="Pedido Detalhe 1" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
                                </div>
                                <div class="small-photo">
                                    <img src="${slideObj.photos[2]}" alt="Pedido Detalhe 2" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'thanks':
                slide.innerHTML = `
                    <div class="slide-layout-thanks">
                        <img class="thanks-bg" src="${slideObj.photos[0]}" alt="Obrigado">
                        <div class="thanks-overlay">
                            <h2>${slideObj.title}</h2>
                            <p>${slideObj.subtitle}</p>
                        </div>
                    </div>
                `;
                break;
        }
        
        return slide;
    }

    // Atualiza o rodapé dos controles e ajusta cor do header do casamento (claro ou escuro)
    function updateSlideMetadata(slideIndex) {
        const slideObj = currentSlides[slideIndex];
        if (!slideObj) return;
        
        // Atualizar texto indicador do slide
        slideInfoText.textContent = `Slide ${slideIndex + 1} de ${currentSlides.length}`;
        
        // Ajustar tema de cores do header de sobreposição
        if (slideObj.theme === 'dark') {
            slideshowContainer.classList.add('dark-slide-active');
        } else {
            slideshowContainer.classList.remove('dark-slide-active');
        }
    }

    // Exibe o slide no índice correspondente com efeito de transição
    function showSlide(index, direction = 'next') {
        if (currentSlides.length === 0) return;
        
        if (index >= currentSlides.length) index = 0;
        if (index < 0) index = currentSlides.length - 1;
        
        currentIdx = index;
        const realSlideIdx = getRealIndex(currentIdx);
        const slideObj = currentSlides[realSlideIdx];
        
        const currentActiveSlide = slideWrapper.querySelector('.slide.active');
        const newSlide = createSlideElement(slideObj);
        
        // Duração da transição do Ken Burns (se ativo)
        newSlide.style.setProperty('--kb-duration', `${duration}ms`);
        
        // Aplicar a animação selecionada
        if (transitionType === 'kenburns') {
            const kbEffects = ['kb-in', 'kb-out', 'kb-left', 'kb-right'];
            const randomEffect = kbEffects[Math.floor(Math.random() * kbEffects.length)];
            newSlide.classList.add('effect-kenburns', randomEffect);
        } else if (transitionType === 'fade') {
            newSlide.classList.add('effect-fade');
            if (currentActiveSlide) {
                currentActiveSlide.className = 'slide effect-fade';
            }
        } else if (transitionType === 'slide') {
            newSlide.classList.add('effect-slide');
            newSlide.classList.add(direction === 'next' ? 'slide-next' : 'slide-prev');
            if (currentActiveSlide) {
                currentActiveSlide.className = 'slide active effect-slide';
            }
        }
        
        slideWrapper.appendChild(newSlide);
        
        // Forçar reflow para aplicar animações CSS
        newSlide.offsetWidth;
        
        newSlide.classList.add('active');
        
        if (transitionType === 'slide') {
            newSlide.classList.remove('slide-next', 'slide-prev');
            if (currentActiveSlide) {
                currentActiveSlide.classList.add(direction === 'next' ? 'slide-prev' : 'slide-next');
                currentActiveSlide.classList.remove('active');
            }
        } else {
            if (currentActiveSlide) {
                currentActiveSlide.classList.remove('active');
            }
        }
        
        // Remover slide anterior após conclusão do fade (1.2s)
        if (currentActiveSlide) {
            setTimeout(() => {
                currentActiveSlide.remove();
            }, 1200);
        }
        
        updateSlideMetadata(realSlideIdx);
    }

    // Carregar slide inicial
    showSlide(0);

    // Navegações básicas
    function nextSlide() {
        resetProgressBar();
        showSlide(currentIdx + 1, 'next');
        if (isPlaying) {
            startProgressBar();
        }
    }

    function prevSlide() {
        resetProgressBar();
        showSlide(currentIdx - 1, 'prev');
        if (isPlaying) {
            startProgressBar();
        }
    }

    // ==========================================================================
    // 6. Play / Pause e Barra de Progresso
    // ==========================================================================
    function play() {
        if (isPlaying) return;
        isPlaying = true;
        
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        
        if (!isMuted && bgMusic.paused && bgMusic.src) {
            bgMusic.play().catch(e => console.log("Erro ao iniciar áudio:", e));
        }
        
        startProgressBar();
        resetInactivityTimer();
    }

    function pause() {
        if (!isPlaying) return;
        isPlaying = false;
        
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        
        bgMusic.pause();
        pauseProgressBar();
    }

    function togglePlayPause() {
        if (isPlaying) {
            pause();
            showToast("Slideshow Pausado");
        } else {
            play();
            showToast("Slideshow Iniciado");
        }
    }

    function startProgressBar() {
        cancelAnimationFrame(progressFrame);
        startTime = Date.now() - elapsedTime;
        
        function tick() {
            if (!isPlaying) return;
            const now = Date.now();
            elapsedTime = now - startTime;
            
            const percentage = Math.min((elapsedTime / duration) * 100, 100);
            progressBar.style.width = `${percentage}%`;
            
            if (elapsedTime >= duration) {
                elapsedTime = 0;
                nextSlide();
            } else {
                progressFrame = requestAnimationFrame(tick);
            }
        }
        progressFrame = requestAnimationFrame(tick);
    }

    function pauseProgressBar() {
        cancelAnimationFrame(progressFrame);
    }

    function resetProgressBar() {
        cancelAnimationFrame(progressFrame);
        elapsedTime = 0;
        progressBar.style.width = '0%';
    }

    // ==========================================================================
    // 7. Filtros e Configurações Rápidas
    // ==========================================================================
    
    // Filtragem de Categorias
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const wasPlaying = isPlaying;
            pause();
            
            // Filtrar os slides do Storyboard
            if (filter === 'all') {
                currentSlides = [...slidesData];
            } else {
                currentSlides = slidesData.filter(slide => 
                    slide.categories.includes(filter) || slide.categories.includes('all')
                );
            }
            
            if (isShuffle) {
                shuffledIndices = generateShuffledIndices(currentSlides.length);
            }
            
            currentIdx = 0;
            resetProgressBar();
            showSlide(0);
            
            if (wasPlaying) {
                play();
            }
            
            showToast(`Layouts: ${e.target.textContent}`);
        });
    });

    // Tipo de Transição
    transitionSelect.addEventListener('change', (e) => {
        transitionType = e.target.value;
        showToast(`Transição: ${transitionSelect.options[transitionSelect.selectedIndex].text}`);
    });

    // Velocidade de Apresentação
    speedRange.addEventListener('input', (e) => {
        const seconds = parseInt(e.target.value);
        speedLabel.textContent = `${seconds}s`;
        
        const wasPlaying = isPlaying;
        pause();
        
        const progressPercent = elapsedTime / duration;
        duration = seconds * 1000;
        elapsedTime = progressPercent * duration;
        
        if (wasPlaying) {
            play();
        }
    });

    // ==========================================================================
    // 8. Embaralhar Ordem (Shuffle)
    // ==========================================================================
    function generateShuffledIndices(length) {
        const arr = Array.from({ length }, (_, i) => i);
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle('active', isShuffle);
        
        const currentSlideObj = currentSlides[getRealIndex(currentIdx)];
        
        if (isShuffle) {
            shuffledIndices = generateShuffledIndices(currentSlides.length);
            
            const shuffledPosition = shuffledIndices.indexOf(currentIdx);
            if (shuffledPosition !== -1) {
                const temp = shuffledIndices[0];
                shuffledIndices[0] = shuffledIndices[shuffledPosition];
                shuffledIndices[shuffledPosition] = temp;
            }
            currentIdx = 0;
            showToast("Ordem Aleatória");
        } else {
            const sequentialIdx = currentSlides.indexOf(currentSlideObj);
            if (sequentialIdx !== -1) {
                currentIdx = sequentialIdx;
            }
            showToast("Ordem Sequencial");
        }
        
        const realIdx = getRealIndex(currentIdx);
        updateSlideMetadata(realIdx);
    });

    // ==========================================================================
    // 9. Controle de Som e Mute
    // ==========================================================================
    function toggleMute() {
        isMuted = !isMuted;
        bgMusic.muted = isMuted;
        
        audioToggleBtn.classList.toggle('active', !isMuted);
        if (isMuted) {
            audioOnIcon.classList.add('hidden');
            audioOffIcon.classList.remove('hidden');
            showToast("Som Mutado");
        } else {
            audioOnIcon.classList.remove('hidden');
            audioOffIcon.classList.add('hidden');
            showToast("Som Ativado");
            
            if (isPlaying && bgMusic.paused) {
                bgMusic.play().catch(e => console.log(e));
            }
        }
    }

    audioToggleBtn.addEventListener('click', toggleMute);

    // ==========================================================================
    // 10. Tela Cheia (Fullscreen API)
    // ==========================================================================
    function toggleFullscreen(forceOpen = null) {
        const isCurrentlyFullscreen = document.fullscreenElement !== null;
        const shouldOpen = forceOpen !== null ? forceOpen : !isCurrentlyFullscreen;

        if (shouldOpen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log("Erro ao solicitar tela cheia:", err);
                });
            }
            fullscreenEnter.classList.add('hidden');
            fullscreenExit.classList.remove('hidden');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(err => {
                    console.log("Erro ao sair da tela cheia:", err);
                });
            }
            fullscreenEnter.classList.remove('hidden');
            fullscreenExit.classList.add('hidden');
        }
    }

    fullscreenBtn.addEventListener('click', () => toggleFullscreen());

    document.addEventListener('fullscreenchange', () => {
        const isFS = document.fullscreenElement !== null;
        fullscreenEnter.classList.toggle('hidden', isFS);
        fullscreenExit.classList.toggle('hidden', !isFS);
    });

    // ==========================================================================
    // 11. Ocultação Automática da Interface e Cursor
    // ==========================================================================
    function resetInactivityTimer() {
        slideshowContainer.classList.remove('hide-interface');
        document.body.style.cursor = 'default';
        
        clearTimeout(inactivityTimeout);
        
        if (isPlaying && welcomeScreen.classList.contains('fade-out')) {
            inactivityTimeout = setTimeout(() => {
                slideshowContainer.classList.add('hide-interface');
                document.body.style.cursor = 'none';
            }, 3000);
        }
    }

    ['mousemove', 'click', 'keydown', 'touchstart'].forEach(eventName => {
        document.addEventListener(eventName, resetInactivityTimer);
    });

    // ==========================================================================
    // 12. Atalhos de Teclado
    // ==========================================================================
    document.addEventListener('keydown', (e) => {
        if (!welcomeScreen.classList.contains('fade-out')) return;

        switch (e.code) {
            case 'Space':
            case 'KeyP':
                e.preventDefault();
                togglePlayPause();
                break;
            case 'ArrowRight':
            case 'KeyD':
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'KeyA':
                prevSlide();
                break;
            case 'KeyF':
                toggleFullscreen();
                break;
            case 'KeyM':
                toggleMute();
                break;
        }
    });

    // ==========================================================================
    // 13. Notificações Toast
    // ==========================================================================
    let toastTimeout;
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
});

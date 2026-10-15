// =====================================================
//  CONTEÚDO DO SITE — edite aqui textos, fotos e contatos
// =====================================================

export const SITE = {
  whatsapp: '5511987654321', // só números, com DDI+DDD
  phone: '(11) 98765-4321',
  instagram: '@inkbreed.tattoo',
  instagramUrl: 'https://instagram.com/inkbreed.tattoo',
  address: 'Rua Exemplo, 123 - Centro, São Paulo - SP',
  stats: [
    { n: 8, s: '+', label: 'anos de estúdio' },
    { n: 5, s: '', label: 'artistas residentes' },
    { n: 3000, s: '+', label: 'tatuagens feitas' },
  ],
};

export const FEATURES = [
  { title: 'Higiene total', text: 'Material descartável e esterilizado' },
  { title: 'Artistas especializados', text: 'Cada estilo com quem domina' },
  { title: 'Atendimento personalizado', text: 'Seu projeto desenhado com você' },
  { title: 'Ambiente confortável', text: 'Espaço seguro e acolhedor' },
];

// Fotos ficam em /public/img — troque o arquivo ou o caminho aqui
export const STYLES = [
  { name: 'Realismo', img: '/img/realismo.jpg', alt: 'Tatuagem realista de espada e rosto feminino', text: 'Detalhes que ganham vida na sua pele.' },
  { name: 'Tribal', img: '/img/tribal.jpg', alt: 'Tatuagem tribal contemporânea no antebraço', text: 'Força, identidade e ancestralidade.' },
  { name: 'Fine line', img: '/img/fine-line.jpg', alt: 'Tatuagem fine line de flor com rosto', text: 'Traços delicados, grandes significados.' },
  { name: 'Blackwork', img: '/img/blackwork.jpg', alt: 'Fechamento de braço blackwork com samurai e oni', text: 'O poder do preto em sua forma mais pura.' },
  { name: 'Old school', img: '/img/old-school.jpg', alt: 'Tatuagem old school de águia e olho no antebraço', text: 'Clássico, atemporal, sempre na moda.' },
  { name: 'Oriental', img: '/img/oriental.jpg', alt: 'Fechamento oriental com oni e gueixa', text: 'Tradição e cultura em cada detalhe.' },
];

// Ordem das fotos no portfólio (use os nomes de STYLES acima)
export const PORTFOLIO = [
  'Old school', 'Oriental', 'Fine line', 'Blackwork', 'Realismo',
  'Tribal', 'Realismo', 'Oriental', 'Tribal', 'Fine line',
];

// pos = enquadramento vertical da foto (0% topo, 100% base) | tone = cor de fundo
export const ARTISTS = [
  { name: 'Lucas Moreira', styles: 'Realismo / Blackwork', img: '/img/artistas/lucas-moreira.jpg', pos: '30%', tone: '#4a0a10' },
  { name: 'Gabriel Souza', styles: 'Fine line / Old school', img: '/img/artistas/gabriel-souza.jpg', pos: '25%', tone: '#2f1a1a' },
  { name: 'Bruna Almeida', styles: 'Tribal / Oriental', img: '/img/artistas/bruna-almeida.jpg', pos: '30%', tone: '#5a0d14' },
  { name: 'Rafael Costa', styles: 'Blackwork / Realismo', img: '/img/artistas/rafael-costa.jpg', pos: '20%', tone: '#3a1010' },
  { name: 'Thiago Lima', styles: 'Old school / Tradicional', img: '/img/artistas/thiago-lima.jpg', pos: '25%', tone: '#4a1410' },
];

export const TESTIMONIALS = [
  { name: 'Matheus Ferreira', text: 'Experiência incrível! Equipe super atenciosa, ambiente top e o resultado ficou perfeito. Já virei cliente fiel!' },
  { name: 'Ana Clara Santos', text: 'Atendimento impecável, o tatuador entendeu exatamente o que eu queria. Super recomendo o Inkbreed!' },
  { name: 'Rafael Nunes', text: 'Artistas incríveis e muito profissionalismo. Minha tattoo ficou mais do que eu imaginava!' },
];

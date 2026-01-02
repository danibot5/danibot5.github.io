// ============================================
// ИНТЕРАКТИВНА ПЕРИОДИЧНА ТАБЛИЦА - JS SKELETON
// ============================================
// 
// Този файл съдържа основната структура.
// Вашата задача е да попълните липсващите части
// според инструкциите за всяка седмица.

console.log("🧪 Периодичната таблица се зарежда...");

// ============================================
// СЕДМИЦА 5: TODO - МАСИВ С ЕЛЕМЕНТИ
// ============================================

/*
Инструкции:
Създайте масив const elements = [] с поне 25 елемента.
Всеки елемент трябва да бъде обект със следните свойства:

{
    number: 1,                  // Атомен номер
    symbol: 'H',                // Символ
    name: 'Водород',            // Име
    mass: 1.008,                // Атомна маса
    category: 'nonmetal',       // Категория
    period: 1,                  // Период
    group: 1,                   // Група
    row: 1,                     // Ред в таблицата
    col: 1,                     // Колона в таблицата
    description: 'Текст...'     // Описание
}

Категории: 'nonmetal', 'metal', 'metalloid', 'noble-gas', 'alkali', 'alkaline'

Примери за първите 3 елемента:
- H (Водород): number: 1, row: 1, col: 1, category: 'nonmetal'
- He (Хелий): number: 2, row: 1, col: 18, category: 'noble-gas'
- Li (Литий): number: 3, row: 2, col: 1, category: 'alkali'
*/

// TODO: Създайте масив elements с поне 25 елемента тук
const elements = [
   {
      number: 1,
      symbol: 'H',
      name: 'Водород',
      mass: '1.008',
      category: 'nonmetal',
      period: 1,
      group: 1,
      description: 'Най-лекият и най-често срещан елемент във Вселената.',
      position: { row: 1, col: 1 }
   },
   {
      number: 2,
      symbol: 'He',
      name: 'Хелий',
      mass: '4.003',
      category: 'noble-gas',
      period: 1,
      group: 18,
      description: 'Благороден газ, втори по разпространение елемент.',
      position: { row: 1, col: 18 }
   },
   {
      number: 3,
      symbol: 'Li',
      name: 'Литий',
      mass: '6.94',
      category: 'alkali metal',
      period: 2,
      group: 1,
      description: 'Мек, сребрист метал, използван в батерии и сплави. Реагира бурно с вода.',
      position: { row: 2, col: 1 }
   },
   {
      number: 4,
      symbol: 'Be',
      name: 'Берилий',
      mass: '9.0122',
      category: 'alkaline',
      period: 2,
      group: 2,
      description: 'Лек, твърд метал, използван в аерокосмическата индустрия.',
      position: { row: 2, col: 2 }
   },
   {
      number: 5,
      symbol: 'B',
      name: 'Бор',
      mass: '10.81',
      category: 'metalloid',
      period: 2,
      group: 13,
      description: 'Металоид, използван в стъкла и полупроводници.',
      position: { row: 2, col: 13 }
   },
   {
      number: 6,
      symbol: 'C',
      name: 'Въглерод',
      mass: '12.011',
      category: 'nonmetal',
      period: 2,
      group: 14,
      description: 'Основен елемент на живота; среща се като графит и диамант.',
      position: { row: 2, col: 14 }
   },
   {
      number: 7,
      symbol: 'N',
      name: 'Азот',
      mass: '14.007',
      category: 'nonmetal',
      period: 2,
      group: 15,
      description: 'Основен компонент на въздуха, нужен за живот.',
      position: { row: 2, col: 15 }
   },
   {
      number: 8,
      symbol: 'O',
      name: 'Кислород',
      mass: '15.999',
      category: 'nonmetal',
      period: 2,
      group: 16,
      description: 'Поддържа горенето и дишането на живите организми.',
      position: { row: 2, col: 16 }
   },
   {
      number: 9,
      symbol: 'F',
      name: 'Флуор',
      mass: '18.998',
      category: 'halogen',
      period: 2,
      group: 17,
      description: 'Силно реактивен газ, използван в пасти за зъби и химикали.',
      position: { row: 2, col: 17 }
   },
   {
      number: 10,
      symbol: 'Ne',
      name: 'Неон',
      mass: '20.180',
      category: 'noble-gas',
      period: 2,
      group: 18,
      description: 'Инертен газ, използван в неонови лампи и реклама.',
      position: { row: 2, col: 18 }
   },
   {
      number: 11,
      symbol: 'Na',
      name: 'Натрий',
      mass: '22.990',
      category: 'alkali metal',
      period: 3,
      group: 1,
      description: 'Реактивен метал, компонент на готварската сол (NaCl).',
      position: { row: 3, col: 1 }
   },
   {
      number: 12,
      symbol: 'Mg',
      name: 'Магнезий',
      mass: '24.305',
      category: 'alkaline',
      period: 3,
      group: 2,
      description: 'Лек метал, използван в сплави и за поддържане на здрави кости.',
      position: { row: 3, col: 2 }
   },
   {
      number: 13,
      symbol: 'Al',
      name: 'Алуминий',
      mass: '26.982',
      category: 'post-transitionmetal',
      period: 3,
      group: 13,
      description: 'Лек, устойчив метал, използван в опаковки и строителство.',
      position: { row: 3, col: 13 }
   },
   {
      number: 14,
      symbol: 'Si',
      name: 'Силиций',
      mass: '28.085',
      category: 'metalloid',
      period: 3,
      group: 14,
      description: 'Основен елемент в пясъка и микрочиповете.',
      position: { row: 3, col: 14 }
   },
   {
      number: 15,
      symbol: 'P',
      name: 'Фосфор',
      mass: '30.974',
      category: 'nonmetal',
      period: 3,
      group: 15,
      description: 'Важен за ДНК и клетъчната енергия; свети в тъмното.',
      position: { row: 3, col: 15 }
   },
   {
      number: 16,
      symbol: 'S',
      name: 'Сяра',
      mass: '32.06',
      category: 'nonmetal',
      period: 3,
      group: 16,
      description: 'Жълт елемент с характерна миризма, използван в торове.',
      position: { row: 3, col: 16 }
   },
   {
      number: 17,
      symbol: 'Cl',
      name: 'Хлор',
      mass: '35.45',
      category: 'halogen',
      period: 3,
      group: 17,
      description: 'Жълто-зелен газ, използван за дезинфекция и в PVC пластмаси.',
      position: { row: 3, col: 17 }
   },
   {
      number: 18,
      symbol: 'Ar',
      name: 'Аргон',
      mass: '39.948',
      category: 'noble-gas',
      period: 3,
      group: 18,
      description: 'Инертен газ, използван в осветление и за защита при заваряване.',
      position: { row: 3, col: 18 }
   },
   {
      number: 19,
      symbol: 'K',
      name: 'Калий',
      mass: '39.098',
      category: 'alkali metal',
      period: 4,
      group: 1,
      description: 'Силно реактивен метал, важен за нервната система.',
      position: { row: 4, col: 1 }
   },
   {
      number: 20,
      symbol: 'Ca',
      name: 'Калций',
      mass: '40.078',
      category: 'alkaline',
      period: 4,
      group: 2,
      description: 'Основен елемент в костите и черупките на организми.',
      position: { row: 4, col: 2 }
   },
   {
      number: 21,
      symbol: 'Sc',
      name: 'Скандий',
      mass: '44.956',
      category: 'transitionmetal',
      period: 4,
      group: 3,
      description: 'Лек метал, използван в сплави за самолети.',
      position: { row: 4, col: 3 }
   },
   {
      number: 22,
      symbol: 'Ti',
      name: 'Титан',
      mass: '47.867',
      category: 'transitionmetal',
      period: 4,
      group: 4,
      description: 'Здрав и лек метал, използван в импланти и авиация.',
      position: { row: 4, col: 4 }
   },
   {
      number: 23,
      symbol: 'V',
      name: 'Ванадий',
      mass: '50.942',
      category: 'transitionmetal',
      period: 4,
      group: 5,
      description: 'Използван в стомани и батерии за големи мощности.',
      position: { row: 4, col: 5 }
   },
   {
      number: 24,
      symbol: 'Cr',
      name: 'Хром',
      mass: '51.996',
      category: 'transitionmetal',
      period: 4,
      group: 6,
      description: 'Придава блясък и устойчивост на стомана и покрития.',
      position: { row: 4, col: 6 }
   },
   {
      number: 25,
      symbol: 'Mn',
      name: 'Манган',
      mass: '54.938',
      category: 'transitionmetal',
      period: 4,
      group: 7,
      description: 'Използван за производство на стомана и батерии.',
      position: { row: 4, col: 7 }
   },
   {
      number: 26,
      symbol: 'Fe',
      name: 'Желязо',
      mass: '55.845',
      category: 'transitionmetal',
      period: 4,
      group: 8,
      description: 'Най-разпространеният метал в Земята; основен в стоманата.',
      position: { row: 4, col: 8 }
   },
   {
      number: 27,
      symbol: 'Co',
      name: 'Кобалт',
      mass: '58.933',
      category: 'transitionmetal',
      period: 4,
      group: 9,
      description: 'Използван в батерии и магнити; присъства и в витамин B12.',
      position: { row: 4, col: 9 }
   },
   {
      number: 28,
      symbol: 'Ni',
      name: 'Никел',
      mass: '58.693',
      category: 'transitionmetal',
      period: 4,
      group: 10,
      description: 'Издръжлив метал, използван в сплави и монети.',
      position: { row: 4, col: 10 }
   },
   {
      number: 29,
      symbol: 'Cu',
      name: 'Мед',
      mass: '63.546',
      category: 'transitionmetal',
      period: 4,
      group: 11,
      description: 'Добър проводник, използван в електричеството и тръби.',
      position: { row: 4, col: 11 }
   },
   {
      number: 30,
      symbol: 'Zn',
      name: 'Цинк',
      mass: '65.38',
      category: 'transitionmetal',
      period: 4,
      group: 12,
      description: 'Използван за галванизация и в биологични ензими.',
      position: { row: 4, col: 12 }
   },
   {
      number: 31,
      symbol: 'Ga',
      name: 'Галий',
      mass: '69.723',
      category: 'post-transitionmetal',
      period: 4,
      group: 13,
      description: 'Метал, който се топи в ръка; използван в електроника.',
      position: { row: 4, col: 13 }
   },
   {
      number: 32,
      symbol: 'Ge',
      name: 'Германий',
      mass: '72.63',
      category: 'metalloid',
      period: 4,
      group: 14,
      description: 'Полупроводник, използван в електроника и оптика.',
      position: { row: 4, col: 14 }
   },
   {
      number: 33,
      symbol: 'As',
      name: 'Арсен',
      mass: '74.922',
      category: 'metalloid',
      period: 4,
      group: 15,
      description: 'Токсичен елемент, използван в полупроводници и пестициди.',
      position: { row: 4, col: 15 }
   },
   {
      number: 34,
      symbol: 'Se',
      name: 'Селен',
      mass: '78.971',
      category: 'nonmetal',
      period: 4,
      group: 16,
      description: 'Необходим в малки количества за организма; използван в стъкло.',
      position: { row: 4, col: 16 }
   },
   {
      number: 35,
      symbol: 'Br',
      name: 'Бром',
      mass: '79.904',
      category: 'halogen',
      period: 4,
      group: 17,
      description: 'Червено-кафява течност, използвана в химикали и фотография.',
      position: { row: 4, col: 17 }
   },
   {
      number: 36,
      symbol: 'Kr',
      name: 'Криптон',
      mass: '83.798',
      category: 'noble-gas',
      period: 4,
      group: 18,
      description: 'Инертен газ, използван в лампи и лазери.',
      position: { row: 4, col: 18 }
   },
   {
      number: 37,
      symbol: 'Rb',
      name: 'Рубидий',
      mass: '85.468',
      category: 'alkali metal',
      period: 5,
      group: 1,
      description: 'Мек, реактивен метал, използван в изследвания и електроника.',
      position: { row: 5, col: 1 }
   },
   {
      number: 38,
      symbol: 'Sr',
      name: 'Стронций',
      mass: '87.62',
      category: 'alkaline',
      period: 5,
      group: 2,
      description: 'Използван в фойерверки и медицински приложения.',
      position: { row: 5, col: 2 }
   },
   {
      number: 39,
      symbol: 'Y',
      name: 'Итрий',
      mass: '88.906',
      category: 'transitionmetal',
      period: 5,
      group: 3,
      description: 'Използван в червени фосфори на телевизори и лазери.',
      position: { row: 5, col: 3 }
   },
   {
      number: 40,
      symbol: 'Zr',
      name: 'Цирконий',
      mass: '91.224',
      category: 'transitionmetal',
      period: 5,
      group: 4,
      description: 'Устойчив на корозия метал, използван в ядрени реактори.',
      position: { row: 5, col: 4 }
   },
   {
      number: 41,
      symbol: 'Nb',
      name: 'Ниобий',
      mass: '92.906',
      category: 'transitionmetal',
      period: 5,
      group: 5,
      description: 'Използван в свръхпроводници и устойчиви сплави.',
      position: { row: 5, col: 5 }
   },
   {
      number: 42,
      symbol: 'Mo',
      name: 'Молибден',
      mass: '95.95',
      category: 'transitionmetal',
      period: 5,
      group: 6,
      description: 'Подобрява здравината на стоманата и катализира реакции.',
      position: { row: 5, col: 6 }
   },
   {
      number: 43,
      symbol: 'Tc',
      name: 'Технеций',
      mass: '98',
      category: 'transitionmetal',
      period: 5,
      group: 7,
      description: 'Първият изкуствен елемент, използван в медицинска диагностика.',
      position: { row: 5, col: 7 }
   },
   {
      number: 44,
      symbol: 'Ru',
      name: 'Рутений',
      mass: '101.07',
      category: 'transitionmetal',
      period: 5,
      group: 8,
      description: 'Използван в електроника и каталитични процеси.',
      position: { row: 5, col: 8 }
   },
   {
      number: 45,
      symbol: 'Rh',
      name: 'Родий',
      mass: '102.91',
      category: 'transitionmetal',
      period: 5,
      group: 9,
      description: 'Скъп метал, използван в катализатори и бижута.',
      position: { row: 5, col: 9 }
   },
   {
      number: 46,
      symbol: 'Pd',
      name: 'Паладий',
      mass: '106.42',
      category: 'transitionmetal',
      period: 5,
      group: 10,
      description: 'Широко използван в катализатори и електроника.',
      position: { row: 5, col: 10 }
   },
   {
      number: 47,
      symbol: 'Ag',
      name: 'Сребро',
      mass: '107.87',
      category: 'transitionmetal',
      period: 5,
      group: 11,
      description: 'Най-добрият проводник; използван в бижута и електроника.',
      position: { row: 5, col: 11 }
   },
   {
      number: 48,
      symbol: 'Cd',
      name: 'Кадмий',
      mass: '112.41',
      category: 'transitionmetal',
      period: 5,
      group: 12,
      description: 'Използван в батерии и покрития, но токсичен.',
      position: { row: 5, col: 12 }
   },
   {
      number: 49,
      symbol: 'In',
      name: 'Индий',
      mass: '114.82',
      category: 'post-transitionmetal',
      period: 5,
      group: 13,
      description: 'Мек метал, използван в LCD екрани и сплави.',
      position: { row: 5, col: 13 }
   },
   {
      number: 50,
      symbol: 'Sn',
      name: 'Калай',
      mass: '118.71',
      category: 'post-transitionmetal',
      period: 5,
      group: 14,
      description: 'Използван за запояване и консервни кутии.',
      position: { row: 5, col: 14 }
   },
   {
      number: 51,
      symbol: 'Sb',
      name: 'Сурма',
      mass: '121.76',
      category: 'metalloid',
      period: 5,
      group: 15,
      description: 'Използвана в огнеустойчиви материали и батерии.',
      position: { row: 5, col: 15 }
   },
   {
      number: 52,
      symbol: 'Te',
      name: 'Телур',
      mass: '127.60',
      category: 'metalloid',
      period: 5,
      group: 16,
      description: 'Използван в соларни панели и сплави.',
      position: { row: 5, col: 16 }
   },
   {
      number: 53,
      symbol: 'I',
      name: 'Йод',
      mass: '126.90',
      category: 'halogen',
      period: 5,
      group: 17,
      description: 'Необходим за щитовидната жлеза; използван в антисептици.',
      position: { row: 5, col: 17 }
   },
   {
      number: 54,
      symbol: 'Xe',
      name: 'Ксенон',
      mass: '131.29',
      category: 'noble-gas',
      period: 5,
      group: 18,
      description: 'Инертен газ, използван в светкавици и упойки.',
      position: { row: 5, col: 18 }
   },
   {
      number: 55,
      symbol: 'Cs',
      name: 'Цезий',
      mass: '132.91',
      category: 'alkali metal',
      period: 6,
      group: 1,
      description: 'Много реактивен метал, използван в атомни часовници.',
      position: { row: 6, col: 1 }
   },
   {
      number: 56,
      symbol: 'Ba',
      name: 'Барий',
      mass: '137.33',
      category: 'alkaline',
      period: 6,
      group: 2,
      description: 'Използван в медицински снимки и фойерверки.',
      position: { row: 6, col: 2 }
   },
   {
      number: 57,
      symbol: 'La',
      name: 'Лантан',
      mass: '138.91',
      category: 'lanthanide',
      period: 6,
      group: 3,
      description: 'Начало на лантанидите; използван в оптика и батерии.',
      position: { row: 9, col: 3 }
   },
   {
      number: 58,
      symbol: 'Ce',
      name: 'Церий',
      mass: '140.12',
      category: 'lanthanide',
      period: 6,
      group: 4,
      description: 'Използван в катализатори и запалки.',
      position: { row: 9, col: 4 }
   },
   {
      number: 59,
      symbol: 'Pr',
      name: 'Празеодим',
      mass: '140.91',
      category: 'lanthanide',
      period: 6,
      group: 5,
      description: 'Използван в магнити и оцветяване на стъкло.',
      position: { row: 9, col: 5 }
   },
   {
      number: 60,
      symbol: 'Nd',
      name: 'Неодим',
      mass: '144.24',
      category: 'lanthanide',
      period: 6,
      group: 6,
      description: 'Силен магнитен елемент, използван в високоговорители и двигатели.',
      position: { row: 9, col: 6 }
   },
   {
      number: 61,
      symbol: 'Pm',
      name: 'Прометий',
      mass: '145',
      category: 'lanthanide',
      period: 6,
      group: 7,
      description: 'Радиоактивен елемент, използван в батерии и изследвания.',
      position: { row: 9, col: 7 }
   },
   {
      number: 62,
      symbol: 'Sm',
      name: 'Самарий',
      mass: '150.36',
      category: 'lanthanide',
      period: 6,
      group: 8,
      description: 'Използван в магнити и ядрени реактори.',
      position: { row: 9, col: 8 }
   },
   {
      number: 63,
      symbol: 'Eu',
      name: 'Европий',
      mass: '151.96',
      category: 'lanthanide',
      period: 6,
      group: 9,
      description: 'Използван в червени фосфори и лазери.',
      position: { row: 9, col: 9 }
   },
   {
      number: 64,
      symbol: 'Gd',
      name: 'Гадолиний',
      mass: '157.25',
      category: 'lanthanide',
      period: 6,
      group: 10,
      description: 'Използван в ЯМР контрастни агенти и магнити.',
      position: { row: 9, col: 10 }
   },
   {
      number: 65,
      symbol: 'Tb',
      name: 'Тербий',
      mass: '158.93',
      category: 'lanthanide',
      period: 6,
      group: 11,
      description: 'Използван в зелени фосфори и електроника.',
      position: { row: 9, col: 11 }
   },
   {
      number: 66,
      symbol: 'Dy',
      name: 'Диспрозий',
      mass: '162.50',
      category: 'lanthanide',
      period: 6,
      group: 12,
      description: 'Използван в магнити и ядрени реактори.',
      position: { row: 9, col: 12 }
   },
   {
      number: 67,
      symbol: 'Ho',
      name: 'Холмий',
      mass: '164.93',
      category: 'lanthanide',
      period: 6,
      group: 13,
      description: 'Използван в лазери и магнитни материали.',
      position: { row: 9, col: 13 }
   },
   {
      number: 68,
      symbol: 'Er',
      name: 'Ербий',
      mass: '167.26',
      category: 'lanthanide',
      period: 6,
      group: 14,
      description: 'Използван в оптични влакна и лазери.',
      position: { row: 9, col: 14 }
   },
   {
      number: 69,
      symbol: 'Tm',
      name: 'Тулий',
      mass: '168.93',
      category: 'lanthanide',
      period: 6,
      group: 15,
      description: 'Използван в лазери и медицинска апаратура.',
      position: { row: 9, col: 15 }
   },
   {
      number: 70,
      symbol: 'Yb',
      name: 'Итербий',
      mass: '173.05',
      category: 'lanthanide',
      period: 6,
      group: 16,
      description: 'Използван в влакнести лазери и сплави.',
      position: { row: 9, col: 16 }
   },
   {
      number: 71,
      symbol: 'Lu',
      name: 'Лутеций',
      mass: '174.97',
      category: 'lanthanide',
      period: 6,
      group: 17,
      description: 'Най-тежкият лантанид, използван в PET скенери и катализатори.',
      position: { row: 9, col: 17 }
   },
   {
      number: 72,
      symbol: 'Hf',
      name: 'Хафний',
      mass: '178.49',
      category: 'transitionmetal',
      period: 6,
      group: 4,
      description: 'Използван в ядрени реактори и микрочипове.',
      position: { row: 6, col: 4 }
   },
   {
      number: 73,
      symbol: 'Ta',
      name: 'Тантал',
      mass: '180.95',
      category: 'transitionmetal',
      period: 6,
      group: 5,
      description: 'Използван в електроника и хирургични инструменти.',
      position: { row: 6, col: 5 }
   },
   {
      number: 74,
      symbol: 'W',
      name: 'Волфрам',
      mass: '183.84',
      category: 'transitionmetal',
      period: 6,
      group: 6,
      description: 'Най-висока точка на топене; използван в крушки и инструменти.',
      position: { row: 6, col: 6 }
   },
   {
      number: 75,
      symbol: 'Re',
      name: 'Рений',
      mass: '186.21',
      category: 'transitionmetal',
      period: 6,
      group: 7,
      description: 'Използван в суперсплави и реактивни двигатели.',
      position: { row: 6, col: 7 }
   },
   {
      number: 76,
      symbol: 'Os',
      name: 'Осмий',
      mass: '190.23',
      category: 'transitionmetal',
      period: 6,
      group: 8,
      description: 'Много плътен метал, използван в писалки и контакти.',
      position: { row: 6, col: 8 }
   },
   {
      number: 77,
      symbol: 'Ir',
      name: 'Иридий',
      mass: '192.22',
      category: 'transitionmetal',
      period: 6,
      group: 9,
      description: 'Устойчив метал, използван в катализатори и електроди.',
      position: { row: 6, col: 9 }
   },
   {
      number: 78,
      symbol: 'Pt',
      name: 'Платина',
      mass: '195.08',
      category: 'transitionmetal',
      period: 6,
      group: 10,
      description: 'Скъп и устойчив метал, използван в бижута и катализатори.',
      position: { row: 6, col: 10 }
   },
   {
      number: 79,
      symbol: 'Au',
      name: 'Злато',
      mass: '196.97',
      category: 'transitionmetal',
      period: 6,
      group: 11,
      description: 'Благороден метал, използван в бижута и електроника.',
      position: { row: 6, col: 11 }
   },
   {
      number: 80,
      symbol: 'Hg',
      name: 'Живак',
      mass: '200.59',
      category: 'transitionmetal',
      period: 6,
      group: 12,
      description: 'Течен при стайна температура; използван в термометри и лампи.',
      position: { row: 6, col: 12 }
   },
   {
      number: 81,
      symbol: 'Tl',
      name: 'Талий',
      mass: '204.38',
      category: 'post-transitionmetal',
      period: 6,
      group: 13,
      description: 'Токсичен метал, използван в електроника и стъкло.',
      position: { row: 6, col: 13 }
   },
   {
      number: 82,
      symbol: 'Pb',
      name: 'Олово',
      mass: '207.2',
      category: 'post-transitionmetal',
      period: 6,
      group: 14,
      description: 'Мек тежък метал, използван в батерии и защита от радиация.',
      position: { row: 6, col: 14 }
   },
   {
      number: 83,
      symbol: 'Bi',
      name: 'Бисмут',
      mass: '208.98',
      category: 'post-transitionmetal',
      period: 6,
      group: 15,
      description: 'Безопасен тежък метал, използван в козметика и лекарства.',
      position: { row: 6, col: 15 }
   },
   {
      number: 84,
      symbol: 'Po',
      name: 'Полоний',
      mass: '209',
      category: 'post-transitionmetal',
      period: 6,
      group: 16,
      description: 'Радиоактивен елемент, открит от Мария Кюри.',
      position: { row: 6, col: 16 }
   },
   {
      number: 85,
      symbol: 'At',
      name: 'Астат',
      mass: '210',
      category: 'halogen',
      period: 6,
      group: 17,
      description: 'Изключително рядък радиоактивен халоген.',
      position: { row: 6, col: 17 }
   },
   {
      number: 86,
      symbol: 'Rn',
      name: 'Радон',
      mass: '222',
      category: 'noble-gas',
      period: 6,
      group: 18,
      description: 'Радиоактивен инертен газ, срещан в земната кора.',
      position: { row: 6, col: 18 }
   },
   {
      number: 87,
      symbol: 'Fr',
      name: 'Франций',
      mass: '223',
      category: 'alkali metal',
      period: 7,
      group: 1,
      description: 'Изключително рядък и радиоактивен алкален метал.',
      position: { row: 7, col: 1 }
   },
   {
      number: 88,
      symbol: 'Ra',
      name: 'Радий',
      mass: '226',
      category: 'alkaline',
      period: 7,
      group: 2,
      description: 'Силен радиоактивен елемент, открит от Кюри.',
      position: { row: 7, col: 2 }
   },
   {
      number: 89,
      symbol: 'Ac',
      name: 'Актиний',
      mass: '227',
      category: 'actinide',
      period: 7,
      group: 3,
      description: 'Начало на актинидите; силно радиоактивен.',
      position: { row: 10, col: 3 }
   },
   {
      number: 90,
      symbol: 'Th',
      name: 'Торий',
      mass: '232.04',
      category: 'actinide',
      period: 7,
      group: 4,
      description: 'Използван като гориво в ядрени реактори.',
      position: { row: 10, col: 4 }
   },
   {
      number: 91,
      symbol: 'Pa',
      name: 'Протактиний',
      mass: '231.04',
      category: 'actinide',
      period: 7,
      group: 5,
      description: 'Редък и радиоактивен елемент, използван в изследвания.',
      position: { row: 10, col: 5 }
   },
   {
      number: 92,
      symbol: 'U',
      name: 'Уран',
      mass: '238.03',
      category: 'actinide',
      period: 7,
      group: 6,
      description: 'Използван като гориво в ядрени електроцентрали.',
      position: { row: 10, col: 6 }
   },
   {
      number: 93,
      symbol: 'Np',
      name: 'Нептуний',
      mass: '237',
      category: 'actinide',
      period: 7,
      group: 7,
      description: 'Получен от уран; използван в ядрени изследвания.',
      position: { row: 10, col: 7 }
   },
   {
      number: 94,
      symbol: 'Pu',
      name: 'Плутоний',
      mass: '244',
      category: 'actinide',
      period: 7,
      group: 8,
      description: 'Използван в ядрено оръжие и реактори.',
      position: { row: 10, col: 8 }
   },
   {
      number: 95,
      symbol: 'Am',
      name: 'Америций',
      mass: '243',
      category: 'actinide',
      period: 7,
      group: 9,
      description: 'Използван в детектори за дим и изследвания.',
      position: { row: 10, col: 9 }
   },
   {
      number: 96,
      symbol: 'Cm',
      name: 'Кюрий',
      mass: '247',
      category: 'actinide',
      period: 7,
      group: 10,
      description: 'Открит от семейство Кюри; радиоактивен източник на топлина.',
      position: { row: 10, col: 10 }
   },
   {
      number: 97,
      symbol: 'Bk',
      name: 'Беркелий',
      mass: '247',
      category: 'actinide',
      period: 7,
      group: 11,
      description: 'Синтетичен елемент, използван само за научни цели.',
      position: { row: 10, col: 11 }
   },
   {
      number: 98,
      symbol: 'Cf',
      name: 'Калифорний',
      mass: '251',
      category: 'actinide',
      period: 7,
      group: 12,
      description: 'Използван в ядрени реактори и сканиране на материали.',
      position: { row: 10, col: 12 }
   },
   {
      number: 99,
      symbol: 'Es',
      name: 'Айнщайний',
      mass: '252',
      category: 'actinide',
      period: 7,
      group: 13,
      description: 'Кръстен на Айнщайн; използван само в изследвания.',
      position: { row: 10, col: 13 }
   },
   {
      number: 100,
      symbol: 'Fm',
      name: 'Фермий',
      mass: '257',
      category: 'actinide',
      period: 7,
      group: 14,
      description: 'Синтетичен елемент, получен при ядрени експлозии.',
      position: { row: 10, col: 14 }
   },
   {
      number: 101,
      symbol: 'Md',
      name: 'Менделевий',
      mass: '258',
      category: 'actinide',
      period: 7,
      group: 15,
      description: 'Кръстен на Менделеев; използван само в лаборатории.',
      position: { row: 10, col: 15 }
   },
   {
      number: 102,
      symbol: 'No',
      name: 'Нобелий',
      mass: '259',
      category: 'actinide',
      period: 7,
      group: 16,
      description: 'Кръстен на Алфред Нобел; радиоактивен и рядък.',
      position: { row: 10, col: 16 }
   },
   {
      number: 103,
      symbol: 'Lr',
      name: 'Лоуренсий',
      mass: '266',
      category: 'actinide',
      period: 7,
      group: 17,
      description: 'Последният актинид, открит в лаборатория.',
      position: { row: 10, col: 17 }
   },
   {
      number: 104,
      symbol: 'Rf',
      name: 'Ръдърфордий',
      mass: '267',
      category: 'transitionmetal',
      period: 7,
      group: 4,
      description: 'Синтетичен, тежък и радиоактивен елемент.',
      position: { row: 7, col: 4 }
   },
   {
      number: 105,
      symbol: 'Db',
      name: 'Дубний',
      mass: '270',
      category: 'transitionmetal',
      period: 7,
      group: 5,
      description: 'Открит в Дубна, Русия; изключително нестабилен.',
      position: { row: 7, col: 5 }
   },
   {
      number: 106,
      symbol: 'Sg',
      name: 'Сиборгий',
      mass: '271',
      category: 'transitionmetal',
      period: 7,
      group: 6,
      description: 'Кръстен на учения Глен Сиборг; силно радиоактивен.',
      position: { row: 7, col: 6 }
   },
   {
      number: 107,
      symbol: 'Bh',
      name: 'Борий',
      mass: '270',
      category: 'transitionmetal',
      period: 7,
      group: 7,
      description: 'Кръстен на Бор; синтетичен и нестабилен елемент.',
      position: { row: 7, col: 7 }
   },
   {
      number: 108,
      symbol: 'Hs',
      name: 'Хасий',
      mass: '277',
      category: 'transitionmetal',
      period: 7,
      group: 8,
      description: 'Синтетичен елемент, живее само части от секундата.',
      position: { row: 7, col: 8 }
   },
   {
      number: 109,
      symbol: 'Mt',
      name: 'Майтнерий',
      mass: '278',
      category: 'transitionmetal',
      period: 7,
      group: 9,
      description: 'Кръстен на физичката Лиза Майтнер; изключително нестабилен.',
      position: { row: 7, col: 9 }
   },
   {
      number: 110,
      symbol: 'Ds',
      name: 'Дармщатий',
      mass: '281',
      category: 'transitionmetal',
      period: 7,
      group: 10,
      description: 'Открит в Дармщат, Германия; живее милисекунди.',
      position: { row: 7, col: 10 }
   },
   {
      number: 111,
      symbol: 'Rg',
      name: 'Рьонтгений',
      mass: '282',
      category: 'transitionmetal',
      period: 7,
      group: 11,
      description: 'Кръстен на Вилхелм Рьонтген; изкуствен елемент.',
      position: { row: 7, col: 11 }
   },
   {
      number: 112,
      symbol: 'Cn',
      name: 'Коперниций',
      mass: '285',
      category: 'transitionmetal',
      period: 7,
      group: 12,
      description: 'Кръстен на Коперник; силно радиоактивен и краткотраен.',
      position: { row: 7, col: 12 }
   },
   {
      number: 113,
      symbol: 'Nh',
      name: 'Нихоний',
      mass: '286',
      category: 'post-transitionmetal',
      period: 7,
      group: 13,
      description: 'Открит в Япония; живее само мигновено.',
      position: { row: 7, col: 13 }
   },
   {
      number: 114,
      symbol: 'Fl',
      name: 'Фльоровий',
      mass: '289',
      category: 'post-transitionmetal',
      period: 7,
      group: 14,
      description: 'Кръстен на руски физик; тежък и нестабилен.',
      position: { row: 7, col: 14 }
   },
   {
      number: 115,
      symbol: 'Mc',
      name: 'Московий',
      mass: '290',
      category: 'post-transitionmetal',
      period: 7,
      group: 15,
      description: 'Кръстен на Москва; синтетичен и радиоактивен.',
      position: { row: 7, col: 15 }
   },
   {
      number: 116,
      symbol: 'Lv',
      name: 'Ливерморий',
      mass: '293',
      category: 'post-transitionmetal',
      period: 7,
      group: 16,
      description: 'Кръстен на Ливермор; изключително краткотраен.',
      position: { row: 7, col: 16 }
   },
   {
      number: 117,
      symbol: 'Ts',
      name: 'Тенесин',
      mass: '294',
      category: 'halogen',
      period: 7,
      group: 17,
      description: 'Синтетичен халоген, открит през 2010 година.',
      position: { row: 7, col: 17 }
   },
   {
      number: 118,
      symbol: 'Og',
      name: 'Оганесон',
      mass: '294',
      category: 'noble-gas',
      period: 7,
      group: 18,
      description: 'Най-тежкият елемент; може би твърд при стайна температура.',
      position: { row: 7, col: 18 }
   }

];

console.log(`✅ Зареде${elements.length} елемента`);

// ============================================
// СЕДМИЦА 5: TODO - ГЛОБАЛНИ ПРОМЕНЛИВИ
// ============================================

/*
Инструкции:
Създайте следните променливи с let:

1. currentFilter = 'all'        // Текущ филтър
2. searchTerm = ''               // Текст за търсене
3. quizActive = false            // Дали викторината е активна
4. currentQuizQuestion = 0       // Номер на текущия въпрос
5. quizScore = 0                 // Точки във викторината
6. quizElements = []             // Масив с елементи за викторината
*/

// TODO: Създайте глобалните променливи тук
let currentFilter = 'all';
let searchTerm = '';
let quizActive = false;
let currentQuizQuestion = 0;
let quizScore = 0;
let quizElements = [];
console.log("✅ Глобалните променливи са създадени");


// ============================================
// СЕДМИЦА 5: TODO - DOM ЕЛЕМЕНТИ
// ============================================

/*
Инструкции:
Свържете HTML елементите използвайки document.getElementById():

const periodicTableEl = document.getElementById('periodicTable');
const filterTypeEl = document.getElementById('filterType');
const searchInputEl = document.getElementById('searchInput');
const visibleCountEl = document.getElementById('visibleCount');
const elementDetailsEl = document.getElementById('elementDetails');
const closeDetailsBtn = document.getElementById('closeDetails');
const startQuizBtn = document.getElementById('startQuiz');
const quizGameEl = document.getElementById('quizGame');

За детайлите:
const detailName = document.getElementById('detailName');
const detailNumber = document.getElementById('detailNumber');
const detailSymbol = document.getElementById('detailSymbol');
const detailMass = document.getElementById('detailMass');
const detailCategory = document.getElementById('detailCategory');
const detailPeriod = document.getElementById('detailPeriod');
const detailGroup = document.getElementById('detailGroup');
const detailDescription = document.getElementById('detailDescription');

За викторината:
const quizQuestionEl = document.getElementById('quizQuestion');
const quizScoreEl = document.getElementById('quizScore');
const quizPromptEl = document.getElementById('quizPrompt');
const quizElementNumberEl = document.getElementById('quizElementNumber');
const quizElementSymbolEl = document.getElementById('quizElementSymbol');
const quizElementNameEl = document.getElementById('quizElementName');
const quizOptionsEl = document.getElementById('quizOptions');
const quizFeedbackEl = document.getElementById('quizFeedback');
*/

// TODO: Свържете основните DOM елементи тук
const periodicTableEl = document.getElementById('periodicTable');
const filterTypeEl = document.getElementById('filterType');
const searchInputEl = document.getElementById('searchInput');
const visibleCountEl = document.getElementById('visibleCount');
const elementDetailsEl = document.getElementById('elementDetails');
const closeDetailsBtn = document.getElementById('closeDetails');
const startQuizBtn = document.getElementById('startQuiz');
const quizGameEl = document.getElementById('quizGame');

// TODO: Свържете детайлните DOM елементи тук
const detailName = document.getElementById('detailName');
const detailNumber = document.getElementById('detailNumber');
const detailSymbol = document.getElementById('detailSymbol');
const detailMass = document.getElementById('detailMass');
const detailCategory = document.getElementById('detailCategory');
const detailPeriod = document.getElementById('detailPeriod');
const detailGroup = document.getElementById('detailGroup');
const detailDescription = document.getElementById('detailDescription');

// TODO: Свържете викторина DOM елементи тук
const quizQuestionEl = document.getElementById('quizQuestion');
const quizScoreEl = document.getElementById('quizScore');
const quizPromptEl = document.getElementById('quizPrompt');
const quizElementNumberEl = document.getElementById('quizElementNumber');
const quizElementSymbolEl = document.getElementById('quizElementSymbol');
const quizElementNameEl = document.getElementById('quizElementName');
const quizOptionsEl = document.getElementById('quizOptions');
const quizFeedbackEl = document.getElementById('quizFeedback');

console.log("✅ DOM елементите са свързани");

// ============================================
// СЕДМИЦА 6: TODO - ФУНКЦИЯ ЗА РЕНДЕРИРАНЕ
// ============================================

/*
Инструкции за функция renderPeriodicTable():

1. Изчистете periodicTableEl: periodicTableEl.innerHTML = '';

2. Обходете масива elements с for цикъл:
   for (let i = 0; i < elements.length; i++) {
       const element = elements[i];
       // ...
   }

3. За всеки елемент създайте div:
   const elementDiv = document.createElement('div');

4. Задайте класове:
   elementDiv.className = 'element ' + element.category;

5. Задайте Grid позиция:
   elementDiv.style.gridRow = element.position.row;
   elementDiv.style.gridColumn = element.position.col;

6. Задайте dataset атрибути:
   elementDiv.dataset.number = element.number;
   elementDiv.dataset.symbol = element.symbol;
   elementDiv.dataset.name = element.name;
   elementDiv.dataset.category = element.category;

7. Създайте HTML съдържание:
   elementDiv.innerHTML = `
       <div class="element-number">${element.number}</div>
       <div class="element-symbol">${element.symbol}</div>
       <div class="element-name">${element.name}</div>
       <div class="element-mass">${element.mass}</div>
   `;

8. Добавете click event:
   elementDiv.addEventListener('click', function() {
       showElementDetails(element);
   });

9. Добавете към таблицата:
   periodicTableEl.appendChild(elementDiv);

10. След цикъла, обновете броя:
    updateVisibleCount();
*/

function renderPeriodicTable() {
   console.log("🎨 Рендериране на таблицата...");

   // TODO: Изчистете periodicTableEl
   periodicTableEl.innerHTML = '';

   // TODO: Направете for цикъл през elements
   for (let i = 0; i < elements.length; i++) {


      // TODO: Вземете текущия елемент
      const element = elements[i];

      // TODO: Създайте div елемент
      const elementDiv = document.createElement('div');

      // TODO: Задайте className
      elementDiv.className = 'element ' + element.category;

      // TODO: Задайте gridRow и gridColumn
      elementDiv.style.gridRow = element.position.row;
      elementDiv.style.gridColumn = element.position.col;

      // TODO: Задайте dataset атрибути
      elementDiv.dataset.number = element.number;
      elementDiv.dataset.symbol = element.symbol;
      elementDiv.dataset.name = element.name;
      elementDiv.dataset.category = element.category;

      // TODO: Задайте innerHTML
      elementDiv.innerHTML = `
      <div class="element-number">${element.number}</div>
      <div class="element-symbol">${element.symbol}</div>
      <div class="element-name">${element.name}</div>
      <div class="element-mass">${element.mass}</div>
    `;

      // TODO: Добавете click event listener
      elementDiv.addEventListener('click', function () {
         showElementDetails(element);
      });

      // TODO: Добавете към periodicTableEl
      periodicTableEl.appendChild(elementDiv);
   }

   console.log("✅ Таблицата е рендерирана");
}

// ============================================
// СЕДМИЦА 7: TODO - ПОКАЗВАНЕ НА ДЕТАЙЛИ
// ============================================

/*
Инструкции за функция showElementDetails(element):

1. Попълнете всички полета с данни от element обекта:
   detailName.textContent = element.name;
   detailNumber.textContent = element.number;
   detailSymbol.textContent = element.symbol;
   detailMass.textContent = element.mass;
   detailPeriod.textContent = element.period;
   detailGroup.textContent = element.group;
   detailDescription.textContent = element.description;

2. За категорията използвайте switch за превод:
   switch(element.category) {
       case 'nonmetal':
           detailCategory.textContent = 'Неметал';
           break;
       case 'transitionmetal':
           detailCategory.textContent = 'Преходен метал';
           break;
       case 'post-transitionmetal':
           detailCategory.textContent = 'Следпреходен метал';
           break;
       // ... останалите категории
   }

3. Scroll до детайлите:
   elementDetailsEl.scrollIntoView({ behavior: 'smooth' });
*/

function showElementDetails(element) {
   console.log("📋 Показване на детайли за:", element.name);

   // TODO: Попълнете detailName
   detailName.textContent = element.name;

   // TODO: Попълнете detailNumber
   detailNumber.textContent = element.number;

   // TODO: Попълнете detailSymbol
   detailSymbol.textContent = element.symbol;

   // TODO: Попълнете detailMass
   detailMass.textContent = element.mass;

   // TODO: Попълнете detailPeriod
   detailPeriod.textContent = element.period;

   // TODO: Попълнете detailGroup
   detailGroup.textContent = element.group;

   // TODO: Попълнете detailDescription
   detailDescription.textContent = element.description;

   // TODO: Използвайте switch за detailCategory
   switch (element.category) {
      case 'nonmetal':
         detailCategory.textContent = 'Неметал';
         break;
      case 'transitionmetal':
         detailCategory.textContent = 'Преходен метал';
         break;
      case 'post-transitionmetal':
         detailCategory.textContent = 'Следпреходен метал';
         break;
      case 'metalloid':
         detailCategory.textContent = 'Металоид';
         break;
      case 'noble-gas':
         detailCategory.textContent = 'Благороден газ';
         break;
      case 'alkali metal':
         detailCategory.textContent = 'Алкален метал';
         break;
      case 'alkaline':
         detailCategory.textContent = 'Алкалоземен метал';
         break;
      case 'halogen':
         detailCategory.textContent = 'Халоген';
         break;
      case 'lanthanide':
         detailCategory.textContent = 'Лантаноид';
         break;
      case 'actinide':
         detailCategory.textContent = 'Актиноид';
         break;
      default:
         detailCategory.textContent = element.category;
   }

   // TODO: Scroll до елемента
   elementDetailsEl.scrollIntoView({ behavior: 'smooth' });
}


// ============================================
// СЕДМИЦА 7: TODO - ФИЛТРИРАНЕ
// ============================================

/*
Инструкции за функция filterElements():

1. Вземете всички елементи:
   const allElements = document.querySelectorAll('.element');

2. Нулирайте броя: let visibleCount = 0;

3. Обходете с for цикъл:
   for (let i = 0; i < allElements.length; i++) {
       const elementDiv = allElements[i];
       // ...
   }

4. Вземете данните:
   const category = elementDiv.dataset.category;
   const name = elementDiv.dataset.name.toLowerCase();
   const symbol = elementDiv.dataset.symbol.toLowerCase();

5. Проверете филтъра с if-else:
   const categoryMatch = (currentFilter === 'all' || category === currentFilter);

6. Проверете търсенето:
   const searchMatch = (searchTerm === '' || name.includes(searchTerm) || symbol.includes(searchTerm));

7. Покажете/скрийте елемента:
   if (categoryMatch && searchMatch) {
       elementDiv.classList.remove('hidden');
       visibleCount++;
   } else {
       elementDiv.classList.add('hidden');
   }

8. Обновете броя:
   visibleCountEl.textContent = visibleCount;
*/

function filterElements() {
   console.log("🔍 Филтриране...");

   // TODO: Вземете всички елементи
   const allElements = document.querySelectorAll('.element');

   // TODO: Нулирайте visibleCount
   let visibleCount = 0;

   // TODO: Направете for цикъл
   for (let i = 0; i < allElements.length; i++) {

      // TODO: Вземете текущия div
      const elementDiv = allElements[i];

      // TODO: Вземете category, name, symbol от dataset
      const category = elementDiv.dataset.category;
      const name = elementDiv.dataset.name.toLowerCase();
      const symbol = elementDiv.dataset.symbol.toLowerCase();

      // TODO: Проверете categoryMatch
      const categoryMatch = (currentFilter === 'all' || category === currentFilter);

      // TODO: Проверете searchMatch  
      const searchMatch = (searchTerm === '' || name.includes(searchTerm) || symbol.includes(searchTerm));

      // TODO: Използвайте if-else за показване/скриване
      if (categoryMatch && searchMatch) {
         elementDiv.classList.remove('hidden');
         visibleCount++;
      } else {
         elementDiv.classList.add('hidden');
      }
   }
   // TODO: Обновете visibleCountEl
   visibleCountEl.textContent = visibleCount;
}

// ============================================
// СЕДМИЦА 7: TODO - ОБНОВЯВАНЕ НА БРОЯ
// ============================================

/*
Инструкции за функция updateVisibleCount():

1. Вземете всички елементи които НЕ са hidden:
   const visible = document.querySelectorAll('.element:not(.hidden)');

2. Обновете текста:
   visibleCountEl.textContent = visible.length;
*/

function updateVisibleCount() {
   // TODO: Вземете видимите елементи
   const visible = document.querySelectorAll('.element:not(.hidden)');

   // TODO: Обновете текста
   visibleCountEl.textContent = visible.length;
}


// ============================================
// СЕДМИЦА 9: TODO - СТАРТ НА ВИКТОРИНА
// ============================================

/*
Инструкции за функция startQuiz():

1. Нулирайте променливите:
   quizActive = true;
   currentQuizQuestion = 0;
   quizScore = 0;

2. Избeрете 10 случайни елемента:
   quizElements = getRandomElements(10);

3. Обновете UI:
   quizScoreEl.textContent = '0';
   quizQuestionEl.textContent = '1';

4. Покажете викторината:
   startQuizBtn.style.display = 'none';
   quizGameEl.style.display = 'block';

5. Покажете първия въпрос:
   showQuizQuestion();
*/

function startQuiz() {
   console.log("🎮 Стартиране на викторина...");

   // TODO: Нулирайте променливите
   quizActive = true;
   currentQuizQuestion = 0;
   quizScore = 0;

   // TODO: Вземете случайни елементи
   quizElements = getRandomElements(10);

   // TODO: Обновете UI
   quizScoreEl.textContent = '0';
   quizQuestionEl.textContent = '1';

   // TODO: Покажете викторината
   startQuizBtn.style.display = 'none';
   quizGameEl.style.display = 'block';

   // TODO: Покажете първия въпрос
   showQuizQuestion();
}


// ============================================
// СЕДМИЦА 9: TODO - СЛУЧАЙНИ ЕЛЕМЕНТИ
// ============================================

/*
Инструкции за функция getRandomElements(count):

1. Създайте копие на масива:
   const shuffled = [...elements];

2. Разбъркайте с Fisher-Yates алгоритъм:
   for (let i = shuffled.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       const temp = shuffled[i];
       shuffled[i] = shuffled[j];
       shuffled[j] = temp;
   }

3. Върнете първите count елемента:
   return shuffled.slice(0, count);
*/

function getRandomElements(count) {
   // TODO: Създайте копие на elements
   const shuffled = [...elements];

   // TODO: Разбъркайте с Fisher-Yates
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
   }

   // TODO: Върнете първите count елемента
   return shuffled.slice(0, count);
}


// ============================================
// СЕДМИЦА 9: TODO - ПОКАЗВАНЕ НА ВЪПРОС
// ============================================

/*
Инструкции за функция showQuizQuestion():

1. Проверете дали викторината е завършена:
   if (currentQuizQuestion >= quizElements.length) {
       showQuizResults();
       return;
   }

2. Вземете текущия елемент:
   const element = quizElements[currentQuizQuestion];

3. Обновете номера на въпроса:
   quizQuestionEl.textContent = currentQuizQuestion + 1;

4. Изчистете feedback-а:
   quizFeedbackEl.textContent = '';
   quizFeedbackEl.className = 'quiz-feedback';

5. Изберете тип въпрос (случайно):
   const questionType = Math.random() < 0.5 ? 'symbol' : 'name';

6. Ако е 'symbol':
   - quizPromptEl.textContent = 'Какъв е символът на този елемент?';
   - quizElementNumberEl.textContent = element.number;
   - quizElementSymbolEl.textContent = '?';
   - quizElementNameEl.textContent = element.name;
   - options = generateSymbolOptions(element);
   - renderQuizOptions(options, element.symbol);

7. Ако е 'name':
   - quizPromptEl.textContent = 'Кой е този елемент?';
   - quizElementNumberEl.textContent = element.number;
   - quizElementSymbolEl.textContent = element.symbol;
   - quizElementNameEl.textContent = '?';
   - options = generateNameOptions(element);
   - renderQuizOptions(options, element.name);
*/

function showQuizQuestion() {
   // TODO: Проверете дали викторината е завършена
   if (currentQuizQuestion >= quizElements.length) {
      showQuizResults();
      return;
   }

   // TODO: Вземете текущия елемент
   const element = quizElements[currentQuizQuestion];

   // TODO: Обновете quizQuestionEl
   quizQuestionEl.textContent = currentQuizQuestion + 1;

   // TODO: Изчистете feedback
   quizFeedbackEl.textContent = '';
   quizFeedbackEl.className = 'quiz-feedback';

   // TODO: Изберете тип въпрос
   const questionType = Math.random() < 0.5 ? 'symbol' : 'name';

   // TODO: Използвайте if-else за двата типа
   if (questionType === 'symbol') {
      quizPromptEl.textContent = 'Какъв е символът на този елемент?';
      quizElementNumberEl.textContent = element.number;
      quizElementSymbolEl.textContent = '?';
      quizElementNameEl.textContent = element.name;
      const options = generateSymbolOptions(element);
      renderQuizOptions(options, element.symbol);
   } else {
      quizPromptEl.textContent = 'Кой е този елемент?';
      quizElementNumberEl.textContent = element.number;
      quizElementSymbolEl.textContent = element.symbol;
      quizElementNameEl.textContent = '?';
      const options = generateNameOptions(element);
      renderQuizOptions(options, element.name);
   }
}

// ============================================
// СЕДМИЦА 9: TODO - ГЕНЕРИРАНЕ НА ОПЦИИ
// ============================================

/*
Инструкции за функция generateSymbolOptions(correctElement):

1. Създайте масив с правилния отговор:
   const options = [correctElement.symbol];

2. Добавете 3 грешни с while:
   while (options.length < 4) {
       const randomElement = elements[Math.floor(Math.random() * elements.length)];
       if (!options.includes(randomElement.symbol)) {
           options.push(randomElement.symbol);
       }
   }

3. Разбъркайте опциите:
   return shuffleArray(options);
*/

function generateSymbolOptions(correctElement) {
   // TODO: Създайте масив с правилния отговор
   const options = [correctElement.symbol];

   // TODO: Добавете 3 грешни опции
   while (options.length < 4) {
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      if (!options.includes(randomElement.symbol)) {
         options.push(randomElement.symbol);
      }
   }

   // TODO: Разбъркайте и върнете
   return shuffleArray(options);
}

/*
Инструкции за функция generateNameOptions(correctElement):
Същото като generateSymbolOptions, но с element.name
*/

function generateNameOptions(correctElement) {
   // TODO: Създайте масив с правилния отговор
   const options = [correctElement.name];

   // TODO: Добавете 3 грешни опции
   while (options.length < 4) {
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      if (!options.includes(randomElement.name)) {
         options.push(randomElement.name);
      }
   }

   // TODO: Разбъркайте и върнете
   return shuffleArray(options);
}

/*
Инструкции за функция shuffleArray(array):

1. Създайте копие: const shuffled = [...array];

2. Разбъркайте с Fisher-Yates:
   for (let i = shuffled.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       const temp = shuffled[i];
       shuffled[i] = shuffled[j];
       shuffled[j] = temp;
   }

3. Върнете: return shuffled;
*/

function shuffleArray(array) {
   // TODO: Създайте копие
   const shuffled = [...array];

   // TODO: Разбъркайте
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
   }

   // TODO: Върнете
   return shuffled;
}

// ============================================
// СЕДМИЦА 9: TODO - РЕНДЕРИРАНЕ НА ОПЦИИ
// ============================================

/*
Инструкции за функция renderQuizOptions(options, correctAnswer):

1. Изчистете: quizOptionsEl.innerHTML = '';

2. Обходете с for:
   for (let i = 0; i < options.length; i++) {
       // ...
   }

3. За всяка опция:
   - Създайте div: const optionDiv = document.createElement('div');
   - Задайте клас: optionDiv.className = 'quiz-option';
   - Задайте текст: optionDiv.textContent = options[i];
   - Добавете click event:
     optionDiv.addEventListener('click', function() {
         checkAnswer(options[i], correctAnswer, optionDiv);
     });
   - Добавете: quizOptionsEl.appendChild(optionDiv);
*/

function renderQuizOptions(options, correctAnswer) {
   // TODO: Изчистете quizOptionsEl
   quizOptionsEl.innerHTML = '';

   // TODO: Направете for цикъл
   for (let i = 0; i < options.length; i++) {

      // TODO: Създайте div
      const optionDiv = document.createElement('div');

      // TODO: Задайте className
      optionDiv.className = 'quiz-option';

      // TODO: Задайте textContent
      optionDiv.textContent = options[i];

      // TODO: Добавете click event
      optionDiv.addEventListener('click', function () {
         checkAnswer(options[i], correctAnswer, optionDiv);
      });

      // TODO: Добавете към quizOptionsEl
      quizOptionsEl.appendChild(optionDiv);
   }
}

// ============================================
// СЕДМИЦА 9: TODO - ПРОВЕРКА НА ОТГОВОР
// ============================================

/*
Инструкции за функция checkAnswer(selectedAnswer, correctAnswer, optionDiv):
 
1. Вземете всички опции:
   const allOptions = document.querySelectorAll('.quiz-option');
 
2. Блокирайте всички опции:
   for (let i = 0; i < allOptions.length; i++) {
       allOptions[i].style.pointerEvents = 'none';
   }
 
3. Проверете с if-else:
   if (selectedAnswer === correctAnswer) {
       // Правилен отговор
       optionDiv.classList.add('correct');
       quizFeedbackEl.className = 'quiz-feedback correct';
       quizFeedbackEl.textContent = '✓ Браво! Верен отговор!';
       quizScore++;
   } else {
       // Грешен отговор
       optionDiv.classList.add('incorrect');
       quizFeedbackEl.className = 'quiz-feedback incorrect';
       quizFeedbackEl.textContent = '✗ Грешка! Верният отговор е: ' + correctAnswer;
       
       // Оцветете правилния отговор
       for (let i = 0; i < allOptions.length; i++) {
           if (allOptions[i].textContent === correctAnswer) {
               allOptions[i].classList.add('correct');
           }
       }
   }
 
4. Обновете точките:
   quizScoreEl.textContent = quizScore;
 
5. След 2 секунди - следващ въпрос:
   setTimeout(function() {
       currentQuizQuestion++;
       showQuizQuestion();
   }, 2000);
*/

function checkAnswer(selectedAnswer, correctAnswer, optionDiv) {
   // TODO: Вземете всички опции
   const allOptions = document.querySelectorAll('.quiz-option');

   // TODO: Блокирайте всички опции
   for (let i = 0; i < allOptions.length; i++) {
      allOptions[i].style.pointerEvents = 'none';
   }

   // TODO: Проверете с if-else
   if (selectedAnswer === correctAnswer) {

      // TODO: Правилен отговор
      optionDiv.classList.add('correct');
      quizFeedbackEl.className = 'quiz-feedback correct';
      quizFeedbackEl.textContent = '✓ Браво! Верен отговор!';
      quizScore++;
   } else {

      // TODO: Грешен отговор
      optionDiv.classList.add('incorrect');
      quizFeedbackEl.className = 'quiz-feedback incorrect';
      quizFeedbackEl.textContent = '✗ Грешка! Верният отговор е: ' + correctAnswer;

      // TODO: Оцветете правилния отговор
      for (let i = 0; i < allOptions.length; i++) {
         if (allOptions[i].textContent === correctAnswer) {
            allOptions[i].classList.add('correct');
         }
      }
   }

   // TODO: Обновете quizScoreEl
   quizScoreEl.textContent = quizScore;

   // TODO: След 2 секунди - следващ въпрос
   setTimeout(function () {
      currentQuizQuestion++;
      showQuizQuestion();
   }, 2000);

}

// ============================================
// СЕДМИЦА 10: TODO - РЕЗУЛТАТИ
// ============================================

/*
Инструкции за функция showQuizResults():
 
1. Изчистете опциите: quizOptionsEl.innerHTML = '';
 
2. Променете текста:
   quizPromptEl.textContent = 'Викторината завърши!';
   quizElementNumberEl.textContent = '';
   quizElementSymbolEl.textContent = '🎉';
   quizElementNameEl.textContent = '';
 
3. Изчислете процент:
   const percentage = (quizScore / quizElements.length) * 100;
 
4. Изберете съобщение с if-else:
   let message = '';
   if (percentage === 100) {
       message = '🏆 Перфектен резултат!';
   } else if (percentage >= 80) {
       message = '⭐ Отлично!';
   } else if (percentage >= 60) {
       message = '👍 Добър резултат!';
   } else {
       message = '📚 Трябва повече да практикуваш!';
   }
 
5. Покажете резултата:
   quizFeedbackEl.className = 'quiz-feedback correct';
   quizFeedbackEl.innerHTML = `
       <div style="font-size: 1.5rem; margin-bottom: 15px;">${message}</div>
       <div>Точки: ${quizScore} / ${quizElements.length} (${percentage.toFixed(0)}%)</div>
       <button class="btn-primary" style="margin-top: 20px;" onclick="resetQuiz()">Нова викторина</button>
   `;
*/

function showQuizResults() {
   // TODO: Изчистете quizOptionsEl
   quizOptionsEl.innerHTML = '';

   // TODO: Променете текстовете
   quizPromptEl.textContent = 'Викторината завърши!';
   quizElementNumberEl.textContent = '';
   quizElementSymbolEl.textContent = '🎉';
   quizElementNameEl.textContent = '';

   // TODO: Изчислете процента
   const percentage = (quizScore / quizElements.length) * 100;

   // TODO: Изберете съобщение с if-else
   let message = '';
   if (percentage === 100) {
      message = '🏆 Перфектен резултат!';
   } else if (percentage >= 80) {
      message = '⭐ Отлично!';
   } else if (percentage >= 60) {
      message = '👍 Добър резултат!';
   } else {
      message = '📚 Трябва повече да практикуваш!';
   }

   // TODO: Покажете резултата
   quizFeedbackEl.className = 'quiz-feedback correct';
   quizFeedbackEl.innerHTML = `
    <div style="font-size: 1.5rem; margin-bottom: 15px;">${message}</div>
    <div>Точки: ${quizScore} / ${quizElements.length} (${percentage.toFixed(0)}%)</div>
    <button class="btn-primary" style="margin-top: 20px;" onclick="resetQuiz()">Нова викторина</button>
  `;
}

// ============================================
// СЕДМИЦА 10: TODO - RESET НА ВИКТОРИНА
// ============================================

/*
Инструкции за функция resetQuiz():
 
1. Нулирайте променливите:
   quizActive = false;
 
2. Скрийте викторината:
   quizGameEl.style.display = 'none';
   startQuizBtn.style.display = 'block';
*/

function resetQuiz() {
   // TODO: Нулирайте quizActive
   quizActive = false;

   // TODO: Скрийте викторината
   quizGameEl.style.display = 'none';
   startQuizBtn.style.display = 'block';
}

// ============================================
// СЕДМИЦА 8: TODO - EVENT LISTENERS
// ============================================
/*
Инструкции за функция closeElementDetails():
 
1. Взимане на id:
   document.getElementById('detailName').textContent = 'Изберете елемент';
   document.getElementById('detailNumber').textContent = '-';
   document.getElementById('detailSymbol').textContent = '-';
   document.getElementById('detailMass').textContent = '-';
   document.getElementById('detailCategory').textContent = '-';
   document.getElementById('detailPeriod').textContent = '-';
   document.getElementById('detailGroup').textContent = '-';
   document.getElementById('detailDescription').textContent = 
   'Изберете елемент от таблицата за да видите детайли.';
*/
function closeElementDetails() {
   // TODO: Добавете кода за функцията тук
   document.getElementById('detailName').textContent = 'Изберете елемент';
   document.getElementById('detailNumber').textContent = '-';
   document.getElementById('detailSymbol').textContent = '-';
   document.getElementById('detailMass').textContent = '-';
   document.getElementById('detailCategory').textContent = '-';
   document.getElementById('detailPeriod').textContent = '-';
   document.getElementById('detailGroup').textContent = '-';
   document.getElementById('detailDescription').textContent =
      'Изберете елемент от таблицата за да видите детайли.';
}

/*
Инструкции за функция attachEventListeners():
 
1. Филтър:
   filterTypeEl.addEventListener('change', function(e) {
       currentFilter = e.target.value;
       filterElements();
   });
 
2. Търсене:
   searchInputEl.addEventListener('input', function(e) {
       searchTerm = e.target.value.toLowerCase();
       filterElements();
   });
 
3. Затваряне на детайли:
   closeDetailsBtn.addEventListener('click', function() {
       elementDetailsEl.scrollIntoView({ behavior: 'smooth' });
   });
 
4. Старт на викторина:
   startQuizBtn.addEventListener('click', startQuiz);
*/

function attachEventListeners() {
   console.log("🎧 Добавяне на event listeners...");

   // TODO: Добавете change event за filterTypeEl
   filterTypeEl.addEventListener('change', function (e) {
      currentFilter = e.target.value;
      filterElements();
   });

   // TODO: Добавете input event за searchInputEl
   searchInputEl.addEventListener('input', function (e) {
      searchTerm = e.target.value.toLowerCase();
      filterElements();
   });

   // TODO: Добавете click event за closeDetailsBtn
   closeDetailsBtn.addEventListener('click', function () {
      closeElementDetails();
      elementDetailsEl.scrollIntoView({ behavior: 'smooth' });
   });

   // TODO: Добавете click event за startQuizBtn
   startQuizBtn.addEventListener('click', startQuiz);

   console.log("✅ Event listeners са добавени");
}

// ============================================
// СЕДМИЦА 8: TODO - ИНИЦИАЛИЗАЦИЯ
// ============================================

/*
Инструкции за функция init():
 
1. Рендерирайте таблицата:
   renderPeriodicTable();
 
2. Добавете event listeners:
   attachEventListeners();
*/

function init() {
   console.log("🚀 Инициализация...");

   // TODO: Рендерирайте таблицата
   renderPeriodicTable();

   // TODO: Добавете event listeners
   attachEventListeners();

   console.log("✅ Приложението е готово!");
}

// ============================================
// СТАРТИРАНЕ НА ПРИЛОЖЕНИЕТО
// ============================================

// Стартирайте при зареждане на страницата
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', init);
} else {
   init();
}

console.log("🎉 JavaScript файлът е зареден!");
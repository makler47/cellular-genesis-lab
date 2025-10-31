import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    home: 'Главная',
    articles: 'Статьи',
    about: 'О нас',
    brandName: 'Success Together',
    navigation: 'Навигация',
    contacts: 'Контакты',
    email: 'Email',
    phone: 'Телефон',
    copyright: '© 2025 Success Together. Все права защищены.',
    footerDescription: 'Революционное питание на клеточном уровне для вашего здоровья и энергии.',
    articlesTitle: 'Статьи',
    articlesSubtitle: 'Глубокое погружение в мир клеточного питания 8-го поколения',
    science: 'Наука',
    health: 'Здоровье',
    education: 'Образование',
    biohacking: 'Биохакинг',
    readTime: 'мин',
    article1Title: 'Как Клеточное Питание Меняет Подход к Здоровью',
    article1Content: 'Открытие 8-го поколения питания открывает новую эру в понимании работы нашего организма на молекулярном уровне. Клеточное питание — это не просто употребление пищи, это целенаправленная доставка необходимых нутриентов непосредственно в клетки организма. Этот революционный подход позволяет организму работать на максимальной эффективности, восстанавливаясь и регенерируя на клеточном уровне. Современные исследования показывают, что правильное питание клеток может замедлить процессы старения, улучшить метаболизм и значительно повысить качество жизни. В отличие от традиционных подходов к питанию, которые фокусируются на калориях и макронутриентах, клеточное питание 8-го поколения учитывает биодоступность веществ, их синергетическое взаимодействие и способность проникать через клеточные мембраны.',
    article2Title: 'Энергия Митохондрий: Источник Вашей Жизненной Силы',
    article2Content: 'Митохондрии — это электростанции наших клеток, производящие энергию в виде АТФ (аденозинтрифосфата). Каждая клетка содержит от сотен до тысяч митохондрий, и их эффективность напрямую влияет на уровень нашей энергии, выносливость и общее самочувствие. Клеточное питание 8-го поколения специально разработано для оптимизации работы митохондрий, обеспечивая их необходимыми коферментами, антиоксидантами и питательными веществами. При правильном питании митохондрий наблюдается значительное увеличение энергетического потенциала организма, улучшение когнитивных функций и повышение физической работоспособности. Научные исследования демонстрируют, что поддержка митохондриального здоровья может предотвратить развитие многих возрастных заболеваний и существенно улучшить качество жизни.',
    article3Title: 'От БАДов к Питанию 8-го Поколения: Эволюция Нутрициологии',
    article3Content: 'История развития подходов к питанию насчитывает несколько поколений: от простых витаминов первого поколения до революционных клеточных технологий восьмого. Первое поколение включало базовые витамины и минералы, второе добавило аминокислоты, третье — антиоксиданты, четвертое — пробиотики. Пятое поколение принесло фитонутриенты, шестое — нутригеномику, седьмое — таргетную доставку. Восьмое поколение представляет собой квантовый скачок: это комплексный подход, объединяющий все предыдущие достижения с новейшими технологиями биодоступности и синергетического взаимодействия компонентов. Питание 8-го поколения учитывает индивидуальные особенности организма, генетические предрасположенности и текущее состояние здоровья, обеспечивая максимально персонализированный подход к оптимизации здоровья на клеточном уровне.',
    article4Title: 'Клинические Исследования: Доказанная Эффективность',
    article4Content: 'Результаты независимых клинических исследований, проведенных в ведущих научных центрах мира, убедительно подтверждают эффективность клеточного питания 8-го поколения. В рандомизированных двойных слепых исследованиях с участием более 5000 человек было зафиксировано улучшение биомаркеров здоровья у 87% участников. Наблюдалось снижение уровня воспалительных маркеров на 42%, улучшение митохондриальной функции на 53%, повышение антиоксидантной защиты на 61%. Участники отмечали увеличение энергии на 68%, улучшение качества сна на 71%, повышение когнитивных функций на 45%. Долгосрочные исследования (более 2 лет наблюдений) показали устойчивое улучшение показателей здоровья без развития толерантности или побочных эффектов.',
    article5Title: 'Восстановление После Стресса на Клеточном Уровне',
    article5Content: 'Современный стресс оказывает разрушительное воздействие на наши клетки, вызывая окислительный стресс, воспаление и митохондриальную дисфункцию. Хронический стресс приводит к истощению клеточных ресурсов, нарушению процессов восстановления и ускоренному старению. Обычное питание не способно компенсировать эти потери, так как стресс значительно увеличивает потребность организма в специфических нутриентах. Клеточное питание 8-го поколения содержит адаптогены, нейропротекторы и митохондриальные кофакторы, которые помогают клеткам эффективно справляться со стрессом. Этот подход не просто маскирует симптомы стресса, а восстанавливает клеточный гомеостаз, повышает стрессоустойчивость и активирует естественные механизмы восстановления организма.',
    article6Title: 'Биохакинг и Клеточное Питание: Синергия Технологий',
    article6Content: 'Биохакинг — это применение научных знаний и технологий для оптимизации работы организма. Соединение древней мудрости о питании с современными биохакинг-практиками создает мощную синергию для достижения максимальной эффективности организма. Клеточное питание 8-го поколения идеально интегрируется с биохакинг-протоколами, усиливая эффекты от тренировок, улучшая когнитивные функции и оптимизируя метаболизм. Комбинация правильного питания клеток с практиками интервального голодания, холодовой терапии, медитации и оптимизации сна создает условия для достижения пикового состояния организма. Современные биохакеры используют клеточное питание как фундамент для построения персонализированных протоколов оптимизации здоровья и долголетия.',
  },
  en: {
    home: 'Home',
    articles: 'Articles',
    about: 'About',
    brandName: 'Success Together',
    navigation: 'Navigation',
    contacts: 'Contacts',
    email: 'Email',
    phone: 'Phone',
    copyright: '© 2025 Success Together. All rights reserved.',
    footerDescription: 'Revolutionary cellular nutrition for your health and energy.',
    articlesTitle: 'Articles',
    articlesSubtitle: 'Deep dive into the world of 8th generation cellular nutrition',
    science: 'Science',
    health: 'Health',
    education: 'Education',
    biohacking: 'Biohacking',
    readTime: 'min',
    article1Title: 'How Cellular Nutrition Changes the Approach to Health',
    article1Content: 'The discovery of 8th generation nutrition opens a new era in understanding how our body works at the molecular level. Cellular nutrition is not just eating food, it is the targeted delivery of necessary nutrients directly to the body\'s cells. This revolutionary approach allows the body to work at maximum efficiency, restoring and regenerating at the cellular level. Modern research shows that proper cell nutrition can slow down the aging process, improve metabolism and significantly improve quality of life. Unlike traditional approaches to nutrition that focus on calories and macronutrients, 8th generation cellular nutrition takes into account the bioavailability of substances, their synergistic interaction and ability to penetrate cell membranes.',
    article2Title: 'Mitochondrial Energy: The Source of Your Life Force',
    article2Content: 'Mitochondria are the powerhouses of our cells, producing energy in the form of ATP (adenosine triphosphate). Each cell contains hundreds to thousands of mitochondria, and their efficiency directly affects our energy levels, endurance and overall well-being. 8th generation cellular nutrition is specifically designed to optimize mitochondrial function by providing them with necessary coenzymes, antioxidants and nutrients. With proper mitochondrial nutrition, there is a significant increase in the body\'s energy potential, improved cognitive function and increased physical performance. Scientific research demonstrates that supporting mitochondrial health can prevent the development of many age-related diseases and significantly improve quality of life.',
    article3Title: 'From Supplements to 8th Generation Nutrition: Evolution of Nutriciology',
    article3Content: 'The history of nutrition approaches spans several generations: from simple first-generation vitamins to revolutionary eighth-generation cellular technologies. The first generation included basic vitamins and minerals, the second added amino acids, the third - antioxidants, the fourth - probiotics. The fifth generation brought phytonutrients, the sixth - nutrigenomics, the seventh - targeted delivery. The eighth generation represents a quantum leap: it is a comprehensive approach combining all previous achievements with the latest technologies in bioavailability and synergistic interaction of components. 8th generation nutrition takes into account individual body characteristics, genetic predispositions and current health status, providing a maximally personalized approach to optimizing health at the cellular level.',
    article4Title: 'Clinical Research: Proven Effectiveness',
    article4Content: 'Results of independent clinical studies conducted at leading scientific centers worldwide convincingly confirm the effectiveness of 8th generation cellular nutrition. In randomized double-blind studies involving more than 5,000 people, improvement in health biomarkers was recorded in 87% of participants. There was a 42% reduction in inflammatory markers, 53% improvement in mitochondrial function, and 61% increase in antioxidant protection. Participants reported a 68% increase in energy, 71% improvement in sleep quality, and 45% enhancement in cognitive functions. Long-term studies (over 2 years of observation) showed sustained improvement in health indicators without development of tolerance or side effects.',
    article5Title: 'Recovery from Stress at the Cellular Level',
    article5Content: 'Modern stress has a destructive effect on our cells, causing oxidative stress, inflammation and mitochondrial dysfunction. Chronic stress leads to depletion of cellular resources, disruption of recovery processes and accelerated aging. Regular nutrition cannot compensate for these losses, as stress significantly increases the body\'s need for specific nutrients. 8th generation cellular nutrition contains adaptogens, neuroprotectors and mitochondrial cofactors that help cells effectively cope with stress. This approach doesn\'t just mask stress symptoms, but restores cellular homeostasis, increases stress resistance and activates the body\'s natural recovery mechanisms.',
    article6Title: 'Biohacking and Cellular Nutrition: Technology Synergy',
    article6Content: 'Biohacking is the application of scientific knowledge and technology to optimize body function. Combining ancient wisdom about nutrition with modern biohacking practices creates powerful synergy for achieving maximum body efficiency. 8th generation cellular nutrition integrates perfectly with biohacking protocols, enhancing effects from workouts, improving cognitive functions and optimizing metabolism. The combination of proper cellular nutrition with intermittent fasting, cold therapy, meditation and sleep optimization creates conditions for achieving peak body state. Modern biohackers use cellular nutrition as a foundation for building personalized health and longevity optimization protocols.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

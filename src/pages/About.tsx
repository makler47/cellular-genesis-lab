import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Наша Миссия",
      description: "Сделать революционное питание 8-го поколения доступным каждому, кто стремится к здоровью и долголетию.",
    },
    {
      icon: Lightbulb,
      title: "Инновации",
      description: "Мы используем последние научные достижения в области клеточной биологии и нутрициологии.",
    },
    {
      icon: Users,
      title: "Сообщество",
      description: "Более 50,000 людей уже изменили свою жизнь благодаря нашей технологии клеточного питания.",
    },
    {
      icon: Award,
      title: "Качество",
      description: "Все наши продукты проходят строжайший контроль качества и соответствуют международным стандартам.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                О Нас
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы — команда ученых, врачей и энтузиастов здорового образа жизни, 
              объединенных одной целью: революционизировать подход к питанию на клеточном уровне.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <Card className="border-2 border-border p-8 md:p-12 shadow-emerald">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Что Такое Питание 8-го Поколения?
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Питание 8-го поколения — это не просто новая формула или добавка. 
                    Это совершенно иной подход к пониманию того, как наш организм получает 
                    и использует энергию на самом фундаментальном уровне — уровне клеток.
                  </p>
                  <p>
                    В отличие от предыдущих поколений питательных добавок, которые работали 
                    на уровне систем органов, наша технология воздействует непосредственно 
                    на митохондрии — энергетические станции каждой клетки вашего тела.
                  </p>
                  <p>
                    Результат? Не просто временное улучшение самочувствия, а долгосрочная 
                    трансформация на клеточном уровне, которая влияет на все аспекты вашего 
                    здоровья: от энергии и ясности ума до восстановления и долголетия.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Наши Ценности
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index}
                    className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-emerald hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-emerald">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12">
              <CardContent className="p-0 text-center">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Присоединяйтесь к Революции в Питании
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Узнайте больше о питании 8-го поколения на нашей бесплатной 
                  онлайн-конференции и получите эксклюзивный подарок.
                </p>
                <button 
                  onClick={() => window.open('https://mrmclean1975.st.su/signup/', '_blank')}
                  className="gradient-primary text-white px-10 py-4 rounded-xl font-semibold shadow-emerald hover:shadow-glow transition-all duration-300 text-lg"
                >
                  Посетить конференцию и получить подарок 🎁
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

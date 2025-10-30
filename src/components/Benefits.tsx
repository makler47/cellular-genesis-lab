import { Battery, Brain, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Battery,
      title: "Энергия Клеток",
      description: "Питание на клеточном уровне восстанавливает естественные процессы производства энергии в митохондриях.",
    },
    {
      icon: Brain,
      title: "Ясность Мышления",
      description: "Улучшенное питание мозга приводит к повышению концентрации и когнитивных функций.",
    },
    {
      icon: Heart,
      title: "Здоровье Сердца",
      description: "Поддержка сердечно-сосудистой системы на уровне клеток для долгой и активной жизни.",
    },
    {
      icon: Zap,
      title: "Быстрое Восстановление",
      description: "Ускоренная регенерация тканей и восстановление после физических нагрузок.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Преимущества
            </span>{" "}
            Клеточного Питания
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Научно доказанные результаты, которые вы почувствуете с первых дней
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-emerald hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Елена Соколова",
      role: "Предприниматель, 42 года",
      content: "После 2 недель использования питания 8-го поколения я почувствовала невероятный прилив энергии. Больше никакой усталости к вечеру!",
      rating: 5,
    },
    {
      name: "Дмитрий Петров",
      role: "Спортсмен, 35 лет",
      content: "Восстановление после тренировок стало в разы быстрее. Это действительно работает на клеточном уровне, результаты видны сразу.",
      rating: 5,
    },
    {
      name: "Анна Волкова",
      role: "Врач-терапевт, 48 лет",
      content: "Как врач, я скептически отношусь к новинкам. Но здесь научный подход меня убедил. Рекомендую своим пациентам.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Реальные Истории
            </span>{" "}
            Изменений
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Тысячи людей уже испытали силу клеточного питания 8-го поколения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-emerald hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

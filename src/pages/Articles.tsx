import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Как Клеточное Питание Меняет Подход к Здоровью",
      excerpt: "Открытие 8-го поколения питания открывает новую эру в понимании работы нашего организма на молекулярном уровне. Узнайте, как это может изменить вашу жизнь.",
      date: "15 января 2025",
      readTime: "5 мин",
      category: "Наука",
    },
    {
      title: "Энергия Митохондрий: Источник Вашей Жизненной Силы",
      excerpt: "Митохондрии — это электростанции наших клеток. Узнайте, как правильное питание на клеточном уровне может увеличить их эффективность в несколько раз.",
      date: "12 января 2025",
      readTime: "7 мин",
      category: "Здоровье",
    },
    {
      title: "От БАДов к Питанию 8-го Поколения: Эволюция Нутрициологии",
      excerpt: "История развития подходов к питанию: от простых витаминов до революционных клеточных технологий. Почему 8-е поколение — это прорыв?",
      date: "10 января 2025",
      readTime: "6 мин",
      category: "Образование",
    },
    {
      title: "Клинические Исследования: Доказанная Эффективность",
      excerpt: "Результаты независимых клинических исследований подтверждают: питание на клеточном уровне действительно работает. Цифры и факты.",
      date: "8 января 2025",
      readTime: "8 мин",
      category: "Наука",
    },
    {
      title: "Восстановление После Стресса на Клеточном Уровне",
      excerpt: "Как современный стресс влияет на наши клетки и почему обычное питание не справляется. Новый подход к восстановлению организма.",
      date: "5 января 2025",
      readTime: "6 мин",
      category: "Здоровье",
    },
    {
      title: "Биохакинг и Клеточное Питание: Синергия Технологий",
      excerpt: "Соединение древней мудрости о питании с современными биохакинг-практиками. Как достичь максимальной эффективности организма.",
      date: "3 января 2025",
      readTime: "7 мин",
      category: "Биохакинг",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Статьи
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Глубокое погружение в мир клеточного питания 8-го поколения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-emerald hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              💡 Статьи автоматически обновляются каждые 3 дня с помощью AI-модуля
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;

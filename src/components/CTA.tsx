import { Button } from "./ui/button";
import { ArrowRight, Gift } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-cell opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6 animate-scale-in">
            <Gift className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">Эксклюзивный подарок при регистрации</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Готовы Изменить Свою Жизнь
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              На Клеточном Уровне?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Присоединяйтесь к онлайн-конференции и узнайте, как питание 8-го поколения 
            может трансформировать ваше здоровье и энергию. Всего 15 минут — и вы получите 
            всю необходимую информацию + эксклюзивный подарок.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-emerald hover:shadow-glow transition-all duration-300 text-lg px-10 py-7 group w-full sm:w-auto"
              onClick={() => window.open('https://mrmclean1975.st.su/signup/', '_blank')}
            >
              Посетить конференцию и получить подарок 🎁
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Без обязательств • Бесплатно • Подарок гарантирован
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

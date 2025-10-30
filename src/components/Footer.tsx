import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-emerald">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Success Together
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Революционное питание на клеточном уровне для вашего здоровья и энергии.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/articles" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Статьи
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                О нас
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: info@cellnutrition8.com</p>
              <p>Телефон: +7 (800) 123-45-67</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Success Together. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

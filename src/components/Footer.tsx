import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
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
                {t('brandName')}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footerDescription')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t('navigation')}</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('home')}
              </Link>
              <Link to="/articles" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('articles')}
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('about')}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t('contacts')}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t('email')}: info@cellnutrition8.com</p>
              <p>{t('phone')}: +7 (800) 123-45-67</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link, useLocation } from "react-router-dom";
import { Sparkles, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  const links = [
    { path: "/", label: t('home') },
    { path: "/articles", label: t('articles') },
    { path: "/about", label: t('about') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-emerald group-hover:shadow-glow transition-all duration-300">
              <Sparkles className="w-6 h-6 text-white animate-pulse-slow" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('brandName')}
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 h-9 px-3">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {language === 'ru' && '🇷🇺'}
                    {language === 'en' && '🇬🇧'}
                    {language === 'es' && '🇪🇸'}
                    {language === 'fr' && '🇫🇷'}
                    {language === 'de' && '🇩🇪'}
                    {language === 'zh' && '🇨🇳'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem 
                  onClick={() => setLanguage('ru')}
                  className={language === 'ru' ? 'bg-accent' : ''}
                >
                  <span className="mr-2">🇷🇺</span>
                  <span>Русский</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-accent' : ''}
                >
                  <span className="mr-2">🇬🇧</span>
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('es')}
                  className={language === 'es' ? 'bg-accent' : ''}
                >
                  <span className="mr-2">🇪🇸</span>
                  <span>Español</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('fr')}
                  className={language === 'fr' ? 'bg-accent' : ''}
                >
                  <span className="mr-2">🇫🇷</span>
                  <span>Français</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('de')}
                  className={language === 'de' ? 'bg-accent' : ''}
                >
                  <span className="mr-2">🇩🇪</span>
                  <span>Deutsch</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('zh')}
                  className={language === 'zh' ? 'bg-accent' : ''}
                >
                  <span className="mr-2">🇨🇳</span>
                  <span>中文</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

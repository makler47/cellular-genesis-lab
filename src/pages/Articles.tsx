import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Articles = () => {
  const { t } = useLanguage();
  const articles = [
    {
      titleKey: 'article1Title',
      contentKey: 'article1Content',
      date: "15 января 2025",
      readTime: "12",
      categoryKey: 'science',
    },
    {
      titleKey: 'article2Title',
      contentKey: 'article2Content',
      date: "12 января 2025",
      readTime: "10",
      categoryKey: 'health',
    },
    {
      titleKey: 'article3Title',
      contentKey: 'article3Content',
      date: "10 января 2025",
      readTime: "11",
      categoryKey: 'education',
    },
    {
      titleKey: 'article4Title',
      contentKey: 'article4Content',
      date: "8 января 2025",
      readTime: "13",
      categoryKey: 'science',
    },
    {
      titleKey: 'article5Title',
      contentKey: 'article5Content',
      date: "5 января 2025",
      readTime: "10",
      categoryKey: 'health',
    },
    {
      titleKey: 'article6Title',
      contentKey: 'article6Content',
      date: "3 января 2025",
      readTime: "11",
      categoryKey: 'biohacking',
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
                {t('articlesTitle')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('articlesSubtitle')}
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
                    {t(article.categoryKey)}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {t(article.titleKey)}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t(article.contentKey)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} {t('readTime')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;

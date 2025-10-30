import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const Objections = () => {
  const objections = [
    {
      question: "Это очередная добавка или БАД?",
      answer: "Нет. Это не добавка, а инновационное питание 8-го поколения, которое работает на клеточном уровне и поддерживает естественные процессы восстановления организма. В отличие от обычных БАДов, наша технология основана на глубоком понимании биохимии клетки.",
    },
    {
      question: "Как я могу быть уверен, что это безопасно?",
      answer: "Формула создана на основе клинических исследований и натуральных компонентов, без синтетических добавок. Каждый ингредиент прошёл тщательную проверку и соответствует международным стандартам качества. Мы полностью прозрачны в составе и методах производства.",
    },
    {
      question: "Я не уверен, что мне это нужно.",
      answer: "Уже после первой недели питания клетки начинают получать больше энергии, и вы чувствуете реальное улучшение самочувствия и бодрости. Это не вопрос веры — это результат, который можно измерить и почувствовать. Тысячи людей уже испытали эти изменения на себе.",
    },
    {
      question: "Мне некогда разбираться.",
      answer: "Именно поэтому можно просто посетить онлайн-конференцию — за 15 минут вы поймёте, как питание 8-го поколения меняет подход к здоровью. Никаких сложных терминов, только ясные объяснения и практические рекомендации. Плюс вы получите подарок за участие.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Частые Вопросы
            </span>{" "}
            и Возражения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы понимаем ваши сомнения. Вот честные ответы на самые важные вопросы.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-2xl px-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span className="text-lg font-semibold text-foreground">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-9 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Objections;

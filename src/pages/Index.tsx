import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import ProbabilityCalculator from "@/components/ProbabilityCalculator";
import AffirmationGenerator from "@/components/AffirmationGenerator";
import ConsultationBooking from "@/components/ConsultationBooking";

const Index = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isAffirmationOpen, setIsAffirmationOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <nav className="relative z-10 border-b border-border/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <span className="text-2xl font-bold">Квантум Астра</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#forecasts" className="text-sm hover:text-primary transition-colors">Прогнозы</a>
              <a href="#knowledge" className="text-sm hover:text-primary transition-colors">Знания</a>
              <a href="#tools" className="text-sm hover:text-primary transition-colors">Инструменты</a>
              <a href="#consultations" className="text-sm hover:text-primary transition-colors">Консультации</a>
            </div>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1.5">
              Квантовая Астрология 2.0
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ваша реальность — это{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent glow-text">
                спектр вероятностей
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы не предсказываем будущее. Мы вычисляем наиболее вероятные сценарии и даем инструменты для смещения реальности в желаемую сторону.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 glow-border">
                Начать эксперимент
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-lg px-8">
                Узнать больше
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 text-center">
              {[
                { value: "85%", label: "Точность прогнозов" },
                { value: "12К+", label: "Пользователей" },
                { value: "50+", label: "Статей" },
                { value: "∞", label: "Возможностей" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="forecasts" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Карты вероятностных потоков</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Визуализация космических паттернов и персональных сценариев развития событий
            </p>
          </div>

          <Tabs defaultValue="week" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="week">Неделя</TabsTrigger>
              <TabsTrigger value="month">Месяц</TabsTrigger>
              <TabsTrigger value="year">Год</TabsTrigger>
            </TabsList>
            
            <TabsContent value="week" className="space-y-6">
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">Квантовый фокус на 7 дней</CardTitle>
                      <CardDescription className="text-base mt-2">25 ноября — 1 декабря 2025</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">Актуально</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 p-5 rounded-lg bg-primary/5 border border-primary/30">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="TrendingUp" className="text-primary" size={24} />
                        <span className="font-semibold text-lg">Потенциал №1</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Вероятность</span>
                        <span className="text-2xl font-bold text-primary">70%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: '70%' }} />
                      </div>
                      <p className="text-sm leading-relaxed pt-2">
                        <strong>Меркурий в квадрате:</strong> Повышенная вероятность недопониманий. 
                        Совет: Сместите фокус с внешней коммуникации на внутренний анализ. Перечитайте договора, обдумайте слова.
                      </p>
                    </div>

                    <div className="space-y-3 p-5 rounded-lg bg-accent/5 border border-accent/30">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Lightbulb" className="text-accent" size={24} />
                        <span className="font-semibold text-lg">Потенциал №2</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Вероятность</span>
                        <span className="text-2xl font-bold text-accent">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                      <p className="text-sm leading-relaxed pt-2">
                        <strong>Венера в гармонии:</strong> Вероятность творческих озарений. 
                        Совет: Направьте внимание в это русло для коллапса желаемой реальности. Займитесь хобби, проявите нежность.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="outline">♈ Овен</Badge>
                    <Badge variant="outline">♉ Телец</Badge>
                    <Badge variant="outline">♊ Близнецы</Badge>
                    <Badge variant="outline">♋ Рак</Badge>
                    <Badge variant="outline">♌ Лев</Badge>
                    <Badge variant="outline">♍ Дева</Badge>
                    <Badge variant="outline">♎ Весы</Badge>
                    <Badge variant="outline">♏ Скорпион</Badge>
                    <Badge variant="outline">♐ Стрелец</Badge>
                    <Badge variant="outline">♑ Козерог</Badge>
                    <Badge variant="outline">♒ Водолей</Badge>
                    <Badge variant="outline">♓ Рыбы</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="month" className="space-y-6">
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl">Стратегия энергетического менеджмента</CardTitle>
                  <CardDescription className="text-base">Ноябрь 2025: Месяц квантовых прорывов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                      <Icon name="Zap" className="text-secondary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-2">Ключевой транзит: Юпитер в тригоне</h4>
                        <p className="text-sm text-muted-foreground">
                          Расширение возможностей в сфере карьеры и публичности. Идеальное время для запуска проектов и установления связей.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                      <Icon name="Shield" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-2">Точка напряжения: Марс ретроград</h4>
                        <p className="text-sm text-muted-foreground">
                          Перенаправление активности внутрь. Избегайте конфликтов, фокусируйтесь на стратегическом планировании.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Получить полный прогноз на месяц
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="year" className="space-y-6">
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl">Ваш персональный аттрактор</CardTitle>
                  <CardDescription className="text-base">Глубокий анализ транзитов 2025 года</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-12 space-y-4">
                    <Icon name="Lock" className="mx-auto text-primary" size={64} />
                    <h3 className="text-2xl font-semibold">Премиум-контент</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Персонализированный годовой отчет с анализом главных транзитов и стратегией развития
                    </p>
                    <Button size="lg" className="mt-4 bg-gradient-to-r from-primary to-secondary">
                      Получить доступ
                      <Icon name="Crown" className="ml-2" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="knowledge" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Библиотека знаний</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Глубокое погружение в принципы квантовой астрологии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Atom",
                title: "Кот Шрёдингера и астрология",
                description: "Как суперпозиция квантовых состояний применима к интерпретации натальной карты",
                category: "Основы"
              },
              {
                icon: "Network",
                title: "Квантовая запутанность",
                description: "Синастрия как нелокальная связь между энергетическими полями двух людей",
                category: "Синастрия"
              },
              {
                icon: "Sparkles",
                title: "Туннелирование Сатурна",
                description: "Преодоление ограничений через квантовые переходы между состояниями",
                category: "Транзиты"
              },
              {
                icon: "Eye",
                title: "Эффект наблюдателя",
                description: "Как ваше внимание коллапсирует волновую функцию реальности",
                category: "Практика"
              },
              {
                icon: "Waves",
                title: "Волны вероятности",
                description: "Математическое моделирование астрологических прогнозов",
                category: "Теория"
              },
              {
                icon: "Orbit",
                title: "Странный аттрактор судьбы",
                description: "Теория хаоса и предсказуемая непредсказуемость жизненных циклов",
                category: "Философия"
              }
            ].map((article, i) => (
              <Card key={i} className="border-border/50 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon name={article.icon as any} className="text-primary" size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/50">
              Перейти в библиотеку
              <Icon name="BookOpen" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="tools" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Квантовые инструменты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Интерактивные лаборатории для работы с вашей реальностью
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/30 bg-card/50 backdrop-blur hover:glow-border transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Calculator" className="text-primary" size={32} />
                  <CardTitle className="text-2xl">Калькулятор вероятностей</CardTitle>
                </div>
                <CardDescription>
                  Интерактивная модель ваших квантовых состояний на основе натальной карты
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border border-border/50">
                  <Icon name="LineChart" className="text-muted-foreground" size={64} />
                </div>
                <Button className="w-full" onClick={() => setIsCalculatorOpen(true)}>
                  Запустить калькулятор
                  <Icon name="Play" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-card/50 backdrop-blur hover:glow-border transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Wand2" className="text-accent" size={32} />
                  <CardTitle className="text-2xl">Генератор аффирмаций</CardTitle>
                </div>
                <CardDescription>
                  Персональные утверждения на основе текущих транзитов для смещения реальности
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-muted/30 rounded-lg border border-border/50 space-y-3">
                  <p className="text-sm italic text-muted-foreground">Ваша аффирмация:</p>
                  <p className="text-base leading-relaxed">
                    "Я сознательно создаю прочные структуры в сфере карьеры, выбирая путь наибольшей вероятности успеха"
                  </p>
                </div>
                <Button className="w-full" variant="outline" onClick={() => setIsAffirmationOpen(true)}>
                  Создать новую аффирмацию
                  <Icon name="RefreshCw" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultations" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto border-primary/50 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Персональная консультация с квантовиком
              </CardTitle>
              <CardDescription className="text-base">
                Углубленный разбор натальной карты с позиции управления вероятностями
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Icon name="Clock" className="mx-auto text-primary" size={32} />
                  <h4 className="font-semibold">60 минут</h4>
                  <p className="text-sm text-muted-foreground">Глубокая сессия</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Video" className="mx-auto text-primary" size={32} />
                  <h4 className="font-semibold">Онлайн</h4>
                  <p className="text-sm text-muted-foreground">Zoom / Google Meet</p>
                </div>
                <div className="space-y-2">
                  <Icon name="FileText" className="mx-auto text-primary" size={32} />
                  <h4 className="font-semibold">PDF-отчет</h4>
                  <p className="text-sm text-muted-foreground">После сессии</p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h4 className="font-semibold text-center mb-4">Что вы получите:</h4>
                <div className="space-y-3">
                  {[
                    "Анализ текущих квантовых состояний в вашей карте",
                    "Карту вероятностей на ближайшие 3-6 месяцев",
                    "Практические техники для смещения фокуса",
                    "Ответы на 3 ключевых вопроса о жизненных сценариях"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center space-y-4">
                <div className="text-3xl font-bold text-primary">7 500 ₽</div>
                <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => setIsBookingOpen(true)}>
                  Записаться на консультацию
                  <Icon name="Calendar" className="ml-2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/50 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" className="text-primary" size={28} />
                <span className="text-xl font-bold">Квантум Астра</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лаборатория по управлению реальностью через квантовую астрологию
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Прогнозы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">На неделю</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">На месяц</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">На год</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Знания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Библиотека</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Глоссарий</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Видео</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Квантум Астра. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="Calculator" className="text-primary" size={28} />
              Калькулятор вероятностей
            </DialogTitle>
            <DialogDescription>
              Интерактивная визуализация вашей квантовой натальной карты
            </DialogDescription>
          </DialogHeader>
          <ProbabilityCalculator />
        </DialogContent>
      </Dialog>

      <Dialog open={isAffirmationOpen} onOpenChange={setIsAffirmationOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="Wand2" className="text-accent" size={28} />
              Генератор квантовых аффирмаций
            </DialogTitle>
            <DialogDescription>
              Создайте персональную аффирмацию для смещения реальности
            </DialogDescription>
          </DialogHeader>
          <AffirmationGenerator />
        </DialogContent>
      </Dialog>

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="Calendar" className="text-primary" size={28} />
              Запись на консультацию
            </DialogTitle>
            <DialogDescription>
              Выберите удобное время для персональной сессии
            </DialogDescription>
          </DialogHeader>
          <ConsultationBooking />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
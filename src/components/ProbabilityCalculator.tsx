import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Planet {
  name: string;
  sign: string;
  degree: number;
  house: number;
  color: string;
  states: string[];
  probability: number;
}

const ProbabilityCalculator = () => {
  const [isCalculated, setIsCalculated] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: ""
  });

  const planets: Planet[] = [
    {
      name: "Солнце",
      sign: "♐ Стрелец",
      degree: 3,
      house: 10,
      color: "hsl(var(--primary))",
      states: ["Расширение", "Публичность", "Философия"],
      probability: 85
    },
    {
      name: "Луна",
      sign: "♋ Рак",
      degree: 18,
      house: 5,
      color: "hsl(var(--accent))",
      states: ["Эмоции", "Безопасность", "Интуиция"],
      probability: 92
    },
    {
      name: "Меркурий",
      sign: "♏ Скорпион",
      degree: 25,
      house: 9,
      color: "hsl(var(--secondary))",
      states: ["Глубина", "Анализ", "Трансформация"],
      probability: 78
    },
    {
      name: "Венера",
      sign: "♎ Весы",
      degree: 12,
      house: 8,
      color: "#ec4899",
      states: ["Гармония", "Партнёрство", "Ценности"],
      probability: 88
    },
    {
      name: "Марс",
      sign: "♈ Овен",
      degree: 8,
      house: 2,
      color: "#ef4444",
      states: ["Действие", "Инициатива", "Энергия"],
      probability: 95
    },
    {
      name: "Юпитер",
      sign: "♊ Близнецы",
      degree: 15,
      house: 4,
      color: "#f59e0b",
      states: ["Обучение", "Рост", "Возможности"],
      probability: 82
    },
    {
      name: "Сатурн",
      sign: "♓ Рыбы",
      degree: 29,
      house: 1,
      color: "#6366f1",
      states: ["Структура", "Границы", "Мастерство"],
      probability: 73
    },
    {
      name: "Уран",
      sign: "♉ Телец",
      degree: 22,
      house: 3,
      color: "#06b6d4",
      states: ["Инновации", "Свобода", "Неожиданность"],
      probability: 68
    }
  ];

  const handleCalculate = () => {
    if (formData.date && formData.time && formData.location) {
      setIsCalculated(true);
    }
  };

  const NatalChart = () => {
    const centerX = 200;
    const centerY = 200;
    const radius = 150;

    return (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          opacity="0.3"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius * 0.7}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.2"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius * 0.4}
          fill="hsl(var(--card))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          opacity="0.5"
        />

        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = centerX + Math.cos(angle) * (radius * 0.4);
          const y1 = centerY + Math.sin(angle) * (radius * 0.4);
          const x2 = centerX + Math.cos(angle) * radius;
          const y2 = centerY + Math.sin(angle) * radius;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}

        {planets.map((planet, index) => {
          const houseAngle = ((planet.house - 1) * 30 + planet.degree - 90) * (Math.PI / 180);
          const distance = radius * 0.85;
          const x = centerX + Math.cos(houseAngle) * distance;
          const y = centerY + Math.sin(houseAngle) * distance;

          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill={planet.color}
                opacity="0.8"
                className="cursor-pointer hover:opacity-100 transition-opacity"
                onClick={() => setSelectedPlanet(planet)}
              />
              <circle
                cx={x}
                cy={y}
                r="12"
                fill="none"
                stroke={planet.color}
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse-glow"
              />
            </g>
          );
        })}

        <circle
          cx={centerX}
          cy={centerY}
          r="3"
          fill="hsl(var(--primary))"
        />
      </svg>
    );
  };

  return (
    <div className="space-y-6">
      {!isCalculated ? (
        <Card className="border-primary/30 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl">Введите данные рождения</CardTitle>
            <CardDescription>
              Для расчета квантовых вероятностей нужны точные данные
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  Дата рождения
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Время рождения
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Место рождения
                </Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Москва, Россия"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="bg-muted/50"
                />
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Квантовый подход к натальной карте</p>
                  <p>Мы рассчитываем не статичные позиции, а спектр вероятных состояний каждой планеты. 
                  Ваша карта — это суперпозиция множества реальностей, которые коллапсируют в зависимости от вашего выбора.</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              disabled={!formData.date || !formData.time || !formData.location}
              className="w-full bg-gradient-to-r from-primary to-secondary"
              size="lg"
            >
              Рассчитать вероятности
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-primary/30 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl">Ваша квантовая карта</CardTitle>
              <CardDescription>
                Нажмите на планету для просмотра вероятностных состояний
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted/10 rounded-lg p-4">
                <NatalChart />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {planets.slice(0, 8).map((planet, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedPlanet(planet)}
                    className={`justify-start ${
                      selectedPlanet?.name === planet.name ? 'border-primary bg-primary/10' : ''
                    }`}
                  >
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: planet.color }}
                    />
                    {planet.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {selectedPlanet ? (
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: selectedPlanet.color }}
                    />
                    <CardTitle className="text-2xl">{selectedPlanet.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {selectedPlanet.sign} • {selectedPlanet.house} дом • {selectedPlanet.degree}°
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Вероятность активации</span>
                      <span className="text-3xl font-bold" style={{ color: selectedPlanet.color }}>
                        {selectedPlanet.probability}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${selectedPlanet.probability}%`,
                          backgroundColor: selectedPlanet.color
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Icon name="Layers" size={18} />
                      Спектр квантовых состояний
                    </h4>
                    <div className="space-y-2">
                      {selectedPlanet.states.map((state, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-between group hover:border-primary/50 transition-colors"
                        >
                          <span className="text-sm">{state}</span>
                          <Icon
                            name="ChevronRight"
                            className="text-muted-foreground group-hover:text-primary transition-colors"
                            size={16}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Icon name="Lightbulb" className="text-primary" size={18} />
                      Как сместить вероятность
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedPlanet.name === "Солнце" && 
                        "Фокусируйтесь на публичной деятельности и расширении горизонтов. Ваше внимание коллапсирует волновую функцию в сторону лидерства и философского поиска."}
                      {selectedPlanet.name === "Луна" && 
                        "Усиливайте эмоциональный интеллект и творческое самовыражение. Создавайте безопасное пространство для интуитивных прозрений."}
                      {selectedPlanet.name === "Меркурий" && 
                        "Углубляйтесь в анализ скрытых паттернов. Трансформационное мышление активирует это квантовое состояние."}
                      {selectedPlanet.name === "Венера" && 
                        "Развивайте партнерские отношения и эстетическое восприятие. Гармония в ценностях усиливает это состояние."}
                      {selectedPlanet.name === "Марс" && 
                        "Направляйте энергию на материальные цели и финансовую независимость. Прямое действие коллапсирует вероятность в вашу пользу."}
                      {selectedPlanet.name === "Юпитер" && 
                        "Исследуйте новые знания и расширяйте круг общения. Домашний уют и семейные традиции усиливают рост."}
                      {selectedPlanet.name === "Сатурн" && 
                        "Работайте над самодисциплиной и личными границами. Структурирование хаоса — ваш путь к мастерству."}
                      {selectedPlanet.name === "Уран" && 
                        "Внедряйте инновационные идеи в коммуникацию. Нестандартные решения повышают эту вероятность."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="flex flex-col items-center justify-center py-20 text-center">
                  <Icon name="MousePointerClick" className="text-muted-foreground mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Выберите планету</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Кликните на планету в карте или используйте кнопки ниже для анализа квантовых состояний
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="border-accent/30 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="Zap" className="text-accent" size={24} />
                  Ключевые аспекты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 mt-0.5">
                    Тригон
                  </Badge>
                  <div className="text-sm">
                    <p className="font-medium">Солнце — Юпитер</p>
                    <p className="text-muted-foreground">Гармоничное расширение возможностей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400 mt-0.5">
                    Квадрат
                  </Badge>
                  <div className="text-sm">
                    <p className="font-medium">Марс — Сатурн</p>
                    <p className="text-muted-foreground">Напряжение между действием и структурой</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 mt-0.5">
                    Секстиль
                  </Badge>
                  <div className="text-sm">
                    <p className="font-medium">Венера — Луна</p>
                    <p className="text-muted-foreground">Эмоциональная гармония в отношениях</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProbabilityCalculator;

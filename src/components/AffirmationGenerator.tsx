import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface Affirmation {
  text: string;
  planet: string;
  transit: string;
  energy: string;
}

const AffirmationGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [affirmation, setAffirmation] = useState<Affirmation | null>(null);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("");

  const areas = [
    { value: "career", label: "Карьера и призвание", icon: "Briefcase" },
    { value: "relationships", label: "Отношения", icon: "Heart" },
    { value: "health", label: "Здоровье", icon: "Activity" },
    { value: "finance", label: "Финансы", icon: "DollarSign" },
    { value: "creativity", label: "Творчество", icon: "Palette" },
    { value: "spirituality", label: "Духовность", icon: "Sparkles" }
  ];

  const planets = [
    { value: "sun", label: "☉ Солнце" },
    { value: "moon", label: "☽ Луна" },
    { value: "mercury", label: "☿ Меркурий" },
    { value: "venus", label: "♀ Венера" },
    { value: "mars", label: "♂ Марс" },
    { value: "jupiter", label: "♃ Юпитер" },
    { value: "saturn", label: "♄ Сатурн" },
    { value: "uranus", label: "♅ Уран" }
  ];

  const affirmationTemplates = {
    career: {
      sun: "Я выбираю реальность, где моё лидерство создаёт волны позитивных изменений в профессиональной сфере",
      moon: "Я доверяю своей интуиции в карьерных решениях, коллапсируя волновую функцию в сторону успеха",
      mercury: "Моё мышление трансформирует препятствия в карьере в возможности для роста",
      venus: "Я привлекаю гармоничные профессиональные связи, смещая вероятность в сторону сотрудничества",
      mars: "Я направляю энергию действия на достижение карьерных целей с максимальной эффективностью",
      jupiter: "Я расширяю свои профессиональные горизонты, выбирая путь наибольших возможностей",
      saturn: "Я создаю прочные структуры в карьере, которые выдерживают любые испытания времени",
      uranus: "Я внедряю инновационные решения в работу, смещая реальность к уникальным достижениям"
    },
    relationships: {
      sun: "Я освещаю своим присутствием отношения, выбирая реальность взаимного уважения",
      moon: "Я создаю эмоциональную безопасность в отношениях, коллапсируя волны в гармонию",
      mercury: "Моя коммуникация в отношениях ясна и трансформирует непонимание в близость",
      venus: "Я привлекаю любовь и красоту, смещая вероятности к глубоким партнёрским связям",
      mars: "Я проявляю страсть и инициативу в отношениях с уважением к границам партнёра",
      jupiter: "Я расширяю сердце для любви, выбирая реальность радости и роста вместе",
      saturn: "Я строю долгосрочные отношения на прочном фундаменте доверия и ответственности",
      uranus: "Я открыт к неожиданным формам любви, смещая реальность к аутентичным связям"
    },
    health: {
      sun: "Моя жизненная сила расцветает, я выбираю реальность оптимального здоровья и энергии",
      moon: "Я слушаю сигналы своего тела, коллапсируя вероятности в сторону исцеления",
      mercury: "Мой разум и тело синхронизированы, я выбираю здоровые паттерны мышления",
      venus: "Я наполняю тело любовью и заботой, смещая вероятность к балансу и гармонии",
      mars: "Моя физическая активность заряжает каждую клетку тела силой и здоровьем",
      jupiter: "Я расширяю своё благополучие во всех аспектах: тело, разум, дух",
      saturn: "Я создаю устойчивые привычки здоровья, которые служат мне всю жизнь",
      uranus: "Я открыт к новым методам оздоровления, смещая реальность к витальности"
    },
    finance: {
      sun: "Я сияю изобилием, выбирая реальность финансовой свободы и процветания",
      moon: "Я доверяю потоку изобилия, коллапсируя волны в материальную стабильность",
      mercury: "Моё мышление изобилия трансформирует финансовые возможности в успех",
      venus: "Я привлекаю деньги легко и гармонично, смещая вероятность к достатку",
      mars: "Я активно создаю источники дохода, направляя энергию на финансовые цели",
      jupiter: "Я расширяю свои финансовые возможности, выбирая путь процветания",
      saturn: "Я строю прочный финансовый фундамент через дисциплину и мудрые решения",
      uranus: "Я открыт к нестандартным источникам дохода, смещая реальность к изобилию"
    },
    creativity: {
      sun: "Моё творчество сияет уникальным светом, я выбираю реальность самовыражения",
      moon: "Я позволяю интуитивному потоку вдохновения коллапсировать в творческие шедевры",
      mercury: "Мои идеи трансформируются в творческие проекты с лёгкостью и ясностью",
      venus: "Я создаю красоту во всём, что делаю, смещая вероятность к эстетическому совершенству",
      mars: "Я воплощаю творческие идеи в жизнь с энергией и решительностью",
      jupiter: "Я расширяю своё творческое видение, выбирая путь художественного изобилия",
      saturn: "Я развиваю творческое мастерство через практику и преданность искусству",
      uranus: "Я создаю прорывные произведения, смещая реальность к инновационному искусству"
    },
    spirituality: {
      sun: "Я осознаю свою божественную природу, выбирая реальность духовного пробуждения",
      moon: "Я соединяюсь с космическими ритмами, коллапсируя волны в духовное прозрение",
      mercury: "Мой разум открыт к высшим истинам, я принимаю духовные послания с ясностью",
      venus: "Я наполняюсь безусловной любовью Вселенной, смещая вероятность к единству",
      mars: "Я активно практикую духовные техники, трансформируя энергию в осознанность",
      jupiter: "Я расширяю своё сознание, выбирая путь духовного роста и мудрости",
      saturn: "Я создаю священное пространство для духовной практики с дисциплиной и преданностью",
      uranus: "Я открыт к квантовым скачкам сознания, смещая реальность к просветлению"
    }
  };

  const transits = {
    sun: "Солнце в активной фазе",
    moon: "Лунный цикл поддерживает",
    mercury: "Меркурий усиливает коммуникацию",
    venus: "Венера гармонизирует",
    mars: "Марс придаёт энергию",
    jupiter: "Юпитер расширяет возможности",
    saturn: "Сатурн структурирует",
    uranus: "Уран приносит инновации"
  };

  const energies = {
    sun: "Созидательная",
    moon: "Интуитивная",
    mercury: "Аналитическая",
    venus: "Гармонизирующая",
    mars: "Активная",
    jupiter: "Расширяющая",
    saturn: "Стабилизирующая",
    uranus: "Трансформирующая"
  };

  const handleGenerate = () => {
    if (!selectedArea || !selectedPlanet) return;

    setIsGenerating(true);

    setTimeout(() => {
      const text = affirmationTemplates[selectedArea as keyof typeof affirmationTemplates][selectedPlanet as keyof typeof affirmationTemplates.career];
      const newAffirmation: Affirmation = {
        text,
        planet: planets.find(p => p.value === selectedPlanet)?.label || "",
        transit: transits[selectedPlanet as keyof typeof transits],
        energy: energies[selectedPlanet as keyof typeof energies]
      };
      setAffirmation(newAffirmation);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    if (affirmation) {
      navigator.clipboard.writeText(affirmation.text);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-accent/30 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Icon name="Wand2" className="text-accent" size={28} />
            Параметры генерации
          </CardTitle>
          <CardDescription>
            Выберите сферу жизни и планету для создания персональной аффирмации
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Сфера жизни</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {areas.map((area) => (
                <Button
                  key={area.value}
                  variant="outline"
                  className={`h-auto py-4 flex-col gap-2 ${
                    selectedArea === area.value ? 'border-accent bg-accent/10' : ''
                  }`}
                  onClick={() => setSelectedArea(area.value)}
                >
                  <Icon name={area.icon as any} size={24} />
                  <span className="text-sm">{area.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Планета-активатор</Label>
            <Select value={selectedPlanet} onValueChange={setSelectedPlanet}>
              <SelectTrigger className="bg-muted/50">
                <SelectValue placeholder="Выберите планету" />
              </SelectTrigger>
              <SelectContent>
                {planets.map((planet) => (
                  <SelectItem key={planet.value} value={planet.value}>
                    {planet.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!selectedArea || !selectedPlanet || isGenerating}
            className="w-full bg-gradient-to-r from-accent to-secondary"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                Вычисляю вероятности...
              </>
            ) : (
              <>
                Сгенерировать аффирмацию
                <Icon name="Sparkles" className="ml-2" size={20} />
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {affirmation && (
        <Card className="border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur animate-fade-in">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">Ваша квантовая аффирмация</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {affirmation.planet}
                  </Badge>
                  <Badge variant="outline">{affirmation.transit}</Badge>
                  <Badge variant="outline">{affirmation.energy} энергия</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg border border-border/50 relative">
              <Icon name="Quote" className="absolute top-4 left-4 text-primary/20" size={32} />
              <p className="text-lg leading-relaxed pl-8 pt-2">
                {affirmation.text}
              </p>
            </div>

            <div className="bg-accent/5 border border-accent/30 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-sm">
                <Icon name="Info" className="text-accent" size={18} />
                Как использовать
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Повторяйте аффирмацию утром и вечером минимум 21 день</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Визуализируйте желаемую реальность во время повторения</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Ощущайте эмоции так, будто это уже произошло</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Записывайте синхронности и изменения в жизни</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleCopy} variant="outline" className="flex-1">
                <Icon name="Copy" className="mr-2" size={16} />
                Копировать
              </Button>
              <Button onClick={handleGenerate} variant="outline" className="flex-1">
                <Icon name="RefreshCw" className="mr-2" size={16} />
                Новая аффирмация
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AffirmationGenerator;

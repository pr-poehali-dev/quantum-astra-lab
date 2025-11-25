import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ConsultationBooking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    question: ""
  });

  const availableTimes = [
    "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"
  ];

  const isTimeDisabled = (time: string) => {
    const disabledTimes = ["11:30", "16:00"];
    return disabledTimes.includes(time);
  };

  const handleSubmit = () => {
    console.log("Booking submitted:", { date, selectedTime, ...formData });
    setStep(4);
  };

  const isStepComplete = () => {
    if (step === 1) return date && selectedTime;
    if (step === 2) return formData.name && formData.email && formData.telegram;
    if (step === 3) return formData.birthDate && formData.birthTime && formData.birthPlace;
    return false;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= s
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-muted text-muted-foreground'
              }`}
            >
              {step > s ? (
                <Icon name="Check" size={20} />
              ) : (
                <span className="font-semibold">{s}</span>
              )}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  step > s ? 'bg-primary' : 'bg-border'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card className="border-primary/30 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Calendar" className="text-primary" size={28} />
              Выберите дату и время
            </CardTitle>
            <CardDescription>
              Консультация длится 60 минут
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today || date.getDay() === 0;
                }}
                className="rounded-lg border border-border/50 bg-muted/30"
              />
            </div>

            {date && (
              <div className="space-y-3 animate-fade-in">
                <Label>Доступное время</Label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {availableTimes.map((time) => {
                    const disabled = isTimeDisabled(time);
                    return (
                      <Button
                        key={time}
                        variant="outline"
                        className={`${
                          selectedTime === time
                            ? 'border-primary bg-primary/10 text-primary'
                            : ''
                        } ${disabled ? 'opacity-50' : ''}`}
                        onClick={() => !disabled && setSelectedTime(time)}
                        disabled={disabled}
                      >
                        {time}
                        {disabled && (
                          <Icon name="Lock" className="ml-1" size={14} />
                        )}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            <Button
              onClick={() => setStep(2)}
              disabled={!isStepComplete()}
              className="w-full"
              size="lg"
            >
              Продолжить
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="border-primary/30 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="User" className="text-primary" size={28} />
              Контактные данные
            </CardTitle>
            <CardDescription>
              Мы свяжемся с вами для подтверждения
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  placeholder="Анна Иванова"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="anna@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram">Telegram *</Label>
                <Input
                  id="telegram"
                  placeholder="@username"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  className="bg-muted/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="question">Главный вопрос для консультации</Label>
                <Textarea
                  id="question"
                  placeholder="Например: Хочу понять направление карьеры и найти своё призвание"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="bg-muted/50 min-h-[100px]"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1"
              >
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Назад
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!isStepComplete()}
                className="flex-1"
                size="lg"
              >
                Продолжить
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="border-primary/30 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Star" className="text-primary" size={28} />
              Данные рождения
            </CardTitle>
            <CardDescription>
              Для расчета натальной карты
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-accent/5 border border-accent/30 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-accent mt-0.5 flex-shrink-0" size={20} />
                <div className="text-sm text-muted-foreground">
                  <p>Точные данные рождения критически важны для квантового анализа вашей карты. 
                  Даже несколько минут разницы могут сместить вероятности.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Дата рождения *</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="bg-muted/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthTime">Время рождения *</Label>
                <Input
                  id="birthTime"
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                  className="bg-muted/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthPlace">Место рождения *</Label>
                <Input
                  id="birthPlace"
                  placeholder="Москва, Россия"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                  className="bg-muted/50"
                />
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/30 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Calendar" className="text-primary" size={18} />
                Детали консультации
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Дата и время:</span>
                  <span className="font-medium">
                    {date?.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} в {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Длительность:</span>
                  <span className="font-medium">60 минут</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Формат:</span>
                  <span className="font-medium">Zoom / Google Meet</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border/50">
                  <span className="text-muted-foreground">Стоимость:</span>
                  <span className="font-semibold text-lg text-primary">7 500 ₽</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1"
              >
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Назад
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!isStepComplete()}
                className="flex-1 bg-gradient-to-r from-primary to-secondary"
                size="lg"
              >
                Записаться
                <Icon name="Check" className="ml-2" size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="border-primary/30 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur animate-fade-in">
          <CardContent className="py-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="CheckCircle2" className="text-primary" size={48} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Заявка отправлена!</h3>
              <p className="text-muted-foreground text-lg">
                Мы отправили подтверждение на {formData.email}
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-4 pt-6">
              <div className="bg-muted/30 rounded-lg p-4 text-left space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="Clock" className="text-primary" size={20} />
                  Что дальше?
                </h4>
                <ol className="text-sm text-muted-foreground space-y-2 ml-6 list-decimal">
                  <li>В течение 24 часов мы свяжемся с вами в Telegram для подтверждения</li>
                  <li>Вышлем ссылку на оплату консультации</li>
                  <li>После оплаты отправим ссылку на видеовстречу</li>
                  <li>За день напомним о консультации</li>
                </ol>
              </div>

              <Badge variant="secondary" className="bg-accent/20 text-accent">
                Ваша консультация: {date?.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} в {selectedTime}
              </Badge>
            </div>

            <Button
              onClick={() => {
                setStep(1);
                setDate(undefined);
                setSelectedTime("");
                setFormData({
                  name: "",
                  email: "",
                  telegram: "",
                  birthDate: "",
                  birthTime: "",
                  birthPlace: "",
                  question: ""
                });
              }}
              variant="outline"
              size="lg"
            >
              <Icon name="Home" className="mr-2" size={20} />
              Вернуться на главную
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ConsultationBooking;

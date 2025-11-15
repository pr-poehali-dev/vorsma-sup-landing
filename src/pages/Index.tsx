import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:+79519133270";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/79519133270", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/+79519133270", "_blank");
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Vorsma-SUP</h1>
            <p className="text-sm text-muted-foreground">Аренда сапбордов в Ворсме</p>
          </div>
          <Button onClick={handleCall} size="lg" className="hidden md:flex">
            <Icon name="Phone" className="mr-2 h-5 w-5" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                SUP-прогулки по озёрам Ворсмы
              </h2>
              <p className="text-lg text-muted-foreground">
                Сдаём в аренду сапы для прогулок по самым красивым озёрам города. Всё необходимое снаряжение уже включено в стоимость.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleCall} size="lg" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Забронировать
                </Button>
                <Button onClick={handleWhatsApp} variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/0f051852-6624-4917-b985-cb91bf39ff27/files/2fb411ee-3174-48f2-894f-ff1c14f37355.jpg"
                alt="SUP-прогулка"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Стоимость аренды</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Calendar" className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Будние дни</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Понедельник - Пятница</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b pb-3">
                    <span className="text-lg">Целый день</span>
                    <span className="text-3xl font-bold text-primary">1000₽</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg">1 час</span>
                    <span className="text-3xl font-bold text-primary">350₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Sun" className="h-8 w-8 text-secondary" />
                  <h3 className="text-2xl font-bold">Выходные дни</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Суббота - Воскресенье</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b pb-3">
                    <span className="text-lg">Целый день</span>
                    <span className="text-3xl font-bold text-secondary">1500₽</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg">1 час</span>
                    <span className="text-3xl font-bold text-secondary">500₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Всё включено!</h2>
          <p className="text-center text-muted-foreground mb-12">В стоимость аренды входит</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "Waves", title: "Сапборд и весло", description: "Качественный SUP для комфортных прогулок" },
              { icon: "ShieldCheck", title: "Спасательный жилет", description: "Для вашей безопасности на воде" },
              { icon: "Smartphone", title: "Водонепроницаемый чехол", description: "Защита телефона от влаги" },
              { icon: "ShoppingBag", title: "Гермосумка", description: "Для хранения личных вещей" },
              { icon: "BookOpen", title: "Инструктаж", description: "Научим грести и держать баланс" },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={item.icon as any} className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Где катаемся?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <img
                  src="https://cdn.poehali.dev/projects/0f051852-6624-4917-b985-cb91bf39ff27/files/1c5e4ed5-4c96-44d1-a316-170334483522.jpg"
                  alt="Озеро Ключик"
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Озеро Ключик</h3>
                  <p className="text-muted-foreground">
                    Спокойная вода, удобный заход, идеально для новичков и первых тренировок. Отличное место для начала вашего SUP-приключения.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="https://cdn.poehali.dev/projects/0f051852-6624-4917-b985-cb91bf39ff27/files/1c5e4ed5-4c96-44d1-a316-170334483522.jpg"
                  alt="Озеро Тосканка"
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Озеро Тосканка</h3>
                  <p className="text-muted-foreground">
                    Живописные виды, больше простора для прогулок. Здесь можно насладиться красотой природы и спокойствием воды.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Интересные маршруты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-secondary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">По ручью к Тосканке</h3>
                    <p className="text-sm text-muted-foreground mb-4">Для любителей природы и уединения</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Стартуйте с озера Ключик и пройдите по красивому, извилистому ручью прямо до озера Тосканка.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="h-4 w-4 text-primary" />
                    <span>~1 час</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="h-4 w-4 text-primary" />
                    <span>Живописный</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Compass" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Кругосветка Тосканки</h3>
                    <p className="text-sm text-muted-foreground mb-4">Для тех, кто хочет большего простора</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Пройдите вдоль всего берега озера Тосканка, исследуя каждый его уголок. Отличный маршрут, чтобы оценить озеро по достоинству.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="h-4 w-4 text-primary" />
                    <span>~1.5 часа</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Navigation" className="h-4 w-4 text-primary" />
                    <span>Панорамный</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Как забронировать сап?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              У нас нет стационарной точки выдачи. Мы сами привозим снаряжение к озеру в удобное для вас время.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">1</div>
                <p className="font-semibold">Выберите дату и время</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">2</div>
                <p className="font-semibold">Позвоните или напишите</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">3</div>
                <p className="font-semibold">Встречаемся у воды!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами!</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">Звоните или пишите — ответим на все вопросы</p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <a href="tel:+79519133270" className="text-4xl md:text-5xl font-bold hover:text-secondary transition-colors block mb-2">
                +7 (951) 913-32-70
              </a>
              <p className="text-primary-foreground/80">Кликните для звонка</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="secondary"
                className="text-lg px-8"
              >
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button
                onClick={handleTelegram}
                size="lg"
                variant="secondary"
                className="text-lg px-8"
              >
                <Icon name="Send" className="mr-2 h-5 w-5" />
                Telegram
              </Button>
              <Button
                onClick={handleCall}
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Vorsma-SUP</span> — Аренда сапбордов на озёрах Ключик и Тосканка
          </p>
          <p className="text-sm text-muted-foreground mt-2">© 2025 Vorsma-SUP. Активный отдых в Ворсме.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

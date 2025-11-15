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
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-border/40 z-50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Waves" className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">Vorsma SUP</span>
          </div>
          <Button onClick={handleCall} className="rounded-full px-6">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Озёра Ключик и Тосканка
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Сапборды<br />в Ворсме
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Аренда SUP-бордов с полным снаряжением. Привозим на озеро в удобное время.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={handleWhatsApp} size="lg" className="rounded-full h-14 px-8 text-base">
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </Button>
                <Button onClick={handleCall} variant="outline" size="lg" className="rounded-full h-14 px-8 text-base">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  +7 951 913-32-70
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/0f051852-6624-4917-b985-cb91bf39ff27/files/2fb411ee-3174-48f2-894f-ff1c14f37355.jpg"
                alt="SUP на озере"
                className="relative rounded-[2rem] shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardContent className="p-10">
                <div className="text-sm font-medium text-muted-foreground mb-2">Понедельник — Пятница</div>
                <h3 className="text-3xl font-bold mb-8">Будни</h3>
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold">350₽</span>
                    <span className="text-muted-foreground">/ час</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold">1000₽</span>
                    <span className="text-muted-foreground">/ день</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary text-white hover:shadow-2xl transition-all">
              <CardContent className="p-10">
                <div className="text-sm font-medium text-white/70 mb-2">Суббота — Воскресенье</div>
                <h3 className="text-3xl font-bold mb-8">Выходные</h3>
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold">500₽</span>
                    <span className="text-white/70">/ час</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold">1500₽</span>
                    <span className="text-white/70">/ день</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Что входит</h2>
            <p className="text-muted-foreground text-lg">Всё для комфортной прогулки</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: "Waves", title: "Сапборд и весло" },
              { icon: "ShieldCheck", title: "Спасжилет" },
              { icon: "Smartphone", title: "Водонепроницаемый чехол" },
              { icon: "ShoppingBag", title: "Гермосумка" },
              { icon: "GraduationCap", title: "Инструктаж" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center">
                  <Icon name={item.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Локации</h2>
            <p className="text-muted-foreground text-lg">Два живописных озера</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-2 hover:shadow-xl transition-all group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/0f051852-6624-4917-b985-cb91bf39ff27/files/1c5e4ed5-4c96-44d1-a316-170334483522.jpg"
                  alt="Озеро Ключик"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Озеро Ключик</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Спокойная вода, удобный заход. Идеально для новичков и первых тренировок.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 hover:shadow-xl transition-all group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/0f051852-6624-4917-b985-cb91bf39ff27/files/1c5e4ed5-4c96-44d1-a316-170334483522.jpg"
                  alt="Озеро Тосканка"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Озеро Тосканка</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Живописные виды, больше простора. Насладитесь красотой природы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Маршруты</h2>
            <p className="text-muted-foreground text-lg">Проверенные треки для прогулок</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">По ручью к Тосканке</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" className="h-4 w-4" />
                        ~1 час
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="TrendingUp" className="h-4 w-4" />
                        Живописный
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Стартуйте с Ключика и пройдите по извилистому ручью до Тосканки. Маршрут для любителей природы.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Compass" className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Кругосветка Тосканки</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" className="h-4 w-4" />
                        ~1.5 часа
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Navigation" className="h-4 w-4" />
                        Панорамный
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Обойдите озеро по периметру, исследуя каждый уголок. Для тех, кто хочет большего простора.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Как забронировать</h2>
          <p className="text-xl mb-16 text-white/80">Привозим снаряжение к озеру в удобное время</p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {[
              { num: "1", text: "Выберите дату и время" },
              { num: "2", text: "Позвоните или напишите" },
              { num: "3", text: "Встречаемся у воды" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl font-bold">
                  {step.num}
                </div>
                <p className="text-lg font-medium">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 mb-10">
            <a href="tel:+79519133270" className="text-5xl lg:text-6xl font-bold hover:text-white/80 transition-colors block">
              +7 951 913-32-70
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="secondary"
              className="rounded-full h-14 px-8 text-base"
            >
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button
              onClick={handleTelegram}
              size="lg"
              variant="secondary"
              className="rounded-full h-14 px-8 text-base"
            >
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Icon name="Waves" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">Vorsma SUP</span>
          </div>
          <p className="text-white/60">Аренда сапбордов на озёрах Ключик и Тосканка</p>
          <p className="text-sm text-white/40 mt-2">© 2025 Активный отдых в Ворсме</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

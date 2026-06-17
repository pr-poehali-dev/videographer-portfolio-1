import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  { icon: 'Video', title: 'Съёмка видео', desc: 'Полный цикл: от идеи до финального монтажа. Коммерция, имидж, события.' },
  { icon: 'Mic', title: 'Подкасты', desc: 'Многокамерная съёмка и динамичный монтаж выпусков любого формата.' },
  { icon: 'Smartphone', title: 'Reels', desc: 'Вертикальный контент, который удерживает внимание и набирает охваты.' },
  { icon: 'Plane', title: 'Трэвэл-шоу', desc: 'Кинематографичные путешествия с авторской цветокоррекцией и звуком.' },
];

const pricing = [
  { icon: 'Smartphone', title: 'Reels', price: '50 000', desc: 'Вертикальный ролик под ключ: съёмка, монтаж, звук, титры.', featured: false },
  { icon: 'Mic', title: 'Подкаст', price: '300 000', desc: 'Многокамерная съёмка выпуска и динамичный монтаж.', featured: true },
];

const portfolio = [
  'tTCQBQeh_G8',
  'I-d5O9VtLuc',
  'L7C05ZuNXyo',
  'iATVYAIsX5k',
  '9WKeU3QsuLk',
  'gs6ur_O5Lx4',
];

const Index = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-brand selection:text-white">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-xl tracking-widest uppercase">
            ВИДЕО<span className="text-brand">·</span>ГРАФ
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Цены</a>
            <a href="#work" className="hover:text-foreground transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button asChild className="rounded-none bg-brand hover:bg-brand/85 text-white font-display uppercase tracking-wider text-xs">
            <a href="#contact">Обсудить</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[480px] h-[480px] bg-brand/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <p className="font-display uppercase tracking-[0.4em] text-brand text-sm mb-6 animate-fade-in">Видеограф · Монтажёр</p>
          <h1 className="font-display font-bold uppercase leading-[0.9] text-[15vw] md:text-[10vw] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Делаю кадры,<br />
            <span className="text-stroke">которые продают</span>
          </h1>
          <div className="mt-10 max-w-xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.25s' }}>
            Съёмка и монтаж видео, подкастов, Reels и трэвэл-шоу. Вертикальный формат, кинематографичная картинка, истории, которые досматривают до конца.
          </div>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="rounded-none bg-brand hover:bg-brand/85 text-white font-display uppercase tracking-wider">
              <a href="#work">Смотреть работы</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-foreground/30 hover:bg-foreground/10 font-display uppercase tracking-wider bg-transparent">
              <a href="#contact">Заказать съёмку</a>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display font-bold uppercase text-4xl md:text-6xl tracking-tight">Услуги</h2>
            <span className="font-display text-muted-foreground text-sm uppercase tracking-widest">01 / Что я делаю</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s, i) => (
              <div key={i} className="group bg-background p-8 hover:bg-card transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-brand text-white mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="font-display font-semibold uppercase text-xl tracking-wide mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display font-bold uppercase text-4xl md:text-6xl tracking-tight">Цены</h2>
            <span className="font-display text-muted-foreground text-sm uppercase tracking-widest">02 / Стоимость</span>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border max-w-3xl">
            {pricing.map((p, i) => (
              <div
                key={i}
                className={`p-10 flex flex-col ${p.featured ? 'bg-brand text-white' : 'bg-card'}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center mb-6 ${p.featured ? 'bg-white text-brand' : 'bg-brand text-white'}`}>
                  <Icon name={p.icon} size={24} />
                </div>
                <h3 className="font-display font-semibold uppercase text-2xl tracking-wide mb-2">{p.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 ${p.featured ? 'text-white/80' : 'text-muted-foreground'}`}>{p.desc}</p>
                <div className="mt-auto flex items-baseline gap-2">
                  <span className="font-display font-bold text-5xl tracking-tight">{p.price}</span>
                  <span className="font-display uppercase text-sm tracking-widest opacity-70">тенге</span>
                </div>
                <Button asChild className={`mt-8 rounded-none font-display uppercase tracking-wider ${p.featured ? 'bg-white text-brand hover:bg-white/90' : 'bg-brand text-white hover:bg-brand/85'}`}>
                  <a href="#contact">Заказать</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display font-bold uppercase text-4xl md:text-6xl tracking-tight">Портфолио</h2>
            <span className="font-display text-muted-foreground text-sm uppercase tracking-widest">03 / Вертикальные ролики</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolio.map((id) => (
              <div key={id} className="relative group aspect-[9/16] bg-card border border-border overflow-hidden">
                {active === id ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="Видео портфолио"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setActive(id)}
                    className="absolute inset-0 w-full h-full"
                    aria-label="Воспроизвести видео"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt="Превью ролика"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 flex items-center justify-center bg-brand text-white group-hover:scale-110 transition-transform">
                        <Icon name="Play" size={28} />
                      </span>
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="font-display text-muted-foreground text-sm uppercase tracking-widest">04 / Контакты</span>
            <h2 className="font-display font-bold uppercase text-4xl md:text-6xl tracking-tight mt-4 mb-8">
              Снимем<br /><span className="text-brand">что-то крутое?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Расскажите о проекте — отвечу в течение дня и предложу формат под вашу задачу.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'Mail', label: 'hello@videograph.ru' },
                { icon: 'Phone', label: '+7 (999) 000-00-00' },
                { icon: 'Send', label: '@videograph' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-10 h-10 flex items-center justify-center border border-border text-brand">
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="text-foreground">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Ваше имя" className="rounded-none bg-card border-border h-12" />
            <Input placeholder="Телефон или Telegram" className="rounded-none bg-card border-border h-12" />
            <Textarea placeholder="Расскажите о проекте" rows={5} className="rounded-none bg-card border-border" />
            <Button type="submit" size="lg" className="w-full rounded-none bg-brand hover:bg-brand/85 text-white font-display uppercase tracking-wider">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display uppercase tracking-widest">ВИДЕО<span className="text-brand">·</span>ГРАФ</span>
          <span>© {new Date().getFullYear()} Все права защищены</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
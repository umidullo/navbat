export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ─── Navbar ─────────────────────────────────────────────── */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-5">
          <span className="text-2xl font-black text-white tracking-tight">Navbat</span>
          <div className="flex items-center gap-4">
            <a href="#business" className="text-sm text-white/80 hover:text-white transition-colors hidden sm:block">
              Для бизнеса
            </a>
            <a href="#" className="text-sm font-medium px-5 py-2.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors">
              Войти
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-gray-950 pt-36 pb-32 px-6 overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Онлайн-запись в Узбекистане
          </p>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Записывайся без&nbsp;
            <br className="hidden sm:block" />
            очередей
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
            Барбершопы, клиники, салоны красоты и другие услуги — в одном месте.
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl shadow-black/40 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 flex-1 px-4 py-3">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
              </svg>
              <input
                type="text"
                placeholder="Услуга или заведение..."
                className="flex-1 text-gray-800 placeholder-gray-400 text-sm outline-none bg-transparent"
              />
            </div>
            <div className="w-px bg-gray-200 hidden sm:block my-2" />
            <div className="flex items-center gap-3 flex-1 px-4 py-3">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                placeholder="Ташкент"
                className="flex-1 text-gray-800 placeholder-gray-400 text-sm outline-none bg-transparent"
              />
            </div>
            <button className="px-7 py-3.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-colors shrink-0">
              Найти
            </button>
          </div>

          {/* Popular tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["Барбер", "Маникюр", "Клиника", "Баня", "Массаж"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs hover:border-white/50 hover:text-white transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ──────────────────────────────────────────────── */}
      <section className="bg-gray-950 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "500+", label: "партнёров" },
            { value: "50 000+", label: "записей сделано" },
            { value: "10+", label: "городов" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl sm:text-3xl font-black text-white">{value}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Categories ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Найди своё заведение</h2>
          <p className="text-gray-500 mb-10">Все категории в одном месте</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "✂️", label: "Барбершопы", count: "120+" },
              { icon: "💅", label: "Маникюр", count: "80+" },
              { icon: "🏥", label: "Клиники", count: "60+" },
              { icon: "🧖", label: "Массаж", count: "45+" },
              { icon: "🛁", label: "Бани / СПА", count: "30+" },
              { icon: "💆", label: "Косметолог", count: "55+" },
            ].map(({ icon, label, count }) => (
              <button
                key={label}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all cursor-pointer text-center"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
                <span className="text-sm font-semibold text-gray-800">{label}</span>
                <span className="text-xs text-gray-400">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured venues ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Популярные заведения</h2>
              <p className="text-gray-500">Топ заведений по записям на этой неделе</p>
            </div>
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors hidden sm:block">
              Смотреть все →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Kings Barbershop",
                category: "Барбершоп",
                address: "Амира Темура, 45, Ташкент",
                rating: 4.9,
                reviews: 214,
                price: "от 40 000 сум",
                slots: ["11:00", "14:00", "16:30"],
                gradient: "from-slate-800 to-slate-600",
                badge: "Топ недели",
                badgeColor: "bg-yellow-400 text-yellow-900",
              },
              {
                name: "Nail Studio Maftuna",
                category: "Маникюр / Педикюр",
                address: "Чилонзор, 12-квартал, Ташкент",
                rating: 4.8,
                reviews: 189,
                price: "от 60 000 сум",
                slots: ["10:00", "13:30", "15:00"],
                gradient: "from-rose-400 to-pink-600",
                badge: "Популярно",
                badgeColor: "bg-pink-100 text-pink-700",
              },
              {
                name: "MedLife Klinika",
                category: "Клиника",
                address: "Мирзо-Улугбек, 78, Ташкент",
                rating: 4.7,
                reviews: 95,
                price: "от 50 000 сум",
                slots: ["09:00", "12:00", "17:00"],
                gradient: "from-sky-500 to-blue-700",
                badge: "Онлайн-запись",
                badgeColor: "bg-sky-100 text-sky-700",
              },
              {
                name: "Baxor Hammomlari",
                category: "Баня / СПА",
                address: "Яшнобод, 5-массив, Ташкент",
                rating: 4.9,
                reviews: 132,
                price: "от 80 000 сум",
                slots: ["10:00", "14:00", "18:00"],
                gradient: "from-emerald-500 to-teal-700",
                badge: null,
                badgeColor: "",
              },
              {
                name: "Relax Massage Center",
                category: "Массаж",
                address: "Юнусабад, 19-квартал, Ташкент",
                rating: 4.6,
                reviews: 77,
                price: "от 100 000 сум",
                slots: ["11:30", "15:30"],
                gradient: "from-violet-500 to-purple-700",
                badge: null,
                badgeColor: "",
              },
              {
                name: "Gulsanam Kosmetolog",
                category: "Косметолог",
                address: "Сергели, 11-квартал, Ташкент",
                rating: 5.0,
                reviews: 58,
                price: "от 120 000 сум",
                slots: ["09:30", "13:00", "16:00"],
                gradient: "from-amber-400 to-orange-500",
                badge: "Новинка",
                badgeColor: "bg-green-100 text-green-700",
              },
            ].map(({ name, category, address, rating, reviews, price, slots, gradient, badge, badgeColor }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
              >
                {/* Cover */}
                <div className={`relative h-44 bg-linear-to-br ${gradient}`}>
                  {badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeColor}`}>
                      {badge}
                    </span>
                  )}
                  {/* Avatar placeholder */}
                  <div className="absolute bottom-0 left-4 translate-y-1/2 w-14 h-14 rounded-xl bg-white border-2 border-white shadow-md flex items-center justify-center text-2xl">
                    {category.startsWith("Барб") ? "✂️"
                      : category.startsWith("Ман") ? "💅"
                      : category.startsWith("Кл") ? "🏥"
                      : category.startsWith("Ба") ? "🛁"
                      : category.startsWith("Мас") ? "🧖"
                      : "💆"}
                  </div>
                </div>

                {/* Body */}
                <div className="pt-10 px-5 pb-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-base leading-tight">{name}</h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-sm font-bold text-gray-800">{rating.toFixed(1)}</span>
                      <span className="text-xs text-gray-400">({reviews})</span>
                    </div>
                  </div>
                  <p className="text-xs text-indigo-600 font-medium mb-1">{category}</p>
                  <p className="text-xs text-gray-400 mb-4 flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {address}
                  </p>

                  {/* Available slots */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-xs text-gray-500">Сегодня:</span>
                    {slots.map((slot) => (
                      <span
                        key={slot}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">{price}</span>
                    <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors group-hover:shadow-md group-hover:shadow-indigo-200">
                      Записаться
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
              Смотреть все заведения →
            </a>
          </div>
        </div>
      </section>

      {/* ─── How it works ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">Просто и быстро</p>
              <h2 className="text-3xl font-black text-gray-900 leading-tight mb-6">
                Запись за&nbsp;
                <span className="text-indigo-600">30 секунд</span>
              </h2>
              <div className="flex flex-col gap-8">
                {[
                  {
                    step: "01",
                    title: "Найди услугу",
                    desc: "Выбери категорию или введи название места в поиске.",
                  },
                  {
                    step: "02",
                    title: "Выбери удобное время",
                    desc: "Посмотри свободные слоты мастера и выбери подходящее.",
                  },
                  {
                    step: "03",
                    title: "Приходи без очереди",
                    desc: "Получи напоминание и просто приди в нужное время.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-5">
                    <span className="text-3xl font-black text-indigo-200 leading-none shrink-0 w-10">{step}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock app card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-bold text-gray-900">Barbershop Tashkent</p>
                  <p className="text-xs text-gray-400 mt-0.5">ул. Амира Темура, 12</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-sm font-semibold text-gray-700">4.9</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-3">Выберите время</p>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"].map((time, i) => (
                  <button
                    key={time}
                    className={`py-2 rounded-xl text-xs font-semibold transition-colors ${
                      i === 2
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-indigo-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <button className="w-full py-3.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-colors">
                Подтвердить запись
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Что говорят клиенты</h2>
          <p className="text-gray-500 mb-12">Реальные отзывы пользователей Navbat</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Алишер Т.",
                city: "Ташкент",
                text: "Больше не стою в очереди в барбершопе. Записался за 30 секунд — пришёл и сразу сел в кресло.",
                rating: 5,
              },
              {
                name: "Нилуфар М.",
                city: "Самарканд",
                text: "Очень удобно найти мастера по маникюру рядом с домом. Напоминание пришло вовремя — ничего не забыла.",
                rating: 5,
              },
              {
                name: "Бобур К.",
                city: "Ташкент",
                text: "Записал жену в клинику через Navbat. Быстро, без лишних звонков. Рекомендую всем!",
                rating: 5,
              },
            ].map(({ name, city, text, rating }) => (
              <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Business CTA ───────────────────────────────────────── */}
      <section id="business" className="py-24 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">Для владельцев бизнеса</p>
            <h2 className="text-4xl font-black text-white leading-tight mb-6">
              Принимай записи&nbsp;
              <span className="text-indigo-400">онлайн</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Подключи своё заведение к Navbat и получай новых клиентов. Управляй расписанием, мастерами и отзывами в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="px-7 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors text-center"
              >
                Подключить бизнес
              </a>
              <a
                href="#"
                className="px-7 py-4 rounded-xl border border-white/20 text-white font-semibold hover:border-white/40 transition-colors text-center"
              >
                Узнать подробнее
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "📅", title: "Онлайн-расписание", desc: "Клиенты видят свободные слоты в реальном времени" },
              { icon: "🔔", title: "Авто-напоминания", desc: "Снижай количество пропущенных записей" },
              { icon: "📊", title: "Аналитика", desc: "Следи за статистикой и доходами" },
              { icon: "💬", title: "Отзывы", desc: "Собирай отзывы и улучшай репутацию" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="text-2xl mb-3 block">{icon}</span>
                <p className="text-white font-semibold text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ──────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            Попробуй Navbat уже сегодня
          </h2>
          <p className="text-indigo-200 text-lg mb-10">
            Тысячи записей каждый день — без звонков, без ожидания.
          </p>
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-xl bg-white text-indigo-700 text-base font-bold hover:bg-indigo-50 transition-colors shadow-xl shadow-indigo-800/30"
          >
            Найти услугу →
          </a>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-gray-950 border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-white font-black text-xl mb-1">Navbat</p>
              <p className="text-gray-600 text-sm">Онлайн-запись в Узбекистане</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">О нас</a>
              <a href="#business" className="hover:text-gray-300 transition-colors">Для бизнеса</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Поддержка</a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-white/5 text-gray-700 text-xs">
            © 2026 Navbat. Все права защищены.
          </div>
        </div>
      </footer>

    </div>
  );
}

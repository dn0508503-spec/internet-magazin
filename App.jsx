import React, { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Cloud Modular Sofa", category: "Диваны", price: 18500000, old: 22000000, tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900", color: "Sand", description: "Модульный диван с глубокими мягкими сиденьями и премиальной обивкой." },
  { id: 2, name: "Milano Velvet Sofa", category: "Диваны", price: 14900000, old: 17500000, tag: "SALE", image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=900", color: "Grey", description: "Элегантный диван с бархатной фактурой для современной гостиной." },
  { id: 3, name: "Arco Lounge Chair", category: "Кресла", price: 5200000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900", color: "Cream", description: "Дизайнерское кресло с плавными линиями и комфортной посадкой." },
  { id: 4, name: "Forma Lounge Chair", category: "Кресла", price: 4700000, old: 5600000, tag: "SALE", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900", color: "Black", description: "Акцентное кресло для уютной зоны отдыха." },
  { id: 5, name: "Luna King Bed", category: "Кровати", price: 12500000, old: 14900000, tag: "SALE", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900", color: "Beige", description: "Большая кровать с мягким изголовьем и лаконичным силуэтом." },
  { id: 6, name: "Noma Bed Frame", category: "Кровати", price: 9800000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900", color: "Oak", description: "Минималистичная кровать из натуральных материалов." },
  { id: 7, name: "Oak Dining Table", category: "Столы", price: 6900000, old: 7900000, tag: "SALE", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900", color: "Oak", description: "Обеденный стол с выразительной текстурой дерева." },
  { id: 8, name: "Sculpture Coffee Table", category: "Столы", price: 3500000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=900", color: "Walnut", description: "Скульптурный журнальный столик для стильной гостиной." },
  { id: 9, name: "Linea Dining Chair", category: "Стулья", price: 1850000, old: 2200000, tag: "SALE", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900", color: "Black", description: "Современный обеденный стул с комфортной спинкой." },
  { id: 10, name: "Nordic Chair Set", category: "Стулья", price: 4200000, old: 0, tag: "POPULAR", image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=900", color: "Oak", description: "Комплект стильных стульев в скандинавском стиле." },
  { id: 11, name: "Monaco Wardrobe", category: "Шкафы", price: 13900000, old: 15900000, tag: "SALE", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900", color: "Cream", description: "Вместительный шкаф с лаконичными фасадами." },
  { id: 12, name: "Minimal Closet", category: "Шкафы", price: 11200000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900", color: "White", description: "Современная система хранения для спальни." },
  { id: 13, name: "Siena Sideboard", category: "Комоды", price: 5800000, old: 6800000, tag: "SALE", image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=900", color: "Walnut", description: "Комод с вместительными отделениями и красивой отделкой." },
  { id: 14, name: "Aura Chest", category: "Комоды", price: 4900000, old: 0, tag: "POPULAR", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900", color: "Oak", description: "Компактный комод для спальни или гостиной." },
  { id: 15, name: "Forma Kitchen", category: "Кухни", price: 28900000, old: 32900000, tag: "SALE", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900", color: "White", description: "Современная кухня с чистыми линиями и функциональным хранением." },
  { id: 16, name: "Terra Kitchen Set", category: "Кухни", price: 24500000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900", color: "Sand", description: "Тёплая палитра и практичная организация пространства." },
  { id: 17, name: "Little Dream Bed", category: "Детская", price: 5600000, old: 6400000, tag: "SALE", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900", color: "White", description: "Удобная кровать для детской комнаты." },
  { id: 18, name: "Kids Study Desk", category: "Детская", price: 2900000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900", color: "Oak", description: "Рабочий стол для учёбы, творчества и игр." },
  { id: 19, name: "Executive Desk", category: "Офис", price: 7500000, old: 8900000, tag: "SALE", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900", color: "Walnut", description: "Большой рабочий стол для домашнего кабинета." },
  { id: 20, name: "Ergo Office Chair", category: "Офис", price: 3900000, old: 0, tag: "POPULAR", image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=900", color: "Black", description: "Эргономичное кресло для комфортной работы." },
  { id: 21, name: "Loft Bookshelf", category: "Полки", price: 3100000, old: 3600000, tag: "SALE", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=900", color: "Oak", description: "Открытый стеллаж для книг и предметов декора." },
  { id: 22, name: "Wall Shelf Set", category: "Полки", price: 1250000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900", color: "Black", description: "Настенные полки для стильного хранения." },
  { id: 23, name: "Entryway Console", category: "Прихожие", price: 4200000, old: 4900000, tag: "SALE", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900", color: "Sand", description: "Элегантная консоль для входной зоны." },
  { id: 24, name: "Soft Storage Bench", category: "Прихожие", price: 2700000, old: 0, tag: "POPULAR", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900", color: "Cream", description: "Мягкая банкетка с местом для хранения." },
  { id: 25, name: "Luxe TV Console", category: "Тумбы", price: 5100000, old: 6200000, tag: "SALE", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=900", color: "Walnut", description: "Тумба под телевизор с современным дизайном." },
  { id: 26, name: "Bedside Duo", category: "Тумбы", price: 2200000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900", color: "Oak", description: "Пара прикроватных тумб для спальни." },
  { id: 27, name: "Oval Mirror", category: "Декор", price: 1450000, old: 1750000, tag: "SALE", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900", color: "Gold", description: "Декоративное зеркало с выразительной формой." },
  { id: 28, name: "Lounge Ottoman", category: "Декор", price: 1750000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900", color: "Cream", description: "Мягкий пуф для зоны отдыха." },
  { id: 29, name: "Luxury Sectional", category: "Диваны", price: 22500000, old: 25900000, tag: "SALE", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900", color: "Grey", description: "Просторный угловой диван для большой гостиной." },
  { id: 30, name: "Boucle Accent Chair", category: "Кресла", price: 6100000, old: 0, tag: "NEW", image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=900", color: "Cream", description: "Кресло с фактурной обивкой букле." },
];

const categories = [
  "Все товары", "Диваны", "Кресла", "Кровати", "Столы",
  "Стулья", "Шкафы", "Комоды", "Кухни", "Детская",
  "Офис", "Полки", "Прихожие", "Тумбы", "Декор"
];

const formatPrice = (price) =>
  new Intl.NumberFormat("ru-RU").format(price) + " сум";

const promos = [
  { code: "IMEBEL20", discount: "20%", title: "Скидка на первый заказ", note: "Для новых покупателей" },
  { code: "HOME15", discount: "15%", title: "Уют начинается дома", note: "На избранную мебель" },
  { code: "LUXE10", discount: "10%", title: "Luxury Weekend", note: "На дизайнерские коллекции" }
];

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [category, setCategory] = useState("Все товары");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [activeTab, setActiveTab] = useState("Все");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modal, setModal] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (category !== "Все товары") {
      list = list.filter((item) => item.category === category);
    }

    if (search.trim()) {
      const term = search.toLowerCase();
      list = list.filter((item) =>
        `${item.name} ${item.category} ${item.color}`.toLowerCase().includes(term)
      );
    }

    if (activeTab === "Акции") list = list.filter((item) => item.old > item.price);
    if (activeTab === "Новинки") list = list.filter((item) => item.tag === "NEW");
    if (activeTab === "Хиты") list = list.filter((item) => item.tag === "BESTSELLER" || item.tag === "POPULAR");

    if (sort === "cheap") list.sort((a, b) => a.price - b.price);
    if (sort === "expensive") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [category, search, activeTab, sort]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const exists = oldCart.find((item) => item.id === product.id);
      if (exists) {
        return oldCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...oldCart, { ...product, quantity: 1 }];
    });
    setPromoMessage(`${product.name} добавлен в корзину`);
    setTimeout(() => setPromoMessage(""), 2200);
  };

  const changeQuantity = (id, amount) => {
    setCart((oldCart) =>
      oldCart
        .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  };

  const copyPromo = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setPromoMessage(`Промокод ${code} скопирован!`);
    } catch {
      setPromoMessage(`Ваш промокод: ${code}`);
    }
    setTimeout(() => setPromoMessage(""), 2500);
  };

  const goToCatalog = (name = "Все товары") => {
    setCategory(name);
    setActiveTab("Все");
    setShowAll(true);
    setMobileMenu(false);
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);
    return (
    <div className={`imebel theme-${theme}`}>
      <style>{styles}</style>

      <div className="announcement">
        <span>NEW SEASON / 2026</span>
        <p>Новая коллекция уже в iMebel — откройте свой стиль</p>
        <span>ДОСТАВКА ПО УЗБЕКИСТАНУ</span>
      </div>

      <header className="site-header">
        <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        <a className="brand" href="#">
          <span className="brand-mark">i.</span>
          <span className="brand-name">MEBEL<small>FURNITURE ATELIER</small></span>
        </a>

        <nav className={mobileMenu ? "main-nav nav-open" : "main-nav"}>
          <a href="#catalog" onClick={() => setMobileMenu(false)}>Каталог</a>
          <a href="#collections" onClick={() => setMobileMenu(false)}>Коллекции</a>
          <a href="#offers" onClick={() => setMobileMenu(false)}>Акции</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>О бренде</a>
        </nav>

        <div className="header-actions">
          <label className="search-field">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowAll(true); }}
              placeholder="Поиск мебели..."
            />
          </label>
          <button className="header-action" onClick={() => setModal("favorites")} title="Избранное">
            ♡<sup>{favorites.length}</sup>
          </button>
          <button className="header-action cart-trigger" onClick={() => setModal("cart")} title="Корзина">
            ♧<sup>{cartCount}</sup>
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> THE ART OF LIVING</div>
            <h1>Пространство.<br /><i>Характер.</i><br />Комфорт.</h1>
            <p>Мебель, которая превращает обычный интерьер в личную историю. Откройте коллекцию предметов с характером.</p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => goToCatalog()}>Открыть коллекцию <span>↗</span></button>
              <a href="#collections" className="text-link">Исследовать бренд ↗</a>
            </div>
            <div className="hero-index">
              <strong>01</strong><span></span><small>DESIGNED FOR LIVING</small>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1500" alt="Дизайнерский интерьер гостиной" />
            <div className="hero-image-label">
              <span>01 / 04</span>
              <strong>Quiet luxury</strong>
              <small>Коллекция для медленной жизни</small>
            </div>
            <div className="hero-round-stamp">iMEBEL<br /><span>EST. 2026</span></div>
          </div>
          <div className="hero-side-note">INTERIOR / OBJECTS / LIFESTYLE</div>
        </section>

        <section className="trust-line">
          <span>DESIGNED WITH PURPOSE</span>
          <span>✳</span>
          <span>TIMELESS MATERIALS</span>
          <span>✳</span>
          <span>MADE FOR YOUR SPACE</span>
          <span>✳</span>
          <span>iMEBEL COLLECTION</span>
        </section>

        <section className="category-section" id="collections">
          <div className="section-heading">
            <div>
              <div className="eyebrow">EXPLORE OUR WORLD</div>
              <h2>Найдите свой <i>характер</i></h2>
            </div>
            <p>От выразительных акцентов до предметов, которые создают основу вашего дома.</p>
          </div>

          <div className="category-showcase">
            {[
              ["Диваны", "01", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900", "Место для отдыха"],
              ["Кресла", "02", "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900", "Ваш личный уголок"],
              ["Кровати", "03", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900", "Искусство отдыха"],
              ["Столы", "04", "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900", "Встречайтесь чаще"],
            ].map(([name, number, image, caption]) => (
              <button className="category-tile" key={name} onClick={() => goToCatalog(name)}>
                <img src={image} alt={name} />
                <span className="tile-number">{number} / 04</span>
                <span className="tile-caption"><small>{caption}</small><strong>{name}</strong></span>
                <span className="tile-arrow">↗</span>
              </button>
            ))}
          </div>
          <div className="all-categories">
            {categories.slice(1).map((name) => (
              <button key={name} onClick={() => goToCatalog(name)}>{name} <span>↗</span></button>
            ))}
          </div>
        </section>

        <section className="products-section" id="catalog">
          <div className="section-heading product-heading">
            <div>
              <div className="eyebrow">THE COLLECTION / 2026</div>
              <h2>Предметы <i>желания</i></h2>
            </div>
            <div className="catalog-controls">
              <span>{filteredProducts.length} предметов</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Рекомендуемые</option>
                <option value="cheap">Сначала дешевле</option>
                <option value="expensive">Сначала дороже</option>
                <option value="name">По названию</option>
              </select>
            </div>
          </div>

          <div className="catalog-toolbar">
            <div className="catalog-tabs">
              {["Все", "Хиты", "Новинки", "Акции"].map((tab) => (
                <button key={tab} className={activeTab === tab ? "tab-active" : ""} onClick={() => {
                  setActiveTab(tab);
                  setCategory("Все товары");
                  setShowAll(true);
                }}>{tab}</button>
              ))}
            </div>
            <div className="category-select-wrap">
              <span>Категория</span>
              <select value={category} onChange={(e) => { setCategory(e.target.value); setShowAll(true); }}>
                {categories.map((name) => <option key={name}>{name}</option>)}
              </select>
            </div>
          </div>

          <div className="product-grid">
            {displayedProducts.map((product, index) => (
              <article className="product-card" key={product.id} style={{ animationDelay: `${index * 45}ms` }}>
                <div className="product-image-wrap" onClick={() => setSelectedProduct(product)}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.tag && <span className={`product-label label-${product.tag.toLowerCase()}`}>{product.tag}</span>}
                  {product.old > product.price && (
                    <span className="discount-label">-{Math.round((1 - product.price / product.old) * 100)}%</span>
                  )}
                  <button className={`heart-btn ${favorites.includes(product.id) ? "is-favorite" : ""}`}
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}>
                    {favorites.includes(product.id) ? "♥" : "♡"}
                  </button>
                  <button className="view-product" onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}>
                    Быстрый просмотр ↗
                  </button>
                </div>
                <div className="product-meta">
                  <div className="product-category">{product.category} <span>{product.color}</span></div>
                  <h3 onClick={() => setSelectedProduct(product)}>{product.name}</h3>
                  <div className="price-line">
                    <strong>{formatPrice(product.price)}</strong>
                    {product.old > product.price && <del>{formatPrice(product.old)}</del>}
                  </div>
                  <button className="add-button" onClick={() => addToCart(product)}>
                    <span>Добавить в корзину</span><b>+</b>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="empty-state">
              <span>⌕</span><h3>Ничего не найдено</h3>
              <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
              <button className="outline-btn" onClick={() => { setSearch(""); setCategory("Все товары"); setActiveTab("Все"); }}>Сбросить фильтры</button>
            </div>
          )}

          {!showAll && filteredProducts.length > 8 && (
            <button className="load-more" onClick={() => setShowAll(true)}>Показать больше предметов <span>↓</span></button>
          )}
        </section>

        <section className="promo-editorial" id="offers">
          <div className="promo-photo">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400" alt="Современный интерьер" />
            <span className="photo-caption">THE ART OF HOME / 2026</span>
          </div>
          <div className="promo-copy">
            <div className="eyebrow">A LITTLE SOMETHING FOR YOU</div>
            <h2>Ваш новый интерьер.<br /><i>Ваша особая цена.</i></h2>
            <p>Выбирайте любимые предметы и используйте специальные предложения iMebel.</p>
            <div className="promo-code-main">
              <div><small>ВАШ ПРОМОКОД</small><strong>IMEBEL20</strong></div>
              <button onClick={() => copyPromo("IMEBEL20")}>Копировать ↗</button>
            </div>
            <small className="promo-footnote">* Демонстрационный промокод. Реальная скидка требует подключения системы заказов.</small>
          </div>
        </section>

        <section className="promo-cards-section">
          <div className="section-heading">
            <div><div className="eyebrow">EXCLUSIVE OFFERS</div><h2>Особенные <i>предложения</i></h2></div>
            <span className="offer-count">03 / OFFERS</span>
          </div>
          <div className="promo-cards">
            {promos.map((promo, index) => (
              <article className="promo-card" key={promo.code}>
                <span className="promo-number">0{index + 1}</span>
                <div className="promo-discount">{promo.discount}</div>
                <h3>{promo.title}</h3>
                <p>{promo.note}</p>
                <div className="promo-card-bottom">
                  <strong>{promo.code}</strong>
                  <button onClick={() => copyPromo(promo.code)}>Копировать ↗</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-story" id="about">
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200" alt="Интерьер iMebel" />
            <span>FORM FOLLOWS FEELING.</span>
          </div>
          <div className="story-copy">
            <div className="eyebrow">A DIFFERENT WAY TO LIVE</div>
            <h2>Дом — это не просто место. Это <i>ощущение.</i></h2>
            <p>Мы верим, что мебель должна быть не только красивой. Она должна создавать настроение, отражать индивидуальность и делать каждый день немного лучше.</p>
            <button className="text-link" onClick={() => goToCatalog()}>Откройте коллекцию ↗</button>
            <div className="story-signature">iMEBEL <span>— FURNITURE ATELIER</span></div>
          </div>
        </section>

        <section className="service-strip">
          <div><span>01</span><strong>Продуманный дизайн</strong><small>Вещи с характером и смыслом</small></div>
          <div><span>02</span><strong>Доставка по стране</strong><small>Доставка по Узбекистану</small></div>
          <div><span>03</span><strong>Забота о клиентах</strong><small>Помощь на каждом этапе</small></div>
          <div><span>04</span><strong>Ваш выбор</strong><small>Мебель для разных интерьеров</small></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#"><span className="brand-mark">i.</span><span className="brand-name">MEBEL<small>FURNITURE ATELIER</small></span></a>
            <p>Создаём пространство, в котором хочется жить.</p>
          </div>
          <div><strong>КОЛЛЕКЦИИ</strong><a href="#catalog">Мебель</a><a href="#collections">Категории</a><a href="#offers">Специальные предложения</a></div>
          <div><strong>ИНФОРМАЦИЯ</strong><a href="#about">О бренде</a><a href="#about">Доставка</a><a href="#about">Контакты</a></div>
          <div><strong>БУДЕМ НА СВЯЗИ</strong><a href="tel:+998901234567">+998 90 123 45 67</a><a href="mailto:hello@imebel.uz">hello@imebel.uz</a><span>Ташкент, Узбекистан</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 iMebel. Все права защищены.</span><span>MADE WITH ♥ FOR YOUR HOME</span></div>
      </footer>

      <div className="theme-dock">
        <span>THEME</span>
        {[
          ["dark", "Графит"],
          ["purple", "Фиолетовый"],
          ["light", "Белый"],
          ["green", "Зелёный"]
        ].map(([value, label]) => (
          <button key={value} title={label} aria-label={label}
            className={`theme-swatch swatch-${value} ${theme === value ? "swatch-selected" : ""}`}
            onClick={() => setTheme(value)} />
        ))}
      </div>

      {promoMessage && <div className="toast-message">{promoMessage}</div>}

      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-product-image"><img src={selectedProduct.image} alt={selectedProduct.name} /></div>
            <div className="modal-product-info">
              <div className="eyebrow">{selectedProduct.category} / iMEBEL EDITION</div>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <div className="modal-price">{formatPrice(selectedProduct.price)}</div>
              <small>Цвет: {selectedProduct.color}</small>
              <button className="primary-btn modal-add" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>Добавить в корзину ↗</button>
            </div>
          </div>
        </div>
      )}

      {modal && (
        <div className="modal-backdrop" onClick={() => setModal("")}>
          <div className="side-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal("")}>×</button>
            {modal === "cart" ? (
              <>
                <div className="eyebrow">YOUR SELECTION</div>
                <h2>Корзина <i>({cartCount})</i></h2>
                {cart.length === 0 ? (
                  <div className="empty-state"><span>♧</span><h3>Корзина пока пуста</h3><p>Добавьте предметы из коллекции.</p><button className="primary-btn" onClick={() => { setModal(""); goToCatalog(); }}>В каталог ↗</button></div>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                          <img src={item.image} alt={item.name} />
                          <div className="cart-item-info"><strong>{item.name}</strong><small>{formatPrice(item.price)}</small>
                            <div className="quantity-control">
                              <button onClick={() => changeQuantity(item.id, -1)}>−</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                            </div>
                          </div>
                          <button className="remove-item" onClick={() => setCart((old) => old.filter((x) => x.id !== item.id))}>×</button>
                        </div>
                      ))}
                    </div>
                    <div className="cart-summary"><span>Итого</span><strong>{formatPrice(cartTotal)}</strong></div>
                    <button className="primary-btn checkout-btn" onClick={() => setModal("checkout")}>Перейти к оформлению ↗</button>
                    <small className="demo-note">Демонстрационная корзина. Для реальных заказов потребуется backend.</small>
                  </>
                )}
              </>
            ) : modal === "favorites" ? (
              <>
                <div className="eyebrow">YOUR SAVED ITEMS</div><h2>Избранное <i>({favorites.length})</i></h2>
                <div className="cart-items">
                  {products.filter((p) => favorites.includes(p.id)).map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info"><strong>{item.name}</strong><small>{formatPrice(item.price)}</small>
                        <button className="favorite-add" onClick={() => { addToCart(item); setModal("cart"); }}>В корзину +</button>
                      </div>
                      <button className="remove-item" onClick={() => toggleFavorite(item.id)}>×</button>
                    </div>
                  ))}
                </div>
                {favorites.length === 0 && <div className="empty-state"><span>♡</span><h3>Пока ничего нет</h3><p>Нажмите на сердечко у понравившегося товара.</p></div>}
              </>
            ) : (
              <>
                <div className="eyebrow">ONE LAST STEP</div><h2>Оформление <i>заказа</i></h2>
                <p>Это демонстрационная форма. Подключение реальной отправки заказов ещё потребуется.</p>
                <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); alert("Демо: заказ готов. Для реального оформления подключите сервер."); }}>
                  <label>Ваше имя<input required placeholder="Имя и фамилия" /></label>
                  <label>Телефон<input required type="tel" placeholder="+998 __ ___ __ __" /></label>
                  <label>Адрес доставки<input required placeholder="Город, улица, дом" /></label>
                  <button className="primary-btn" type="submit">Подтвердить демо-заказ</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:100px}
body{margin:0;font-family:'DM Sans',sans-serif}
button,input,select{font:inherit}
button{cursor:pointer}
a{text-decoration:none;color:inherit}
button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid var(--accent);outline-offset:3px}

.imebel{
--bg:#171817;
--surface:#20211f;
--surface2:#272825;
--text:#f3f0e9;
--muted:#a5a49b;
--line:#3b3b35;
--accent:#c59a70;
--accent-soft:#352d25;
--image-overlay:rgba(12,13,12,.2);
min-height:100vh;background:var(--bg);color:var(--text);
transition:background .3s,color .3s;overflow:hidden;
}
.theme-dark{--bg:#171817;--surface:#20211f;--surface2:#272825;--text:#f3f0e9;--muted:#a5a49b;--line:#3b3b35;--accent:#c59a70;--accent-soft:#352d25}
.theme-purple{--bg:#17131e;--surface:#211b2b;--surface2:#2b2337;--text:#f5effb;--muted:#b3a8bf;--line:#40344d;--accent:#b59ad9;--accent-soft:#352943}
.theme-light{--bg:#f4f1eb;--surface:#fffdfa;--surface2:#eae5dc;--text:#292720;--muted:#827d73;--line:#ded9d0;--accent:#9c704a;--accent-soft:#eee4d8}
.theme-green{--bg:#131b17;--surface:#1c2821;--surface2:#24332a;--text:#edf3eb;--muted:#a6b5a8;--line:#35473b;--accent:#9dbb91;--accent-soft:#293c30}

.announcement{
height:32px;background:var(--accent);color:#171817;
display:flex;align-items:center;justify-content:space-between;padding:0 5%;
font-size:8px;letter-spacing:1.5px;font-weight:700
}
.announcement p{font-size:9px;letter-spacing:.5px;font-weight:500}

.site-header{
height:84px;padding:0 5%;display:flex;align-items:center;justify-content:space-between;
gap:30px;background:var(--bg);border-bottom:1px solid var(--line);
position:sticky;top:0;z-index:20
}
.brand{display:flex;align-items:center;gap:9px;flex-shrink:0}
.brand-mark{font:italic 48px 'Playfair Display',serif;color:var(--accent);line-height:1}
.brand-name{font:800 16px Manrope,sans-serif;letter-spacing:3px}
.brand-name small{display:block;font-size:7px;letter-spacing:2px;color:var(--muted);margin-top:5px;font-weight:500}
.main-nav{display:flex;align-items:center;gap:32px}
.main-nav a{font-size:10px;color:var(--muted);transition:color .2s;letter-spacing:.4px}
.main-nav a:hover{color:var(--accent)}
.header-actions{display:flex;align-items:center;gap:19px}
.search-field{height:36px;width:175px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:8px}
.search-field span{font-size:23px;color:var(--accent)}
.search-field input{width:100%;min-width:0;border:0;outline:0;background:transparent;color:var(--text);font-size:10px}
.search-field input::placeholder{color:var(--muted)}
.header-action{border:0;background:none;color:var(--text);font-size:23px;position:relative}
.header-action sup{position:absolute;top:-3px;right:-8px;background:var(--accent);color:#171817;border-radius:50%;min-width:15px;height:15px;display:grid;place-items:center;font-size:8px}
.mobile-menu-btn{display:none}

.hero-section{
min-height:600px;display:grid;grid-template-columns:43% 57%;position:relative;
padding:55px 5% 60px;align-items:center
}
.hero-copy{padding:15px 30px 15px 0;position:relative;z-index:2}
.eyebrow{font-size:8px;letter-spacing:2.5px;color:var(--accent);font-weight:700}
.hero-copy .eyebrow{display:flex;align-items:center;gap:11px}
.hero-copy .eyebrow span{width:25px;height:1px;background:var(--accent)}
.hero-copy h1{font:500 clamp(56px,7vw,95px)/.99 'Playfair Display',serif;letter-spacing:-3px;margin:35px 0 25px}
.hero-copy h1 i,.section-heading h2 i,.promo-copy h2 i,.story-copy h2 i{font-weight:500;color:var(--accent)}
.hero-copy>p{max-width:365px;color:var(--muted);font-size:12px;line-height:2}
.hero-buttons{display:flex;align-items:center;gap:25px;margin-top:32px}
.primary-btn{background:var(--accent);color:#171817;border:1px solid var(--accent);padding:15px 22px;font-size:9px;letter-spacing:.7px;font-weight:700;transition:all .25s}
.primary-btn:hover{background:transparent;color:var(--accent);transform:translateY(-2px)}
.primary-btn span{margin-left:16px;font-size:14px}
.text-link{background:none;border:0;color:var(--text);font-size:9px;border-bottom:1px solid var(--accent);padding:0 0 7px}
.hero-index{display:flex;align-items:center;gap:12px;margin-top:70px}
.hero-index strong{font:22px 'Playfair Display',serif;color:var(--accent)}
.hero-index span{height:1px;width:50px;background:var(--line)}
.hero-index small{font-size:7px;letter-spacing:2px;color:var(--muted)}
.hero-visual{height:490px;position:relative;margin-left:15px}
.hero-visual:before{content:"";position:absolute;inset:-13px 13px 13px -13px;border:1px solid var(--accent);opacity:.5}
.hero-visual>img{width:100%;height:100%;object-fit:cover;position:relative;display:block;filter:saturate(.8)}
.hero-image-label{position:absolute;bottom:22px;left:22px;background:rgba(20,21,19,.83);backdrop-filter:blur(8px);padding:17px 22px;display:flex;flex-direction:column;gap:6px}
.hero-image-label span{font-size:7px;color:var(--accent);letter-spacing:2px}
.hero-image-label strong{font:24px 'Playfair Display',serif}
.hero-image-label small{font-size:9px;color:#c8c4b9}
.hero-round-stamp{position:absolute;right:-30px;top:25px;width:90px;height:90px;border:1px solid var(--accent);border-radius:50%;background:var(--bg);display:flex;align-items:center;justify-content:center;flex-direction:column;font:13px 'Playfair Display',serif;color:var(--accent);text-align:center;transform:rotate(12deg)}
.hero-round-stamp span{font:6px 'DM Sans';letter-spacing:1px;margin-top:4px}
.hero-side-note{position:absolute;right:1.5%;top:50%;writing-mode:vertical-rl;font-size:7px;letter-spacing:3px;color:var(--muted)}

.trust-line{height:62px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;justify-content:space-around;align-items:center;padding:0 4%;gap:12px;color:var(--muted);font-size:8px;letter-spacing:2px}
.trust-line span:nth-child(even){color:var(--accent);font-size:15px}

.category-section,.products-section,.promo-cards-section{padding:100px 5% 30px}
.section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:35px}
.section-heading h2{font:500 clamp(34px,4vw,51px)/1.15 'Playfair Display',serif;margin:13px 0 0;letter-spacing:-1px}
.section-heading>p{max-width:310px;font-size:10px;line-height:1.9;color:var(--muted);margin:0 0 4px}
.category-showcase{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}
.category-tile{height:330px;border:0;padding:0;background:var(--surface);position:relative;overflow:hidden;text-align:left;color:white}
.category-tile:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.72),transparent 60%)}
.category-tile img{width:100%;height:100%;object-fit:cover;transition:transform .7s,filter .5s;filter:brightness(.8)}
.category-tile:hover img{transform:scale(1.08);filter:brightness(.95)}
.tile-number{position:absolute;z-index:2;top:17px;left:17px;font-size:8px;letter-spacing:2px;color:#eee}
.tile-caption{position:absolute;z-index:2;bottom:22px;left:20px;display:flex;flex-direction:column;gap:7px}
.tile-caption small{font-size:8px;color:#ddd;letter-spacing:1px}
.tile-caption strong{font:27px 'Playfair Display',serif}
.tile-arrow{position:absolute;z-index:2;right:19px;bottom:23px;font-size:20px;color:var(--accent)}
.all-categories{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.all-categories button{border:1px solid var(--line);background:transparent;color:var(--muted);padding:10px 14px;font-size:9px;transition:.2s}
.all-categories button:hover{border-color:var(--accent);color:var(--accent)}
.all-categories span{margin-left:10px;color:var(--accent)}

.products-section{padding-top:105px}
.product-heading{margin-bottom:30px}
.catalog-controls{display:flex;align-items:center;gap:15px}
.catalog-controls>span{font-size:9px;color:var(--muted)}
.catalog-controls select,.category-select-wrap select{background:var(--surface);border:1px solid var(--line);padding:11px 13px;color:var(--text);font-size:9px;outline:0}
.catalog-toolbar{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:13px 0;margin-bottom:25px;gap:15px}
.catalog-tabs{display:flex;gap:25px}
.catalog-tabs button{border:0;background:none;color:var(--muted);font-size:10px;padding:7px 0;position:relative}
.catalog-tabs button.tab-active{color:var(--accent)}
.catalog-tabs button.tab-active:after{content:"";position:absolute;bottom:-14px;left:0;width:100%;height:2px;background:var(--accent)}
.category-select-wrap{display:flex;align-items:center;gap:10px}
.category-select-wrap span{font-size:9px;color:var(--muted)}
.product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 16px}
.product-card{min-width:0;animation:rise .5s both}
@keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.product-image-wrap{height:260px;position:relative;background:var(--surface);overflow:hidden;cursor:pointer}
.product-image-wrap>img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s,filter .4s;filter:saturate(.83)}
.product-card:hover .product-image-wrap>img{transform:scale(1.06);filter:saturate(1)}
.product-label{position:absolute;top:13px;left:13px;padding:6px 9px;background:var(--accent);color:#171817;font-size:7px;font-weight:800;letter-spacing:1px}
.label-sale{background:#c87c55;color:white}
.label-new{background:#e7e1d4;color:#25231f}
.label-popular,.label-bestseller{background:#333b34;color:#d8e2d3}
.discount-label{position:absolute;top:13px;right:13px;color:white;background:#9c4d3e;padding:6px 8px;font-size:8px}
.heart-btn{position:absolute;right:12px;top:48px;border:0;background:rgba(20,20,20,.7);color:white;border-radius:50%;width:32px;height:32px;font-size:18px;transition:.2s}
.heart-btn:hover,.heart-btn.is-favorite{color:#f08a83;background:#fff}
.view-product{position:absolute;left:12px;right:12px;bottom:12px;background:rgba(20,20,20,.86);color:white;border:1px solid rgba(255,255,255,.3);padding:12px;font-size:9px;opacity:0;transform:translateY(8px);transition:.3s}
.product-card:hover .view-product{opacity:1;transform:translateY(0)}
.product-meta{padding:14px 2px 0}
.product-category{display:flex;justify-content:space-between;color:var(--accent);font-size:8px;letter-spacing:.7px;text-transform:uppercase}
.product-category span{color:var(--muted);text-transform:none;letter-spacing:0}
.product-meta h3{font:500 17px 'Playfair Display',serif;margin:10px 0;cursor:pointer}
.product-meta h3:hover{color:var(--accent)}
.price-line{display:flex;align-items:center;gap:10px}
.price-line strong{font:600 11px Manrope,sans-serif}
.price-line del{font-size:9px;color:var(--muted)}
.add-button{width:100%;display:flex;justify-content:space-between;align-items:center;margin-top:15px;padding:11px 0;border:0;border-top:1px solid var(--line);background:transparent;color:var(--text);font-size:9px;text-align:left;transition:.2s}
.add-button b{font-size:18px;font-weight:400;color:var(--accent)}
.add-button:hover{color:var(--accent);padding-left:5px}
.load-more,.outline-btn{display:block;margin:45px auto 0;background:transparent;border:1px solid var(--accent);color:var(--accent);padding:14px 23px;font-size:9px;letter-spacing:.5px}
.load-more span{margin-left:15px}
.empty-state{text-align:center;padding:65px 15px;color:var(--muted)}
.empty-state>span{font:45px 'Playfair Display',serif;color:var(--accent)}
.empty-state h3{font:25px 'Playfair Display',serif;color:var(--text)}
.empty-state p{font-size:10px}

.promo-editorial{margin:110px 5% 30px;display:grid;grid-template-columns:55% 45%;min-height:430px;background:var(--surface)}
.promo-photo{position:relative;min-height:430px;overflow:hidden}
.promo-photo img{width:100%;height:100%;position:absolute;inset:0;object-fit:cover;filter:saturate(.75)}
.photo-caption{position:absolute;bottom:18px;left:20px;color:white;font-size:8px;letter-spacing:2px}
.promo-copy{padding:55px 9%;display:flex;flex-direction:column;justify-content:center}
.promo-copy h2{font:500 clamp(31px,3.5vw,46px)/1.2 'Playfair Display',serif;margin:20px 0}
.promo-copy>p{font-size:10px;color:var(--muted);line-height:1.9;max-width:350px}
.promo-code-main{margin-top:30px;border:1px dashed var(--accent);padding:15px 17px;display:flex;align-items:center;justify-content:space-between;gap:10px}
.promo-code-main div{display:flex;flex-direction:column;gap:7px}
.promo-code-main small{font-size:7px;letter-spacing:2px;color:var(--muted)}
.promo-code-main strong{font:600 19px Manrope;letter-spacing:2px;color:var(--accent)}
.promo-code-main button{background:var(--accent);color:#171817;border:0;padding:12px;font-size:8px;font-weight:700}
.promo-footnote{font-size:8px;color:var(--muted);margin-top:13px;line-height:1.6}

.promo-cards-section{padding-top:80px}
.offer-count{font-size:8px;letter-spacing:2px;color:var(--muted)}
.promo-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.promo-card{position:relative;background:var(--surface);border:1px solid var(--line);padding:27px;min-height:220px;transition:transform .3s,border-color .3s}
.promo-card:hover{transform:translateY(-6px);border-color:var(--accent)}
.promo-number{position:absolute;top:20px;right:20px;color:var(--muted);font-size:9px}
.promo-discount{font:500 42px 'Playfair Display',serif;color:var(--accent)}
.promo-card h3{font:20px 'Playfair Display',serif;margin:8px 0}
.promo-card p{font-size:9px;color:var(--muted)}
.promo-card-bottom{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding-top:14px;margin-top:23px}
.promo-card-bottom strong{font-size:10px;letter-spacing:1.5px}
.promo-card-bottom button{background:transparent;border:0;color:var(--accent);font-size:9px}

.brand-story{margin:100px 5%;display:grid;grid-template-columns:1fr 1fr;min-height:430px;background:var(--surface)}
.story-image{position:relative;min-height:430px}
.story-image img{width:100%;height:100%;position:absolute;inset:0;object-fit:cover}
.story-image span{position:absolute;bottom:20px;left:20px;background:rgba(0,0,0,.7);padding:10px 14px;color:white;font-size:8px;letter-spacing:2px}
.story-copy{padding:55px 12%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}
.story-copy h2{font:500 clamp(32px,3.7vw,48px)/1.2 'Playfair Display',serif;margin:18px 0}
.story-copy>p{font-size:10px;color:var(--muted);line-height:2;max-width:400px}
.story-copy .text-link{margin-top:22px}
.story-signature{margin-top:42px;font:italic 22px 'Playfair Display',serif;color:var(--accent)}
.story-signature span{font:7px 'DM Sans';letter-spacing:1.5px;color:var(--muted)}

.service-strip{display:grid;grid-template-columns:repeat(4,1fr);padding:40px 5%;border-top:1px solid var(--line);border-bottom:1px solid var(--line);gap:20px}
.service-strip>div{display:grid;grid-template-columns:32px 1fr;column-gap:12px;align-items:center}
.service-strip>div>span{grid-row:span 2;color:var(--accent);font:20px 'Playfair Display',serif}
.service-strip strong{font-size:10px;font-weight:600}
.service-strip small{font-size:8px;color:var(--muted);margin-top:5px}

.site-footer{padding:55px 5% 20px;background:var(--surface)}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1.2fr;gap:35px;padding-bottom:45px}
.footer-brand p{font-size:10px;color:var(--muted);margin-top:18px}
.footer-top>div:not(:first-child){display:flex;flex-direction:column;gap:15px}
.footer-top>div>strong{font-size:8px;letter-spacing:2px;color:var(--accent);margin-bottom:5px}
.footer-top>div>a:not(.brand),.footer-top>div>span{font-size:9px;color:var(--muted);transition:.2s}
.footer-top>div>a:hover{color:var(--accent)}
.footer-bottom{border-top:1px solid var(--line);padding-top:18px;display:flex;justify-content:space-between;color:var(--muted);font-size:8px;letter-spacing:1px}

.theme-dock{position:fixed;z-index:30;right:22px;bottom:20px;display:flex;align-items:center;gap:10px;padding:10px 15px;background:var(--surface);border:1px solid var(--line);box-shadow:0 8px 30px rgba(0,0,0,.22)}
.theme-dock>span{font-size:7px;letter-spacing:2px;color:var(--muted);margin-right:4px}
.theme-swatch{width:19px;height:19px;border-radius:50%;border:2px solid var(--line);padding:0;transition:transform .2s}
.theme-swatch:hover{transform:scale(1.2)}
.swatch-dark{background:#171817}.swatch-purple{background:#72528e}.swatch-light{background:#f4f1eb}.swatch-green{background:#476a50}
.swatch-selected{outline:1px solid var(--accent);outline-offset:3px}
.toast-message{position:fixed;z-index:60;left:50%;bottom:80px;transform:translateX(-50%);background:var(--accent);color:#171817;padding:13px 22px;font-size:10px;font-weight:700;box-shadow:0 5px 20px rgba(0,0,0,.2);animation:toastIn .3s both}
@keyframes toastIn{from{opacity:0;transform:translate(-50%,12px)}to{opacity:1;transform:translate(-50%,0)}}

.modal-backdrop{position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.72);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .2s}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.product-modal{position:relative;display:grid;grid-template-columns:1fr 1fr;width:min(850px,100%);max-height:90vh;overflow:auto;background:var(--surface);color:var(--text)}
.modal-product-image{min-height:400px}
.modal-product-image img{width:100%;height:100%;object-fit:cover;display:block}
.modal-product-info{padding:55px 35px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}
.modal-product-info h2{font:34px 'Playfair Display',serif;margin:18px 0}
.modal-product-info p{font-size:11px;line-height:1.9;color:var(--muted)}
.modal-price{font:600 18px Manrope;color:var(--accent);margin:18px 0}
.modal-product-info>small{color:var(--muted);font-size:9px}
.modal-add{margin-top:25px;width:100%}
.modal-close{position:absolute;right:15px;top:13px;z-index:3;width:34px;height:34px;border:1px solid var(--line);background:var(--surface);color:var(--text);font-size:22px}
.side-modal{position:relative;margin-left:auto;width:min(490px,100%);height:100%;max-height:100%;overflow:auto;background:var(--surface);padding:45px 32px;color:var(--text);animation:slideIn .3s}
@keyframes slideIn{from{transform:translateX(30px);opacity:.5}to{transform:translateX(0);opacity:1}}
.side-modal h2{font:34px 'Playfair Display',serif;margin:15px 0 28px}
.side-modal h2 i{color:var(--accent);font-size:20px}
.cart-items{display:flex;flex-direction:column}
.cart-item{display:grid;grid-template-columns:85px 1fr 25px;gap:14px;padding:15px 0;border-bottom:1px solid var(--line);align-items:start}
.cart-item>img{width:85px;height:85px;object-fit:cover}
.cart-item-info{display:flex;flex-direction:column;gap:9px}
.cart-item-info strong{font:15px 'Playfair Display',serif}
.cart-item-info small{font-size:10px;color:var(--accent)}
.quantity-control{display:flex;align-items:center;gap:12px}
.quantity-control button{width:24px;height:24px;background:transparent;border:1px solid var(--line);color:var(--text)}
.quantity-control span{font-size:10px}
.remove-item{border:0;background:none;color:var(--muted);font-size:20px}
.cart-summary{display:flex;justify-content:space-between;padding:25px 0;border-bottom:1px solid var(--line);font-size:12px}
.cart-summary strong{color:var(--accent)}
.checkout-btn{width:100%;margin-top:20px}
.demo-note{display:block;color:var(--muted);font-size:8px;line-height:1.7;margin-top:14px}
.favorite-add{border:0;background:transparent;color:var(--accent);font-size:9px;text-align:left;padding:0}
.checkout-form{display:flex;flex-direction:column;gap:17px}
.checkout-form label{display:flex;flex-direction:column;gap:7px;font-size:9px;color:var(--muted)}
.checkout-form input{padding:13px;background:var(--bg);border:1px solid var(--line);color:var(--text);outline:0;font-size:10px}
.checkout-form .primary-btn{margin-top:10px}

@media(max-width:1100px){
.site-header{gap:18px;padding:0 3%}
.main-nav{gap:17px}
.header-actions{gap:12px}
.hero-section{padding-left:4%;padding-right:4%}
.hero-copy h1{font-size:68px}
.product-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
.product-image-wrap{height:250px}
}
@media(max-width:760px){
.announcement{padding:0 12px}
.announcement>span:last-child{display:none}
.announcement p{font-size:8px}
.site-header{height:70px;padding:0 16px;gap:12px}
.mobile-menu-btn{display:block;border:0;background:none;color:var(--text);font-size:22px}
.brand-mark{font-size:39px}
.brand-name{font-size:13px}
.brand-name small{font-size:6px}
.main-nav{display:none;position:absolute;top:70px;left:0;right:0;background:var(--surface);padding:20px;flex-direction:column;align-items:flex-start;gap:20px;border-bottom:1px solid var(--line)}
.main-nav.nav-open{display:flex}
.header-actions{margin-left:auto;gap:12px}
.search-field{width:32px;border:0}
.search-field input{display:none}
.search-field span{font-size:25px}
.header-action{font-size:21px}
.hero-section{display:flex;flex-direction:column;align-items:stretch;padding:45px 18px 35px;gap:35px}
.hero-copy{padding:0}
.hero-copy h1{font-size:65px;margin:24px 0 17px}
.hero-copy>p{font-size:11px}
.hero-index{margin-top:30px}
.hero-visual{height:330px;margin:0 8px 0 0}
.hero-round-stamp{right:-12px;width:75px;height:75px}
.hero-side-note{display:none}
.trust-line{height:auto;min-height:52px;flex-wrap:wrap;gap:8px;padding:12px;font-size:6px;letter-spacing:1px}
.category-section,.products-section,.promo-cards-section{padding:65px 17px 20px}
.section-heading{align-items:flex-start;flex-direction:column;gap:15px;margin-bottom:24px}
.section-heading h2{font-size:37px}
.section-heading>p{font-size:9px}
.category-showcase{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
.category-tile{height:230px}
.tile-caption{left:13px;bottom:16px}
.tile-caption strong{font-size:22px}
.tile-arrow{right:13px;bottom:16px}
.all-categories{gap:6px}
.all-categories button{padding:9px;font-size:8px}
.products-section{padding-top:65px}
.product-heading{flex-direction:column}
.catalog-controls{width:100%;justify-content:space-between}
.catalog-toolbar{align-items:flex-start;flex-direction:column}
.catalog-tabs{gap:20px}
.category-select-wrap{width:100%;justify-content:space-between}
.category-select-wrap select{flex:1}
.product-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 10px}
.product-image-wrap{height:190px}
.product-meta h3{font-size:15px}
.product-category{font-size:7px}
.price-line{flex-wrap:wrap}
.price-line strong{font-size:10px}
.view-product{opacity:1;transform:none;bottom:8px;padding:9px}
.promo-editorial{margin:70px 17px 20px;grid-template-columns:1fr}
.promo-photo{min-height:260px}
.promo-copy{padding:35px 22px}
.promo-copy h2{font-size:36px}
.promo-cards-section{padding-top:60px}
.promo-cards{grid-template-columns:1fr}
.promo-card{min-height:190px}
.brand-story{margin:70px 17px;grid-template-columns:1fr}
.story-image{min-height:260px}
.story-copy{padding:35px 22px}
.story-copy h2{font-size:37px}
.service-strip{grid-template-columns:repeat(2,1fr);padding:28px 17px;gap:25px 15px}
.service-strip strong{font-size:9px}
.service-strip small{font-size:7px}
.site-footer{padding:38px 18px 20px}
.footer-top{grid-template-columns:repeat(2,1fr);gap:30px 18px}
.footer-brand{grid-column:span 2}
.footer-bottom{gap:10px;font-size:7px}
.theme-dock{right:10px;bottom:10px;padding:9px 12px;gap:9px}
.theme-dock>span{display:none}
.theme-swatch{width:18px;height:18px}
.product-modal{grid-template-columns:1fr;max-height:92vh}
.modal-product-image{min-height:230px;height:230px}
.modal-product-info{padding:25px}
.modal-product-info h2{font-size:28px}
.side-modal{padding:45px 20px}
}
@media(max-width:390px){
.brand-name{letter-spacing:1px}
.header-actions{gap:8px}
.product-image-wrap{height:155px}
.product-meta h3{font-size:13px}
.price-line strong{font-size:9px}
.add-button{font-size:8px}
.hero-copy h1{font-size:55px}
.theme-dock{gap:7px}
}
`;



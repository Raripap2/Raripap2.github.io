import { useState } from 'react'

type Project = {
  number: string
  title: string
  subtitle: string
  description: string
  details: string[]
  stack: string[]
  repo: string
  status: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Casting Schedule',
    subtitle: 'Dashboard производственных плавок',
    description:
      'Backend для производственного dashboard: передача текущего и планового графика плавок на frontend и работа с историческими данными.',
    details: [
      'Показывает план разливки плавок на день и будущие плавки.',
      'Поддерживает получение истории за произвольный промежуток времени.',
      'Работает с производственными данными и передаёт их на frontend через backend.',
      'Часть кода не публикуется из-за коммерческой тайны; в репозитории находится вынесенная часть проекта.',
    ],
    stack: ['C#', 'ASP.NET Core', 'Oracle', 'HTML'],
    repo: 'https://github.com/Raripap2/CastingSchedule',
    status: 'Production / commercial project',
  },
  {
    number: '02',
    title: 'Sushi Bar',
    subtitle: 'Full Stack интернет-магазин',
    description:
      'Учебный full-stack проект для заказа суши: аккаунты, динамическое меню, корзина и расчёт стоимости заказа.',
    details: [
      'Личный аккаунт пользователя.',
      'Динамическая загрузка меню.',
      'Добавление товаров в корзину и изменение количества.',
      'Расчёт общей суммы заказа.',
      'Была предусмотрена интеграция с Яндекс Картами для адреса доставки.',
    ],
    stack: ['C#', 'ASP.NET', 'PostgreSQL', 'HTML', 'JavaScript'],
    repo: 'https://github.com/Raripap2/sushi',
    status: 'Coursework project',
  },
  {
    number: '03',
    title: 'Formation Cards',
    subtitle: 'Учёт и отслеживание листов металла',
    description:
      'Система на Python для отслеживания перемещения листов металла по конвейерам и ведения их учёта в электронных формировочных карточках.',
    details: [
      'Отслеживание перемещения листов по производственному процессу.',
      'Ведение электронных формировочных карточек.',
      'Получение информации из систем слежения и производственных датчиков.',
      'Архитектура предусматривает дальнейшее развитие в сторону виртуального склада и учёта логистики.',
      'Дополнительный функционал не был реализован в рамках исходных требований заказчика.',
    ],
    stack: ['Python', 'FastAPI', 'HTML', 'JavaScript'],
    repo: 'https://github.com/Raripap2/formation_cards',
    status: 'Industrial project',
  },
]

const skills = [
  ['Backend', 'C#', 'ASP.NET Core', 'Python', 'FastAPI', 'Flask', 'REST API'],
  ['Databases', 'PostgreSQL', 'Oracle', 'SQL'],
  ['Frontend', 'HTML', 'CSS', 'JavaScript'],
  ['Tools', 'Git', 'GitHub', 'Swagger'],
]

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top">SR<span>.</span></a>
        <nav>
          <a href="#projects">Проекты</a>
          <a href="#skills">Навыки</a>
          <a href="#about">Обо мне</a>
          <a href="#contact">Контакты</a>
        </nav>
        <a className="header-github" href="https://github.com/Raripap2" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-grid">
            <div>
              <div className="eyebrow"><span className="pulse" /> FULL STACK DEVELOPER</div>
              <h1>Степан<br /><em>Ржевский.</em></h1>
              <p className="hero-copy">
                Разрабатываю веб-приложения и backend-системы на C# и Python.
                Работаю с ASP.NET Core, FastAPI, PostgreSQL, Oracle и JavaScript.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">Смотреть проекты <span>↓</span></a>
                <a className="button ghost" href="https://github.com/Raripap2" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-label">CURRENT STACK</div>
              <div className="stack-cloud">
                {['C#', 'ASP.NET Core', 'Python', 'FastAPI', 'PostgreSQL', 'Oracle', 'JavaScript', 'REST API'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="hero-card-footer">
                <span>Open to opportunities</span>
                <span className="dot" />
              </div>
            </div>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">SELECTED WORK</div>
              <h2>Проекты<span>.</span></h2>
            </div>
            <p>Три проекта, которые показывают мой опыт в backend, full-stack и промышленной автоматизации.</p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-title-row">
                    <div>
                      <div className="project-kicker">{project.status}</div>
                      <h3>{project.title}</h3>
                      <div className="project-subtitle">{project.subtitle}</div>
                    </div>
                    <button className="round-button" onClick={() => setActiveProject(project)} aria-label={`Подробнее о ${project.title}`}>
                      ↗
                    </button>
                  </div>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-links">
                    <button onClick={() => setActiveProject(project)}>Подробнее →</button>
                    <a href={project.repo} target="_blank" rel="noreferrer">Репозиторий ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">TECHNICAL SKILLS</div>
              <h2>Инструменты<span>.</span></h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map(([title, ...items]) => (
              <div className="skill-group" key={title}>
                <div className="skill-title">{title}</div>
                {items.map((item) => <div className="skill-item" key={item}>{item}</div>)}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-copy">
            <div className="eyebrow">ABOUT</div>
            <h2>Разработка,<br /><em>ориентированная на задачу.</em></h2>
          </div>
          <div className="about-text">
            <p>
              Мне интересна разработка прикладных систем, где программное обеспечение
              решает конкретную задачу пользователя или производства.
            </p>
            <p>
              В проектах работал с backend на C# / ASP.NET Core и Python / FastAPI,
              базами PostgreSQL и Oracle, REST API и frontend на HTML, CSS и JavaScript.
            </p>
            <p>
              Отдельный интерес — промышленные информационные системы, интеграция
              данных от производственных систем и создание удобных интерфейсов для операторов.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div>
              <div className="eyebrow">CONTACT</div>
              <h2>Давайте работать<br /><em>над чем-то интересным.</em></h2>
            </div>
            <div className="contact-links">
              <a href="mailto:raripap@yandex.ru">raripap@yandex.ru ↗</a>
              <a href="https://github.com/Raripap2" target="_blank" rel="noreferrer">github.com/Raripap2 ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Степан Ржевский</span>
        <span>Built with React + TypeScript</span>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>×</button>
            <div className="eyebrow">{activeProject.number} / PROJECT</div>
            <h2>{activeProject.title}</h2>
            <div className="project-subtitle">{activeProject.subtitle}</div>
            <p className="modal-description">{activeProject.description}</p>
            <ul>
              {activeProject.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <div className="tags">
              {activeProject.stack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <a className="button primary modal-button" href={activeProject.repo} target="_blank" rel="noreferrer">
              Открыть GitHub ↗
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

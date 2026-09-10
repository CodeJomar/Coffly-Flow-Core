# Coffy Flow — Frontend (Web & Tablet POS)

Plataforma SaaS B2B diseñada para la gestión operativa, sincronización de pedidos y control administrativo en cafeterías de especialidad. Esta aplicación cliente está optimizada específicamente para pantallas Desktop y Tablets táctiles.

---

## 🚀 Tecnologías Principales

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS con tokens de diseño adaptativos (Modo Claro / True-Dark Monocromático)
- **Iconografía y Componentes:** Lucide React, Base UI / Radix UI Primitives[cite: 3]
- **Temas:** `next-themes`

---

## 🏛️ Arquitectura: Separación de Responsabilidades

El proyecto implementa una arquitectura modular inspirada en **Feature-Sliced Design (FSD)** para evitar que la lógica de negocio contamine el enrutador de Next.js:

```text
src/
├── app/                          # Capa delgada de entrega (Routing Layer)
│   ├── (auth)/                   # Rutas de autenticación
│   │   ├── login/page.tsx        # Solo importa y renderiza <LoginView/>
│   │   └── forgot-password/      # Solo importa y renderiza <ForgotPasswordView/>
│   └── (workspace)/              # Rutas del panel operativo
│       ├── layout.tsx            # Shell estructural (Sidebar + Header)
│       └── dashboard/page.tsx    # Solo importa y renderiza <DashboardView/>
│
├── modules/                      # Núcleo de Dominio por Característica (Feature Slices)
│   ├── auth/                     # Dominio de Autenticación
│   │   ├── components/           # Componentes propios del módulo (ej. OtpInput)
│   │   └── views/                # Pantallas completas (LoginView, ForgotPasswordView)
│   ├── dashboard/                # Métricas operativas en vivo
│   ├── pos/                      # Toma ágil de pedidos por mesas
│   ├── kds/                      # Monitor de preparación de bebidas
│   ├── menu/                     # Administración de catálogo y stock rápido
│   └── transactions/             # Cierres de caja y auditoría de tickets
│
└── shared/                       # Piezas Transversales y Reutilizables
    ├── components/
    │   ├── ui/                   # Átomos base (Button, Input, Select, Separator)
    │   ├── composed/             # Moléculas (FloatingInput, FloatingSelect)
    │   └── layout/               # Elementos del Shell (AppSidebar, WorkspaceHeader)
    ├── hooks/                    # Hooks transversales de utilidad
    ├── providers/                # ThemeProvider y contextos globales
    └── utils/                    # Funciones auxiliares (cn, formateadores)
```

## 📦 Flujo de Trabajo y Ramas (GitFlow Adaptado)

El ciclo de desarrollo se rige por un esquema estructurado de ramas:

- **main:** Rama de documentación del proyecto, archivos `.md` y guías técnicas.
- **prod:** Código desplegado en el entorno de producción para evaluación final.
- **qa:** Entorno de integración, auditoría funcional y validación de calidad.
- **develop:** Rama base de integración diaria para el equipo de desarrollo.
- **Ramas de Módulo / Feature (`feature/*`):** Ramas individuales que parten de `develop`:
  - `feature/auth`
  - `feature/pos`
  - `feature/kds`
  - `feature/menu`
  - `feature/transactions`
  - `feature/dashboard`

**Convención:** Ningún desarrollador comitea directamente a `develop`, `qa` o `prod`. Todo cambio ingresa mediante Pull Request (PR) hacia `develop`.

## 🛠️ Puesta en Marcha

### Prerrequisitos

- Node.js 20 LTS o superior[cite: 3]
- Gestor de paquetes `npm` o `pnpm`

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-organizacion/coffy-flow-frontend.git
cd coffy-flow-frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env.local
```

Completar `NEXT_PUBLIC_API_URL` apuntando al backend NestJS.

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

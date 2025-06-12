# Portfolio TODO Liste - Next.js mit shadcn/ui

## 🏗️ Phase 1: Setup & Grundstruktur

### 1. Basis-Setup
- [x] shadcn/ui initialisieren
  ```bash
  npx shadcn-ui@latest init
  ```
- [x] Benötigte shadcn-Komponenten installieren
  ```bash
  npx shadcn-ui@latest add button card badge navigation-menu
  npx shadcn-ui@latest add dropdown-menu separator
  ```
- [x] Tailwind CSS konfigurieren (falls noch nicht geschehen)
- [x] Framer Motion für Animationen installieren
  ```bash
  npm install framer-motion
  ```

### 2. Internationalisierung (i18n)
- [x] next-intl oder react-i18next installieren
  ```bash
  npm install next-intl
  ```
- [x] Language-Ordnerstruktur anlegen (`/messages/de.json`, `/messages/en.json`)
- [x] Middleware für Spracherkennung konfigurieren
- [x] Basis-Übersetzungen erstellen (Navigation, allgemeine Begriffe)

### 3. Theme System
- [ ] next-themes installieren
  ```bash
  npm install next-themes
  ```
- [ ] ThemeProvider einrichten
- [ ] Dark/Light Mode Toggle-Komponente erstellen
- [ ] CSS-Variablen für Themes konfigurieren

## 🎨 Phase 2: Layout & Navigation

### 4. Layout-Komponenten
- [ ] `Layout.tsx` Hauptkomponente erstellen
- [ ] `Header.tsx` mit Navigation erstellen
- [ ] `Footer.tsx` erstellen
- [ ] Responsive Design für Mobile/Desktop
- [ ] Sticky Navigation implementieren

### 5. Navigation
- [ ] Hauptnavigation (Home, Über mich, Projekte, Kontakt)
- [ ] Language Switcher (DE/EN)
- [ ] Theme Toggle Button
- [ ] Mobile Hamburger Menu
- [ ] Smooth Scrolling zu Sektionen

## 📱 Phase 3: Hauptkomponenten

### 6. Hero/Landing Section
- [ ] Hero-Bereich mit Begrüßung
- [ ] Profilbild/Avatar
- [ ] Kurze Beschreibung
- [ ] Call-to-Action Buttons
- [ ] Typing-Animation oder ähnlich

### 7. Job Timeline
- [ ] Timeline-Komponente erstellen
- [ ] Berufserfahrung-Daten strukturieren
- [ ] Scroll-Animationen für Timeline-Items
- [ ] Responsive Timeline-Design

### 8. Projekte Section
- [ ] Project-Card Komponente
- [ ] Grid-Layout für Projekte
- [ ] Hover-Effekte und Animationen
- [ ] Techstack-Badges
- [ ] Links zu GitHub/Live-Demo
- [ ] Filter nach Technologien (optional)

### 9. Über mich / Skills
- [ ] Skills-Badges mit shadcn/ui
- [ ] Techstack-Übersicht
- [ ] Kurze Beschreibung
- [ ] Kontaktmöglichkeiten

## ✨ Phase 4: Animationen & Interaktivität

### 10. Animations-System
- [ ] Framer Motion Varianten definieren
- [ ] Page-Transitions
- [ ] Scroll-basierte Animationen
- [ ] Hover-Animationen für Karten
- [ ] Fade-in Animationen beim Laden

### 11. Micro-Interactions
- [ ] Button-Hover-Effekte
- [ ] Loading-States
- [ ] Success-Animations für Formulare
- [ ] Smooth Transitions zwischen Themes

## 🎯 Phase 5: Content & Daten

### 12. Content Management
- [ ] JSON-Dateien für Projekte erstellen
- [ ] Markdown-Support für Projektbeschreibungen (optional)
- [ ] Bilder optimieren und hinzufügen
- [ ] Übersetzungen vervollständigen

### 13. SEO & Meta
- [ ] next/head für Meta-Tags
- [ ] OpenGraph-Tags
- [ ] Favicon hinzufügen
- [ ] Robots.txt und Sitemap

## 🚀 Phase 6: Optimierung & Deployment

### 14. Performance
- [ ] Bilder mit next/image optimieren
- [ ] Lazy Loading für Komponenten
- [ ] Bundle-Größe analysieren
- [ ] Lighthouse-Score optimieren

### 15. Deployment
- [ ] Vercel/Netlify konfigurieren
- [ ] Environment Variables setzen
- [ ] Custom Domain einrichten (optional)
- [ ] Analytics einrichten (optional)

## 🔧 Zusätzliche Features (Optional)

- [ ] Kontaktformular mit Validierung
- [ ] Blog-Sektion
- [ ] PDF-Download des Lebenslaufs
- [ ] Easter Eggs oder besondere Animationen
- [ ] Accessibility-Verbesserungen

## 📝 Empfohlene Reihenfolge

1. **Starte mit Phase 1** (Setup) - das ist die Grundlage
2. **Phase 2** (Layout) - damit hast du eine navigierbare Struktur
3. **Phase 3** (Komponenten) - fülle die Inhalte
4. **Phase 4** (Animationen) - mache es lebendig
5. **Phase 5 & 6** (Content & Deployment) - finalisiere alles

## 💡 Tipps

- Committe regelmäßig jeden Schritt
- Teste Dark/Light Mode bei jeder Komponente
- Halte die Animationen subtil und performant
- Mobile-First Design approach
- Nutze shadcn/ui Komponenten wo möglich für Konsistenz

Viel Erfolg mit deinem Portfolio! 🚀
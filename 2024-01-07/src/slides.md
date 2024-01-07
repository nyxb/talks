---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
growX: 50
growY: 130
growSize: 1.5
---

![](/sharesphere-logo.png){.w-30.mt--10.mb-5}

---
layout: cover
---

<h1 flex="~ col">
<div text-2xl op50>ShareSphere</div>
<div mt1>Joypix</div>
<div font-hand tracking-widest mt--2 op75 text-4xl>Social Network for Gamers</div>
</h1>

<!--
Guten Tag, ich freue mich, heute hier zu sein und unser aufregendes Projekt vorzustellen: ShareSphere's Joypix, das soziale Netzwerk für Gamer. Unsere Mission ist es, eine Plattform zu schaffen, die nicht nur unterhaltsam und interaktiv ist, sondern auch die Gaming-Community auf einzigartige Weise zusammenbringt.
-->

---
layout: intro
growX: 0
growY: 90
style: 'padding-left: 9rem;'
---

# Dennis Ollhoff

<div class="leading-10 opacity-80">
Indie-Hacker und Dozent.<br>
Gründer der Nyxb Academy.<br>
Schöpfer von Kolibry und vielen weiteren <a href="https://nyxb.nexus/projects" target="_blank">Projekten</a><br>
<br>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://nyxb.nexus" target="_blank" class="border-none! font-300">nyxb.nexus</a></div>
  <div dashicons:welcome-write-blog op50 ma text-xl />
  <div><a href="https://nyxb.blog" target="_blank" class="border-none! font-300">nyxb.blog</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/nyxb" target="_blank" class="border-none! font-300">nyxb</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div><a href="https://nyxb.social/@dennis" target="_blank" class="border-none! font-300">dennis@nyxb.social</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/nyxb0" target="_blank" class="border-none! font-300">nyxb0</a></div>
</div>

<img src="https://nyxb.nexus/images/nyxb-logo.png" rounded-full w-35 abs-tr mt-32 mr-40 />

<div flex="~ gap2">

</div>

<!--
Mein Name ist Dennis Ollhoff und ich bin der CTO bei ShareSphere. Ich bringe eine umfassende IT-Erfahrung seit dem Jahr 2000 mit. Im Alter von 36 Jahren, verheiratet und Vater von drei Kindern, habe ich viele Jahre als Freelancer gearbeitet, spezialisiert auf die Entwicklung von Webanwendungen. Mein Fokus liegt auch im Backend-Bereich, hauptsächlich mit Rust. Meine Karriere als Dozent und Gründer der Nyxb Academy, wo ich meine Erfahrungen und Kenntnisse weitergebe, hat jedoch unterschiedliche Wurzeln. Heute möchte ich euch nicht nur unser Projekt vorstellen, sondern auch die Technologien und Strategien erläutern, die hinter diesem spannenden Unterfangen stehen. Wichtig zu erwähnen ist, dass es heute hauptsächlich um die Entwicklungsaspekte unseres Projekts geht, da die meisten Teilnehmer bereits mit dem Projekt selbst vertraut sind.
-->

---
layout: intro
---

Joypix's{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>Technischer Stack - Überblick</h2>

<!--
Beginnen wir mit einem Überblick über unseren technischen Stack. Wir haben eine Kombination aus modernen und leistungsfähigen Technologien gewählt, um eine skalierbare und effiziente Social Media Plattform zu entwickeln. Diese umfassen Nuxt.js für das Frontend, Rust für das Backend und PostgreSQL für unsere Datenbank.
-->

---
layout: intro
---

<h1 flex="~ col">
<div>Frontend</div>
<div flex="~ gap3" items-center>mit <span inline-block i-logos-nuxt-icon text-1.2em mb-2/> <b font-bold>Nuxt</b></div>
</h1>

<!--
In unserem Projekt nutzen wir Nuxt.js in seiner neuesten Version für das Frontend. Diese Wahl bietet uns zahlreiche Verbesserungen, die unsere Entwicklungsprozesse erheblich optimieren. Nuxt.js vereinfacht die Erstellung moderner Webanwendungen durch seine integrierten Lösungen für Routing, State Management und mehr, während es gleichzeitig eine hohe Flexibilität und Erweiterbarkeit bietet.
-->

---
growX: 50
growY: 0
---

## Reaktionsfähigkeit

<div flex="~" justify-evenly items-center h-90>
<v-clicks>

<div flex="~ col" items-center>
<img w-20 mb6 src="/vite.svg">
<div text-2xl>Vite</div>
<div text-base op50>für client-side HMR</div>
</div>

<div flex="~ col" items-center>
<img w-20 mb6 src="/vite-node.svg">
<div text-2xl>vite-node</div>
<div text-base op50>für server-side HMR</div>
</div>

<div flex="~ col" items-center>
<div text-4.6rem>⚗️</div>
<div text-2xl>Nitro</div>
<div text-base op50>für backend API reload</div>
</div>

</v-clicks>
</div>

<!--
Ein Schlüsselaspekt von Nuxt 3, den wir in unserem Projekt nutzen, ist seine hohe "Reaktionsfähigkeit". 
Durch die Integration von Vite bietet Nuxt.js ein schnelles Hot Module Replacement (HMR) auf der Client-Seite. 
Dies führt zu einer sofortigen Aktualisierung des Codes in der Anwendung, was unseren Entwicklungsprozess beschleunigt. 

Nuxt.js nutzt auch `vite-node` für das serverseitige Rendering, was HMR auf der Serverseite ermöglicht. 

Ein weiterer Vorteil von Nuxt 3 ist die Integration von Nitro, die ein Hot-Reload für Server-APIs bietet. Diese Eigenschaften tragen wesentlich zur Effizienz und Schnelligkeit unserer Entwicklungsarbeit bei.
-->

---
layout: center
growX: 50
growY: 50
---

<h1 font-bold class="text-5xl!">Weitere Vorteile von Nuxt</h1>

<div absolute left-100 top-80 v-click>File-based Routing</div>
<div absolute left-52 top-50 v-click>Modules Ecosystem</div>
<div absolute left-100 top-50 v-click>Hot Module Replacement</div>
<div absolute left-50 top-80 v-click>Server-side Rendering</div>

<v-click>

<div absolute left-158 top-50>Nitro</div>
<div absolute left-145 top-80>ESM First</div>
<div absolute left-170 top-80>Vite Powered</div>
<div absolute left-60 top-90 op80>Zero-config</div>
<div absolute left-90 top-90>Edge Rendering</div>

</v-click>
<v-click>

<div absolute left-85 top-40>Hybrid Rendering</div>
<div absolute left-130 top-90>Components Auto Imports</div>
<div absolute left-125 top-40 op70>Composables Auto Imports</div>
<div absolute left-55 top-40 op70>Middleware</div>
<div absolute left-175 top-50 op70>SEO</div>

</v-click>
<v-click>

<div absolute left-145 top-100 op60>Server API</div>
<div absolute left-100 top-30 op70>Serverless</div>
<div absolute left-70 top-30 op70>TypeScript</div>
<div absolute left-130 top-30 op70>Server Components</div>
<div absolute left-120 top-100 op70>Layouts</div>
<div absolute left-70 top-100 op60>Static Site Generation</div>

</v-click>

<!--
In unserem Projekt profitieren wir erheblich von den erweiterten Funktionen von Nuxt.js. File-based Routing ermöglicht eine intuitive und organisierte Strukturierung unserer Anwendung. Das umfassende Module-Ökosystem erleichtert die Integration zusätzlicher Funktionen. Dank der eingebauten SEO-Unterstützung und des serverseitigen Renderings verbessert Nuxt.js sowohl die Leistung als auch die Sichtbarkeit unserer Webanwendung.

Weitere wichtige Funktionen von Nuxt.js, die unseren Entwicklungsprozess optimieren, sind Zero-Config, hybrides Rendering und der automatische Import von Komponenten und Composables. Dies, kombiniert mit der Unterstützung für TypeScript, Edge Rendering und statischer Seitengenerierung, macht Nuxt.js zu einem extrem leistungsfähigen Werkzeug für die moderne Webentwicklung.
-->

---
layout: center
growX: 50
growY: 35
growSize: 0.6
clicks: 2
---

<img src="/ecosystem/rust.svg" alt="" w-25 ma />

<div flex="~ col items-center gap-2" p4>
  <div v-click="1" :class="$clicks >= 2 ? 'line-through op50' : ''" transition>Traditionelle Backend-Technologien: Eingeschränkt und ineffizient</div>
  <div i-carbon-arrow-down op50 v-click="2"/>
  <div v-click="2">Rust im Backend: Hochleistungsfähig, sicher und effizient</div>
</div>

<!--
Unsere Entscheidung, Rust für das Backend unseres Projekts zu nutzen, beruht auf seiner herausragenden Leistung und modernen Architektur. Im Gegensatz zu traditionellen Backend-Technologien, die oft mit Einschränkungen in Sachen Geschwindigkeit und Effizienz kämpfen, bietet Rust eine beeindruckende Kombination aus Geschwindigkeit, Sicherheit und Zuverlässigkeit.

Rust hebt sich deutlich von älteren Technologien ab und treibt die Leistungsfähigkeit unserer Anwendungen auf ein neues Niveau.
-->


---
growX: 50
growY: 0
preload: false
---

## Rust

<p> „Rust ist eine Systemprogrammiersprache, die extrem schnell läuft, Segfaults verhindert und Thread-Sicherheit garantiert.“ – <a href="https://www.rust-lang.org">https://www.rust-lang.org</a></p>

<div h-70 flex="~ items-center">
<v-clicks>

- Abstraktionen ohne Leistungseinbußen, Threads ohne Datenrennen, minimaler Laufzeitbedarf
  
- Kein Garbage Collector, garantierte Speichersicherheit
  
- Typinferenz, Traits, Pattern Matching, Typklassen, Funktionen höherer Ordnung

</v-clicks>
</div>


<!--
In unserem Backend setzen wir auf Rust, eine fortschrittliche Systemprogrammiersprache, die für ihre Geschwindigkeit und Zuverlässigkeit bekannt ist. Rust ermöglicht uns, leistungsstarke und sichere Backend-Services zu entwickeln, die perfekt für die anspruchsvollen Anforderungen unserer Social-Media-Plattform geeignet sind.

1. Rust zeichnet sich durch seine Abstraktionen ohne Leistungseinbußen und seinen minimalen Laufzeitbedarf aus. 

2. Durch die Vermeidung eines Garbage Collectors und die Garantie von Speichersicherheit bietet Rust eine robuste Basis für unsere Backend-Logik.

3. Die Integration moderner Programmierkonzepte wie Typinferenz, Traits und Pattern Matching in Rust erlaubt es uns, sauberen und wartbaren Code zu schreiben. Dies führt zu einer effizienteren Entwicklung und Wartung unserer Backend-Systeme, was letztendlich zu einer besseren Performance und Benutzererfahrung für unsere Plattform führt.
-->

---
class: h-full
growX: 0
clicks: 10
---

<div 
  class="left-50% top-50% absolute relative w-0 h-0"
  :class="$clicks < 6 ? '' : 'scale-80'"
  transition-all duration-600
>
  <div
    v-click="2"
    absolute border="~ green rounded-full"
    translate="x--50% y--50%"
    :class="$clicks < 3 ? 'ml--40 w-150 h-150' : 'ml--70 w-60 h-60'"
    transition-all duration-800 
    bg-green:20 text-3xl text-green flex="~ items-center justify-center"
  >
    <div i-logos-nuxt-icon text-6xl />
  </div>
  <div
    z--1
    absolute border="~ rounded-full"
    translate="x--50% y--50%"
    :class="$clicks < 1 ? 'border-color-transparent! bg-transparent! w-50 h-50' : $clicks < 3 ? 'w-50 h-50 border-green bg-green:20' : 'h-100 w-100 border-gray bg-white:20 border-dashed'"
    transition-all duration-800
    text-3xl text-white flex="~ items-center justify-center"
  >
    <div 
      h-1em
      :class="$clicks < 1 ? 'scale-200' : $clicks < 3 ? 'scale-90' : 'scale-140'" 
      of-hidden transition-all duration-800>
      <div
        flex="~ col gap-2 items-center" 
        transition-all duration-600 delay-1000
        :style="{
          transform: $clicks < 3 ? '' : 'translateY(-1.1em)'
        }"
      >
        <NuxtDevTools h-0.8em/>
        <Integration h-0.8em/>
      </div>
    </div>
  </div>
  <div
    v-click="5"
    absolute border="~  red rounded-full"
    translate="x--50% y--50%"
    ml--50 mt--42 w-60 h-60
    transition-all duration-800 
    bg-red:20 text-3xl text-red flex="~ items-center justify-center"
  >
    <div i-logos-rust text-6xl />
  </div>
  <div
    v-click="6"
    absolute border="~ red rounded-full"
    translate="x--50% y--50%"
    mt--65 ml-8 w-60 h-60
    transition-all duration-800 
    bg-red:20 text-3xl text-red flex="~ items-center justify-center"
  >
    <ActixWeb h-2.8em />
  </div>
  <div
    v-click="7"
    absolute border="~ blue rounded-full"
    translate="x--50% y--50%"
    mt--30 ml-60 w-60 h-60
    transition-all duration-800 
    bg-blue:20 text-3xl text-blue flex="~ items-center justify-center"
  >
    <div i-logos-postgresql text-6xl />
  </div>
  <div
    v-click="8"
    absolute border="~ purple rounded-full"
    translate="x--50% y--50%"
    mt-32 ml-60 w-60 h-60
    transition-all duration-800 
    bg-purple:20 text-3xl text-purple flex="~ items-center justify-center"
  >
    <div i-devicon:docker-wordmark text-6xl />
  </div>
  <div
    v-click="9"
    absolute border="~ blue rounded-full"
    translate="x--50% y--50%"
    mt-55 ml3 w-60 h-60
    transition-all duration-800 
    bg-blue:20 text-3xl text-blue flex="~ items-center justify-center"
  >
    <div i-logos-jwt-icon text-6xl />
  </div>
  <div
    v-click="10"
    absolute border="~ gray rounded-full"
    translate="x--50% y--50%"
    mt-45 ml--47 w-40 h-40
    transition-all duration-800 
    bg-gray:20 text-3xl text-gray flex="~ items-center justify-center"
  >
    <div i-ri-more-line text-6xl />
  </div>
</div>

<!--
Im Zentrum unseres Projekts steht die Idee der "Synergie" – die effektive Kombination aus mehreren fortschrittlichen Technologien, die zusammen ein robustes und dynamisches System bilden. Hier ist eine kurze Zusammenfassung der Technologien, die wir in unserem Projekt nutzen:

- **Nuxt.js**: Ein leistungsstarkes Frontend-Framework, das uns ermöglicht, moderne und reaktive Webanwendungen zu erstellen und zugleich ein nahtloses Entwicklererlebnis bietet.
- **Rust mit Actix-Web**: Im Backend nutzen wir die Schnelligkeit und Sicherheit von Rust, gepaart mit Actix-Web, einem leistungsstarken Web-Framework für Rust, um eine effiziente und skalierbare Serverseite zu gewährleisten.
- **PostgreSQL**: Als unsere Datenbanklösung setzen wir zum Anfang auf PostgreSQL, bekannt für Zuverlässigkeit und starke Performance.
- **Docker**: Wird hauptsächlich für das Deployment des Backends verwendet, um eine konsistente und isolierte Entwicklungsumgebung zu gewährleisten.
- **JWT Token**: Zur Authentifizierung und Sicherheit setzen wir auf JWT Tokens, die eine sichere und flexible Handhabung von Benutzersitzungen ermöglichen.

Jede dieser Technologien spielt eine wichtige Rolle in unserem Ökosystem, und zusammen bilden sie das Rückgrat unseres Projekts.
-->

---
layout: center
growSize: 0.001
growX: 30
growY: -20
---


## Architektur-Map

![](/connections.png){.w-190}

<!--
Unsere Architektur ist ein Geflecht aus spezialisierten Technologien, die nahtlos zusammenarbeiten, um eine umfassende Lösung für unsere Benutzer zu schaffen. Hier ist, wie unsere Komponenten interagieren:

- **Frontend**: Nuxt.js, das auf Vue.js basiert, bietet eine reaktive Oberfläche, die direkt mit unserem Rust-Backend kommuniziert.
- **Backend**: Rust bietet dank Actix-Web und Diesel ORM eine robuste und schnelle Backend-Logik mit sicherem Zugriff auf unsere PostgreSQL-Datenbank.
- **Authentifizierung**: JWT Tokens sichern die Kommunikation und stellen sicher, dass nur authentifizierte Anfragen bearbeitet werden.
- **Deployment**: Docker und Nginx ermöglichen ein zuverlässiges und effizientes Deployment, wobei Docker für die Containerisierung des Backends und Nginx als Server für das Frontend dient.
- **CI/CD-Pipeline**: Unsere DevOps-Praktiken werden durch eine CI/CD-Pipeline unterstützt, die automatisierte Tests und Deployment ermöglicht, was eine kontinuierliche Integration und Auslieferung unserer Anwendung sicherstellt.

Diese Verbindungen erlauben es uns, ein stark integriertes System zu betreiben, das sowohl leistungsfähig als auch zuverlässig ist.
-->

---
layout: center
growSize: 0.001
growX: 30
growY: -20
---


## Branching Strategie

![](/branch.png){.w-150}

<!--
Unser Entwicklungsworkflow basiert auf einem angepassten Nyxb Flow, der strukturiert und flexibel den Weg von der Idee bis zum fertigen Release abbildet. 

Wir verwenden Backlog Items als Haupt-Feature-Branches, von denen aus wir für jede Aufgabe spezifische Task-Branches erstellen. 

Nach Abschluss eines Tasks wird er über einen Pull Request zurück in den Haupt-Feature-Branch integriert. 

Der Release-Branch wird vorbereitet, indem alle fertigen Features aus dem Haupt-Feature-Branch übernommen werden. 

Abschließende Tests erfolgen im Release-Branch, bevor die Änderungen in den main-Branch fließen und ein neues Release markieren. 

Für Hotfixes haben wir einen direkten Prozess etabliert, der es uns ermöglicht, schnell auf Probleme zu reagieren. 
Dieser Workflow garantiert eine klare Strukturierung und effiziente Fortschritte unseres Projekts.
-->

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Herzlichen Dank für eure Aufmerksamkeit!{.font-hand}

Weitere Details zum Setup und unsere Commit-Richtlinien findet ihr im Repository. Schaut gerne vorbei, um mit dem Projekt durchzustarten.

<!---
Vielen Dank, dass ihr heute dabei wart. Ich hoffe, ich konnte euch einen guten Überblick über unser Projekt geben. Alle weiterführenden Informationen, inklusive des Setups und unserer Commit-Richtlinien, findet ihr in unserem Repository. Ich ermutige euch, euch dort umzusehen und freue mich auf eure Beiträge und Fragen.
-->

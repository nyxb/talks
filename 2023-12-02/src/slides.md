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

![](/d-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
Willkommen zum GitHub-Einsteiger-Webinar! 

Ich bin Dennis Ollhoff, auch bekannt als Nyxb. 

Es freut mich besonders, heute mit einer vielfältigen Gruppe, bestehend aus Teilnehmern sowohl aus meiner Klasse als auch aus anderen Klassen, die Grundlagen von GitHub zu erkunden. 

Einige von euch kennen mich vielleicht schon als euren Klassenkameraden, und für andere bin ich eine neue Bekanntschaft. 

Unser Ziel heute ist es, die Kernfunktionen und wichtigen Begriffe von GitHub zu erläutern und diese durch praktische Beispiele anschaulich zu machen."
-->

---
layout: cover
---

<h1 flex="~ col">
<div text-2xl op50>Dennis Ollhoff's Einführung in GitHub</div>
<div mt1>Entdecken, Lernen, Meistern</div>
<div font-hand tracking-widest mt--2 op75 text-4xl>GitHub</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left>
  <img src="/nyxb-academy.svg" h-7 alt="Vue Fes Japan">
  <div text-xs opacity-75 mt--4>2. Dezember 2023</div>
</div>

<!--
Wir werden sehen, warum diese Plattform zu einem zentralen Bestandteil der modernen Softwareentwicklung geworden ist. 

GitHub geht weit über eine einfache Codeverwaltung hinaus; es ist ein Ökosystem für Kollaboration, Innovation und Open-Source-Entwicklung.
-->

---
layout: intro
growX: 0
growY: 90
style: 'padding-left: 9rem;'
---

# Dennis Ollhoff

<div class="leading-10 opacity-80">
Indie-Hacker und Dozent.
Gründer der Nyxb Academy.<br>
Schöpfer von Kolibry und Wiz<br>
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
Wir tauchen gemeinsam in die Welt von GitHub ein. 

Wir werden lernen, wie man GitHub effektiv nutzt, Projekte verwaltet und mit der globalen Entwicklergemeinschaft zusammenarbeitet. 

Ich freue mich darauf, mit euch meine Erfahrungen und Tipps zu teilen.
-->

---
layout: intro
---

Was ist{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>Github<sup op50 v-click="1">?</sup></h2>
<div absolute right-20 top-20>
   <div
   v-click="1">
   <img src="/octocat.svg" alt="" w-70 ma mb--10 />
</div>
</div>

<!--
Beginnen wir mit der Frage: Was ist GitHub? 

*Klick*

GitHub ist eine Plattform für Entwickler, um Code zu speichern und zusammenzuarbeiten. 

Sie ist unverzichtbar für moderne Softwareentwicklung. 

Lasst uns einige grundlegende Konzepte betrachten.

Wir beginnen mit den Grundlagen von Repositories bis zu Branches und Commits und  ich erkläre, wie diese Konzepte in der Praxis angewendet werden.
-->

---
layout: intro
clicks: 1
---

Repositories{.op50.text-2xl}

<h2 important-text-5xl important-mt-0>Was ist ein Repository<sup op50 v-click="1">?</sup></h2>
<div absolute right-20 top-20>
   <div
   v-click="1">
   <img src="/library.svg" alt="" w-70 ma mb--10 />
</div>
</div>

<!--
Ein Repository, oft einfach als 'Repo' abgekürzt, kann mit einer Bibliothek verglichen werden. 

Es ist der zentrale Ort, an dem alle Projektdateien, Dokumentationen und die Versionsgeschichte aufbewahrt werden, ähnlich wie Bücher in einer Bibliothek gespeichert sind. 

Genau wie eine Bibliothek der Ausgangspunkt für das Sammeln und Teilen von Wissen ist, bildet ein Repository den Ausgangspunkt für jedes Projekt auf GitHub.
 
Hier kannst du deine Dateien sicher speichern und verwalten und in Zusammenarbeit mit anderen an deinem Projekt arbeiten, ähnlich wie in einer Bibliothek Wissen gemeinschaftlich genutzt wird und Veränderungen verfolgt werden können.
-->

---
growX: 0
growY: 100
clicks: 9
class: h-full
---

<div px4 ml--4 py3 bg-gray:10 rounded inline-block>
   <div op50>Repository</div>
  <pre text-2xl flex="~">
    <span :class="[$clicks >= 4 ? 'line-through op30' : '', $clicks >= 0 ? 'text-blue' : '']">Code</span>
    <span text-gray>-</span>
    <span transition :class="[$clicks >= 7 ? 'line-through op30' : '', $clicks >= 4 ? 'text-green' : '']">Documentation</span>
    <span text-gray>-</span>
    <span :class="$clicks >= 7 ? 'text-amber' : ''">Versionsgeschichte</span>
  </pre>
</div>


<div absolute left-20 top-10>
  <div
    v-click="[1, 4]"
    absolute top-39 left--10 text-white ws-nowrap px2 text-size-3xl
  >Basiert auf
  </div>
  </div>
  <div absolute left-23 top-10>
  <Arrow
    v-click="[1, 4]"
    x1="129" y1="180" x2="240" y2="180" text-blue  
    transition-all duration-500
  />
  </div>
  <div absolute left-86 top-50>
  <div
    v-click="[1, 4]"
    text-blue left-0 top-0 w-39 absolute text-2xl border="~ blue rounded-xl" px2 bg-blue:20
  >
    Main Branch
  </div>
</div>
<div absolute left-20 top-10>
  <div
    v-click="[2, 4]"
    absolute top-60 left--10 text-white ws-nowrap px2 text-size-3xl
  >Neue Features
  </div>
  </div>
  <div absolute left-33 top-31>
  <Arrow
    v-click="[2, 4]"
    x1="129" y1="180" x2="240" y2="180" text-blue  
    transition-all duration-500
  />
  </div>
  <div absolute left-96 top-71>
  <div
    v-click="[2, 4]"
    text-blue left-0 top-0 w-46 absolute text-2xl border="~ blue rounded-xl" px2 bg-blue:20
  >
    Feature Branch
  </div>
</div>
<div absolute left-20 top-10>
  <div
    v-click="[3, 4]"
    absolute top-80 left--10 text-white ws-nowrap px2 text-size-3xl
  >Beheben von Fehlern
  </div>
  </div>
  <div absolute left-58 top-51>
  <Arrow
    v-click="[3, 4]"
    x1="129" y1="180" x2="240" y2="180" text-blue  
    transition-all duration-500
  />
  </div>
  <div absolute left-122 top-91>
  <div
    v-click="[3, 4]"
    text-blue left-0 top-0 w-33 absolute text-2xl border="~ blue rounded-xl" px2 bg-blue:20
  >
    Fix Branch
  </div>
</div>
<div absolute left-20 top-10>
  <div
    v-click="[5, 7]"
    absolute top-30 left--10 text-white ws-nowrap px2 text-size-3xl
  >Erklärt das Projekt
  </div>
  </div>
  <div absolute left-45 top-0>
  <Arrow
    v-click="[5, 7]"
    x1="129" y1="180" x2="240" y2="180" text-green  
    transition-all duration-500
  />
  </div>
  <div absolute left-110 top-40>
  <div
    v-click="[5, 7]"
    text-green left-0 top-0 w-29 absolute text-2xl border="~ green rounded-xl" px2 bg-green:20
  >
    README
  </div>
</div>
<div absolute left-20 top-10>
  <div
    v-click="[6, 7]"
    absolute top-50 left--10 text-white ws-nowrap px2 text-size-3xl
  >Rechtliche Informationen
  </div>
  </div>
  <div absolute left-68 top-21>
  <Arrow
    v-click="[6, 7]"
    x1="129" y1="180" x2="240" y2="180" text-green 
    transition-all duration-500
  />
  </div>
  <div absolute left-132 top-61>
  <div
    v-click="[6, 7]"
    text-green left-0 top-0 w-29 absolute text-2xl border="~ green rounded-xl" px2 bg-green:20
  >
    LICENSE
  </div>
</div>
<div absolute left-20 top-10>
  <div
    v-click="[8, 11]"
    absolute top-40 left--10 text-white ws-nowrap px2 text-size-3xl
  >Protokolliert
  </div>
  </div>
  <div absolute left-25 top-11>
  <Arrow
    v-click="[8, 11]"
    x1="129" y1="180" x2="240" y2="180" text-yellow 
    transition-all duration-500
  />
  </div>
  <div absolute left-90 top-51>
  <div
    v-click="[8, 11]"
    text-yellow left-0 top-0 w-25 absolute text-2xl border="~ yellow rounded-xl" px2 bg-yellow:20
  >
    commit
  </div>
</div>
  <div absolute left-120 top-52>
  <div
    v-click="[8, 11]"
    text-purple left-0 top-0 w-111 absolute text-1xl border="~ purple rounded-xl" px2 bg-purple:20
  >
    📚 docs: Add CC-BY-NC-SA-4.0 license to the project
  </div>
</div>
<div absolute left-20 top-40>
  <div
    v-click="[9, 11]"
    absolute top-40 left--10 text-white ws-nowrap px2 text-size-3xl
  >Markiert wichtige Punkte
  </div>
  </div>
  <div absolute left-68 top-41>
  <Arrow
    v-click="[9, 11]"
    x1="129" y1="180" x2="240" y2="180" text-yellow 
    transition-all duration-500
  />
  </div>
  <div absolute left-132 top-81>
  <div
    v-click="[9, 11]"
    text-yellow left-0 top-0 w-16 absolute text-2xl border="~ yellow rounded-xl" px2 bg-yellow:20
  >
    tags
  </div>
  <div
    v-click="[9, 11]"
    text-purple left-20 top-1 w-20 absolute text-1xl border="~ purple rounded-xl" px2 bg-purple:20
  >
    v.1.0.0
  </div>
</div>

<!--
Zunächst haben wir das Repository – euer digitaler Arbeitsraum auf GitHub, wo all eure Dateien, der Code und die Dokumentation sicher aufbewahrt werden.

1. Innerhalb des Repository gibt es verschiedene Branches oder Zweige. Der Main Branch ist die Hauptader eures Projektes, von der aus alle weiteren Entwicklungen abgeleitet werden.

2. Wenn ihr an neuen Funktionen arbeitet, erstellt ihr dafür einen Feature Branch. Dies ermöglicht es euch, neue Ideen auszuprobieren, ohne den Hauptzweig des Projekts zu beeinträchtigen.

3. Treten Fehler auf, kommt der fix Branch zum Einsatz. Hier könnt ihr Probleme beheben, bevor die Korrekturen in den Hauptzweig übernommen werden.

Natürlich ist ech am ende jedem selbst überlassen wie er seine Branches benennt. Der Hauptbranch wird aber in der Regel immer Main genannt.

4. Ein wesentlicher Bestandteil des Repository ist die Dokumentation, angefangen mit der README-Datei. 
Sie ist das Aushängeschild eures Projekts und bietet jedem, der es besucht, eine Einführung.

5. Die LICENSE-Datei klärt auf, unter welchen Bedingungen euer Projekt verwendet werden darf – sehr wichtig für die rechtlichen Aspekte der Softwarenutzung.

# Versionsgeschichte

6. Die Versionsgeschichte dokumentiert alle Änderungen im Projekt und wird durch Commits festgehalten. Jeder Commit ist wie ein Meilenstein, der eine Änderung im Projektverlauf markiert.

7. Und schließlich die Tags, mit denen ihr wichtige Punkte wie Veröffentlichungen oder Meilensteine in eurem Projekt kenntlich macht.

Mit dieser Struktur stellt GitHub die Werkzeuge bereit, um euer Projekt effektiv zu verwalten und mit der Community zu teilen. Wir werden auch noch einen Blick darauf werfen, wie diese Komponenten in der Praxis eingesetzt werden, indem wir ein echtes Repository auf GitHub untersuchen.
-->

---
layout: center
class: text-center
growX: -10
growY: 50
---

#### Der Branch {.op60}

<!--
Schauen wir uns an, wie ein effektiver Workflow in einem GitHub-Repository mit verschiedenen Branches aussieht.
-->

---
layout: center
---

![](/workflow.png){.h-100.contrast-110}

<!--
Zuerst sehen wir den MAIN-Branch, dargestellt in Lila. Dies ist der Hauptbranch, der den offiziellen Projektstand repräsentiert. Hier wird der Code gespeichert, der bereit für die Produktion ist – stabil und getestet.

Der DEVELOP oder auch dev Branch, hier in Orange dargestellt, ist eine lebendige Entwicklungsumgebung. Es ist der Bereich, in dem neuer Code integriert wird – ein Ort für laufende Arbeit und Integration neuer Features, bevor sie letztendlich in den MAIN-Branch gelangen.

Wenn ein Feature entwickelt wird, erstellt ihr einen FEATURE-Branch, wie hier in Blau zu sehen. Dies ermöglicht es den Entwicklern, unabhängig an neuen Funktionen zu arbeiten, ohne den Entwicklungs- oder Hauptbranch zu beeinträchtigen.

Der FIX-Branch in Rot ist für die Fehlerbehebung vorgesehen. Hier könnt ihr Bugs reparieren, bevor diese Korrekturen zurück in den Entwicklungs- oder Hauptbranch gemerged werden.

Im Diagramm sehen wir auch, wie diese Branches mit der Zeit fortschreiten. Neue Branches werden erstellt oder 'geforkt', wie es die Kreise mit den Pfeilen zeigen, und wenn die Arbeit abgeschlossen ist, werden sie wieder zusammengeführt, was das 'Merging' darstellt.

Es zeigt auch die zyklische Natur der Softwareentwicklung: erstellen, entwickeln, testen und wieder zusammenführen. Es ist ein fortlaufender Prozess, der Flexibilität und Kontinuität in der Softwareentwicklung ermöglicht.

Diese Struktur hilft, die Arbeit zu organisieren und sicherzustellen, dass das Endprodukt so stabil und fehlerfrei wie möglich ist. Es fördert auch die Zusammenarbeit, indem es verschiedenen Teams ermöglicht, parallel an unterschiedlichen Aspekten des Projekts zu arbeiten.
-->

---
layout: center
growX: 50
growY: 50
---

<h1 font-bold class="text-5xl!" flex="~ gap-1 items-center">
  <span v-click>Was gibt es noch</span>
  <span v-after>?</span>
</h1>

<div absolute left-50 top-80 v-click>PR Pull Request</div>
<div absolute left-100 top-80 v-click>git clone</div>
<div absolute left-52 top-50 v-click>git add</div>
<div absolute left-100 top-50 v-click>git commit</div>

<v-click>

<div absolute left-137 top-50>git push</div>
<div absolute left-145 top-80>git init</div>
<div absolute left-170 top-80>git clone</div>
<div absolute left-60 top-90 op80>git add .</div>
<div absolute left-90 top-90>git mv</div>

</v-click>
<v-click>

<div absolute left-85 top-40>git rm</div>
<div absolute left-130 top-90>git commit -m</div>
<div absolute left-125 top-40 op70>git status</div>
<div absolute left-55 top-40 op70>git branch</div>
<div absolute left-175 top-50 op70>git checkout</div>

</v-click>
<v-click>

<div absolute left-145 top-100 op60>git merge</div>
<div absolute left-100 top-30 op70>git branch -d</div>
<div absolute left-70 top-30 op70>git push</div>
<div absolute left-130 top-30 op70>git pull</div>
<div absolute left-120 top-100 op70>git remote add</div>
<div absolute left-70 top-100 op60>git fetch</div>

</v-click>

<!--
Wir haben bereits einige Kernkonzepte von GitHub kennengelernt, doch die Welt von Git ist noch umfangreicher. Es gibt eine Reihe von Befehlen, die für verschiedene Zwecke im Umgang mit Repositories und Versionskontrolle verwendet werden. Diese Befehle sind das Rückgrat von Git, dem Versionskontrollsystem, das die Basis von GitHub bildet.

Heute werden wir uns auf die Standard-Git-Befehle konzentrieren, die ihr benötigt, um eure Projekte effektiv zu verwalten. Dazu gehören 'git clone', um ein bestehendes Repository zu kopieren, 'git add', um Änderungen zur Staging-Area hinzuzufügen, 'git commit', um eure Änderungen festzuhalten, und 'git push', um sie auf euer GitHub-Repository hochzuladen.

Während ich euch diese Befehle live demonstriere, bedenkt, dass Git zwar eng mit GitHub verbunden ist, sie aber nicht dasselbe sind. Git ist das Befehlszeilen-Tool, das euch die Kontrolle über eure Versionsgeschichte gibt, während GitHub die Plattform ist, die euch eine visuelle Schnittstelle und zusätzliche Tools für die Zusammenarbeit anbietet.

Auch wenn wir nicht jeden einzelnen Befehl im Detail besprechen können – und es gibt viele davon –, hoffe ich, euch eine solide Grundlage für eure zukünftige Arbeit mit Git und GitHub zu geben. Denkt immer daran: Die Befehle, die wir heute durchgehen, sind wie die Werkzeuge in eurem Werkzeugkasten. Je besser ihr sie beherrscht, desto effizienter und effektiver könnt ihr eure Projekte verwalten und mit anderen Entwicklern zusammenarbeiten.

Lasst uns jetzt ohne weitere Verzögerung in die Praxis einsteigen und diese Befehle in Aktion sehen.
-->

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Vielen Dank{.font-hand}

Die Präsentationsfolien können auf [nyxb.nexus](https://nyxb.nexus) angesehen und heruntergeladen werden.

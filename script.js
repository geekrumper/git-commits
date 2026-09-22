const lessons = [
  {
    title: "Erkunde den aktuellen Stand",
    shortTitle: "Status prüfen",
    text: "Maya öffnet ihren Projektordner nach dem Wochenende. Bevor sie etwas speichert oder teilt, möchte sie nachsehen: Gibt es <strong>neue Dateien</strong>? Wurde etwas verändert? Und liegt vielleicht schon etwas bereit, das gespeichert werden soll? Git kann ihr diesen Überblick geben, <em>ohne selbst etwas zu verändern</em>.",
    hint: "Tipp: Suche nach dem Git-Befehl, der dir den aktuellen Zustand deines Projekts zeigt.",
    command: "git status",
    output: "Auf Branch main\nnichts zu committen, Arbeitsverzeichnis sauber",
    explanation: "Dieser Befehl ist wie ein Blick auf einen Schreibtisch: Er zeigt, was neu ist, was verändert wurde und was bereits für das Speichern ausgewählt ist. Er verändert keine Datei und ist deshalb ein guter, sicherer erster Schritt bei fast jeder Git-Aufgabe.",
    difficulty: 1,
  },
  {
    title: "Starte die Versionsverwaltung",
    shortTitle: "Git initialisieren",
    text: "Mayas Portfolio liegt bisher nur als normaler Ordner auf ihrem Laptop vor. Sie möchte ab heute nachvollziehen können, welche Stände es gab und bei Bedarf zu einem <strong>früheren Stand zurückkehren</strong>. Dafür muss sie Git einmalig mitteilen: Dieser Ordner soll ab jetzt eine eigene Projektgeschichte bekommen.",
    hint: "Tipp: Du brauchst den Git-Startbefehl für einen Ordner, der bisher noch keine Versionsgeschichte hat.",
    command: "git init",
    output: "Leeres Git-Repository in ~/portfolio/.git/ initialisiert",
    explanation: "Damit beginnt Git, diesen Ordner zu verwalten. Im Hintergrund entsteht ein versteckter Bereich namens .git. Dort speichert Git später die Historie des Projekts; die sichtbaren Dateien bleiben dabei unverändert.",
    difficulty: 1,
  },
  {
    title: "Prüfe die Änderungen",
    shortTitle: "Änderungen prüfen",
    text: "Jetzt liegen im Ordner eine Startseite und ein Stylesheet. Git weiß, dass sie existieren, behandelt sie aber noch nicht als Teil der Projektgeschichte. Maya möchte zuerst genau sehen, welche Dateien Git als <strong>neu</strong> erkennt. So vermeidet sie, versehentlich die falschen Dateien zu speichern.",
    hint: "Tipp: Dies ist derselbe Überblicksbefehl wie zu Beginn. Er nennt auch Dateien, die Git noch nicht verfolgt.",
    command: "git status",
    output: "Auf Branch main\n\nNicht verfolgte Dateien:\n  index.html\n  styles.css\n\nKeine Änderungen zum Commit vorgemerkt",
    explanation: "Git nennt solche Dateien „nicht verfolgt“. Sie liegen im Ordner, gehören aber noch nicht zur Git-Historie. Der Überblicksbefehl hilft Maya zu entscheiden, welche Dateien sie im nächsten Schritt für einen gespeicherten Stand auswählen möchte.",
    difficulty: 1,
  },
  {
    title: "Wähle Dateien für den Schnappschuss",
    shortTitle: "Dateien vormerken",
    text: "Maya ist mit allen sichtbaren Dateien zufrieden und möchte sie gemeinsam als nächsten Projektstand sichern. Bevor Git diesen Stand dauerhaft speichert, legt Maya zuerst eine <strong>Auswahl</strong> bereit. In diesem Fall soll wirklich alles aus dem aktuellen Ordner dazugehören; der Punkt steht im Terminal für „hier und alles darunter“.",
    hint: "Tipp: Suche nach dem Befehl zum Vormerken. Ergänze ihn um das Zeichen, das im Terminal für den aktuellen Ordner steht.",
    command: "git add .",
    output: "Dateien für den Commit vorgemerkt.",
    explanation: "Git speichert Änderungen in zwei Etappen. Zuerst wählst du aus, was in den nächsten gespeicherten Stand soll. Diese Auswahl heißt Staging Area. Der Punkt sorgt dafür, dass alle Dateien im aktuellen Ordner und seinen Unterordnern ausgewählt werden.",
    difficulty: 2,
  },
  {
    title: "Speichere einen sinnvollen Zwischenstand",
    shortTitle: "Commit erstellen",
    text: "Die Dateien sind nun ausgewählt, aber noch nicht dauerhaft in der Projektgeschichte gesichert. Maya möchte einen festen <strong>Meilenstein</strong> anlegen, zu dem sie später zurückkehren kann. Jeder solche Meilenstein braucht eine kurze Nachricht, damit andere verstehen, was zu diesem Zeitpunkt erreicht war. Ihre Nachricht lautet: <em>Initial portfolio</em>.",
    hint: "Tipp: Verwende den Befehl zum Speichern eines Meilensteins. Die Option für eine Nachricht wird mit einem Bindestrich und einem einzelnen Buchstaben geschrieben; setze die Nachricht in Anführungszeichen.",
    command: 'git commit -m "Initial portfolio"',
    alternatives: ["git commit -m 'Initial portfolio'"],
    output: "[main a31d9c7] Initial portfolio\n 2 Dateien geändert, 84 Zeilen hinzugefügt",
    explanation: "Ein Commit ist ein dauerhafter, benannter Schnappschuss der zuvor ausgewählten Dateien. Die kurze Nachricht erklärt den Inhalt dieses Schnappschusses. Gute Nachrichten helfen auch Wochen später noch dabei, die Geschichte eines Projekts zu verstehen.",
    difficulty: 2,
  },
  {
    title: "Sieh in die Historie zurück",
    shortTitle: "Historie ansehen",
    text: "Maya hat ihren ersten Meilenstein gespeichert und möchte kontrollieren, ob er wirklich in der Geschichte des Projekts steht. Git führt dafür ein <strong>Tagebuch</strong>: Zu jedem gespeicherten Stand gibt es eine Kennung, eine Person, einen Zeitpunkt und eine Nachricht. Maya möchte dieses Tagebuch öffnen.",
    hint: "Tipp: Suche nach dem kurzen Git-Befehl für das Protokoll beziehungsweise die Historie.",
    command: "git log",
    output: "commit a31d9c7 (HEAD -> main)\nAutorin: Maya <maya@example.com>\nDatum:   Heute\n\n    Initial portfolio",
    explanation: "Das Git-Protokoll zeigt gespeicherte Meilensteine, normalerweise vom neuesten zum ältesten. Jeder Eintrag hat eine eindeutige Kennung, Informationen zur Person und zum Zeitpunkt sowie die Nachricht, die beim Speichern vergeben wurde.",
    difficulty: 2,
  },
  {
    title: "Gib einem Branch einen Namen",
    shortTitle: "Branch erstellen",
    text: "Maya möchte einen neuen Weg für ihr Projekt ausprobieren, ohne den sicheren Hauptstand anzutasten. In Git heißt ein solcher paralleler Arbeitsweg <strong>Branch</strong>. Sie legt einen neuen Branch an und nennt ihn <em>experiment</em>. Noch arbeitet sie danach nicht automatisch auf diesem neuen Weg – sie erstellt zunächst nur das Schild dafür.",
    hint: "Tipp: Der Befehl zum Anlegen eines parallelen Arbeitswegs besteht aus Git, dem englischen Wort für Ast und dem gewünschten Namen.",
    command: "git branch experiment",
    output: "Branch „experiment“ erstellt.",
    explanation: "Ein Branch ist wie ein alternativer Weg ab demselben Ausgangspunkt. So kann Maya gefahrlos etwas ausprobieren, während die Hauptversion unverändert bleibt. Nach dem Anlegen ist der neue Weg vorhanden, aber Maya steht noch auf dem bisherigen Branch main.",
    difficulty: 3,
  },
  {
    title: "Wechsle auf den neuen Pfad",
    shortTitle: "Branch wechseln",
    text: "Der neue Weg <em>experiment</em> existiert, doch Maya befindet sich noch auf <strong>main</strong>, dem Hauptweg. Bevor sie dort etwas ausprobieren kann, muss sie aktiv auf experiment wechseln. Git hat dafür einen modernen Befehl, dessen englisches Verb „wechseln“ bedeutet. Danach gehören ihre nächsten gespeicherten Stände zu experiment.",
    hint: "Tipp: Kombiniere Git mit dem englischen Verb für „wechseln“ und dem Namen experiment.",
    command: "git switch experiment",
    alternatives: ["git checkout experiment"],
    output: "Zu Branch „experiment“ gewechselt",
    explanation: "Dieser Befehl aktiviert den Branch experiment. Von jetzt an beziehen sich neue Änderungen und gespeicherte Meilensteine auf diesen Arbeitsweg. In älteren Anleitungen findest du dafür manchmal einen anderen Befehl; für Einsteiger ist der moderne Wechselbefehl leichter zu verstehen.",
    difficulty: 3,
  },
];

const commandForm = document.querySelector("#commandForm");
const commandInput = document.querySelector("#commandInput");
const terminalOutput = document.querySelector("#terminalOutput");
const historyUpButton = document.querySelector("#historyUpButton");
const historyDownButton = document.querySelector("#historyDownButton");
const feedback = document.querySelector("#feedback");
const missionTitle = document.querySelector("#missionTitle");
const missionText = document.querySelector("#missionText");
const missionNumber = document.querySelector("#missionNumber");
const hintText = document.querySelector("#hintText");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const stepList = document.querySelector("#stepList");
const difficulty = document.querySelector(".difficulty");
const resetButton = document.querySelector("#resetButton");
const bailOutButton = document.querySelector("#bailOutButton");
const commandHelpModal = document.querySelector("#commandHelpModal");
const modalCommand = document.querySelector("#modalCommand");
const modalTitle = document.querySelector("#modalTitle");
const modalExplanation = document.querySelector("#modalExplanation");
const modalCloseButton = document.querySelector("#modalCloseButton");
const modalContinueButton = document.querySelector("#modalContinueButton");
const themeToggle = document.querySelector("#themeToggle");

let currentLesson = 0;

function normalized(command) {
  return command.trim().replace(/\s+/g, " ");
}

function setTheme(isLightTheme) {
  document.body.classList.toggle("light-theme", isLightTheme);
  themeToggle.setAttribute("aria-pressed", String(isLightTheme));
  themeToggle.title = isLightTheme ? "Dunkles Design aktivieren" : "Helles Design aktivieren";
  themeToggle.querySelector(".theme-toggle-label").textContent = isLightTheme ? "Dunkel" : "Hell";
  themeToggle.querySelector(".theme-toggle-icon").textContent = isLightTheme ? "◐" : "☼";
  localStorage.setItem("commit-quest-theme", isLightTheme ? "light" : "dark");
}

function updateHistoryControls() {
  const maximumScroll = terminalOutput.scrollHeight - terminalOutput.clientHeight;
  historyUpButton.disabled = terminalOutput.scrollTop <= 0;
  historyDownButton.disabled = terminalOutput.scrollTop >= maximumScroll - 1;
}

function scrollTerminalHistory(direction) {
  terminalOutput.scrollBy({ top: direction * 84, behavior: "smooth" });
  window.setTimeout(updateHistoryControls, 250);
}

function renderSteps() {
  stepList.innerHTML = lessons
    .map(
      (lesson, index) =>
        `<li class="${index === currentLesson ? "active" : ""} ${index < currentLesson ? "complete" : ""}" data-step="${String(index + 1).padStart(2, "0")}">${lesson.shortTitle}</li>`,
    )
    .join("");
}

function renderLesson() {
  const lesson = lessons[currentLesson];
  missionNumber.textContent = `AUFGABE ${String(currentLesson + 1).padStart(2, "0")}`;
  missionTitle.textContent = lesson.title;
  missionText.innerHTML = lesson.text;
  hintText.innerHTML = lesson.hint;
  progressText.textContent = `${String(currentLesson + 1).padStart(2, "0")} / ${String(lessons.length).padStart(2, "0")}`;
  progressBar.style.width = `${((currentLesson + 1) / lessons.length) * 100}%`;
  difficulty.innerHTML = Array.from(
    { length: 4 },
    (_, index) => `<i class="${index < lesson.difficulty ? "filled" : ""}"></i>`,
  ).join("");
  renderSteps();
  commandInput.placeholder = "Gib deinen Befehl ein ...";
  commandInput.focus();
}

function addTerminalLine(command, output) {
  const commandLine = document.createElement("p");
  commandLine.innerHTML = `<span class="prompt">maya@laptop</span><span class="separator">:</span><span class="path">~/portfolio</span><span class="symbol">$</span> ${escapeHtml(command)}`;
  terminalOutput.append(commandLine);

  const result = document.createElement("p");
  result.className = "command-result";
  result.textContent = output;
  result.style.whiteSpace = "pre-line";
  terminalOutput.append(result);
  terminalOutput.scrollTo({ top: terminalOutput.scrollHeight, behavior: "smooth" });
  updateHistoryControls();
}

function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

function finishLesson() {
  missionNumber.textContent = "QUEST ABGESCHLOSSEN";
  missionTitle.textContent = "Mayas Historie hat begonnen.";
  missionText.textContent = "Du hast Maya durch die Grundlagen von Git geführt: prüfen, vormerken, committen und sicher auf einem Branch arbeiten. Ihr Projekt erzählt jetzt eine Geschichte.";
  hintText.innerHTML = "Starte jederzeit neu, um die Befehle noch einmal zu üben.";
  progressText.textContent = "08 / 08";
  progressBar.style.width = "100%";
  difficulty.innerHTML = '<i class="filled"></i><i class="filled"></i><i class="filled"></i><i class="filled"></i>';
  commandInput.disabled = true;
  commandInput.placeholder = "Lektion abgeschlossen";
  commandForm.querySelector("button").disabled = true;
  bailOutButton.disabled = true;
  renderSteps();
}

commandForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const typedCommand = normalized(commandInput.value);
  const lesson = lessons[currentLesson];

  if (!typedCommand) {
    feedback.textContent = "Das Terminal wartet auf einen Befehl.";
    feedback.className = "feedback error";
    commandInput.focus();
    return;
  }

  const acceptedCommands = [lesson.command, ...(lesson.alternatives || [])].map(normalized);
  if (!acceptedCommands.includes(typedCommand)) {
    feedback.textContent = "Noch nicht ganz. Lies den Hinweis und versuche es erneut.";
    feedback.className = "feedback error";
    commandInput.select();
    return;
  }

  addTerminalLine(typedCommand, lesson.output);
  feedback.textContent = "Gut gemacht — Befehl akzeptiert.";
  feedback.className = "feedback success";
  commandInput.value = "";
  commandInput.focus();
  currentLesson += 1;

  if (currentLesson === lessons.length) {
    finishLesson();
    return;
  }

  window.setTimeout(() => {
    feedback.textContent = "";
    renderLesson();
  }, 650);
});

resetButton.addEventListener("click", () => {
  currentLesson = 0;
  terminalOutput.innerHTML = `
    <p class="system-line">Letzte Anmeldung: heute auf ttys001</p>
    <p><span class="prompt">maya@laptop</span><span class="separator">:</span><span class="path">~/portfolio</span><span class="symbol">$</span> <span class="muted">willkommen bei Commit Quest</span></p>
  `;
  updateHistoryControls();
  feedback.textContent = "";
  commandInput.disabled = false;
  commandForm.querySelector("button").disabled = false;
  bailOutButton.disabled = false;
  renderLesson();
});

bailOutButton.addEventListener("click", () => {
  const lesson = lessons[currentLesson];
  modalCommand.textContent = lesson.command;
  modalTitle.textContent = `Was macht ${lesson.command}?`;
  modalExplanation.textContent = lesson.explanation;
  commandHelpModal.showModal();
});

function closeCommandHelp(insertCommand = false) {
  if (insertCommand) {
    commandInput.value = lessons[currentLesson].command;
  }
  commandHelpModal.close();
  commandInput.focus();
  if (insertCommand) {
    commandInput.select();
  }
}

modalCloseButton.addEventListener("click", closeCommandHelp);
modalContinueButton.addEventListener("click", () => closeCommandHelp(true));
commandHelpModal.addEventListener("click", (event) => {
  if (event.target === commandHelpModal) {
    closeCommandHelp();
  }
});
commandHelpModal.addEventListener("close", () => commandInput.focus());

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "/" && !commandHelpModal.open && !commandInput.disabled) {
    event.preventDefault();
    bailOutButton.click();
  }
});

historyUpButton.addEventListener("click", () => scrollTerminalHistory(-1));
historyDownButton.addEventListener("click", () => scrollTerminalHistory(1));
terminalOutput.addEventListener("scroll", updateHistoryControls);
themeToggle.addEventListener("click", () => setTheme(!document.body.classList.contains("light-theme")));

renderLesson();
updateHistoryControls();
setTheme(localStorage.getItem("commit-quest-theme") === "light");

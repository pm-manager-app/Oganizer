# WirKompass v0.4 – GitHub Pages

Dies ist die **lokale HTML-Demo**, keine produktive Mehrbenutzer-App. Die im Browser eingegebenen Daten bleiben im `localStorage` dieses Browsers gespeichert und werden **nicht** zwischen den Geräten synchronisiert. Die Push-Nachrichten sind simuliert. Es gibt hier **keinen echten Login**. Bitte niemals echte Kontostände, private Angaben oder vertrauliche Dokumente in die Demo eintragen.

## In GitHub Pages veröffentlichen

1. Auf https://github.com anmelden.
2. Über **New repository** ein Repository namens `wirkompass` anlegen, als **Public** einstellen (GitHub Free unterstützt GitHub Pages für öffentliche Repositories).
3. Im Repository **Add file → Upload files** wählen und diese `index.html` hochladen, danach **Commit changes**.
4. **Settings → Pages** öffnen. Unter **Build and deployment → Source** `Deploy from a branch` auswählen, dann **Branch: main**, Ordner **/(root)** und **Save**.
5. Sobald GitHub die Veröffentlichung abgeschlossen hat, ist die Seite unter `https://DEIN-GITHUB-BENUTZERNAME.github.io/wirkompass/` erreichbar. Den Status findest du bei **Settings → Pages** oder **Actions**.
6. Auf dem Handy denselben Link aufrufen. Achtung: jedes Gerät hat eigene lokale Demo-Daten.

## Sicherheit und nächster Schritt

GitHub Pages veröffentlicht die HTML-Oberfläche **öffentlich**. Eine echte Familien-App benötigt Supabase Auth, eine Datenbank mit RLS-Richtlinien, getestete private Freigaben und Push-Backend. GitHub Pages ist nur das Hosting für den Browserteil und ersetzt diese Infrastruktur nicht. Lege keine Service-Role-Keys oder sonstigen Geheimnisse in Dateien ab, die auf GitHub veröffentlicht werden.

Informationen: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

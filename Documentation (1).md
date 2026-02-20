# DOCUMENTATION - LANDING PAGE SPASSOSO SAFARIS

## 📋 INFORMAZIONI PROGETTO

**Cliente:** Spassoso Safaris  
**Prodotto:** Safari 6 giorni Tarangire → Serengeti → Ngorongoro  
**Obiettivo:** Lead Generation (richieste preventivo)  
**Target:** Viaggiatori italiani fascia medio-alta che cercano esperienze autentiche  
**URL Sito:** https://www.spassososafaris.com/

---

## 🎨 DESIGN SYSTEM

### Palette Colori

**Colori Principali:**
- Verde Safari Primary: `#27ae60`
- Verde Safari Hover: `#2d802f`
- Grigio Scuro Header/Footer: `#32373c`
- Grigio Testi: `#333333`
- Grigio Chiaro Background: `#f3f4f6`
- Grigio Testi Secondari: `#9ca0af`
- Bianco: `#ffffff`

**Colori Accent:**
- Arancione Safari: `#ff6900`
- Giallo/Oro: `#fcb900`
- Rosso Urgency: `#dc3545`

### Tipografia

**Google Fonts da importare:**
- **Quicksand** (300, 400, 500, 600, 700) - Titoli
- **Nunito Sans** (300, 400, 500, 600, 700, 900) - Testi

**Gerarchia:**
- H1: Quicksand Bold 700, 48-56px desktop, 32-36px mobile
- H2: Quicksand SemiBold 600, 36-42px desktop, 28-32px mobile
- H3: Quicksand Medium 500, 28-32px desktop, 22-26px mobile
- H4: Quicksand Medium 500, 22-26px desktop, 18-20px mobile
- Body: Nunito Sans Regular 400, 16-18px, line-height 1.6
- Bottoni: Nunito Sans SemiBold 600, 16px

---

## 🛠️ STACK TECNOLOGICO

- **CSS Framework:** Tailwind CSS 4.1+
- **Animazioni:** Framer Motion 12
- **Icone:** Heroicons (outline style)
- **Responsive:** Mobile-first approach

---

## 📐 STRUTTURA LANDING PAGE

### HEADER (Sticky)
**Elementi:**
- Logo Spassoso Safaris (sinistra) - `logo/logo.svg`
- Navigation menu desktop: Home | Safari | Chi Siamo | Contatti
- CTA Button: "Richiedi Preventivo" (verde #27ae60)
- Mobile: Hamburger menu

**Comportamento:**
- Sticky header con shadow al scroll
- Logo rimpicciolito al scroll (da 60px a 45px)
- Background bianco con opacity al scroll

---

### SEZIONE 1: HERO SECTION

**Layout:**
- Full-screen height (min 100vh)
- Slideshow automatico background (4 immagini)
- Overlay gradient scuro per leggibilità (rgba(0,0,0,0.4))
- Contenuto centrato verticalmente

**Slideshow Immagini:**
1. `images/hero-1.jpg` - Elefanti al tramonto Tarangire
2. `images/hero-2.jpg` - Leone nelle pianure Serengeti
3. `images/hero-3.jpg` - Leoni Serengeti
4. `images/hero-4.jpg` - Jeep safari al tramonto

**Transizione:** Fade 1.5s, ogni immagine 5 secondi, Ken Burns effect (zoom lento)

**Contenuto Testuale:**

**Eyebrow (sopra H1):**
"Il Safari dei Tuoi Sogni"

**H1 (Headline principale):**
"Vivi 6 Giorni di Avventura Autentica tra Tarangire, Serengeti e Ngorongoro"

**Subheadline:**
"Safari personalizzato in Tanzania con guide locali esperte. Zero stress, massima emozione."

**Bullets Benefici (3 icone + testo):**
- ✓ Guide tanzaniane certificate
- ✓ Itinerario su misura per te
- ✓ Piccoli gruppi o safari privati

**CTA Primary:**
"RICHIEDI IL TUO PREVENTIVO PERSONALIZZATO"
(Bottone verde #27ae60, con icona arrow-right Heroicons)

**Trust Badge sotto CTA:**
"Preventivo gratuito • Risposta in 24h • Senza impegno"

**Animazioni Framer Motion:**
- H1: Fade in from bottom, delay 0.2s
- Subheadline: Fade in from bottom, delay 0.4s
- Bullets: Stagger children, delay 0.6s
- CTA: Scale up, delay 0.8s

---

### SEZIONE 2: I TRE PARCHI ICONICI

**Background:** Grigio chiaro #f3f4f6

**Titolo Sezione:**
"Esplora i 3 Parchi Più Spettacolari della Tanzania"

**Sottotitolo:**
"Un viaggio che ti porterà nel cuore dell'Africa selvaggia"

**Layout:** Grid 3 colonne desktop, 1 colonna mobile

**CARD 1 - TARANGIRE:**

**Immagine:** `images/tarangire.jpg`

**Icona Heroicons:** MapPinIcon

**Titolo:** "Parco Nazionale del Tarangire"

**Descrizione:**
"Famoso per i suoi giganteschi baobab e le enormi mandrie di elefanti. Qui vivrai l'Africa più autentica, tra paesaggi mozzafiato e una biodiversità incredibile."

**Highlights (lista con checkmark):**
- Oltre 300 elefanti
- Baobab millenari
- 550 specie di uccelli

**CARD 2 - SERENGETI:**

**Immagine:** `images/serengeti.jpg`

**Icona Heroicons:** GlobeAltIcon

**Titolo:** "Parco Nazionale del Serengeti"

**Descrizione:**
"Le infinite pianure dove si svolge la Grande Migrazione. Un palcoscenico naturale dove leoni, ghepardi e leopardi regnano sovrani in uno degli ecosistemi più ricchi del pianeta."

**Highlights (lista con checkmark):**
- Grande Migrazione degli gnu
- I Big Five africani
- 14.763 km² di savana

**CARD 3 - NGORONGORO:**

**Immagine:** `images/ngorongoro.jpg`

**Icona Heroicons:** SparklesIcon

**Titolo:** "Cratere di Ngorongoro"

**Descrizione:**
"Un'arca di Noè naturale. Questo cratere vulcanico ospita la più alta concentrazione di fauna selvatica dell'Africa in un anfiteatro naturale da 20 km di diametro."

**Highlights (lista con checkmark):**
- Rinoceronti neri rari
- Cratere vulcanico UNESCO
- 25.000 animali residenti

**Animazioni Hover:**
- Scale up immagine 1.05x
- Shadow elevation
- Overlay gradient leggero

**CTA Sezione:**
"Scopri l'Itinerario Completo Giorno per Giorno"
(Bottone secondary outline verde, scroll smooth to itinerario)

---

### SEZIONE 3: ITINERARIO DETTAGLIATO 6 GIORNI

**Background:** Bianco #ffffff

**Titolo Sezione:**
"Il Tuo Safari di 6 Giorni: Ogni Momento è un'Emozione"

**Sottotitolo:**
"Un itinerario studiato nei minimi dettagli per offrirti il meglio di ogni parco"

**Layout:** Timeline verticale con linea connettore verde

**GIORNO 1:**

**Titolo:** "Arrivo a Kilimanjaro e Trasferimento ad Arusha"

**Icone attività:** 
- PlaneIcon (arrivo)
- TruckIcon (trasferimento)
- HomeIcon (sistemazione)

**Descrizione:**
"Benvenuto in Tanzania! Il nostro staff ti accoglierà all'aeroporto di Kilimanjaro e ti accompagnerà al lodge ad Arusha. Briefing sul safari e cena di benvenuto con la tua guida personale."

**Pernottamento:** "Lodge ad Arusha"

**Pasti inclusi:** "Cena"

---

**GIORNO 2:**

**Titolo:** "Parco Nazionale del Tarangire - Safari Completo"

**Icone attività:**
- SunIcon (game drive mattutino)
- CameraIcon (fotografia)
- MoonIcon (game drive pomeridiano)

**Descrizione:**
"Partenza all'alba per il Tarangire. Intera giornata dedicata all'esplorazione del parco con game drive mattutino e pomeridiano. Pranzo pic-nic sotto i baobab. Ammira le grandi mandrie di elefanti e la varietà di antilopi."

**Pernottamento:** "Lodge/Camp vicino Tarangire"

**Pasti inclusi:** "Colazione, Pranzo, Cena"

**Highlight:** "Tramonto africano dalla terrazza del lodge"

---

**GIORNO 3:**

**Titolo:** "Verso il Serengeti - Game Drive en Route"

**Icone attività:**
- TruckIcon (trasferimento)
- BinocularsIcon (avvistamenti)
- SunIcon (game drive)

**Descrizione:**
"Viaggio verso il leggendario Serengeti attraverso la Ngorongoro Conservation Area. Game drive durante il tragitto per massimizzare gli avvistamenti. Arrivo al campo nel pomeriggio."

**Pernottamento:** "Lodge/Camp nel Serengeti"

**Pasti inclusi:** "Colazione, Pranzo, Cena"

**Highlight:** "Attraversamento delle pianure infinite"

---

**GIORNO 4:**

**Titolo:** "Serengeti - Safari Full Day tra i Big Five"

**Icone attività:**
- SunIcon (alba)
- BinocularsIcon (avvistamenti)
- CameraIcon (fotografia)

**Descrizione:**
"Giornata completa di safari nel Serengeti. Partenza prima dell'alba per ammirare i predatori in azione. Seguiremo i movimenti degli animali attraverso le pianure, alla ricerca dei Big Five e della Grande Migrazione (stagionale)."

**Pernottamento:** "Lodge/Camp nel Serengeti"

**Pasti inclusi:** "Colazione, Pranzo, Cena"

**Highlight:** "Safari fotografico al tramonto sulle kopjes rocciose"

---

**GIORNO 5:**

**Titolo:** "Cratere di Ngorongoro - Discesa nel Cratere"

**Icone attività:**
- ArrowDownIcon (discesa cratere)
- BinocularsIcon (avvistamenti)
- SparklesIcon (esperienza unica)

**Descrizione:**
"Dopo colazione, discesa nel cratere di Ngorongoro per un game drive di 6 ore. Questo ecosistema unico ospita circa 25.000 animali. Picnic lunch sul fondo del cratere. Possibilità di avvistare i rarissimi rinoceronti neri."

**Pernottamento:** "Lodge sull'orlo del cratere"

**Pasti inclusi:** "Colazione, Pranch, Cena"

**Highlight:** "Pranzo con vista sul lago del cratere circondato dalla fauna"

---

**GIORNO 6:**

**Titolo:** "Rientro ad Arusha e Partenza"

**Icone attività:**
- TruckIcon (rientro)
- ShoppingBagIcon (shopping souvenir)
- PlaneIcon (volo)

**Descrizione:**
"Colazione con calma e rientro verso Arusha. Sosta in un mercato locale Masai per souvenir autentici. Trasferimento all'aeroporto di Kilimanjaro per il volo di rientro o proseguimento verso Zanzibar (estensione opzionale)."

**Pasti inclusi:** "Colazione, Pranzo (box lunch)"

**Highlight:** "I ricordi di un'avventura indimenticabile"

---

**CTA dopo Itinerario:**
"Questo Itinerario Ti Ha Conquistato? Richiedi il Tuo Preventivo Ora"
(Bottone verde primary)

---

### SEZIONE 4: PERCHÉ SCEGLIERE SPASSOSO SAFARIS

**Background:** Grigio chiaro #f3f4f6

**Titolo Sezione:**
"Perché Oltre 500 Viaggiatori Ci Hanno Scelto"

**Sottotitolo:**
"Non organizziamo solo safari. Creiamo esperienze che cambiano la vita."

**Layout:** Grid 4 colonne desktop, 2 colonne tablet, 1 colonna mobile

**PILLAR 1:**

**Icona Heroicons:** UserGroupIcon (solid)

**Titolo:** "Guide Locali Esperte"

**Descrizione:**
"Le nostre guide tanzaniane certificate conoscono ogni angolo di questi parchi. Cresciuti in Tanzania, parlano perfettamente italiano e trasformano ogni avvistamento in una lezione di vita sulla savana."

---

**PILLAR 2:**

**Icona Heroicons:** AdjustmentsHorizontalIcon

**Titolo:** "Safari Su Misura"

**Descrizione:**
"Nessun safari è uguale all'altro. Personalizziamo ogni dettaglio in base alle tue esigenze: budget, date, interessi fotografici, livello di comfort. Il tuo viaggio, le tue regole."

---

**PILLAR 3:**

**Icona Heroicons:** HeartIcon (solid)

**Titolo:** "Piccoli Gruppi o Safari Privati"

**Descrizione:**
"Massimo 6 persone per jeep per garantirti spazio, visibilità e un'esperienza intima. Oppure scegli un safari privato solo per te e i tuoi compagni di viaggio."

---

**PILLAR 4:**

**Icona Heroicons:** PhoneIcon (solid)

**Titolo:** "Assistenza 24/7 in Italiano"

**Descrizione:**
"Dal primo contatto al tuo rientro a casa, siamo sempre raggiungibili. Assistenza telefonica e WhatsApp h24 durante tutto il safari per qualsiasi necessità o imprevisto."

---

### SEZIONE 5: COSA È INCLUSO NEL PACCHETTO

**Background:** Bianco #ffffff

**Titolo Sezione:**
"Trasparenza Totale: Ecco Cosa Include il Tuo Safari"

**Sottotitolo:**
"Nessun costo nascosto. Tutto chiaro fin dall'inizio."

**Layout:** Due colonne 50/50 desktop, stack mobile

**COLONNA SINISTRA - INCLUSO:**

**Titolo colonna:** "✓ INCLUSO NEL PREZZO"

**Lista con icona CheckCircleIcon verde:**
- Tutti i trasferimenti aeroportuali
- Jeep 4x4 Land Cruiser con tetto apribile
- Guida tanzaniana certificata parlante italiano
- Tutti i pernottamenti (5 notti in lodge/camp)
- Pensione completa (colazione, pranzo, cena)
- Tutte le tasse d'ingresso ai parchi nazionali
- Acqua minerale illimitata durante i safari
- Assicurazione medica da viaggio
- Binocolo professionale Bushnell
- Game drive illimitati secondo programma

---

**COLONNA DESTRA - NON INCLUSO:**

**Titolo colonna:** "⨯ NON INCLUSO"

**Lista con icona XCircleIcon grigio:**
- Voli internazionali per Tanzania
- Visto d'ingresso Tanzania (50 USD online)
- Bevande alcoliche nei lodge
- Mance per guide e staff (facoltative)
- Spese personali e souvenir
- Estensione mare a Zanzibar (disponibile su richiesta)

---

**Box Trust Finale:**
"💰 **Pagamento Flessibile:** Acconto 30% alla conferma, saldo 30 giorni prima della partenza"

---

### SEZIONE 6: GALLERIA ESPERIENZE

**Background:** Grigio scuro #32373c

**Titolo Sezione (bianco):**
"Le Emozioni Dei Nostri Safari"

**Sottotitolo (grigio chiaro):**
"Immagini autentiche dai nostri ultimi viaggi"

**Layout:** Masonry grid 3 colonne desktop, 2 tablet, 1 mobile

**Immagini:**
1. `images/gallery-1.jpg` - Elefanti al tramonto
2. `images/gallery-2.jpg` - Leone durante safari
3. `images/gallery-3.jpg` - Leoni Serengeti
4. `images/gallery-4.jpg` - Jeep safari al tramonto
5. `images/gallery-5.jpg` - Paesaggio safari
6. `images/gallery-6.jpg` - Animali selvaggi

**Interazione:**
- Lightbox modal al click
- Navigation arrows
- Close button
- Caption con descrizione immagine

---

### SEZIONE 7: TESTIMONIANZE CLIENTI

**Background:** Bianco #ffffff

**Titolo Sezione:**
"Cosa Dicono i Viaggiatori che Hanno Vissuto Questa Avventura"

**Layout:** Carosello 3 card visibili desktop, 1 mobile, auto-scroll ogni 6 sec

**TESTIMONIANZA 1:**

**Nome Cliente:** "Marco e Giulia - Milano"

**Rating:** ⭐⭐⭐⭐⭐ (5 stelle)

**Testo:**
"Un'esperienza che ci ha cambiato la vita. Le guide conoscevano ogni animale per nome, ogni aneddoto del parco. La professionalità di Spassoso Safaris ci ha fatto sentire al sicuro e coccolati dall'inizio alla fine. Il Serengeti al tramonto non ha prezzo."

**Data:** "Safari Agosto 2024"

---

**TESTIMONIANZA 2:**

**Nome Cliente:** "Famiglia Rossi - Roma"

**Rating:** ⭐⭐⭐⭐⭐ (5 stelle)

**Testo:**
"Abbiamo portato i nostri due bambini (8 e 11 anni) ed è stata la vacanza più educativa e divertente della loro vita. La guida è stata pazientissima nel rispondere a tutte le loro domande. Lodge confortevoli e cibo ottimo. Consigliatissimo!"

**Data:** "Safari Luglio 2024"

---

**TESTIMONIANZA 3:**

**Nome Cliente:** "Alessandro - Torino"

**Rating:** ⭐⭐⭐⭐⭐ (5 stelle)

**Testo:**
"Safari fotografico perfetto. Sono un fotografo professionista e avevo esigenze specifiche: Spassoso ha personalizzato completamente l'itinerario per massimizzare le opportunità fotografiche. Abbiamo visto i Big Five in 3 giorni. Straordinario!"

**Data:** "Safari Settembre 2024"

---

**TESTIMONIANZA 4:**

**Nome Cliente:** "Sara e Luca - Bologna"

**Rating:** ⭐⭐⭐⭐⭐ (5 stelle)

**Testo:**
"Viaggio di nozze indimenticabile. L'organizzazione è stata impeccabile, ogni dettaglio curato. La sorpresa del pranzo romantico nel cratere del Ngorongoro ci ha emozionati. Grazie Spassoso per aver reso magico il nostro viaggio più importante!"

**Data:** "Safari Ottobre 2024"

---

**Social Proof Numbers:**

**Layout:** 3 box inline sotto testimonianze

**BOX 1:**
"500+"
"Viaggiatori Soddisfatti"

**BOX 2:**
"4.9/5"
"Rating Google Reviews"

**BOX 3:**
"10+"
"Anni di Esperienza"

---

### SEZIONE 8: FAQ (Domande Frequenti)

**Background:** Grigio chiaro #f3f4f6

**Titolo Sezione:**
"Le Risposte alle Tue Domande"

**Sottotitolo:**
"Tutto quello che devi sapere prima di partire per il tuo safari"

**Layout:** Accordion (collapse/expand), 1 colonna, max-width contenuto

**FAQ 1:**
**Domanda:** "Qual è il periodo migliore per fare un safari in Tanzania?"

**Risposta:**
"La Tanzania è visitabile tutto l'anno, ma i periodi migliori sono giugno-ottobre (stagione secca, migliore per avvistamenti) e gennaio-febbraio (stagione dei cuccioli). La Grande Migrazione nel Serengeti varia da luglio a settembre. Contattaci per consigli personalizzati in base alle tue preferenze."

---

**FAQ 2:**
**Domanda:** "Ho bisogno del visto per entrare in Tanzania?"

**Risposta:**
"Sì, i cittadini italiani necessitano di visto turistico. Puoi richiederlo online sul sito ufficiale https://eservices.immigration.go.tz prima della partenza (costo 50 USD) oppure all'arrivo in aeroporto (stesso costo). Ti forniremo tutta l'assistenza necessaria per la procedura."

---

**FAQ 3:**
**Domanda:** "Quali vaccinazioni sono obbligatorie?"

**Risposta:**
"L'unica vaccinazione obbligatoria è la febbre gialla se arrivi da paesi a rischio. Consigliamo comunque epatite A e B, tifo e profilassi antimalarica (solo per alcune zone). Ti forniremo una lista dettagliata e ti consigliamo di consultare il tuo medico almeno 6 settimane prima della partenza."

---

**FAQ 4:**
**Domanda:** "Cosa devo portare per il safari?"

**Risposta:**
"Abbigliamento leggero in colori neutri (kaki, beige, verde), cappello, occhiali da sole, crema solare SPF 50+, scarpe comode da trekking, giacca leggera per le serate, binocolo (se ne hai uno personale), fotocamera con teleobiettivo. Ti invieremo una checklist completa dopo la prenotazione."

---

**FAQ 5:**
**Domanda:** "I bambini possono partecipare al safari?"

**Risposta:**
"Assolutamente sì! Accettiamo bambini dai 5 anni in su. I safari sono adattabili alle esigenze delle famiglie con game drive più brevi e lodge family-friendly. I bambini under 12 hanno sconti speciali. Le nostre guide sono esperte nell'intrattenere i più piccoli rendendo il safari educativo e divertente."

---

**FAQ 6:**
**Domanda:** "Posso estendere il viaggio con mare a Zanzibar?"

**Risposta:**
"Certamente! Zanzibar è la destinazione perfetta per rilassarsi dopo il safari. Offriamo pacchetti combinati Safari + Mare con trasferimenti inclusi. Spiagge bianche, mare cristallino e cultura swahili ti aspettano. Richiedi un preventivo personalizzato."

---

**FAQ 7:**
**Domanda:** "Come funziona il pagamento?"

**Risposta:**
"Richiediamo un acconto del 30% alla conferma della prenotazione (bonifico bancario) e il saldo del 70% va versato 30 giorni prima della partenza. Accettiamo bonifici bancari e carte di credito. Tutti i pagamenti sono garantiti e assicurati."

---

**FAQ 8:**
**Domanda:** "Cosa succede se devo cancellare?"

**Risposta:**
"Offriamo polizze assicurative flessibili. Cancellazione gratuita fino a 60 giorni prima della partenza (trattenuta solo 10% spese gestione). Da 60 a 30 giorni: penale 30%. Da 30 a 15 giorni: penale 50%. Sotto 15 giorni: penale 100%. Consigliamo sempre l'assicurazione annullamento viaggio inclusa nei nostri pacchetti."

---

**CTA dopo FAQ:**
"Hai Altre Domande? Parliamone!"
(Bottone verde che scrolla al form)

---

### SEZIONE 9: FORM PREVENTIVO FINALE + CTA

**Background:** Immagine full-width tramonto safari con overlay gradient scuro (`images/cta-background.jpg`)

**Eyebrow (testo piccolo sopra):**
"Inizia La Tua Avventura"

**H2 (bianco, centrato):**
"Richiedi il Tuo Preventivo Personalizzato Gratuito"

**Sottotitolo (bianco):**
"Compila il form qui sotto e riceverai un preventivo su misura entro 24 ore. Nessun impegno, solo il primo passo verso il safari dei tuoi sogni."

---

**FORM LAYOUT:**

**Background Form:** Bianco con shadow, padding generoso, border-radius

**Campi Form:**

1. **Nome e Cognome*** (input text, placeholder: "Mario Rossi")
   - Required: true
   - Validation: min 2 caratteri

2. **Email*** (input email, placeholder: "mario.rossi@email.com")
   - Required: true
   - Validation: formato email valido

3. **Telefono** (input tel, placeholder: "+39 333 1234567")
   - Required: true
   - Toggle checkbox sotto: "☑️ Questo è il mio numero WhatsApp"

4. **Periodo Preferito*** (date range picker)
   - Placeholder: "Seleziona date partenza e rientro"
   - Required: true
   - Min date: oggi + 30 giorni

5. **Numero Partecipanti*** (due input number affiancati)
   - "Adulti" (min: 1, max: 10, default: 2)
   - "Bambini (5-12 anni)" (min: 0, max: 5, default: 0)
   - Required: true

6. **Budget Indicativo** (select dropdown)
   - Opzioni:
     - "Seleziona una fascia..."
     - "€ 2.000 - € 3.000 per persona"
     - "€ 3.000 - € 4.000 per persona"
     - "€ 4.000 - € 5.000 per persona"
     - "Oltre € 5.000 per persona"
   - Required: false

7. **Note o Richieste Particolari** (textarea, rows: 4)
   - Placeholder: "Hai esigenze specifiche? Diete particolari? Interessi fotografici? Scrivieci qui..."
   - Required: false
   - Max length: 500 caratteri

---

**CHECKBOX CONSENSI:**

1. **Privacy Policy*** (required)
   "Ho letto e accetto la [Privacy Policy](#) e autorizzo il trattamento dei miei dati personali"

2. **Newsletter** (optional, pre-checked)
   "Desidero ricevere offerte esclusive e consigli di viaggio via email (puoi disiscriverti in qualsiasi momento)"

---

**BOTTONE SUBMIT:**

Testo: "RICHIEDI IL TUO PREVENTIVO PERSONALIZZATO"

Design:
- Background: Verde #27ae60
- Hover: Verde scuro #2d802f
- Full width su mobile
- Min height: 56px
- Icona: ArrowRightIcon (Heroicons)
- Loading state: Spinner + "Invio in corso..."
- Disabled state: Grigio

---

**MESSAGGIO CONFERMA POST-SUBMIT:**

**Success Message (modale o inline):**

Icona: CheckCircleIcon verde grande

Titolo: "Richiesta Inviata con Successo! ✅"

Testo:
"Ottimo! Stiamo analizzando le informazioni che ci hai fornito. A breve ti contatteremo per proporti la soluzione migliore per te."

Sottotesto:
"Controlla la tua email (anche spam) per la conferma di ricezione."

Bottone: "Chiudi" (chiude modale e resetta form)

---

**TRUST BADGES sotto form:**

Layout: 3 icone inline centrate

1. **Icona:** ShieldCheckIcon
   "Dati protetti SSL"

2. **Icona:** ClockIcon
   "Risposta in 24h"

3. **Icona:** XMarkIcon
   "Nessun impegno"

---

### FOOTER

**Background:** Grigio scuro #32373c

**Layout:** 4 colonne desktop, 1 colonna mobile

**COLONNA 1 - BRAND:**

Logo Spassoso Safaris (`logo/logo.svg`)

Tagline:
"Il tuo safari autentico in Tanzania dal 2015"

Social Icons (bianco con hover verde):
- Facebook
- Instagram
- TripAdvisor
- WhatsApp

---

**COLONNA 2 - LINK UTILI:**

**Titolo:** "Esplora"

Links:
- Home
- Safari in Tanzania
- Chi Siamo
- Blog di Viaggio
- Testimonianze
- Contatti

---

**COLONNA 3 - SAFARI POPOLARI:**

**Titolo:** "I Nostri Safari"

Links:
- Safari 6 Giorni (questa landing)
- Safari 8 Giorni + Zanzibar
- Safari Luxury
- Safari Fotografico
- Safari Famiglia
- Safari Luna di Miele

---

**COLONNA 4 - CONTATTI:**

**Titolo:** "Parliamoci"

**Ufficio Italia:**
Tel: +39 XXX XXX XXXX
Email: info@spassososafaris.com

**Ufficio Tanzania:**
Tel: +255 XXX XXX XXX
WhatsApp: +255 XXX XXX XXX

Orari:
Lun-Ven: 9:00 - 18:00
Sab: 9:00 - 13:00

---

**COPYRIGHT BAR:**

Background: Nero #000000

Testo centrato (bianco):
"© 2025 Spassoso Safaris. Tutti i diritti riservati. | P.IVA: XXXXXXXXXXX | Privacy Policy | Cookie Policy | Termini e Condizioni"

---

## 🎬 ANIMAZIONI FRAMER MOTION

### Animazioni Globali

**Scroll Reveal (per tutte le sezioni):**
```
initial: { opacity: 0, y: 50 }
whileInView: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" }
viewport: { once: true, margin: "-100px" }
```

**Stagger Children (per liste e grid):**
```
parent: staggerChildren: 0.1
children: initial: { opacity: 0, y: 20 }
         animate: { opacity: 1, y: 0 }
```

### Animazioni Specifiche

**Hero Slideshow:**
- Fade transition tra immagini: 1.5s
- Ken Burns zoom: scale da 1 a 1.1 in 5s

**Cards Parchi (hover):**
```
whileHover: { scale: 1.05, transition: { duration: 0.3 } }
```

**Timeline Itinerario:**
- Linea connettore: draw on scroll (pathLength 0 to 1)
- Icone giorno: scale in quando visibili

**Bottoni CTA:**
```
whileHover: { scale: 1.05, boxShadow: "0 10px 30px rgba(39,174,96,0.3)" }
whileTap: { scale: 0.98 }
```

**Form Validation:**
- Shake animation per errori
- CheckCircle fade in per successo

**Galleria Lightbox:**
- Modal: scale from 0.8 to 1, opacity 0 to 1
- Image: fade in

---

## 🎯 OTTIMIZZAZIONI UX/UI

### Accessibilità (WCAG 2.1 AA)

- **Struttura Semantica:** header, nav, main, section, article, footer
- **Heading Hierarchy:** H1 → H2 → H3 in ordine logico
- **Alt Text:** Tutte le immagini con descrizioni meaningful
- **Focus States:** Visible outline su tutti gli elementi interattivi
- **Keyboard Navigation:** Tab order logico, skip links per screen reader
- **Color Contrast:** Minimo 4.5:1 per testi, 3:1 per UI elements
- **Aria Labels:** Per elementi complessi (slideshow, accordion, modal)

### Responsive Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Large Desktop:** 1440px+

### Performance

- **Lazy Loading:** Tutte le immagini sotto fold
- **Image Formats:** WebP con fallback JPG
- **Critical CSS:** Inline per above-the-fold
- **Minification:** HTML, CSS, JS
- **Preload:** Font e hero images

### Mobile Optimizations

- **Touch Targets:** Min 44x44px
- **Sticky CTA:** Bottone preventivo fisso in basso mobile
- **Hamburger Menu:** Slide-in animato
- **Form Mobile:** Input full-width, font-size min 16px (evita zoom iOS)
- **Swipe Gestures:** Galleria e testimonianze

---

## 📊 TRACKING & ANALYTICS

### Eventi da Tracciare

1. **Click CTA Preventivo** (tutte le istanze)
2. **Form Submit** (successo/errore)
3. **Scroll Depth** (25%, 50%, 75%, 100%)
4. **Time on Page**
5. **Click su Immagini Galleria**
6. **Expand FAQ**
7. **Click Social Media**
8. **Click Telefono/WhatsApp**

### Conversioni

- **Primary Goal:** Form preventivo completato
- **Secondary Goal:** Click WhatsApp/Telefono
- **Micro-conversions:** Scroll itinerario, expand FAQ

---

## 🔍 SEO ON-PAGE

### Meta Tags

**Title:**
"Safari Tanzania 6 Giorni | Tarangire Serengeti Ngorongoro | Spassoso Safaris"

**Meta Description:**
"Safari 6 giorni in Tanzania con guide locali esperte. Esplora Tarangire, Serengeti e Ngorongoro. Preventivo personalizzato gratuito. ✓ Piccoli gruppi ✓ Itinerario su misura"

**Meta Keywords:**
safari tanzania, safari 6 giorni, tarangire, serengeti, ngorongoro, safari africa, safari personalizzato, guida italiana tanzania

### Schema Markup

- **Type:** TravelAction, TouristAttraction, Service
- **Aggregate Rating:** Per testimonianze
- **Offer:** Per pacchetto safari
- **Organization:** Dati Spassoso Safaris

### Open Graph / Twitter Cards

- og:title, og:description, og:image (hero image)
- Twitter card con preview

---

## ✅ CHECKLIST TECNICA FINALE

- [ ] HTML5 semantico validato
- [ ] Responsive design testato su tutti i breakpoints
- [ ] Accessibilità WCAG 2.1 AA verificata
- [ ] Performance Lighthouse score >90
- [ ] Form validation funzionante (frontend + backend)
- [ ] Tutti i link funzionanti
- [ ] Immagini ottimizzate (<200KB ciascuna)
- [ ] Font caricati correttamente
- [ ] Animazioni smooth su tutti i browser
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS, Android)
- [ ] SEO meta tags implementati
- [ ] Analytics tracking configurato
- [ ] Cookie consent (se richiesto GDPR)
- [ ] Privacy policy linkata

---

## 📦 FILE NECESSARI NELLA CARTELLA IMAGES E LOGO

### Immagini Hero Slideshow (4 immagini disponibili)
- `images/hero-1.jpg` - Elefanti Tarangire
- `images/hero-2.jpg` - Leone al tramonto Serengeti
- `images/hero-3.jpg` - Leoni Serengeti
- `images/hero-4.jpg` - Jeep safari al tramonto

### Immagini Parchi (3 card - utilizzare le immagini disponibili)
- `images/tarangire.jpg` - Paesaggio con animali Tarangire
- `images/serengeti.jpg` - Leoni/paesaggio Serengeti
- `images/ngorongoro.jpg` - Safari/paesaggio generico

### Galleria (6 immagini - utilizziamo quelle disponibili)
- `images/gallery-1.jpg` - Elefanti Tarangire
- `images/gallery-2.jpg` - Leone tramonto
- `images/gallery-3.jpg` - Leoni Serengeti
- `images/gallery-4.jpg` - Jeep safari
- `images/gallery-5.jpg` - Paesaggio safari
- `images/gallery-6.jpg` - Animali safari

### Logo
- `logo/logo.svg` - Logo Spassoso Safaris (formato SVG disponibile)

### Background CTA Finale
- `images/cta-background.jpg` - Tramonto safari (usare una delle foto tramonto disponibili)

---

## 🚀 NOTE FINALI PER LO SVILUPPO

1. **Priorità Mobile-First:** Progettare da mobile e scalare verso desktop
2. **Progressive Enhancement:** Funzionalità base senza JS, enhancement con JS
3. **Graceful Degradation:** Fallback per browser vecchi
4. **Loading States:** Sempre mostrare feedback durante loading/submit
5. **Error Handling:** Messaggi chiari per errori form/network
6. **Smooth Scroll:** Animato per anchor links interni
7. **Lazy Load Images:** Solo quando entrano nel viewport
8. **Prefetch:** Link e risorse critiche
9. **Service Worker:** Considerare per offline experience (opzionale)
10. **Testing:** Testare su dispositivi reali, non solo emulatori

---

**FINE DOCUMENTAZIONE**

Questo documento contiene tutti i testi, struttura e specifiche tecniche necessarie per sviluppare la landing page completa di Spassoso Safaris ottimizzata per la conversione.
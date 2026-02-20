# Istruzioni per caricare il progetto su GitHub

## Problema
Git richiede Xcode Command Line Tools che non sono disponibili nell'ambiente corrente.

## Soluzione

### Passo 1: Installa Xcode Command Line Tools
Apri il Terminale e esegui:
```bash
xcode-select --install
```
Segui le istruzioni per completare l'installazione.

### Passo 2: Configura Git (se non già fatto)
```bash
git config --global user.name "Il Tuo Nome"
git config --global user.email "tua.email@example.com"
```

### Passo 3: Carica il progetto su GitHub

Opzione A - Usa lo script automatico:
```bash
cd "/Users/elisafoderaro/Desktop/Landing - spassoso safaris"
bash deploy-to-github.sh
```

Opzione B - Esegui i comandi manualmente:
```bash
cd "/Users/elisafoderaro/Desktop/Landing - spassoso safaris"

# Inizializza il repository Git
git init

# Aggiungi tutti i file
git add .

# Crea il commit iniziale
git commit -m "Initial commit: Spassoso Safaris landing page"

# Rinomina il branch principale in 'main'
git branch -M main

# Aggiungi il remote repository
git remote add origin https://github.com/AngieAli25/Spassoso-Safaris.git

# Push sul repository GitHub
git push -u origin main
```

### Nota importante
Se il repository GitHub è vuoto e richiede autenticazione, potresti dover:
1. Usare un Personal Access Token invece della password
2. Configurare SSH keys per GitHub

Per creare un Personal Access Token:
1. Vai su GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuovo token con permessi `repo`
3. Usa il token come password quando Git lo richiede

## Verifica
Dopo il push, verifica che i file siano stati caricati visitando:
https://github.com/AngieAli25/Spassoso-Safaris

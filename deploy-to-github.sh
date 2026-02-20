#!/bin/bash

# Script per caricare il progetto su GitHub
# Eseguire questo script dalla cartella del progetto

echo "🚀 Inizializzazione repository Git..."

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
echo "📤 Caricamento su GitHub..."
git push -u origin main

echo "✅ Progetto caricato con successo su GitHub!"

# Løbeklub - Programmering med Klasser og Objekter

I denne opgave skal du programmere klasser og objekter for en løbeklub.  Løbeklubben har medlemmer, fælles løbeture og registreringer af deltagelse ved de fælles løbeture. 

---

## 1. Klasse: `Medlem`
Definer en klasse til at repræsentere medlemmer af løbeklubben.

### **Egenskaber:**
- `id` (int): Medlemsnummer.
- `navn` (str): Medlemmets navn.
- `email` (str): Medlemmets emailadresse.
- `alder` (int): Medlemmets alder.
- `aktiv` (bool): `True` for aktive medlemmer, ellers `False`.

### **Metoder:**
- `erAktiv()`: Returnerer `True`, hvis medlemmet er aktivt, ellers `False`.

### **Opgave:**
1. Opret to medlemmer:
   - Ét aktivt (`aktiv = True`).
   - Ét inaktivt (`aktiv = False`).
2. Log medlemmerne i konsollen for at kontrollere, at de er oprettet korrekt.

---

## 2. Klasse: `FællesTure`
Denne klasse repræsenterer klubbens fælles løbeture.

### **Egenskaber:**
- `id` (int): Unikt nummer for løbeturen.
- `dato` (str): Dato for løbeturen, fx `"01-12-2024"`.
- `distance` (int): Distance i et tal
- `beskrivelse` (str): Kort beskrivelse af løbeturen.

### **Metoder:**
- `visDetaljer()`: Printer løbeturens detaljer til konsollen.

### **Opgave:**
1. Opret en eller to løbeture med passende data.
2. Brug `visDetaljer()`-metoden til at logge detaljer om løbeturene i konsollen.

---

## 3. Klasse: `Deltagelse`
Registrerer et medlems deltagelse i en løbetur.

### **Egenskaber:**
- `medlem` (`Medlem`): Et medlem-objekt.
- `løbetur` (`FællesTure`): Et fællesløbetur-objekt.
- `tid` (float): Medlemmets registrerede tid.

### **Metoder:**
- `erGodkendt()`: Returnerer `True`, hvis medlemmet er aktivt. Ellers returnerer `False` og logger en besked i konsollen.

### **Opgave:**
1. Opret to deltagelser:
   - Ét med et aktivt medlem.
   - Ét med et inaktivt medlem.
2. Test metoden `erGodkendt()` og se, om deltagelserne bliver godkendt.

---

## 4. Klasse: `Løbeklub`
Denne klasse repræsenterer hele løbeklubben.

### **Egenskaber:**
- `medlemmer` (liste): Liste over medlemmer.
- `løbeture` (liste): Liste over fælles løbeture.
- `deltagelser` (liste): Liste over registrerede deltagelser.

### **Metoder:**
- `tilføjMedlem(medlem)`: Tilføjer et medlem til listen.
- `tilføjLøbetur(løbetur)`: Tilføjer en løbetur til listen.
- `registrerDeltagelse(deltagelse)`: 
  - Tilføjer deltagelsen til listen, hvis den er godkendt.
  - Logger en besked, hvis deltagelsen ikke er godkendt.

### **Opgave:**
1. Opret en klub.
2. Tilføj de to medlemmer og løbeturen til klubben.
3. Brug `registrerDeltagelse()`-metoden til at registrere deltagelserne:
   - Den ene bliver afvist (inaktivt medlem).
   - Den anden bliver godkendt (aktivt medlem).
4. Log klubbens data for at kontrollere resultatet.

---


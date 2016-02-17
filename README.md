# ga-gtm-workshop

## Installasjon:
Last ned koden i dette repoet, enten med git clone eller som zip-arkiv.


For å få websiden til å fungere trenger vi en lokal server (localhost) kjørende. Det kan gjøres på to måter:

**1: Shell-script (krever Mac OS X)**

Kjør scriptet server.sh i terminalen. 


**2: Installer node og grunt**

Last ned og installer node hvis du ikke har det fra før av. (https://nodejs.org/en/download/)
Installer grunt-cli (http://gruntjs.com/getting-started).
Naviger deg til workshopmappen og installer node_modules.
Kjør `grunt` i terminalvinduet. 

Websiden skal nå være tilgjengelig på http://localhost:8000/.



## Oppgavene

Temaene for oppgavene i dag går på basisfunksjonalitet i Google Analytics. Det er ikke et mål i seg selv å bli eksperter på GUIet til Analytics eller Tag Manager, jeg tenker at det i seg selv er en helt egen, separat workshop. Målet er å sette opp tracking, for så å filosofere rundt hvordan dette kan hjelpe deg å forstå brukerne dine bedre.


### Oppgave #1: Setup
1. Lag deg en konto hos Google Analytics (https://support.google.com/analytics/answer/1008015?hl=en). 
2. Sett opp en property (https://support.google.com/analytics/answer/1042508). Du trenger ikke gjøre noe med HTML-snutten du får generert. 
3. Lag deg en konto hos Google Tag Manager, lag deretter en container. (https://support.google.com/tagmanager/answer/6103696?hl=en&ref_topic=3441530). 
4. Legg HTML-koden du får generert helt i starten av <body>-taggen i index.html og register.html i website-mappen. 
5. Lag en tag som tracker page hits på alle sider. Publiser denne.
6. Besøk Google Analytics. Under fanen Reporting > Real time -> Overview skal du få opp 1 besøkende.


**Tips:**
Det kan være lurt å legge tracking IDen til Analytics i en konstant i Tag manager. Da slipper man å slå opp IDen hver eneste gang man lager en ny tag. (http://www.bloggerchica.com/using-a-gtm-constant-string-variable-for-ga-property-id/)

**Tips** 
Man kan velge Preview mode når man publiserer tags i Google Tag Manager. Dette er nyttig for å se hvilke tags som faktisk trigges.



### Oppgave #2: Events
https://support.google.com/analytics/answer/6164470?hl=en

Page loads trackes automatisk, som vi så i den første oppgaven. Men hva annet har vi lyst til å tracke? Hvilke brukerinteraksjoner hadde det vært interessant å se nærmere på? Diskuter hva som er interessant å se på før dere setter opp eventene.

**Tips:**
Det er lurt å prefikse IDer og klassenavn som skal brukes som selectorer i Tag manager med gtm-. På den måten er det tydelig hva IDens/klassens hensikt er i etterkant. 

**Bonusoppgave:**
Kan man trigge pageviews i Javascript? F.eks. på route changes i Angular?


### Oppgave #3: Goals 
https://support.google.com/analytics/answer/1032415?hl=en

Hva er hovedformålet til nettsiden? Man kan sette opp goals i Google Analytics for å markere ønsket oppførsel fra brukerne i datasettet. Hvilke brukerinteraksjoner på websiden vår ønsker vi å fremheve på den måten? Sett opp et goal som trigges på formålet dere kommer frem til.

**Tips:**
Goals kan bare innfris en gang per brukersesjon. For å tvinge gjennom en ny sesjon kan man åpne et inkognito-vindu.

**Tips** 
Goals kan aldri slettes, men de kan deaktiveres. Man har en limit på 20 goals per view.







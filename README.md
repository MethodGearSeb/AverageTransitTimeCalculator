# Matka-aikojen keskiarvon ja keskihajonnan laskin

Paikallisesti toimiva Vite + React -sovellus. Sovelluksessa voi hallinoida listaa kohteista. Kun sovellukseen syöttää lähtösijainnin, laskee se napin painalluksella HSL:n julkisilla kulkuneuvoilla kuluvan matka-ajan kuhunkin kohteeseen. Lisäksi se laskee kaikkien matka-aikojen keskiarvon ja keskihajonnan.

## Tarve sovellukselle

Sovellusta tehdessäni muutto oli minulle ajankohtainen huolenaihe. Harkitessani minne muuttaa, yksi tärkeä tekijä oli nopeat kulkuyhteydet kohteisiin, joissa käyn kohtalaisen säännöllisesti. Kaupunginosien yhteyksien helppoa vertailua varten oli syytä tiivistää matka-ajat mahdollisimman pieneen muuttujamäärään, joten päädyin valitsemaan keinoksi keskiarvon ja keskihajonnan.

Matka-aikojen kirjaaminen harkitusta kaupunginosasta kuhunkin kohteeseen käyttämällä HSL:n Reittiopasta käsin veisi pitkän ajan, varsinkin kun harkitsee montaa kaupunginosaa useammassa PK-seudun kaupungissa. Tästä syystä lähdin toteuttamaan koneellista ratkaisua, tuloksena ollen tämä sovellus.

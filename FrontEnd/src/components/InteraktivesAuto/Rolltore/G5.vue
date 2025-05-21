<template>
  <div class="full-img">
    <img src="images/Rolltore/G5/Geräteraum_G5.png" />
  </div>

  <div class="liste">
    <ul v-for="(item, index) in items" :key="index">
      <li>
        <div
          :class="{ isActive: item.visibility }"
          @click="toggleVisibility(index)"
        >
          ° {{ item.name }}
        </div>

        <div v-if="item.visibility" class="item">
          <img :src="item.picture" :alt="item.source"/>
        </div>
        <div v-if="item.visibility" class="beschreibung">
          <div class="text">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "../../../styles/rolltor.css";
export default {
  name: "G1",
  data() {
    return {
      items: [
        {
          name: "2x B-Druckschlauch",
          description: "Durchmesser 75mm; Länge 20m; Förderleistung bei 8-10 bar bis zu 800 Liter Wasser pro Minute: B-Druckschläuche eignen sich ideal für eine Wasserversorgung über lange Wegstrecken, sowie zur Brandbekämpfung bei Großbränden. Die Wasserversorgung zum Löschfahrzeug und vom Löschfahrzeug zum Verteiler wird ebenfalls durch B-Druckschläuche garantiert.",
          visibility: false,
          picture: "images/Rolltore/G5/B_Druckschlauch.jpg", /*noch abändern*/
          source: "https://www.feuerwehrspezialist.de/shop/Feuerl%C3%B6schschlauch-B-75-naturwei%C3%9F-DIN-14811-p157388064",
        },
        {
          name: "6x C-Druckschlauch",
          description: "Durchmesser 42mm oder 52mm; Länge 15m; Förderleistung bei 8-10 bar bis zu 400 Liter Wasser pro Minute: C-Druckschläuche finden Hauptnutzen in der Brandbekämpfung, durch Größe und Gewicht ideal im Innenangriff. C-Druckschläuche auch im Schlauchtragekorb, bzw. geschnecktem Schlauchpaket verladen",
          visibility: false,
          picture: "images/Rolltore/G5/C_Druckschlauch.jpg",
          source: "https://asup.info/Feuerwehrschlauch-C-52-mit-Kupplungen-20-m-lang/5551",
        },
        {
          name: "2x Feuerwehraxt",
          description: "Die Feuerwehraxt ist als Allrounder u.a. vom Innenangriff nicht wegzudenken. Neben der offensichtlichen Funktion als Axt, kann man sie ebenfalls zur Personensuche benutzen. Hierbei hält der Feuerwehrmann die Axt am Kopf und benutzt den Stiehl als verlängerten Arm, um bei der Personensuche einen größeren Bereich abdecken zu können.",
          visibility: false,
          picture: "images/Rolltore/G5/Feuerwehraxt.jpg",
          source: "https://www.rescue-tec.de/techn.-ausruestung/werkzeuge/brechwerkzeuge/feuerwehraxt-din-14900-fa",
        },
        {
          name: "Geschnecktes Schlauchpaket",
          description: "Das geschneckte Schlauchpaket ist ein wichtiger Bestandteil für die Brandbekämpfung. Das Schlauchpaket besteht aus zwei C-Druckschläuchen einem Sperrventil, sowie einem C-Hohlstrahlrohr. Das Schlauchpaket kann im Innengriff aufrecht gegen eine Wand gestellt werden. Sobald Wasser auf den Schlauch kommt, richtet es sich auf und verteilt sich direkt in Buchten. Dadurch ist ein sauberes Schlauchmanagement garantiert. Das Sperrventil ermöglicht das Hinzufügen von neuen Druckschläuchen, ohne dass die gesamte Schlauchleitung von der Wasserversorgung getrennt werden muss.",
          visibility: false,
          picture: "images/Rolltore/G5/Schlauchpaket.jpg",
          source: "https://www.rescue-tec.de/techn.-ausruestung/brandbekaempfung/loeschtechnik/zubehoer/rescue-tec-klettband-fuer-schlauchpaket-3er-pack",
        },
        {
          name: "Rauchvorhang",
          description: "Der Rauchvorhang wird nach Absprache mit dem Gruppenführer durch den Angriffstrupp an der Rauchgrenze befestigt, um Bereiche außerhalb des Brandraums Rauchfrei zu halten. Dadurch wird die Kontamination des Gebäudes begrenzt und der Fluchtweg für Zivilpersonen und Einheiten ohne Atemschutz sichergestellt.",
          visibility: false,
          picture: "images/Rolltore/G5/Rauchvorhang.jpg",
          source: "https://www.rescue-tec.de/techn.-ausruestung/brandbekaempfung/mobiler-rauchverschluss/mobiler-rauchverschluss-rss-s80-140-fuer-die-selbsthilfe-mit-tasche",
        },
        {
          name: "2x Schlauchtragekorb, jeweils 3x C-Druckschlauch",
          description: "Der Schlauchtragekorb umfasst mit drei gekuppelten C-Schläuchen eine gesamte Schlauchlänge von 45m. Die Benutzung des Tragekorbs kann je nach Technik variieren. Grundsätzlich ermöglicht der Tragekorb einen schnellen Transport von C-Druckschläuchen. 7-2-Go als Bsp.",
          visibility: false,
          picture: "images/Rolltore/G5/Schlauchtragekorb.jpeg",
          source: "https://shop.murer-feuerschutz.de/schlauchtragekorb-c-mit-auslaufsicherung-und-gurtset-131099",
        },
        {
          name: "Rettungstuch",
          description: "Das Rettungstuch ermöglicht die Rettung von Personen, die nicht mehr in der Lage sind, selbstständig zu laufen. Dabei wird oft die Technik „Rettungswindel“ verwendet, bei der die zu rettende Person in eine Art Windel eingepackt wird.",
          visibility: false,
          picture: "images/Rolltore/G5/Rettungstuch.jpg",
          source: "https://www.rescue-tec.de/sanitaetsausruestung/transport-immobilisation/pax-tragetuch-mit-durchrutschsicherung-l-pax-plan-farbe-rot-mit-8-tragegriffen",
        },
        {
          name: "Elektrolüfter",
          description: "Der Elektrolüfter dient i.d.R. dazu, nach einem Brandeinsatz unter Absprache mit dem Gruppenführer das Brandobjekt zu belüften, sodass der übrige Brandrauch aus dem Gebäude abziehen kann. Dafür ist es essenziell eine Abluftöffnung im Gebäude zu schaffen. Der Elektrolüfter ist bedingt höhenverstellbar und durch seine Räder leicht zu transportieren.",
          visibility: false,
          picture: "images/Rolltore/G5/Elektrolüfter.png",
          source: "https://www.leader-group.company/de/feuerwehrausruestung/hochleistungsluefter/hochleistungsluefter-mit-elektromotor/hochleistungsluefter-mit-elektromotor-neo-esv230",
        },
        {
          name: "Kopfteil Steckleiter",
          description: "",
          visibility: false,
          picture: "",
          source: "",
        },
        {
          name: "Winkelschleifer",
          description: "",
          visibility: false,
          picture: "",
          source: "",
        },
        {
          name: "",
          description: "",
          visibility: false,
          picture: "",
          source: "",
        },
      ],
    };
  },
  methods: {
    toggleVisibility(index) {
      this.items.forEach((item, i) => {
        if (i !== index) {
          item.visibility = false;
        }
      });
      this.items[index].visibility = !this.items[index].visibility;
    },
  },
};
</script>

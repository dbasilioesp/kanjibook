<template>
  <div class="kanji-book">
    <KanjiCard
      v-for="(info, index) in kanjis"
      :info="info"
      :key="index"
      :words="getWords(info.Kanji)"
    />
  </div>
</template>

<script>
import Papa from "papaparse";
import book from "../store/book.json";
import kanjisCSV from "../store/kanjis.csv";
import wordsCSV from "../store/words.csv";
import KanjiCard from "../components/KanjiCard";

console.log(kanjisCSV)

let kanjis = Papa.parse(kanjisCSV, { header: true });
let words = Papa.parse(wordsCSV, { header: true });
console.log(words);
export default {
  name: "KanjiBook",
  data: function() {
    return {
      kanjis: kanjis.data,
      words: words.data
    };
  },
  components: {
    KanjiCard
  },
  methods: {
    getWords: function(kanji) {
      let arr = [];
      this.words.forEach(word => {
        if (word.Kanjis == kanji) {
          arr.push(word);
        }
      });
      return arr;
    }
  }
};
</script>

<style lang="scss" scoped>
.kanji-book {
  margin: 3vmax;
}
</style>
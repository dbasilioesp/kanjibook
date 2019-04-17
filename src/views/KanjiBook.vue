<template>
  <div class="kanji-book">
    <h1 class="kanji-book__title title-size-1">Kanjibook</h1>
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

let kanjis = Papa.parse(kanjisCSV, { header: true });
let words = Papa.parse(wordsCSV, { header: true });

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

  &__title {
    margin: auto;
    text-align: center;
  }
}
</style>
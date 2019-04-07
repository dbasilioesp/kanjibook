<template>
  <div class="kanji-card">
    <div class="kanji-card__header">
      <div class="kanji-card__kanji">{{ info.Kanji }}</div>
      <div class="kanji-card__tips">
        <div class="kanji-card__speech">{{ info.Kana }} - {{ info.Romanji }}</div>
        <div class="kanji-card__sign">{{ info['Traduções'] }}</div>
      </div>
    </div>
    <ul class="kanji-card__words">
      <li class="kanji-card__word" v-for="(word, index) in words" :key="index">
        <span>{{word.Name}}</span> -
        <span>{{word['Traduções']}}</span> -
        <span class="kanji-card__word__reading">{{word.Kana}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KanjiCard",
  props: {
    info: Object,
    words: Array
  }
};
</script>

<style lang="scss" scoped>
.kanji-list {
  margin: 3vmax;
}

.kanji-card {
  margin-bottom: 30px;
  max-width: 500px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: lightyellow;
    border: 1px solid lightblue;
    padding: 10px 25px;
  }

  &__kanji {
    margin-right: 0px;
    font-size: calc(20px + 2vw);
    line-height: 1.3;
  }

  &__words {
    background: lightblue;
    padding: 25px 25px 15px;
    list-style: none;
    margin-top: 0;
  }

  &__word {
    margin-bottom: 8px;
    font-size: calc(10px + 1vw);

    &__reading {
      font-size: calc(6px + 1vw);
    }
  }
}
</style>


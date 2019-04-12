<template>
  <div class="story-container">
    <h1 class="color-primary">Inputs</h1>

    <h2>
      <b>Text</b>
    </h2>
    <div class="story-bookcase">
      <input
        class="input-text"
        name="example-1"
        type="text"
        placeholder="Exemplo de caixa de entrada"
      >
      <input
        class="input-text input-text--focus"
        name="example-2"
        type="text"
        value="Texto preenchido"
        placeholder="Exemplo de caixa de entrada"
      >
      <div class="form-input form-input--error">
        <input
          class="input-text input-text--with-error"
          name="example-2"
          type="text"
          value="Texto preenchido"
          placeholder="Exemplo de caixa de entrada"
        >
        <span class="error-message">Error Message</span>
      </div>
    </div>

    <h2>
      <b>Full Width</b>
    </h2>
    <div class="form-full-width">
      <div class="form-input">
        <input
          class="input-text"
          name="example-3"
          type="text"
          placeholder="Exemplo de caixa de entrada"
        >
      </div>
      <div class="form-input">
        <input
          class="input-text"
          name="example-4"
          type="text"
          placeholder="Exemplo de caixa de entrada"
        >
      </div>
    </div>
    <h2>
      <b>Columns Full Width</b>
    </h2>
    <div class="form-full-width form-columns">
      <div class="form-input">
        <input
          class="input-text"
          name="example-3"
          type="text"
          placeholder="Exemplo de caixa de entrada"
        >
      </div>
      <div class="form-input">
        <input
          class="input-text"
          name="example-4"
          type="text"
          placeholder="Exemplo de caixa de entrada"
        >
      </div>
    </div>
  </div>
</template>

<template>
  <div class="home">
    <div class="messages">
      <p v-for="(message, index) in messages" :key="`message=key-${index}`">{{ message.message }}</p>
    </div>
    <div class="controls">
      <vs-input class="input" v-model="value" placeholder="Message" />
      <vs-button class="button" gradient>Send</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      messages: [
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz"},
        {message: "azazazaaz1"},
      ],
    };
  },
  methods: {
    sendHandler() {
      console.log("Send!");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;

  .messages {
    height: 100%;
  }

  .controls {
    display: flex;

    .input {
      flex: 5;
    }

    .button {
      flex: 1;
    }
  }
}
</style>
<style lang="scss">
.vs-input {
  width: 100% !important;
}
</style>

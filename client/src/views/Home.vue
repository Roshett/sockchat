<template>
  <div class="home">
    <div class="messages">
      <p v-for="(message, index) in messages" :key="`message=key-${index}`">
        {{ message.message }}
      </p>
    </div>
    <div class="controls">
      <vs-input class="input" v-model="message" placeholder="Message" />
      <vs-button class="button" gradient @click="sendHandler">Send</vs-button>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "Home",
  data() {
    return {
      messages: [],
      message: "",
      socket: null,
    };
  },

  created() {
    this.socket = io("http://localhost:3000/");

    this.socket.on("hi", (msg) => {
      this.openNotification()
    });

    this.socket.on("sendMessage", (data) => {
      this.messages = data
    });
  },

  methods: {
    sendHandler() {
      this.socket.emit('send', this.message);
      this.message = '';
    },

    openNotification() {
      this.$vs.notification({
        position: "top-center",
        title: `Какой то уебан зашел в чат`,
        text: `Вроде четко в хату зашел, норм пацан`,
      });
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

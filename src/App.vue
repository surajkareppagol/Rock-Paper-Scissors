<template>
  <h1 class="heading">Rock Paper Scissor</h1>

  <div class="container">
    <div class="mainContainer">
      <div class="slotContainer">
        <sign-card :sign="randomSign" size="14" />
        <sign-card :sign="selectedSign" size="14" />
      </div>

      <p class="displayText">Choose the slot to start the game</p>
    </div>

    <div class="choiceContainer">
      <sign-card sign="✊" size="4" @click="setSign('rock')" />
      <sign-card sign="✋" size="4" @click="setSign('paper')" />
      <sign-card sign="✌️" size="4" @click="setSign('scissor')" />

      <hr class="choiceContainerHr" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSign: "✊",
      randomSign: "✊",
    };
  },
  methods: {
    setSign(sign) {
      if (sign === "rock") this.selectedSign = "✊";
      else if (sign === "paper") this.selectedSign = "✋";
      else if (sign === "scissor") this.selectedSign = "✌️";

      this.setComputedSign();
    },
    setComputedSign() {
      const randomData = Math.floor(Math.random() * (3 - 1 + 1) + 1);

      this.randomSign =
        randomData === 1 ? "✊" : randomData === 2 ? "✋" : "✌️";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background-image: linear-gradient(#099773, #43b692);
  height: 100vh;

  font-family: "Pixelify Sans", cursive;

  user-select: none;
}

.heading {
  color: #f5ebe0;

  font-size: 8rem;
  text-align: center;
  font-weight: 400;

  text-decoration: underline;

  margin-bottom: 2rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.mainContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  flex-direction: column;
}

.slotContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rem;
}

.displayText {
  background-color: #f5ebe0;
  font-size: 2.8rem;
  padding: 1.2rem 2rem;
  border-radius: 99px;

  text-transform: capitalize;
}

.choiceContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  flex-direction: column;

  position: relative;
}

.choiceContainerHr {
  width: 100%;
  transform: rotate(90deg) scaleX(3);

  position: absolute;
  top: 50%;
  right: 120%;

  border: 4px solid #f5ebe0;
  border-style: dashed;
}
</style>

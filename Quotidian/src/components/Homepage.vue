<template>
  <div class="collection">
    <section class="firstsection">
      <div class="box-main">
        <div class="firstHalf">
          <h1 class="text-big" id="web">Tasks List</h1>
          <section class="task-list">
            <div id="tasks">
              <div class="task">
                <div class="content">
                  <input
                    type="text"
                    class="text"
                    value="My shiny task"
                    readonly
                  />
                </div>
                <div class="actions">
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="secondsection">
      <div class="box-main">
        <div class="firstHalf">
          <h1 class="text-big" id="program">Avatar</h1>
          <p class="text-small">AVATAR</p>
        </div>
      </div>
    </section>
  </div>
</template>

 <style>
/* Settting color scheme */
:root {
  --dark: #374151;
  --darker: #1f2937;
  --darkest: #111827;
  --gray: #6b7280;
  --light: #eee;
  --pink: #ec4a99;
  --purple: #8b5cf6;
}

.background {
  background: black;
  background-blend-mode: darken;
  background-size: cover;
}

.firstsection {
  background-color: blueviolet;
  height: 400px;
}

.secondsection {
  background-color: dimgrey;
  height: 400px;
}

.box-main {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  max-width: 80%;
  margin: auto;
  height: 80%;
}

.box-sub {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  max-width: 40%;
  margin: auto;
  height: 40%;
}

.firsthalf {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.secondhalf {
  width: 30%;
}

.text-big {
  font-family: "Piazzolla", serif;
  font-weight: bold;
  font-size: 35px;
}

.text-small {
  font-size: 18px;
}

.section {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  margin: auto;
}

.section-Left {
  flex-direction: row-reverse;
}

.paras {
  padding: 0px 65px;
}

.center {
  text-align: center;
}
</style>
<template>
  <div class="collection">
    <section class="firstsection">
      <div class="box-main">
        <div class="firstHalf">
          <h1 class="text-big" id="web">Tasks List</h1>
          <section class="task-list">
            <div id="tasks">




              <!-- Insert Here -->





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

*{
  box-sizing: border-box;
  margin: 0;
  font-family: 'Fira sans', sans-serif;
}

body{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--dark);
  color: #FFF;
}

header{
  padding: 2rem 1rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

header h1{
  font-style: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--gray);
}


main{
  flex: 1 1 0%;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.task-list{
  padding: 1rem;
}

.task-list h2{
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--gray);
}

#tasks .task{
  display: flex;
  justify-content: space-between;
  background-color: var(--darkest);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

#tasks .content{
  flex: 1 1 0%;
}

#tasks .task .content .text{
  color: var(--light);
  font-size: 1.125rem;
  width: 100%;
  display: block;
  transition: 0.4s;
}

#tasks .task .content .text:not(:read-only){
  color: var(--pink);
}

#tasks .task .actions{
  display: flex;
  margin: 0 -0.5rem;
}

.task .actions button{
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.4s;
}

.task .actions button:hover{
  opacity: 0.8;
}

.task .actions button:active{
  opacity: 0.6;
}

.task .actions .complete{
  background-image: linear-gradient(to right, var(--pink), var(--purple));
  
  -webkit-text-fill-color: transparent;
}


</style>

<template>
  <div class="collection">
    <section class="firstsection">
      <div class="box-main">
        <div class="firstHalf">
          <h1 class="text-big" id="web">Tasks List</h1>
          <section class="task-list">
            <div id="tasks">
             <!-- <div class="task">
                <div class="content">
                  <input
                    type="text"
                    class="text"
                    value="My shiny task"
                    readonly
                  />
                </div>
                <div class="actions">
                  <button class="complete">Complete</button>
                </div>
              </div> -->
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

<script>
  import db from './firebaseInit'
  import firebase from "firebase";
    //var db = firebase.firestore();
  export default {
    name: 'home',
    data () {
      return {
        tasks: [],
        loading: true
      }
    },
     created () {
     //   var db = firebase.firestore();
      var auth = firebase.auth();
      var userID = auth.currentUser.uid;
      db.collection(userID).get().then((querySnapshot) => {
        this.loading = false
        //console.log("data exists")
        querySnapshot.forEach((doc) => {
          const data = {
            'name': doc.data().name,
            'details': doc.data().details,
           //'employee_id': doc.data().employee_id,
            'start': doc.data().start,
            'end': doc.data().end,
            //'dept': doc.data().dept,
            //'position': doc.data().position
          }
          this.tasks.push(data)
        })
      })
    }
  }

window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");


// Action buttons start here
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
    
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("complete");
    task_edit_el.innerHTML= "Complete";

    task_actions_el.appendChild(task_complete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

//Configuring the clickable buttons
    task_complete_el.addEventListener("click", () =>{
      list_el.removeChild(task_el);
    });
  });

</script>

 <style scoped>
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

h1 {text-align: center;}

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

.task-list{
  padding: 1rem;
}

#tasks .task{
  display: flex;
  justify-content: space-between;
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
   color: var(--darkest);
}
</style>


<template>
  <div class="collection">
    <section class="firstsection">
      <div class="box-main">
        <div class="firstHalf">
        <h1 class="text-big" id="web"> <u class = "underline">Tasks</u></h1>
        <section class="task-list">
            <div id="tasks">
              <div v-for="user in tasks" v-bind:key="user.id" class="collection-item">
              <div class="chip">{{user.name}}</div>
              <div class = "date"> Start Date: {{user.start}} End Date: {{user.end}} </div>
              <div class = "description"> Description: {{user.details}} </div>
             <button class="action" type="button">Complete </button> 
              <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { details: user.details }}"></router-link>
              <!-- <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { details: user.details }}"><i class="fa fa-eye"></i></router-link>-->
            </div>
          <!--<h1 class="text-big" id="web">Tasks List</h1>
          <section class="task-list">
            <div id="tasks">
              \\ <div class="task">
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

    <!-- <section class="secondsection">
      <div class="box-main">
        <div class="firstHalf">
          <h1 class="text-big" id="program">Avatar</h1>
          <p class="text-small">AVATAR</p>
        </div>
      </div>
    </section> -->

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

/*window.addEventListener("load", () => {
  const list_el = document.querySelector("#tasks");

// Action buttons start here
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
    
    const task_complete_el = document.createElement("button");
    task_complete_el.classList.add("complete");
    task_complete_el.innerHTML= "Complete";

    task_actions_el.appendChild(task_complete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

//Configuring the clickable buttons
    task_complete_el.addEventListener("click", () =>{
      list_el.removeChild(task_el);
    });
  });
  */

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
  background-color: #3d5afe!important;
  min-height: 800px;
  height: auto;
}



.border{
 border-style:solid;
 border-color: white
}


.description{
  width: 400px;
  word-wrap: break-word;
}

.secondsection {
  background-color: #b388ff!important;
  height: 400px;
}


.box-main {
  display: flex;
  justify-content: center;
  align-items: center;
  color:white ;
  max-width: 80%;
  margin: auto;
  padding: 2rem;
  height: auto;
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

.paras {
  padding: 0px 65px;
}

.center {
  text-align: center;
}

.collection-item {
    background-color:#b388ff!important;
    justify-content: space-between;
    line-height: 1.5rem;
    padding: 10px 70px 40px;
    margin: 0;
    border-bottom: 1px solid black;
    border-radius: 25px;
    margin-bottom: 1rem;
}

.chip {
    height: 32px;
    font-size: 15px;
    font-weight: 600;
    color: #3d5afe!important;
    line-height: 32px;
    padding: 0 12px;
    border-radius: 16px;
    background-color: white;
    margin-bottom: 5px;
    margin-right: 5px;
    
}

.secondary-content {
  color: blue;
}

*{
  box-sizing: border-box;
  margin: 0;
  font-family: 'Fira sans', sans-serif;
}

.task-list{
  padding: 1rem;
}


#tasks .task .actions{
  display: flex;
  margin: 0 -0.5rem;
}

button.action{
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;
  border-radius: 15px;
  padding: 0px 10px;
  overflow: hidden;
  background-color: #ffa000!important;
  outline: none;
  float: right;
  transition: 0.4s;
}

button.action:hover{
  opacity: 0.7;
}
button.action:active{
  opacity: 0.6;
  
}

</style>

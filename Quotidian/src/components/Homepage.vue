<template>
    <div>
    <nav class="navbar-background">
        <div class="rightNav">
            <button class="btn btn-sm">Menu</button>
        </div>
    </nav>
 
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
                          >
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
    <script src="homepage.js"></script>
 
    <section class="secondsection">
        <div class="box-main">
            <div class="firstHalf">
                <h1 class="text-big" id="program">
                    Avatar
                </h1>
                <p class="text-small">
                    AVATAR
                </p>
            </div>
        </div>
    </section> 
 </template>
 
 <style>
     /* Settting color scheme */
:root{
    --dark: #374151;
    --darker: #1F2937;
    --darkest: #111827;
    --gray: #6B7280;
    --light: #EEE;
    --pink: #EC4A99;
    --purple: #8B5CF6;
  }
     
* {
    margin: 0;
    padding: 0;
}
 
.background {
    background: black;
    background-blend-mode: darken;
    background-size: cover;
}
 
.firstsection {
    background-color:blueviolet ;
    height: 400px;
}
 
.secondsection {
    background-color:dimgrey;
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
    font-family: 'Piazzolla', serif;
    font-weight: bold;
    font-size: 35px;
}
 
.text-small {
    font-size: 18px;
}
 
.btn {
    padding: 8px 20px;
    margin: 7px 0;
    border: 2px solid white;
    border-radius: 8px;
    background: none;
    color: white;
    cursor: pointer;
}
 
.btn-sm {
    padding: 6px 10px;
    vertical-align: middle;
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
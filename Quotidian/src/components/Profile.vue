<template>
    <div class="Fullpage">
        <div class="profilename"><p>MadTed</p></div>
        <div class="pfp"><img class="myPic" v-bind:src="ProfilePic"></div>
        <div class="desp">{{ adesp }}</div>
    </div>
</template>

<style scoped>
.Fullpage{
    background-color: rgb(0, 0, 196);
    border: black 3px solid;
}
.profilename{
    position: relative;
    left: 300px;
    width: 300px;
    height: 50px;
    font-size: 200%;
    margin: 10px;
    /*border: blue 3px solid;*/
    background-color: white;
}
.pfp{
    position: relative;
    left: 400px;
    width: 300px;
    height: 300px;
    /*border: red 3px solid;*/
    background-color: grey;
}
.desp{
    position: relative;
    left: 300px;
    width: 500px;
    height: 300px;
    margin: 10px;
    /*border: green 3px solid;*/
    background-color: grey;
}
.myPic{
    max-height: 100%;
	max-width: 100%;
}
</style>

<script>
import image from './qPics/Madmaw.png';

export default{
    name: "profile",

    data() {
        return{
            ProfilePic: image,
            adesp: "Hello my name is Ted. I am always very very mad."
        }
    }
};
</script>

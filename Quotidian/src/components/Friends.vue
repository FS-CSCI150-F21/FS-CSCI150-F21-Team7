<template>
  <div id="friendsList" class="friends">
	<div class="profile">
		<div class="Pic"> A Picture<!--<img class="avatar" v-bind:src="activelook">--></div>
		<div class="Desp">A Description</div>
	</div>
	<div class="search">
    <div v-bind:class="{ active: searchActive }">
      <icon name="search"></icon>
      <input
        id="searchBar"
        type="text"
        v-model="searchTerm"
        @focus="searchActive = true"
        @blur="searchActive = false"
      />
    </div>
	<Friend class="user"
      v-for="(friend, i) in sortedFriends"
      :key="i"
      v-bind:friend="friend"
    >
	</Friend>
	</div>
  </div>

</template>

<style scoped>
.user{
	border: 3px solid black;
}
.friends{
	position: absolute;
	width: 1200px;
	height: 600px;
	/* border: 3px solid blue; */

}
.profile{
	position: absolute;
	width: 600px;
	height: 600px;
	background-color: black;
	/* border: 3px solid red; */
}
.search{
	position: absolute;
	width: 600px;
	height: 1200px;
	left: 600px;
	/* border:3px solid green; */
}
.Pic{
	position: relative;
	width: 200px;
	height: 200px;
	text-align: center;
	background-color: grey;
	margin: 75px;
	left: 150px;
	/* border: 3px solid violet; */
}

.avatar{
	max-height: 100%;
	max-width: 100%;
}

.Desp{
	position: relative;
	width: 200px;
	height: 200px;
	text-align: center;
	background-color: grey;
	/* border:3px solid green; */
	margin-left: 225px;
}
</style>

<script>
import Friend from './FList';
import image1 from './qPics/Abs.jpg';
import image2 from './qPics/Madmaw.png';
import image3 from './qPics/Taskman.jpg';

export default {
	name: 'friendsList',
	data() {
		return {
			FacePage: '',
			searchActive: false,
			searchTerm: '',
			activelook: '',
			friends: [
				{
					idnum: 1,
					name: {
						first: 'Channa',
						last: 'Chultz',
					},
					FacePage: image1,
					online: true
				},
				{
					idnum: 2,
					name: {
						first: 'Kita',
						last: 'Michele-Schultz',
					},
					FacePage: image2,
					online: false
				},
				{
					idnum: 3,
					name: {
						first: 'Chico',
						last: 'Dog',
					},
					FacePage: image3,
					online: true
				},
				{
					idnum: 4,
					name: {
						first: 'Datt',
						last: 'Mark'
					},
					online: true
				}
			]
		}
	},
	methods:{
		ShowActive(Friend){
			activelook: Friend.FacePage
		}
	},
	computed: {
		sortedFriends: function() {
			let sorted = []
			if (this.searchTerm.length > 0) {
				this.friends.forEach(friend => {
					const name = friend.name.first.toLowerCase() + ' ' + friend.name.last.toLowerCase()
					if (name.indexOf(this.searchTerm.toLowerCase()) > -1) {
						sorted.push(friend)
					}
				})
			} else {
				return this.friends
			}
			return sorted
		}
	},
	components: {
		Friend: Friend
	}
}
</script>



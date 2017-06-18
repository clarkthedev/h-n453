<template>
	<div class="wrapper">
<!-- 		<table border="1" width="100%">
			<thead>
			<tr>
				<th>No</th>
				<th>Name</th>
			</tr>
			</thead>
			<tbody>
				<tr v-for="(branch,key) in branches">
					<td>{{key}}</td>
					<td>{{branch.location}}</td>
					<td> edit </td>
					<td> delete </td>
				</tr>
			</tbody>
		</table> -->

		<button @click="fb"> login </button>
		<button @click="logout"> logout </button>
		<button @click="ccheck"> check </button>

		<fieldset>
		<legend>add menu</legend>
		<form v-on:submit.prevent="addMenu">
			<div>
				 <input v-model="newMenu.mName" type="text" placeholder="Name">
			</div>
			<div>
				 <textarea v-model="newMenu.mDesc" name="" id="" cols="30" rows="10" placeholder="desc"></textarea>
			</div>
			<div>
				<input type="text" placeholder="price"
				 v-model="newMenu.mPrice">
			</div>
			<div>
				<select v-model="newMenu.mCategory" >
					<option v-for="category in categories" :value="category.value">{{category.value}}</option>
				</select>
			</div>
			<div>
				<input type="file"  @change="mUpload">
				<input type="hidden" value="" v-model="newMenu.mPath">
			</div>
			<button type="submit"> wew </button>
		</form>
		</fieldset>
		<table border="1" width="100%">
			<thead>
			<tr>
				<th>Name</th>
				<th>Desc</th>
				<th>Category</th>
				<th>Price</th>

			</tr>
			</thead>
			<tbody>
				<tr v-for="(food, key) in menu">
					<td>{{food.mName}}</td>
					<td>{{food.mDesc}} </td>
					<td>{{food.mCategory}} </td>
					<td>{{food.mPrice}}</td>
					<td>{{food.mPath}}</td>
					<td><button @click="removeMenu(food)"> Delete </button> </td>
				</tr>
			</tbody>
		</table>
		<div id="imageGallery"> </div>
	</div>
</template>
<script>

import {db} from '../firebase';
import {sb} from '../firebase';
import {ah} from '../firebase';
import {fb} from '../firebase';
var provider = new fb.auth.FacebookAuthProvider();
var selectedFile,user;
export default{
	firebase: {
		branches: db.ref('branches'),
		menu : db.ref('menu')
	},
	data(){

		return{

			newMenu: {
			imgArr: [],
			mImg : "",
			mName : "",
			mDesc : "",
			mPrice : "",
			mPath: "",
			mCategory : ""
			},
			categories: 
			[
				{value : "Rice Dishes"},
				{value: "Entree / Main Dish"},
				{value: "Noodles and Soup"},
				{value: "drinks"}
			 ]
		}

	},
	methods:{
		ccheck(){
			let arr = ""
			var query = db.ref('menu/').orderByKey();
			query.once("value").then(function(snapshot){
    		snapshot.forEach(function(childSnapshot){
    			var childData = childSnapshot.val();
				var starsRef = sb.refFromURL('https://firebasestorage.googleapis.com/v0/b/hainanese-delights.appspot.com/o/'+childData.mPath);
				starsRef.getDownloadURL().then(function(url) {
					arr += url;
				})  			 
			});

		});
	}
		,
		fb(){




			fb.auth().signInWithPopup(provider).then(function(result) {
			provider.addScope('user_birthday').setCustomParameters({
		  'display': 'popup'
			
			});
			  var token = result.credential.accessToken;
			  user = result.user;
			  console.log(user.email)
			 	
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...

			});


		},
		logout(){
			fb.auth().signOut();
			user.email = ""
		},
		mUpload(event){
			selectedFile = event.target.files[0];
			
		},
		addMenu() {	

	
	
			var filename = selectedFile.name;	
			var storageRef = sb.ref().child('menuImages/'+ filename);
			var uploadTask = storageRef.put(selectedFile);

			// storageRef.getDownloadURL().then(function(url) {
			// 	  console.log("success")

			// });
			console.log(storageRef)
			this.newMenu.mPath = "menuImages/"+filename		
			db.ref('menu').push(this.newMenu);
			this.newMenu.mName = ''
			this.newMenu.mDesc = ''
			this.newMenu.mPrice = ''

		},
		removeMenu(menu){
			alert(menu)
 			db.ref('menu').child(menu['.key']).remove()
		}
	}
}

  		
  	
</script>

<style>
	#imageGallery img{
		height: 10px;
		width: 10px
	;}
</style>
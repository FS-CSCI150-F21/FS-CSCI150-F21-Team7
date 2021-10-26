export function createUser(username, password, firstname, lastname, birthday, email){
    return {
    	username : {
    		"account": {
    			"password": password,
    			"email": email,
    			"firstname": firstname,
    			"lastname": lastname,
    			"birthday": birthday,
    			"bio": "",
    			"profilepicture": "",
    			"accountdate": ""
    		},
            "level": {
                "level": 0,
                "levelprogress": 0
            },
            "avatar": {
                "head": {
                    "shape": "",
                    "eye": "",
                    "ear": "",
                    "mouth": "",
                    "nose": "",
                    "hat": "",
                    "glasses": ""
                },
                "body": {
                    "shape": "",
                    "shirt": "",
                    "bottom": "",
                    "shoe": ""
                },
                "pose": "",
                "background": ""
            },
            "inventory": {
                "head": {
                    "hair": null,
                    "hat": null,
                    "glasses": null
                },
                "body": {
                    "shirt": null,
                    "bottom": null
                },
                "pose": null,
                "background": null
            },
            "tasks": null,
            "friends": {
                "friendlist": null,
                "blocked": null
            }
        
    	}
    }
};


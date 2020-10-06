{
	"name": "keyListener",
	"displayName": "keyListener",
	"version": 1,
 	"definition": "svykeylistener/keylistener/keylistener.js",
	"libraries": [],
	"model":
	{		
    	"callbacks" : {"type":"callback[]", "pushToServer": "deep", "elementConfig": {"pushToServer": "deep"} ,"initialValue": [], "tags": { "scope" :"private" }}
 	},
 	"api":
 	{
	   	"addKeyListener": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"callbackKey",
					"type":"string"
				},
				{
					"name":"callback",
					"type":"function"
		        },
		        {
					"name":"clearCB",
					"type":"boolean",
					"optional": true
		        },
		        {
					"name":"delay",
					"type":"int",
					"optional": true
				},{
					"name":"restrictPattern",
					"type":"string",
					"optional": true
				}
			]
		},
		"removeKeyListener":
		{
			"returns":"boolean",
			"parameters":
		    	[
			    	{
						"name":"callbackKey",
						"type":"string"
					}
				]
		}
 	},
 	"types": {
	  "callback": {
	  		"callbackKey": "string",
	  		"callback": "function",
	  		"isRunning": "int",
	  		"delay": "int",
	  		"restrictPattern": "string"
	  }
	}
}
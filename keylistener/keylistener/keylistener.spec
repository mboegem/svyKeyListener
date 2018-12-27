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
		        }
			]
		},
		"getCallback":
		{
			"returns":"function",
			"parameters":
		    	[
			    	{
						"name":"elementId",
						"type":"runtimecomponent"
					}
				]
		},
		"removeKeyListener":
		{
			"returns":"boolean",
			"parameters":
		    	[
			    	{
						"name":"elementId",
						"type":"runtimecomponent"
					}
				]
		}
 	},
 	"types": {
	  "callback": {
	  		"callbackKey": "string",
	  		"callback": "function"
	  }
	}
}
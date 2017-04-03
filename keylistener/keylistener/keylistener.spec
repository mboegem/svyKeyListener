{
	"name": "keyListener",
	"displayName": "keyListener",
	"version": 1,
 	"definition": "keylistener/keylistener/keylistener.js",
	"libraries": [],
	"model":
	{
    	"text": "string"
 	},
 	"api":
 	{
	   	"addKeyListener": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"elementId",
					"type":"runtimecomponent"
				},
				{
					"name":"callback",
					"type":"function"
		        }
			]
		}
 	}
}
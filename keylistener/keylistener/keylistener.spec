{
	"name": "keyListener",
	"displayName": "keyListener",
	"version": 1,
 	"definition": "svykeylistener/keylistener/keylistener.js",
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
		},
			"addKeyListenerInterval": 
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
		        },		        
				{
					"name":"interval",
					"type":"number"
		        }
			]
		}
 	}
}

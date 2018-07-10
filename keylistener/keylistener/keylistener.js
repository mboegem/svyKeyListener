angular.module('keyListener',['servoy'])
.factory("keyListener",function($services,$window,$timeout) 
{
	var scope = $services.getServiceScope('keyListener');	
	return {
		addKeyListener: function(callbackKey,callback) {
			if (!scope.model.callbacks) scope.model.callbacks = [];
			scope.model.callbacks.push({'callbackKey': callbackKey, 'callback':callback});
		},
		getCallback: function(callbackKey)
		{
			for (var i = 0; i < scope.model.callbacks.length; i++)
			{
				var c = scope.model.callbacks[i];
				if (c.callbackKey == callbackKey) return c.callback;
			}
			return null;
		}
	}
}).directive('keylistener', function($window, $services, keyListener) {  
    return {
      restrict: 'A',
      controller: function($scope, $element, $attrs) {
    	  $element.keyup(function() {
    		  var callback = keyListener.getCallback($attrs.keylistener);
    		  if (callback)
    		  {
    			  $window.executeInlineScript(callback.formname, callback.script,[$element.val()]);
    		  }
			})   	  
      }
    };
  })
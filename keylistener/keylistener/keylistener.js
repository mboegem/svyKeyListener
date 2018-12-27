angular.module('keyListener', ['servoy']).factory("keyListener", function($services, $window, $timeout) {
		var scope = $services.getServiceScope('keyListener');
		
		
		function removeKeyListener(callbackKey) {
			var isRemoved = false;
			// it may remove more than one element
			for (var i = 0; scope.model.callbacks && i < scope.model.callbacks.length; i++) {
				var c = scope.model.callbacks[i];
				if (c.callbackKey == callbackKey) {
					scope.model.callbacks.splice(i, 1);
					i--;
					isRemoved = true;
				}
			}
			return isRemoved ;
		}
		
		return {
			addKeyListener: function(callbackKey, callback, clearCB) {
				if (!scope.model.callbacks) scope.model.callbacks = [];
				if (clearCB) {
					removeKeyListener(callbackKey);
				}
				if (!scope.model.callbacks) scope.model.callbacks = [];
				scope.model.callbacks.push({ 'callbackKey': callbackKey, 'callback': callback });
			},
			getCallback: function(callbackKey) {
				for (var i = 0; i < scope.model.callbacks.length; i++) {
					var c = scope.model.callbacks[i];
					if (c.callbackKey == callbackKey) return c.callback;
				}
				return null;
			},
			removeKeyListener: function(callbackKey) {
				return removeKeyListener(callbackKey);
			}
		}
	}).directive('keylistener', function($window, $services, keyListener, $utils) {
		return {
			restrict: 'A',
			controller: function($scope, $element, $attrs) {
				$element.keyup(function(event) {
					var callback = keyListener.getCallback($attrs.keylistener);
					if (callback) {
						$window.executeInlineScript(callback.formname, callback.script, [$utils.createJSEvent(event, "keyup"), $element.val(), event.keyCode, event.altKey]);
					}
				})
			}
		};
	})
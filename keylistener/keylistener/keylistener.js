angular.module('keyListener', ['servoy']).factory("keyListener", function($services, $window, $timeout) {
		var scope = $services.getServiceScope('keyListener');
		return {
			addKeyListener: function(callbackKey, callback, clearCB) {
				if (!scope.model.callbacks) scope.model.callbacks = [];
				if (clearCB) {
					scope.model.callbacks = [];
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
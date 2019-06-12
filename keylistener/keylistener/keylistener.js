angular.module('keyListener', ['servoy']).factory("keyListener", function($services, $window, $timeout, $log) {
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
				for (var i = 0; scope.model.callbacks && i < scope.model.callbacks.length; i++) {
					var c = scope.model.callbacks[i];
					if (c.callbackKey == callbackKey) return c.callback;
				}
				return null;
			},
			removeKeyListener: function(callbackKey) {
				return removeKeyListener(callbackKey);
			}
		}
	}).directive('keylistener', function($window, $services, keyListener, $utils, $log) {
		return {
			restrict: 'A',
			controller: function($scope, $element, $attrs) {
				$element.keyup(function(event) {
					handleKeyEvent(event);
				}),
				$element.keydown(function(event) {
					if (event.keyCode === 20) {
						// handle caps lock keyevent exceptions:
						// ON in Chrome, ON/OFF in Firefox
						handleKeyEvent(event);
					}
				})
				
				function handleKeyEvent(event) {
					var callback = keyListener.getCallback($attrs.keylistener);
					if (callback) {
						var input;
						var value;
						var capsLockEnabled = false;
						if ($element.prop("tagName") == "INPUT") {
							input = $element;
						} else {
							var inputField = $element.find('input');
							if (inputField.length == 1) {
								input = inputField
							} else {
								$log.error("Cannot resolve input field for keylistener " + $attrs.keylistener);
								input = $element;
							}
						}
						
						if(event.getModifierState) {
							capsLockEnabled = event.getModifierState("CapsLock")
						} else {
							var oriEvent = event.originalEvent;
							if(oriEvent.getModifierState) {
								capsLockEnabled = oriEvent.getModifierState("CapsLock");
							}
						}
					    var jsEvent = $utils.createJSEvent(event, 'action'); 
						$window.executeInlineScript(callback.formname, callback.script, [input.val(), jsEvent, event.keyCode, event.altKey, event.ctrlKey, event.shiftKey, capsLockEnabled]);
					}
				}
			}
		};
	})
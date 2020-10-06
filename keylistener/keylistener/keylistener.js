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
			return isRemoved;
		}

		return {
			addKeyListener: function(callbackKey, callback, clearCB, delay, restrictPattern) {
				if (!scope.model.callbacks) scope.model.callbacks = [];
				if (clearCB) {
					removeKeyListener(callbackKey);
				}
				if (!scope.model.callbacks) scope.model.callbacks = [];
				if (!delay) {
					delay = 5000;
				}
				scope.model.callbacks.push({ 'callbackKey': callbackKey, 'callback': callback, 'delay': delay, 'restrictPattern': restrictPattern, 'isRunning': false });
			},
			getCallback: function(callbackKey) {
				for (var i = 0; scope.model.callbacks && i < scope.model.callbacks.length; i++) {
					var c = scope.model.callbacks[i];
					if (c.callbackKey == callbackKey) return c;
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
					if (event.keyCode === 20 && navigator.appVersion.indexOf("Mac") != -1) {
						// handle caps lock keyevent exceptions on Mac:
						// keydown is triggered in case of toggle to ON in Safari/Chrome, ON/OFF in Firefox
						// Windows does handle both ON/OFF in the keyup event
						handleKeyEvent(event);
					}
				})

				function handleKeyEvent(event) {
					var cb = keyListener.getCallback($attrs.keylistener);
					var callback = cb.callback
					if (callback) {
						if (callback.isRunning) return;
						callback.isRunning = true;
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

						if (event.getModifierState) {
							capsLockEnabled = event.getModifierState("CapsLock")
						} else {
							var oriEvent = event.originalEvent;
							if (oriEvent.getModifierState) {
								capsLockEnabled = oriEvent.getModifierState("CapsLock");
							}
						}
						var jsEvent = $utils.createJSEvent(event, 'action');
						setTimeout(function() {
								$window.executeInlineScript(callback.formname, callback.script, [input.val(), jsEvent, event.keyCode, event.altKey, event.ctrlKey, event.shiftKey, capsLockEnabled]);
								callback.isRunning = false;
								var restrictPattern = cb.restrictPattern;
								//if there is a restriction on the pattern, remove last typed character in the event if not matching.
								if (restrictPattern) {
									var reg = new RegExp(cb.restrictPattern);
									event.currentTarget.value = event.currentTarget.value.replaceAll(reg, '');
									// needed as some browsers will use autocomplete
									setTimeout(function() {
											event.currentTarget.value = event.currentTarget.value.replaceAll(reg, '');
										}, 500)
									setTimeout(function() {
											event.currentTarget.value = event.currentTarget.value.replaceAll(reg, '');
										}, 1000)
								}
							}, callback.delay)
					}
				}
			}
		};
	})
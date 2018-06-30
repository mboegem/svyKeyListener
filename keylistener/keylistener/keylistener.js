angular.module('keyListener', ['servoy']).factory("keyListener", function($services, $window, $timeout, $document) {
		return {
			addKeyListener: function(id, callback) {
				$timeout(function() {
						$('#' + id).keyup(function(event) {
							$window.executeInlineScript(callback.formname, callback.script, [$('#' + id).val(), event.keyCode, event.altKey]);
						})
					}, 200);
			},

			addKeyListenerInterval: function(id, callback, interval) {
				//setup before functions
				var typingTimer; //timer identifier
				var doneTypingInterval = interval == null ? 250 : interval; //time in ms, 250ms second for example
				var $input = $('#' + id);
				var e_code;
				//on keyup, start the countdown
				$input.on('keyup', function(event) {
						clearTimeout(typingTimer);
						e_code = event;
						typingTimer = setTimeout(doneTyping, doneTypingInterval);
					});

				//on keydown, clear the countdown
				$input.on('keydown', function() {
						clearTimeout(typingTimer);
					});

				//user is "finished typing," do something
				function doneTyping() {
					$window.executeInlineScript(callback.formname, callback.script, [$('#' + id).val(), e_code.keyCode, e_code.altKey]);
				}

			}

		}
	})
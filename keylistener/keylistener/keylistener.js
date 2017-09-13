angular.module('keyListener',['servoy'])
.factory("keyListener",function($services,$window,$timeout) 
{
	return {
		addKeyListener: function(id,callback) {
			$timeout(function(){
				$('#'+id).keyup(function(event) {
					$window.executeInlineScript(callback.formname,callback.script,[$('#'+id).val(), event.keyCode, event.altKey]);
				})
			},200);
		}
	}
})
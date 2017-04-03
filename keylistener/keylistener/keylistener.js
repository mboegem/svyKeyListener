angular.module('keyListener',['servoy'])
.factory("keyListener",function($services,$window,$timeout) 
{
	return {
		addKeyListener: function(id,callback) {
			$timeout(function(){
				$('#'+id).keyup(function() {
					$window.executeInlineScript(callback.formname,callback.script,[$('#'+id).val()]);
				})
			},200);
		}
	}
})
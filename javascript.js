/**
 * 
 */
function EditorViewer1__init() {
	var bodyEl = document.querySelector('.ed');
	var initialValue = bodyEl.innerHTML.trim();
	
	var viewer = new toastui.Editor.factory({
		el: bodyEl,
		initialValue: initialValue,
		viewer: true,
		
	});
	
}

EditorViewer1__init();

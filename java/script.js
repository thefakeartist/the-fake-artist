

function.showPopup (){
	var popup = document.getElementsByTagName('popup');
	popup.classlist.add ('show');
}
function.hidePopup (){
	var popup = document.getElementsByTagName('popup');
	popup.classlist.remove ('hide');
}
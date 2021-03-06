// JavaScript code belongs here

// Close dropdown when we click somewhere else on screen
window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		var drop = document.getElementsByClassName("dropdown-content");
		for (let i in drop) {
			if (drop[i].classList.contains('show')) {
				drop[i].classList.remove('show');
			}
		}
	}
}

/* Customize Officer Module */
function mod_officers() {
	// Get an array of officers
	var officers = document.getElementById("module_officers").getElementsByClassName("pod");
	for (let i in officers) {
		// Update the officer's pod
		mod_officers_updatePod(officers[i]);
	}
} function mod_officers_updatePod(pod) {
	// Get the information for the officer
	var officer = mod_officers_parseInfo(pod);
	// Update the HTML inside the pod
	pod.innerHTML = "<table class='ieee_officer'>" + 
		"<tr><td colspan=2><h1>" + officer[0] + "</h1></td></tr>" +
		"<tr><td class='photo_profile'><img src=" + officer[1] + " /></td><td class='about'>" + officer[2] + "</td></tr>" + 
		"</table>";
	// Make the pod visible as an inline-block element
	pod.style.display = "inline-block";
} function mod_officers_parseInfo(pod) {
	// Initialize info array with three blank strings
	var info = ["","",""];
	// Get name of IEEE officer
	info[0] = pod.getElementsByClassName("pod-header-text")[0].innerHTML;
	// Get profile photo of IEEE Officer (and set image size to square of size 150)
	info[1] = pod.getElementsByTagName("img")[0].src.split("?")[0].concat("?cover=1&gravity=north&s=150");
	// Get "About" text for IEEE Officer
	info[2] = mod_officers_parseInfo_about(pod);
	// Return info array
	return info;
	
} function mod_officers_parseInfo_about(pod) {
	// This could be one line of code, but it would be a very long line
	var podBody = pod.getElementsByClassName("pod-body")[0];
	var table = podBody.getElementsByTagName("table")[0].getElementsByTagName("table")[0];
	var cell = table.getElementsByTagName("tr")[1].getElementsByTagName("td")[0];
	// Return text inside cell
	return cell.innerHTML;
}

/* Initiaize modules */
function initialize() {
	mod_officers();
}

/* Open dropdown menu */
function dropdown(id) {
    document.getElementById(id).classList.toggle("show");
	
}
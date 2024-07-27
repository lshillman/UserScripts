// ==UserScript==
// @name     Flickr: bulk change upload date to date taken in organizr
// @version  1
// @match    https://www.flickr.com/photos/organize/*
// @grant    none
// ==/UserScript==

function setDateTime() {
	if (document.querySelector("#one_photo_edit_pop")) {
		document.querySelector("#one_photo_goto_next").checked = true;
		if (document.querySelector("#one_photo_time_taken_exact").value != "") {
			observer.disconnect();
			document.querySelector("#one_photo_date_posted_exact").value = document.querySelector("#one_photo_date_taken_exact").value;
			
			document.querySelector("#one_photo_time_posted_exact").value = document.querySelector("#one_photo_time_taken_exact").value;
			
			if (document.querySelector("#one_photo_next_link").style.visibility != "hidden") {
				observer.observe(document.querySelector('#one_photo_img_div'), {
				  childList: true,
				  subtree: true
				});
			}
			
			document.querySelector("#one_photo_save").disabled = false;
			document.querySelector("#one_photo_save").click();
		}
	}
}

function appendControl() {
	if (document.querySelector("#one_photo_mat_dates")) {
		controlHelper.disconnect();
		let changeDatesHTML = `<style>
		#change-dates-div {
			border: 2px solid red;
			padding: 10px 10px 0 10px;
			margin-top: 10px;
		}
		#change-all-dates {
			color: red;
		}
		#change-all-dates:hover {
			color: #fff;
			background-color: red;
		}
		</style>
		<div id="change-dates-div"><b>Bulk change upload dates to date taken</b><p>Make sure you're looking at the first photo you want changed, and then <a href="#" id="change-all-dates">click here to change dates</a> on this and all following images.</p></div>`;	
		document.querySelector("#one_photo_mat_dates").insertAdjacentHTML("beforeend", changeDatesHTML);
    document.querySelector("#change-all-dates").addEventListener("click", () => setDateTime());
	}
}

let observer = new MutationObserver(setDateTime);

setDateTime();

let controlHelper = new MutationObserver(appendControl);
controlHelper.observe(document.querySelector('body'), {
	childList: true,
	subtree: true
});
const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailhelp = document.querySelector("#emailhelp")
const password = document.querySelector("#password")
const passwordhelp = document.querySelector("#passwordhelp")

form.addEventListner("Submit", (event) => {
	event.PreventDefault()
	if (email.value === "" [] password.value === "") {
		if (email.value === "")
			{emailhelp.inerText = "Por favor, completar esta información"}
		if (password.value === "")
			{passwordhelp.inerText = "Por favor, completar esta información"}
	} else {
		form.submit ();}
})
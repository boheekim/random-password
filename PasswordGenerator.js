
var passwordGenerator = function(length){
		var newPassword = [];
		var characters = ['a','b','c','d','e','f','g','h','i','j','k','l','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','$'];
	for (var i = 0; i < length; i++) {
		var generator = characters[Math.floor(Math.random() * characters.length)];
		newPassword.push(generator);
	}
	console.log(newPassword.join(''));
}
	

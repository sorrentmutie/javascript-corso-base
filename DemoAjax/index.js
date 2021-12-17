document.getElementById("callAPI").addEventListener(
    "click", function(){
       $.getJSON("https://randomuser.me/api", function(data){
            var person = data.results[0];
            console.log(person);
            var firstName = person.name.first;
            var lastName = person.name.last;
            var imageUrl = person.picture.large;
            console.log(firstName);
            console.log(lastName);
           $("#person").append(firstName + " " + lastName);
           $("#image").attr("src", imageUrl);
       });
    }
);
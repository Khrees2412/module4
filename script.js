/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

var names = ["Yaakov", "John", "Jen", "Jason",
             "Paul", "Frank", "Larry", "Paula",
             "Laura", "Jim"];

names.forEach(name => {
  name.charAt(0).toLowerCase() === "j"
   ? byeSpeaker(name) 
   : helloSpeaker(name)
})
/*
for (name = 0; name < names.length; name++){
  if (name.startsWith("j" || "J")){
    //byeSpeaker()
    console.log("J name ")
  }
  else{
    console.log("other")
  }
}
*/
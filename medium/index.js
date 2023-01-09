var prompt = prompt("How are you")

if (prompt.toUpperCase() == prompt) {
    console.log('shouting')
}

else if (prompt.toLowerCase() == prompt) {
    console.log('whispering')
}

else {
    console.log('talking normally')
}
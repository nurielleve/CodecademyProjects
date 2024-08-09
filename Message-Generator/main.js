let DataArray = ["swimming", "dancing", "biking", "walking", "running", "painting", "drawing", "watching tv", 
"playing games", "skateboarding", "horse backriding"];

const messageGenerator = () => {
    let activity = DataArray[Math.floor(Math.random() * 10)];
    console.log("One activity you can do is " + activity + ".");
}

messageGenerator();
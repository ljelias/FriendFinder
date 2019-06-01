//`apiRoutes.js` file should contain two routes:
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendlist = require('../data/friends.js');

// Routes


// Displays all characters
app.get("/api/friends", function(req, res) {
      return res.json(friendlist);
});
  
//handle incoming survey results and find a match
app.post("/api/friends", function(req, res) {
    const newFriend = {
        friendName: req.body.newName,
        scores: req.body.ansArray
    }
    friendlist.push(newFriend);
    res.send(newFriend);
/*
//compare the current user's scores to scores arrays of people in allfriends array 
//Add up the differences (absolute values) to calculate the `totalDifference`.

for (let j=0; j<friendlist.length; j++) {
    let arr1 = newUser.ansArray;
    let arr2 = friendlist[j].scores;
    let totalDifference = 0;

    for(var i=0; i< arr1.length; i++) {
        let diff[i] = arr1[i] - arr2[i];
        totalDifference += Math.abs(diff[i]);
        return totalDifference;
    }
}
after finding the current user's most compatible friend, display the result 
*/
});
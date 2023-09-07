/// Returns the current view Students or Academic based on the user signed in
module.exports.getView = () => {
  // fill in
  console.log("get view");
  
  return {
    students: false,
    academics: true
  }
}

///function logs user out of the system
/// returns true/false based on success of the activity
module.exports.logout = () => {
    // fill in
    console.log("log out");
    return true;
}

///function logs user in to the system
/// returns true/false based on success of the activity
module.exports.login = () => {
    // fill in
    console.log("log in");
    return true;
}
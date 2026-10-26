

require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Loop through each array of usernames
  for (const userArray of args) {
    combinedObject.users = [
      ...combinedObject.users,
      ...userArray
    ];
  }

  // Add today's date in M/d/yyyy format
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  combinedObject.merge_date = Date.today().toString('7/6/2026');

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
var getUser = (id, callback) => {
  var user = {
    name : 'Taher',
    id: id
  };
  callback(user);
};

getUser(31,(UserObject) => {
  console.log(UserObject);
});

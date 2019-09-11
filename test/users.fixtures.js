function makeUsersArray() {
    return [
      {
        id: 1,
        date_created: '2019-08-06T06:42:52.615Z',
        fullname: 'Name 1',
        username: 'name1@email.com',
        password: 'secret',
        nickname: 'N1'
      },
      {
        id: 2,
        date_created: '2019-05-05T16:28:32.615Z',
        fullname: 'Name 2',
        username: 'name2@email.com',
        password: 'secret',
        nickname: 'N2'
      }
    ]
}
  
module.exports = {
    makeUsersArray
}

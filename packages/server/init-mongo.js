db.createUser(
  {
    user: 'geckos',
    pwd: 'password',
    roles: [
      {
        role: 'readWrite',
        db: 'geckos'
      }
    ]
  }
)
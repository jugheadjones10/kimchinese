const { createUser } = require('../db/create-user.js');

test('user creation with words', async () => {
  await createUser(["语重心长", "狂风暴雨"], "dick")
});

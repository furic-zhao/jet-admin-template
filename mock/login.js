export const Login = (req, res) => {
  const {
    password,
    userName
  } = req.body;
  if (password === '888888' && userName === 'admin') {

    const userInfo = {
      "id": "155",
      "avatar": 'https://avatars0.githubusercontent.com/u/9346030?s=460&u=b3582981981df49b355ed93c236344e67821dd69&v=4',
      "name": "admin",
      "nickName": "furic"
    }

    res.send({
      errno: 0,
      msg: '',
      data: {
        "userInfo": userInfo,
        "clientToken": userInfo.id + new Date() * 1
      }
    })
    return
  }
  res.send({
    errno: 401,
    msg: '用户名或密码错误',
    data: {}
  })
}

export default {
  Login
}

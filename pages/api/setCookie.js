const cookie = require('cookie')

export default async (req, res) => {
  const request_config = res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', response.data.access_token, {
      httpOnly: true,
      secure: false, //process.env.NODE_ENV !== 'development',
      maxAge: 600 * 60,
      sameSite: 'strict',
      path: '/',
    }),
  )
  request_config
}

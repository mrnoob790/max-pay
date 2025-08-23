export default function handler(req, res) {
  const cookie = req.headers.cookie || '';
  const match = cookie.match(/tracking_id=([a-z0-9]+)/);

  if (match) {
    res.status(200).send(`Last Cookie ID: ${match[1]}`);
  } else {
    res.status(200).send('No Cookie Found');
  }
}

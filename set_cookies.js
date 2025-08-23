export default function handler(req, res) {
  const id = Math.random().toString(36).substring(2, 10);
  res.setHeader('Set-Cookie', `tracking_id=${id}; Path=/; HttpOnly; Secure; SameSite=None`);
  res.status(200).send(`Cookie set with ID: ${id}`);
}

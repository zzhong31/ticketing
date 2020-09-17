import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'pasword' })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'testtest.com', password: 'pasword' })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({ email: 'testtest.com', password: 'p' })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com' })
    .expect(400);

  return request(app)
    .post('/api/users/signup')
    .send({ password: 'asdlfkjasfdlkjs' })
    .expect(400);
});

it('disallows dupe emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'pasword' })
    .expect(201);

  return request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'pasword' })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'pasword' })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});

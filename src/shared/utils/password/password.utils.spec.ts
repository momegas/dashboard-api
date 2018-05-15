import { PasswordUtils } from './password.utils';
import Config from '../../../config';
import * as bc from 'bcrypt';

describe('PasswordUtils', () => {
  it('should hash password and be able to compare it', async () => {
    const passWord = 'testPassword';
    const hash = await PasswordUtils.hash(passWord);
    const result = await PasswordUtils.compare(passWord, hash);
    expect(result).toBeTruthy();
  });
});

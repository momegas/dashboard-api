import Config from '../../../config';
import * as bc from 'bcrypt';

export class PasswordUtils {
  static async hash(pass: string): Promise<string> {
    return await bc.hash(pass, Config.encryption.saltRounds);
  }

  static async compare(passToCompare: string, hash: string): Promise<boolean> {
    return await bc.compare(passToCompare, hash);
  }
}

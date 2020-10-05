import { containsUppercase } from './containsUppercase';

const errorMessage = 'Must include at least one uppercase letter';

describe('Validator containsUppercase::', () => {
  it('should return undefined if the string contains at least one uppercase character', () => {
    expect(containsUppercase('QQQQQQ')).toBeUndefined();
    expect(containsUppercase('Z1234567')).toBeUndefined();
    expect(containsUppercase('12345678Y')).toBeUndefined();
    expect(containsUppercase('0123xYz456W')).toBeUndefined();
  });

  it('should return an error if the input does not pass validation', () => {
    expect(containsUppercase('1234567')).toEqual(errorMessage);
    expect(containsUppercase('')).toEqual(errorMessage);
    expect(containsUppercase('-_!@#$%&*()[]{}<>|?/\\')).toEqual(errorMessage);
    expect(containsUppercase(null as any)).toEqual(errorMessage);
    expect(containsUppercase(undefined as any)).toEqual(errorMessage);
    expect(containsUppercase({} as any)).toEqual(errorMessage);
    expect(containsUppercase([] as any)).toEqual(errorMessage);
  });
});

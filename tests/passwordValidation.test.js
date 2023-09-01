const { validatePassword } = require('../utils/utils.js');

describe('Validation de mot de passe', () => {
  it('doit retourner true pour un mot de passe valide', () => {
    const password = 'MotDePasse123!';
    const result = validatePassword(password);
    expect(result).toBe(true);
  });

  it('doit retourner false pour un mot de passe invalide', () => {
    const password = 'abc123'; 
    const result = validatePassword(password);
    expect(result).toBe(false);
  });
});
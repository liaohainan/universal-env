// eslint-disable-next-line
(global as any).WXEnvironment = {
  platform: 'iOS'
};

// eslint-disable-next-line
const { select, isWeex, platform } = require('../index');

describe('platform', (): void => {
  it('weex environment value', (): void => {
    expect(isWeex).toBeTruthy();
  });
});

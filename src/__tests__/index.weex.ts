// eslint-disable-next-line
(global as any).WXEnvironment = {
  platform: 'iOS'
};

// eslint-disable-next-line
const { select, isWeex, platform } = require('../index');

describe('platform', (): void => {
  it('should use iOS WXEnvironment platform', (): void => {
    const selectOS = select({
      iOS: 'testiOS',
      Android: 'testAndroid',
      Web: 'testWeb'
    });

    expect(platform).toEqual('iOS');
    expect(selectOS).toEqual('testiOS');
  });

  it('weex environment value', (): void => {
    expect(isWeex).toBeTruthy();
  });
});

import { IMenuItemData } from '../../../../../../src/components/commons/menu/normalMenu/normalMenu.types';
import { convertToMenuItem } from '../../../../../../src/components/commons/menu/util/convertMenuItem';
import { getMenuItem } from '../../../../../../src/components/commons/menu/util/getMenuItem';

describe('convertMenuItem', () => {
  it('convert IMenuItemData Object to MenuItem', () => {
    const fakeChildrenData = [{ key: 'testChildren', label: 'testChildren' }];
    const fakeData: IMenuItemData = {
      key: 'test',
      label: 'test',
      children: fakeChildrenData,
    };

    const actual = convertToMenuItem(fakeData);

    const result = getMenuItem(
      fakeData.label,
      fakeData.key,
      undefined,
      fakeChildrenData.map(e =>
        getMenuItem(e.label, e.key, undefined, undefined, undefined),
      ),
      undefined,
    );

    expect(actual).toEqual(result);
  });
});

import { render, screen } from '@testing-library/react';
import WithLabel from '@components/commons/withLabel/withLabel';
import { IWithLabelProps } from '@components/commons/withLabel/withLabel.types';

describe('withLabel', () => {
  const renderWithLabel = (
    { label }: Omit<IWithLabelProps, 'children'>,
    childText: string,
  ) => {
    return render(
      <WithLabel label={label}>
        <div>{childText}</div>
      </WithLabel>,
    );
  };

  it('label을 전달한 children 컴포넌트와 함께 보여준다.', () => {
    const labelText = '라벨';
    const childComponentText = 'child';

    renderWithLabel({ label: labelText }, childComponentText);

    expect(screen.getByText('라벨')).toBeInTheDocument();
    expect(screen.getByText('child')).toBeInTheDocument();
  });
});

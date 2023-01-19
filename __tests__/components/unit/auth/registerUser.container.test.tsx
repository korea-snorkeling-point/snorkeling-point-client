import { render } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import RegisterUserContainer from '@components/unit/auth/register/registerUser.container';

describe('RegisterUserContainer', () => {
  const renderRegisterUserContainer = () => {
    return render(<RegisterUserContainer />, {
      wrapper: MemoryRouterProvider,
    });
  };

  it('', () => {
    renderRegisterUserContainer();
  });
});

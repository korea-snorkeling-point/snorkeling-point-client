import { render } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginContainer from '@components/unit/auth/login/login.container';

describe('LoginContainer', () => {
  const renderLoginContainer = () => {
    return render(<LoginContainer />, {
      wrapper: MemoryRouterProvider,
    });
  };

  it('', () => {
    renderLoginContainer();
  });
});

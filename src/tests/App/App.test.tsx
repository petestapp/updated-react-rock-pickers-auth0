import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../components/App/App';
import { useAuth0, Auth0ContextInterface } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = useAuth0 as jest.MockedFunction<typeof useAuth0>
describe("App", () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        name: 'Test User',
        email: 'test.user@email.com',
      },
      getAccessTokenSilently: jest.fn().mockResolvedValue('access_token'),
      getAccessTokenWithPopup: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithRedirect: jest.fn(),
      loginWithPopup: jest.fn(),
      logout: jest.fn(),
      isLoading: false,
      error: undefined,
    } as unknown as Auth0ContextInterface);
  });

  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/React Rock Pickers/i);
    expect(linkElement).toBeInTheDocument();
  });
})
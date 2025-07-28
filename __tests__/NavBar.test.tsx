import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '@/app/_components/NavBar';

// Simplify next/link for testing
jest.mock('next/link', () => ({ __esModule: true, default: (props: any) => <a {...props} /> }));

describe('NavBar', () => {
  it('toggles the mobile menu when clicking the burger icon', async () => {
    const user = userEvent.setup();
    const { container } = render(<NavBar />);

    const menuSelector = 'div.mt-4';
    expect(container.querySelector(menuSelector)).toBeNull();

    const button = screen.getByRole('button', { name: /toggle menu/i });
    await user.click(button);
    expect(container.querySelector(menuSelector)).toBeInTheDocument();

    await user.click(button);
    expect(container.querySelector(menuSelector)).toBeNull();
  });
});

import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const data = [
    { title: 'Home', href: '/freecodecamp__trafalgar-landing/', exact: 'true' },
    {
      title: 'Find a doctor',
      href: '/freecodecamp__trafalgar-landing/find-a-doctor',
    },
    { title: 'Apps', href: '/freecodecamp__trafalgar-landing/apps' },
    {
      title: 'Testimonials',
      href: '/freecodecamp__trafalgar-landing/testimonials',
    },
    { title: 'About us', href: '/freecodecamp__trafalgar-landing/about-us' },
  ];

  return (
    <NavigationStyled id='navbar'>
      <ul>
        {data.map(({ href, title }, index) => (
          <li key={index}>
            <NavLink
              to={href}
              exact
              activeClassName='currentLink'
              className='nav-link'
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  font-size: 18px;
  line-height: 18px;
  ${({ theme }) => theme.font.regular};
  color: '#1F1534';

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding: 0 20px;
    transition: all 0.3s ease-out;

    &:hover,
    &:active {
      color: #fc85ae;
    }
  }

  a {
    opacity: 0.5;
  }

  .currentLink {
    opacity: 1;
    ${({ theme }) => theme.font.bold};
  }
`;

export default Navigation;

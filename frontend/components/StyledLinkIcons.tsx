'use client';

import styled from 'styled-components';
import { usePathname} from 'next/navigation';
import Link from "next/link";

const SLink = styled(Link)`
    color: ${({ href, id }) => (href === id ? 'white' : 'black')};
    font-size: 1.3rem;
    height: 100%;
    padding: 8px;
    &:hover {
        color: #CCC;
    }
`;

const Div = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export function StyledLinkIcons(
    { children, href }:
    { children: React.ReactNode, href: string }
) {
    const path = usePathname();

    return (
        <SLink href={href} id={path}>
            <Div>
                {children}
            </Div>
        </SLink>
    )
}

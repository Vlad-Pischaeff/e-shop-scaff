'use client';

import styled from 'styled-components';
import { usePathname} from 'next/navigation';
import Link from "next/link";

const SLink = styled(Link)`
    color: white;
    text-shadow: ${({ href, id }) => (href === id ? "0 0 5px #FFF, 0 0 10px aqua, 0 0 15px aqua" : "")};
    font-size: 1.3rem;
    height: 100%;
    padding: 8px;
    &:hover {
        text-shadow: #FFF 0px 0px 5px, deeppink 0px 0px 10px, deeppink 0px 0px 15px, deeppink 0px 0px 20px, deeppink 0px 0px 30px, deeppink 0px 0px 40px, deeppink 0px 0px 50px, deeppink 0px 0px 75px;
    }
`;

const Div = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export function StyledLink(
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

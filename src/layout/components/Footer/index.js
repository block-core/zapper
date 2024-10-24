import React from 'react'
import {
   InnerContainer,
   StyledDescriptionText,
   StyledFooter,
   StyledIconButton,
   StyledLink,
} from './styled'
import { AppLogo } from '../../../shared/AppLogo'
import { GitHubLogoIcon } from '../../../assets/icons'

export const Footer = () => {
   return (
      <StyledFooter>
         <InnerContainer>
            <AppLogo />
            <StyledDescriptionText>
               <StyledLink
                  href="https://Angor.io/"
                  target="_blank"
                  rel="noreferrer"
               >
                  Angor.io
               </StyledLink>
            </StyledDescriptionText>
            <StyledIconButton
               href="https://github.com/block-core/zapper"
               target="_blank"
            >
               <GitHubLogoIcon />
            </StyledIconButton>
         </InnerContainer>
      </StyledFooter>
   )
}

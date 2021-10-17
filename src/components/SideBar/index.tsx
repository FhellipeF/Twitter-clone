import React from 'react';

import SticKBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';

import List from '../List';

import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles'

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>
            <SticKBox>

            <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion 
                            name= "Carlos Fhellipe"
                            nickname= "@CarlosFhll"
                        />,
                        <FollowSuggestion 
                            name= "Carlos Fhellipe"
                            nickname= "@CarlosFhll"
                        />,
                        <FollowSuggestion 
                            name= "Carlos Fhellipe"
                            nickname= "@CarlosFhll"
                        />
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
            </Body>
            </SticKBox>
        </Container>
    );
}
export default SideBar;
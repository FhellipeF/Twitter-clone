import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                 <EditButton outlined>Editar perfil</EditButton>
            
                <h1>Carlos Fhellipe</h1>
                <h2>@CarlosFhell</h2>

                <p>
                    alguma coisa <a href="#">link</a>
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Pará, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 16 de setembro de 1999
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>100</strong>
                    </span>
                    <span>
                        <strong>100</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
}

export default ProfilePage;
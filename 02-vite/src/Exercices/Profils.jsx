function Profils() {
    const profils = [
        {
            firstname: 'Jean',
            lastname: 'Dupont',
            avatar: 'https://i.pravatar.cc/150?u=toto',
            age: 36,
            socialMedia: ['TikTok', 'YouTube', 'Discord'],
            partner: false,
        },
        {
            firstname: 'Benoit',
            lastname: 'Legrand',
            avatar: 'https://i.pravatar.cc/150?u=titi',
            age: 53,
            socialMedia: ['TikTok', 'YouTube', 'Twitter'],
            partner: true,
        },
        {
            firstname: 'Micheline',
            lastname: 'Vachette',
            avatar: 'https://i.pravatar.cc/150?u=tata',
            partner: true,
            age: 71,
            socialMedia: ['TikTok'],
        },
        {
            firstname: 'Elisa',
            lastname: 'Vachette',
            avatar: 'https://i.pravatar.cc/150?u=tyty',
            partner: false,
            age: 19,
            socialMedia: [],
        },
    ]

    return (
        <div>
            <h2>Exercice Profils</h2>
            <div className="List-profil">
                <h3>Listing des utilisateurs du site</h3>
                <div className="profils">
                    {profils.map((profil) =>
                        <div className="profil">
                            <div className="infos">
                                <div className="relative">
                                    <img src={profil.avatar} alt="" />
                                    {profil.partner ? 
                                    <img className="partner" src="https://icones.pro/wp-content/uploads/2021/02/icone-etoile-jaune.png" alt="" /> 
                                    : 
                                    '' }
                                </div>
                                <div className="info">
                                    <span> {profil.firstname} {profil.lastname} </span>
                                    <span> {profil.age} ans. </span>
                                </div>
                            </div>
                            <p>{profil.socialMedia.length > 0 ? 'Réseaux Sociax' : 'Pas de réseaux sociaux'}</p>
                            <ul>
                                {profil.socialMedia.map((media, index) =>
                                    <li key={index}> <a href="">{media}</a> </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profils;

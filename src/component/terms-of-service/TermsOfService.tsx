import React from 'react';

const TermsOfService: React.FC = () => {
    const policySections = [
        {
            title: "1. Age Restrictions",
            content: `Amoria is intended for users aged 18 and above. By continuing to use the app, you confirm that you are at least 18 years old.`,
        },
        {
            title: "2. Nature of Content",
            content: `The app contains explicit conversations and erotic content. Users are responsible for their interaction with this content and agree to use it within the bounds of their personal preferences and applicable legal norms.`,
        },
        {
            title: "3. Content Generation and Resemblance to Real People",
            content: `Dialogues and character images in Amoria are generated using artificial intelligence. Any resemblance of characters to real people is purely coincidental and unintentional. The characters and their behavior are entirely virtual and not associated with real individuals.`,
        },
        {
            title: "4. Data Privacy",
            content: `We respect your privacy and take measures to protect your data. All information you provide in the app is processed in accordance with our Privacy Policy. We strongly recommend reviewing the Privacy Policy before using the app.`,
        },
        {
            title: "5. Use of Virtual Currency",
            content: `The app uses an internal currency, Amocoin (🪙), to access additional content. Purchases of virtual currency are final and non-refundable. We reserve the right to change the pricing of services available for virtual currency, as well as to add or remove features.`,
        },
        {
            title: "6. User Responsibilities",
            content: `Users are required to: <br/>
                - Use the app for personal purposes only. <br/>
                - Adhere to communication norms and respect other users. <br/>
                - Not distribute app content without the administration’s consent.`,
        },
        {
            title: "7. Limitation of Liability",
            content: `Amoria is not responsible for users' use of the app or for any consequences related to the use of app content. All content is provided \"as is\" without guarantees of specific results or effects.`,
        },
        {
            title: "8. Changes to Terms of Use",
            content: `Amoria reserves the right to change these Terms of Use at any time. We recommend regularly reviewing the terms to stay informed of updates. By continuing to use the app after changes are made, you accept the updated terms.`,
        },
    ];

    return (
        <div className="container mt-150" >
            <div className="section-title text-center mb-50">
                <h2 className="title style2">Terms of Use for Amoria App</h2>
                <p className="sec-text">
                    Welcome to the Amoria app. Before using our app, please carefully read these Terms of Use. By using
                    our app, you
                    agree to comply with these terms. If you do not agree with these terms, please stop using the app.
                </p>
            </div>

            <div className="policy-content">
                {policySections.map((section, index) => (
                    <div key={index} className="policy-section mb-30">
                        <h3 className="section-title">{section.title}</h3>
                        <p className="section-text" dangerouslySetInnerHTML={{__html: section.content}}/>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default TermsOfService;

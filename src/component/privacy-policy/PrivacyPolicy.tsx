import React from 'react';

const PrivacyPolicy: React.FC = () => {
    const policySections = [
        {
            title: "1. Data Collection",
            content: `We may collect and process the following information about users: <br/>
                - Personal Data: Information required for app functionality (e.g., Telegram user ID). <br>
                - Usage Data: Information about interactions with the app, including the number of messages, virtual currency purchases, interactions with characters, and gaming activities. <br>
                - Technical Data: Information about device type, IP address, and operating system to improve app performance.`,
        },
        {
            title: "2. Data Usage",
            content: `Amoria uses collected data for the following purposes: <br/>
                - Service Provision: To ensure the proper functioning of the app, including access to chats, characters, and virtual currency. <br>
                - Personalization: To tailor content to user preferences. <br>
                - App Improvement: To analyze and enhance the app's features and interface. <br>
                - Support and Security: To provide technical support, prevent fraud, and enhance security.`,
        },
        {
            title: "3. Data Storage",
            content: `We retain your data only as long as necessary to fulfill the purposes described in this Policy and in compliance with legal requirements. Data may be stored on secure servers with measures in place to protect your information from unauthorized access or loss.`,
        },
        {
            title: "4. Data Sharing",
            content: `We do not share your personal data with third parties except when necessary for: <br/>
                - Fulfilling obligations to you, such as processing payments through third-party services.<br/>
                - Compliance with legal requirements, such as requests from government authorities or court orders.<br/>
                - Ensuring the protection of user rights and the app’s security.`,
        },
        {
            title: "5. Data Security",
            content: `We implement measures to protect your information, including technical and organizational methods, to prevent unauthorized access, disclosure, alteration, or destruction of data. However, data transmission over the internet is not entirely secure, and we cannot guarantee complete security during transmission.`,
        },
        {
            title: "6. Use of Cookies",
            content: `Amoria may use cookies to collect information about app usage to enhance the user experience. Cookies help us analyze how you interact with the app and enable us to save user preferences.`,
        },
        {
            title: "7. Your Rights",
            content: `Under applicable law, you have the right to: <br/>
                - Access your information and request a copy. <br>
                - Rectify or delete the data we hold about you. <br>
                - Restrict or object to the processing of your data. <br>
                - Withdraw your consent for data usage if processing is based on consent.`,
        },
        {
            title: "8. Changes to the Privacy Policy",
            content: `We reserve the right to update this Privacy Policy. Updates take effect upon publication. We recommend regularly reviewing the Privacy Policy to stay informed about any changes.`,
        },
        {
            title: "9. Contact Us",
            content: `If you have questions about this Privacy Policy or wish to exercise your rights, please contact us via email: support@amoria.com.`,
        },
    ];

    return (
        <div className="container mt-150">
            <div className="section-title text-center mb-50">
                <h2 className="title style2">Amoria Privacy Policy</h2>
                <p className="sec-text">
                    At Amoria, we respect our users privacy and are committed to protecting personal information. This
                    Privacy Policy explains what data we collect, how we use it, and how we protect your information. By
                    using our app, you agree to the terms of this Privacy Policy.
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

export default PrivacyPolicy;

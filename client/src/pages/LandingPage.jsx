import { Link } from "react-router";


export default function LandingPage() {
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        <div className="landing-container">
            <section className="hero-section" aria-labelledby="main-heading">
                <div className="hero-content">
                    <h1 className="hero-heading" id="main-heading">Stay Connected with Your Social Circle</h1>
                    <p className="hero-subheading">Share moments, connect with friends, and discover new communities in a safe and welcoming environment.</p>
                    <div className="cta-buttons">
                        <Link to="/register" className="cta-button primary-cta">Join Free Today</Link>
                        <Link to="/login" className="cta-button primary-cta">Log into your account</Link>
                        <Link to="/catalog" className="cta-button secondary-cta">Check public posts</Link>
                    </div>
                </div>
            </section>

            <section className="features-section" aria-labelledby="features-heading">
                <h2 id="features-heading" className="sr-only">Key Features</h2>
                <div className="features-container">
                    <article className="feature-card" aria-labelledby="profile-heading">
                        <div className="feature-icon" aria-hidden="true">
                            <i className="fas fa-user-friends"></i>
                        </div>
                        <h3 id="profile-heading" className="feature-title">Personal Profiles</h3>
                        <p className="feature-description">Create your profile, share your story, and showcase your personality.</p>
                    </article>

                    <article className="feature-card" aria-labelledby="chat-heading">
                        <div className="feature-icon" aria-hidden="true">
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3 id="chat-heading" className="feature-title">Real-time Chat</h3>
                        <p className="feature-description">Stay in touch with instant messaging with friends and family.</p>
                    </article>

                    <article className="feature-card" aria-labelledby="groups-heading">
                        <div className="feature-icon" aria-hidden="true">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 id="groups-heading" className="feature-title">Friends</h3>
                        <p className="feature-description">Get in touch with your friends that share your passions and hobbies, from travel to music and beyond.</p>
                    </article>
                </div>
            </section>
        </div>

    </>
}
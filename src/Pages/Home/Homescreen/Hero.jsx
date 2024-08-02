import selfPortrait from "../../../images/selfPortraitNoBgCropped.png";

export default function HeroSection() {
    return (
        <section id="heroSection" className="heroSection">
            <div className="heroSectionContainer">
                <div className="heroSectionContent">
                    <p className="sectionTitle">Hey, I'm Taylor Wise</p>
                    <h1 className="heroSectionTitle">
                        <span className="heroSectionTitleColor">
                            Computer Science
                            <br />
                                Student
                        </span>
                    </h1>
                    <p className="heroSectionDescription">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                    </p>
                </div>
                <button className="btn btn-primary contactMe">Contact Me</button>
            </div>
            <div className="heroSectionImg">
                <img src={selfPortrait} alt="HeroSection" />
                
            </div>
        </section>

    );
}
import 'tailwindcss/tailwind.css';
import coffee from '../assets/images/icons/1.png'
import badge from '../assets/images/icons/2.png'
import good from '../assets/images/icons/3.png'
import cup from '../assets/images/icons/4.png'

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-home">
                <div className="hero"></div>
                <div className="text-left text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn bg-[#E3B577] rounded-none">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <img src={coffee} alt="" />
                    <span className="footer-title">Awesome Aroma</span>
                    <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                </div>
                <div>
                <img src={badge} alt="" />
                    <span className="footer-title">High Quality</span>
                    <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                </div>
                <div>
                <img src={good} alt="" />
                    <span className="footer-title">Pure Grades</span>
                    <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                </div>
                <div>
                <img src={cup} alt="" />
                    <span className="footer-title">Proper Roasting</span>
                    <p>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
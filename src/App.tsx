import {JSX} from "react";
import LinkButton from "./components/LinkButton";
import "./index.css";
import profileImage from "./assets/images/profile_pic.jpg";
import {FaInstagram, FaSpotify, FaApple, FaXTwitter} from "react-icons/fa6";

interface LinkItem {
    url: string;
    icon: JSX.Element;
    title: string;
}

const links: LinkItem[] = [
    {url: "https://x.com/bssmntuk", icon: <FaXTwitter/>, title: "X"},
    {url: "https://instagram.com/bssmntuk", icon: <FaInstagram/>, title: "Instagram"},
    {
        url: "https://music.apple.com/gb/playlist/bssmnts-playlist/pl.u-MDAWmWJCWrNppr0",
        icon: <FaApple/>,
        title: "Apple Music"
    },
    {
        url: "https://open.spotify.com/playlist/5dEjcZ5Sw5S6qfVQ3l6Qxs?si=midRW6HNS1Sq6dKSIl16ZQ",
        icon: <FaSpotify/>,
        title: "Spotify"
    },
];

export default function App() {
    return (
        <div className="container">
            <img
                src={profileImage}
                alt="Profile"
                className="profile-pic"
            />

            <h1>bssmnt</h1>

            {links.map((link, idx) => (
                <LinkButton key={idx} url={link.url} icon={link.icon} title={link.title} />
            ))}
        </div>
    );
}
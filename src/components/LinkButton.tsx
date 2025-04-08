import {JSX} from "react";

interface LinkButtonProps {
    url: string;
    icon: JSX.Element;
    title: string;
}

export default function LinkButton({ url, icon, title }: LinkButtonProps) {

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
            style={{
                padding: "1rem",
                margin: "0.25rem 0", // reduce spacing
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
            }}
        >
            {icon}
            {title}
        </a>
    );
}
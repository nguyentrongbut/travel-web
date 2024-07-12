const IconUser = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fontSize="25"
            className={`tabler-icon tabler-icon-user-x ${className}`}
            data-v-fbfdbc4f=""
        >
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"></path>
            <path d="M22 22l-5 -5"></path>
            <path d="M17 22l5 -5"></path>
        </svg>
    );
};

export default IconUser;

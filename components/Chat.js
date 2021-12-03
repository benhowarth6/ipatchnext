import Script from "next/script";

export default function Chat() {

    return (
        <>
            <Script src="https://static.cdn-apple.com/businesschat/start-chat-button/2/index.js"
                strategy="lazyOnload" />
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                className="relative flex-1 flex flex-col justify-center py-6 lg:px-0.5 text-center focus:z-10"
            >
                <div
                    className="apple-business-chat-banner-container"
                    data-apple-business-id="0fcea5c2-1c93-46a2-bf0c-5d896afb62f7"
                    data-apple-business-phone="+4401132469388"
                    data-apple-banner-cta="Have a question?"
                    data-apple-banner-context="Chat with a technician now."
                    data-apple-banner-scale="1"
                    data-apple-banner-text-color="rgb(17, 24, 39)"
                    data-apple-banner-icon-background-color="rgb(239, 239, 244)"
                    data-apple-banner-icon-color="rgb(0, 122, 255)"
                    data-apple-banner-orientation="horizontal"
                    data-apple-banner-font-family="Inter var"
                >
                </div>
            </div>
        </>
    );
}
import { useEffect } from "react";

const useJivoChatWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set the script source to the JivoChat widget
    script.src = "//code.jivosite.com/widget/OUY1IyVTtx";

    // Set the async attribute to load the script asynchronously
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script element when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useJivoChatWidget;

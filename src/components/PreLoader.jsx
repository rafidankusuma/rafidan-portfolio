import { useState, useEffect } from "react";
import Shuffle from "./Shuffle";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // hilang setelah 10 detik
    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    loading && (
      <div className="w-screen h-screen fixed flex items-center justify-center bg-black z-50">
        <Shuffle
          text="Website Portfolio"
          tag="div"                 // <--- gunakan ini agar jadi <div>
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        />
      </div>
    )
  );
};

export default PreLoader;

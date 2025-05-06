// ScrollText.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
  const sectionRef = useRef(null);
  const textsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // Animate each line
    textsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { color: "#888" },
        {
          color: "#fff",
          scrollTrigger: {
            trigger: section,
            start: `top+=${i * 100} center`,
            end: `top+=${(i + 1) * 100} center`,
            scrub: true,
          },
        }
      );
    });

    // Auto-scroll to next section after last text
    gsap.to(window, {
      scrollTo: { y: "#next-section", offsetY: 0 },
      duration: 1,
      scrollTrigger: {
        trigger: textsRef.current[textsRef.current.length - 1],
        start: "top center",
        end: "bottom center",
        scrub: true,
        once: true,
      },
    });
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-[300vh] flex flex-col justify-center items-center bg-black text-4xl font-bold"
      >
        {["Deliver brilliance.", "Deliver brilliance.", "Smash deadlines.", "Smash deadlines."].map(
          (text, idx) => (
            <p
              key={idx}
              ref={(el) => (textsRef.current[idx] = el)}
              className="transition-colors duration-500"
            >
              {text}
            </p>
          )
        )}
      </section>

      <section
        id="next-section"
        className="h-screen flex justify-center items-center bg-white text-black text-4xl"
      >
        Next Section
      </section>
    </>
  );
};

export default ScrollText;
